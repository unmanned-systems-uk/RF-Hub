const pool = require('../config/database');

const EXAM_CONFIG = {
  foundation: {
    name: 'Foundation',
    total_questions: 26,
    time_limit_minutes: 45,
    pass_percent: 65,
    sections: {}
  },
  intermediate: {
    name: 'Intermediate',
    total_questions: 46,
    time_limit_minutes: 75,
    pass_percent: 65,
    sections: {
      '1': { name: 'Licensing & Operating', questions: 6, subsections: ['1A','1B','1C','1D','1E','1G','1H'] },
      '2': { name: 'Electronics & Electrical', questions: 14, subsections: ['2C','2D','2E','2F','2G','2H','2I','2J'] },
      '3': { name: 'Transmitters & Receivers', questions: 7, subsections: ['3A','3C','3E','3G','3H','3I','3K','3M'] },
      '4': { name: 'Feeders & Antennas', questions: 4, subsections: ['4A','4B','4C','4D','4E','4F'] },
      '5': { name: 'Propagation', questions: 3, subsections: ['5A','5B','5C'] },
      '6': { name: 'EMC', questions: 4, subsections: ['6A','6B','6C','6D','6E'] },
      '7': { name: 'Operating Practices', questions: 2, subsections: ['7A','7B','7E','7G'] },
      '8': { name: 'Safety', questions: 3, subsections: ['8A','8B','8D'] },
      '9': { name: 'Measurements & Construction', questions: 3, subsections: ['9A','9B','9C','9E'] }
    }
  },
  full: {
    name: 'Full (D2F)',
    total_questions: 75,
    time_limit_minutes: 150,
    pass_type: 'two_part',
    part1: { questions: 18, pass_mark: 14, pass_percent: 77.7 },
    part2: { questions: 57, pass_mark: 36, pass_percent: 63.2 },
    sections: {
      '1': { name: 'Licensing Conditions', questions: 8, d2f_part: 1, subsections: ['1A','1B','1C','1D','1E','1G','1H'] },
      '7': { name: 'Operating Practices', questions: 10, d2f_part: 1, subsections: ['7A','7E','7G'] },
      '2': { name: 'Electronics & Electrical', questions: 12, d2f_part: 2, subsections: ['2C','2D','2E','2F','2G','2H','2I','2J'] },
      '3': { name: 'Transmitters & Receivers', questions: 12, d2f_part: 2, subsections: ['3A','3C','3E','3G','3H','3I','3K','3M'] },
      '4': { name: 'Feeders & Antennas', questions: 10, d2f_part: 2, subsections: ['4A','4B','4C','4D','4E','4F'] },
      '5': { name: 'Propagation', questions: 6, d2f_part: 2, subsections: ['5A','5B','5C'] },
      '6': { name: 'EMC', questions: 9, d2f_part: 2, subsections: ['6A','6B','6C','6D','6E'] },
      '8': { name: 'Safety', questions: 5, d2f_part: 2, subsections: ['8A','8B','8D'] },
      '9': { name: 'Measurements & Construction', questions: 3, d2f_part: 2, subsections: ['9A','9B','9C','9E'] }
    }
  }
};

const VALID_LEVELS = ['foundation', 'intermediate', 'full'];
const VALID_MODES  = ['mock', 'topic', 'weak_areas'];

class Exam {
  static getConfig() { return EXAM_CONFIG; }

  /**
   * Return level metadata + live question counts from DB
   */
  static async getLevels() {
    const counts = await pool.query(
      `SELECT level, COUNT(*) AS question_count FROM exam_questions WHERE has_diagram = false GROUP BY level`
    );
    const countMap = {};
    counts.rows.forEach(r => { countMap[r.level] = parseInt(r.question_count); });

    return VALID_LEVELS.map(level => {
      const cfg = EXAM_CONFIG[level];
      const base = {
        level,
        name: cfg.name,
        total_questions: cfg.total_questions,
        time_limit_minutes: cfg.time_limit_minutes,
        available_questions: countMap[level] || 0
      };
      if (cfg.pass_type === 'two_part') {
        base.pass_type = 'two_part';
        base.part1 = cfg.part1;
        base.part2 = cfg.part2;
      } else {
        base.pass_percent = cfg.pass_percent;
      }
      return base;
    });
  }

  /**
   * Return sections for a level with live DB question counts
   */
  static async getSections(level) {
    const cfg = EXAM_CONFIG[level];
    if (!cfg) return null;

    const dbRows = await pool.query(
      `SELECT section_code, section_name, COUNT(*) AS question_count
       FROM exam_questions WHERE level = $1 AND has_diagram = false
       GROUP BY section_code, section_name ORDER BY section_code`,
      [level]
    );

    // If config has grouped sections (intermediate), return them merged with DB counts
    if (Object.keys(cfg.sections).length > 0) {
      return Object.entries(cfg.sections).map(([key, sec]) => {
        const available = dbRows.rows
          .filter(r => r.section_code.startsWith(key))
          .reduce((sum, r) => sum + parseInt(r.question_count), 0);
        return {
          section: key,
          name: sec.name,
          target_questions: sec.questions,
          available_questions: available
        };
      });
    }

    // Otherwise return raw DB sections
    return dbRows.rows.map(r => ({
      section_code: r.section_code,
      section_name: r.section_name,
      available_questions: parseInt(r.question_count)
    }));
  }

  /**
   * Select questions for a session. Never returns correct_answer or explanation.
   */
  static async getQuestions(level, mode, section, userId) {
    const cfg = EXAM_CONFIG[level];
    const safeFields = `id, level, section_code, section_name, syllabus_ref,
                        question_text, options, has_diagram, tags`;
    let questions = [];

    if (mode === 'mock') {
      const sectionKeys = Object.keys(cfg.sections);
      if (sectionKeys.length > 0) {
        // Structured draw: fetch target count per top-level section
        for (const sectionKey of sectionKeys) {
          const sec = cfg.sections[sectionKey];
          const result = await pool.query(
            `SELECT ${safeFields} FROM exam_questions
             WHERE level = $1 AND section_code LIKE $2 AND has_diagram = false
             ORDER BY RANDOM() LIMIT $3`,
            [level, sectionKey + '%', sec.questions]
          );
          questions.push(...result.rows);
        }
      } else {
        // No section structure yet — random from full pool
        const result = await pool.query(
          `SELECT ${safeFields} FROM exam_questions
           WHERE level = $1 AND has_diagram = false ORDER BY RANDOM() LIMIT $2`,
          [level, cfg.total_questions]
        );
        questions = result.rows;
      }

    } else if (mode === 'topic') {
      const filter = section ? section + '%' : '%';
      const result = await pool.query(
        `SELECT ${safeFields} FROM exam_questions
         WHERE level = $1 AND section_code LIKE $2 AND has_diagram = false ORDER BY RANDOM()`,
        [level, filter]
      );
      questions = result.rows;

    } else if (mode === 'weak_areas') {
      if (!userId) return [];
      const result = await pool.query(
        `SELECT q.id, q.level, q.section_code, q.section_name, q.syllabus_ref,
                q.question_text, q.options, q.has_diagram, q.tags,
                COUNT(CASE WHEN h.is_correct = false THEN 1 END) AS wrong_count
         FROM exam_questions q
         JOIN exam_question_history h ON h.question_id = q.id
         WHERE h.user_id = $1 AND q.level = $2 AND h.is_correct = false AND q.has_diagram = false
           AND q.id NOT IN (
             SELECT question_id FROM exam_question_history
             WHERE user_id = $1 AND is_correct = true
           )
         GROUP BY q.id, q.level, q.section_code, q.section_name, q.syllabus_ref,
                  q.question_text, q.options, q.has_diagram, q.tags
         ORDER BY wrong_count DESC`,
        [userId, level]
      );
      questions = result.rows;
    }

    return questions;
  }

  /**
   * Score, persist, and return full results for an authenticated attempt
   */
  static async submitAttempt(userId, level, mode, sectionFilter, answers, timeTaken) {
    const cfg = EXAM_CONFIG[level];
    const questionIds = Object.keys(answers);
    if (questionIds.length === 0) throw new Error('No answers provided');

    // Fetch correct answers
    const qResult = await pool.query(
      `SELECT id, correct_answer, explanation, section_code, d2f_part
       FROM exam_questions WHERE id = ANY($1::uuid[])`,
      [questionIds]
    );
    const qMap = {};
    qResult.rows.forEach(q => { qMap[q.id] = q; });

    // Score
    let correct = 0;
    const sectionScores = {};
    let d2fP1Correct = 0, d2fP1Total = 0, d2fP2Correct = 0, d2fP2Total = 0;
    const perQuestion = [];

    for (const qId of questionIds) {
      const q = qMap[qId];
      if (!q) continue;
      const selected = (answers[qId] || '').toUpperCase();
      const isCorrect = selected === q.correct_answer.trim();
      if (isCorrect) correct++;

      // Section breakdown by first character of section_code
      const sk = q.section_code.charAt(0);
      if (!sectionScores[sk]) sectionScores[sk] = { correct: 0, total: 0 };
      sectionScores[sk].total++;
      if (isCorrect) sectionScores[sk].correct++;

      // D2F part tracking
      if (level === 'full' && q.d2f_part) {
        if (q.d2f_part === 1) { d2fP1Total++; if (isCorrect) d2fP1Correct++; }
        else                   { d2fP2Total++; if (isCorrect) d2fP2Correct++; }
      }

      perQuestion.push({
        question_id: qId,
        selected_answer: selected,
        correct_answer: q.correct_answer.trim(),
        is_correct: isCorrect,
        explanation: q.explanation
      });
    }

    const total = perQuestion.length;
    const scorePercent = total > 0 ? Math.round((correct / total) * 10000) / 100 : 0;

    let passed = false;
    let d2fP1Passed = null, d2fP2Passed = null;
    if (cfg.pass_type === 'two_part') {
      d2fP1Passed = d2fP1Total > 0 && d2fP1Correct >= cfg.part1.pass_mark;
      d2fP2Passed = d2fP2Total > 0 && d2fP2Correct >= cfg.part2.pass_mark;
      passed = d2fP1Passed && d2fP2Passed;
    } else {
      passed = scorePercent >= cfg.pass_percent;
    }

    // Persist attempt
    const attemptResult = await pool.query(
      `INSERT INTO exam_attempts
         (user_id, level, mode, section_filter, total_questions, correct_answers,
          score_percent, passed, time_taken_seconds, time_limit_seconds, answers, section_scores,
          d2f_part1_correct, d2f_part1_total, d2f_part1_passed,
          d2f_part2_correct, d2f_part2_total, d2f_part2_passed)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18)
       RETURNING id, created_at`,
      [
        userId, level, mode, sectionFilter || null,
        total, correct, scorePercent, passed,
        timeTaken || 0, (cfg.time_limit_minutes || 0) * 60,
        JSON.stringify(answers), JSON.stringify(sectionScores),
        d2fP1Correct || null, d2fP1Total || null, d2fP1Passed,
        d2fP2Correct || null, d2fP2Total || null, d2fP2Passed
      ]
    );
    const attemptId = attemptResult.rows[0].id;

    // Persist per-question history
    if (perQuestion.length > 0) {
      const vals = [];
      const params = perQuestion.map((pq, i) => {
        vals.push(userId, pq.question_id, attemptId, pq.selected_answer, pq.is_correct);
        const b = i * 5 + 1;
        return `($${b},$${b+1},$${b+2},$${b+3},$${b+4})`;
      });
      await pool.query(
        `INSERT INTO exam_question_history
           (user_id, question_id, attempt_id, selected_answer, is_correct)
         VALUES ${params.join(',')}`,
        vals
      );
    }

    // Update question stats
    const allIds    = perQuestion.map(pq => pq.question_id);
    const correctIds = perQuestion.filter(pq => pq.is_correct).map(pq => pq.question_id);
    await pool.query(
      `UPDATE exam_questions SET times_seen = times_seen + 1 WHERE id = ANY($1::uuid[])`,
      [allIds]
    );
    if (correctIds.length > 0) {
      await pool.query(
        `UPDATE exam_questions SET times_correct = times_correct + 1 WHERE id = ANY($1::uuid[])`,
        [correctIds]
      );
    }

    return {
      attempt_id: attemptId,
      created_at: attemptResult.rows[0].created_at,
      level, mode,
      total_questions: total,
      correct_answers: correct,
      score_percent: scorePercent,
      passed,
      section_scores: sectionScores,
      ...(level === 'full' ? {
        d2f_part1: { correct: d2fP1Correct, total: d2fP1Total, passed: d2fP1Passed },
        d2f_part2: { correct: d2fP2Correct, total: d2fP2Total, passed: d2fP2Passed }
      } : {}),
      results: perQuestion
    };
  }

  /**
   * Stateless answer check — no auth, no persistence, returns correct_answer for review
   */
  static async checkAnswers(answers) {
    const questionIds = Object.keys(answers);
    if (questionIds.length === 0) return { total_questions: 0, correct_answers: 0, results: [] };

    const qResult = await pool.query(
      `SELECT id, correct_answer, explanation, section_code, d2f_part
       FROM exam_questions WHERE id = ANY($1::uuid[])`,
      [questionIds]
    );
    const qMap = {};
    qResult.rows.forEach(q => { qMap[q.id] = q; });

    let correct = 0;
    let d2fP1Correct = 0, d2fP1Total = 0, d2fP2Correct = 0, d2fP2Total = 0;
    const sectionScores = {};
    const results = [];

    for (const qId of questionIds) {
      const q = qMap[qId];
      if (!q) continue;
      const selected = (answers[qId] || '').toUpperCase();
      const isCorrect = selected === q.correct_answer.trim();
      if (isCorrect) correct++;

      if (q.d2f_part) {
        if (q.d2f_part === 1) { d2fP1Total++; if (isCorrect) d2fP1Correct++; }
        if (q.d2f_part === 2) { d2fP2Total++; if (isCorrect) d2fP2Correct++; }
      }

      const sk = q.section_code.charAt(0);
      if (!sectionScores[sk]) sectionScores[sk] = { correct: 0, total: 0 };
      sectionScores[sk].total++;
      if (isCorrect) sectionScores[sk].correct++;

      results.push({
        question_id: qId,
        selected_answer: selected,
        correct_answer: q.correct_answer.trim(),
        is_correct: isCorrect,
        explanation: q.explanation
      });
    }

    const total = results.length;
    const response = {
      total_questions: total,
      correct_answers: correct,
      score_percent: total > 0 ? Math.round((correct / total) * 10000) / 100 : 0,
      section_scores: sectionScores,
      results
    };

    // Add D2F two-part scoring if applicable
    if (d2fP1Total > 0 || d2fP2Total > 0) {
      const cfg = EXAM_CONFIG.full;
      response.d2f_part1 = { correct: d2fP1Correct, total: d2fP1Total, passed: d2fP1Correct >= cfg.part1.pass_mark };
      response.d2f_part2 = { correct: d2fP2Correct, total: d2fP2Total, passed: d2fP2Correct >= cfg.part2.pass_mark };
      response.passed = response.d2f_part1.passed && response.d2f_part2.passed;
    }

    return response;
  }

  /**
   * Attempt history (last 20, optionally filtered by level)
   */
  static async getHistory(userId, level) {
    const params = [userId];
    let where = 'WHERE user_id = $1';
    if (level) { params.push(level); where += ` AND level = $2`; }

    const result = await pool.query(
      `SELECT id, level, mode, section_filter, total_questions, correct_answers,
              score_percent, passed, time_taken_seconds, created_at,
              d2f_part1_correct, d2f_part1_total, d2f_part1_passed,
              d2f_part2_correct, d2f_part2_total, d2f_part2_passed,
              section_scores
       FROM exam_attempts ${where}
       ORDER BY created_at DESC LIMIT 20`,
      params
    );
    return result.rows;
  }

  /**
   * Aggregate stats + per-section accuracy for a user/level
   */
  static async getStats(userId, level) {
    const agg = await pool.query(
      `SELECT COUNT(*) AS total_attempts,
              MAX(score_percent) AS best_score,
              AVG(score_percent) AS avg_score,
              COUNT(CASE WHEN passed THEN 1 END) AS pass_count
       FROM exam_attempts WHERE user_id = $1 AND level = $2`,
      [userId, level]
    );

    const sections = await pool.query(
      `SELECT q.section_code,
              COUNT(*) AS total_answered,
              COUNT(CASE WHEN h.is_correct THEN 1 END) AS correct
       FROM exam_question_history h
       JOIN exam_questions q ON q.id = h.question_id
       WHERE h.user_id = $1 AND q.level = $2
       GROUP BY q.section_code ORDER BY q.section_code`,
      [userId, level]
    );

    const a = agg.rows[0];
    const totalAttempts = parseInt(a.total_attempts);
    return {
      total_attempts: totalAttempts,
      best_score:  a.best_score  ? parseFloat(a.best_score)  : null,
      avg_score:   a.avg_score   ? Math.round(parseFloat(a.avg_score) * 100) / 100 : null,
      pass_count:  parseInt(a.pass_count),
      pass_rate:   totalAttempts > 0
        ? Math.round((parseInt(a.pass_count) / totalAttempts) * 10000) / 100
        : null,
      section_performance: sections.rows.map(r => ({
        section_code: r.section_code,
        total_answered: parseInt(r.total_answered),
        correct: parseInt(r.correct),
        accuracy: Math.round((parseInt(r.correct) / parseInt(r.total_answered)) * 10000) / 100
      }))
    };
  }

  /**
   * Sections the user repeatedly gets wrong (for drilling)
   */
  static async getWeakAreas(userId, level) {
    const result = await pool.query(
      `SELECT q.section_code, q.section_name,
              COUNT(*) AS times_wrong,
              COUNT(DISTINCT q.id) AS unique_questions
       FROM exam_question_history h
       JOIN exam_questions q ON q.id = h.question_id
       WHERE h.user_id = $1 AND q.level = $2 AND h.is_correct = false
       GROUP BY q.section_code, q.section_name
       ORDER BY times_wrong DESC`,
      [userId, level]
    );
    return result.rows.map(r => ({
      section_code: r.section_code,
      section_name: r.section_name,
      times_wrong: parseInt(r.times_wrong),
      unique_questions: parseInt(r.unique_questions)
    }));
  }

  /**
   * Single attempt detail (verifies ownership)
   */
  static async getAttempt(attemptId, userId) {
    const result = await pool.query(
      `SELECT * FROM exam_attempts WHERE id = $1 AND user_id = $2`,
      [attemptId, userId]
    );
    return result.rows[0] || null;
  }
}

module.exports = { Exam, EXAM_CONFIG, VALID_LEVELS, VALID_MODES };
