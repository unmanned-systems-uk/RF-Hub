const { authenticateToken } = require('./auth');
const pool = require('../config/database');

// Gate: user must have is_admin = true in the users table.
// is_admin is NOT included in the JWT payload, so we do a DB lookup.
// When a role column is added to users, replace this lookup with a
// role check (e.g. req.user.role === 'admin').
async function requireAdmin(req, res, next) {
  // First run the standard JWT check
  authenticateToken(req, res, async () => {
    try {
      const result = await pool.query(
        'SELECT is_admin FROM users WHERE user_id = $1',
        [req.user.user_id]
      );
      if (!result.rows.length || !result.rows[0].is_admin) {
        return res.status(403).json({ error: 'Forbidden: admin access required' });
      }
      next();
    } catch (err) {
      next(err);
    }
  });
}

module.exports = { requireAdmin };
