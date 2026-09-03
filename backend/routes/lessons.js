const express = require('express');
const router = express.Router();
const pool = require('../config/database');
const { authenticateToken } = require('../middleware/auth');

/**
 * POST /api/lessons/:lesson_id/complete
 * Mark a lesson as completed (idempotent)
 */
router.post('/:lesson_id/complete', authenticateToken, async (req, res, next) => {
  try {
    const { lesson_id } = req.params;
    const user_id = req.user.user_id;

    if (!lesson_id) {
      return res.status(400).json({ error: 'lesson_id is required' });
    }

    const result = await pool.query(
      `INSERT INTO lesson_progress (user_id, lesson_id)
       VALUES ($1, $2)
       ON CONFLICT (user_id, lesson_id) DO NOTHING
       RETURNING completed_at`,
      [user_id, lesson_id]
    );

    if (result.rows.length === 0) {
      return res.status(200).json({ message: 'Already completed', already_completed: true });
    }

    res.status(201).json({
      message: 'Lesson completed',
      lesson_id,
      completed_at: result.rows[0].completed_at
    });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/lessons/progress
 * Get all completed lessons for the authenticated user
 */
router.get('/progress', authenticateToken, async (req, res, next) => {
  try {
    const user_id = req.user.user_id;

    const result = await pool.query(
      `SELECT lesson_id FROM lesson_progress
       WHERE user_id = $1
       ORDER BY lesson_id`,
      [user_id]
    );

    const completed = result.rows.map(r => r.lesson_id);

    // Find lowest-numbered incomplete lesson from lesson-01 through lesson-05
    const LESSONS = ['lesson-01', 'lesson-02', 'lesson-03', 'lesson-04', 'lesson-05'];
    const completedSet = new Set(completed);
    const next_lesson = LESSONS.find(l => !completedSet.has(l)) || null;

    res.json({
      completed,
      count: completed.length,
      next_lesson
    });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/lessons/:lesson_id/status
 * Get completion status of a specific lesson for the authenticated user
 */
router.get('/:lesson_id/status', authenticateToken, async (req, res, next) => {
  try {
    const { lesson_id } = req.params;
    const user_id = req.user.user_id;

    const result = await pool.query(
      `SELECT completed_at FROM lesson_progress
       WHERE user_id = $1 AND lesson_id = $2`,
      [user_id, lesson_id]
    );

    if (result.rows.length === 0) {
      return res.json({ lesson_id, completed: false, completed_at: null });
    }

    res.json({
      lesson_id,
      completed: true,
      completed_at: result.rows[0].completed_at
    });

  } catch (error) {
    next(error);
  }
});

module.exports = router;
