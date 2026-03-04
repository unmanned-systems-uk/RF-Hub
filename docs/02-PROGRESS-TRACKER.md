# Progress Tracker

**Living Document - Update After Every Completion**
**Last Updated:** 2026-03-04 by RFH-Docs (audit)
**Audited Against:** Actual filesystem at `/home/rfhub/rf-hub/`

---

## Overall Status: ~35% Complete

```
████████░░░░░░░░░░░░░░░░ 35%
```

**Phase:** RFH-S1 Bootstrap (2026-03-02 to 2026-03-16)
**Next Milestone:** V2 migration complete, antenna curriculum HTML, learning-path.html

---

## Outdated Docs Flagged

> **AUDIT NOTE (2026-03-04):** The previous version of this file was last updated October 2025 and was significantly out of date. The following were wrong or missing:
> - `main.js` listed as missing — it exists
> - Blog post (`understanding-s11.html`) not tracked at all
> - V2 migration progress not reflected
> - October 2025 sprint details still shown
> - `antennas.html` still on `styles.css` (not V2 migrated) — not flagged
> - `03-TODO-MASTER.md` is also October 2025 and needs a full rewrite (flagged below)

---

## Website Pages

### Existing Pages (4 pages on filesystem)

| Page | File | V2 CSS | Status |
|------|------|--------|--------|
| Dashboard | `index.html` | ✅ | ✅ LIVE |
| Spectrum Reference | `pages/frequency-bands.html` | ✅ | ✅ LIVE |
| Antenna Guide | `pages/antennas.html` | ❌ still on styles.css | ✅ LIVE |
| Understanding S11 (blog) | `pages/blog/understanding-s11.html` | unknown | ✅ LIVE |

**V2 Migration Status:** 2/3 main pages done. `antennas.html` still uses `styles.css` — needs migration.

### Pages Not Yet Built

| Page | Priority | Notes |
|------|----------|-------|
| `pages/learning-path.html` | ⚡ HIGH | 26-module curriculum index page |
| `pages/equipment.html` | ⚡ HIGH | Equipment inventory |
| `pages/measurements.html` | ⚡ HIGH | VNA measurement database |
| `pages/calculators.html` | 📌 MEDIUM | RF calculators |
| `pages/notebook.html` | 📌 MEDIUM | Lab notebook |
| `pages/projects.html` | 📌 MEDIUM | Project tracker |
| `pages/gallery.html` | 📌 MEDIUM | Photo gallery |
| `pages/resources.html` | 💡 LOW | External links |
| `pages/videos.html` | 💡 LOW | YouTube embeds |
| `pages/rf-map.html` | 💡 LOW | RF environment map |

---

## Frontend Assets

### CSS

| File | Status |
|------|--------|
| `assets/css/rf-hub-v2.css` | ✅ V2 design system in place |
| `assets/css/styles.css` | ✅ Legacy (kept for antennas.html until migration) |

### JavaScript

| File | Status |
|------|--------|
| `assets/js/main.js` | ✅ Exists |
| `assets/js/api.js` | ✅ Exists |
| `assets/js/auth-ui.js` | ✅ Exists |
| `assets/js/storage.js` | ✅ Exists |

### Images

| Folder | Status |
|--------|--------|
| `assets/images/Antenna/` | ✅ 24 images |
| `assets/images/Equipment/` | ❌ Empty |
| `assets/images/Gallery/` | ❌ Empty |

---

## Backend & Infrastructure

| Component | Status |
|-----------|--------|
| Node.js + Express API | ✅ Complete |
| PostgreSQL schema | ✅ Complete (`schema.sql`) |
| Module seed data (Phase 1) | ✅ Complete (`seed_modules_phase1.sql`) |
| NGINX | ✅ Configured and serving |
| Authentication (JWT) | ✅ Complete |
| API endpoints (35+) | ✅ Complete |

---

## Antenna Curriculum Content

**Pipeline:** MD draft → Reviewed → HTML built
**Location:** `frontend/pages/antenna-curriculum/`

### Unit 1: How Antennas Work (Lessons 1–5)

| # | Lesson | MD File | MD Status | Reviewed | HTML |
|---|--------|---------|-----------|----------|------|
| 1 | EM Radiation | lesson-01-em-radiation.md | 🔄 Draft | ⬜ | ⬜ |
| 2 | How Antennas Radiate | lesson-02-how-antennas-radiate.md | 🔄 Draft | ⬜ | ⬜ |
| 3 | Radiation Patterns | lesson-03-radiation-patterns.md | 🔄 Draft | ⬜ | ⬜ |
| 4 | Antenna Types | lesson-04-antenna-types.md | 🔄 Draft | ⬜ | ⬜ |
| 5 | Polarisation | lesson-05-polarisation.md | 🔄 Draft | ⬜ | ⬜ |

### Unit 2: Characteristics & Measurement (Lessons 6–10)

| # | Lesson | MD File | MD Status | Reviewed | HTML |
|---|--------|---------|-----------|----------|------|
| 6 | Impedance | lesson-06-impedance.md | 🔄 Draft | ⬜ | ⬜ |
| 7 | SWR & Return Loss | lesson-07-swr-and-return-loss.md | 🔄 Draft | ⬜ | ⬜ |
| 8 | Smith Chart | lesson-08-smith-chart.md | 🔄 Draft | ⬜ | ⬜ |
| 9 | Gain, Directivity, Efficiency | lesson-09-gain-directivity-efficiency.md | 🔄 Draft | ⬜ | ⬜ |
| 10 | VNA Measurement Lab | lesson-10-vna-antenna-measurement-lab.md | 🔄 Draft | ⬜ | ⬜ |

### Unit 3: Design & Construction (Lessons 11–15)

| # | Lesson | MD File | MD Status | Reviewed | HTML |
|---|--------|---------|-----------|----------|------|
| 11 | Dipole Deep Dive | lesson-11-dipole-deep-dive.md | 🔄 Draft | ⬜ | ⬜ |
| 12 | Vertical Antennas | lesson-12-vertical-antennas.md | 🔄 Draft | ⬜ | ⬜ |
| 13 | Yagi Antennas | lesson-13-yagi-antennas.md | 🔄 Draft | ⬜ | ⬜ |
| 14 | Broadband Antennas | lesson-14-broadband-antennas.md | 🔄 Draft | ⬜ | ⬜ |
| 15 | Impedance Matching | lesson-15-impedance-matching.md | 🔄 Draft | ⬜ | ⬜ |

### Unit 4: Advanced Systems (Lessons 16–20)

| # | Lesson | MD File | MD Status | Reviewed | HTML |
|---|--------|---------|-----------|----------|------|
| 16 | Antenna Arrays | lesson-16-antenna-arrays.md | 🔄 Draft | ⬜ | ⬜ |
| 17 | Phased Arrays | lesson-17-phased-arrays.md | 🔄 Draft | ⬜ | ⬜ |
| 18 | Direction Finding | lesson-18-direction-finding.md | 🔄 Draft | ⬜ | ⬜ |
| 19 | Practical Phased Array | lesson-19-practical-phased-array.md | ❌ Missing | ⬜ | ⬜ |
| 20 | Software Beamforming | lesson-20-software-beamforming.md | ❌ Missing | ⬜ | ⬜ |

**Summary:** 18/20 MD drafts present. L19 and L20 files are missing. No HTML versions built yet.

---

## Outdated Docs Requiring Rewrite

| Document | Issue | Action |
|----------|-------|--------|
| `docs/03-TODO-MASTER.md` | October 2025 content, wrong sprint, stale tasks | Full rewrite needed |
| `docs/00-READ-THIS-FIRST.md` | References Windows paths (D:\...) | Update to Linux paths |
| `docs/00-START-HERE-CORRECTED.md` | Same Windows path issue | Update or archive |
| `curriculum/antennas/PROGRESS.md` | Separate tracker that duplicates this file | Consider merging or aligning |

---

## Update Log

**2026-03-04 — RFH-Docs (audit)**
- Full filesystem audit: compared tracker against actual `/home/rfhub/rf-hub/` state
- Updated all page statuses, asset statuses, backend status
- Added blog post (understanding-s11.html) which was not tracked
- Flagged V2 migration gap: antennas.html still on styles.css
- Flagged missing curriculum files: L19 and L20 MD files absent
- Flagged outdated docs for rewrite
- Corrected JS file status (main.js was incorrectly listed as missing)
- Removed October 2025 sprint details (now managed in CCPM)
- Reset overall % to ~35% based on actual state

---

**Status Key:**
- ✅ Complete / Live
- 🔄 In Progress / Draft
- ⬜ Not Started
- ❌ Missing / Blocked

**Priority Key:**
- ⚡ HIGH — Core functionality
- 📌 MEDIUM — Important but not urgent
- 💡 LOW — Nice to have
