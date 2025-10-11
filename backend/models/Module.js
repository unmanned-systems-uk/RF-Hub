const pool = require('../config/database');

class Module {
  /**
   * Get all modules with optional filters
   */
  static async getAll(filters = {}) {
    const { difficulty, category, tier } = filters;

    let query = `
      SELECT module_id, title, slug, description, difficulty_level,
             category, tier, order_index, estimated_time_minutes,
             is_published, created_at, updated_at
      FROM modules
      WHERE is_published = true
    `;
    const params = [];
    let paramCount = 1;

    if (difficulty) {
      query += ` AND difficulty_level = $${paramCount++}`;
      params.push(difficulty);
    }

    if (category) {
      query += ` AND category = $${paramCount++}`;
      params.push(category);
    }

    if (tier) {
      query += ` AND tier = $${paramCount++}`;
      params.push(tier);
    }

    query += ' ORDER BY order_index ASC';

    const result = await pool.query(query, params);
    return result.rows;
  }

  /**
   * Get single module by ID
   */
  static async getById(module_id) {
    const result = await pool.query(
      `SELECT * FROM modules WHERE module_id = $1 AND is_published = true`,
      [module_id]
    );
    return result.rows[0];
  }

  /**
   * Get module by slug
   */
  static async getBySlug(slug) {
    const result = await pool.query(
      `SELECT * FROM modules WHERE slug = $1 AND is_published = true`,
      [slug]
    );
    return result.rows[0];
  }

  /**
   * Get module with user progress
   */
  static async getWithProgress(module_id, user_id) {
    const result = await pool.query(
      `SELECT
        m.*,
        up.status,
        up.progress_percentage,
        up.time_spent_minutes,
        up.last_accessed_at,
        up.completed_at
       FROM modules m
       LEFT JOIN user_progress up ON m.module_id = up.module_id AND up.user_id = $2
       WHERE m.module_id = $1 AND m.is_published = true`,
      [module_id, user_id]
    );
    return result.rows[0];
  }

  /**
   * Search modules
   */
  static async search(searchTerm) {
    const result = await pool.query(
      `SELECT module_id, title, slug, description, difficulty_level,
              category, tier
       FROM modules
       WHERE is_published = true
         AND (title ILIKE $1 OR description ILIKE $1 OR category ILIKE $1)
       ORDER BY order_index ASC`,
      [`%${searchTerm}%`]
    );
    return result.rows;
  }

  /**
   * Get modules by tier
   */
  static async getByTier(tier) {
    const result = await pool.query(
      `SELECT module_id, title, slug, description, difficulty_level,
              category, tier, order_index, estimated_time_minutes
       FROM modules
       WHERE tier = $1 AND is_published = true
       ORDER BY order_index ASC`,
      [tier]
    );
    return result.rows;
  }

  /**
   * Get module statistics
   */
  static async getStatistics(module_id) {
    const result = await pool.query(
      `SELECT
        COUNT(DISTINCT up.user_id) as total_students,
        COUNT(DISTINCT CASE WHEN up.status = 'completed' THEN up.user_id END) as completed_count,
        AVG(CASE WHEN up.status = 'completed' THEN up.time_spent_minutes END) as avg_completion_time,
        AVG(qa.score) as avg_quiz_score
       FROM modules m
       LEFT JOIN user_progress up ON m.module_id = up.module_id
       LEFT JOIN quiz_attempts qa ON m.module_id = qa.module_id
       WHERE m.module_id = $1`,
      [module_id]
    );
    return result.rows[0];
  }
}

module.exports = Module;
