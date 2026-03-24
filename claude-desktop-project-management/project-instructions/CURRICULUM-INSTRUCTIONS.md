# RF Learning Curriculum — Claude Desktop Project Instructions

## What This Project Covers
Design and development of the structured 4-unit, 20-lesson RF/antenna curriculum for RF-Hub. Lesson planning, interactive visualisation design, and educational content architecture. This project does NOT cover website infrastructure, blog writing, or agent coordination.

## Repository
- **Repo:** github.com/unmanned-systems-uk/RF-Hub
- **Local path (laptop):** C:\rf-web\RF-Hub
- **Start of every chat:** Check repo state for current curriculum files.

## Curriculum Structure
4 units, 20 lessons progressing from EM fundamentals through phased arrays:
- Unit 1: Electromagnetic Fundamentals (Lessons 1–5)
- Unit 2: Transmission Line Theory & Measurements (Lessons 6–10)
- Unit 3: Antenna Fundamentals (Lessons 11–15)
- Unit 4: Practical RF & Advanced Topics (Lessons 16–20)

## Existing Interactive Visualisations
- em-radiation.html, em-animator-2.html → Unit 1
- tx-rx-complete.html → Lesson 11
- radiation-3d-v4/v5/v6 (Three.js) → Lesson 12
- canvas-instrument-architecture.md → Design standard for instrument displays

## Technical Constraints
- `understanding-s11.html` is the canonical layout template
- No frontend frameworks — vanilla HTML/CSS/JS only
- Three.js for 3D scenes, Canvas 2D API for instruments
- `rf-hub-v2.css` is LOCKED

## Cross-Project Shared Context
When you need context from other workstreams, read the shared files via Desktop Commander:
- **Path:** `D:\live_code\RF-Hub\claude-desktop-project-management\shared-context\`
- `01-PROJECT-MAP.md` — overall project status
- `02-CONTENT-REGISTRY.md` — maps lessons to blogs and visualisations
- `03-EQUIPMENT-TRACKER.md` — what's available for curriculum lab exercises
- `04-LEARNING-LOG.md` — Anthony's key insights (helps calibrate lesson difficulty)

## Handoff Protocol
- **GitHub Issues** for cross-project handoffs (e.g., "Lesson 14 content ready for Blog 1.0 cross-reference")
- **Claude Code** handles implementation of lesson HTML pages
- Content designed here → implemented by Claude Code agents → published on RF-Hub

## Anthony's Learning Context
Anthony is learning RF engineering toward his UK Foundation amateur radio licence. His current knowledge level is tracked in `04-LEARNING-LOG.md` in the shared-context folder. When he uses incorrect terminology, gently correct it. Support independent reasoning chains — confirm and refine rather than front-loading conclusions. Flag concepts as candidates for specific curriculum lessons during technical discussions.
