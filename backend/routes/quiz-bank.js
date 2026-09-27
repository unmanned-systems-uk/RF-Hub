const express = require('express');
const router = express.Router();
const pool = require('../config/database');
const { authenticateToken, optionalAuth } = require('../middleware/auth');

/**
 * Quiz Bank API Endpoints
 * Handles mock exam questions, filtering, analytics, and ingestion
 */

// ============================================================================
// PART 1: INGESTION & MANAGEMENT
// ============================================================================

/**
 * POST /api/quiz/import
 * Import quiz questions from JSON
 * Body: { questions: [...], source?: string, level?: string }
 */
router.post('/import', authenticateToken, async (req, res, next) => {
  try {
    const { questions, source = 'api_import', level } = req.body;

    if (!Array.isArray(questions) || questions.length === 0) {
      return res.status(400).json({ error: 'questions must be a non-empty array' });
    }

    const client = await pool.connect();
    let inserted = 0;
    let skipped = 0;
    const errors = [];

    try {
      await client.query('BEGIN');

      for (const q of questions) {
        try {
          // Validate required fields
          const required = ['syllabus_ref', 'level', 'difficulty', 'question', 'options', 'correct_answer_index', 'explanation'];
          const missing = required.filter(f => !(f in q));
          if (missing.length > 0) {
            errors.push({ syllabus_ref: q.syllabus_ref || 'unknown', error: `Missing: ${missing.join(', ')}` });
            skipped++;
            continue;
          }

          // Validate options array
          if (!Array.isArray(q.options) || q.options.length !== 4) {
            errors.push({ syllabus_ref: q.syllabus_ref, error: 'options must be array of 4 strings' });
            skipped++;
            continue;
          }

          // Convert index to char (0-3 → A-D)
          const answerMap = { 0: 'A', 1: 'B', 2: 'C', 3: 'D' };
          const correctChar = answerMap[parseInt(q.correct_answer_index)];
          if (!correctChar) {
            errors.push({ syllabus_ref: q.syllabus_ref, error: 'correct_answer_index must be 0-3' });
            skipped++;
            continue;
          }

          // Insert with conflict handling
          const result = await client.query(
            `INSERT INTO exam_questions
             (level, section_code, section_name, syllabus_ref, question_text,
              options, correct_answer, correct_answer_index, explanation,
              difficulty, active, source_content, tags, created_at, updated_at)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, NOW(), NOW())
             ON CONFLICT (syllabus_ref) DO NOTHING
             RETURNING id`,
            [
              q.level,
              q.section_code || null,
              q.section_name || null,
              q.syllabus_ref,
              q.question,
              JSON.stringify(q.options),
              correctChar,
              parseInt(q.correct_answer_index),
              q.explanation,
              q.difficulty,
              q.active !== false,
              q.source_content || null,
              JSON.stringify(q.tags || []),
            ]
          );

          if (result.rowCount > 0) {
            inserted++;
          } else {
            skipped++;
          }
        } catch (err) {
          errors.push({ syllabus_ref: q.syllabus_ref || 'unknown', error: err.message });
          skipped++;
        }
      }

      await client.query('COMMIT');
    } catch (err) {
      await client.query('ROLLBACK');
      throw err;
    } finally {
      client.release();
    }

    res.status(201).json({
      inserted,
      skipped,
      total: questions.length,
      errors: errors.length > 0 ? errors : undefined,
      message: `Imported ${inserted} questions, ${skipped} skipped`
    });
  } catch (error) {
    next(error);
  }
});

// ============================================================================
// PART 2: QUERY & RETRIEVAL ENDPOINTS
// ============================================================================

/**
 * GET /api/quiz/questions
 * Get filtered questions from the bank
 * Query: section=<N>&syllabus=<tag>&count=<n>&difficulty=<easy|medium|hard>
 */
router.get('/questions', optionalAuth, async (req, res, next) => {
  try {
    const { section, syllabus, count = 10, difficulty, level = 'intermediate' } = req.query;

    let query = 'SELECT id, syllabus_ref, level, section_code, question_text, options, difficulty, tags FROM exam_questions WHERE active = true AND level = $1';
    const params = [level];
    let paramIdx = 2;

    if (section) {
      query += ` AND section_code LIKE $${paramIdx}`;
      params.push(`${section}%`);
      paramIdx++;
    }

    if (syllabus) {
      query += ` AND syllabus_ref = $${paramIdx}`;
      params.push(syllabus);
      paramIdx++;
    }

    if (difficulty) {
      query += ` AND difficulty = $${paramIdx}`;
      params.push(difficulty);
      paramIdx++;
    }

    // Random sampling with specified count
    query += ` ORDER BY RANDOM() LIMIT $${paramIdx}`;
    params.push(parseInt(count) || 10);

    const result = await pool.query(query, params);

    res.json({
      level,
      section: section || null,
      syllabus: syllabus || null,
      difficulty: difficulty || null,
      count: result.rows.length,
      questions: result.rows
    });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/quiz/exam
 * Get a full mock exam for a section with RSGB weighting
 * Query: section=<N>&length=<n>
 */
router.get('/exam', optionalAuth, async (req, res, next) => {
  try {
    const { section, length = 15, level = 'intermediate' } = req.query;

    if (!section) {
      return res.status(400).json({ error: 'section parameter is required' });
    }

    // Get all subsections for this section
    const sectionQuery = `
      SELECT DISTINCT section_code, syllabus_ref
      FROM exam_questions
      WHERE level = $1 AND section_code LIKE $2 AND active = true
      ORDER BY section_code
    `;

    const sectionResult = await pool.query(sectionQuery, [level, `${section}%`]);

    if (sectionResult.rows.length === 0) {
      return res.status(404).json({ error: `No questions found for section ${section}` });
    }

    // Distribute questions proportionally across subsections
    const totalSubsections = sectionResult.rows.length;
    const questionsPerSubsection = Math.max(1, Math.floor(length / totalSubsections));
    let questions = [];

    for (const row of sectionResult.rows) {
      const subResult = await pool.query(
        `SELECT id, syllabus_ref, level, section_code, question_text, options, difficulty, tags
         FROM exam_questions
         WHERE level = $1 AND section_code = $2 AND active = true
         ORDER BY RANDOM() LIMIT $3`,
        [level, row.section_code, questionsPerSubsection]
      );
      questions.push(...subResult.rows);
    }

    // Ensure we hit the target length if possible
    if (questions.length < length && questions.length > 0) {
      const needed = length - questions.length;
      const existingIds = questions.map(q => q.id);

      const additionalResult = await pool.query(
        `SELECT id, syllabus_ref, level, section_code, question_text, options, difficulty, tags
         FROM exam_questions
         WHERE level = $1 AND section_code LIKE $2 AND active = true AND id NOT IN (SELECT UNNEST($3::uuid[]))
         ORDER BY RANDOM() LIMIT $4`,
        [level, `${section}%`, existingIds, needed]
      );
      questions.push(...additionalResult.rows);
    }

    res.json({
      section,
      level,
      target_length: length,
      actual_length: questions.length,
      questions: questions.slice(0, length)
    });
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/quiz/submit
 * Submit quiz answers and persist attempt
 * Body: { session_id, answers: {question_id: "A"|"B"|"C"|"D"}, time_ms }
 */
router.post('/submit', authenticateToken, async (req, res, next) => {
  try {
    const { answers, time_ms = 0 } = req.body;
    const userId = req.user.user_id;

    if (!answers || typeof answers !== 'object' || Object.keys(answers).length === 0) {
      return res.status(400).json({ error: 'answers must be non-empty object: {question_id: "A"|"B"|"C"|"D"}' });
    }

    const client = await pool.connect();
    const answerIds = Object.keys(answers);

    try {
      await client.query('BEGIN');

      // Fetch questions
      const questionsResult = await client.query(
        `SELECT id, correct_answer, syllabus_ref, explanation FROM exam_questions WHERE id = ANY($1)`,
        [answerIds]
      );

      const questions = {};
      questionsResult.rows.forEach(q => {
        questions[q.id] = q;
      });

      // Score the submission
      let correct = 0;
      const results = [];

      for (const [questionId, selectedAnswer] of Object.entries(answers)) {
        const q = questions[questionId];
        if (!q) continue;

        const isCorrect = q.correct_answer === selectedAnswer.toUpperCase();
        if (isCorrect) correct++;

        results.push({
          question_id: questionId,
          syllabus_ref: q.syllabus_ref,
          selected: selectedAnswer,
          correct: isCorrect,
          explanation: q.explanation
        });
      }

      const score = Math.round((correct / answerIds.length) * 100);

      // Insert attempt record
      const attemptResult = await client.query(
        `INSERT INTO exam_attempts
         (user_id, level, mode, total_questions, correct_answers, score_percent, passed, time_taken_seconds, answers)
         VALUES ($1, 'intermediate', 'quiz_bank', $2, $3, $4, $5, $6, $7)
         RETURNING id`,
        [
          userId,
          answerIds.length,
          correct,
          score,
          score >= 65,
          Math.round(time_ms / 1000),
          JSON.stringify(answers)
        ]
      );

      await client.query('COMMIT');

      res.status(201).json({
        attempt_id: attemptResult.rows[0].id,
        total_questions: answerIds.length,
        correct_answers: correct,
        score_percent: score,
        passed: score >= 65,
        results
      });
    } catch (err) {
      await client.query('ROLLBACK');
      throw err;
    } finally {
      client.release();
    }
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/quiz/analytics
 * Get session analytics for a user
 * Query: session_id=<id> (optional, defaults to user's latest)
 */
router.get('/analytics', authenticateToken, async (req, res, next) => {
  try {
    const userId = req.user.user_id;
    const { session_id } = req.query;

    let query = `
      SELECT
        id,
        total_questions,
        correct_answers,
        score_percent,
        time_taken_seconds,
        ROUND(CAST(correct_answers AS DECIMAL) / CAST(total_questions AS DECIMAL) * 100, 2) as accuracy,
        answers,
        created_at
      FROM exam_attempts
      WHERE user_id = $1 AND mode = 'quiz_bank'
    `;

    const params = [userId];

    if (session_id) {
      query += ` AND id = $2`;
      params.push(session_id);
    } else {
      query += ` ORDER BY created_at DESC LIMIT 1`;
    }

    const result = await pool.query(query, params);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'No quiz attempts found' });
    }

    const attempt = result.rows[0];
    const answers = JSON.parse(attempt.answers);

    // Calculate stats per syllabus ref
    const syllabusStats = {};
    for (const [qId, answer] of Object.entries(answers)) {
      const qResult = await pool.query(
        'SELECT syllabus_ref, correct_answer FROM exam_questions WHERE id = $1',
        [qId]
      );
      if (qResult.rows.length > 0) {
        const q = qResult.rows[0];
        if (!syllabusStats[q.syllabus_ref]) {
          syllabusStats[q.syllabus_ref] = { correct: 0, total: 0 };
        }
        syllabusStats[q.syllabus_ref].total++;
        if (q.correct_answer === answer.toUpperCase()) {
          syllabusStats[q.syllabus_ref].correct++;
        }
      }
    }

    // Find weakest area
    let weakest = null;
    let weakestScore = 100;
    for (const [ref, stats] of Object.entries(syllabusStats)) {
      const score = (stats.correct / stats.total) * 100;
      if (score < weakestScore) {
        weakest = ref;
        weakestScore = score;
      }
    }

    res.json({
      session_id: attempt.id,
      total_answered: attempt.total_questions,
      correct_answers: attempt.correct_answers,
      accuracy_percent: attempt.accuracy,
      time_per_question_seconds: Math.round(attempt.time_taken_seconds / attempt.total_questions),
      weakest_syllabus_item: weakest,
      weakest_score_percent: Math.round(weakestScore),
      all_syllabus_scores: Object.entries(syllabusStats).map(([ref, stats]) => ({
        ref,
        correct: stats.correct,
        total: stats.total,
        score: Math.round((stats.correct / stats.total) * 100)
      }))
    });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/quiz/syllabus-coverage
 * Matrix of question coverage: (section, syllabus_ref) → question_count
 * Query: level=<foundation|intermediate|full>
 */
router.get('/syllabus-coverage', async (req, res, next) => {
  try {
    const { level = 'intermediate' } = req.query;

    const result = await pool.query(
      `SELECT
        section_code,
        section_name,
        syllabus_ref,
        difficulty,
        COUNT(*) as question_count
       FROM exam_questions
       WHERE active = true AND level = $1
       GROUP BY section_code, section_name, syllabus_ref, difficulty
       ORDER BY section_code, syllabus_ref, difficulty`,
      [level]
    );

    // Structure as matrix
    const matrix = {};
    result.rows.forEach(row => {
      const key = `${row.section_code}-${row.syllabus_ref}`;
      if (!matrix[key]) {
        matrix[key] = {
          section_code: row.section_code,
          section_name: row.section_name,
          syllabus_ref: row.syllabus_ref,
          easy: 0,
          medium: 0,
          hard: 0,
          total: 0
        };
      }
      matrix[key][row.difficulty] = row.question_count;
      matrix[key].total += row.question_count;
    });

    res.json({
      level,
      coverage: Object.values(matrix),
      summary: {
        total_entries: Object.keys(matrix).length,
        total_questions: result.rows.reduce((sum, r) => sum + r.question_count, 0)
      }
    });
  } catch (error) {
    next(error);
  }
});

// ============================================================================
// OPTIONAL: SPACED REPETITION
// ============================================================================

/**
 * GET /api/quiz/next-review
 * Spaced repetition: surface questions user got wrong or hasn't seen recently
 * Query: user_id=<id>&limit=<n>
 */
router.get('/next-review', authenticateToken, async (req, res, next) => {
  try {
    const userId = req.user.user_id;
    const { limit = 5 } = req.query;

    // Find questions user has attempted and gotten wrong
    const wrongResult = await pool.query(
      `SELECT
        eq.id, eq.syllabus_ref, eq.question_text, eq.options, eq.difficulty,
        COUNT(*) as attempt_count
       FROM exam_attempts ea
       CROSS JOIN LATERAL jsonb_each_text(ea.answers) as answers(qid, answer)
       JOIN exam_questions eq ON eq.id::text = answers.qid
       WHERE ea.user_id = $1 AND ea.mode = 'quiz_bank' AND eq.correct_answer != answers.answer
       GROUP BY eq.id, eq.syllabus_ref, eq.question_text, eq.options, eq.difficulty
       ORDER BY attempt_count DESC, RANDOM()
       LIMIT $2`,
      [userId, limit]
    );

    if (wrongResult.rows.length > 0) {
      return res.json({
        type: 'review_questions',
        questions: wrongResult.rows,
        count: wrongResult.rows.length
      });
    }

    // If no wrong answers found, return random unattempted questions
    const randomResult = await pool.query(
      `SELECT id, syllabus_ref, question_text, options, difficulty
       FROM exam_questions
       WHERE active = true AND id NOT IN (
         SELECT DISTINCT CAST((jsonb_object_keys(ea.answers))::uuid AS uuid)
         FROM exam_attempts ea
         WHERE user_id = $1
       )
       ORDER BY RANDOM() LIMIT $2`,
      [userId, limit]
    );

    res.json({
      type: randomResult.rows.length > 0 ? 'new_questions' : 'no_questions',
      questions: randomResult.rows,
      count: randomResult.rows.length
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
