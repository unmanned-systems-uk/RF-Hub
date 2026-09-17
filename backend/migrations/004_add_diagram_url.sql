-- Migration: Add diagram_url column and populate from SVG filesystem layout
-- Date: 2026-09-17
-- Purpose: Unmask 29 diagram questions now that SVGs are committed to the repo.
--          diagram_url is nullable TEXT; questions without diagrams stay NULL.
--
-- Filename convention per level:
--   full:         /assets/images/quiz-diagrams/full/<section_code>/full-<syllabus_ref>.svg
--   intermediate: /assets/images/quiz-diagrams/intermediate/<section_code>/int-<first_segment>.svg
--                 where first_segment = SPLIT_PART(syllabus_ref, '-', 1)
--                 e.g. syllabus_ref '2C1-2025-Int''d-2221' → 'int-2C1.svg'
--
-- NOTE: SUBSTRING(syllabus_ref,1,2) cannot be used as section directory —
--       section_code is authoritative. Filenames also differ by level.

ALTER TABLE exam_questions
  ADD COLUMN IF NOT EXISTS diagram_url TEXT;

-- full level
UPDATE exam_questions
SET diagram_url = '/assets/images/quiz-diagrams/full/'
                  || section_code || '/'
                  || 'full-' || syllabus_ref || '.svg'
WHERE has_diagram = true AND level = 'full';

-- intermediate level
UPDATE exam_questions
SET diagram_url = '/assets/images/quiz-diagrams/intermediate/'
                  || section_code || '/'
                  || 'int-' || SPLIT_PART(syllabus_ref, '-', 1) || '.svg'
WHERE has_diagram = true AND level = 'intermediate';
