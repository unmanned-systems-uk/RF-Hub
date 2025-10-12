const express = require('express');
const router = express.Router();
const Equipment = require('../models/Equipment');
const { authenticateToken } = require('../middleware/auth');

// All routes require authentication
router.use(authenticateToken);

// ========================================
// EQUIPMENT CRUD
// ========================================

/**
 * GET /api/equipment
 * Get all equipment for the authenticated user
 */
router.get('/', async (req, res, next) => {
  try {
    const filters = {
      equipment_type: req.query.type,
      operational_status: req.query.status,
      is_primary: req.query.is_primary === 'true' ? true : undefined,
      is_portable: req.query.is_portable === 'true' ? true : undefined
    };

    const equipment = await Equipment.getAllByUserId(req.user.user_id, filters);
    
    res.json({
      equipment,
      count: equipment.length
    });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/equipment/stats
 * Get equipment statistics for the user
 */
router.get('/stats', async (req, res, next) => {
  try {
    const stats = await Equipment.getStatistics(req.user.user_id);
    res.json({ stats });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/equipment/suggestions
 * Get equipment suggestions based on current inventory
 */
router.get('/suggestions', async (req, res, next) => {
  try {
    const suggestions = await Equipment.getEquipmentSuggestions(req.user.user_id);
    res.json({ suggestions });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/equipment/frequency/:frequency
 * Search equipment by frequency (in MHz)
 */
router.get('/frequency/:frequency', async (req, res, next) => {
  try {
    const frequency = parseFloat(req.params.frequency);
    
    if (isNaN(frequency)) {
      return res.status(400).json({ error: 'Invalid frequency value' });
    }

    const equipment = await Equipment.searchByFrequency(req.user.user_id, frequency);
    
    res.json({
      frequency_mhz: frequency,
      equipment,
      count: equipment.length
    });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/equipment/:id
 * Get specific equipment by ID
 */
router.get('/:id', async (req, res, next) => {
  try {
    const equipment = await Equipment.getById(req.params.id, req.user.user_id);
    
    if (!equipment) {
      return res.status(404).json({ error: 'Equipment not found' });
    }

    res.json({ equipment });
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/equipment
 * Create new equipment
 */
router.post('/', async (req, res, next) => {
  try {
    const equipmentData = {
      user_id: req.user.user_id,
      ...req.body
    };

    // Validation
    if (!equipmentData.equipment_type || !equipmentData.model) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['equipment_type', 'model']
      });
    }

    const equipment = await Equipment.create(equipmentData);

    res.status(201).json({
      message: 'Equipment created successfully',
      equipment
    });
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/equipment/from-preset/:preset_id
 * Create equipment from a preset
 */
router.post('/from-preset/:preset_id', async (req, res, next) => {
  try {
    const equipment = await Equipment.createFromPreset(
      req.user.user_id,
      req.params.preset_id,
      req.body
    );

    res.status(201).json({
      message: 'Equipment created from preset successfully',
      equipment
    });
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/equipment/:id
 * Update equipment
 */
router.put('/:id', async (req, res, next) => {
  try {
    const equipment = await Equipment.update(
      req.params.id,
      req.user.user_id,
      req.body
    );

    if (!equipment) {
      return res.status(404).json({ error: 'Equipment not found' });
    }

    res.json({
      message: 'Equipment updated successfully',
      equipment
    });
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/equipment/:id
 * Delete equipment
 */
router.delete('/:id', async (req, res, next) => {
  try {
    const equipment = await Equipment.delete(req.params.id, req.user.user_id);

    if (!equipment) {
      return res.status(404).json({ error: 'Equipment not found' });
    }

    res.json({
      message: 'Equipment deleted successfully',
      equipment
    });
  } catch (error) {
    next(error);
  }
});

// ========================================
// EQUIPMENT PRESETS
// ========================================

/**
 * GET /api/equipment/presets/all
 * Get all equipment presets
 */
router.get('/presets/all', async (req, res, next) => {
  try {
    const filters = {
      equipment_type: req.query.type,
      manufacturer: req.query.manufacturer,
      search: req.query.search
    };

    const presets = await Equipment.getAllPresets(filters);
    
    res.json({
      presets,
      count: presets.length
    });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/equipment/presets/:id
 * Get specific preset by ID
 */
router.get('/presets/:id', async (req, res, next) => {
  try {
    const preset = await Equipment.getPresetById(req.params.id);
    
    if (!preset) {
      return res.status(404).json({ error: 'Preset not found' });
    }

    res.json({ preset });
  } catch (error) {
    next(error);
  }
});

// ========================================
// EQUIPMENT SETUPS
// ========================================

/**
 * GET /api/equipment/setups/all
 * Get all setups for the user
 */
router.get('/setups/all', async (req, res, next) => {
  try {
    const setups = await Equipment.getAllSetups(req.user.user_id);
    
    res.json({
      setups,
      count: setups.length
    });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/equipment/setups/:id
 * Get specific setup with equipment details
 */
router.get('/setups/:id', async (req, res, next) => {
  try {
    const setup = await Equipment.getSetupWithEquipment(
      req.params.id,
      req.user.user_id
    );
    
    if (!setup) {
      return res.status(404).json({ error: 'Setup not found' });
    }

    res.json({ setup });
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/equipment/setups
 * Create new equipment setup
 */
router.post('/setups', async (req, res, next) => {
  try {
    // Validation
    if (!req.body.setup_name || !req.body.equipment_items) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['setup_name', 'equipment_items']
      });
    }

    if (!Array.isArray(req.body.equipment_items)) {
      return res.status(400).json({
        error: 'equipment_items must be an array'
      });
    }

    const setup = await Equipment.createSetup(req.user.user_id, req.body);

    res.status(201).json({
      message: 'Setup created successfully',
      setup
    });
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/equipment/setups/:id
 * Update equipment setup
 */
router.put('/setups/:id', async (req, res, next) => {
  try {
    const setup = await Equipment.updateSetup(
      req.params.id,
      req.user.user_id,
      req.body
    );

    if (!setup) {
      return res.status(404).json({ error: 'Setup not found' });
    }

    res.json({
      message: 'Setup updated successfully',
      setup
    });
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/equipment/setups/:id
 * Delete equipment setup
 */
router.delete('/setups/:id', async (req, res, next) => {
  try {
    const setup = await Equipment.deleteSetup(req.params.id, req.user.user_id);

    if (!setup) {
      return res.status(404).json({ error: 'Setup not found' });
    }

    res.json({
      message: 'Setup deleted successfully',
      setup
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
