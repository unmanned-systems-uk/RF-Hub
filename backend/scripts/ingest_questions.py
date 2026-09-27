#!/usr/bin/env python3

"""
Quiz Question Bank Ingestion Script

Ingests quiz questions from JSON files produced by LESSONS agent.
Handles deduplication, validation, and provides detailed reporting.

Usage:
    python ingest_questions.py --file path/to/questions.json [--dry-run|--commit]
    python ingest_questions.py --dir /mnt/cc-share/RF-Hub/quiz-bank/ --commit
"""

import argparse
import json
import os
import sys
import hashlib
from datetime import datetime
from pathlib import Path
import psycopg2
from psycopg2.extras import RealDictCursor
import logging

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Configuration
DB_HOST = os.getenv('DB_HOST', 'localhost')
DB_PORT = os.getenv('DB_PORT', '5432')
DB_NAME = os.getenv('DB_NAME', 'rf_learning_hub')
DB_USER = os.getenv('DB_USER', 'rfhub_user')
DB_PASSWORD = os.getenv('DB_PASSWORD', '')

REQUIRED_FIELDS = [
    'syllabus_ref', 'level', 'difficulty', 'question',
    'options', 'correct_answer_index', 'explanation'
]

OPTIONAL_FIELDS = ['source_content', 'section_code', 'section_name', 'tags', 'source_paper']


class QuestionIngestor:
    def __init__(self, dry_run=False):
        self.dry_run = dry_run
        self.conn = None
        self.stats = {
            'files_processed': 0,
            'questions_parsed': 0,
            'questions_inserted': 0,
            'questions_skipped': 0,
            'validation_errors': [],
            'db_errors': []
        }

    def connect_db(self):
        """Connect to PostgreSQL database"""
        try:
            self.conn = psycopg2.connect(
                host=DB_HOST,
                port=DB_PORT,
                database=DB_NAME,
                user=DB_USER,
                password=DB_PASSWORD
            )
            logger.info(f"✓ Connected to {DB_NAME} on {DB_HOST}")
        except Exception as e:
            logger.error(f"✗ Database connection failed: {e}")
            sys.exit(1)

    def close_db(self):
        """Close database connection"""
        if self.conn:
            self.conn.close()

    def validate_question(self, question, file_path):
        """Validate question object against schema"""
        errors = []

        # Check required fields
        for field in REQUIRED_FIELDS:
            if field not in question:
                errors.append(f"Missing required field: {field}")

        # Validate specific fields
        if 'level' in question and question['level'] not in ['foundation', 'intermediate', 'full']:
            errors.append(f"Invalid level: {question['level']} (must be foundation, intermediate, or full)")

        if 'difficulty' in question and question['difficulty'] not in ['easy', 'medium', 'hard']:
            errors.append(f"Invalid difficulty: {question['difficulty']} (must be easy, medium, or hard)")

        if 'options' in question:
            if not isinstance(question['options'], list) or len(question['options']) != 4:
                errors.append(f"Options must be an array of exactly 4 strings")

        if 'correct_answer_index' in question:
            try:
                idx = int(question['correct_answer_index'])
                if idx < 0 or idx > 3:
                    errors.append(f"correct_answer_index must be 0-3, got {idx}")
            except (ValueError, TypeError):
                errors.append(f"correct_answer_index must be an integer")

        if errors:
            self.stats['validation_errors'].append({
                'file': file_path,
                'question': question.get('syllabus_ref', 'unknown'),
                'errors': errors
            })
            return False

        return True

    def get_question_hash(self, syllabus_ref, question_text):
        """Generate hash for deduplication"""
        content = f"{syllabus_ref}:{question_text}".lower()
        return hashlib.md5(content.encode()).hexdigest()

    def question_exists(self, cur, syllabus_ref, question_hash):
        """Check if question already exists (deduplication)"""
        cur.execute(
            "SELECT id FROM exam_questions WHERE syllabus_ref = %s AND md5(LOWER(CONCAT(syllabus_ref, ':', question_text))) = %s LIMIT 1",
            (syllabus_ref, question_hash)
        )
        return cur.fetchone() is not None

    def insert_question(self, cur, question):
        """Insert a single question into the database"""
        try:
            # Map LESSONS format to database format
            # correct_answer_index (0-3) needs to be converted to correct_answer (A-D)
            answer_map = {0: 'A', 1: 'B', 2: 'C', 3: 'D'}
            correct_char = answer_map.get(int(question['correct_answer_index']), 'A')

            cur.execute(
                """INSERT INTO exam_questions
                (level, section_code, section_name, syllabus_ref, question_text,
                 options, correct_answer, correct_answer_index, explanation,
                 difficulty, active, source_content, tags, created_at, updated_at)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                ON CONFLICT DO NOTHING
                RETURNING id""",
                (
                    question.get('level'),
                    question.get('section_code'),
                    question.get('section_name'),
                    question['syllabus_ref'],
                    question['question'],
                    json.dumps(question['options']),
                    correct_char,
                    int(question['correct_answer_index']),
                    question['explanation'],
                    question['difficulty'],
                    question.get('active', True),
                    question.get('source_content'),
                    json.dumps(question.get('tags', [])),
                    datetime.utcnow(),
                    datetime.utcnow()
                )
            )
            return cur.fetchone() is not None

        except Exception as e:
            self.stats['db_errors'].append({
                'question': question.get('syllabus_ref', 'unknown'),
                'error': str(e)
            })
            return False

    def ingest_file(self, file_path):
        """Ingest questions from a single JSON file"""
        if not os.path.exists(file_path):
            logger.error(f"✗ File not found: {file_path}")
            return False

        logger.info(f"\n📄 Processing: {file_path}")

        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
        except json.JSONDecodeError as e:
            logger.error(f"✗ Invalid JSON in {file_path}: {e}")
            return False

        # Extract questions from various possible formats
        questions = []
        if isinstance(data, dict):
            if 'questions' in data:
                questions = data['questions']
            else:
                # Single question format
                questions = [data]
        elif isinstance(data, list):
            questions = data

        if not questions:
            logger.warning(f"⚠ No questions found in {file_path}")
            return True

        logger.info(f"   Found {len(questions)} questions to process")

        cur = self.conn.cursor()
        inserted_this_file = 0
        skipped_this_file = 0

        for question in questions:
            self.stats['questions_parsed'] += 1

            # Validate
            if not self.validate_question(question, file_path):
                skipped_this_file += 1
                continue

            # Check for duplicates
            q_hash = self.get_question_hash(question['syllabus_ref'], question['question'])
            if self.question_exists(cur, question['syllabus_ref'], q_hash):
                logger.debug(f"   ↻ Duplicate (skipped): {question['syllabus_ref']}")
                skipped_this_file += 1
                self.stats['questions_skipped'] += 1
                continue

            # Insert
            if self.insert_question(cur, question):
                inserted_this_file += 1
                self.stats['questions_inserted'] += 1
            else:
                skipped_this_file += 1

        cur.close()

        if not self.dry_run:
            self.conn.commit()

        logger.info(f"   ✓ Inserted: {inserted_this_file}, Skipped: {skipped_this_file}")
        self.stats['files_processed'] += 1
        return True

    def verify_ingestion(self):
        """Show verification query results"""
        logger.info("\n" + "="*60)
        logger.info("VERIFICATION REPORT")
        logger.info("="*60)

        cur = self.conn.cursor(cursor_factory=RealDictCursor)

        # Overall stats
        cur.execute("SELECT level, COUNT(*) as total FROM exam_questions WHERE active = true GROUP BY level ORDER BY level")
        rows = cur.fetchall()
        logger.info("\n📊 Questions by Level:")
        for row in rows:
            logger.info(f"   {row['level']:15} {row['total']:5} questions")

        # By section and difficulty
        cur.execute(
            """SELECT section_code, difficulty, COUNT(*) as total
            FROM exam_questions
            WHERE active = true
            GROUP BY section_code, difficulty
            ORDER BY section_code, difficulty"""
        )
        rows = cur.fetchall()

        logger.info("\n📋 Distribution by Section & Difficulty:")
        current_section = None
        for row in rows:
            if row['section_code'] != current_section:
                current_section = row['section_code']
                logger.info(f"   Section {current_section}:")
            logger.info(f"      {row['difficulty']:10} {row['total']:5} questions")

        # Syllabus tag coverage
        cur.execute(
            """SELECT COUNT(DISTINCT syllabus_ref) as unique_tags, COUNT(*) as total
            FROM exam_questions WHERE active = true"""
        )
        row = cur.fetchone()
        logger.info(f"\n🏷️  Syllabus Coverage:")
        logger.info(f"   Unique tags: {row['unique_tags']}")
        logger.info(f"   Total questions: {row['total']}")

        cur.close()

    def print_report(self):
        """Print final ingestion report"""
        logger.info("\n" + "="*60)
        logger.info("INGESTION REPORT")
        logger.info("="*60)
        logger.info(f"Files processed:      {self.stats['files_processed']}")
        logger.info(f"Questions parsed:     {self.stats['questions_parsed']}")
        logger.info(f"Questions inserted:   {self.stats['questions_inserted']}")
        logger.info(f"Questions skipped:    {self.stats['questions_skipped']}")

        if self.dry_run:
            logger.warning("⚠️  DRY RUN MODE - No changes were committed to the database")

        if self.stats['validation_errors']:
            logger.warning(f"\n⚠️  Validation errors ({len(self.stats['validation_errors'])}):")
            for err in self.stats['validation_errors'][:5]:  # Show first 5
                logger.warning(f"   {err['question']}: {', '.join(err['errors'][:2])}")
            if len(self.stats['validation_errors']) > 5:
                logger.warning(f"   ... and {len(self.stats['validation_errors']) - 5} more")

        if self.stats['db_errors']:
            logger.error(f"\n❌ Database errors ({len(self.stats['db_errors'])}):")
            for err in self.stats['db_errors'][:5]:
                logger.error(f"   {err['question']}: {err['error'][:60]}")

    def run(self, file_path=None, dir_path=None):
        """Main ingestion workflow"""
        self.connect_db()

        try:
            if file_path:
                # Single file
                self.ingest_file(file_path)
            elif dir_path:
                # Directory of files
                dir_obj = Path(dir_path)
                if not dir_obj.exists():
                    logger.error(f"✗ Directory not found: {dir_path}")
                    return False

                json_files = sorted(dir_obj.glob('*.json'))
                if not json_files:
                    logger.warning(f"⚠ No JSON files found in {dir_path}")
                    return False

                logger.info(f"📂 Found {len(json_files)} JSON files to process")
                for json_file in json_files:
                    self.ingest_file(str(json_file))

            self.print_report()

            if not self.dry_run and self.stats['questions_inserted'] > 0:
                self.verify_ingestion()

        finally:
            self.close_db()

        return True


def main():
    parser = argparse.ArgumentParser(
        description='Ingest quiz questions from JSON into RF-Hub database'
    )
    parser.add_argument('--file', help='Path to a single JSON file')
    parser.add_argument('--dir', help='Path to directory of JSON files')
    parser.add_argument('--dry-run', action='store_true', help='Show what would be imported without committing')
    parser.add_argument('--commit', action='store_true', help='Commit changes to database (required)')

    args = parser.parse_args()

    if not args.file and not args.dir:
        parser.print_help()
        logger.error("✗ Either --file or --dir is required")
        sys.exit(1)

    if args.dry_run:
        logger.warning("🔍 DRY RUN MODE - No changes will be committed")
        is_commit = False
    elif args.commit:
        logger.warning("⚠️  COMMIT MODE - Changes will be written to database")
        is_commit = True
    else:
        logger.info("No mode specified. Defaulting to --dry-run")
        logger.info("Use --commit to write changes to the database")
        is_commit = False

    ingestor = QuestionIngestor(dry_run=not is_commit)

    try:
        if args.file:
            ingestor.run(file_path=args.file)
        else:
            ingestor.run(dir_path=args.dir)
    except KeyboardInterrupt:
        logger.info("\n⚠️  Ingestion cancelled by user")
        sys.exit(1)
    except Exception as e:
        logger.error(f"✗ Unexpected error: {e}")
        sys.exit(1)


if __name__ == '__main__':
    main()
