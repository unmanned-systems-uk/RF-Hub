# Phase 4: Quiz, Badge & Calculator Implementation

This document continues from IMPLEMENTATION-GUIDE-REVISED.md Phase 4.

---

## 🎯 Step 4.1: Quiz Model

Create `models/Quiz.js`:

```javascript
const pool = require('../config/database');

class Quiz {
  /**
   * Get all questions for a module
   */
  static async getModuleQuestions(module_id) {
    const result = await pool.query(
      `SELECT 
        question_id, module_id, question_text, question_type,
        options, correct_answer, explanation, difficulty_level,
        points, order_index
       FROM quiz_questions
       WHERE module_id = $1
       ORDER BY order_index ASC`,
      [module_id]
    );
    return result.rows;
  }

  /**
   * Get a single question by ID
   */
  static async getQuestionById(question_id) {
    const result = await pool.query(
      `SELECT * FROM quiz_questions WHERE question_id = $1`,
      [question_id]
    );
    return result.rows[0];
  }

  /**
   * Submit quiz attempt
   */
  static async submitAttempt(user_id, module_id, answers, score, passed) {
    const result = await pool.query(
      `INSERT INTO quiz_attempts 
        (user_id, module_id, answers, score, passed)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [user_id, module_id, JSON.stringify(answers), score, passed]
    );

    // Update user's total quizzes passed if they passed
    if (passed) {
      await pool.query(
        `UPDATE users 
         SET total_quizzes_passed = total_quizzes_passed + 1
         WHERE user_id = $1`,
        [user_id]
      );
    }

    return result.rows[0];
  }

  /**
   * Get user's quiz attempts for a module
   */
  static async getUserAttempts(user_id, module_id) {
    const result = await pool.query(
      `SELECT 
        attempt_id, module_id, score, passed, 
        completed_at, time_taken_seconds
       FROM quiz_attempts
       WHERE user_id = $1 AND module_id = $2
       ORDER BY completed_at DESC`,
      [user_id, module_id]
    );
    return result.rows;
  }

  /**
   * Get best attempt for a module
   */
  static async getBestAttempt(user_id, module_id) {
    const result = await pool.query(
      `SELECT * FROM quiz_attempts
       WHERE user_id = $1 AND module_id = $2
       ORDER BY score DESC, completed_at ASC
       LIMIT 1`,
      [user_id, module_id]
    );
    return result.rows[0];
  }

  /**
   * Calculate quiz score
   */
  static calculateScore(questions, userAnswers) {
    let correctCount = 0;
    let totalPoints = 0;
    let earnedPoints = 0;

    const results = questions.map(question => {
      const userAnswer = userAnswers[question.question_id];
      const isCorrect = userAnswer === question.correct_answer;
      
      totalPoints += question.points;
      if (isCorrect) {
        correctCount++;
        earnedPoints += question.points;
      }

      return {
        question_id: question.question_id,
        user_answer: userAnswer,
        correct_answer: question.correct_answer,
        is_correct: isCorrect,
        points: question.points,
        earned_points: isCorrect ? question.points : 0,
        explanation: question.explanation
      };
    });

    const percentage = totalPoints > 0 ? (earnedPoints / totalPoints) * 100 : 0;
    const passed = percentage >= 70; // 70% to pass

    return {
      total_questions: questions.length,
      correct_answers: correctCount,
      total_points: totalPoints,
      earned_points: earnedPoints,
      percentage: Math.round(percentage * 100) / 100,
      passed,
      results
    };
  }

  /**
   * Get quiz statistics for a module
   */
  static async getModuleQuizStats(module_id) {
    const result = await pool.query(
      `SELECT 
        COUNT(DISTINCT user_id) as total_attempts,
        COUNT(CASE WHEN passed THEN 1 END) as passed_count,
        AVG(score) as average_score,
        MAX(score) as highest_score,
        MIN(score) as lowest_score
       FROM quiz_attempts
       WHERE module_id = $1`,
      [module_id]
    );
    return result.rows[0];
  }

  /**
   * Get user's overall quiz performance
   */
  static async getUserQuizStats(user_id) {
    const result = await pool.query(
      `SELECT 
        COUNT(*) as total_attempts,
        COUNT(DISTINCT module_id) as modules_attempted,
        COUNT(CASE WHEN passed THEN 1 END) as passed_count,
        AVG(score) as average_score,
        MAX(score) as highest_score
       FROM quiz_attempts
       WHERE user_id = $1`,
      [user_id]
    );
    return result.rows[0];
  }
}

module.exports = Quiz;
```

---

## 🎯 Step 4.2: Quiz Routes

Create `routes/quizzes.js`:

```javascript
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
```

---

## 🏆 Step 4.3: Badge Model

Create `models/Badge.js`:

```javascript
const pool = require('../config/database');

class Badge {
  /**
   * Get all available badges
   */
  static async getAllBadges() {
    const result = await pool.query(
      `SELECT badge_id, badge_name, description, icon_url,
              criteria, points_required, rarity, badge_type,
              order_index
       FROM badges
       ORDER BY order_index ASC`
    );
    return result.rows;
  }

  /**
   * Get badge by ID
   */
  static async getBadgeById(badge_id) {
    const result = await pool.query(
      `SELECT * FROM badges WHERE badge_id = $1`,
      [badge_id]
    );
    return result.rows[0];
  }

  /**
   * Get user's earned badges
   */
  static async getUserBadges(user_id) {
    const result = await pool.query(
      `SELECT 
        ub.*,
        b.badge_name,
        b.description,
        b.icon_url,
        b.rarity,
        b.badge_type
       FROM user_badges ub
       JOIN badges b ON ub.badge_id = b.badge_id
       WHERE ub.user_id = $1
       ORDER BY ub.earned_at DESC`,
      [user_id]
    );
    return result.rows;
  }

  /**
   * Award badge to user
   */
  static async awardBadge(user_id, badge_id) {
    // Check if user already has this badge
    const existing = await pool.query(
      `SELECT * FROM user_badges 
       WHERE user_id = $1 AND badge_id = $2`,
      [user_id, badge_id]
    );

    if (existing.rows.length > 0) {
      return { alreadyEarned: true, badge: existing.rows[0] };
    }

    // Award the badge
    const result = await pool.query(
      `INSERT INTO user_badges (user_id, badge_id)
       VALUES ($1, $2)
       RETURNING *`,
      [user_id, badge_id]
    );

    // Update user's total badges
    await pool.query(
      `UPDATE users 
       SET total_badges_earned = (
         SELECT COUNT(*) FROM user_badges WHERE user_id = $1
       )
       WHERE user_id = $1`,
      [user_id]
    );

    return { alreadyEarned: false, badge: result.rows[0] };
  }

  /**
   * Check and award automatic badges based on user progress
   */
  static async checkAndAwardBadges(user_id) {
    const newBadges = [];

    // Get user statistics
    const userStats = await pool.query(
      `SELECT 
        total_modules_completed,
        total_quizzes_passed,
        current_streak_days,
        (SELECT COUNT(*) FROM user_progress WHERE user_id = $1 AND status = 'completed') as completed_count
       FROM users WHERE user_id = $1`,
      [user_id]
    );

    const stats = userStats.rows[0];

    // Check "First Steps" badge (complete first module)
    if (stats.completed_count >= 1) {
      const result = await this.awardBadge(user_id, 1); // Assuming badge_id 1 is "First Steps"
      if (!result.alreadyEarned) {
        newBadges.push(result.badge);
      }
    }

    // Check "Quiz Master" badge (pass 10 quizzes)
    if (stats.total_quizzes_passed >= 10) {
      const result = await this.awardBadge(user_id, 2); // Assuming badge_id 2
      if (!result.alreadyEarned) {
        newBadges.push(result.badge);
      }
    }

    // Check "Dedicated Learner" badge (7 day streak)
    if (stats.current_streak_days >= 7) {
      const result = await this.awardBadge(user_id, 3); // Assuming badge_id 3
      if (!result.alreadyEarned) {
        newBadges.push(result.badge);
      }
    }

    // Check "RF Expert" badge (complete 20 modules)
    if (stats.total_modules_completed >= 20) {
      const result = await this.awardBadge(user_id, 4); // Assuming badge_id 4
      if (!result.alreadyEarned) {
        newBadges.push(result.badge);
      }
    }

    return newBadges;
  }

  /**
   * Get badge progress for user
   */
  static async getUserBadgeProgress(user_id) {
    const result = await pool.query(
      `SELECT 
        b.*,
        CASE WHEN ub.user_badge_id IS NOT NULL THEN true ELSE false END as earned,
        ub.earned_at
       FROM badges b
       LEFT JOIN user_badges ub ON b.badge_id = ub.badge_id AND ub.user_id = $1
       ORDER BY b.order_index ASC`,
      [user_id]
    );
    return result.rows;
  }

  /**
   * Get badge statistics
   */
  static async getBadgeStats(badge_id) {
    const result = await pool.query(
      `SELECT 
        COUNT(DISTINCT user_id) as total_earned,
        MIN(earned_at) as first_earned_at,
        MAX(earned_at) as last_earned_at
       FROM user_badges
       WHERE badge_id = $1`,
      [badge_id]
    );
    return result.rows[0];
  }
}

module.exports = Badge;
```

---

## 🏆 Step 4.4: Badge Routes

Create `routes/badges.js`:

```javascript
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
```

---

## 🧮 Step 4.5: Calculation Model

Create `models/Calculation.js`:

```javascript
const pool = require('../config/database');

class Calculation {
  /**
   * Save a calculation
   */
  static async save(user_id, calculator_type, inputs, result, notes = null) {
    const calc_result = await pool.query(
      `INSERT INTO saved_calculations 
        (user_id, calculator_type, inputs, result, notes)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [user_id, calculator_type, JSON.stringify(inputs), JSON.stringify(result), notes]
    );
    return calc_result.rows[0];
  }

  /**
   * Get user's saved calculations
   */
  static async getUserCalculations(user_id, calculator_type = null) {
    let query = `
      SELECT * FROM saved_calculations 
      WHERE user_id = $1
    `;
    const params = [user_id];

    if (calculator_type) {
      query += ` AND calculator_type = $2`;
      params.push(calculator_type);
    }

    query += ` ORDER BY created_at DESC`;

    const result = await pool.query(query, params);
    return result.rows;
  }

  /**
   * Get single calculation by ID
   */
  static async getById(calculation_id, user_id) {
    const result = await pool.query(
      `SELECT * FROM saved_calculations 
       WHERE calculation_id = $1 AND user_id = $2`,
      [calculation_id, user_id]
    );
    return result.rows[0];
  }

  /**
   * Update calculation notes
   */
  static async updateNotes(calculation_id, user_id, notes) {
    const result = await pool.query(
      `UPDATE saved_calculations 
       SET notes = $3, updated_at = CURRENT_TIMESTAMP
       WHERE calculation_id = $1 AND user_id = $2
       RETURNING *`,
      [calculation_id, user_id, notes]
    );
    return result.rows[0];
  }

  /**
   * Delete calculation
   */
  static async delete(calculation_id, user_id) {
    const result = await pool.query(
      `DELETE FROM saved_calculations 
       WHERE calculation_id = $1 AND user_id = $2
       RETURNING *`,
      [calculation_id, user_id]
    );
    return result.rows[0];
  }

  /**
   * Get calculation statistics
   */
  static async getUserStats(user_id) {
    const result = await pool.query(
      `SELECT 
        COUNT(*) as total_saved,
        COUNT(DISTINCT calculator_type) as calculator_types_used,
        MAX(created_at) as last_saved_at,
        calculator_type,
        COUNT(*) as type_count
       FROM saved_calculations
       WHERE user_id = $1
       GROUP BY calculator_type
       ORDER BY type_count DESC`,
      [user_id]
    );
    return result.rows;
  }

  /**
   * Get recent calculations
   */
  static async getRecent(user_id, limit = 10) {
    const result = await pool.query(
      `SELECT 
        calculation_id,
        calculator_type,
        result,
        notes,
        created_at
       FROM saved_calculations
       WHERE user_id = $1
       ORDER BY created_at DESC
       LIMIT $2`,
      [user_id, limit]
    );
    return result.rows;
  }
}

module.exports = Calculation;
```

---

## 🧮 Step 4.6: Calculation Routes

Create `routes/calculations.js`:

```javascript
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
```

---

## ✅ Phase 4 Complete Testing

```bash
# Test Quiz System
curl -X GET http://localhost:3000/api/quizzes/module/1 \
  -H "Authorization: Bearer YOUR_TOKEN"

curl -X POST http://localhost:3000/api/quizzes/module/1/submit \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"answers": {"1": "A", "2": "B"}, "time_taken_seconds": 120}'

# Test Badge System
curl http://localhost:3000/api/badges

curl http://localhost:3000/api/badges/my \
  -H "Authorization: Bearer YOUR_TOKEN"

curl -X POST http://localhost:3000/api/badges/check \
  -H "Authorization: Bearer YOUR_TOKEN"

# Test Calculator Saves
curl -X POST http://localhost:3000/api/calculations \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "calculator_type": "wavelength",
    "inputs": {"frequency": 145.5},
    "result": {"wavelength": 2.06},
    "notes": "2m band calculation"
  }'

curl http://localhost:3000/api/calculations \
  -H "Authorization: Bearer YOUR_TOKEN"
```

---

## 🎉 ALL PHASES COMPLETE!

Your backend API should now have:
- ✅ User authentication with JWT
- ✅ Module management
- ✅ Progress tracking
- ✅ Quiz system with scoring
- ✅ Badge/achievement system
- ✅ Calculator saves

**Total API Endpoints:** 30+
**Estimated Implementation Time:** 12-16 hours

---

**Document Status:** ✅ Phase 4 Complete  
**Next:** Full system integration testing
