#!/bin/bash

###############################################################################
# RF Learning Hub - Ubuntu Setup Script
# Run this on the Ubuntu PC at 10.0.1.98 to set up the backend
###############################################################################

set -e  # Exit on any error

echo "========================================="
echo "RF Learning Hub - Ubuntu Setup"
echo "========================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Project paths
PROJECT_ROOT="/home/rfw/rf-web"
BACKEND_DIR="$PROJECT_ROOT/backend"

# Database credentials
DB_NAME="rf_learning_hub"
DB_USER="rf_admin"
DB_PASS="RF_Hub_2025_Secure!"

###############################################################################
# Functions
###############################################################################

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_info() {
    echo -e "${YELLOW}→${NC} $1"
}

check_command() {
    if command -v $1 &> /dev/null; then
        print_success "$1 is installed"
        return 0
    else
        print_error "$1 is not installed"
        return 1
    fi
}

###############################################################################
# Step 1: Check prerequisites
###############################################################################

echo ""
print_info "Step 1: Checking prerequisites..."
echo ""

check_command node || { print_error "Node.js not found. Please install Node.js 20.x first."; exit 1; }
check_command npm || { print_error "npm not found."; exit 1; }
check_command psql || { print_error "PostgreSQL not found. Please install PostgreSQL first."; exit 1; }
check_command nginx || { print_info "nginx not found (optional, but recommended)"; }

echo ""
node --version
npm --version
psql --version

###############################################################################
# Step 2: Create project structure
###############################################################################

echo ""
print_info "Step 2: Creating project structure..."
echo ""

# Create main directories
mkdir -p "$PROJECT_ROOT"
mkdir -p "$PROJECT_ROOT/docs"
mkdir -p "$PROJECT_ROOT/frontend"
mkdir -p "$PROJECT_ROOT/scripts"
mkdir -p "$BACKEND_DIR"

print_success "Project directories created"

# Create backend structure
cd "$BACKEND_DIR"
mkdir -p src/{config,models,routes,middleware,utils}

print_success "Backend structure created"

###############################################################################
# Step 3: Initialize Node.js project
###############################################################################

echo ""
print_info "Step 3: Setting up Node.js project..."
echo ""

cd "$BACKEND_DIR"

# Create package.json if it doesn't exist
if [ ! -f "package.json" ]; then
    npm init -y
    print_success "package.json created"
else
    print_info "package.json already exists"
fi

# Install dependencies
print_info "Installing dependencies (this may take a minute)..."
npm install express pg bcrypt jsonwebtoken dotenv cors helmet express-rate-limit --save

# Install dev dependencies
npm install nodemon --save-dev

print_success "Dependencies installed"

###############################################################################
# Step 4: Create environment file
###############################################################################

echo ""
print_info "Step 4: Creating environment configuration..."
echo ""

cd "$BACKEND_DIR"

# Create .env file
cat > .env << EOF
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=$DB_NAME
DB_USER=$DB_USER
DB_PASSWORD=$DB_PASS

# JWT Configuration
JWT_SECRET=rf-learning-hub-production-secret-key-2025
JWT_EXPIRES_IN=7d

# CORS Configuration
FRONTEND_URL=http://10.0.1.98
EOF

print_success ".env file created"

# Create .env.example
cat > .env.example << 'EOF'
PORT=3000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_NAME=rf_learning_hub
DB_USER=rf_admin
DB_PASSWORD=your_secure_password
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
FRONTEND_URL=http://your_server_ip
EOF

print_success ".env.example created"

# Create .gitignore
cat > .gitignore << 'EOF'
node_modules/
.env
*.log
.DS_Store
npm-debug.log*
yarn-debug.log*
yarn-error.log*
coverage/
.vscode/
EOF

print_success ".gitignore created"

###############################################################################
# Step 5: Update package.json scripts
###############################################################################

echo ""
print_info "Step 5: Updating package.json scripts..."
echo ""

cd "$BACKEND_DIR"

# Use Node.js to update package.json
node << 'SCRIPT'
const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

packageJson.scripts = {
  "start": "node src/server.js",
  "dev": "nodemon src/server.js",
  "test": "echo \"Error: no test specified\" && exit 1"
};

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
SCRIPT

print_success "package.json scripts updated"

###############################################################################
# Step 6: Set up PostgreSQL database
###############################################################################

echo ""
print_info "Step 6: Setting up PostgreSQL database..."
echo ""

# Check if database exists
if sudo -u postgres psql -lqt | cut -d \| -f 1 | grep -qw $DB_NAME; then
    print_info "Database '$DB_NAME' already exists"
else
    # Create database
    sudo -u postgres psql -c "CREATE DATABASE $DB_NAME;"
    print_success "Database '$DB_NAME' created"
fi

# Check if user exists
if sudo -u postgres psql -t -c "SELECT 1 FROM pg_roles WHERE rolname='$DB_USER'" | grep -q 1; then
    print_info "User '$DB_USER' already exists"
else
    # Create user
    sudo -u postgres psql -c "CREATE USER $DB_USER WITH PASSWORD '$DB_PASS';"
    print_success "User '$DB_USER' created"
fi

# Grant privileges
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;"
print_success "Privileges granted to '$DB_USER'"

# Run schema if schema.sql exists
if [ -f "$BACKEND_DIR/schema.sql" ]; then
    print_info "Running database schema..."
    PGPASSWORD=$DB_PASS psql -U $DB_USER -d $DB_NAME -h localhost -f "$BACKEND_DIR/schema.sql"
    print_success "Database schema loaded"
else
    print_info "schema.sql not found - you'll need to load it manually"
fi

# Run seed data if it exists
if [ -f "$BACKEND_DIR/seed_modules_phase1.sql" ]; then
    print_info "Loading seed data..."
    PGPASSWORD=$DB_PASS psql -U $DB_USER -d $DB_NAME -h localhost -f "$BACKEND_DIR/seed_modules_phase1.sql"
    print_success "Seed data loaded"
else
    print_info "seed_modules_phase1.sql not found - you'll need to load it manually"
fi

###############################################################################
# Step 7: Create README
###############################################################################

echo ""
print_info "Step 7: Creating README..."
echo ""

cd "$BACKEND_DIR"

cat > README.md << 'EOF'
# RF Learning Hub Backend

Node.js + PostgreSQL backend API for the RF Learning Hub learning management system.

## Quick Start

```bash
# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your settings

# Start development server
npm run dev

# Start production server
npm start
```

## API Documentation

See `/docs/07-DATABASE-SCHEMA.md` for complete API documentation.

## Testing

```bash
# Health check
curl http://localhost:3000/health

# Test registration
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"Test123!","username":"testuser"}'
```

## Project Structure

```
backend/
├── src/
│   ├── config/         # Database configuration
│   ├── models/         # Data models
│   ├── routes/         # API routes
│   ├── middleware/     # Express middleware
│   ├── utils/          # Utility functions
│   └── server.js       # Main application
├── .env                # Environment variables
└── package.json        # Dependencies
```

## Development

- Node.js 20.x or higher
- PostgreSQL 14 or higher
- See IMPLEMENTATION-GUIDE-UBUNTU.md for detailed setup instructions
EOF

print_success "README.md created"

###############################################################################
# Step 8: Set permissions
###############################################################################

echo ""
print_info "Step 8: Setting file permissions..."
echo ""

cd "$PROJECT_ROOT"
chmod -R 755 .
chmod 600 "$BACKEND_DIR/.env"  # Protect .env file

print_success "Permissions set"

###############################################################################
# Step 9: Verify setup
###############################################################################

echo ""
print_info "Step 9: Verifying setup..."
echo ""

# Check if database is accessible
if PGPASSWORD=$DB_PASS psql -U $DB_USER -d $DB_NAME -h localhost -c "SELECT 1" > /dev/null 2>&1; then
    print_success "Database connection successful"
else
    print_error "Database connection failed"
fi

# Check if tables exist
TABLE_COUNT=$(PGPASSWORD=$DB_PASS psql -U $DB_USER -d $DB_NAME -h localhost -t -c "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema='public';" 2>/dev/null | tr -d ' ')

if [ "$TABLE_COUNT" -gt 0 ]; then
    print_success "Database has $TABLE_COUNT tables"
else
    print_info "No tables found - schema may need to be loaded"
fi

###############################################################################
# Summary
###############################################################################

echo ""
echo "========================================="
echo "Setup Complete!"
echo "========================================="
echo ""
echo "Project Root: $PROJECT_ROOT"
echo "Backend:      $BACKEND_DIR"
echo "Database:     $DB_NAME"
echo "User:         $DB_USER"
echo ""
echo "Next steps:"
echo "1. cd $BACKEND_DIR"
echo "2. Review .env file if needed"
echo "3. Implement backend code (see IMPLEMENTATION-GUIDE-UBUNTU.md)"
echo "4. Start server: npm run dev"
echo "5. Test: curl http://localhost:3000/health"
echo ""
echo "For Claude Code implementation:"
echo "  ssh frw@10.0.1.98"
echo "  cd /home/rfw/rf-web/backend"
echo ""
print_success "Ready for development!"
echo ""
