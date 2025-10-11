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
