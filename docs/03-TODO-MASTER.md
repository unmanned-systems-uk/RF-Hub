# Master To-Do List

**Last Updated:** 2026-03-04 by RFH-Docs
**Source of truth:** CCPM at http://10.0.1.210:8000 + filesystem audit
**Repo:** `/home/rfhub/rf-hub/`

> This file is a human-readable summary. For live task tracking, use CCPM.

---

## Legend

**Priority**
- CRITICAL — Blocking other work, do immediately
- HIGH — Core functionality, this sprint
- MEDIUM — Important, next sprint
- LOW — Nice to have, future sprint

**Status**
- DONE — Complete and verified
- ACTIVE — Being worked on now
- NEXT — Ready to start, not yet assigned
- WAITING — Blocked or queued
- KNOWN ISSUE — Flagged problem, needs a task

---

## What Is Done (Sprint 1, as of 2026-03-04)

### Infrastructure

- DONE — PostgreSQL 15 installed and configured
- DONE — Database `rf_learning_hub` created with schema and seed data
- DONE — Node.js 20 LTS installed
- DONE — Backend server migrated to PM2 (auto-restart)
- DONE — NGINX configured to serve frontend and proxy `/api` to backend
- DONE — All backend .env variables set correctly

### Backend API

- DONE — All 35+ API endpoints implemented
- DONE — JWT authentication complete
- DONE — All column/table bugs fixed (17 bugs resolved across routes)
- DONE — API smoke tests passing (health, modules, progress, quiz, badge endpoints)
- DONE — Frontend `index.html` wired to live API (live stats rendering)

### Frontend — V2 Migration

The V2 design system uses `rf-hub-v2.css`. Old pages use `styles.css`.

- DONE — `index.html` migrated to V2, validated end-to-end via NGINX
- DONE — `pages/frequency-bands.html` migrated to V2, validated end-to-end via NGINX

### Docs

- DONE — `docs/02-PROGRESS-TRACKER.md` audited and rewritten (2026-03-04)

---

## Active Right Now

| Task | Priority | Owner |
|------|----------|-------|
| `antennas.html` V2 migration (in testing) | CRITICAL | RFH-Frontend / RFH-Testing |
| Rewrite `03-TODO-MASTER.md` | HIGH | RFH-Docs |

---

## Next Up — HIGH Priority

These are ready to start once active tasks clear.

### 1. Verify database connectivity

**What:** Confirm backend can read/write to PostgreSQL correctly.
Check schema integrity and that seed data is queryable via API.

**Location:** `/home/rfhub/rf-hub/backend/`
**CCPM task:** Assigned to RFH-Database

---

### 2. Build `pages/learning-path.html`

**What:** The 26-module curriculum overview page.
Users should see all modules, their status, and be able to navigate to lessons.

**Requirements:**
- List all 4 units and 20 antenna curriculum lessons
- Show completion status per lesson (from API)
- Links to individual lesson HTML pages (once built)
- Mobile responsive
- V2 design system (`rf-hub-v2.css`)

**Dependencies:** Backend API working, V2 CSS in place

---

### 3. Build antenna curriculum HTML pages

**What:** Convert the 18 existing markdown lesson drafts into HTML lesson pages.

**Location of MD drafts:** `frontend/pages/antenna-curriculum/`
**Pipeline:** MD draft reviewed by Anthony → converted to HTML by RFH-Frontend

**Unit 1 (no equipment needed — start here):**
- lesson-01-em-radiation.html
- lesson-02-how-antennas-radiate.html
- lesson-03-radiation-patterns.html
- lesson-04-antenna-types.html
- lesson-05-polarisation.html

**Unit 2:**
- lesson-06 through lesson-10 (all MD drafts exist)

**Unit 3:**
- lesson-11 through lesson-15 (all MD drafts exist)

**Unit 4:**
- lesson-16 through lesson-18 (MD drafts exist)
- lesson-19 and lesson-20 — MD drafts MISSING (see Known Issues)

---

## Medium Priority — Next Sprint

### 4. `pages/equipment.html` — Equipment Inventory

**What:** Full inventory of RF equipment with specs, photos, and VNA measurement links.
**Equipment:** Rigol RSA5065N, HackRF Pro, RTL-SDR units, antennas
**Content:** Anthony to supply VNA measurements and photos
**Images needed:** `assets/images/Equipment/` is currently empty

---

### 5. `pages/measurements.html` — VNA Measurement Database

**What:** Upload, view, and compare VNA measurements (S11, S21, Smith chart).
**Features:** CSV upload, charts, filter by antenna/frequency, export
**Dependencies:** Backend measurements API endpoints, Anthony's VNA data

---

### 6. `pages/calculators.html` — RF Calculators

**What:** Interactive calculators for common RF tasks.
**Calculators to include:**
- Dipole length (f → length)
- Wavelength / frequency conversion
- SWR / return loss
- Link budget
- dB / power / voltage conversions
- Impedance matching (basic)

---

### 7. `pages/notebook.html` — Lab Notebook

**What:** Rich text entries with dates, tags, search, and photo uploads.
**Dependencies:** Photo upload backend implementation

---

### 8. `pages/projects.html` — Project Tracker

**What:** Track antenna builds with construction logs, photos, and VNA results.

---

## Low Priority — Future Sprint

- `pages/gallery.html` — Photo gallery with lightbox
- `pages/resources.html` — External links, books, software tools
- `pages/videos.html` — YouTube playlist embeds
- `pages/rf-map.html` — RF environment heatmap (complex, needs research)

---

## Known Issues

| Issue | Impact | Action Needed |
|-------|--------|---------------|
| Lesson 19 MD draft missing | Unit 4 incomplete | RFH-Docs to write `lesson-19-practical-phased-array.md` |
| Lesson 20 MD draft missing | Unit 4 incomplete | RFH-Docs to write `lesson-20-software-beamforming.md` |
| `antennas.html` still on `styles.css` | Not V2 compliant | RFH-Frontend task active |
| `docs/00-READ-THIS-FIRST.md` has Windows paths | Misleading | Update to Linux paths (`/home/rfhub/rf-hub/`) |
| `docs/00-START-HERE-CORRECTED.md` has Windows paths | Misleading | Update to Linux paths or archive |
| `assets/images/Equipment/` empty | Equipment page blocked | Anthony to supply photos |
| Blog post `understanding-s11.html` has no index entry | Undiscoverable | Add to navigation when blog section is built |

---

## File Paths Reference

```
/home/rfhub/rf-hub/          — Repository root
  frontend/
    index.html               — Dashboard (V2, live)
    pages/
      antennas.html          — Antenna guide (V2 migration active)
      frequency-bands.html   — Spectrum reference (V2, live)
      blog/
        understanding-s11.html  — Blog post (live)
      antenna-curriculum/
        unit-1-how-antennas-work/    — Lessons 1–5 MD drafts
        unit-2-characteristics-and-measurement/  — Lessons 6–10 MD drafts
        unit-3-design-and-construction/          — Lessons 11–15 MD drafts
        unit-4-advanced-systems/                 — Lessons 16–18 MD drafts (19+20 missing)
    assets/
      css/rf-hub-v2.css      — V2 design system (use this)
      css/styles.css         — Legacy (phase out)
      js/main.js             — Main JS
      js/api.js              — API client
      js/auth-ui.js          — Auth UI
      js/storage.js          — Storage helpers
  backend/
    server.js                — Express server (running via PM2)
    routes/                  — API routes
    models/                  — Data models
  docs/                      — This directory
```

---

## Update Log

**2026-03-04 — RFH-Docs**
- Full rewrite. Previous file was from October 2025 and entirely outdated.
- Based on: CCPM completed task history, filesystem audit, 02-PROGRESS-TRACKER.md
