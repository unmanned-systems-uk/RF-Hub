-- Validator: exam_questions integrity checks
-- Run this script periodically to ensure quiz question bank is healthy
-- Usage: psql -U rfhub -d rf_learning_hub -f validate-exam-questions.sql

\echo '=========================================='
\echo 'EXAM QUESTIONS INTEGRITY VALIDATION'
\echo '=========================================='
\echo ''

\echo '1️⃣  TOTAL QUESTIONS'
SELECT 'Total: ' || COUNT(*)::text FROM exam_questions;
\echo ''

\echo '2️⃣  OPTIONS FORMAT (should be all object)'
SELECT jsonb_typeof(options) AS format, COUNT(*)::text AS count
FROM exam_questions GROUP BY 1 ORDER BY 1;
\echo ''

\echo '3️⃣  OPTIONS KEY COUNT (should be 4)'
SELECT id::text, section_code, syllabus_ref,
       (SELECT COUNT(*) FROM jsonb_object_keys(options))::text AS key_count
FROM exam_questions
WHERE jsonb_typeof(options)='object'
  AND (SELECT COUNT(*) FROM jsonb_object_keys(options)) != 4
LIMIT 10;
\echo '   ✓ No issues found' ;
\echo ''

\echo '4️⃣  CORRECT_ANSWER KEY PRESENT IN OPTIONS'
SELECT id::text, section_code, syllabus_ref, correct_answer
FROM exam_questions
WHERE jsonb_typeof(options)='object'
  AND options->(correct_answer::text) IS NULL
LIMIT 10;
\echo '   ✓ All correct_answer keys present';
\echo ''

\echo '5️⃣  EMPTY OPTION VALUES'
SELECT id::text, section_code, syllabus_ref
FROM exam_questions e
WHERE jsonb_typeof(options)='object'
  AND EXISTS (SELECT 1 FROM jsonb_each_text(options) k WHERE k.value IS NULL OR TRIM(k.value)='')
LIMIT 10;
\echo '   ✓ No empty values found';
\echo ''

\echo '6️⃣  QUESTION TEXT (must not be empty)'
SELECT 'Missing: ' || COUNT(*)::text FROM exam_questions
WHERE question_text IS NULL OR TRIM(question_text)='';
\echo ''

\echo '7️⃣  EXPLANATIONS (should be present)'
SELECT 'Missing: ' || COUNT(*)::text FROM exam_questions
WHERE explanation IS NULL OR TRIM(explanation)='';
\echo ''

\echo '8️⃣  DISTRIBUTION BY SECTION'
SELECT 'Section ' || SUBSTRING(section_code, 1, 1) AS section, COUNT(*)::text AS count
FROM exam_questions GROUP BY 1 ORDER BY 1;
\echo ''

\echo '9️⃣  DISTRIBUTION BY LEVEL'
SELECT level, COUNT(*)::text AS count FROM exam_questions GROUP BY 1 ORDER BY 1;
\echo ''

\echo '=========================================='
\echo '✅ VALIDATION COMPLETE'
\echo '=========================================='
