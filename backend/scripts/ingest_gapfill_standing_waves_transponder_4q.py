#!/usr/bin/env python3
"""
Ingest 4 gap-fill questions (standing waves + satellite transponder) into exam_questions.
Source: content/study/gapfill-standing-waves-transponder-quiz.json
Task: 77781983

Handles conversions (same as S29 pattern):
- LIST options + correct_answer_index → JSONB object {A, B, C, D}
- Drops 'active' field (column doesn't exist)
- Writes diagram_url if present (all NULL for this set)
- Idempotent: dedup by syllabus_ref (unique ID)
"""

import json
import os
import sys
import psycopg2
import psycopg2.extras
from pathlib import Path

# DB config
DB_HOST = os.getenv('DB_HOST', '127.0.0.1')
DB_USER = os.getenv('DB_USER', 'rfhub')
DB_PASSWORD = os.getenv('DB_PASSWORD', 'rfhub_secure_2024')
DB_NAME = os.getenv('DB_NAME', 'rf_learning_hub')

# File paths
REPO_ROOT = Path(__file__).parent.parent.parent
QUIZ_FILE = REPO_ROOT / 'content/study/gapfill-standing-waves-transponder-quiz.json'

def convert_options(options_list, correct_index):
    """Convert options array to JSONB object."""
    letters = ['A', 'B', 'C', 'D']
    return {letters[i]: opt for i, opt in enumerate(options_list)}, letters[correct_index]

def ingest_questions():
    """Ingest questions from JSON into exam_questions table."""

    with open(QUIZ_FILE) as f:
        data = json.load(f)

    questions = data['questions']

    try:
        conn = psycopg2.connect(
            host=DB_HOST, user=DB_USER, password=DB_PASSWORD, database=DB_NAME
        )
        cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

        # Count before
        cur.execute("SELECT COUNT(*) FROM exam_questions")
        count_before = cur.fetchone()[0]
        print(f"Count before: {count_before}")

        inserted = 0
        skipped = 0

        for q in questions:
            # Convert options
            options_obj, correct_letter = convert_options(q['options'], q['correct_answer_index'])

            # Check if question exists by syllabus_ref (unique ID)
            cur.execute(
                "SELECT id FROM exam_questions WHERE syllabus_ref = %s",
                (q['syllabus_ref'],)
            )
            if cur.fetchone():
                skipped += 1
                continue

            # Insert (schema has source_paper, not source_content; no active column)
            cur.execute(
                """
                INSERT INTO exam_questions (
                    level, section_code, section_name, syllabus_ref,
                    question_text, options, correct_answer, explanation,
                    source_paper, has_diagram, diagram_url, tags
                ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                """,
                (
                    q['level'],
                    q['section_code'],
                    q['section_name'],
                    q['syllabus_ref'],
                    q['question'],
                    json.dumps(options_obj),  # JSONB object
                    correct_letter,
                    q['explanation'],
                    q.get('source_content'),
                    q.get('has_diagram', False),
                    q.get('diagram_url'),
                    json.dumps(q.get('tags', [])),  # JSONB array
                )
            )
            inserted += 1

        conn.commit()

        # Count after
        cur.execute("SELECT COUNT(*) FROM exam_questions")
        count_after = cur.fetchone()[0]
        print(f"Count after: {count_after}")
        print(f"Inserted: {inserted}, Skipped (duplicates): {skipped}")

        # Report inserted rows
        cur.execute(
            """
            SELECT syllabus_ref, level, has_diagram, correct_answer
            FROM exam_questions
            WHERE syllabus_ref LIKE '%-GF1-%'
            ORDER BY syllabus_ref
            """
        )
        rows = cur.fetchall()
        print(f"\n✓ Ingested {len(rows)} gap-fill questions:\n")
        print(f"{'Ref':<20} {'Level':<12} {'Has Diagram':<12} {'Correct':<8}")
        print("-" * 55)
        for ref, level, has_diagram, correct in rows:
            print(f"{ref:<20} {level:<12} {str(has_diagram):<12} {correct:<8}")

        cur.close()
        conn.close()

        return count_after - count_before == inserted

    except Exception as e:
        print(f"ERROR: {e}")
        sys.exit(1)

if __name__ == '__main__':
    success = ingest_questions()
    sys.exit(0 if success else 1)
