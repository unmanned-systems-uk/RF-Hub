const express = require('express');
const router = express.Router();
const Badge = require('../models/Badge');
const { authenticateToken, optionalAuth } = require('../middleware/auth');

/**
 * GET /api/badges
 * Get all available badges
 */
router.get('/', async (req, res, next) => {
  try {
    const badges = await Badge.getAllBadges();

    res.json({
      count: badges.length,
      badges
    });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/badges/my
 * Get current user's earned badges (protected)
 */
router.get('/my', authenticateToken, async (req, res, next) => {
  try {
    const badges = await Badge.getUserBadges(req.user.user_id);

    res.json({
      count: badges.length,
      badges
    });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/badges/progress
 * Get badge progress for current user (protected)
 */
router.get('/progress', authenticateToken, async (req, res, next) => {
  try {
    const progress = await Badge.getUserBadgeProgress(req.user.user_id);

    const earned = progress.filter(b => b.earned).length;
    const total = progress.length;
    const percentage = total > 0 ? (earned / total) * 100 : 0;

    res.json({
      earned,
      total,
      percentage: Math.round(percentage * 100) / 100,
      badges: progress
    });

  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/badges/check
 * Check and award eligible badges (protected)
 */
router.post('/check', authenticateToken, async (req, res, next) => {
  try {
    const newBadges = await Badge.checkAndAwardBadges(req.user.user_id);

    if (newBadges.length > 0) {
      res.json({
        message: `Congratulations! You earned ${newBadges.length} new badge(s)!`,
        newBadges
      });
    } else {
      res.json({
        message: 'No new badges earned yet. Keep learning!',
        newBadges: []
      });
    }

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/badges/:id
 * Get specific badge details
 */
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const badge = await Badge.getBadgeById(id);

    if (!badge) {
      return res.status(404).json({ error: 'Badge not found' });
    }

    const stats = await Badge.getBadgeStats(id);

    res.json({
      badge,
      stats
    });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/badges/user/:user_id
 * Get badges for specific user (public)
 */
router.get('/user/:user_id', async (req, res, next) => {
  try {
    const { user_id } = req.params;

    const badges = await Badge.getUserBadges(user_id);

    res.json({
      user_id,
      count: badges.length,
      badges
    });

  } catch (error) {
    next(error);
  }
});

module.exports = router;
