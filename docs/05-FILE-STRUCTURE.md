# File Structure

**Last Updated:** October 8, 2025 by Claude Code

# File Structure

**Document Owner:** Claude Code  
**Last Updated:** October 8, 2025  
**Status:** Current

---

## 🎯 Purpose

This document maintains the definitive directory tree for the entire RF Learning Hub project. Update this file whenever you create, delete, or move files.

---

## 📊 Current Statistics

**Total Files:** 50+  
**Total Directories:** 25+  
**Documentation Files:** 17  
**Website Pages:** 13 (3 complete, 10 pending)  
**Images:** 24 (antennas)

---

## 📁 Complete Directory Tree

```
D:\SDR\RF Web Hub\RF Web Hub Project\
│
├── docs/                                    📚 DOCUMENTATION HUB
│   ├── README.md                            ✅ Project overview & navigation
│   ├── 01-PROJECT-OVERVIEW.md               ✅ Mission, vision, goals
│   ├── 02-PROGRESS-TRACKER.md               ✅ Living status dashboard
│   ├── 03-TODO-MASTER.md                    ✅ Prioritized task backlog
│   ├── 04-IDEAS-SCRATCHPAD.md               ✅ Feature brainstorming
│   ├── 05-FILE-STRUCTURE.md                 ✅ This file
│   ├── 06-STYLING-GUIDE.md                  ✅ CSS design system
│   ├── 07-DATABASE-SCHEMA.md                ✅ Data models & API specs
│   ├── 08-DEPLOYMENT-GUIDE.md               ✅ Hosting & CI/CD
│   ├── 09-CONTENT-INVENTORY.md              ✅ All written content
│   ├── 10-CONTRIBUTOR-GUIDE.md              ✅ Workflow protocols
│   │
│   ├── claude/                              🔍 CLAUDE'S WORKSPACE
│   │   ├── CLAUDE-CHECKPOINT.md             ✅ Active work tracking
│   │   ├── CLAUDE-TASKS.md                  ✅ Assigned tasks
│   │   ├── research-notes/                  📝 Research documents
│   │   │   ├── .gitkeep                     ✅
│   │   │   ├── antenna-research.md          ⏳ Future
│   │   │   ├── calculator-specs.md          ⏳ Future
│   │   │   ├── quiz-system-spec.md          ⏳ Future
│   │   │   └── measurement-logging-spec.md  ⏳ Future
│   │   └── content-drafts/                  ✍️ Content being written
│   │       ├── .gitkeep                     ✅
│   │       ├── learning-path-content.md     ⏳ In progress
│   │       ├── equipment-page-content.md    ⏳ Queued
│   │       └── quiz-questions-phase1.json   ⏳ Queued
│   │
│   ├── claude-code/                         🔧 CC'S WORKSPACE
│   │   ├── CC-CHECKPOINT.md                 ✅ Implementation tracking
│   │   ├── CC-TASKS.md                      ✅ Build queue
│   │   ├── implementation-notes/            📋 Development notes
│   │   │   ├── .gitkeep                     ✅
│   │   │   ├── page-templates.md            ⏳ Future
│   │   │   ├── component-library.md         ⏳ Future
│   │   │   └── localStorage-wrapper.md      ⏳ Future
│   │   └── testing-logs/                    🧪 Test results
│   │       ├── .gitkeep                     ✅
│   │       ├── browser-compatibility.md     ⏳ Future
│   │       └── mobile-testing-log.md        ⏳ Future
│   │
│   ├── anthony/                             🎯 ANTHONY'S WORKSPACE
│   │   ├── CURRENT-WORK.md                  ✅ Active work log
│   │   ├── ANTHONY-DECISIONS.md             ✅ Decision log
│   │   ├── equipment-logs/                  🔬 VNA measurements
│   │   │   ├── .gitkeep                     ✅
│   │   │   ├── discone-baseline-sweep.csv   ⏳ Future
│   │   │   ├── airband-dipole-measurements.csv ⏳ Future
│   │   │   └── adsb-antenna-measurements.csv ⏳ Future
│   │   └── learning-notes/                  📚 Personal progress
│   │       ├── .gitkeep                     ✅
│   │       └── module-progress.md           ⏳ Future
│   │
│   └── archives/                            📦 ARCHIVES
│       ├── rf_learning_context_v2.2_20251008.md ⏳ To archive
│       └── meeting-notes/                   📝 Meeting logs
│           ├── .gitkeep                     ✅
│           └── 2025-10-08-kickoff.md        ⏳ Future
│
├── rf-learning-hub/                         🌐 WEBSITE ROOT
│   ├── index.html                           ✅ Dashboard page
│   ├── LICENSE                              ✅ MIT License
│   ├── README.md                            ✅ Website readme
│   │
│   ├── pages/                               📄 HTML PAGES
│   │   ├── antennas.html                    ✅ Antenna guide (3/13)
│   │   ├── frequency-bands.html             ✅ Spectrum reference (2/13)
│   │   ├── learning-path.html               ⏳ 26-module curriculum
│   │   ├── equipment.html                   ⏳ Equipment inventory
│   │   ├── measurements.html                ⏳ VNA database
│   │   ├── notebook.html                    ⏳ Lab notebook
│   │   ├── projects.html                    ⏳ Project tracker
│   │   ├── gallery.html                     ⏳ Photo gallery
│   │   ├── calculators.html                 ⏳ RF calculators
│   │   ├── resources.html                   ⏳ External links
│   │   ├── videos.html                      ⏳ Video library
│   │   └── rf-map.html                      ⏳ RF environment map
│   │
│   ├── assets/                              🎨 STATIC ASSETS
│   │   │
│   │   ├── css/                             🎨 STYLESHEETS
│   │   │   └── styles.css                   ✅ Main stylesheet (1,250 lines)
│   │   │
│   │   ├── js/                              ⚙️ JAVASCRIPT
│   │   │   ├── main.js                      ❌ MISSING (critical!)
│   │   │   ├── calculators.js               ⏳ Not created
│   │   │   ├── charts.js                    ⏳ Not created
│   │   │   └── auth.js                      ⏳ Not created
│   │   │
│   │   └── images/                          🖼️ IMAGES
│   │       │
│   │       ├── Antenna/                     📡 ANTENNA IMAGES (24 files)
│   │       │   ├── D-Dipole-Basic.png       ✅ Diagram
│   │       │   ├── D-Dipole-Folded.png      ✅ Diagram
│   │       │   ├── D-Vertical-GP.png        ✅ Diagram
│   │       │   ├── D-Loop-Magnetic.png      ✅ Diagram
│   │       │   ├── D-Yagi-3el.png           ✅ Diagram
│   │       │   ├── D-Yagi-5el.png           ✅ Diagram
│   │       │   ├── D-JPole.png              ✅ Diagram
│   │       │   ├── D-GroundPlane.png        ✅ Diagram
│   │       │   ├── D-LPDA.png               ✅ Diagram
│   │       │   ├── D-Horn.png               ✅ Diagram
│   │       │   ├── D-Parabolic.png          ✅ Diagram
│   │       │   ├── P-Discone-Mounted.jpg    ✅ Photo
│   │       │   ├── P-Dipole-VHF.jpg         ✅ Photo
│   │       │   ├── P-Yagi-UHF.jpg           ✅ Photo
│   │       │   ├── P-LPDA-Array.jpg         ✅ Photo
│   │       │   ├── P-Loop-Magnetic.jpg      ✅ Photo
│   │       │   ├── P-Helical-Satellite.jpg  ✅ Photo
│   │       │   ├── P-Horn-Microwave.jpg     ✅ Photo
│   │       │   ├── P-Dish-Large.jpg         ✅ Photo
│   │       │   ├── P-Quad-2el.jpg           ✅ Photo
│   │       │   ├── P-CornerReflector.jpg    ✅ Photo
│   │       │   ├── P-Vertical-HF.jpg        ✅ Photo
│   │       │   ├── P-JPole-Copper.jpg       ✅ Photo
│   │       │   └── P-GroundPlane-VHF.jpg    ✅ Photo
│   │       │
│   │       ├── Equipment/                   🔧 EQUIPMENT PHOTOS
│   │       │   └── (empty - photos to be added)
│   │       │
│   │       └── Gallery/                     📸 USER UPLOADS
│   │           └── (empty - user content)
│   │
│   └── data/                                💾 DATA FILES (future)
│       ├── users.json                       ⏳ Not created (localStorage initially)
│       └── measurements.json                ⏳ Not created
│
├── scripts/                                 🐍 UTILITY SCRIPTS
│   ├── antenna_image_downloader.py          ✅ Image download script
│   └── generate_documentation.py            ✅ Doc generator script
│
├── .git/                                    📦 GIT REPOSITORY
│   └── (Git internals)
│
├── .gitignore                               ⏳ To create
└── antenna_comprehensive_guide.md           ✅ Antenna research doc

```

---

## 📋 File Status Legend

- ✅ **Exists and complete** - File is created and ready to use
- ⏳ **Planned/Queued** - File planned but not yet created
- 🔄 **In Progress** - File being actively worked on
- ❌ **Missing (Critical)** - File referenced but doesn't exist, blocking other work
- 📁 **Directory** - Folder structure only

---

## 🎯 Critical Missing Files

### 🔥 BLOCKING WORK

**1. rf-learning-hub/assets/js/main.js**
- **Status:** ❌ MISSING
- **Priority:** CRITICAL
- **Impact:** All interactive features blocked
- **References:** Every HTML page includes this file
- **Assigned:** Claude Code
- **Estimated Time:** 2 hours

**2. .gitignore**
- **Status:** ⏳ Not created
- **Priority:** HIGH
- **Impact:** May commit unnecessary files
- **Needed for:** Git best practices
- **Contents needed:**
  ```
  node_modules/
  .env
  *.log
  .DS_Store
  Thumbs.db
  ```

---

## 📊 File Size Overview

### Documentation (docs/)
- Total: ~150 KB
- Average per file: ~10 KB
- Largest: 03-TODO-MASTER.md (~25 KB)

### Website (rf-learning-hub/)
- HTML: ~120 KB (3 pages)
- CSS: ~45 KB (styles.css)
- JS: 0 KB (main.js missing)
- Images: ~8 MB (24 antenna images)
- **Total:** ~8.3 MB

### Scripts
- Python scripts: ~15 KB

### **Project Total:** ~8.5 MB

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
**Contents:** Task queue, testing logs, implementation notes

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

### `/rf-learning-hub/` - Website Root
**Purpose:** All website files (HTML, CSS, JS, images)  
**Owner:** Claude Code (implementation), Claude (content)  
**Deployed to:** GitHub Pages / Netlify (future)

### `/rf-learning-hub/pages/` - Website Pages
**Purpose:** All HTML page files (except index.html)  
**Naming:** Descriptive, lowercase, hyphenated  
**Count:** 13 total (3 complete, 10 pending)

### `/rf-learning-hub/assets/` - Static Assets
**Purpose:** CSS, JavaScript, images, fonts  
**Subdirectories:** css/, js/, images/, fonts/ (future)  
**Optimization:** Images should be compressed before commit

### `/scripts/` - Utility Scripts
**Purpose:** Automation, build tools, utilities  
**Language:** Python (primary), Bash (if needed)  
**Usage:** Run from project root

---

## 🔍 Finding Files Quickly

### By Type
- **Planning docs:** `docs/01-*.md` through `docs/04-*.md`
- **Technical docs:** `docs/05-*.md` through `docs/10-*.md`
- **Checkpoints:** `docs/*/CHECKPOINT.md`
- **Task lists:** `docs/*/TASKS.md`
- **Website pages:** `rf-learning-hub/pages/*.html`
- **Styles:** `rf-learning-hub/assets/css/*.css`
- **Scripts:** `rf-learning-hub/assets/js/*.js`
- **Images:** `rf-learning-hub/assets/images/*/`

### By Contributor
- **Anthony's files:** `docs/anthony/*`
- **Claude's files:** `docs/claude/*`
- **CC's files:** `docs/claude-code/*`

### By Status
- **Complete:** Look for ✅ in this doc
- **In Progress:** Check checkpoint files
- **Planned:** Look for ⏳ in this doc

---

## 📈 Growth Projections

### Next Week (Oct 15, 2025)
- **Files:** +10 (5 HTML pages, 5 JS files)
- **Size:** +2 MB (images, code)
- **Directories:** +2 (data/, fonts/)

### Next Month (Nov 8, 2025)
- **Files:** +30 (all pages complete, user data)
- **Size:** +10 MB (user uploads, more images)
- **Directories:** +5 (database exports, logs)

### Next Quarter (Jan 8, 2026)
- **Files:** +100 (content modules, quiz data)
- **Size:** +50 MB (video thumbnails, user content)
- **Directories:** +10 (feature expansion)

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
- All files should be tracked except `.env`, logs, and `node_modules/`
- Create `.gitignore` file (see Critical Missing Files section)

**File Size Limits:**
- Keep individual files under 1 MB when possible
- Optimize images before commit
- Consider CDN for very large assets

**Naming Consistency:**
- Always use the established conventions
- Ask if unsure about naming
- Update this doc after any reorganization

**Documentation:**
- Keep this file updated religiously
- Status changes should be reflected immediately
- Include file sizes for large files (>100 KB)

---

**Last Updated:** October 8, 2025 23:45 UTC by Claude  
**Next Update:** When files are created or structure changes  
**Maintenance:** Claude Code owns this file, all update it