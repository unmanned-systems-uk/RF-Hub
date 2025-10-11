# Ubuntu PC Setup - Final Guide

---

## 📍 System Information (CORRECTED)

**SSH:** `ssh rfw@10.0.1.98`  
**Password:** `053210`  
**Project Root:** `/home/rfw/fr-web`  
**Backend:** `/home/rfw/fr-web/backend`

---

## 📥 Step 1: Download Files from Claude

Click these links to download:

1. **[setup-ubuntu.sh](computer:///mnt/user-data/outputs/setup-ubuntu.sh)** - Automated setup script
2. **[schema.sql](computer:///mnt/user-data/outputs/schema.sql)** - Database schema (8 tables)
3. **[seed_modules_phase1.sql](computer:///mnt/user-data/outputs/seed_modules_phase1.sql)** - Sample data

**Optional (for reference):**
4. **[CORRECTED-CONNECTION-INFO.md](computer:///mnt/user-data/outputs/CORRECTED-CONNECTION-INFO.md)** - Quick reference
5. **[IMPLEMENTATION-GUIDE-UBUNTU.md](computer:///mnt/user-data/outputs/IMPLEMENTATION-GUIDE-UBUNTU.md)** - Implementation guide
6. **[nginx-config-corrected.conf](computer:///mnt/user-data/outputs/nginx-config-corrected.conf)** - nginx config
7. **[rf-backend-service-corrected.service](computer:///mnt/user-data/outputs/rf-backend-service-corrected.service)** - systemd service

---

## 🚀 Step 2: Transfer Files to Ubuntu

### Option A: SCP from Windows PowerShell

```powershell
# Navigate to where you downloaded the files
cd C:\Users\YourName\Downloads

# Transfer to Ubuntu PC (correct username: rfw)
scp setup-ubuntu.sh rfw@10.0.1.98:/home/rfw/
scp schema.sql rfw@10.0.1.98:/home/rfw/
scp seed_modules_phase1.sql rfw@10.0.1.98:/home/rfw/
```

### Option B: WinSCP (GUI)

1. Download WinSCP: https://winscp.net/
2. Configure connection:
   - **Protocol:** SFTP
   - **Host:** `10.0.1.98`
   - **Port:** `22`
   - **Username:** `rfw` ✅
   - **Password:** `053210`
3. Connect and drag files to `/home/rfw/`

### Option C: FileZilla (GUI)

1. Download FileZilla: https://filezilla-project.org/
2. Configure connection:
   - **Host:** `sftp://10.0.1.98`
   - **Username:** `rfw` ✅
   - **Password:** `053210`
   - **Port:** `22`
3. Transfer files

---

## 🔧 Step 3: Run Setup on Ubuntu

```bash
# 1. SSH into Ubuntu PC (correct username)
ssh rfw@10.0.1.98
# Password: 053210

# 2. Verify you're the right user
whoami
# Should output: rfw

# 3. Create project structure
mkdir -p /home/rfw/fr-web/backend
cd /home/rfw/fr-web/backend

# 4. Move files if they're in home directory
mv /home/rfw/setup-ubuntu.sh .
mv /home/rfw/schema.sql .
mv /home/rfw/seed_modules_phase1.sql .

# 5. Make setup script executable
chmod +x setup-ubuntu.sh

# 6. Run the setup script
./setup-ubuntu.sh
```

### What the Script Does

✅ Creates project directory structure  
✅ Installs npm dependencies  
✅ Creates PostgreSQL database `rf_learning_hub`  
✅ Creates database user `rf_admin`  
✅ Loads database schema (8 tables)  
✅ Loads sample data (6 modules)  
✅ Creates `.env` file with correct paths  
✅ Sets up `.gitignore`  
✅ Verifies everything works

---

## ✅ Step 4: Verify Setup

```bash
# Check you're in the right place
pwd
# Should show: /home/rfw/fr-web/backend

# Check files exist
ls -la

# Test database connection
psql -U rf_admin -d rf_learning_hub -h localhost -c "\dt"
# Password: RF_Hub_2025_Secure!

# Should list 8 tables:
# - users
# - modules
# - user_progress
# - quizzes
# - quiz_questions
# - quiz_attempts
# - user_badges
# - saved_calculations

# Check modules were loaded
psql -U rf_admin -d rf_learning_hub -h localhost -c "SELECT COUNT(*) FROM modules;"
# Should return: 6 (Phase 1 modules)
```

---

## 🎯 Step 5: Ready for Claude Code

Once setup is complete, give Claude Code these instructions:

```
Connect to Ubuntu PC:
  ssh rfw@10.0.1.98
  Password: 053210

Navigate to backend:
  cd /home/rfw/fr-web/backend

Follow implementation guide:
  IMPLEMENTATION-GUIDE-UBUNTU.md

Implement in phases:
  Phase 1: Infrastructure 
  Phase 2: Authentication
  Phase 3: Core Features
  Phase 4: Additional 
```

---

## 📋 Project Structure

```
/home/rfw/fr-web/
│
├── backend/                       🔧 Backend API
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js        ← Claude Code creates
│   │   ├── models/
│   │   │   ├── User.js            ← Claude Code creates
│   │   │   ├── Module.js          ← Claude Code creates
│   │   │   ├── Progress.js        ← Claude Code creates
│   │   │   ├── Quiz.js            ← Claude Code creates
│   │   │   ├── Badge.js           ← Claude Code creates
│   │   │   └── Calculation.js     ← Claude Code creates
│   │   ├── routes/
│   │   │   ├── auth.js            ← Claude Code creates
│   │   │   ├── modules.js         ← Claude Code creates
│   │   │   ├── progress.js        ← Claude Code creates
│   │   │   ├── quizzes.js         ← Claude Code creates
│   │   │   ├── badges.js          ← Claude Code creates
│   │   │   └── calculations.js    ← Claude Code creates
│   │   ├── middleware/
│   │   │   └── auth.js            ← Claude Code creates
│   │   └── server.js              ← Claude Code creates
│   ├── schema.sql                 ✅ Provided
│   ├── seed_modules_phase1.sql    ✅ Provided
│   ├── setup-ubuntu.sh            ✅ Provided
│   ├── .env                       ✅ Created by setup
│   ├── .gitignore                 ✅ Created by setup
│   ├── package.json               ✅ Created by setup
│   └── README.md                  ✅ Created by setup
│
├── frontend/                      🌐 Website (to be added)
├── docs/                          📚 Documentation (to be added)
└── scripts/                       🐍 Utilities (to be added)
```

---

## 🗄️ Database Configuration

**Connection String for .env:**
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=rf_learning_hub
DB_USER=rf_admin
DB_PASSWORD=RF_Hub_2025_Secure!
```

**Manual Connection:**
```bash
psql -U rf_admin -d rf_learning_hub -h localhost
```

---

## 🌐 Access URLs

Once backend is implemented:

- **Frontend:** `http://10.0.1.98` (via nginx)
- **Backend API:** `http://10.0.1.98/api` (proxied)
- **Direct Backend:** `http://10.0.1.98:3000`
- **Health Check:** `http://10.0.1.98:3000/health`

**From any device on your network (10.0.1.x), browse to:** `http://10.0.1.98`

---

## 🧪 Testing Commands

```bash
# After backend is implemented:

# Test health endpoint
curl http://localhost:3000/health

# Test from another device on network
curl http://10.0.1.98:3000/health

# Register a test user
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@test.com",
    "password": "Test123!",
    "username": "testuser"
  }'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@test.com",
    "password": "Test123!"
  }'

# List modules
curl http://localhost:3000/api/modules
```

---

## 🆘 Troubleshooting

### Wrong Username Error

```bash
# ❌ WRONG
ssh frw@10.0.1.98
cd /home/frw/fr-web

# ✅ CORRECT
ssh rfw@10.0.1.98
cd /home/rfw/fr-web
```

### Permission Denied

```bash
# Check you're the right user
whoami
# Should output: rfw

# Fix permissions if needed
sudo chown -R rfw:rfw /home/rfw/fr-web
chmod -R 755 /home/rfw/fr-web
chmod 600 /home/rfw/fr-web/backend/.env
```

### Database Connection Issues

```bash
# Check PostgreSQL is running
sudo systemctl status postgresql

# Test connection
psql -U rf_admin -d rf_learning_hub -h localhost -c "SELECT 1;"
# Password: RF_Hub_2025_Secure!

# Check .env file has correct credentials
cat /home/rfw/fr-web/backend/.env | grep DB_
```

### Setup Script Fails

```bash
# Make sure you have required packages
node --version    # Should be v20.x
npm --version     # Should be 10.x
psql --version    # Should be PostgreSQL 14+

# Re-run with verbose output
bash -x setup-ubuntu.sh
```

---

## ✅ Verification Checklist

**Before Claude Code Implementation:**
- [ ] Can SSH with `ssh rfw@10.0.1.98`
- [ ] Files transferred to Ubuntu
- [ ] Setup script completed successfully
- [ ] Database has 8 tables
- [ ] Database has 6 modules in modules table
- [ ] .env file exists with correct paths
- [ ] package.json exists with dependencies

**After Claude Code Implementation:**
- [ ] Server starts on port 3000
- [ ] Health endpoint returns 200 OK
- [ ] Can register users
- [ ] Can login and get JWT token
- [ ] All 22 API endpoints functional
- [ ] Frontend can connect to backend

---

## 📞 Quick Reference

**SSH:** `ssh rfw@10.0.1.98` (password: 053210)  
**Backend Path:** `/home/rfw/fr-web/backend`  
**Database:** `rf_learning_hub` (user: `rf_admin`, pass: `RF_Hub_2025_Secure!`)  
**API URL:** `http://10.0.1.98:3000/api` or `http://10.0.1.98/api`

---

## 🎉 Summary

1. ✅ Username corrected to `rfw`
2. 📥 Download 3 essential files (setup script + 2 SQL files)
3. 🚀 Transfer to Ubuntu using SCP/WinSCP/FileZilla
4. 🔧 Run setup script on Ubuntu
5. ✅ Verify database and setup
6. 💻 Hand off to Claude Code for implementation

---

**All paths use correct username `rfw` throughout.**

Ready to proceed with the corrected information! 🚀
