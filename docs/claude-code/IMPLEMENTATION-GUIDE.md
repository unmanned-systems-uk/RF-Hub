# Claude Code Implementation Guide
## RF Learning Hub Backend - Node.js + PostgreSQL

**Task:** Implement the database backend based on the complete schema specification  
**Priority:** CRITICAL 🔥  
**Deadline:** October 11-12, 2025  
**Estimated Time:** 12-16 hours

---

## Quick Start

### Step 1: Project Setup (30 minutes)

```bash
# Create project directory
mkdir rf-learning-hub-backend
cd rf-learning-hub-backend

# Initialize Node.js project
npm init -y

# Install dependencies
npm install express pg bcrypt jsonwebtoken dotenv cors helmet express-rate-limit

# Install dev dependencies
npm install --save-dev nodemon

# Create project structure
mkdir -p src/{config,models,routes,middleware,utils}
touch src/server.js .env .env.example .gitignore
```

### Step 2: Create Database (15 minutes)

```bash
# Create PostgreSQL database
createdb rf_learning_hub

# Run schema
psql -d rf_learning_hub -f schema.sql

# Run seed data
psql -d rf_learning_hub -f seed_modules_phase1.sql
```

### Step 3: Configure Environment (10 minutes)

Create `.env` file:
```env
PORT=3000
NODE_ENV=development

DB_HOST=localhost
DB_PORT=5432
DB_NAME=rf_learning_hub
DB_USER=your_username
DB_PASSWORD=your_password

JWT_SECRET=change-this-to-a-random-string-in-production
JWT_EXPIRES_IN=7d
```

---

## Implementation Priority Order

### Phase 1: Core Infrastructure (3-4 hours)
**Priority: CRITICAL**

1. **Database Connection** (`src/config/database.js`)
   - Set up connection pool
   - Test connection
   - Error handling

2. **Server Setup** (`src/server.js`)
   - Express app initialization
   - Middleware (cors, helmet, rate limiting)
   - Error handling
   - Basic health check endpoint

3. **Authentication Middleware** (`src/middleware/auth.js`)
   - JWT token generation
   - JWT verification
   - Protected route middleware

### Phase 2: Authentication System (3-4 hours)
**Priority: CRITICAL**

4. **User Model** (`src/models/User.js`)
   - Create user
   - Find by email
   - Password hashing/verification
   - Update profile

5. **Auth Routes** (`src/routes/auth.js`)
   - POST /api/auth/register
   - POST /api/auth/login
   - POST /api/auth/verify-email
   - POST /api/auth/forgot-password
   - POST /api/auth/reset-password

### Phase 3: Core Features (4-5 hours)
**Priority: HIGH**

6. **Module Model & Routes** (`src/models/Module.js`, `src/routes/modules.js`)
   - GET /api/modules (list all, with filters)
   - GET /api/modules/:module_id (get one)

7. **Progress Model & Routes** (`src/models/Progress.js`, `src/routes/progress.js`)
   - GET /api/progress (user's progress)
   - POST /api/progress/:module_id (update)
   - DELETE /api/progress/:module_id (reset)

8. **Quiz Model & Routes** (`src/models/Quiz.js`, `src/routes/quizzes.js`)
   - GET /api/quizzes/module/:module_id
   - GET /api/quizzes/:quiz_id/questions
   - POST /api/quizzes/:quiz_id/start
   - POST /api/quizzes/attempts/:attempt_id/submit
   - GET /api/quizzes/attempts/:attempt_id

### Phase 4: Additional Features (2-3 hours)
**Priority: MEDIUM**

9. **Badge System** (`src/models/Badge.js`, `src/routes/badges.js`)
   - GET /api/badges/user/:user_id
   - Badge awarding logic (triggered by progress/quiz completion)

10. **Calculator Storage** (`src/models/Calculation.js`, `src/routes/calculations.js`)
    - GET /api/calculations/user
    - POST /api/calculations
    - DELETE /api/calculations/:calc_id

---

## Critical Code Examples

### Database Connection (src/config/database.js)

```javascript
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Test connection
pool.on('connect', () => {
  console.log('✅ Database connected');
});

pool.on('error', (err) => {
  console.error('❌ Database error:', err);
  process.exit(-1);
});

module.exports = pool;
```

### Server Setup (src/server.js)

```javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const moduleRoutes = require('./routes/modules');
const progressRoutes = require('./routes/progress');
const quizRoutes = require('./routes/quizzes');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100
});
app.use('/api/', limiter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/modules', moduleRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/quizzes', quizRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
```

### Authentication Middleware (src/middleware/auth.js)

```javascript
const jwt = require('jsonwebtoken');

function generateToken(user) {
  return jwt.sign(
    { 
      user_id: user.user_id, 
      email: user.email 
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Access denied' });
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
}

module.exports = { generateToken, authenticateToken };
```

### User Model Example (src/models/User.js)

```javascript
const pool = require('../config/database');
const bcrypt = require('bcrypt');

class User {
  static async create({ email, password, username, first_name, last_name }) {
    const password_hash = await bcrypt.hash(password, 10);
    
    const result = await pool.query(
      `INSERT INTO users (email, password_hash, username, first_name, last_name)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING user_id, email, username, first_name, last_name, created_at`,
      [email, password_hash, username, first_name, last_name]
    );
    
    return result.rows[0];
  }
  
  static async findByEmail(email) {
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    return result.rows[0];
  }
  
  static async findById(user_id) {
    const result = await pool.query(
      'SELECT * FROM users WHERE user_id = $1',
      [user_id]
    );
    return result.rows[0];
  }
  
  static async verifyPassword(plainPassword, passwordHash) {
    return await bcrypt.compare(plainPassword, passwordHash);
  }
  
  static async updateProfile(user_id, updates) {
    const { first_name, last_name, bio, timezone, theme } = updates;
    
    const result = await pool.query(
      `UPDATE users 
       SET first_name = $1, last_name = $2, bio = $3, timezone = $4, theme = $5, updated_at = CURRENT_TIMESTAMP
       WHERE user_id = $6
       RETURNING user_id, email, username, first_name, last_name, bio, timezone, theme`,
      [first_name, last_name, bio, timezone, theme, user_id]
    );
    
    return result.rows[0];
  }
}

module.exports = User;
```

### Auth Routes Example (src/routes/auth.js)

```javascript
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { generateToken, authenticateToken } = require('../middleware/auth');

// Register
router.post('/register', async (req, res) => {
  try {
    const { email, password, username, first_name, last_name } = req.body;
    
    // Validation
    if (!email || !password || !username) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    // Check if user exists
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }
    
    // Create user
    const user = await User.create({
      email,
      password,
      username,
      first_name,
      last_name
    });
    
    // Generate token
    const token = generateToken(user);
    
    res.status(201).json({
      success: true,
      message: 'Account created successfully',
      user: {
        user_id: user.user_id,
        email: user.email,
        username: user.username
      },
      token
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Verify password
    const isValid = await User.verifyPassword(password, user.password_hash);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Generate token
    const token = generateToken(user);
    
    // Update last login
    await pool.query(
      'UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE user_id = $1',
      [user.user_id]
    );
    
    res.json({
      success: true,
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
    console.error('Login error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get profile (protected)
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.user_id);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    // Remove sensitive data
    delete user.password_hash;
    delete user.reset_token;
    delete user.verification_token;
    
    res.json({
      success: true,
      user
    });
  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
```

---

## Testing Strategy

### 1. Test with cURL

```bash
# Health check
curl http://localhost:3000/health

# Register
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Test123!",
    "username": "testuser",
    "first_name": "Test",
    "last_name": "User"
  }'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Test123!"
  }'

# Get profile (use token from login)
curl http://localhost:3000/api/auth/profile \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### 2. Use Postman or Insomnia

Create a collection with all endpoints and test systematically.

---

## Files Reference

All detailed specifications are in:
- **07-DATABASE-SCHEMA.md** - Complete database documentation
- **schema.sql** - Database creation script
- **seed_modules_phase1.sql** - Sample data for Phase 1

---

## Next Steps After Implementation

1. ✅ Implement authentication (register, login)
2. ✅ Implement module listing
3. ✅ Implement progress tracking
4. ✅ Implement quiz system
5. ✅ Implement badge system
6. ✅ Test all endpoints
7. ✅ Add error logging
8. ✅ Add input validation
9. ✅ Security audit
10. ✅ Deploy to staging

---

## Support

If you encounter issues:
1. Check database connection
2. Verify environment variables
3. Check PostgreSQL logs
4. Test queries directly in psql
5. Review error logs

---

**Ready to implement!** Start with Phase 1 and work through systematically.
