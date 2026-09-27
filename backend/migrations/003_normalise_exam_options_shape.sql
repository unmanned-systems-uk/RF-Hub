-- Migration: Normalize exam_questions.options from array to object format
-- Date: 2026-09-12
-- Issue: 235/526 questions stored options as JSONB array instead of object
-- Result: Quiz UI now displays A/B/C/D answer options correctly

BEGIN;

-- Pre-migration check
SELECT 'Before migration: ' || COUNT(*)::text || ' rows with array-format options'
FROM exam_questions WHERE jsonb_typeof(options) = 'array';

-- Convert array format ["A", "B", "C", "D"] to object format {"A": "...", "B": "...", "C": "...", "D": "..."}
UPDATE exam_questions
SET options = jsonb_build_object(
  'A', options->0,
  'B', options->1,
  'C', options->2,
  'D', options->3
)
WHERE jsonb_typeof(options) = 'array';

-- Post-migration verification
SELECT 'After migration: ' || COUNT(*)::text || ' array-format rows (should be 0)'
FROM exam_questions WHERE jsonb_typeof(options) = 'array';

SELECT 'Object-format rows: ' || COUNT(*)::text || ' (should be 526)'
FROM exam_questions WHERE jsonb_typeof(options) = 'object';

-- Spot-check: SWR question that was broken
SELECT 'Spot-check (4B5 SWR question):' AS check,
       id::text,
       options::text,
       correct_answer
FROM exam_questions
WHERE syllabus_ref = '4B5'
LIMIT 1;

COMMIT;
