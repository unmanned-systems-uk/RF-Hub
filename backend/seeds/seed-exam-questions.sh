#!/bin/bash

# Seed Exam Questions using psql
# Loads exam questions from JSON and inserts into the database

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
JSON_FILE="$SCRIPT_DIR/exam-questions.json"
DB_NAME="rf_learning_hub"

echo ""
echo "📚 Seeding exam questions from $JSON_FILE..."
echo ""

# Check if JSON file exists
if [ ! -f "$JSON_FILE" ]; then
  echo "❌ Error: JSON file not found: $JSON_FILE"
  exit 1
fi

# Count total questions in JSON
TOTAL_QUESTIONS=$(jq '.questions | length' "$JSON_FILE")
echo "📋 Total questions in JSON: $TOTAL_QUESTIONS"

# Create temporary SQL file
TEMP_SQL=$(mktemp)
trap "rm -f $TEMP_SQL" EXIT

# Generate SQL INSERT statements
echo "BEGIN;" > "$TEMP_SQL"

# Process each question using jq
jq -r '.questions[] |
  @json "INSERT INTO exam_questions (level, section_code, section_name, syllabus_ref, question_text, options, correct_answer, explanation, tags, source_paper, d2f_part, has_diagram) VALUES (\(.level), \(.section_code), \(.section_name), \(.syllabus_ref), \(.question_text), \(.options | tojson), \(.correct_answer), \(.explanation), \(.tags | tojson), \(.source_paper), \(.d2f_part), \(.has_diagram)) ON CONFLICT (syllabus_ref) DO NOTHING;"' \
  "$JSON_FILE" | \
  sed "s/^\"//;s/\"$//" | \
  sed "s/\\\\\"/\"/g" >> "$TEMP_SQL"

echo "COMMIT;" >> "$TEMP_SQL"

# Execute the SQL using psql as postgres user
sudo -u postgres psql "$DB_NAME" < "$TEMP_SQL" > /dev/null 2>&1

# Verify the results
echo ""
echo "✅ Seed script executed"
echo ""

# Check counts
TOTAL=$(sudo -u postgres psql "$DB_NAME" -t -c "SELECT COUNT(*) FROM exam_questions")
INTERMEDIATE=$(sudo -u postgres psql "$DB_NAME" -t -c "SELECT COUNT(*) FROM exam_questions WHERE level='intermediate'")

echo "📊 Results:"
echo "  Total questions in database: $TOTAL"
echo "  Intermediate questions: $INTERMEDIATE (expected: 46)"
echo ""

# Show section distribution
echo "📈 Section distribution:"
sudo -u postgres psql "$DB_NAME" -t -c "
  SELECT section_code, COUNT(*) as count
  FROM exam_questions
  GROUP BY section_code
  ORDER BY section_code" | column -t

echo ""
echo "✨ Seeding complete!"
echo ""
