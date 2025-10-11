const express = require('express');
const router = express.Router();
const Module = require('../models/Module');
const { optionalAuth, authenticateToken } = require('../middleware/auth');

/**
 * GET /api/modules
 * Get all modules with optional filters
 */
router.get('/', optionalAuth, async (req, res, next) => {
  try {
    const { difficulty, category, tier } = req.query;

    const modules = await Module.getAll({
      difficulty,
      category,
      tier
    });

    res.json({
      count: modules.length,
      modules
    });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/modules/search
 * Search modules
 */
router.get('/search', async (req, res, next) => {
  try {
    const { q } = req.query;

    if (!q || q.trim().length < 2) {
      return res.status(400).json({
        error: 'Search term must be at least 2 characters'
      });
    }

    const modules = await Module.search(q);

    res.json({
      count: modules.length,
      modules
    });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/modules/tier/:tier
 * Get modules by tier
 */
router.get('/tier/:tier', async (req, res, next) => {
  try {
    const { tier } = req.params;

    if (!['free', 'freemium', 'premium'].includes(tier)) {
      return res.status(400).json({
        error: 'Invalid tier. Must be: free, freemium, or premium'
      });
    }

    const modules = await Module.getByTier(tier);

    res.json({
      tier,
      count: modules.length,
      modules
    });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/modules/:id
 * Get single module by ID
 */
router.get('/:id', optionalAuth, async (req, res, next) => {
  try {
    const { id } = req.params;

    let module;

    // If user is authenticated, get progress too
    if (req.user) {
      module = await Module.getWithProgress(id, req.user.user_id);
    } else {
      module = await Module.getById(id);
    }

    if (!module) {
      return res.status(404).json({ error: 'Module not found' });
    }

    res.json({ module });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/modules/:id/stats
 * Get module statistics (protected - admin only in future)
 */
router.get('/:id/stats', authenticateToken, async (req, res, next) => {
  try {
    const { id } = req.params;

    const stats = await Module.getStatistics(id);

    res.json({ stats });

  } catch (error) {
    next(error);
  }
});

module.exports = router;
