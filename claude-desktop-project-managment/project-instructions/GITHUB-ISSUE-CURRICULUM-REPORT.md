# GitHub Issue: Generate Curriculum Progress Report for Cross-Project Registry

---

## Issue Details

**Title:** `Generate curriculum progress report for shared-context registry`

**Labels:** `curriculum`, `from-platform`, `handoff`, `claude-code`

**Assignee:** RFH-Master agent

---

## Issue Body (copy below into GitHub)

```markdown
## Task

Generate a consolidated curriculum progress report by reading existing project
documentation and writing the output to the inter-project management system.

## What to read

1. `curriculum/antennas/CURRICULUM-STATUS.md` — unit/lesson status table
2. `curriculum/antennas/PROGRESS.md` — detailed progress tracker with session log
3. `curriculum/antennas/unit-1/UNIT-1-PLANS.md` — Unit 1 lesson plans (if detail needed)
4. `frontend/interactives/CONFIG.md` — interactive file specs and per-lesson usage
5. `frontend/pages/antenna-curriculum/` — check which HTML pages exist vs skeleton

## What to write

**Output file:**
`claude-desktop-project-managment/shared-context/02-CONTENT-REGISTRY.md`

**Overwrite the entire file.** The current version contains placeholder data. Your output
replaces it with accurate data from the source files above.

## Output format

The file must contain these sections with accurate data:

### 1. Curriculum Lessons table
For each of the 20 lessons across 4 units, include:
- Lesson number and title (from CURRICULUM-STATUS.md)
- MD Draft status: ⬜ Not started | 📝 Draft | ✅ Complete
- HTML status: 🔧 Skeleton | ✅ Built (from MD) | ⬜ Not started
- Reviewed status
- Which interactive files are used (from PROGRESS.md interactive table and CONFIG.md)
- Related blog post (Blog 1.0 links to EFHW/matching content — check curriculum/Blogs/)
- Any notes (seeds planted, dependencies, planned interactives)

### 2. Interactive Visualisations table
List every file in `frontend/interactives/`:
- Filename
- Description (from CONFIG.md and PROGRESS.md)
- Which lessons use it (from CONFIG.md per-lesson usage table)
- Status: ✅ Built | 📋 Planned

### 3. Blog Posts section
- Blog 1.0 status from `curriculum/Blogs/phase2-lwhf160-checklist.md`
- Cross-links to curriculum lessons (Lesson 14 broadband antennas, Lesson 15 impedance matching)

### 4. Other RF-Hub Pages
List non-curriculum pages from `frontend/pages/` with status.

### 5. Capstone Projects
From CURRICULUM-STATUS.md — one per unit, all currently not started.

## Important

- Use ONLY data from the source files. Do not invent or assume.
- Keep the file header format matching other shared-context docs:
  ```
  # Content Registry
  > **Purpose:** Maps all content across RF-Hub...
  > **Location:** D:\live_code\RF-Hub\claude-desktop-project-managment\shared-context\
  > **Last updated:** [today's date]
  ```
- The status key must match what's used in CURRICULUM-STATUS.md and PROGRESS.md
- If any data is ambiguous or missing, note it with ⚠️ rather than guessing

## Priority

Medium — this unblocks the Blog & Content project from having accurate cross-references.
```

---

## Agent Prompt

If using Claude Code directly rather than a GitHub Issue, use this prompt:

```
Read the following source files:
1. curriculum/antennas/CURRICULUM-STATUS.md
2. curriculum/antennas/PROGRESS.md  
3. frontend/interactives/CONFIG.md
4. List frontend/interactives/ directory
5. List frontend/pages/antenna-curriculum/ directory (all units)
6. curriculum/Blogs/phase2-lwhf160-checklist.md

Then generate a consolidated Content Registry and write it to:
claude-desktop-project-managment/shared-context/02-CONTENT-REGISTRY.md

The file must accurately map:
- All 20 curriculum lessons with MD draft status, HTML build status, review status, linked interactives, and related blog posts
- All interactive visualisation files with descriptions, lesson usage, and build status  
- Blog post status and curriculum cross-links
- Non-curriculum RF-Hub pages from frontend/pages/
- Capstone project status per unit

Use ONLY data from the source files. Mark anything ambiguous with ⚠️.
Keep the shared-context file header format (see other files in that directory for style).
```
