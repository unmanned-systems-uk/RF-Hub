# Quiz Bank Integration Guide

**Last Updated:** 2026-09-12  
**Component:** Database Quiz Bank + Quiz API  
**Stakeholders:** LESSONS Builder, Frontend, Analytics

---

## Overview

The quiz bank system enables bulk ingestion of exam questions from LESSONS and serves them through a suite of APIs for mock exams, topic-based practice, and analytics. This document covers:

- Schema updates for quiz questions
- Ingestion pipeline (Python CLI + API endpoint)
- Query/retrieval API endpoints
- Analytics and reporting
- Integration workflow

---

## PART 1: Ingestion Pipeline

### Schema Updates

The `exam_questions` table now includes fields for:

- **difficulty**: `easy`, `medium`, or `hard` (required for distribution)
- **active**: Boolean for soft-delete (default `true`)
- **source_content**: Reference to study material URL/section
- **correct_answer_index**: Numeric 0–3 alternative to A–D format

**Apply migrations:**

```bash
cd backend
./scripts/run_migrations.sh
```

### File Format Expected

LESSONS will drop JSON files in: `/mnt/cc-share/RF-Hub/quiz-bank/section-N-questions-YYYY-MM-DD.json`

**Single question format:**

```json
{
  "syllabus_ref": "2F1",
  "level": "intermediate",
  "difficulty": "medium",
  "section_code": "2F",
  "section_name": "Resonance & Tuning",
  "question": "What is the Q factor of a resonant circuit?",
  "options": ["A measure of bandwidth", "The ratio of...", "Never used", "Only for filters"],
  "correct_answer_index": 0,
  "explanation": "The Q factor quantifies the sharpness of resonance...",
  "source_content": "/docs/electronics/resonance.md#q-factor",
  "tags": ["q-factor", "bandwidth", "resonance"],
  "active": true
}
```

**Batch format:**

```json
{
  "questions": [
    { "syllabus_ref": "2F1", ... },
    { "syllabus_ref": "2F2", ... }
  ]
}
```

### Ingestion Methods

#### Option A: Python CLI Script

**Single file:**

```bash
python backend/scripts/ingest_questions.py --file /path/to/questions.json --dry-run
python backend/scripts/ingest_questions.py --file /path/to/questions.json --commit
```

**Directory of files:**

```bash
python backend/scripts/ingest_questions.py --dir /mnt/cc-share/RF-Hub/quiz-bank/ --commit
```

**Output:**

```
📝 Processing: section-1-questions-2026-09-12.json
   Found 25 questions to process
   ✓ Inserted: 24, Skipped: 1

VERIFICATION REPORT
==================================================
📊 Questions by Level:
   intermediate        185 questions
   foundation          26 questions

📋 Distribution by Section & Difficulty:
   Section 1:
      easy        5 questions
      medium      8 questions
      hard        3 questions
```

#### Option B: API Endpoint

**Endpoint:** `POST /api/v1/quiz/import` (admin only)

**Headers:**

```
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

**Body:**

```json
{
  "questions": [
    { "syllabus_ref": "2F1", "level": "intermediate", ... },
    { "syllabus_ref": "2F2", "level": "intermediate", ... }
  ],
  "source": "lessons_batch_1",
  "level": "intermediate"
}
```

**Response:**

```json
{
  "inserted": 24,
  "skipped": 1,
  "total": 25,
  "message": "Imported 24 questions, 1 skipped"
}
```

### Deduplication

The system uses `(syllabus_ref, question_text)` as a natural key. Re-running ingestion for the same file will:

- Skip duplicate questions (no INSERTs)
- Preserve existing question IDs
- Show "skipped" in the report

---

## PART 2: Query & Retrieval APIs

### Core Endpoints

#### GET /api/v1/quiz/questions

Get filtered questions with random sampling.

**Query Parameters:**

| Parameter | Type | Default | Notes |
| --- | --- | --- | --- |
| `level` | String | intermediate | foundation, intermediate, full |
| `section` | String | - | Top-level section (e.g., "2" for section 2) |
| `syllabus` | String | - | Specific syllabus tag (e.g., "2F1") |
| `difficulty` | String | - | easy, medium, or hard |
| `count` | Integer | 10 | Number of questions to return |

**Example:**

```bash
GET /api/v1/quiz/questions?level=intermediate&section=2&difficulty=medium&count=5
```

**Response:**

```json
{
  "level": "intermediate",
  "section": "2",
  "difficulty": "medium",
  "count": 5,
  "questions": [
    {
      "id": "uuid-1",
      "syllabus_ref": "2F1",
      "question_text": "What is Q factor?",
      "options": ["...", "...", "...", "..."],
      "tags": ["q-factor"]
    }
  ]
}
```

---

#### GET /api/v1/quiz/exam

Get a full mock-exam question set with RSGB-weighted distribution.

**Query Parameters:**

| Parameter | Type | Default | Notes |
| --- | --- | --- | --- |
| `section` | String | **required** | Top-level section (e.g., "2") |
| `level` | String | intermediate | foundation, intermediate, full |
| `length` | Integer | 15 | Total questions for exam |

**Example:**

```bash
GET /api/v1/quiz/exam?section=2&level=intermediate&length=15
```

**Response:**

```json
{
  "section": "2",
  "level": "intermediate",
  "target_length": 15,
  "actual_length": 15,
  "questions": [
    {
      "id": "uuid-1",
      "syllabus_ref": "2C1",
      "section_code": "2C",
      "question_text": "...",
      "options": ["A", "B", "C", "D"]
    }
  ]
}
```

---

#### POST /api/v1/quiz/submit

Submit answers and get immediate feedback + analytics.

**Headers:** Requires authentication (`Authorization: Bearer <JWT>`)

**Body:**

```json
{
  "answers": {
    "uuid-1": "A",
    "uuid-2": "C",
    "uuid-3": "B"
  },
  "time_ms": 180000
}
```

**Response:**

```json
{
  "attempt_id": "uuid-attempt",
  "total_questions": 3,
  "correct_answers": 2,
  "score_percent": 66.67,
  "passed": true,
  "results": [
    {
      "question_id": "uuid-1",
      "syllabus_ref": "2F1",
      "selected": "A",
      "correct": true,
      "explanation": "The Q factor quantifies..."
    },
    {
      "question_id": "uuid-2",
      "syllabus_ref": "2F2",
      "selected": "C",
      "correct": false,
      "explanation": "Actually, the correct answer is B because..."
    }
  ]
}
```

---

#### GET /api/v1/quiz/analytics

Get session stats including weakest areas (SM-2 style).

**Query Parameters:**

| Parameter | Type | Notes |
| --- | --- | --- |
| `session_id` | UUID | Specific attempt; defaults to most recent |

**Example:**

```bash
GET /api/v1/quiz/analytics
```

**Response:**

```json
{
  "session_id": "uuid-attempt",
  "total_answered": 15,
  "correct_answers": 10,
  "accuracy_percent": 66.67,
  "time_per_question_seconds": 45,
  "weakest_syllabus_item": "2F2",
  "weakest_score_percent": 25,
  "all_syllabus_scores": [
    {
      "ref": "2C1",
      "correct": 2,
      "total": 2,
      "score": 100
    },
    {
      "ref": "2F1",
      "correct": 1,
      "total": 2,
      "score": 50
    },
    {
      "ref": "2F2",
      "correct": 0,
      "total": 2,
      "score": 0
    }
  ]
}
```

---

#### GET /api/v1/quiz/syllabus-coverage

Coverage matrix showing question availability across syllabus refs and difficulty levels.

**Query Parameters:**

| Parameter | Type | Default |
| --- | --- | --- |
| `level` | String | intermediate |

**Example:**

```bash
GET /api/v1/quiz/syllabus-coverage?level=intermediate
```

**Response:**

```json
{
  "level": "intermediate",
  "coverage": [
    {
      "section_code": "2C",
      "section_name": "Tuned Circuits",
      "syllabus_ref": "2C1",
      "easy": 5,
      "medium": 8,
      "hard": 2,
      "total": 15
    },
    {
      "section_code": "2F",
      "section_name": "Resonance",
      "syllabus_ref": "2F1",
      "easy": 3,
      "medium": 6,
      "hard": 4,
      "total": 13
    }
  ],
  "summary": {
    "total_entries": 28,
    "total_questions": 234
  }
}
```

---

### Optional: Spaced Repetition

#### GET /api/v1/quiz/next-review

Return questions user got wrong or hasn't seen recently (SM-2 algorithm).

**Query Parameters:**

| Parameter | Type | Default | Notes |
| --- | --- | --- | --- |
| `limit` | Integer | 5 | How many review questions to suggest |

**Example:**

```bash
GET /api/v1/quiz/next-review?limit=10
```

**Response:**

```json
{
  "type": "review_questions",
  "questions": [
    {
      "id": "uuid-1",
      "syllabus_ref": "2F2",
      "question_text": "...",
      "options": ["A", "B", "C", "D"],
      "difficulty": "hard",
      "attempt_count": 3
    }
  ],
  "count": 5
}
```

---

## Integration Workflow

### Timeline

**Phase 1 (Today):** Migrations applied, Python CLI ready  
**Phase 2 (This weekend):** LESSONS produces first batch (~100 questions)  
**Phase 3:** Frontend wires in mock-exam UI using endpoints  
**Phase 4:** Analytics gates verified (Gate 5 RSGB partnership)

### Handoff Steps

1. **RFH-Database (this agent) → RFH-Master:**
   ```
   "Quiz bank ingestion pipeline is ready. 
   LESSONS can start dropping JSON files at:
   /mnt/cc-share/RF-Hub/quiz-bank/section-N-questions-YYYY-MM-DD.json
   
   Ingest via Python CLI:
   python backend/scripts/ingest_questions.py --dir /mnt/cc-share/RF-Hub/quiz-bank/ --commit
   
   Or via API: POST /api/v1/quiz/import (requires auth)"
   ```

2. **RFH-Master → RFH-LessonsBuilder:**
   ```
   "Database is ready to receive questions. 
   Drop JSON files at:
   /mnt/cc-share/RF-Hub/quiz-bank/section-N-questions-YYYY-MM-DD.json
   
   Expected format: See docs/09-QUIZ-BANK-INTEGRATION.md
   Questions will be deduplicated by (syllabus_ref, question_text)"
   ```

3. **RFH-Master → RFH-Frontend:**
   ```
   "Quiz endpoints are live at /api/v1/quiz/*
   
   Mock exam flow:
   1. GET /api/v1/quiz/exam?section=<N>&length=<n>
   2. User answers questions
   3. POST /api/v1/quiz/submit with answers
   4. GET /api/v1/quiz/analytics for results + weak areas
   
   See full endpoint docs: docs/09-QUIZ-BANK-INTEGRATION.md"
   ```

---

## Testing Checklist

### Unit Tests

```bash
# Test ingestion (dry-run)
python backend/scripts/ingest_questions.py --file test-data.json --dry-run

# Inspect output format
curl http://localhost:3000/api/v1/quiz/questions?level=intermediate&count=3

# Test submission
curl -X POST http://localhost:3000/api/v1/quiz/submit \
  -H "Authorization: Bearer $JWT" \
  -d '{"answers":{"<q_id>":"A"},"time_ms":30000}'
```

### Verification Queries

```sql
-- Question count by level
SELECT level, COUNT(*) FROM exam_questions WHERE active = true GROUP BY level;

-- Coverage by section
SELECT section_code, difficulty, COUNT(*) 
FROM exam_questions WHERE active = true 
GROUP BY section_code, difficulty ORDER BY section_code;

-- Verify deduplication
SELECT syllabus_ref, COUNT(*) as count 
FROM exam_questions WHERE active = true 
GROUP BY syllabus_ref HAVING COUNT(*) > 1;
```

---

## Troubleshooting

### Ingestion Issues

**Duplicate questions skipped?**  
→ This is expected. Check `skipped` count in report.

**Validation errors?**  
→ Ensure JSON matches required schema (see File Format section).

**Database connection failed?**  
→ Check `.env` file: `DB_HOST`, `DB_USER`, `DB_PASSWORD`.

### API Issues

**"questions must be non-empty array" on POST /import?**  
→ Wrap questions in `{ "questions": [...] }` object.

**Empty results from GET /questions?**  
→ Check `active = true` for questions (soft-delete).  
→ Verify syllabus_ref, section, and difficulty exist.

**Incorrect weighting on exam endpoint?**  
→ Ensure questions have valid `section_code` filled.  
→ Check EXAM_CONFIG in backend/models/Exam.js for section definitions.

---

## API Rate Limiting

- General API: 100 requests per 15 minutes
- Import endpoint: Standard limit (design for batch use via CLI)

---

## Next Steps

- [ ] Frontend integrates `/api/v1/quiz/exam` for mock-exam UI
- [ ] Analytics dashboard shows usage stats
- [ ] Spaced-repetition algorithm tuned based on user data
- [ ] RSGB partnership gate (Gate 5) updated with question stats

---

**For questions or issues:** Contact RFH-Master or [RFH-Database]
