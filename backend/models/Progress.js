const pool = require('../config/database');

class Progress {
  /**
   * Get user's progress on a module
   */
  static async getModuleProgress(user_id, module_id) {
    const result = await pool.query(
      `SELECT * FROM user_progress
       WHERE user_id = $1 AND module_id = $2`,
      [user_id, module_id]
    );
    return result.rows[0];
  }

  /**
   * Get all progress for a user
   */
  static async getUserProgress(user_id) {
    const result = await pool.query(
      `SELECT
        up.*,
        m.title,
        m.slug,
        m.difficulty_level,
        m.category,
        m.tier,
        m.estimated_time_minutes
       FROM user_progress up
       JOIN modules m ON up.module_id = m.module_id
       WHERE up.user_id = $1
       ORDER BY up.last_accessed_at DESC`,
      [user_id]
    );
    return result.rows;
  }

  /**
   * Start or update module progress
   */
  static async upsertProgress(user_id, module_id, progress_percentage = 0) {
    const result = await pool.query(
      `INSERT INTO user_progress (user_id, module_id, status, progress_percentage, last_accessed_at)
       VALUES ($1, $2, 'in_progress', $3, CURRENT_TIMESTAMP)
       ON CONFLICT (user_id, module_id)
       DO UPDATE SET
         progress_percentage = GREATEST(user_progress.progress_percentage, $3),
         last_accessed_at = CURRENT_TIMESTAMP,
         status = CASE
           WHEN $3 >= 100 THEN 'completed'::progress_status
           ELSE 'in_progress'::progress_status
         END,
         completed_at = CASE
           WHEN $3 >= 100 AND user_progress.completed_at IS NULL THEN CURRENT_TIMESTAMP
           ELSE user_progress.completed_at
         END
       RETURNING *`,
      [user_id, module_id, progress_percentage]
    );

    return result.rows[0];
  }

  /**
   * Mark module as completed
   */
  static async completeModule(user_id, module_id, time_spent_minutes = null) {
    const result = await pool.query(
      `UPDATE user_progress
       SET status = 'completed',
           progress_percentage = 100,
           completed_at = CURRENT_TIMESTAMP,
           time_spent_minutes = COALESCE($3, time_spent_minutes)
       WHERE user_id = $1 AND module_id = $2
       RETURNING *`,
      [user_id, module_id, time_spent_minutes]
    );

    // Update user's total completed modules
    await pool.query(
      `UPDATE users
       SET total_modules_completed = (
         SELECT COUNT(*) FROM user_progress
         WHERE user_id = $1 AND status = 'completed'
       )
       WHERE user_id = $1`,
      [user_id]
    );

    return result.rows[0];
  }

  /**
   * Update time spent on module
   */
  static async updateTimeSpent(user_id, module_id, additional_minutes) {
    const result = await pool.query(
      `UPDATE user_progress
       SET time_spent_minutes = COALESCE(time_spent_minutes, 0) + $3,
           last_accessed_at = CURRENT_TIMESTAMP
       WHERE user_id = $1 AND module_id = $2
       RETURNING *`,
      [user_id, module_id, additional_minutes]
    );
    return result.rows[0];
  }

  /**
   * Get progress statistics for a user
   */
  static async getUserStats(user_id) {
    const result = await pool.query(
      `SELECT
        COUNT(*) as total_modules_started,
        COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_modules,
        COUNT(CASE WHEN status = 'in_progress' THEN 1 END) as in_progress_modules,
        COALESCE(SUM(time_spent_minutes), 0) as total_time_minutes,
        COALESCE(AVG(progress_percentage), 0) as avg_progress
       FROM user_progress
       WHERE user_id = $1`,
      [user_id]
    );
    return result.rows[0];
  }

  /**
   * Get recently accessed modules
   */
  static async getRecentModules(user_id, limit = 5) {
    const result = await pool.query(
      `SELECT
        up.*,
        m.title,
        m.slug,
        m.difficulty_level
       FROM user_progress up
       JOIN modules m ON up.module_id = m.module_id
       WHERE up.user_id = $1
       ORDER BY up.last_accessed_at DESC
       LIMIT $2`,
      [user_id, limit]
    );
    return result.rows;
  }
}

module.exports = Progress;
