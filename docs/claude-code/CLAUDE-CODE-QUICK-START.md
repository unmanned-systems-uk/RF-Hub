# 🚀 CLAUDE CODE QUICK START

## Task: Implement RF Learning Hub Backend
**Priority:** CRITICAL 🔥 | **Deadline:** Oct 11-12 | **Time:** 12-16 hours

---

## 📁 Files You Need (all in /mnt/user-data/outputs/)

1. **IMPLEMENTATION-GUIDE.md** ← START HERE
2. **07-DATABASE-SCHEMA.md** (reference)
3. **schema.sql** (run this to create DB)
4. **seed_modules_phase1.sql** (sample data)

---

## ⚡ Quick Setup (15 minutes)

```bash
# 1. Create project
mkdir rf-learning-hub-backend && cd rf-learning-hub-backend
npm init -y

# 2. Install packages
npm install express pg bcrypt jsonwebtoken dotenv cors helmet express-rate-limit
npm install --save-dev nodemon

# 3. Create database
createdb rf_learning_hub
psql -d rf_learning_hub -f schema.sql
psql -d rf_learning_hub -f seed_modules_phase1.sql

# 4. Create .env
cat > .env << EOF
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=rf_learning_hub
DB_USER=your_username
DB_PASSWORD=your_password
JWT_SECRET=change-me-to-random-string
JWT_EXPIRES_IN=7d
EOF

# 5. Create directories
mkdir -p src/{config,models,routes,middleware,utils}
```

---

## 📝 Implementation Order

### Phase 1: Infrastructure (3-4h) - DO FIRST
- [ ] src/config/database.js - Connection pool
- [ ] src/server.js - Express setup
- [ ] src/middleware/auth.js - JWT functions
- [ ] Test: Server starts, DB connects

### Phase 2: Authentication (3-4h) - CRITICAL
- [ ] src/models/User.js
- [ ] src/routes/auth.js
- [ ] POST /api/auth/register
- [ ] POST /api/auth/login
- [ ] GET /api/auth/profile
- [ ] Test: Can register, login, get profile

### Phase 3: Core Features (4-5h) - HIGH
- [ ] src/models/Module.js + src/routes/modules.js
- [ ] src/models/Progress.js + src/routes/progress.js
- [ ] src/models/Quiz.js + src/routes/quizzes.js
- [ ] Test: All CRUD operations work

### Phase 4: Extras (2-3h) - MEDIUM
- [ ] Badge system
- [ ] Calculator storage
- [ ] Error logging
- [ ] Security audit

---

## 🔧 Critical Code Snippets

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
});
module.exports = pool;
```

### Auth Middleware (src/middleware/auth.js)
```javascript
const jwt = require('jsonwebtoken');

function generateToken(user) {
  return jwt.sign(
    { user_id: user.user_id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
}

function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access denied' });
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
}

module.exports = { generateToken, authenticateToken };
```

---

## ✅ Testing Checklist

```bash
# Health check
curl http://localhost:3000/health

# Register user
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"Test123!","username":"testuser"}'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"Test123!"}'

# Get profile (use token from login)
curl http://localhost:3000/api/auth/profile \
  -H "Authorization: Bearer YOUR_TOKEN"
```

---

## 📊 Database Tables Reference

| Table | Purpose | Key Columns |
|-------|---------|-------------|
| users | Authentication | email, password_hash, username |
| modules | Curriculum | module_number, title, phase |
| user_progress | Tracking | user_id, module_id, status |
| quizzes | Quiz config | module_id, passing_score |
| quiz_questions | Questions | quiz_id, question_text, options |
| quiz_attempts | Submissions | user_id, quiz_id, score |
| user_badges | Achievements | user_id, badge_type |
| saved_calculations | Calculator | user_id, calculator_type, inputs |

---

## 🎯 Success Criteria

- [ ] Server starts without errors
- [ ] Database connection works
- [ ] Can register new user
- [ ] Can login and get JWT token
- [ ] Can access protected routes with token
- [ ] Can list modules
- [ ] Can track progress
- [ ] Can take and submit quiz
- [ ] All endpoints return proper JSON
- [ ] Error handling works

---

## 📚 Full Documentation

See **IMPLEMENTATION-GUIDE.md** for:
- Complete code examples
- All API endpoint specs
- Error handling patterns
- Security best practices
- Testing strategies

See **07-DATABASE-SCHEMA.md** for:
- Complete table schemas
- All API endpoints (22 total)
- Sample data structures
- PostgreSQL optimizations

---

## 🆘 Troubleshooting

**Can't connect to DB?**
- Check PostgreSQL is running: `pg_isready`
- Verify credentials in .env
- Check database exists: `psql -l`

**JWT errors?**
- Verify JWT_SECRET is set in .env
- Check token format in Authorization header

**Import errors?**
- Run `npm install` again
- Check Node version: `node --version` (need 14+)

---

## 🚀 Ready to Code!

1. Read IMPLEMENTATION-GUIDE.md
2. Set up project (15 min)
3. Start with Phase 1
4. Test each phase before moving on
5. Commit frequently

**Estimated total time:** 12-16 hours  
**Priority:** Complete Phase 1 & 2 first (authentication)

---

**Good luck! You've got everything you need. 💪**
