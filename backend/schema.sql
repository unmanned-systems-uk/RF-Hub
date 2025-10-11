-- RF Learning Hub PostgreSQL Database Schema
-- Version: 1.0
-- Created: October 10, 2025
-- Technology: PostgreSQL 14+

-- ========================================
-- 1. USERS TABLE
-- ========================================

CREATE TABLE users (
    -- Primary identification
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Authentication
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
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
    theme VARCHAR(20) DEFAULT 'dark',
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

-- Indexes for users table
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_created_at ON users(created_at);
CREATE INDEX idx_users_last_login ON users(last_login);

-- ========================================
-- 2. MODULES TABLE
-- ========================================

CREATE TABLE modules (
    -- Primary identification
    module_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Module identification
    module_number VARCHAR(10) UNIQUE NOT NULL,
    phase INTEGER NOT NULL,
    order_in_phase INTEGER NOT NULL,
    
    -- Module content
    title VARCHAR(200) NOT NULL,
    slug VARCHAR(200) UNIQUE NOT NULL,
    description TEXT NOT NULL,
    learning_objectives JSONB NOT NULL,
    
    -- Module metadata
    difficulty VARCHAR(20) NOT NULL,
    estimated_time_minutes INTEGER NOT NULL,
    prerequisites JSONB,
    
    -- Content
    content_url VARCHAR(500),
    video_url VARCHAR(500),
    
    -- Status
    is_published BOOLEAN DEFAULT FALSE,
    is_premium BOOLEAN DEFAULT FALSE,
    
    -- Metadata
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Constraints
    CONSTRAINT valid_phase CHECK (phase BETWEEN 1 AND 4),
    CONSTRAINT valid_difficulty CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
    CONSTRAINT positive_time CHECK (estimated_time_minutes > 0),
    CONSTRAINT unique_phase_order UNIQUE (phase, order_in_phase)
);

-- Indexes for modules table
CREATE INDEX idx_modules_phase ON modules(phase);
CREATE INDEX idx_modules_module_number ON modules(module_number);
CREATE INDEX idx_modules_difficulty ON modules(difficulty);
CREATE INDEX idx_modules_published ON modules(is_published);
CREATE INDEX idx_modules_objectives ON modules USING GIN (learning_objectives);

-- ========================================
-- 3. USER PROGRESS TABLE
-- ========================================

CREATE TABLE user_progress (
    -- Primary identification
    progress_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Foreign keys
    user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    module_id UUID NOT NULL REFERENCES modules(module_id) ON DELETE CASCADE,
    
    -- Progress tracking
    status VARCHAR(20) NOT NULL DEFAULT 'not_started',
    progress_percentage INTEGER DEFAULT 0,
    
    -- Time tracking
    time_spent_minutes INTEGER DEFAULT 0,
    started_at TIMESTAMP,
    completed_at TIMESTAMP,
    last_accessed TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Engagement
    times_accessed INTEGER DEFAULT 0,
    notes TEXT,
    bookmarked BOOLEAN DEFAULT FALSE,
    
    -- Metadata
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Constraints
    CONSTRAINT valid_status CHECK (status IN ('not_started', 'in_progress', 'completed')),
    CONSTRAINT valid_percentage CHECK (progress_percentage BETWEEN 0 AND 100),
    CONSTRAINT unique_user_module UNIQUE (user_id, module_id)
);

-- Indexes for user_progress table
CREATE INDEX idx_progress_user ON user_progress(user_id);
CREATE INDEX idx_progress_module ON user_progress(module_id);
CREATE INDEX idx_progress_status ON user_progress(status);
CREATE INDEX idx_progress_completed ON user_progress(completed_at);
CREATE INDEX idx_progress_bookmarked ON user_progress(user_id, bookmarked) WHERE bookmarked = TRUE;
CREATE INDEX idx_progress_user_status ON user_progress(user_id, status);
CREATE INDEX idx_progress_module_completed ON user_progress(module_id, completed_at DESC);

-- ========================================
-- 4. QUIZZES TABLE
-- ========================================

CREATE TABLE quizzes (
    -- Primary identification
    quiz_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Association
    module_id UUID NOT NULL REFERENCES modules(module_id) ON DELETE CASCADE,
    
    -- Quiz configuration
    title VARCHAR(200) NOT NULL,
    description TEXT,
    passing_score INTEGER NOT NULL DEFAULT 70,
    time_limit_minutes INTEGER,
    max_attempts INTEGER,
    
    -- Question settings
    randomize_questions BOOLEAN DEFAULT TRUE,
    show_correct_answers BOOLEAN DEFAULT TRUE,
    
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

-- Indexes for quizzes table
CREATE INDEX idx_quizzes_module ON quizzes(module_id);
CREATE INDEX idx_quizzes_active ON quizzes(is_active);

-- ========================================
-- 5. QUIZ QUESTIONS TABLE
-- ========================================

CREATE TABLE quiz_questions (
    -- Primary identification
    question_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Association
    quiz_id UUID NOT NULL REFERENCES quizzes(quiz_id) ON DELETE CASCADE,
    
    -- Question content
    question_text TEXT NOT NULL,
    question_type VARCHAR(20) NOT NULL DEFAULT 'multiple_choice',
    
    -- Answer options
    options JSONB NOT NULL,
    correct_answer INTEGER NOT NULL,
    
    -- Additional content
    explanation TEXT NOT NULL,
    hint TEXT,
    
    -- Difficulty and metadata
    difficulty VARCHAR(20) NOT NULL,
    points INTEGER DEFAULT 1,
    order_index INTEGER,
    
    -- Tags for categorization
    tags JSONB,
    
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

-- Indexes for quiz_questions table
CREATE INDEX idx_questions_quiz ON quiz_questions(quiz_id);
CREATE INDEX idx_questions_difficulty ON quiz_questions(difficulty);
CREATE INDEX idx_questions_type ON quiz_questions(question_type);
CREATE INDEX idx_questions_tags ON quiz_questions USING GIN (tags);

-- ========================================
-- 6. QUIZ ATTEMPTS TABLE
-- ========================================

CREATE TABLE quiz_attempts (
    -- Primary identification
    attempt_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Foreign keys
    user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    quiz_id UUID NOT NULL REFERENCES quizzes(quiz_id) ON DELETE CASCADE,
    
    -- Attempt metadata
    attempt_number INTEGER NOT NULL,
    
    -- Timing
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP,
    time_taken_seconds INTEGER,
    
    -- Scoring
    total_questions INTEGER NOT NULL,
    questions_answered INTEGER DEFAULT 0,
    correct_answers INTEGER DEFAULT 0,
    score_percentage NUMERIC(5,2),
    max_possible_points INTEGER NOT NULL,
    points_earned INTEGER DEFAULT 0,
    
    -- Status
    status VARCHAR(20) NOT NULL DEFAULT 'in_progress',
    passed BOOLEAN,
    
    -- Detailed results
    answers JSONB,
    
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

-- Indexes for quiz_attempts table
CREATE INDEX idx_attempts_user ON quiz_attempts(user_id);
CREATE INDEX idx_attempts_quiz ON quiz_attempts(quiz_id);
CREATE INDEX idx_attempts_status ON quiz_attempts(status);
CREATE INDEX idx_attempts_passed ON quiz_attempts(passed);
CREATE INDEX idx_attempts_completed ON quiz_attempts(completed_at);
CREATE INDEX idx_attempts_user_quiz ON quiz_attempts(user_id, quiz_id);
CREATE INDEX idx_attempts_user_score ON quiz_attempts(user_id, score_percentage DESC);
CREATE INDEX idx_attempts_quiz_passed ON quiz_attempts(quiz_id, passed, completed_at DESC);

-- ========================================
-- 7. USER BADGES TABLE
-- ========================================

CREATE TABLE user_badges (
    -- Primary identification
    badge_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Association
    user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    
    -- Badge information
    badge_type VARCHAR(50) NOT NULL,
    badge_name VARCHAR(100) NOT NULL,
    badge_description TEXT NOT NULL,
    badge_icon_url VARCHAR(500),
    
    -- Achievement criteria
    criteria_met JSONB NOT NULL,
    
    -- Tier/level
    tier VARCHAR(20),
    
    -- Earned metadata
    earned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_featured BOOLEAN DEFAULT FALSE,
    
    -- Constraints
    CONSTRAINT valid_tier CHECK (tier IS NULL OR tier IN ('bronze', 'silver', 'gold', 'platinum'))
);

-- Indexes for user_badges table
CREATE INDEX idx_badges_user ON user_badges(user_id);
CREATE INDEX idx_badges_type ON user_badges(badge_type);
CREATE INDEX idx_badges_earned ON user_badges(earned_at);
CREATE INDEX idx_badges_featured ON user_badges(user_id, is_featured) WHERE is_featured = TRUE;
CREATE INDEX idx_badges_user_earned ON user_badges(user_id, earned_at DESC);

-- ========================================
-- 8. SAVED CALCULATIONS TABLE
-- ========================================

CREATE TABLE saved_calculations (
    -- Primary identification
    calc_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Association
    user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    
    -- Calculator information
    calculator_type VARCHAR(50) NOT NULL,
    calculator_name VARCHAR(100) NOT NULL,
    
    -- Calculation data
    inputs JSONB NOT NULL,
    outputs JSONB NOT NULL,
    
    -- User notes
    title VARCHAR(200),
    notes TEXT,
    tags JSONB,
    
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

-- Indexes for saved_calculations table
CREATE INDEX idx_calcs_user ON saved_calculations(user_id);
CREATE INDEX idx_calcs_type ON saved_calculations(calculator_type);
CREATE INDEX idx_calcs_created ON saved_calculations(created_at);
CREATE INDEX idx_calcs_favorite ON saved_calculations(user_id, is_favorite) WHERE is_favorite = TRUE;

-- ========================================
-- TRIGGERS FOR UPDATED_AT
-- ========================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply trigger to all tables with updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_modules_updated_at BEFORE UPDATE ON modules
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_progress_updated_at BEFORE UPDATE ON user_progress
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_quizzes_updated_at BEFORE UPDATE ON quizzes
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_quiz_questions_updated_at BEFORE UPDATE ON quiz_questions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_quiz_attempts_updated_at BEFORE UPDATE ON quiz_attempts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_saved_calculations_updated_at BEFORE UPDATE ON saved_calculations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ========================================
-- COMMENTS FOR DOCUMENTATION
-- ========================================

COMMENT ON TABLE users IS 'User accounts with authentication and profile information';
COMMENT ON TABLE modules IS 'Learning curriculum - 26 modules across 4 phases';
COMMENT ON TABLE user_progress IS 'Tracks user completion of modules';
COMMENT ON TABLE quizzes IS 'Quiz metadata and configuration';
COMMENT ON TABLE quiz_questions IS 'Individual quiz questions with answers';
COMMENT ON TABLE quiz_attempts IS 'User quiz submissions and scores';
COMMENT ON TABLE user_badges IS 'Achievement tracking system';
COMMENT ON TABLE saved_calculations IS 'User-saved calculator results';

-- ========================================
-- DONE
-- ========================================

-- Database schema created successfully!
-- Next steps:
-- 1. Create seed data for modules
-- 2. Create seed data for quiz questions
-- 3. Set up connection pooling in Node.js
-- 4. Implement API endpoints
