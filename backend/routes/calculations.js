const express = require('express');
const router = express.Router();
const Calculation = require('../models/Calculation');
const { authenticateToken } = require('../middleware/auth');

// All calculation routes require authentication
router.use(authenticateToken);

/**
 * POST /api/calculations
 * Save a new calculation
 */
router.post('/', async (req, res, next) => {
  try {
    const { calculator_type, inputs, result, notes } = req.body;

    // Validation
    if (!calculator_type || !inputs || !result) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['calculator_type', 'inputs', 'result']
      });
    }

    const calculation = await Calculation.save(
      req.user.user_id,
      calculator_type,
      inputs,
      result,
      notes
    );

    res.status(201).json({
      message: 'Calculation saved successfully',
      calculation
    });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/calculations
 * Get user's saved calculations
 */
router.get('/', async (req, res, next) => {
  try {
    const { calculator_type } = req.query;

    const calculations = await Calculation.getUserCalculations(
      req.user.user_id,
      calculator_type
    );

    res.json({
      count: calculations.length,
      calculations
    });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/calculations/recent
 * Get recent calculations
 */
router.get('/recent', async (req, res, next) => {
  try {
    const { limit = 10 } = req.query;

    const calculations = await Calculation.getRecent(
      req.user.user_id,
      parseInt(limit)
    );

    res.json({
      count: calculations.length,
      calculations
    });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/calculations/stats
 * Get calculation statistics
 */
router.get('/stats', async (req, res, next) => {
  try {
    const stats = await Calculation.getUserStats(req.user.user_id);

    res.json({ stats });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/calculations/:id
 * Get specific calculation
 */
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const calculation = await Calculation.getById(id, req.user.user_id);

    if (!calculation) {
      return res.status(404).json({ error: 'Calculation not found' });
    }

    res.json({ calculation });

  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/calculations/:id/notes
 * Update calculation notes
 */
router.put('/:id/notes', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { notes } = req.body;

    const calculation = await Calculation.updateNotes(
      id,
      req.user.user_id,
      notes
    );

    if (!calculation) {
      return res.status(404).json({ error: 'Calculation not found' });
    }

    res.json({
      message: 'Notes updated successfully',
      calculation
    });

  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/calculations/:id
 * Delete calculation
 */
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const calculation = await Calculation.delete(id, req.user.user_id);

    if (!calculation) {
      return res.status(404).json({ error: 'Calculation not found' });
    }

    res.json({
      message: 'Calculation deleted successfully'
    });

  } catch (error) {
    next(error);
  }
});

module.exports = router;
