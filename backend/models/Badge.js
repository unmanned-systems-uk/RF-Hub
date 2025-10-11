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
