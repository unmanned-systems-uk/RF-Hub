# RF Learning Hub Database Schema

**Document Version:** 1.0  
**Technology Stack:** Node.js + PostgreSQL  
**Last Updated:** October 10, 2025  
**Status:** Complete - Ready for Implementation

---

## Table of Contents

1. [Overview](#overview)
2. [Database Tables](#database-tables)
3. [Relationships & Constraints](#relationships--constraints)
4. [API Endpoints](#api-endpoints)
5. [Sample Data](#sample-data)
6. [PostgreSQL Optimizations](#postgresql-optimizations)
7. [Implementation Guide](#implementation-guide)
8. [Security Considerations](#security-considerations)

---

## Overview

### Technology Choice: PostgreSQL

**Rationale:**
- ACID compliance for data integrity
- Robust relationship management
- Excellent performance with indexes
- JSON support for flexible data
- Strong community and tooling
- Free and open source

### Database Structure

The database is organized into 8 core tables:
1. **users** - User accounts and profiles
2. **modules** - Learning curriculum (26 modules across 4 phases)
3. **user_progress** - Module completion tracking
4. **quizzes** - Quiz metadata and configuration
5. **quiz_questions** - Individual quiz questions
6. **quiz_attempts** - User quiz submissions and scores
7. **user_badges** - Achievement tracking
8. **saved_calculations** - User-saved calculator results

---

## Database Tables

### 1. users

**Purpose:** Store user accounts, authentication, and profile information

```sql
CREATE TABLE users (
    -- Primary identification
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Authentication
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL, -- bcrypt hash
    email_verified BOOLEAN DEFAULT FALSE,
    verification_token VARCHAR(255),
    verification_token_expires TIMESTAMP,
    
    -- Profile information
    username VARCHAR(50) UNIQUE NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    bio TEXT,
    avatar_url VARCHAR(500),
    
    -- User settings
    timezone VARCHAR(50) DEFAULT 'UTC',
    theme VARCHAR(20) DEFAULT 'dark', -- 'dark' or 'light'
    email_notifications BOOLEAN DEFAULT TRUE,
    
    -- Progress tracking
    total_modules_completed INTEGER DEFAULT 0,
    total_quizzes_passed INTEGER DEFAULT 0,
    total_badges_earned INTEGER DEFAULT 0,
    current_streak_days INTEGER DEFAULT 0,
    longest_streak_days INTEGER DEFAULT 0,
    
    -- OAuth integration (future)
    google_id VARCHAR(255) UNIQUE,
    github_id VARCHAR(255) UNIQUE,
    
    -- Password reset
    reset_token VARCHAR(255),
    reset_token_expires TIMESTAMP,
    
    -- Metadata
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    is_admin BOOLEAN DEFAULT FALSE,
    
    -- Constraints
    CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    CONSTRAINT valid_username CHECK (username ~* '^[A-Za-z0-9_-]{3,50}$'),
    CONSTRAINT valid_theme CHECK (theme IN ('dark', 'light'))
);

-- Indexes for performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_created_at ON users(created_at);
CREATE INDEX idx_users_last_login ON users(last_login);
```

---

### 2. modules

**Purpose:** Define the 26-module curriculum structure

```sql
CREATE TABLE modules (
    -- Primary identification
    module_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Module identification
    module_number VARCHAR(10) UNIQUE NOT NULL, -- e.g., '1.1', '2.3', '4.6'
    phase INTEGER NOT NULL, -- 1, 2, 3, or 4
    order_in_phase INTEGER NOT NULL,
    
    -- Module content
    title VARCHAR(200) NOT NULL,
    slug VARCHAR(200) UNIQUE NOT NULL, -- URL-friendly version
    description TEXT NOT NULL,
    learning_objectives JSONB NOT NULL, -- Array of 3-5 objectives
    
    -- Module metadata
    difficulty VARCHAR(20) NOT NULL, -- 'beginner', 'intermediate', 'advanced'
    estimated_time_minutes INTEGER NOT NULL,
    prerequisites JSONB, -- Array of module_ids required first
    
    -- Content
    content_url VARCHAR(500), -- Link to HTML content page
    video_url VARCHAR(500),
    
    -- Status
    is_published BOOLEAN DEFAULT FALSE,
    is_premium BOOLEAN DEFAULT FALSE, -- For future freemium model
    
    -- Metadata
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Constraints
    CONSTRAINT valid_phase CHECK (phase BETWEEN 1 AND 4),
    CONSTRAINT valid_difficulty CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
    CONSTRAINT positive_time CHECK (estimated_time_minutes > 0),
    CONSTRAINT unique_phase_order UNIQUE (phase, order_in_phase)
);

-- Indexes
CREATE INDEX idx_modules_phase ON modules(phase);
CREATE INDEX idx_modules_module_number ON modules(module_number);
CREATE INDEX idx_modules_difficulty ON modules(difficulty);
CREATE INDEX idx_modules_published ON modules(is_published);
```

---

### 3. user_progress

**Purpose:** Track user completion of modules

```sql
CREATE TABLE user_progress (
    -- Primary identification
    progress_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Foreign keys
    user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    module_id UUID NOT NULL REFERENCES modules(module_id) ON DELETE CASCADE,
    
    -- Progress tracking
    status VARCHAR(20) NOT NULL DEFAULT 'not_started', 
    -- 'not_started', 'in_progress', 'completed'
    
    progress_percentage INTEGER DEFAULT 0, -- 0-100
    
    -- Time tracking
    time_spent_minutes INTEGER DEFAULT 0,
    started_at TIMESTAMP,
    completed_at TIMESTAMP,
    last_accessed TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Engagement
    times_accessed INTEGER DEFAULT 0,
    notes TEXT, -- User's personal notes
    bookmarked BOOLEAN DEFAULT FALSE,
    
    -- Metadata
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Constraints
    CONSTRAINT valid_status CHECK (status IN ('not_started', 'in_progress', 'completed')),
    CONSTRAINT valid_percentage CHECK (progress_percentage BETWEEN 0 AND 100),
    CONSTRAINT unique_user_module UNIQUE (user_id, module_id)
);

-- Indexes
CREATE INDEX idx_progress_user ON user_progress(user_id);
CREATE INDEX idx_progress_module ON user_progress(module_id);
CREATE INDEX idx_progress_status ON user_progress(status);
CREATE INDEX idx_progress_completed ON user_progress(completed_at);
CREATE INDEX idx_progress_bookmarked ON user_progress(user_id, bookmarked) WHERE bookmarked = TRUE;
```

---

### 4. quizzes

**Purpose:** Quiz metadata and configuration

```sql
CREATE TABLE quizzes (
    -- Primary identification
    quiz_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Association
    module_id UUID NOT NULL REFERENCES modules(module_id) ON DELETE CASCADE,
    
    -- Quiz configuration
    title VARCHAR(200) NOT NULL,
    description TEXT,
    passing_score INTEGER NOT NULL DEFAULT 70, -- Percentage required to pass
    time_limit_minutes INTEGER, -- NULL = no time limit
    max_attempts INTEGER, -- NULL = unlimited attempts
    
    -- Question settings
    randomize_questions BOOLEAN DEFAULT TRUE,
    show_correct_answers BOOLEAN DEFAULT TRUE, -- After completion
    
    -- Status
    is_active BOOLEAN DEFAULT TRUE,
    
    -- Metadata
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Constraints
    CONSTRAINT valid_passing_score CHECK (passing_score BETWEEN 0 AND 100),
    CONSTRAINT positive_time_limit CHECK (time_limit_minutes IS NULL OR time_limit_minutes > 0),
    CONSTRAINT positive_attempts CHECK (max_attempts IS NULL OR max_attempts > 0),
    CONSTRAINT one_quiz_per_module UNIQUE (module_id)
);

-- Indexes
CREATE INDEX idx_quizzes_module ON quizzes(module_id);
CREATE INDEX idx_quizzes_active ON quizzes(is_active);
```

---

### 5. quiz_questions

**Purpose:** Individual quiz questions with answers

```sql
CREATE TABLE quiz_questions (
    -- Primary identification
    question_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Association
    quiz_id UUID NOT NULL REFERENCES quizzes(quiz_id) ON DELETE CASCADE,
    
    -- Question content
    question_text TEXT NOT NULL,
    question_type VARCHAR(20) NOT NULL DEFAULT 'multiple_choice',
    -- 'multiple_choice', 'true_false', 'calculation'
    
    -- Answer options
    options JSONB NOT NULL, -- Array of answer options
    correct_answer INTEGER NOT NULL, -- Index of correct answer (0-based)
    
    -- Additional content
    explanation TEXT NOT NULL, -- Explanation of correct answer
    hint TEXT, -- Optional hint
    
    -- Difficulty and metadata
    difficulty VARCHAR(20) NOT NULL,
    points INTEGER DEFAULT 1,
    order_index INTEGER, -- Question order (if not randomized)
    
    -- Tags for categorization
    tags JSONB, -- Array of topic tags
    
    -- Metadata
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    times_answered INTEGER DEFAULT 0,
    times_correct INTEGER DEFAULT 0,
    
    -- Constraints
    CONSTRAINT valid_question_type CHECK (question_type IN ('multiple_choice', 'true_false', 'calculation')),
    CONSTRAINT valid_difficulty CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
    CONSTRAINT positive_points CHECK (points > 0),
    CONSTRAINT valid_correct_answer CHECK (correct_answer >= 0)
);

-- Indexes
CREATE INDEX idx_questions_quiz ON quiz_questions(quiz_id);
CREATE INDEX idx_questions_difficulty ON quiz_questions(difficulty);
CREATE INDEX idx_questions_type ON quiz_questions(question_type);
```

---

### 6. quiz_attempts

**Purpose:** Track user quiz attempts and scoring

```sql
CREATE TABLE quiz_attempts (
    -- Primary identification
    attempt_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Foreign keys
    user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    quiz_id UUID NOT NULL REFERENCES quizzes(quiz_id) ON DELETE CASCADE,
    
    -- Attempt metadata
    attempt_number INTEGER NOT NULL, -- 1st, 2nd, 3rd attempt etc.
    
    -- Timing
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP,
    time_taken_seconds INTEGER,
    
    -- Scoring
    total_questions INTEGER NOT NULL,
    questions_answered INTEGER DEFAULT 0,
    correct_answers INTEGER DEFAULT 0,
    score_percentage NUMERIC(5,2), -- e.g., 85.50
    max_possible_points INTEGER NOT NULL,
    points_earned INTEGER DEFAULT 0,
    
    -- Status
    status VARCHAR(20) NOT NULL DEFAULT 'in_progress',
    -- 'in_progress', 'completed', 'abandoned', 'expired'
    passed BOOLEAN,
    
    -- Detailed results
    answers JSONB, -- Array of {question_id, selected_answer, is_correct, time_spent}
    
    -- Metadata
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Constraints
    CONSTRAINT valid_attempt_status CHECK (status IN ('in_progress', 'completed', 'abandoned', 'expired')),
    CONSTRAINT valid_score CHECK (score_percentage IS NULL OR score_percentage BETWEEN 0 AND 100),
    CONSTRAINT valid_counts CHECK (
        questions_answered <= total_questions AND
        correct_answers <= questions_answered
    )
);

-- Indexes
CREATE INDEX idx_attempts_user ON quiz_attempts(user_id);
CREATE INDEX idx_attempts_quiz ON quiz_attempts(quiz_id);
CREATE INDEX idx_attempts_status ON quiz_attempts(status);
CREATE INDEX idx_attempts_passed ON quiz_attempts(passed);
CREATE INDEX idx_attempts_completed ON quiz_attempts(completed_at);
CREATE INDEX idx_attempts_user_quiz ON quiz_attempts(user_id, quiz_id);
```

---

### 7. user_badges

**Purpose:** Achievement and badge tracking system

```sql
CREATE TABLE user_badges (
    -- Primary identification
    badge_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Association
    user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    
    -- Badge information
    badge_type VARCHAR(50) NOT NULL,
    -- Examples: 'first_module', 'phase_complete', 'perfect_quiz', 
    -- 'streak_7', 'streak_30', 'helper', 'contributor'
    
    badge_name VARCHAR(100) NOT NULL,
    badge_description TEXT NOT NULL,
    badge_icon_url VARCHAR(500),
    
    -- Achievement criteria
    criteria_met JSONB NOT NULL, -- Details of what was achieved
    
    -- Tier/level
    tier VARCHAR(20), -- 'bronze', 'silver', 'gold', 'platinum'
    
    -- Earned metadata
    earned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_featured BOOLEAN DEFAULT FALSE, -- Display on profile
    
    -- Constraints
    CONSTRAINT valid_tier CHECK (tier IS NULL OR tier IN ('bronze', 'silver', 'gold', 'platinum'))
);

-- Indexes
CREATE INDEX idx_badges_user ON user_badges(user_id);
CREATE INDEX idx_badges_type ON user_badges(badge_type);
CREATE INDEX idx_badges_earned ON user_badges(earned_at);
CREATE INDEX idx_badges_featured ON user_badges(user_id, is_featured) WHERE is_featured = TRUE;
```

---

### 8. saved_calculations

**Purpose:** Store user-saved calculator results

```sql
CREATE TABLE saved_calculations (
    -- Primary identification
    calc_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Association
    user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    
    -- Calculator information
    calculator_type VARCHAR(50) NOT NULL,
    -- 'dipole_length', 'yagi_design', 'impedance_match', 'swr', 
    -- 'link_budget', 'db_conversion', 'wavelength', 'coax_loss'
    
    calculator_name VARCHAR(100) NOT NULL,
    
    -- Calculation data
    inputs JSONB NOT NULL, -- All input values
    outputs JSONB NOT NULL, -- All calculated results
    
    -- User notes
    title VARCHAR(200), -- User-defined title
    notes TEXT, -- User notes about this calculation
    tags JSONB, -- User-defined tags
    
    -- Metadata
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_favorite BOOLEAN DEFAULT FALSE,
    
    -- Constraints
    CONSTRAINT valid_calculator_type CHECK (
        calculator_type IN (
            'dipole_length', 'yagi_design', 'impedance_match', 'swr',
            'link_budget', 'db_conversion', 'wavelength', 'coax_loss'
        )
    )
);

-- Indexes
CREATE INDEX idx_calcs_user ON saved_calculations(user_id);
CREATE INDEX idx_calcs_type ON saved_calculations(calculator_type);
CREATE INDEX idx_calcs_created ON saved_calculations(created_at);
CREATE INDEX idx_calcs_favorite ON saved_calculations(user_id, is_favorite) WHERE is_favorite = TRUE;
```

---

## Relationships & Constraints

### Entity Relationship Diagram (Text Format)

```
users (1) ─────< (M) user_progress >(M) ───── (1) modules
  │                                                   │
  │                                                   │
  └─< (M) quiz_attempts >(M) ───── (1) quizzes ──────┘
  │                                     │
  │                                     │
  └─< (M) user_badges           quiz_questions (M)
  │
  │
  └─< (M) saved_calculations
```

### Key Relationships

1. **users → user_progress → modules**
   - One user can have progress on many modules
   - One module can be tracked by many users
   - CASCADE DELETE: If user deleted, their progress is deleted

2. **users → quiz_attempts → quizzes → modules**
   - One user can attempt one quiz multiple times
   - One quiz belongs to one module
   - Quizzes have multiple questions

3. **users → user_badges**
   - One user can earn many badges
   - Badges are achievement milestones

4. **users → saved_calculations**
   - One user can save many calculations
   - Calculations are independent of modules

### Foreign Key Constraints Summary

```sql
-- All foreign key relationships with CASCADE DELETE
user_progress.user_id → users.user_id (CASCADE)
user_progress.module_id → modules.module_id (CASCADE)
quizzes.module_id → modules.module_id (CASCADE)
quiz_questions.quiz_id → quizzes.quiz_id (CASCADE)
quiz_attempts.user_id → users.user_id (CASCADE)
quiz_attempts.quiz_id → quizzes.quiz_id (CASCADE)
user_badges.user_id → users.user_id (CASCADE)
saved_calculations.user_id → users.user_id (CASCADE)
```

---

## API Endpoints

### Authentication Endpoints

#### POST /api/auth/register
Register a new user account

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "SecurePassword123!",
  "username": "rf_learner_42",
  "first_name": "John",
  "last_name": "Smith"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Account created. Please verify your email.",
  "user": {
    "user_id": "uuid",
    "email": "user@example.com",
    "username": "rf_learner_42"
  },
  "token": "jwt_token_here"
}
```

---

#### POST /api/auth/login
Authenticate user and get JWT token

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "SecurePassword123!"
}
```

**Response (200):**
```json
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "user_id": "uuid",
    "email": "user@example.com",
    "username": "rf_learner_42",
    "first_name": "John",
    "last_name": "Smith"
  }
}
```

---

#### POST /api/auth/verify-email
Verify email address with token

**Request Body:**
```json
{
  "token": "verification_token_from_email"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Email verified successfully"
}
```

---

#### POST /api/auth/forgot-password
Request password reset

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Password reset email sent"
}
```

---

#### POST /api/auth/reset-password
Reset password with token

**Request Body:**
```json
{
  "token": "reset_token_from_email",
  "new_password": "NewSecurePassword123!"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Password reset successfully"
}
```

---

### User Profile Endpoints

#### GET /api/users/profile
Get current user's profile (requires authentication)

**Headers:**
```
Authorization: Bearer jwt_token
```

**Response (200):**
```json
{
  "success": true,
  "user": {
    "user_id": "uuid",
    "email": "user@example.com",
    "username": "rf_learner_42",
    "first_name": "John",
    "last_name": "Smith",
    "bio": "Learning RF engineering",
    "avatar_url": "https://...",
    "total_modules_completed": 5,
    "total_quizzes_passed": 3,
    "total_badges_earned": 7,
    "current_streak_days": 12,
    "created_at": "2025-01-15T10:30:00Z"
  }
}
```

---

#### PUT /api/users/profile
Update user profile

**Request Body:**
```json
{
  "first_name": "John",
  "last_name": "Smith",
  "bio": "RF engineering enthusiast",
  "timezone": "America/New_York",
  "theme": "dark"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Profile updated successfully",
  "user": { /* updated user object */ }
}
```

---

### Module & Progress Endpoints

#### GET /api/modules
Get all modules (optionally filtered)

**Query Parameters:**
- `phase` (optional): Filter by phase (1-4)
- `difficulty` (optional): Filter by difficulty
- `published` (optional): Filter by published status

**Response (200):**
```json
{
  "success": true,
  "total": 26,
  "modules": [
    {
      "module_id": "uuid",
      "module_number": "1.1",
      "phase": 1,
      "title": "Introduction to RF",
      "description": "...",
      "difficulty": "beginner",
      "estimated_time_minutes": 45,
      "is_published": true
    }
  ]
}
```

---

#### GET /api/modules/:module_id
Get specific module details

**Response (200):**
```json
{
  "success": true,
  "module": {
    "module_id": "uuid",
    "module_number": "1.1",
    "phase": 1,
    "title": "Introduction to RF",
    "description": "Comprehensive introduction...",
    "learning_objectives": [
      "Understand basic RF concepts",
      "Learn about electromagnetic spectrum",
      "Identify common RF applications"
    ],
    "difficulty": "beginner",
    "estimated_time_minutes": 45,
    "prerequisites": [],
    "content_url": "/pages/module-1-1.html",
    "has_quiz": true
  }
}
```

---

#### GET /api/progress
Get current user's progress across all modules

**Headers:**
```
Authorization: Bearer jwt_token
```

**Response (200):**
```json
{
  "success": true,
  "overall_progress": {
    "total_modules": 26,
    "completed": 5,
    "in_progress": 2,
    "not_started": 19,
    "completion_percentage": 19.2
  },
  "by_phase": [
    {
      "phase": 1,
      "total": 6,
      "completed": 5,
      "percentage": 83.3
    }
  ],
  "progress": [
    {
      "module_id": "uuid",
      "module_number": "1.1",
      "status": "completed",
      "progress_percentage": 100,
      "completed_at": "2025-02-01T14:30:00Z"
    }
  ]
}
```

---

#### POST /api/progress/:module_id
Update progress for a specific module

**Request Body:**
```json
{
  "status": "completed",
  "progress_percentage": 100,
  "time_spent_minutes": 50,
  "notes": "Great module on RF basics"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Progress updated",
  "progress": { /* updated progress object */ }
}
```

---

#### DELETE /api/progress/:module_id
Reset progress for a module

**Response (200):**
```json
{
  "success": true,
  "message": "Progress reset successfully"
}
```

---

### Quiz Endpoints

#### GET /api/quizzes/module/:module_id
Get quiz for a specific module

**Response (200):**
```json
{
  "success": true,
  "quiz": {
    "quiz_id": "uuid",
    "module_id": "uuid",
    "title": "Module 1.1 Quiz",
    "description": "Test your knowledge",
    "passing_score": 70,
    "time_limit_minutes": 15,
    "total_questions": 10,
    "attempts_allowed": null
  }
}
```

---

#### GET /api/quizzes/:quiz_id/questions
Get questions for a quiz (without answers)

**Headers:**
```
Authorization: Bearer jwt_token
```

**Response (200):**
```json
{
  "success": true,
  "quiz_id": "uuid",
  "questions": [
    {
      "question_id": "uuid",
      "question_text": "What does RF stand for?",
      "question_type": "multiple_choice",
      "options": [
        "Radio Frequency",
        "Rapid Fire",
        "Real Fast",
        "Range Finder"
      ],
      "points": 1,
      "hint": "Think about electromagnetic waves"
    }
  ]
}
```

---

#### POST /api/quizzes/:quiz_id/start
Start a new quiz attempt

**Response (200):**
```json
{
  "success": true,
  "attempt_id": "uuid",
  "started_at": "2025-03-01T10:00:00Z",
  "expires_at": "2025-03-01T10:15:00Z"
}
```

---

#### POST /api/quizzes/attempts/:attempt_id/submit
Submit quiz answers

**Request Body:**
```json
{
  "answers": [
    {
      "question_id": "uuid",
      "selected_answer": 0,
      "time_spent_seconds": 15
    }
  ]
}
```

**Response (200):**
```json
{
  "success": true,
  "attempt_id": "uuid",
  "score_percentage": 85.0,
  "correct_answers": 8,
  "total_questions": 10,
  "passed": true,
  "time_taken_seconds": 420,
  "results": [
    {
      "question_id": "uuid",
      "question_text": "What does RF stand for?",
      "your_answer": "Radio Frequency",
      "correct_answer": "Radio Frequency",
      "is_correct": true,
      "explanation": "RF stands for Radio Frequency..."
    }
  ]
}
```

---

#### GET /api/quizzes/attempts/:attempt_id
Get details of a specific quiz attempt

**Response (200):**
```json
{
  "success": true,
  "attempt": {
    "attempt_id": "uuid",
    "quiz_id": "uuid",
    "user_id": "uuid",
    "attempt_number": 1,
    "score_percentage": 85.0,
    "passed": true,
    "completed_at": "2025-03-01T10:07:00Z"
  }
}
```

---

#### GET /api/users/quiz-history
Get user's quiz attempt history

**Query Parameters:**
- `limit` (optional): Number of results
- `offset` (optional): Pagination offset

**Response (200):**
```json
{
  "success": true,
  "total": 15,
  "attempts": [
    {
      "attempt_id": "uuid",
      "quiz_title": "Module 1.1 Quiz",
      "module_number": "1.1",
      "score_percentage": 85.0,
      "passed": true,
      "completed_at": "2025-03-01T10:07:00Z"
    }
  ]
}
```

---

### Badge Endpoints

#### GET /api/badges/user/:user_id
Get all badges earned by a user

**Response (200):**
```json
{
  "success": true,
  "total_badges": 7,
  "badges": [
    {
      "badge_id": "uuid",
      "badge_type": "first_module",
      "badge_name": "First Steps",
      "badge_description": "Completed your first module!",
      "badge_icon_url": "/assets/badges/first-steps.png",
      "tier": "bronze",
      "earned_at": "2025-02-01T14:30:00Z"
    }
  ]
}
```

---

### Calculator Endpoints

#### GET /api/calculations/user
Get user's saved calculations

**Query Parameters:**
- `calculator_type` (optional): Filter by calculator type
- `limit` (optional): Number of results
- `offset` (optional): Pagination offset

**Response (200):**
```json
{
  "success": true,
  "total": 12,
  "calculations": [
    {
      "calc_id": "uuid",
      "calculator_type": "dipole_length",
      "calculator_name": "Dipole Length Calculator",
      "title": "20m Dipole Design",
      "inputs": {
        "frequency_mhz": 14.2,
        "wire_diameter_mm": 2.0
      },
      "outputs": {
        "total_length_m": 10.08,
        "leg_length_m": 5.04
      },
      "created_at": "2025-02-15T09:00:00Z",
      "is_favorite": true
    }
  ]
}
```

---

#### POST /api/calculations
Save a new calculation

**Request Body:**
```json
{
  "calculator_type": "dipole_length",
  "calculator_name": "Dipole Length Calculator",
  "title": "20m Dipole Design",
  "inputs": {
    "frequency_mhz": 14.2,
    "wire_diameter_mm": 2.0
  },
  "outputs": {
    "total_length_m": 10.08,
    "leg_length_m": 5.04
  },
  "notes": "For my backyard antenna",
  "tags": ["dipole", "20m", "hf"]
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Calculation saved",
  "calc_id": "uuid"
}
```

---

#### DELETE /api/calculations/:calc_id
Delete a saved calculation

**Response (200):**
```json
{
  "success": true,
  "message": "Calculation deleted"
}
```

---

## Sample Data

### Sample Users (JSON Fixtures)

```json
{
  "users": [
    {
      "email": "john.doe@example.com",
      "username": "john_rf_learner",
      "first_name": "John",
      "last_name": "Doe",
      "password": "password123",
      "bio": "Learning RF engineering for amateur radio",
      "timezone": "America/New_York",
      "theme": "dark"
    },
    {
      "email": "sarah.smith@example.com",
      "username": "sarah_antenna",
      "first_name": "Sarah",
      "last_name": "Smith",
      "password": "password123",
      "bio": "Building antennas and learning SDR",
      "timezone": "Europe/London",
      "theme": "light"
    }
  ]
}
```

---

### Sample Modules (Phase 1)

```json
{
  "modules": [
    {
      "module_number": "1.1",
      "phase": 1,
      "order_in_phase": 1,
      "title": "Introduction to RF",
      "slug": "introduction-to-rf",
      "description": "Comprehensive introduction to Radio Frequency engineering, electromagnetic spectrum, and basic concepts.",
      "learning_objectives": [
        "Understand what RF (Radio Frequency) means",
        "Learn about the electromagnetic spectrum",
        "Identify common RF applications",
        "Understand frequency bands and regulations"
      ],
      "difficulty": "beginner",
      "estimated_time_minutes": 45,
      "prerequisites": [],
      "content_url": "/pages/module-1-1.html",
      "is_published": true
    },
    {
      "module_number": "1.2",
      "phase": 1,
      "order_in_phase": 2,
      "title": "Electromagnetic Waves",
      "slug": "electromagnetic-waves",
      "description": "Understanding the physics of electromagnetic waves, propagation, and wave characteristics.",
      "learning_objectives": [
        "Understand electromagnetic wave properties",
        "Learn about wave propagation",
        "Study the relationship between frequency and wavelength",
        "Explore different propagation modes"
      ],
      "difficulty": "beginner",
      "estimated_time_minutes": 50,
      "prerequisites": ["1.1"],
      "content_url": "/pages/module-1-2.html",
      "is_published": true
    },
    {
      "module_number": "1.3",
      "phase": 1,
      "order_in_phase": 3,
      "title": "Frequency and Wavelength",
      "slug": "frequency-and-wavelength",
      "description": "Deep dive into the relationship between frequency and wavelength, with practical calculations.",
      "learning_objectives": [
        "Calculate wavelength from frequency",
        "Understand the speed of light in different media",
        "Apply formulas to real-world scenarios",
        "Learn unit conversions"
      ],
      "difficulty": "beginner",
      "estimated_time_minutes": 40,
      "prerequisites": ["1.2"],
      "content_url": "/pages/module-1-3.html",
      "is_published": true
    },
    {
      "module_number": "1.4",
      "phase": 1,
      "order_in_phase": 4,
      "title": "Antenna Fundamentals",
      "slug": "antenna-fundamentals",
      "description": "Introduction to antenna theory, types, and basic principles of radiation.",
      "learning_objectives": [
        "Understand how antennas radiate energy",
        "Learn about antenna patterns and gain",
        "Explore common antenna types",
        "Understand polarization"
      ],
      "difficulty": "beginner",
      "estimated_time_minutes": 60,
      "prerequisites": ["1.3"],
      "content_url": "/pages/module-1-4.html",
      "is_published": true
    },
    {
      "module_number": "1.5",
      "phase": 1,
      "order_in_phase": 5,
      "title": "Transmission Lines",
      "slug": "transmission-lines",
      "description": "Understanding coaxial cables, transmission line theory, and impedance.",
      "learning_objectives": [
        "Learn about transmission line types",
        "Understand characteristic impedance",
        "Calculate transmission line losses",
        "Study velocity factor"
      ],
      "difficulty": "intermediate",
      "estimated_time_minutes": 55,
      "prerequisites": ["1.4"],
      "content_url": "/pages/module-1-5.html",
      "is_published": true
    },
    {
      "module_number": "1.6",
      "phase": 1,
      "order_in_phase": 6,
      "title": "Impedance Matching",
      "slug": "impedance-matching",
      "description": "Techniques for matching impedances to maximize power transfer and minimize SWR.",
      "learning_objectives": [
        "Understand the importance of impedance matching",
        "Learn about SWR (Standing Wave Ratio)",
        "Study matching networks",
        "Apply Smith chart basics"
      ],
      "difficulty": "intermediate",
      "estimated_time_minutes": 65,
      "prerequisites": ["1.5"],
      "content_url": "/pages/module-1-6.html",
      "is_published": true
    }
  ]
}
```

---

### Sample Quiz Questions

```json
{
  "quiz_questions": [
    {
      "module": "1.1",
      "question_id": "m1.1-q1",
      "question_text": "What does RF stand for?",
      "question_type": "multiple_choice",
      "options": [
        "Radio Frequency",
        "Rapid Fire",
        "Real Fast",
        "Range Finder"
      ],
      "correct_answer": 0,
      "difficulty": "beginner",
      "points": 1,
      "explanation": "RF stands for Radio Frequency, which refers to electromagnetic waves in the frequency range used for radio communication, typically from 3 kHz to 300 GHz."
    },
    {
      "module": "1.1",
      "question_id": "m1.1-q2",
      "question_text": "Which frequency band is used for FM radio broadcasting?",
      "question_type": "multiple_choice",
      "options": [
        "AM band (535-1705 kHz)",
        "FM band (88-108 MHz)",
        "Shortwave (3-30 MHz)",
        "Microwave (1-30 GHz)"
      ],
      "correct_answer": 1,
      "difficulty": "beginner",
      "points": 1,
      "explanation": "FM radio broadcasting operates in the VHF band from 88 to 108 MHz. This provides better audio quality than AM radio."
    },
    {
      "module": "1.3",
      "question_id": "m1.3-q1",
      "question_text": "What is the wavelength of a 100 MHz signal in free space? (c = 3×10^8 m/s)",
      "question_type": "calculation",
      "options": [
        "1 meter",
        "2 meters",
        "3 meters",
        "4 meters"
      ],
      "correct_answer": 2,
      "difficulty": "intermediate",
      "points": 2,
      "explanation": "Using λ = c/f, where c = 3×10^8 m/s and f = 100×10^6 Hz: λ = 3×10^8 / 100×10^6 = 3 meters"
    }
  ]
}
```

---

## PostgreSQL Optimizations

### 1. Indexes Strategy

**Already Defined in Tables:**
- Primary keys (automatic B-tree indexes)
- Foreign keys
- Frequently queried columns (email, username, module_number)
- Date columns for sorting/filtering
- Boolean flags with WHERE clauses

**Additional Composite Indexes:**

```sql
-- User progress queries
CREATE INDEX idx_progress_user_status ON user_progress(user_id, status);
CREATE INDEX idx_progress_module_completed ON user_progress(module_id, completed_at DESC);

-- Quiz performance queries
CREATE INDEX idx_attempts_user_score ON quiz_attempts(user_id, score_percentage DESC);
CREATE INDEX idx_attempts_quiz_passed ON quiz_attempts(quiz_id, passed, completed_at DESC);

-- Badge queries
CREATE INDEX idx_badges_user_earned ON user_badges(user_id, earned_at DESC);
```

---

### 2. Database Constraints

**Data Integrity:**
- CHECK constraints on enums (status, difficulty, theme)
- CHECK constraints on ranges (percentages 0-100)
- UNIQUE constraints on combinations (user_id + module_id)
- NOT NULL on required fields

**Referential Integrity:**
- CASCADE DELETE on user-related tables
- Prevents orphaned records

---

### 3. JSONB Column Usage

**Why JSONB:**
- Flexible data storage (arrays, objects)
- Query-able with PostgreSQL operators
- More efficient than JSON type
- Supports indexing

**JSONB Columns:**
- `learning_objectives` - Array of strings
- `prerequisites` - Array of module IDs
- `tags` - Array of tags
- `answers` - Complex quiz attempt data
- `criteria_met` - Badge achievement details
- `inputs/outputs` - Calculator data

**JSONB Indexing:**
```sql
-- Index JSONB columns for faster queries
CREATE INDEX idx_modules_objectives ON modules USING GIN (learning_objectives);
CREATE INDEX idx_questions_tags ON quiz_questions USING GIN (tags);
```

---

### 4. Partitioning Strategy (Future Optimization)

**When to Implement:** After reaching 100,000+ records

**Candidates for Partitioning:**
- `quiz_attempts` - Partition by date (monthly)
- `user_progress` - Partition by user_id range
- `saved_calculations` - Partition by date (quarterly)

**Example:**
```sql
-- Partition quiz_attempts by month
CREATE TABLE quiz_attempts_2025_01 PARTITION OF quiz_attempts
    FOR VALUES FROM ('2025-01-01') TO ('2025-02-01');
```

---

### 5. Query Optimization

**Use EXPLAIN ANALYZE:**
```sql
EXPLAIN ANALYZE
SELECT * FROM user_progress
WHERE user_id = 'some-uuid' AND status = 'completed';
```

**Avoid N+1 Queries:**
- Use JOINs instead of multiple queries
- Use `SELECT DISTINCT` cautiously
- Implement pagination with LIMIT/OFFSET

**Example Optimized Query:**
```sql
-- Get user's progress with module details
SELECT 
    up.*,
    m.module_number,
    m.title,
    m.phase
FROM user_progress up
JOIN modules m ON up.module_id = m.module_id
WHERE up.user_id = $1
ORDER BY m.phase, m.order_in_phase;
```

---

### 6. Connection Pooling

**Use pg-pool:**
```javascript
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  max: 20, // Maximum connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
```

---

### 7. Backup Strategy

**Automated Backups:**
- Daily full backups
- Point-in-time recovery enabled
- 30-day retention

**PostgreSQL Command:**
```bash
pg_dump -U username -d rf_learning_hub > backup_$(date +%Y%m%d).sql
```

---

## Implementation Guide

### Phase 1: Initial Setup (Day 1)

**1. Install Dependencies**
```bash
npm install express pg bcrypt jsonwebtoken dotenv
npm install --save-dev nodemon
```

**2. Project Structure**
```
backend/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Module.js
│   │   ├── Progress.js
│   │   ├── Quiz.js
│   │   └── Badge.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── users.js
│   │   ├── modules.js
│   │   ├── progress.js
│   │   ├── quizzes.js
│   │   └── calculations.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── utils/
│   │   ├── validation.js
│   │   └── helpers.js
│   └── server.js
├── .env
├── .env.example
└── package.json
```

**3. Create Database**
```bash
createdb rf_learning_hub
psql -d rf_learning_hub -f schema.sql
```

---

### Phase 2: Core Tables (Day 1-2)

**Priority Order:**
1. Create `users` table and authentication
2. Create `modules` table and seed data
3. Create `user_progress` table
4. Test basic CRUD operations

**Example Implementation (users table):**
```javascript
// src/models/User.js
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
  
  static async verifyPassword(plainPassword, passwordHash) {
    return await bcrypt.compare(plainPassword, passwordHash);
  }
}

module.exports = User;
```

---

### Phase 3: Authentication (Day 2-3)

**1. JWT Implementation**
```javascript
// src/middleware/auth.js
const jwt = require('jsonwebtoken');

function generateToken(user) {
  return jwt.sign(
    { user_id: user.user_id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
}

function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  
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

**2. Registration Endpoint**
```javascript
// src/routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { generateToken } = require('../middleware/auth');

router.post('/register', async (req, res) => {
  try {
    const { email, password, username, first_name, last_name } = req.body;
    
    // Validation
    if (!email || !password || !username) {
      return res.status(400).json({ error: 'Missing required fields' });
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
      user,
      token
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
```

---

### Phase 4: Quiz System (Day 4-5)

**1. Quiz Attempt Flow**
```javascript
// src/models/QuizAttempt.js
class QuizAttempt {
  static async startAttempt(user_id, quiz_id) {
    // Get quiz details
    const quiz = await pool.query(
      'SELECT * FROM quizzes WHERE quiz_id = $1',
      [quiz_id]
    );
    
    // Get questions
    const questions = await pool.query(
      'SELECT question_id, question_text, question_type, options, points FROM quiz_questions WHERE quiz_id = $1',
      [quiz_id]
    );
    
    // Count previous attempts
    const attemptCount = await pool.query(
      'SELECT COUNT(*) FROM quiz_attempts WHERE user_id = $1 AND quiz_id = $2',
      [user_id, quiz_id]
    );
    
    // Create new attempt
    const result = await pool.query(
      `INSERT INTO quiz_attempts (user_id, quiz_id, attempt_number, total_questions, max_possible_points, status)
       VALUES ($1, $2, $3, $4, $5, 'in_progress')
       RETURNING attempt_id, started_at`,
      [
        user_id,
        quiz_id,
        parseInt(attemptCount.rows[0].count) + 1,
        questions.rows.length,
        questions.rows.reduce((sum, q) => sum + q.points, 0)
      ]
    );
    
    return {
      attempt_id: result.rows[0].attempt_id,
      started_at: result.rows[0].started_at,
      questions: questions.rows
    };
  }
  
  static async submitAttempt(attempt_id, answers) {
    // Get quiz questions with correct answers
    const questions = await pool.query(
      `SELECT qq.* FROM quiz_questions qq
       JOIN quiz_attempts qa ON qq.quiz_id = qa.quiz_id
       WHERE qa.attempt_id = $1`,
      [attempt_id]
    );
    
    // Calculate score
    let correct_answers = 0;
    let points_earned = 0;
    const detailedResults = [];
    
    answers.forEach(answer => {
      const question = questions.rows.find(q => q.question_id === answer.question_id);
      const is_correct = question.correct_answer === answer.selected_answer;
      
      if (is_correct) {
        correct_answers++;
        points_earned += question.points;
      }
      
      detailedResults.push({
        question_id: answer.question_id,
        selected_answer: answer.selected_answer,
        correct_answer: question.correct_answer,
        is_correct,
        time_spent: answer.time_spent_seconds
      });
    });
    
    const total_questions = questions.rows.length;
    const max_points = questions.rows.reduce((sum, q) => sum + q.points, 0);
    const score_percentage = (points_earned / max_points) * 100;
    
    // Get passing score
    const quiz = await pool.query(
      `SELECT q.passing_score FROM quizzes q
       JOIN quiz_attempts qa ON q.quiz_id = qa.quiz_id
       WHERE qa.attempt_id = $1`,
      [attempt_id]
    );
    
    const passed = score_percentage >= quiz.rows[0].passing_score;
    
    // Update attempt
    await pool.query(
      `UPDATE quiz_attempts SET
        completed_at = CURRENT_TIMESTAMP,
        questions_answered = $1,
        correct_answers = $2,
        points_earned = $3,
        score_percentage = $4,
        status = 'completed',
        passed = $5,
        answers = $6
       WHERE attempt_id = $7`,
      [
        answers.length,
        correct_answers,
        points_earned,
        score_percentage,
        passed,
        JSON.stringify(detailedResults),
        attempt_id
      ]
    );
    
    return {
      score_percentage,
      correct_answers,
      total_questions,
      passed,
      points_earned,
      max_points,
      results: detailedResults
    };
  }
}
```

---

### Phase 5: Progress Tracking & Badges (Day 6)

**1. Progress Update with Badge Checking**
```javascript
// src/models/Progress.js
class Progress {
  static async updateProgress(user_id, module_id, updates) {
    const result = await pool.query(
      `INSERT INTO user_progress (user_id, module_id, status, progress_percentage, completed_at)
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (user_id, module_id)
       DO UPDATE SET
         status = $3,
         progress_percentage = $4,
         completed_at = $5,
         updated_at = CURRENT_TIMESTAMP
       RETURNING *`,
      [
        user_id,
        module_id,
        updates.status,
        updates.progress_percentage,
        updates.status === 'completed' ? new Date() : null
      ]
    );
    
    // Check for badge achievements
    if (updates.status === 'completed') {
      await this.checkBadges(user_id);
    }
    
    return result.rows[0];
  }
  
  static async checkBadges(user_id) {
    // First module completed
    const moduleCount = await pool.query(
      `SELECT COUNT(*) FROM user_progress
       WHERE user_id = $1 AND status = 'completed'`,
      [user_id]
    );
    
    if (moduleCount.rows[0].count == 1) {
      await pool.query(
        `INSERT INTO user_badges (user_id, badge_type, badge_name, badge_description, criteria_met)
         VALUES ($1, 'first_module', 'First Steps', 'Completed your first module!', $2)
         ON CONFLICT DO NOTHING`,
        [user_id, JSON.stringify({ modules_completed: 1 })]
      );
    }
    
    // Phase 1 completed
    const phase1Complete = await pool.query(
      `SELECT COUNT(*) FROM user_progress up
       JOIN modules m ON up.module_id = m.module_id
       WHERE up.user_id = $1 AND m.phase = 1 AND up.status = 'completed'`,
      [user_id]
    );
    
    if (phase1Complete.rows[0].count >= 6) {
      await pool.query(
        `INSERT INTO user_badges (user_id, badge_type, badge_name, badge_description, tier, criteria_met)
         VALUES ($1, 'phase_complete', 'Phase 1 Master', 'Completed all Phase 1 modules!', 'gold', $2)
         ON CONFLICT DO NOTHING`,
        [user_id, JSON.stringify({ phase: 1, modules: 6 })]
      );
    }
  }
}
```

---

### Phase 6: Testing & Deployment (Day 7)

**1. Environment Variables (.env)**
```env
# Server
PORT=3000
NODE_ENV=development

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=rf_learning_hub
DB_USER=your_username
DB_PASSWORD=your_password

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=7d

# Email (future)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

**2. Testing Checklist**
- [ ] User registration and login
- [ ] Email validation
- [ ] Module listing and filtering
- [ ] Progress tracking
- [ ] Quiz start and submission
- [ ] Badge awarding
- [ ] Calculator saving
- [ ] Error handling
- [ ] Input validation
- [ ] SQL injection prevention

**3. Deployment**
```bash
# Production database setup
createdb rf_learning_hub_prod
psql -d rf_learning_hub_prod -f schema.sql

# Install dependencies
npm install --production

# Run migrations
npm run migrate

# Seed initial data
npm run seed

# Start server
npm start
```

---

## Security Considerations

### 1. Password Security
- Use bcrypt with salt rounds ≥ 10
- Enforce strong password requirements
- Implement password reset flow with tokens
- Rate limit login attempts

### 2. Authentication
- Use JWT with secure secret key
- Implement token expiration (7 days recommended)
- Store tokens in HTTP-only cookies (not localStorage)
- Validate tokens on every protected route

### 3. SQL Injection Prevention
- ALWAYS use parameterized queries ($1, $2, etc.)
- NEVER concatenate user input into SQL
- Use pg library's built-in escaping
- Validate all user inputs

### 4. Input Validation
```javascript
// Example validation
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  // At least 8 chars, 1 uppercase, 1 lowercase, 1 number
  return password.length >= 8 &&
         /[A-Z]/.test(password) &&
         /[a-z]/.test(password) &&
         /[0-9]/.test(password);
}
```

### 5. Rate Limiting
```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

### 6. CORS Configuration
```javascript
const cors = require('cors');

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
```

### 7. HTTPS Only (Production)
- Always use HTTPS in production
- Redirect HTTP to HTTPS
- Use secure cookies
- Implement HSTS headers

### 8. GDPR Compliance
- Get user consent for data collection
- Provide data export functionality
- Implement account deletion
- Clear privacy policy
- Log data access

---

## Next Steps

### Immediate (Claude Code - Today)
1. Set up Node.js project structure
2. Install dependencies
3. Create database connection
4. Implement user authentication
5. Create basic API endpoints
6. Test with Postman/Insomnia

### Short-term (This Week)
1. Complete all CRUD operations
2. Implement quiz system
3. Add progress tracking
4. Create badge system
5. Write API tests
6. Documentation

### Medium-term (Next 2 Weeks)
1. Add email verification
2. Implement password reset
3. Create admin panel
4. Add data export features
5. Performance optimization
6. Security audit

### Long-term (Next Month)
1. OAuth integration (Google, GitHub)
2. Real-time features (WebSockets)
3. Analytics dashboard
4. Mobile app API
5. Advanced search
6. Recommendation engine

---

## Documentation Maintenance

**This document should be updated when:**
- New tables are added
- API endpoints change
- Security requirements evolve
- Performance optimizations are implemented
- New features are planned

**Version History:**
- v1.0 (2025-10-10): Initial complete schema
- v1.1 (TBD): OAuth integration
- v2.0 (TBD): Real-time features

---

**Document Status:** ✅ Complete and Ready for Implementation

**Created By:** Claude  
**Date:** October 10, 2025  
**For:** RF Learning Hub Project  
**Next Action:** Hand off to Claude Code for implementation
