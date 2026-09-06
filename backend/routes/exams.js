const express = require('express');
const router = express.Router();
const { Exam, VALID_LEVELS, VALID_MODES } = require('../models/Exam');
const { authenticateToken, optionalAuth } = require('../middleware/auth');

/**
 * GET /api/exams/levels
 * Exam metadata for all levels (public)
 */
router.get('/levels', async (req, res, next) => {
  try {
    const levels = await Exam.getLevels();
    res.json({ levels });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/exams/sections/:level
 * Sections with question counts (public)
 */
router.get('/sections/:level', async (req, res, next) => {
  try {
    const { level } = req.params;
    if (!VALID_LEVELS.includes(level)) {
      return res.status(400).json({ error: `Invalid level. Must be one of: ${VALID_LEVELS.join(', ')}` });
    }
    const sections = await Exam.getSections(level);
    res.json({ level, sections });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/exams/questions?level=&mode=&section=
 * Get questions for a session — correct_answer never sent (optionalAuth)
 */
router.get('/questions', optionalAuth, async (req, res, next) => {
  try {
    const { level, mode = 'mock', section } = req.query;

    if (!level || !VALID_LEVELS.includes(level)) {
      return res.status(400).json({ error: `level is required. Must be one of: ${VALID_LEVELS.join(', ')}` });
    }
    if (!VALID_MODES.includes(mode)) {
      return res.status(400).json({ error: `mode must be one of: ${VALID_MODES.join(', ')}` });
    }
    if (mode === 'weak_areas' && !req.user) {
      return res.status(401).json({ error: 'Authentication required for weak_areas mode' });
    }

    const userId = req.user ? req.user.user_id : null;
    const questions = await Exam.getQuestions(level, mode, section, userId);

    res.json({ level, mode, section: section || null, count: questions.length, questions });
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/exams/submit
 * Submit + persist exam attempt (requires auth)
 */
router.post('/submit', authenticateToken, async (req, res, next) => {
  try {
    const { level, mode = 'mock', section_filter, answers, time_taken_seconds } = req.body;

    if (!level || !VALID_LEVELS.includes(level)) {
      return res.status(400).json({ error: `level is required. Must be one of: ${VALID_LEVELS.join(', ')}` });
    }
    if (!answers || typeof answers !== 'object' || Object.keys(answers).length === 0) {
      return res.status(400).json({ error: 'answers must be a non-empty object: {question_id: "A"|"B"|"C"|"D"}' });
    }

    const result = await Exam.submitAttempt(
      req.user.user_id, level, mode, section_filter,
      answers, time_taken_seconds || 0
    );

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/exams/check
 * Check answers without saving — no auth required
 */
router.post('/check', async (req, res, next) => {
  try {
    const { answers } = req.body;
    if (!answers || typeof answers !== 'object' || Object.keys(answers).length === 0) {
      return res.status(400).json({ error: 'answers must be a non-empty object: {question_id: "A"|"B"|"C"|"D"}' });
    }
    const result = await Exam.checkAnswers(answers);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/exams/history?level=
 * Attempt history for current user (requires auth)
 */
router.get('/history', authenticateToken, async (req, res, next) => {
  try {
    const { level } = req.query;
    if (level && !VALID_LEVELS.includes(level)) {
      return res.status(400).json({ error: `level must be one of: ${VALID_LEVELS.join(', ')}` });
    }
    const attempts = await Exam.getHistory(req.user.user_id, level);
    res.json({ count: attempts.length, attempts });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/exams/stats/:level
 * Per-section performance stats (requires auth)
 */
router.get('/stats/:level', authenticateToken, async (req, res, next) => {
  try {
    const { level } = req.params;
    if (!VALID_LEVELS.includes(level)) {
      return res.status(400).json({ error: `Invalid level. Must be one of: ${VALID_LEVELS.join(', ')}` });
    }
    const stats = await Exam.getStats(req.user.user_id, level);
    res.json({ level, stats });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/exams/weak-areas/:level
 * Sections the user gets wrong most (requires auth)
 */
router.get('/weak-areas/:level', authenticateToken, async (req, res, next) => {
  try {
    const { level } = req.params;
    if (!VALID_LEVELS.includes(level)) {
      return res.status(400).json({ error: `Invalid level. Must be one of: ${VALID_LEVELS.join(', ')}` });
    }
    const weakAreas = await Exam.getWeakAreas(req.user.user_id, level);
    res.json({ level, weak_areas: weakAreas });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/exams/attempts/:attempt_id
 * Detailed attempt review (requires auth, ownership verified)
 */
router.get('/attempts/:attempt_id', authenticateToken, async (req, res, next) => {
  try {
    const attempt = await Exam.getAttempt(req.params.attempt_id, req.user.user_id);
    if (!attempt) {
      return res.status(404).json({ error: 'Attempt not found' });
    }
    res.json({ attempt });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
