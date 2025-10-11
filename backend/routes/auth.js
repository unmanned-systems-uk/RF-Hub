const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { generateToken, authenticateToken } = require('../middleware/auth');

/**
 * POST /api/auth/register
 * Register a new user
 */
router.post('/register', async (req, res, next) => {
  try {
    const { email, password, username, first_name, last_name } = req.body;

    // Validation
    if (!email || !password || !username) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['email', 'password', 'username']
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Password strength validation (min 8 chars, 1 uppercase, 1 lowercase, 1 number)
    if (password.length < 8) {
      return res.status(400).json({
        error: 'Password must be at least 8 characters long'
      });
    }

    // Check if email exists
    if (await User.emailExists(email)) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    // Check if username exists
    if (await User.usernameExists(username)) {
      return res.status(409).json({ error: 'Username already taken' });
    }

    // Create user
    const user = await User.create({
      email,
      password,
      username,
      first_name: first_name || null,
      last_name: last_name || null
    });

    // Generate token
    const token = generateToken(user);

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        user_id: user.user_id,
        email: user.email,
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name
      }
    });

  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/auth/login
 * User login
 */
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        error: 'Email/username and password required'
      });
    }

    // Find user by email or username
    const user = await User.findByEmailOrUsername(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Verify password
    const isValidPassword = await User.verifyPassword(password, user.password_hash);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Update last login
    await User.updateLastLogin(user.user_id);

    // Generate token
    const token = generateToken(user);

    res.json({
      message: 'Login successful',
      token,
      user: {
        user_id: user.user_id,
        email: user.email,
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        avatar_url: user.avatar_url,
        theme: user.theme
      }
    });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/auth/profile
 * Get current user profile (protected)
 */
router.get('/profile', authenticateToken, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.user_id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ user });

  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/auth/profile
 * Update user profile (protected)
 */
router.put('/profile', authenticateToken, async (req, res, next) => {
  try {
    const updates = req.body;

    // Don't allow updating sensitive fields
    delete updates.email;
    delete updates.password_hash;
    delete updates.user_id;

    const updatedUser = await User.updateProfile(req.user.user_id, updates);

    res.json({
      message: 'Profile updated successfully',
      user: updatedUser
    });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/auth/stats
 * Get user statistics (protected)
 */
router.get('/stats', authenticateToken, async (req, res, next) => {
  try {
    const stats = await User.getStatistics(req.user.user_id);
    res.json({ stats });
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/auth/verify-token
 * Verify if token is valid
 */
router.post('/verify-token', authenticateToken, (req, res) => {
  res.json({
    valid: true,
    user: req.user
  });
});

module.exports = router;
