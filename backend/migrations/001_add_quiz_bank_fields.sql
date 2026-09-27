-- Migration: Add quiz bank ingestion fields to exam_questions
-- Date: 2026-09-12
-- Purpose: Support LESSONS output format for quiz question ingestion

ALTER TABLE exam_questions
ADD COLUMN IF NOT EXISTS difficulty VARCHAR(20) CHECK (difficulty IN ('easy', 'medium', 'hard')),
ADD COLUMN IF NOT EXISTS active BOOLEAN DEFAULT TRUE,
ADD COLUMN IF NOT EXISTS source_content TEXT,
ADD COLUMN IF NOT EXISTS correct_answer_index INTEGER CHECK (correct_answer_index >= 0 AND correct_answer_index <= 3);

-- Create index for active questions
CREATE INDEX IF NOT EXISTS idx_exam_questions_active ON exam_questions(active) WHERE active = TRUE;

-- Create composite index for common query patterns
CREATE INDEX IF NOT EXISTS idx_exam_questions_difficulty_section
ON exam_questions(difficulty, level, section_code) WHERE active = TRUE;

-- Create index for deduplication checks (syllabus_ref + question_text hash)
CREATE INDEX IF NOT EXISTS idx_exam_questions_dedup
ON exam_questions(syllabus_ref, question_text);

-- Add comment for documentation
COMMENT ON COLUMN exam_questions.difficulty IS 'Question difficulty: easy, medium, or hard (required for mock exam distribution)';
COMMENT ON COLUMN exam_questions.active IS 'Soft-delete flag: false hides the question from queries';
COMMENT ON COLUMN exam_questions.source_content IS 'Reference to study material (e.g., section path or URL)';
COMMENT ON COLUMN exam_questions.correct_answer_index IS 'Numeric index (0-3) for the correct answer option (alternative to correct_answer CHAR)';
