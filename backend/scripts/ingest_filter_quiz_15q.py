#!/usr/bin/env python3
"""
Ingest 15 filter quiz MCQs into exam_questions table.
Source: content/study/lessons-filters-diagram-quiz.json
Commit: 10e249b

Handles conversions:
- LIST options + correct_answer_index → JSONB object {A, B, C, D}
- Drops 'active' field (column doesn't exist)
- Verifies diagram URLs resolve before ingesting
- Idempotent: no duplicates on rerun (match on question text)
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

# File paths (relative to git root, not this script)
REPO_ROOT = Path(__file__).parent.parent.parent
QUIZ_FILE = REPO_ROOT / 'content/study/lessons-filters-diagram-quiz.json'
ASSET_BASE = REPO_ROOT / 'frontend/assets/images/filters'

def verify_diagram_files():
    """Verify all diagram SVG files exist."""
    with open(QUIZ_FILE) as f:
        data = json.load(f)

    missing = []
    for q in data['questions']:
        if q.get('has_diagram') and q.get('diagram_url'):
            # Convert URL path /assets/... to filesystem path frontend/assets/...
            url_path = q['diagram_url'].lstrip('/')
            full_path = REPO_ROOT / 'frontend' / url_path
            if not full_path.exists():
                missing.append(q['diagram_url'])

    if missing:
        print(f"ERROR: Missing diagram files:")
        for path in missing:
            print(f"  - {path}")
        return False

    print(f"✓ All {sum(1 for q in data['questions'] if q.get('has_diagram'))} diagram files verified")
    return True

def convert_options(options_list, correct_index):
    """Convert options array to JSONB object."""
    letters = ['A', 'B', 'C', 'D']
    return {letters[i]: opt for i, opt in enumerate(options_list)}, letters[correct_index]

def ingest_questions():
    """Ingest questions from JSON into exam_questions table."""

    if not verify_diagram_files():
        sys.exit(1)

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

            # Check for duplicate (match on syllabus_ref due to unique index)
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
                    source_paper, has_diagram, tags
                ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
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

        # Report sample row
        cur.execute(
            """
            SELECT id, syllabus_ref, section_code, question_text,
                   options, correct_answer, has_diagram
            FROM exam_questions
            WHERE has_diagram = true
            ORDER BY created_at DESC
            LIMIT 1
            """
        )
        row = cur.fetchone()
        if row:
            print("\nSample row (first diagram question):")
            print(f"  ID: {row[0]}")
            print(f"  Syllabus: {row[1]}")
            print(f"  Section: {row[2]}")
            print(f"  Question: {row[3][:60]}...")
            print(f"  Options (object): {row[4]}")
            print(f"  Correct: {row[5]}")
            print(f"  Has diagram: {row[6]}")

        cur.close()
        conn.close()

        return count_after - count_before == inserted

    except Exception as e:
        print(f"ERROR: {e}")
        sys.exit(1)

if __name__ == '__main__':
    success = ingest_questions()
    sys.exit(0 if success else 1)
