# Database Schema

**Backend:** TBD (Firebase or PostgreSQL)
**Last Updated:** Pending Anthony's tech decision

# Database Schema

**Document Owner:** Claude  
**Last Updated:** October 8, 2025  
**Backend:** TBD - Waiting for Anthony's decision (Firebase vs PostgreSQL)  
**Status:** Design Phase - 60% Complete

---

## 🎯 Overview

This document defines the complete data model for RF Learning Hub, including:
- Database tables/collections
- Relationships and constraints
- API endpoints
- Sample data
- Migration strategy

**CRITICAL:** Schema design is backend-agnostic where possible, with specific implementations for both Firebase and PostgreSQL provided.

---

## 🔥 Backend Decision Status

**Decision Needed:** Firebase vs Node.js + PostgreSQL  
**Assigned:** Anthony  
**Deadline:** October 10, 2025  
**See:** TODO-MASTER.md Task #1

### Option A: Firebase (Recommended for MVP)
**Pros:**
- Fastest setup (days)
- Built-in authentication
- Real-time sync
- Free tier: 50k reads/day, 20k writes/day
- Hosting included

**Cons:**
- Vendor lock-in
- NoSQL limitations for complex queries
- Less control

### Option B: Node.js + PostgreSQL
**Pros:**
- Full control
- SQL power for complex queries
- No vendor lock-in
- Open source

**Cons:**
- Longer setup (weeks)
- Separate auth system needed
- More maintenance
- Hosting costs

---

## 📊 Data Model Overview

### Core Entities
1. **Users** - Account information
2. **User Progress** - Module completion tracking
3. **Quizzes** - Quiz definitions
4. **Quiz Questions** - Question bank
5. **Quiz Attempts** - User quiz results
6. **User Badges** - Achievement system
7. **Saved Calculations** - Calculator history
8. **VNA Measurements** - Antenna measurements
9. **Projects** - User project tracking
10. **Notebook Entries** - Lab notebook
11. **Gallery Images** - Photo uploads

---

## 🗄️ PostgreSQL Schema (Option B)

### 1. Users Table

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    display_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    profile_pic_url TEXT,
    experience_level VARCHAR(20) DEFAULT 'beginner',
    -- 'beginner', 'intermediate', 'advanced', 'expert'
    interests TEXT[], -- ['antennas', 'satellites', 'sdr', 'vna']
    email_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    is_admin BOOLEAN DEFAULT FALSE,
    timezone VARCHAR(50) DEFAULT 'UTC',
    preferences JSONB DEFAULT '{}'::jsonb
    -- { theme: 'dark', notifications: true, language: 'en' }
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_created_at ON users(created_at);
```

**Sample Data:**
```sql
INSERT INTO users (email, password_hash, username, display_name, experience_level, interests) VALUES
('anthony@example.com', '$2b$10$...', 'anthony_uk', 'Anthony', 'intermediate', 
 ARRAY['antennas', 'vna', 'satellites']),
('test@example.com', '$2b$10$...', 'testuser', 'Test User', 'beginner',
 ARRAY['sdr']);
```

---

### 2. User Progress Table

```sql
CREATE TABLE user_progress (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    section_id VARCHAR(50) NOT NULL,
    -- Format: 'module-1-4', 'antenna-guide', 'calculator-dipole'
    status VARCHAR(20) NOT NULL DEFAULT 'not_started',
    -- 'not_started', 'reading', 'completed', 'bookmarked', 'struggling', 'revisit'
    time_spent_seconds INTEGER DEFAULT 0,
    last_accessed TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, section_id)
);

CREATE INDEX idx_progress_user ON user_progress(user_id);
CREATE INDEX idx_progress_section ON user_progress(section_id);
CREATE INDEX idx_progress_status ON user_progress(status);
```

**Sample Data:**
```sql
INSERT INTO user_progress (user_id, section_id, status, time_spent_seconds) VALUES
(1, 'module-1-4', 'completed', 3600),
(1, 'antenna-guide', 'reading', 1800),
(1, 'module-1-5', 'struggling', 900);
```

---

### 3. Quizzes Table

```sql
CREATE TABLE quizzes (
    id SERIAL PRIMARY KEY,
    module_id VARCHAR(50) NOT NULL,
    -- Format: '1-4' for Module 1.4
    title VARCHAR(200) NOT NULL,
    description TEXT,
    difficulty VARCHAR(20) DEFAULT 'beginner',
    -- 'beginner', 'intermediate', 'advanced'
    passing_score INTEGER DEFAULT 70,
    -- Percentage needed to pass
    time_limit_minutes INTEGER,
    -- NULL = no time limit
    randomize_questions BOOLEAN DEFAULT TRUE,
    randomize_options BOOLEAN DEFAULT TRUE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_quizzes_module ON quizzes(module_id);
```

**Sample Data:**
```sql
INSERT INTO quizzes (module_id, title, description, difficulty, passing_score) VALUES
('1-4', 'Antenna Fundamentals Quiz', 
 'Test your understanding of basic antenna concepts', 
 'beginner', 70),
('2-2', 'Dipole Antenna Theory Quiz',
 'Advanced dipole antenna theory and calculations',
 'intermediate', 75);
```

---

### 4. Quiz Questions Table

```sql
CREATE TABLE quiz_questions (
    id SERIAL PRIMARY KEY,
    quiz_id INTEGER NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,
    question_text TEXT NOT NULL,
    question_type VARCHAR(20) DEFAULT 'multiple_choice',
    -- 'multiple_choice', 'true_false', 'calculation' (future)
    options JSONB NOT NULL,
    -- ['Option A', 'Option B', 'Option C', 'Option D']
    correct_answer INTEGER NOT NULL,
    -- Index of correct option (0-based)
    explanation TEXT,
    -- Explanation shown after answering
    difficulty VARCHAR(20) DEFAULT 'beginner',
    points INTEGER DEFAULT 1,
    -- For weighted scoring (future)
    image_url TEXT,
    -- Optional diagram/image
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_questions_quiz ON quiz_questions(quiz_id);
CREATE INDEX idx_questions_difficulty ON quiz_questions(difficulty);
```

**Sample Data:**
```sql
INSERT INTO quiz_questions (quiz_id, question_text, options, correct_answer, explanation, difficulty) VALUES
(1, 'What does SWR stand for?',
 '["Standing Wave Ratio", "Signal Wave Resistance", "Standing Wave Resistance", "Signal Wave Ratio"]'::jsonb,
 0,
 'SWR stands for Standing Wave Ratio, which measures how well an antenna is matched to its transmission line.',
 'beginner'),
(1, 'A dipole antenna with a length of 143/f(MHz) meters is resonant at which wavelength?',
 '["Half wavelength", "Full wavelength", "Quarter wavelength", "Three-quarter wavelength"]'::jsonb,
 0,
 'The formula 143/f gives a half-wavelength dipole, which is the most common dipole configuration.',
 'intermediate');
```

---

### 5. Quiz Attempts Table

```sql
CREATE TABLE quiz_attempts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    quiz_id INTEGER NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,
    score DECIMAL(5,2),
    -- Percentage score (0-100)
    total_questions INTEGER NOT NULL,
    correct_answers INTEGER NOT NULL,
    time_taken_seconds INTEGER,
    answers JSONB NOT NULL,
    -- { "question_id": answer_index, ... }
    passed BOOLEAN,
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_attempts_user ON quiz_attempts(user_id);
CREATE INDEX idx_attempts_quiz ON quiz_attempts(quiz_id);
CREATE INDEX idx_attempts_score ON quiz_attempts(score);
```

**Sample Data:**
```sql
INSERT INTO quiz_attempts (user_id, quiz_id, score, total_questions, correct_answers, time_taken_seconds, answers, passed) VALUES
(1, 1, 85.00, 10, 8, 420,
 '{"1": 0, "2": 0, "3": 1, "4": 0, "5": 2, "6": 0, "7": 1, "8": 0, "9": 0, "10": 3}'::jsonb,
 TRUE);
```

---

### 6. User Badges Table

```sql
CREATE TABLE badges (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    image_url TEXT,
    criteria JSONB NOT NULL,
    -- { type: 'modules_completed', count: 10 }
    category VARCHAR(50),
    -- 'learning', 'building', 'community', 'achievement'
    points INTEGER DEFAULT 0,
    rarity VARCHAR(20) DEFAULT 'common',
    -- 'common', 'uncommon', 'rare', 'epic', 'legendary'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_badges (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    badge_id INTEGER NOT NULL REFERENCES badges(id) ON DELETE CASCADE,
    earned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    progress JSONB,
    -- Current progress toward badge (for multi-step badges)
    UNIQUE(user_id, badge_id)
);

CREATE INDEX idx_user_badges_user ON user_badges(user_id);
CREATE INDEX idx_user_badges_earned ON user_badges(earned_at);
```

**Sample Badges:**
```sql
INSERT INTO badges (name, description, criteria, category, points, rarity) VALUES
('Scholar', 'Complete 10 modules', 
 '{"type": "modules_completed", "count": 10}'::jsonb,
 'learning', 100, 'common'),
('Builder', 'Build and document 5 antennas',
 '{"type": "antennas_built", "count": 5}'::jsonb,
 'building', 250, 'uncommon'),
('Expert', 'Achieve Level 4 certification',
 '{"type": "certification", "level": 4}'::jsonb,
 'achievement', 1000, 'legendary');
```

---

### 7. Saved Calculations Table

```sql
CREATE TABLE saved_calculations (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    calculator_type VARCHAR(50) NOT NULL,
    -- 'dipole', 'yagi', 'impedance', 'swr', 'link_budget', etc.
    name VARCHAR(100),
    -- User-given name for the calculation
    inputs JSONB NOT NULL,
    -- { frequency_mhz: 145, wire_diameter_mm: 2 }
    result JSONB NOT NULL,
    -- { length_m: 1.03, length_ft: 3.38 }
    tags TEXT[],
    -- ['2m', 'portable', 'satellite']
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_calculations_user ON saved_calculations(user_id);
CREATE INDEX idx_calculations_type ON saved_calculations(calculator_type);
CREATE INDEX idx_calculations_tags ON saved_calculations USING GIN(tags);
```

---

### 8. VNA Measurements Table

```sql
CREATE TABLE vna_measurements (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    antenna_name VARCHAR(100) NOT NULL,
    antenna_type VARCHAR(50),
    -- 'dipole', 'yagi', 'loop', 'vertical', etc.
    frequency_start_mhz DECIMAL(10,3),
    frequency_end_mhz DECIMAL(10,3),
    measurement_type VARCHAR(20) DEFAULT 's11',
    -- 's11', 's21', 's22', 's12'
    data_points JSONB NOT NULL,
    -- [{ freq: 145.0, s11_db: -15.2, swr: 1.4 }, ...]
    conditions TEXT,
    -- 'Indoor, 2m height, clear weather'
    equipment VARCHAR(100),
    -- 'Rigol RSA5065N'
    notes TEXT,
    file_url TEXT,
    -- Link to original CSV file (if stored)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_measurements_user ON vna_measurements(user_id);
CREATE INDEX idx_measurements_antenna_type ON vna_measurements(antenna_type);
CREATE INDEX idx_measurements_created ON vna_measurements(created_at);
```

---

### 9. Projects Table

```sql
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    project_type VARCHAR(50),
    -- 'antenna_build', 'sdr_experiment', 'measurement', 'repair'
    status VARCHAR(20) DEFAULT 'planning',
    -- 'planning', 'in_progress', 'testing', 'complete', 'on_hold'
    difficulty VARCHAR(20),
    start_date DATE,
    completion_date DATE,
    materials JSONB,
    -- [{ item: 'Copper wire', quantity: '10m', cost: 15.00 }]
    photos TEXT[],
    -- Array of image URLs
    measurements_ids INTEGER[],
    -- Link to VNA measurements
    notes TEXT,
    lessons_learned TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_projects_user ON projects(user_id);
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_projects_type ON projects(project_type);
```

---

### 10. Notebook Entries Table

```sql
CREATE TABLE notebook_entries (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    -- Rich text (HTML or Markdown)
    entry_date DATE DEFAULT CURRENT_DATE,
    tags TEXT[],
    photos TEXT[],
    related_project_id INTEGER REFERENCES projects(id),
    related_measurement_id INTEGER REFERENCES vna_measurements(id),
    is_public BOOLEAN DEFAULT FALSE,
    -- Allow sharing with community (future)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_entries_user ON notebook_entries(user_id);
CREATE INDEX idx_entries_date ON notebook_entries(entry_date);
CREATE INDEX idx_entries_tags ON notebook_entries USING GIN(tags);
```

---

### 11. Gallery Images Table

```sql
CREATE TABLE gallery_images (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    filename VARCHAR(255) NOT NULL,
    file_url TEXT NOT NULL,
    thumbnail_url TEXT,
    file_size_bytes INTEGER,
    mime_type VARCHAR(50),
    width INTEGER,
    height INTEGER,
    category VARCHAR(50),
    -- 'antenna', 'equipment', 'measurement', 'build', 'other'
    caption TEXT,
    tags TEXT[],
    exif_data JSONB,
    -- { camera: 'iPhone 13', location: {lat: 51.5, lon: -0.1} }
    related_project_id INTEGER REFERENCES projects(id),
    is_public BOOLEAN DEFAULT FALSE,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_images_user ON gallery_images(user_id);
CREATE INDEX idx_images_category ON gallery_images(category);
CREATE INDEX idx_images_tags ON gallery_images USING GIN(tags);
```

---

## 🔥 Firebase Schema (Option A)

**Note:** Firebase uses NoSQL collections instead of tables.

### Collection Structure

```javascript
// users collection
{
  "users": {
    "<userId>": {
      "email": "anthony@example.com",
      "username": "anthony_uk",
      "displayName": "Anthony",
      "experienceLevel": "intermediate",
      "interests": ["antennas", "vna", "satellites"],
      "createdAt": "2025-10-08T12:00:00Z",
      "lastLogin": "2025-10-08T14:30:00Z",
      "profilePicUrl": "",
      "emailVerified": true,
      "isActive": true,
      "isAdmin": false,
      "preferences": {
        "theme": "dark",
        "notifications": true
      }
    }
  }
}

// userProgress subcollection under each user
{
  "users": {
    "<userId>": {
      "progress": {
        "module-1-4": {
          "status": "completed",
          "timeSpentSeconds": 3600,
          "lastAccessed": "2025-10-07T18:00:00Z",
          "notes": "Great module on antennas"
        },
        "antenna-guide": {
          "status": "reading",
          "timeSpentSeconds": 1800,
          "lastAccessed": "2025-10-08T10:00:00Z"
        }
      }
    }
  }
}

// quizzes collection
{
  "quizzes": {
    "<quizId>": {
      "moduleId": "1-4",
      "title": "Antenna Fundamentals Quiz",
      "description": "Test your understanding...",
      "difficulty": "beginner",
      "passingScore": 70,
      "questions": [
        {
          "id": "q1",
          "text": "What does SWR stand for?",
          "options": ["Standing Wave Ratio", "..."],
          "correctAnswer": 0,
          "explanation": "SWR stands for..."
        }
      ]
    }
  }
}

// quizAttempts subcollection
{
  "users": {
    "<userId>": {
      "quizAttempts": {
        "<attemptId>": {
          "quizId": "quiz123",
          "score": 85,
          "totalQuestions": 10,
          "correctAnswers": 8,
          "timeTakenSeconds": 420,
          "answers": {
            "q1": 0,
            "q2": 0
          },
          "passed": true,
          "completedAt": "2025-10-08T15:00:00Z"
        }
      }
    }
  }
}
```

---

## 🔌 API Endpoints

### Authentication (Applies to Both Backends)

```
POST   /api/auth/register      - Create new user account
POST   /api/auth/login         - User login
POST   /api/auth/logout        - User logout
GET    /api/auth/verify        - Verify JWT token
POST   /api/auth/forgot-password - Request password reset
POST   /api/auth/reset-password  - Reset password with token
```

### User Progress

```
GET    /api/progress/:userId                  - Get all progress
GET    /api/progress/:userId/:sectionId       - Get specific section
POST   /api/progress/:userId/:sectionId       - Create progress entry
PUT    /api/progress/:userId/:sectionId       - Update progress
DELETE /api/progress/:userId/:sectionId       - Delete progress entry
```

### Quizzes

```
GET    /api/quizzes                           - List all quizzes
GET    /api/quizzes/:moduleId                 - Get quizzes for module
GET    /api/quizzes/:quizId                   - Get quiz details
POST   /api/quiz-attempts/:userId             - Submit quiz attempt
GET    /api/quiz-attempts/:userId             - Get user's attempts
GET    /api/quiz-attempts/:userId/:quizId     - Get attempts for specific quiz
```

### Calculations

```
GET    /api/calculations/:userId              - Get all saved calculations
POST   /api/calculations/:userId              - Save new calculation
PUT    /api/calculations/:userId/:calcId      - Update calculation
DELETE /api/calculations/:userId/:calcId      - Delete calculation
```

### VNA Measurements

```
GET    /api/measurements/:userId              - Get all measurements
POST   /api/measurements/:userId              - Upload new measurement
GET    /api/measurements/:userId/:measurementId - Get specific measurement
DELETE /api/measurements/:userId/:measurementId - Delete measurement
```

### Projects

```
GET    /api/projects/:userId                  - Get all projects
POST   /api/projects/:userId                  - Create new project
GET    /api/projects/:userId/:projectId       - Get project details
PUT    /api/projects/:userId/:projectId       - Update project
DELETE /api/projects/:userId/:projectId       - Delete project
```

### Gallery

```
GET    /api/gallery/:userId                   - Get all images
POST   /api/gallery/:userId                   - Upload image
DELETE /api/gallery/:userId/:imageId          - Delete image
```

---

## 📝 Sample API Request/Response

### POST /api/auth/register

**Request:**
```json
{
  "email": "anthony@example.com",
  "password": "SecureP@ssw0rd",
  "username": "anthony_uk",
  "displayName": "Anthony"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": 1,
    "email": "anthony@example.com",
    "username": "anthony_uk",
    "displayName": "Anthony",
    "createdAt": "2025-10-08T12:00:00Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### POST /api/progress/:userId/:sectionId

**Request:**
```json
{
  "status": "completed",
  "timeSpentSeconds": 3600,
  "notes": "Excellent module on antenna fundamentals"
}
```

**Response:**
```json
{
  "success": true,
  "progress": {
    "userId": 1,
    "sectionId": "module-1-4",
    "status": "completed",
    "timeSpentSeconds": 3600,
    "lastAccessed": "2025-10-08T14:30:00Z"
  }
}
```

---

## 🔐 Security Considerations

### Password Hashing
- Use bcrypt with cost factor 10+
- Never store plain text passwords
- Implement password strength requirements

### Authentication
- JWT tokens with 24-hour expiration
- Refresh tokens for extended sessions
- Secure httpOnly cookies for token storage

### Authorization
- Role-based access control (user, admin)
- Row-level security for user data
- API rate limiting (100 requests/hour/user)

### Data Protection
- Encrypt sensitive data at rest
- Use HTTPS for all API calls
- Input validation and sanitization
- SQL injection prevention (parameterized queries)

---

## 📊 Data Migration Strategy

### From localStorage to Database

**Phase 1: Dual Storage (Week 1)**
- Read from localStorage
- Write to both localStorage and database
- Verify data consistency

**Phase 2: Database Primary (Week 2)**
- Read from database
- Keep localStorage as backup
- Monitor for issues

**Phase 3: Database Only (Week 3)**
- Remove localStorage dependencies
- Full migration complete

### Migration Script (Pseudocode)

```javascript
async function migrateUserData(userId) {
  // 1. Read from localStorage
  const localProgress = localStorage.getItem('userProgress');
  const localCalcs = localStorage.getItem('savedCalculations');
  
  // 2. Parse and validate
  const progress = JSON.parse(localProgress);
  const calculations = JSON.parse(localCalcs);
  
  // 3. Upload to database
  for (const section in progress) {
    await api.post(`/api/progress/${userId}/${section}`, progress[section]);
  }
  
  for (const calc of calculations) {
    await api.post(`/api/calculations/${userId}`, calc);
  }
  
  // 4. Verify
  const dbProgress = await api.get(`/api/progress/${userId}`);
  console.log('Migration complete:', dbProgress);
}
```

---

## 🧪 Testing Data

### Test Users

```sql
-- Admin user
INSERT INTO users (email, password_hash, username, display_name, is_admin) VALUES
('admin@rfhub.com', '$2b$10$test_hash', 'admin', 'Admin User', TRUE);

-- Regular users
INSERT INTO users (email, password_hash, username, display_name, experience_level) VALUES
('beginner@test.com', '$2b$10$test_hash', 'beginner_user', 'Beginner Bob', 'beginner'),
('advanced@test.com', '$2b$10$test_hash', 'advanced_user', 'Advanced Alice', 'advanced');
```

### Test Quiz Data

```sql
-- Sample quiz with 5 questions
INSERT INTO quizzes (module_id, title, difficulty, passing_score) VALUES
('1-1', 'Test Quiz - RF Basics', 'beginner', 60);

INSERT INTO quiz_questions (quiz_id, question_text, options, correct_answer, explanation) VALUES
(1, 'What frequency range is VHF?',
 '["30-300 MHz", "300-3000 MHz", "3-30 MHz", "Above 3 GHz"]'::jsonb,
 0, 'VHF (Very High Frequency) ranges from 30 to 300 MHz');
```

---

## 📈 Performance Optimization

### Database Indexes
- All foreign keys indexed
- Frequently queried columns indexed (email, username, section_id)
- Composite indexes for common query patterns

### Query Optimization
- Use pagination for large result sets (LIMIT/OFFSET)
- Implement caching for frequently accessed data
- Use database views for complex queries

### Scaling Considerations
- Connection pooling (max 100 connections)
- Read replicas for heavy read workloads
- Partitioning for large tables (measurements, quiz_attempts)

---

## 🔄 Backup & Recovery

### Backup Strategy
- **Daily:** Full database backup at 2 AM UTC
- **Hourly:** Incremental backups
- **Retention:** 30 days daily, 12 months monthly
- **Location:** AWS S3 or Google Cloud Storage

### Recovery Procedures
1. Identify backup timestamp
2. Restore from backup
3. Apply transaction logs (if available)
4. Verify data integrity
5. Resume operations

---

## 📋 Implementation Checklist

### PostgreSQL Setup (If Option B Chosen)
- [ ] Install PostgreSQL 14+
- [ ] Create database: `rf_learning_hub`
- [ ] Run schema creation scripts
- [ ] Set up user roles and permissions
- [ ] Configure connection pooling
- [ ] Set up automated backups
- [ ] Create indexes
- [ ] Insert sample data for testing

### Firebase Setup (If Option A Chosen)
- [ ] Create Firebase project
- [ ] Enable Authentication
- [ ] Enable Firestore Database
- [ ] Configure security rules
- [ ] Set up Cloud Storage for images
- [ ] Create collections structure
- [ ] Add sample data
- [ ] Configure indexes

### Backend API (Both Options)
- [ ] Set up Express.js server
- [ ] Implement authentication middleware
- [ ] Create API routes (see endpoints above)
- [ ] Add input validation
- [ ] Implement error handling
- [ ] Add logging
- [ ] Set up rate limiting
- [ ] Write API documentation

---

## 🚀 Next Steps

**After Anthony's Decision:**

**If Firebase:**
1. Claude creates Firebase setup guide
2. CC implements Firebase authentication
3. CC creates Firestore security rules
4. Test with sample data
5. Integrate with frontend

**If PostgreSQL:**
1. Claude finalizes SQL schema
2. CC sets up database server
3. CC implements REST API
4. Create migration scripts
5. Set up database backups

**Estimated Timeline:**
- Firebase: 3-5 days
- PostgreSQL: 7-10 days

---

## 📝 Notes

**Data Ownership:**
- Users own their data
- Can export all data (GDPR compliance)
- Can delete account and all data
- 30-day grace period before permanent deletion

**Privacy:**
- No third-party data sharing
- Analytics opt-in only
- Clear privacy policy
- Cookie consent

**Compliance:**
- GDPR compliant (EU users)
- COPPA compliant (no users under 13)
- Data encryption at rest and in transit

---

**Status:** Design phase complete, awaiting backend decision  
**Next Update:** After Anthony chooses Firebase or PostgreSQL  
**Owner:** Claude (design), CC (implementation)