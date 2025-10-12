# File Structure

**Document Owner:** Claude Code
**Last Updated:** October 12, 2025
**Status:** Current

---

## 🎯 Purpose

This document maintains the definitive directory tree for the entire RF Learning Hub project. Update this file whenever you create, delete, or move files.

---

## 📊 Current Statistics

**Total Files:** 66
**Total Directories:** 33
**Documentation Files:** 19
**Backend Files:** 24 (API complete)
**Frontend Files:** 12 (3 pages, 4 JS modules)
**Images:** 26 (antenna diagrams/photos)

---

## 📁 Complete Directory Tree

```
/home/rfw/rf-web/
│
├── docs/                                    📚 DOCUMENTATION HUB
│   ├── README.md                            ✅ Project overview & navigation
│   ├── 00-READ-THIS-FIRST.md                ✅ Quick start guide
│   ├── 00-START-HERE-CORRECTED.md           ✅ Setup instructions
│   ├── 01-PROJECT-OVERVIEW.md               ✅ Mission, vision, goals
│   ├── 02-PROGRESS-TRACKER.md               ✅ Living status dashboard
│   ├── 03-TODO-MASTER.md                    ✅ Prioritized task backlog
│   ├── 04-IDEAS-SCRATCHPAD.md               ✅ Feature brainstorming
│   ├── 05-FILE-STRUCTURE.md                 ✅ This file
│   ├── 06-STYLING-GUIDE.md                  ✅ CSS design system
│   ├── 07-DATABASE-SCHEMA.md                ✅ PostgreSQL schema & API specs
│   ├── 08-DEPLOYMENT-GUIDE.md               ✅ Hosting & CI/CD
│   ├── 09-CONTENT-INVENTORY.md              ✅ All written content
│   ├── 10-CONTRIBUTOR-GUIDE.md              ✅ Workflow protocols
│   ├── AUTH-ENHANCEMENTS.md                 ✅ Authentication improvements
│   ├── CLAUDE-CODE-SUMMARY.md               ✅ Implementation summary
│   ├── FRONTEND-SETUP-COMPLETE.md           ✅ Frontend setup notes
│   │
│   ├── claude/                              🔍 CLAUDE'S WORKSPACE
│   │   ├── CLAUDE-CHECKPOINT.md             ✅ Active work tracking
│   │   ├── CLAUDE-TASKS.md                  ✅ Assigned tasks
│   │   ├── content-drafts/                  ✍️ Content being written
│   │   ├── equipment-logs/                  🔬 Equipment data
│   │   ├── implementation-notes/            📋 Implementation notes
│   │   ├── learning-notes/                  📚 Learning materials
│   │   ├── meeting-notes/                   📝 Meeting records
│   │   ├── research-notes/                  📝 Research documents
│   │   └── testing-logs/                    🧪 Test results
│   │
│   ├── claude-code/                         🔧 CC'S WORKSPACE
│   │   ├── CC-CHECKPOINT.md                 ✅ Implementation tracking
│   │   ├── CC-TASKS.md                      ✅ Build queue
│   │   ├── CLAUDE-CODE-QUICK-START.md       ✅ Quick reference
│   │   ├── IMPLEMENTATION-GUIDE.md          ✅ Implementation guide
│   │   ├── IMPLEMENTATION-GUIDE-REVISED.md  ✅ Revised guide
│   │   ├── IMPLEMENTATION-PHASE-4.md        ✅ Phase 4 details
│   │   ├── implementation-notes/            📋 Development notes
│   │   └── testing-logs/                    🧪 Test results
│   │
│   ├── anthony/                             🎯 ANTHONY'S WORKSPACE
│   │   ├── CURRENT-WORK.md                  ✅ Active work log
│   │   ├── ANTHONY-DECISIONS.md             ✅ Decision log
│   │   ├── equipment-logs/                  🔬 VNA measurements
│   │   └── learning-notes/                  📚 Personal progress
│   │
│   └── archives/                            📦 ARCHIVES
│       └── meeting-notes/                   📝 Meeting logs
│
├── backend/                                 🔙 BACKEND API (Node.js + Express)
│   ├── server.js                            ✅ Main Express server
│   ├── package.json                         ✅ Node dependencies
│   ├── package-lock.json                    ✅ Dependency lock
│   ├── schema.sql                           ✅ PostgreSQL schema
│   ├── seed_modules_phase1.sql              ✅ Initial module data
│   ├── README.md                            ✅ Backend documentation
│   ├── API-IMPLEMENTATION-SUMMARY.md        ✅ API summary
│   ├── IMPLEMENTATION-STATUS.md             ✅ Status tracking
│   ├── setup-ubuntu.sh                      ✅ Ubuntu setup script
│   │
│   ├── config/                              ⚙️ CONFIGURATION
│   │   └── database.js                      ✅ PostgreSQL connection
│   │
│   ├── middleware/                          🔌 MIDDLEWARE
│   │   ├── auth.js                          ✅ JWT authentication
│   │   └── errorHandler.js                  ✅ Error handling
│   │
│   ├── models/                              📊 DATABASE MODELS
│   │   ├── User.js                          ✅ User model
│   │   ├── Module.js                        ✅ Learning module model
│   │   ├── Progress.js                      ✅ User progress model
│   │   ├── Quiz.js                          ✅ Quiz model
│   │   ├── Badge.js                         ✅ Badge/achievement model
│   │   └── Calculation.js                   ✅ Calculator history model
│   │
│   └── routes/                              🛣️ API ROUTES
│       ├── auth.js                          ✅ /api/auth routes
│       ├── modules.js                       ✅ /api/modules routes
│       ├── progress.js                      ✅ /api/progress routes
│       ├── quizzes.js                       ✅ /api/quizzes routes
│       ├── badges.js                        ✅ /api/badges routes
│       └── calculations.js                  ✅ /api/calculations routes
│
├── frontend/                                🌐 FRONTEND (Static HTML/CSS/JS)
│   ├── index.html                           ✅ Dashboard/Homepage
│   ├── LICENSE                              ✅ MIT License
│   ├── README.md                            ✅ Frontend readme
│   │
│   ├── pages/                               📄 HTML PAGES
│   │   ├── antennas.html                    ✅ Antenna guide
│   │   ├── frequency-bands.html             ✅ Spectrum reference
│   │   ├── learning-path.html               ⏳ Curriculum (planned)
│   │   ├── equipment.html                   ⏳ Equipment inventory
│   │   ├── measurements.html                ⏳ VNA database
│   │   ├── notebook.html                    ⏳ Lab notebook
│   │   ├── projects.html                    ⏳ Project tracker
│   │   ├── gallery.html                     ⏳ Photo gallery
│   │   ├── calculators.html                 ⏳ RF calculators
│   │   ├── resources.html                   ⏳ External links
│   │   └── videos.html                      ⏳ Video library
│   │
│   ├── assets/                              🎨 STATIC ASSETS
│   │   │
│   │   ├── css/                             🎨 STYLESHEETS
│   │   │   └── styles.css                   ✅ Main stylesheet (~1,250 lines)
│   │   │
│   │   ├── js/                              ⚙️ JAVASCRIPT MODULES
│   │   │   ├── main.js                      ✅ Main app logic
│   │   │   ├── api.js                       ✅ API client wrapper
│   │   │   ├── auth-ui.js                   ✅ Authentication UI
│   │   │   ├── storage.js                   ✅ localStorage wrapper
│   │   │   ├── calculators.js               ⏳ RF calculators (planned)
│   │   │   └── charts.js                    ⏳ Chart.js integration (planned)
│   │   │
│   │   ├── images/                          🖼️ IMAGES
│   │   │   └── Antenna/                     📡 ANTENNA IMAGES (26 files)
│   │   │       ├── D-dipole.png             ✅ Basic dipole diagram
│   │   │       ├── D-folded.png             ✅ Folded dipole diagram
│   │   │       ├── D-vertical.png           ✅ Vertical antenna diagram
│   │   │       ├── D-yagi.png               ✅ Yagi antenna diagram
│   │   │       ├── D-yagi2.png              ✅ Yagi variant diagram
│   │   │       ├── D-jpole.png              ✅ J-pole diagram
│   │   │       ├── D-groundplane.png        ✅ Ground plane diagram
│   │   │       ├── D-lpda.png               ✅ LPDA diagram
│   │   │       ├── D-horn.png               ✅ Horn antenna diagram
│   │   │       ├── D-dish.png               ✅ Parabolic dish diagram
│   │   │       ├── D-corner.png             ✅ Corner reflector diagram
│   │   │       ├── D-pattern.png            ✅ Radiation pattern diagram
│   │   │       ├── D-symbol.png             ✅ Antenna symbol
│   │   │       ├── P-dipole.jpg             ✅ Dipole photo
│   │   │       ├── P-yagi.jpg               ✅ Yagi photo
│   │   │       ├── P-lpda.jpg               ✅ LPDA photo
│   │   │       ├── P-loop.jpg               ✅ Loop antenna photo
│   │   │       ├── P-helical.jpg            ✅ Helical antenna photo
│   │   │       ├── P-horn.jpg               ✅ Horn antenna photo
│   │   │       ├── P-dish.webp              ✅ Dish photo (webp)
│   │   │       ├── P-dish2.jpg              ✅ Dish photo (jpg)
│   │   │       ├── P-quad.jpg               ✅ Quad antenna photo
│   │   │       ├── P-quad2.png              ✅ Quad antenna diagram
│   │   │       ├── P-jpole.jpg              ✅ J-pole photo
│   │   │       ├── P-corner.jpg             ✅ Corner reflector photo
│   │   │       └── img.txt                  ✅ Image manifest
│   │   │
│   │   └── sql/                             💾 SQL FILES (reference)
│   │       ├── schema.sql                   ✅ Database schema copy
│   │       └── seed_modules_phase1.sql      ✅ Module seed data copy
│   │
│   ├── data/                                💾 DATA (localStorage backup)
│   └── test html/                           🧪 TEST FILES
│       └── rf_hub_index.html                ✅ Test page
│
├── scripts/                                 🐍 UTILITY SCRIPTS
│   └── (empty - scripts to be added)
│
├── .git/                                    📦 GIT REPOSITORY
├── .claude/                                 🔧 CLAUDE CODE CONFIG
│   └── settings.local.json                  ✅ Local settings
│
├── NGINX-SETUP.sh                           ✅ NGINX configuration script
├── nginx-rf-learning-hub.conf               ✅ NGINX config file
└── start-server.sh                          ✅ Server startup script

```

---

## 📋 File Status Legend

- ✅ **Exists and complete** - File is created and ready to use
- ⏳ **Planned/Queued** - File planned but not yet created
- 🔄 **In Progress** - File being actively worked on
- ❌ **Missing (Critical)** - File referenced but doesn't exist, blocking other work
- 📁 **Directory** - Folder structure only

---

## 🎯 Next Priority Files

### 📝 PLANNED FOR NEXT PHASE

**1. Frontend Pages**
- **Files:** learning-path.html, calculators.html, equipment.html
- **Status:** ⏳ Planned
- **Priority:** HIGH
- **Impact:** Core functionality expansion
- **Dependencies:** Backend API (✅ Complete)

**2. Calculator JavaScript**
- **File:** frontend/assets/js/calculators.js
- **Status:** ⏳ Planned
- **Priority:** MEDIUM
- **Impact:** RF calculator functionality
- **Dependencies:** Calculator page HTML

**3. .gitignore**
- **Status:** ⏳ Should be created
- **Priority:** MEDIUM
- **Impact:** Clean git commits
- **Suggested contents:**
  ```
  node_modules/
  .env
  *.log
  .DS_Store
  Thumbs.db
  backend/bep
  ```

---

## 📊 File Size Overview

### Documentation (docs/)
- Total: ~200 KB
- Files: 19 markdown files
- Largest: 03-TODO-MASTER.md (~30 KB)

### Backend (backend/)
- JavaScript: ~50 KB (server + routes + models)
- SQL: ~20 KB (schema + seed data)
- node_modules/: ~40 MB (dependencies)
- **Total:** ~40 MB

### Frontend (frontend/)
- HTML: ~150 KB (3 complete pages)
- CSS: ~45 KB (styles.css)
- JS: ~20 KB (4 modules: main, api, auth-ui, storage)
- Images: ~5 MB (26 antenna diagrams/photos)
- **Total:** ~5.2 MB

### Configuration
- Shell scripts: ~3 KB
- NGINX config: ~1 KB

### **Project Total (excluding node_modules):** ~5.5 MB
### **Project Total (including node_modules):** ~45 MB

---

## 🔄 Update Protocol

### When Creating New Files

**Step 1:** Create the file in appropriate location  
**Step 2:** Update this document (05-FILE-STRUCTURE.md)  
**Step 3:** Update 02-PROGRESS-TRACKER.md if milestone  
**Step 4:** Git commit with descriptive message

### File Naming Conventions

**Documentation:**
- Format: `##-DESCRIPTION.md`
- Examples: `01-PROJECT-OVERVIEW.md`, `10-CONTRIBUTOR-GUIDE.md`
- Numbers for ordering (01-10)
- ALL CAPS for visibility
- Hyphens for readability

**Website Pages:**
- Format: `lowercase-with-hyphens.html`
- Examples: `learning-path.html`, `frequency-bands.html`
- Descriptive and URL-friendly

**CSS/JS:**
- Format: `lowercase.js` or `lowercase.css`
- Examples: `main.js`, `styles.css`, `calculators.js`

**Images:**
- Diagrams: `D-[Type]-[Variant].png` (e.g., `D-Dipole-Folded.png`)
- Photos: `P-[Type]-[Description].jpg` (e.g., `P-Yagi-UHF.jpg`)
- Capitalize first letter of each word
- Use hyphens between words

---

## 📁 Directory Purposes

### `/docs/` - Documentation Hub
**Purpose:** All project management, planning, and workflow documentation
**Owner:** All contributors (specific ownership per file)
**Update Frequency:** Daily
**Backup:** Git repository

### `/docs/claude/` - Claude's Workspace
**Purpose:** Research, planning, content drafting
**Owner:** Claude (Sonnet 4.5)
**Update Frequency:** Multiple times daily during active work
**Contents:** Specs for CC, research notes, content drafts

### `/docs/claude-code/` - Claude Code's Workspace
**Purpose:** Implementation tracking and development notes
**Owner:** Claude Code
**Update Frequency:** After each build session
**Contents:** Task queue, testing logs, implementation guides

### `/docs/anthony/` - Anthony's Workspace
**Purpose:** Lab work, equipment logs, decision tracking
**Owner:** Anthony
**Update Frequency:** As needed (daily for equipment logs)
**Contents:** VNA measurements, learning progress, decisions

### `/docs/archives/` - Archives
**Purpose:** Old versions, completed meeting notes
**Owner:** All (write-once, read-many)
**Update Frequency:** Weekly/monthly cleanup
**Retention:** Keep indefinitely for history

### `/backend/` - Backend API Server
**Purpose:** Node.js + Express REST API with PostgreSQL
**Owner:** Claude Code (implementation)
**Port:** 3000 (configurable)
**Tech Stack:** Express, pg (PostgreSQL), bcrypt, JWT
**Status:** ✅ Complete and operational

### `/backend/config/` - Backend Configuration
**Purpose:** Database connections, environment settings
**Files:** database.js (PostgreSQL pool configuration)

### `/backend/middleware/` - Express Middleware
**Purpose:** Authentication, error handling, request processing
**Files:** auth.js (JWT verification), errorHandler.js

### `/backend/models/` - Database Models
**Purpose:** Data access layer for PostgreSQL tables
**Pattern:** Each model exports CRUD methods
**Files:** User, Module, Progress, Quiz, Badge, Calculation

### `/backend/routes/` - API Route Handlers
**Purpose:** REST API endpoint definitions
**Base Path:** /api
**Routes:** /auth, /modules, /progress, /quizzes, /badges, /calculations

### `/frontend/` - Frontend Web Application
**Purpose:** Static HTML/CSS/JS website
**Owner:** Claude Code (implementation), Claude (content)
**Tech:** Vanilla JS, no framework (intentional)
**Deployment:** NGINX serving static files

### `/frontend/pages/` - HTML Pages
**Purpose:** All HTML page files (except index.html)
**Naming:** Descriptive, lowercase, hyphenated
**Count:** 11 total (2 complete, 9 planned)

### `/frontend/assets/` - Static Assets
**Purpose:** CSS, JavaScript, images, SQL reference files
**Subdirectories:** css/, js/, images/, sql/
**Optimization:** Images should be compressed before commit

### `/frontend/assets/js/` - JavaScript Modules
**Purpose:** Client-side application logic
**Pattern:** ES6 modules, exported functions
**Files:** main.js (app), api.js (fetch wrapper), auth-ui.js, storage.js

### `/scripts/` - Utility Scripts
**Purpose:** Automation, build tools, utilities
**Language:** Python (primary), Bash (shell scripts)
**Usage:** Run from project root
**Status:** Directory exists but empty

---

## 🔍 Finding Files Quickly

### By Type
- **Planning docs:** `docs/01-*.md` through `docs/04-*.md`
- **Technical docs:** `docs/05-*.md` through `docs/10-*.md`
- **Checkpoints:** `docs/*/CHECKPOINT.md` or `docs/*/*-CHECKPOINT.md`
- **Task lists:** `docs/*/TASKS.md` or `docs/*/*-TASKS.md`
- **Backend code:** `backend/**/*.js`
- **Frontend pages:** `frontend/pages/*.html` + `frontend/index.html`
- **Styles:** `frontend/assets/css/*.css`
- **Client scripts:** `frontend/assets/js/*.js`
- **Images:** `frontend/assets/images/*/`
- **Database:** `backend/schema.sql`, `backend/seed_*.sql`

### By Contributor
- **Anthony's files:** `docs/anthony/*`
- **Claude's files:** `docs/claude/*`
- **CC's files:** `docs/claude-code/*`

### By Technology
- **Node.js:** `backend/**/*.js`, `backend/package.json`
- **HTML:** `frontend/**/*.html`
- **CSS:** `frontend/assets/css/*.css`
- **JavaScript:** `frontend/assets/js/*.js`
- **SQL:** `backend/*.sql`, `frontend/assets/sql/*.sql`
- **Shell:** `*.sh`, `nginx-*.conf`

### By Status
- **Complete:** Look for ✅ in this doc
- **In Progress:** Check checkpoint files
- **Planned:** Look for ⏳ in this doc

---

## 📈 Growth Projections

### Next Week (Oct 19, 2025)
- **Files:** +5 (2-3 new HTML pages, calculator JS)
- **Size:** +500 KB (code, minimal images)
- **Focus:** Learning path page, calculators page

### Next Month (Nov 12, 2025)
- **Files:** +15 (remaining HTML pages, quiz data)
- **Size:** +5 MB (equipment photos, more content)
- **Directories:** +2 (logs/, uploads/)
- **Focus:** Complete all planned pages

### Next Quarter (Jan 12, 2026)
- **Files:** +50 (content modules, user submissions)
- **Size:** +20 MB (user uploads, video embeds)
- **Focus:** Community features, advanced calculators

---

## 🗑️ Cleanup Schedule

### Weekly
- Archive completed meeting notes
- Clean up temporary files
- Review and organize screenshots

### Monthly
- Archive old checkpoints (keep last 30 days)
- Compress old log files
- Review file structure for optimization

### Quarterly
- Major cleanup and reorganization
- Review naming conventions
- Optimize image library

---

## 📝 Notes

**Git Tracking:**
- All files should be tracked except `.env`, logs, `node_modules/`, and `backend/bep`
- Consider creating a `.gitignore` file (see Next Priority Files section)
- Currently: 66 tracked files across 33 directories

**File Size Limits:**
- Keep individual files under 1 MB when possible
- Optimize images before commit (current antenna images are good)
- Backend node_modules is ~40 MB (normal for Node.js projects)

**Technology Stack:**
- **Backend:** Node.js 18+, Express 4.x, PostgreSQL 15+
- **Frontend:** Vanilla JavaScript (ES6), no framework
- **Database:** PostgreSQL with pg driver
- **Auth:** JWT tokens, bcrypt password hashing
- **Server:** NGINX reverse proxy to Node.js on port 3000

**Naming Consistency:**
- Backend: camelCase for JS files and functions
- Frontend: kebab-case for HTML files, camelCase for JS
- Database: snake_case for table/column names
- Always use the established conventions
- Update this doc after any reorganization

**Documentation:**
- Keep this file updated after adding/removing files
- Status changes should be reflected immediately
- Include file sizes for large files (>100 KB)

**Deployment:**
- Backend runs on port 3000 via `node server.js`
- Frontend served by NGINX on port 80
- PostgreSQL on default port 5432
- Database: rf_learning_hub

---

**Last Updated:** October 12, 2025 by Claude Code
**Next Update:** When files are created or structure changes
**Maintenance:** Claude Code owns this file, all contributors update it