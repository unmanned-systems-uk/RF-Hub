# RF-Hub Project Map

> **Purpose:** Single source of truth for all RF-Hub workstreams. All Claude Desktop projects should read this file via Desktop Commander at startup when cross-project context is needed.
>
> **Location:** D:\live_code\RF-Hub\claude-desktop-project-management\shared-context\
> **Last updated:** 2026-03-24

---

## Workstreams Overview

### 1. RF-Hub Platform (Website Infrastructure)
- **What:** Node.js/Express website with interactive RF learning content, PostgreSQL backend
- **Repo:** github.com/unmanned-systems-uk/RF-Hub
- **Claude Desktop Project:** RF-Hub (Platform & Infrastructure)
- **Claude Code Agents:** Master, Frontend, Backend, Database, Docs, Testing (prefix: RFH)
- **Key constraints:**
  - `rf-hub-v2.css` is LOCKED — do not modify
  - `understanding-s11.html` is the canonical layout template
  - No frontend frameworks — vanilla HTML/CSS/JS only
  - Dev server: 10.0.1.213
  - Agent working directory: /home/rfhub/agents/
- **Status:** Active development. Core pages built. Agent system operational.
- **MKDocs:** Generated in Claude Desktop for project documentation

### 2. RF Learning Curriculum
- **What:** Structured 4-unit, 20-lesson antenna/RF curriculum with interactive visualisations
- **Repo:** Same repo (frontend/lessons/ area)
- **Claude Desktop Project:** RF Learning Curriculum (separate project)
- **Key files:**
  - Interactive vis: em-radiation.html, em-animator-2.html, tx-rx-complete.html, radiation-3d-v4/v5/v6
  - Uses Three.js for 3D, HTML5 Canvas 2D for instruments
- **Status:** Curriculum structure designed. Visualisations built as standalone demos. Integration into structured lessons in progress.
- **Dependency:** Curriculum map and progress tracker maintained in the Curriculum project — see Content Registry for cross-references.

### 3. Blog & Content (Blogs + Unsquelched)
- **What:** Technical blog posts for RF-Hub, Unsquelched YouTube/podcast channel, meta-content about learning RF with AI
- **Repo:** Same repo (docs/blog-*/ for planning; published content goes to frontend)
- **Claude Desktop Project:** Blog & Content (separate project)
- **Active work:**
  - Blog 1.0: "Remote End-Fed Wire Antennas for SDR Reception" — see Content Registry
  - Unsquelched: Intro script drafted, NotebookLM for production
  - Meta-blog series: "Learning RF from DC-to-Light with Claude AI" — planned
- **Key principle:** Experimentation drives content, not the reverse. 3-hour weekly content production cap.
- **Status:** Blog 1.0 in progress (Points 1-3 drafted, Point 4 next).

### 4. RF Lab (Experiments & Measurements)
- **What:** Hands-on experiments feeding both curriculum and blog content
- **Feeds into:** Curriculum (lesson content) + Blog (writeups) + Unsquelched (video)
- **Not a separate Claude project** — experiments are discussed in whichever project they feed
- **Active/planned experiments:**
  - S21 measurement series (RSA5065N vs NanoVNA) → Curriculum Lesson 10 + Blog
  - Remote SDR enclosure (RPi + PoE) → Blog + potential curriculum module
  - NanoVNA model comparison → pending model number confirmation
- **Equipment:** See Equipment & Experiment Tracker (03-EQUIPMENT-TRACKER.md)

---

## Cross-Project Handoff Protocol

### GitHub Issues = the bridge between projects
- When a blog conversation surfaces a curriculum gap → raise GitHub Issue, label: `curriculum`, `from-blog`
- When curriculum work produces bloggable material → raise Issue, label: `blog-content`, `from-curriculum`
- When an experiment needs writeup → raise Issue, label: `experiment`, target label (`blog` or `curriculum`)
- All issues tagged with source project for traceability

### Shared Context Files = cross-project knowledge layer
All Claude Desktop projects read these via Desktop Commander:
- **Location:** `D:\live_code\RF-Hub\claude-desktop-project-management\shared-context\`
- **01-PROJECT-MAP.md** (this file) — orientation and status
- **02-CONTENT-REGISTRY.md** — what exists, what links to what
- **03-EQUIPMENT-TRACKER.md** — what we own, what we've tested
- **04-LEARNING-LOG.md** — key insights, terminology corrections, reasoning breakthroughs

### Git = source of truth for code and published content
- Code, HTML pages, committed blog drafts
- Blog planning docs (docs/blog-*/) stay in git for version control
- CC-RULES.md and START-HERE-CC.md govern agent behaviour

### Google Calendar = scheduling
- 3-4 sessions per week (RF hobby time)
- Weather-dependent outdoor tasks flagged
- 3-hour weekly content production cap tracked

---

## Quick Reference: Where Does X Live?

| Thing | Location |
|-------|----------|
| Website code | Git repo (frontend/, backend/) |
| CSS rules | rf-hub-v2.css (LOCKED) |
| Lesson template | understanding-s11.html |
| Blog planning docs | Git repo (docs/blog-*/) |
| Curriculum structure | Curriculum Claude project + shared-context/02-CONTENT-REGISTRY.md |
| Project status | This file (01-PROJECT-MAP.md) |
| Cross-references | 02-CONTENT-REGISTRY.md |
| Equipment inventory | 03-EQUIPMENT-TRACKER.md |
| Key learnings | 04-LEARNING-LOG.md |
| Task handoffs | GitHub Issues |
| Agent rules | CC-RULES.md, START-HERE-CC.md (Git) |
| Schedule | Google Calendar |
| Project instructions | D:\live_code\RF-Hub\claude-desktop-project-management\project-instructions\ |
