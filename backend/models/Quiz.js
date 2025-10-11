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
