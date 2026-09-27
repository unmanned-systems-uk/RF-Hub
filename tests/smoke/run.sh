#!/bin/bash

# RF-Hub Smoke Test Runner
# Usage: ./run.sh [phone|desktop|all]

set -e

cd "$(dirname "$0")"

DEVICE=${1:-all}

echo "🧪 RF-Hub Smoke Test Suite"
echo "📱 Testing device: $DEVICE"
echo ""

# Ensure Playwright is installed
if ! command -v npx &> /dev/null; then
  echo "❌ Node.js not found. Please install Node.js first."
  exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

# Run tests based on device
case $DEVICE in
  phone)
    echo "Running phone smoke tests..."
    npx playwright test --project=phone
    ;;
  desktop)
    echo "Running desktop smoke tests..."
    npx playwright test --project=desktop
    ;;
  *)
    echo "Running all smoke tests (phone + desktop)..."
    npx playwright test
    ;;
esac

# Generate report
echo ""
echo "📊 Generating report..."
node report-generator.js

echo ""
echo "✅ Smoke tests complete!"
echo ""
echo "Next: View screenshots in out/<timestamp>/ directory"
