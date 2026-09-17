-- Migration: Add admin workflow columns to exam_questions
-- Date: 2026-09-17
-- Purpose: Support PO Question Inspector — flag questions needing diagram work
--          and leave review notes without touching public-facing fields.

ALTER TABLE exam_questions
  ADD COLUMN IF NOT EXISTS admin_notes TEXT,
  ADD COLUMN IF NOT EXISTS needs_review BOOLEAN NOT NULL DEFAULT false;

CREATE INDEX IF NOT EXISTS idx_exam_questions_needs_review
  ON exam_questions(needs_review) WHERE needs_review = true;
