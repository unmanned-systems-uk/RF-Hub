#!/bin/bash

# Quiz Bank Schema Migration Runner
# Applies pending migrations to the database

set -e

# Load environment
if [ -f "$(dirname "$0")/../.env" ]; then
  set -a
  source "$(dirname "$0")/../.env"
  set +a
fi

# Database connection details
DB_HOST=${DB_HOST:-localhost}
DB_PORT=${DB_PORT:-5432}
DB_NAME=${DB_NAME:-rf_learning_hub}
DB_USER=${DB_USER:-rfhub_user}

# Migration directory
MIGRATIONS_DIR="$(dirname "$0")/../migrations"

if [ ! -d "$MIGRATIONS_DIR" ]; then
  echo "❌ Migrations directory not found: $MIGRATIONS_DIR"
  exit 1
fi

echo "🔄 Running quiz bank schema migrations..."
echo "Database: $DB_HOST:$DB_PORT/$DB_NAME"
echo ""

# Find and run migrations
for migration_file in $(ls -1 "$MIGRATIONS_DIR"/*.sql 2>/dev/null | sort); do
  migration_name=$(basename "$migration_file")
  echo "📝 Applying: $migration_name"

  PGPASSWORD="$DB_PASSWORD" psql \
    -h "$DB_HOST" \
    -p "$DB_PORT" \
    -U "$DB_USER" \
    -d "$DB_NAME" \
    -f "$migration_file" \
    --quiet

  if [ $? -eq 0 ]; then
    echo "   ✓ Applied successfully"
  else
    echo "   ❌ Failed to apply migration"
    exit 1
  fi
done

echo ""
echo "✅ All migrations completed successfully!"
echo ""
echo "Run verification query:"
echo "  SELECT COUNT(*) as active_questions FROM exam_questions WHERE active = true;"
