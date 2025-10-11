const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');
const { authenticateToken, optionalAuth } = require('../middleware/auth');

/**
 * GET /api/quizzes/module/:module_id
 * Get all quiz questions for a module (protected)
 */
router.get('/module/:module_id', authenticateToken, async (req, res, next) => {
  try {
    const { module_id } = req.params;

    const questions = await Quiz.getModuleQuestions(module_id);

    if (questions.length === 0) {
      return res.status(404).json({
        error: 'No quiz questions found for this module'
      });
    }

    // Remove correct answers before sending to client
    const sanitizedQuestions = questions.map(q => ({
      question_id: q.question_id,
      question_text: q.question_text,
      question_type: q.question_type,
      options: q.options,
      difficulty_level: q.difficulty_level,
      points: q.points,
      order_index: q.order_index
    }));

    res.json({
      module_id,
      count: sanitizedQuestions.length,
      questions: sanitizedQuestions
    });

  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/quizzes/module/:module_id/submit
 * Submit quiz answers (protected)
 */
router.post('/module/:module_id/submit', authenticateToken, async (req, res, next) => {
  try {
    const { module_id } = req.params;
    const { answers, time_taken_seconds } = req.body;

    // Validate input
    if (!answers || typeof answers !== 'object') {
      return res.status(400).json({
        error: 'Answers must be provided as an object'
      });
    }

    // Get all questions for this module
    const questions = await Quiz.getModuleQuestions(module_id);

    if (questions.length === 0) {
      return res.status(404).json({
        error: 'No quiz questions found for this module'
      });
    }

    // Calculate score
    const scoreData = Quiz.calculateScore(questions, answers);

    // Save attempt to database
    const attempt = await Quiz.submitAttempt(
      req.user.user_id,
      module_id,
      answers,
      scoreData.percentage,
      scoreData.passed
    );

    res.json({
      message: scoreData.passed ? 'Congratulations! You passed!' : 'Keep trying!',
      attempt_id: attempt.attempt_id,
      score: scoreData.percentage,
      passed: scoreData.passed,
      correct_answers: scoreData.correct_answers,
      total_questions: scoreData.total_questions,
      earned_points: scoreData.earned_points,
      total_points: scoreData.total_points,
      results: scoreData.results,
      time_taken_seconds
    });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/quizzes/module/:module_id/attempts
 * Get user's quiz attempts for a module (protected)
 */
router.get('/module/:module_id/attempts', authenticateToken, async (req, res, next) => {
  try {
    const { module_id } = req.params;

    const attempts = await Quiz.getUserAttempts(
      req.user.user_id,
      module_id
    );

    res.json({
      module_id,
      count: attempts.length,
      attempts
    });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/quizzes/module/:module_id/best
 * Get best attempt for a module (protected)
 */
router.get('/module/:module_id/best', authenticateToken, async (req, res, next) => {
  try {
    const { module_id } = req.params;

    const bestAttempt = await Quiz.getBestAttempt(
      req.user.user_id,
      module_id
    );

    if (!bestAttempt) {
      return res.status(404).json({
        error: 'No attempts found for this module'
      });
    }

    res.json({ attempt: bestAttempt });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/quizzes/stats
 * Get user's overall quiz statistics (protected)
 */
router.get('/stats', authenticateToken, async (req, res, next) => {
  try {
    const stats = await Quiz.getUserQuizStats(req.user.user_id);

    res.json({ stats });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/quizzes/module/:module_id/stats
 * Get quiz statistics for a module (public)
 */
router.get('/module/:module_id/stats', optionalAuth, async (req, res, next) => {
  try {
    const { module_id } = req.params;

    const stats = await Quiz.getModuleQuizStats(module_id);

    res.json({ stats });

  } catch (error) {
    next(error);
  }
});

module.exports = router;
