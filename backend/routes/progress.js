const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress');
const { authenticateToken } = require('../middleware/auth');

// All progress routes require authentication
router.use(authenticateToken);

/**
 * GET /api/progress
 * Get all progress for current user
 */
router.get('/', async (req, res, next) => {
  try {
    const progress = await Progress.getUserProgress(req.user.user_id);

    res.json({
      count: progress.length,
      progress
    });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/progress/stats
 * Get progress statistics for current user
 */
router.get('/stats', async (req, res, next) => {
  try {
    const stats = await Progress.getUserStats(req.user.user_id);

    res.json({ stats });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/progress/recent
 * Get recently accessed modules
 */
router.get('/recent', async (req, res, next) => {
  try {
    const { limit = 5 } = req.query;

    const modules = await Progress.getRecentModules(
      req.user.user_id,
      parseInt(limit)
    );

    res.json({
      count: modules.length,
      modules
    });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/progress/:module_id
 * Get progress for specific module
 */
router.get('/:module_id', async (req, res, next) => {
  try {
    const { module_id } = req.params;

    const progress = await Progress.getModuleProgress(
      req.user.user_id,
      module_id
    );

    if (!progress) {
      return res.status(404).json({
        error: 'No progress found for this module'
      });
    }

    res.json({ progress });

  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/progress/:module_id
 * Start or update progress on a module
 */
router.post('/:module_id', async (req, res, next) => {
  try {
    const { module_id } = req.params;
    const { progress_percentage = 0 } = req.body;

    // Validate progress percentage
    if (progress_percentage < 0 || progress_percentage > 100) {
      return res.status(400).json({
        error: 'Progress percentage must be between 0 and 100'
      });
    }

    const progress = await Progress.upsertProgress(
      req.user.user_id,
      module_id,
      progress_percentage
    );

    res.json({
      message: 'Progress updated successfully',
      progress
    });

  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/progress/:module_id/complete
 * Mark module as completed
 */
router.post('/:module_id/complete', async (req, res, next) => {
  try {
    const { module_id } = req.params;
    const { time_spent_minutes } = req.body;

    const progress = await Progress.completeModule(
      req.user.user_id,
      module_id,
      time_spent_minutes
    );

    res.json({
      message: 'Module completed successfully!',
      progress
    });

  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/progress/:module_id/time
 * Update time spent on module
 */
router.put('/:module_id/time', async (req, res, next) => {
  try {
    const { module_id } = req.params;
    const { minutes } = req.body;

    if (!minutes || minutes <= 0) {
      return res.status(400).json({
        error: 'Minutes must be a positive number'
      });
    }

    const progress = await Progress.updateTimeSpent(
      req.user.user_id,
      module_id,
      minutes
    );

    res.json({
      message: 'Time updated successfully',
      progress
    });

  } catch (error) {
    next(error);
  }
});

module.exports = router;
