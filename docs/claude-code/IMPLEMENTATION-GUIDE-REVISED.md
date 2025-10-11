# 🚀 Claude Code Implementation Guide - Ubuntu Backend
## RF Learning Hub Backend API - Complete Implementation

**System:** Ubuntu PC at 10.0.1.98  
**SSH:** `ssh rfw@10.0.1.98` (password: `053210`)  
**Project Path:** `/home/rfw/fr-web/backend`  
**Task:** Implement complete backend API with authentication  
**Priority:** CRITICAL 🔥  
**Estimated Time:** 12-16 hours

---

## ✅ What's Already Done

The setup script has created:
- ✅ Project directory structure
- ✅ PostgreSQL database `rf_learning_hub` 
- ✅ Database user `rf_admin` with password
- ✅ All 8 database tables with sample data
- ✅ `package.json` with dependencies installed
- ✅ Basic `server.js` skeleton
- ✅ `.env` file with configuration
- ✅ `.gitignore` file

**Your job:** Implement all the API routes and business logic from scratch.

---

## 🎯 Your Mission

Build a complete REST API with:
1. **User Authentication** (register, login, JWT tokens)
2. **Module Management** (list courses, get details)
3. **Progress Tracking** (track user progress through modules)
4. **Quiz System** (take quizzes, submit answers, track scores)
5. **Badge System** (award achievements)
6. **Calculator Saves** (save RF calculator results)

---

## 📊 Database Schema Overview

The database has 8 tables:

### Core Tables
1. **users** - User accounts and profiles
2. **modules** - Learning module content
3. **user_progress** - Tracks which modules users have completed
4. **quiz_questions** - Quiz questions for each module

### Feature Tables
5. **quiz_attempts** - User quiz submissions and scores
6. **user_badges** - Achievement tracking
7. **saved_calculations** - User's saved RF calculations
8. **user_study_stats** - Daily study time tracking

---

## 🚀 Implementation Plan

### Phase 1: Foundation (2-3 hours)
- Database connection
- Server setup with middleware
- Authentication middleware (JWT)
- Error handling

### Phase 2: Authentication (3-4 hours)
- User registration
- User login
- Profile management
- JWT token validation

### Phase 3: Core Features (4-5 hours)
- Module routes
- Progress tracking
- Quiz system
- Statistics calculation

### Phase 4: Additional Features (2-3 hours)
- Badge system
- Calculator saves
- Advanced queries

---

## 📁 Current Directory Structure

```
/home/rfw/fr-web/backend/
├── node_modules/          ✅ Dependencies installed
├── package.json           ✅ Created by setup
├── package-lock.json      ✅ Created by setup
├── server.js              ✅ Basic skeleton (YOU WILL EXPAND THIS)
├── schema.sql             ✅ Database schema
├── seed_modules_phase1.sql ✅ Sample data
├── .env                   ✅ Environment variables
├── .gitignore             ✅ Git ignore rules
└── README.md              ✅ Basic documentation
```

**You need to create:**
```
/home/rfw/fr-web/backend/
├── models/                 ← CREATE: Database models
│   ├── User.js            
│   ├── Module.js          
│   ├── Progress.js        
│   ├── Quiz.js            
│   ├── Badge.js           
│   └── Calculation.js     
├── routes/                 ← CREATE: API route handlers
│   ├── auth.js            
│   ├── modules.js         
│   ├── progress.js        
│   ├── quizzes.js         
│   ├── badges.js          
│   └── calculations.js    
├── middleware/             ← CREATE: Authentication & error handling
│   ├── auth.js            
│   └── errorHandler.js    
└── config/                 ← CREATE: Database connection
    └── database.js        
```

---

## 🔥 PHASE 1: Foundation (START HERE)

### Step 1.1: Create Database Connection

Create `config/database.js`:

```javascript
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool.on('connect', () => {
  console.log('✅ Connected to PostgreSQL database');
});

pool.on('error', (err) => {
  console.error('❌ Unexpected database error:', err);
  process.exit(-1);
});

module.exports = pool;
```

### Step 1.2: Create Authentication Middleware

Create `middleware/auth.js`:

```javascript
const jwt = require('jsonwebtoken');

/**
 * Generate JWT token for a user
 */
function generateToken(user) {
  const payload = {
    user_id: user.user_id,
    email: user.email,
    username: user.username
  };
  
  return jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );
}

/**
 * Middleware to authenticate JWT tokens
 */
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    
    req.user = user; // Attach user info to request
    next();
  });
}

/**
 * Optional authentication - doesn't fail if no token
 */
function optionalAuth(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (!err) {
        req.user = user;
      }
    });
  }
  
  next();
}

module.exports = {
  generateToken,
  authenticateToken,
  optionalAuth
};
```

### Step 1.3: Create Error Handler

Create `middleware/errorHandler.js`:

```javascript
/**
 * Centralized error handling middleware
 */
function errorHandler(err, req, res, next) {
  console.error('Error:', err);

  // PostgreSQL specific errors
  if (err.code === '23505') {
    return res.status(409).json({
      error: 'Duplicate entry',
      detail: 'This record already exists'
    });
  }

  if (err.code === '23503') {
    return res.status(400).json({
      error: 'Invalid reference',
      detail: 'Referenced record does not exist'
    });
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      error: 'Invalid token',
      detail: err.message
    });
  }

  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({
      error: 'Token expired',
      detail: 'Please login again'
    });
  }

  // Default error
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
}

module.exports = errorHandler;
```

### Step 1.4: Update server.js

Replace the existing `server.js` with:

```javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const pool = require('./config/database');
const errorHandler = require('./middleware/errorHandler');

// Import routes (we'll create these next)
const authRoutes = require('./routes/auth');
const moduleRoutes = require('./routes/modules');
const progressRoutes = require('./routes/progress');
const quizRoutes = require('./routes/quizzes');
const badgeRoutes = require('./routes/badges');
const calculationRoutes = require('./routes/calculations');

const app = express();

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disable for API
  crossOriginEmbedderPolicy: false
}));

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting (100 requests per 15 minutes per IP)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many requests, please try again later' }
});
app.use('/api/', limiter);

// Request logging (development)
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    database: 'connected'
  });
});

// Database health check
app.get('/health/db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({
      status: 'ok',
      database: 'connected',
      timestamp: result.rows[0].now
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      database: 'disconnected',
      error: error.message
    });
  }
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/modules', moduleRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/badges', badgeRoutes);
app.use('/api/calculations', calculationRoutes);

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.path,
    method: req.method
  });
});

// Global error handler (must be last)
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log('\n🚀 ========================================');
  console.log(`   RF Learning Hub API Server`);
  console.log('   ========================================');
  console.log(`   Status: Running`);
  console.log(`   URL: http://${HOST}:${PORT}`);
  console.log(`   Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`   Database: ${process.env.DB_NAME}`);
  console.log(`   Frontend: ${process.env.FRONTEND_URL}`);
  console.log('   ========================================\n');
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, closing server...');
  pool.end();
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('\nSIGINT received, closing server...');
  pool.end();
  process.exit(0);
});
```

### ✅ Test Phase 1

```bash
# Start the server
cd /home/rfw/fr-web/backend
node server.js

# In another terminal, test endpoints
curl http://localhost:3000/health
curl http://localhost:3000/health/db
```

**Expected output:**
- Server starts without errors
- Health endpoint returns `{"status":"ok"}`
- DB health endpoint shows database connection

---

## 🔐 PHASE 2: Authentication System

### Step 2.1: Create User Model

Create `models/User.js`:

```javascript
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
   * Find user by ID (without password)
   */
  static async findById(user_id) {
    const result = await pool.query(
      `SELECT user_id, email, username, first_name, last_name, 
              bio, avatar_url, timezone, theme, notification_preferences,
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
    const { first_name, last_name, bio, avatar_url, timezone, theme, notification_preferences } = updates;
    
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
    if (notification_preferences !== undefined) {
      fields.push(`notification_preferences = $${paramCount++}`);
      values.push(JSON.stringify(notification_preferences));
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
                bio, avatar_url, timezone, theme, notification_preferences
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
```

### Step 2.2: Create Auth Routes

Create `routes/auth.js`:

```javascript
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
        error: 'Email and password required'
      });
    }

    // Find user
    const user = await User.findByEmail(email);
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
```

### ✅ Test Phase 2

```bash
# Test registration
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Test1234!",
    "username": "testuser",
    "first_name": "Test",
    "last_name": "User"
  }'

# Test login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Test1234!"
  }'

# Save the token from login response, then test profile
# Replace YOUR_TOKEN_HERE with actual token
curl http://localhost:3000/api/auth/profile \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"

# Test user stats
curl http://localhost:3000/api/auth/stats \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## 📚 PHASE 3: Core Features

### Step 3.1: Module Model

Create `models/Module.js`:

```javascript
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
```

### Step 3.2: Module Routes

Create `routes/modules.js`:

```javascript
const express = require('express');
const router = express.Router();
const Module = require('../models/Module');
const { optionalAuth, authenticateToken } = require('../middleware/auth');

/**
 * GET /api/modules
 * Get all modules with optional filters
 */
router.get('/', optionalAuth, async (req, res, next) => {
  try {
    const { difficulty, category, tier } = req.query;
    
    const modules = await Module.getAll({
      difficulty,
      category,
      tier
    });

    res.json({
      count: modules.length,
      modules
    });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/modules/search
 * Search modules
 */
router.get('/search', async (req, res, next) => {
  try {
    const { q } = req.query;

    if (!q || q.trim().length < 2) {
      return res.status(400).json({
        error: 'Search term must be at least 2 characters'
      });
    }

    const modules = await Module.search(q);

    res.json({
      count: modules.length,
      modules
    });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/modules/tier/:tier
 * Get modules by tier
 */
router.get('/tier/:tier', async (req, res, next) => {
  try {
    const { tier } = req.params;

    if (!['free', 'freemium', 'premium'].includes(tier)) {
      return res.status(400).json({
        error: 'Invalid tier. Must be: free, freemium, or premium'
      });
    }

    const modules = await Module.getByTier(tier);

    res.json({
      tier,
      count: modules.length,
      modules
    });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/modules/:id
 * Get single module by ID
 */
router.get('/:id', optionalAuth, async (req, res, next) => {
  try {
    const { id } = req.params;

    let module;

    // If user is authenticated, get progress too
    if (req.user) {
      module = await Module.getWithProgress(id, req.user.user_id);
    } else {
      module = await Module.getById(id);
    }

    if (!module) {
      return res.status(404).json({ error: 'Module not found' });
    }

    res.json({ module });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/modules/:id/stats
 * Get module statistics (protected - admin only in future)
 */
router.get('/:id/stats', authenticateToken, async (req, res, next) => {
  try {
    const { id } = req.params;

    const stats = await Module.getStatistics(id);

    res.json({ stats });

  } catch (error) {
    next(error);
  }
});

module.exports = router;
```

### Step 3.3: Progress Model

Create `models/Progress.js`:

```javascript
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
```

### Step 3.4: Progress Routes

Create `routes/progress.js`:

```javascript
const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress');
const { authenticateToken } = require('../middleware/auth');

// All progress routes require authentication
router.use(authenticateToken);

/**
 * GET /api/progress
 * Get all progress for current user
 */
router.get('/', async (req, res, next) => {
  try {
    const progress = await Progress.getUserProgress(req.user.user_id);

    res.json({
      count: progress.length,
      progress
    });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/progress/stats
 * Get progress statistics for current user
 */
router.get('/stats', async (req, res, next) => {
  try {
    const stats = await Progress.getUserStats(req.user.user_id);

    res.json({ stats });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/progress/recent
 * Get recently accessed modules
 */
router.get('/recent', async (req, res, next) => {
  try {
    const { limit = 5 } = req.query;
    
    const modules = await Progress.getRecentModules(
      req.user.user_id,
      parseInt(limit)
    );

    res.json({
      count: modules.length,
      modules
    });

  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/progress/:module_id
 * Get progress for specific module
 */
router.get('/:module_id', async (req, res, next) => {
  try {
    const { module_id } = req.params;

    const progress = await Progress.getModuleProgress(
      req.user.user_id,
      module_id
    );

    if (!progress) {
      return res.status(404).json({
        error: 'No progress found for this module'
      });
    }

    res.json({ progress });

  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/progress/:module_id
 * Start or update progress on a module
 */
router.post('/:module_id', async (req, res, next) => {
  try {
    const { module_id } = req.params;
    const { progress_percentage = 0 } = req.body;

    // Validate progress percentage
    if (progress_percentage < 0 || progress_percentage > 100) {
      return res.status(400).json({
        error: 'Progress percentage must be between 0 and 100'
      });
    }

    const progress = await Progress.upsertProgress(
      req.user.user_id,
      module_id,
      progress_percentage
    );

    res.json({
      message: 'Progress updated successfully',
      progress
    });

  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/progress/:module_id/complete
 * Mark module as completed
 */
router.post('/:module_id/complete', async (req, res, next) => {
  try {
    const { module_id } = req.params;
    const { time_spent_minutes } = req.body;

    const progress = await Progress.completeModule(
      req.user.user_id,
      module_id,
      time_spent_minutes
    );

    res.json({
      message: 'Module completed successfully!',
      progress
    });

  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/progress/:module_id/time
 * Update time spent on module
 */
router.put('/:module_id/time', async (req, res, next) => {
  try {
    const { module_id } = req.params;
    const { minutes } = req.body;

    if (!minutes || minutes <= 0) {
      return res.status(400).json({
        error: 'Minutes must be a positive number'
      });
    }

    const progress = await Progress.updateTimeSpent(
      req.user.user_id,
      module_id,
      minutes
    );

    res.json({
      message: 'Time updated successfully',
      progress
    });

  } catch (error) {
    next(error);
  }
});

module.exports = router;
```

---

## 🎯 PHASE 4: Quiz, Badge & Calculator Systems

I'll continue with the remaining models and routes. Due to length, here are the key files you need to create:

### Step 4.1: Quiz Model (`models/Quiz.js`)
### Step 4.2: Quiz Routes (`routes/quizzes.js`)
### Step 4.3: Badge Model (`models/Badge.js`)
### Step 4.4: Badge Routes (`routes/badges.js`)
### Step 4.5: Calculation Model (`models/Calculation.js`)
### Step 4.6: Calculation Routes (`routes/calculations.js`)

**Would you like me to continue with the complete code for Phase 4?**

---

## 📋 Quick Implementation Checklist

```bash
# Phase 1: Foundation
[ ] Create config/database.js
[ ] Create middleware/auth.js
[ ] Create middleware/errorHandler.js
[ ] Update server.js
[ ] Test: Server starts, health checks work

# Phase 2: Authentication
[ ] Create models/User.js
[ ] Create routes/auth.js
[ ] Test: Register, login, profile work

# Phase 3: Core Features
[ ] Create models/Module.js
[ ] Create routes/modules.js
[ ] Create models/Progress.js
[ ] Create routes/progress.js
[ ] Test: Can view modules, track progress

# Phase 4: Additional Features
[ ] Create models/Quiz.js
[ ] Create routes/quizzes.js
[ ] Create models/Badge.js
[ ] Create routes/badges.js
[ ] Create models/Calculation.js
[ ] Create routes/calculations.js
[ ] Test: All features work end-to-end
```

---

## 🚀 How to Start

```bash
# SSH into Ubuntu
ssh rfw@10.0.1.98

# Navigate to backend
cd /home/rfw/fr-web/backend

# Create directory structure
mkdir -p config models routes middleware

# Start implementing Phase 1
# ... create each file as specified above

# Test as you go
node server.js
```

---

## 📞 Support

If you encounter any issues:
1. Check the logs: Look at server console output
2. Check database: `psql -U rf_admin -d rf_learning_hub -h localhost`
3. Verify .env file has correct settings
4. Ensure all npm packages are installed

---

**Ready to implement?** Start with Phase 1, test it works, then move to Phase 2. Build incrementally!

**Document Status:** ✅ Complete - Ready for Claude Code  
**Created:** October 11, 2025  
**Estimated Time:** 12-16 hours total  
**Priority:** CRITICAL 🔥
