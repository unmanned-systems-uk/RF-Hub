# RF-Hub — Claude Code Project Instructions

## What This Is
RF-Hub is an interactive RF engineering learning platform. Static HTML/CSS/JS frontend (no framework), Node.js + PostgreSQL backend (not yet wired up).

## Tech Stack
- Frontend: Vanilla HTML, CSS, JavaScript (NO frameworks)
- Styling: Custom CSS in `frontend/assets/css/rf-hub-v2.css` — **DO NOT MODIFY THIS FILE**
- Fonts: Google Fonts (DM Serif Display, IBM Plex Sans, IBM Plex Mono)
- Backend: Node.js, Express, PostgreSQL (in `backend/` — do not touch during frontend tasks)

## Critical Files — READ BEFORE CODING
1. `docs/12-VISUAL-DESIGN-GUIDE.md` — **Exact HTML patterns to copy. Follow literally.**
2. `docs/11-V2-STYLING-SPEC.md` — Design tokens, colour palette, all component classes
3. `frontend/pages/blog/understanding-s11.html` — **Reference template. DO NOT MODIFY.**
4. `docs/CCPM-TASK-V2-MIGRATION.md` — Full task list with acceptance criteria

## Project Structure
```
frontend/
├── index.html                    # Dashboard (NEEDS V2 restyle)
├── assets/
│   ├── css/
│   │   ├── rf-hub-v2.css        # 🔒 LOCKED shared stylesheet
│   │   └── styles.css           # ❌ OLD — delete after migration
│   ├── js/                      # DO NOT CHANGE
│   └── images/
│       ├── Antenna/             # 26 existing images — DO NOT RENAME
│       └── blog/                # Blog post images go here
├── pages/
│   ├── frequency-bands.html     # NEEDS V2 restyle
│   ├── antennas.html            # NEEDS V2 restyle
│   └── blog/
│       ├── understanding-s11.html  # 🔒 REFERENCE TEMPLATE
│       ├── lte-antenna-test.html   # Convert from DOCX
│       └── vna-calibration.html    # Convert from DOCX
resources/                        # Source DOCX files and interactive HTML pages
backend/                          # DO NOT TOUCH during frontend work
docs/                             # Project documentation
```

## Rules
- NEVER modify `rf-hub-v2.css` — it is locked
- NEVER modify `understanding-s11.html` — it is the reference
- NEVER use inline styles for colours, fonts, or spacing — use CSS classes
- NEVER add frameworks (Tailwind, Bootstrap, etc.)
- EVERY page must have: Google Fonts link, rf-hub-v2.css, .site-nav, .site-footer
- EVERY image must be wrapped in `.figure` with `alt` text and `.figure-caption`
- EVERY table must be wrapped in `.table-wrapper`
- Background is ALWAYS dark (#0a0e1a) — never white, never black

## How to Verify Changes
Open the HTML file in a browser and check:
1. Dark navy background with subtle grid pattern visible
2. Serif font on headings (DM Serif Display)
3. Sans-serif on body (IBM Plex Sans, weight 300)
4. Monospace on code/labels (IBM Plex Mono)
5. Purple (#a78bfa) as primary accent
6. Sticky nav bar at top
7. Footer at bottom with "73 and good DX! 📡"
8. No white/light backgrounds anywhere
9. Responsive at 1200px, 768px, 480px
