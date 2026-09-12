const express = require('express');
const router = express.Router();
const StudyProgress = require('../models/StudyProgress');
const { authenticateToken } = require('../middleware/auth');

/**
 * POST /api/v1/study/progress/mark-read
 * Body: { page_url, section, syllabus_refs, time_on_page_seconds }
 * Idempotent — re-visits accumulate time and update timestamp
 */
router.post('/mark-read', authenticateToken, async (req, res, next) => {
  try {
    const { page_url, section, syllabus_refs, time_on_page_seconds } = req.body;
    const user_id = req.user.user_id;

    if (!page_url) {
      return res.status(400).json({ error: 'page_url is required' });
    }
    if (syllabus_refs !== undefined && !Array.isArray(syllabus_refs)) {
      return res.status(400).json({ error: 'syllabus_refs must be an array' });
    }

    const record = await StudyProgress.markRead({
      user_id,
      page_url,
      section,
      syllabus_refs,
      time_on_page_seconds
    });

    res.json({ success: true, record });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/study/progress/user/:user_id
 * Returns sections started, total study time, last-visited page, syllabus read state
 */
router.get('/user/:user_id', authenticateToken, async (req, res, next) => {
  try {
    const { user_id } = req.params;
    if (req.user.user_id !== user_id) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    const summary = await StudyProgress.getUserSummary(user_id);
    res.json(summary);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/study/progress/recommendations/:user_id
 * Combines study progress + exam analytics to recommend next actions
 */
router.get('/recommendations/:user_id', authenticateToken, async (req, res, next) => {
  try {
    const { user_id } = req.params;
    if (req.user.user_id !== user_id) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    const result = await StudyProgress.getRecommendations(user_id);
    res.json({ user_id, ...result });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
