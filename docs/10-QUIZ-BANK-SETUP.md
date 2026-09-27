# Quiz Bank Setup & Testing Guide

**For:** RFH-Database, RFH-Master, RFH-Frontend  
**Last Updated:** 2026-09-12

---

## Quick Start

### Prerequisites

- PostgreSQL 14+ with rf_learning_hub database
- Node.js 16+ for the backend
- Python 3.8+ with psycopg2 for ingestion script

### 1. Apply Schema Migrations

```bash
cd /home/rfhub/rf-hub/backend
chmod +x scripts/run_migrations.sh
./scripts/run_migrations.sh
```

**Expected output:**
```
📝 Applying: 001_add_quiz_bank_fields.sql
   ✓ Applied successfully
✅ All migrations completed successfully!
```

**Verify:**
```sql
\c rf_learning_hub
SELECT column_name FROM information_schema.columns 
WHERE table_name = 'exam_questions' 
AND column_name IN ('difficulty', 'active', 'source_content', 'correct_answer_index');
```

Should return 4 rows: `difficulty`, `active`, `source_content`, `correct_answer_index`

---

### 2. Test the Ingestion Script

**Setup:**
```bash
pip install psycopg2-binary  # If not already installed
chmod +x backend/scripts/ingest_questions.py

# Create test directory
mkdir -p /tmp/quiz-test
cp backend/seeds/quiz-bank-sample.json /tmp/quiz-test/
```

**Dry-run (no database changes):**
```bash
cd backend
python3 scripts/ingest_questions.py --file seeds/quiz-bank-sample.json --dry-run
```

**Expected output:**
```
📄 Processing: seeds/quiz-bank-sample.json
   Found 5 questions to process
   ✓ Inserted: 5, Skipped: 0

INGESTION REPORT
==================================================
Files processed:      1
Questions parsed:     5
Questions inserted:   0 (dry-run, no DB commit)
Questions skipped:    0

⚠️  DRY RUN MODE - No changes were committed to the database
```

**Commit to database:**
```bash
python3 scripts/ingest_questions.py --file seeds/quiz-bank-sample.json --commit
```

**Expected output:**
```
📄 Processing: seeds/quiz-bank-sample.json
   Found 5 questions to process
   ✓ Inserted: 5, Skipped: 0

VERIFICATION REPORT
==================================================
📊 Questions by Level:
   intermediate        5 questions

📋 Distribution by Section & Difficulty:
   Section 2C:
      easy        1 questions
      medium      1 questions
   Section 2F:
      easy        1 questions
      medium      1 questions
      hard        1 questions
   Section 3A:
      medium      1 questions

🏷️  Syllabus Coverage:
   Unique tags: 5
   Total questions: 5
```

---

### 3. Start the Backend Server

```bash
cd /home/rfhub/rf-hub/backend
npm install  # If not done
npm start    # Or: npm run dev for development
```

**Expected:**
```
Server running at http://localhost:3000
Database connected
```

---

### 4. Test API Endpoints

#### A. Get Questions

```bash
# Get 3 random intermediate questions
curl -s "http://localhost:3000/api/v1/quiz/questions?level=intermediate&count=3" | jq .

# Get medium difficulty questions from section 2
curl -s "http://localhost:3000/api/v1/quiz/questions?level=intermediate&section=2&difficulty=medium&count=5" | jq .
```

#### B. Get Mock Exam

```bash
# Get a mock exam for section 2 with 15 questions
curl -s "http://localhost:3000/api/v1/quiz/exam?section=2&length=15" | jq .
```

#### C. Get Syllabus Coverage

```bash
curl -s "http://localhost:3000/api/v1/quiz/syllabus-coverage?level=intermediate" | jq .
```

#### D. Submit Quiz Answers

First, get your JWT token (using existing auth):

```bash
# Login to get token
JWT=$(curl -s -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password"}' | jq -r '.token')

# Get a few questions
QUESTIONS=$(curl -s "http://localhost:3000/api/v1/quiz/questions?count=3" | jq -r '.questions[].id')

# Create answers object (replace with actual question IDs)
curl -s -X POST http://localhost:3000/api/v1/quiz/submit \
  -H "Authorization: Bearer $JWT" \
  -H "Content-Type: application/json" \
  -d '{
    "answers": {
      "<question-id-1>": "A",
      "<question-id-2>": "B",
      "<question-id-3>": "C"
    },
    "time_ms": 60000
  }' | jq .
```

#### E. Get Analytics

```bash
curl -s -H "Authorization: Bearer $JWT" \
  "http://localhost:3000/api/v1/quiz/analytics" | jq .
```

---

### 5. Test Import Endpoint (API)

```bash
# Create test JSON
cat > /tmp/import-test.json << 'EOF'
{
  "questions": [
    {
      "syllabus_ref": "4A1",
      "level": "intermediate",
      "difficulty": "easy",
      "section_code": "4A",
      "section_name": "Feeders & Antennas",
      "question": "What is the characteristic impedance of standard coax cable?",
      "options": ["50Ω", "75Ω", "100Ω", "150Ω"],
      "correct_answer_index": 0,
      "explanation": "Most RF systems use 50Ω characteristic impedance.",
      "tags": ["impedance", "coax", "antenna"]
    }
  ]
}
EOF

# Submit via API
curl -s -X POST http://localhost:3000/api/v1/quiz/import \
  -H "Authorization: Bearer $JWT" \
  -H "Content-Type: application/json" \
  -d @/tmp/import-test.json | jq .
```

---

## Testing Workflow (End-to-End)

### Scenario 1: Basic Quiz Flow

```bash
#!/bin/bash

# 1. Get questions
echo "1. Fetching questions..."
RESPONSE=$(curl -s "http://localhost:3000/api/v1/quiz/questions?count=5")
Q_IDS=$(echo $RESPONSE | jq -r '.questions[].id' | tr '\n' ' ')
echo "Got questions: $Q_IDS"

# 2. Simulate answers (all 'A' for this test)
ANSWERS=$(curl -s "http://localhost:3000/api/v1/quiz/questions?count=5" | jq '.questions | map({(.id): "A"}) | add')

# 3. Submit answers
echo "2. Submitting answers..."
curl -s -X POST http://localhost:3000/api/v1/quiz/submit \
  -H "Authorization: Bearer $JWT" \
  -H "Content-Type: application/json" \
  -d "{\"answers\": $ANSWERS, \"time_ms\": 120000}" | jq .

# 4. Check analytics
echo "3. Checking analytics..."
curl -s -H "Authorization: Bearer $JWT" \
  "http://localhost:3000/api/v1/quiz/analytics" | jq '.weakest_syllabus_item'
```

### Scenario 2: Bulk Ingestion + Coverage Report

```bash
#!/bin/bash

# 1. Create sample batch file
cat > batch-import.json << 'EOF'
{
  "questions": [
    {"syllabus_ref": "5A1", "level": "intermediate", "difficulty": "easy", "section_code": "5A", "section_name": "Propagation", "question": "What is a radio wave?", "options": ["EM wave", "Sound wave", "Light wave", "Gravity wave"], "correct_answer_index": 0, "explanation": "Radio waves are electromagnetic waves.", "tags": ["propagation"]},
    {"syllabus_ref": "5A2", "level": "intermediate", "difficulty": "medium", "section_code": "5A", "section_name": "Propagation", "question": "What is the speed of radio waves?", "options": ["3x10^8 m/s", "1x10^8 m/s", "6x10^8 m/s", "9x10^8 m/s"], "correct_answer_index": 0, "explanation": "Radio waves travel at light speed.", "tags": ["propagation", "speed"]}
  ]
}
EOF

# 2. Import via script
python3 backend/scripts/ingest_questions.py --file batch-import.json --commit

# 3. Check coverage
curl -s "http://localhost:3000/api/v1/quiz/syllabus-coverage?level=intermediate" | jq '.coverage[] | select(.section_code=="5A")'
```

---

## Database Verification Queries

### Count by Level

```sql
SELECT level, COUNT(*) as total, COUNT(*) FILTER (WHERE difficulty='easy') as easy, COUNT(*) FILTER (WHERE difficulty='medium') as medium, COUNT(*) FILTER (WHERE difficulty='hard') as hard
FROM exam_questions WHERE active = true
GROUP BY level
ORDER BY level;
```

### Coverage Matrix

```sql
SELECT section_code, syllabus_ref, difficulty, COUNT(*) as count
FROM exam_questions WHERE active = true
GROUP BY section_code, syllabus_ref, difficulty
ORDER BY section_code, syllabus_ref, difficulty;
```

### Duplicate Check

```sql
SELECT syllabus_ref, COUNT(*) as count
FROM exam_questions WHERE active = true
GROUP BY syllabus_ref HAVING COUNT(*) > 1
ORDER BY count DESC;
```

### Recent Attempts

```sql
SELECT user_id, COUNT(*) as attempt_count, AVG(score_percent) as avg_score
FROM exam_attempts WHERE mode = 'quiz_bank'
GROUP BY user_id
ORDER BY attempt_count DESC;
```

---

## Troubleshooting

### Issue: "Connection refused" to database

**Solution:**
- Check PostgreSQL is running: `sudo service postgresql status`
- Verify `.env` has correct DB credentials
- Test connection: `psql -h localhost -U rfhub_user -d rf_learning_hub`

### Issue: "No questions found" after ingestion

**Solution:**
- Verify questions were inserted: 
  ```sql
  SELECT COUNT(*) FROM exam_questions WHERE active = true;
  ```
- Check level matches query (default is 'intermediate')
- Check section format (e.g., "2" should match "2C", "2F", etc.)

### Issue: Migration fails with "column already exists"

**Solution:**
- This is normal if migrations were run before. The `IF NOT EXISTS` clause prevents errors.
- Proceed to testing.

### Issue: JWT token invalid on submission

**Solution:**
```bash
# Get a fresh token
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"your-email@example.com","password":"your-password"}' \
  | jq -r '.token'

# Use token in Authorization header
Authorization: Bearer <paste-token-here>
```

---

## Performance Tuning

For production with 1000+ questions:

### Add Index for Analytics Queries

```sql
CREATE INDEX IF NOT EXISTS idx_exam_attempts_user_mode 
ON exam_attempts(user_id, mode, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_exam_questions_level_active
ON exam_questions(level, active) WHERE active = true;
```

### Connection Pooling

Update `.env`:
```
DB_POOL_MIN=2
DB_POOL_MAX=20
DB_IDLE_TIMEOUT=30000
```

---

## Next Steps

1. ✅ Schema migrations applied
2. ✅ Ingestion script tested
3. ✅ API endpoints verified
4. ⏳ Frontend wires in mock-exam UI
5. ⏳ LESSONS produces first batch of questions
6. ⏳ Analytics gates verified

---

**For issues or questions:** See docs/09-QUIZ-BANK-INTEGRATION.md or contact RFH-Database
