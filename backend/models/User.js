const pool = require('../config/database');
const bcrypt = require('bcrypt');

class User {
  /**
   * Create a new user
   */
  static async create({ email, password, username, first_name, last_name }) {
    // Hash password
    const password_hash = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users (email, password_hash, username, first_name, last_name)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING user_id, email, username, first_name, last_name,
                 created_at, total_modules_completed, total_quizzes_passed,
                 total_badges_earned, current_streak_days`,
      [email, password_hash, username, first_name, last_name]
    );

    return result.rows[0];
  }

  /**
   * Find user by email
   */
  static async findByEmail(email) {
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    return result.rows[0];
  }

  /**
   * Find user by username
   */
  static async findByUsername(username) {
    const result = await pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username]
    );
    return result.rows[0];
  }

  /**
   * Find user by email or username
   */
  static async findByEmailOrUsername(emailOrUsername) {
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1 OR username = $1',
      [emailOrUsername]
    );
    return result.rows[0];
  }

  /**
   * Find user by ID (without password)
   */
  static async findById(user_id) {
    const result = await pool.query(
      `SELECT user_id, email, username, first_name, last_name,
              bio, avatar_url, timezone, theme, email_notifications,
              total_modules_completed, total_quizzes_passed,
              total_badges_earned, current_streak_days,
              created_at, last_login, updated_at
       FROM users
       WHERE user_id = $1`,
      [user_id]
    );
    return result.rows[0];
  }

  /**
   * Verify password
   */
  static async verifyPassword(plainPassword, passwordHash) {
    return await bcrypt.compare(plainPassword, passwordHash);
  }

  /**
   * Update user profile
   */
  static async updateProfile(user_id, updates) {
    const { first_name, last_name, bio, avatar_url, timezone, theme, email_notifications } = updates;

    // Build dynamic update query
    const fields = [];
    const values = [];
    let paramCount = 1;

    if (first_name !== undefined) {
      fields.push(`first_name = $${paramCount++}`);
      values.push(first_name);
    }
    if (last_name !== undefined) {
      fields.push(`last_name = $${paramCount++}`);
      values.push(last_name);
    }
    if (bio !== undefined) {
      fields.push(`bio = $${paramCount++}`);
      values.push(bio);
    }
    if (avatar_url !== undefined) {
      fields.push(`avatar_url = $${paramCount++}`);
      values.push(avatar_url);
    }
    if (timezone !== undefined) {
      fields.push(`timezone = $${paramCount++}`);
      values.push(timezone);
    }
    if (theme !== undefined) {
      fields.push(`theme = $${paramCount++}`);
      values.push(theme);
    }
    if (email_notifications !== undefined) {
      fields.push(`email_notifications = $${paramCount++}`);
      values.push(email_notifications);
    }

    if (fields.length === 0) {
      throw new Error('No fields to update');
    }

    fields.push('updated_at = CURRENT_TIMESTAMP');
    values.push(user_id);

    const query = `
      UPDATE users
      SET ${fields.join(', ')}
      WHERE user_id = $${paramCount}
      RETURNING user_id, email, username, first_name, last_name,
                bio, avatar_url, timezone, theme, email_notifications
    `;

    const result = await pool.query(query, values);
    return result.rows[0];
  }

  /**
   * Update last login timestamp
   */
  static async updateLastLogin(user_id) {
    await pool.query(
      'UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE user_id = $1',
      [user_id]
    );
  }

  /**
   * Check if email exists
   */
  static async emailExists(email) {
    const result = await pool.query(
      'SELECT EXISTS(SELECT 1 FROM users WHERE email = $1)',
      [email]
    );
    return result.rows[0].exists;
  }

  /**
   * Check if username exists
   */
  static async usernameExists(username) {
    const result = await pool.query(
      'SELECT EXISTS(SELECT 1 FROM users WHERE username = $1)',
      [username]
    );
    return result.rows[0].exists;
  }

  /**
   * Get user statistics
   */
  static async getStatistics(user_id) {
    const result = await pool.query(
      `SELECT
        total_modules_completed,
        total_quizzes_passed,
        total_badges_earned,
        current_streak_days,
        (SELECT COUNT(*) FROM user_progress WHERE user_id = $1 AND status = 'completed') as completed_count,
        (SELECT COUNT(*) FROM user_progress WHERE user_id = $1 AND status = 'in_progress') as in_progress_count,
        (SELECT COUNT(*) FROM user_badges WHERE user_id = $1) as badges_count,
        (SELECT AVG(score) FROM quiz_attempts WHERE user_id = $1) as average_score
       FROM users WHERE user_id = $1`,
      [user_id]
    );
    return result.rows[0];
  }
}

module.exports = User;
