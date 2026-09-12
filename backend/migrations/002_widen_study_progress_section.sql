-- Migration: Widen study_progress.section from VARCHAR(4) to VARCHAR(16)
-- Date: 2026-09-12
-- Purpose: Defence-in-depth against frontend sending section codes longer than 4 chars (e.g. "ch-5a")

ALTER TABLE study_progress
  ALTER COLUMN section TYPE VARCHAR(16);
