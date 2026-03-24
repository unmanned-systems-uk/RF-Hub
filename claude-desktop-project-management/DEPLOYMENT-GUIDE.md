# Workflow System Deployment Guide

> **What this is:** Complete package to restructure RF-Hub workflow across Claude Desktop projects, GitHub Issues, and Google Calendar.
> **Shared context location:** `D:\live_code\RF-Hub\claude-desktop-project-management\`

---

## File Inventory

### shared-context/ (cross-project knowledge layer)
All Claude Desktop projects read these via Desktop Commander:
- `01-PROJECT-MAP.md` — Master orientation doc
- `02-CONTENT-REGISTRY.md` — Maps lessons ↔ blogs ↔ visualisations
- `03-EQUIPMENT-TRACKER.md` — Inventory + experiment status
- `04-LEARNING-LOG.md` — Key insights, terminology, reasoning breakthroughs

### project-instructions/ (slim project instructions + setup guides)
- `RF-HUB-PLATFORM-INSTRUCTIONS.md` — For this project (stripped down)
- `BLOG-CONTENT-INSTRUCTIONS.md` — For new Blog & Content project
- `CURRICULUM-INSTRUCTIONS.md` — Suggested replacement for Curriculum project
- `GITHUB-ISSUES-SETUP.md` — Labels and issue templates
- `CALENDAR-SETUP.md` — Scheduling structure

---

## Step 1: Update Claude Desktop Project Instructions (10 minutes)

### This project (RF-Hub Platform)
Replace current project instructions with content from:
→ `project-instructions/RF-HUB-PLATFORM-INSTRUCTIONS.md`

### New project: Blog & Content
Create a new Claude Desktop project with instructions from:
→ `project-instructions/BLOG-CONTENT-INSTRUCTIONS.md`

### Existing project: RF Learning Curriculum
Consider replacing instructions with content from:
→ `project-instructions/CURRICULUM-INSTRUCTIONS.md`
(Review first — merge with any detail worth preserving.)

## Step 2: GitHub Issue Labels (5 minutes)

Go to github.com/unmanned-systems-uk/RF-Hub → Settings → Labels.
Add labels from `project-instructions/GITHUB-ISSUES-SETUP.md`.
Optionally add issue templates to `.github/ISSUE_TEMPLATE/` in the repo.

## Step 3: Google Calendar (5 minutes)

1. Create a new calendar called "RF-Hub"
2. Block your typical 3-4 weekly session slots
3. Add recurring weekly: "RF: Content Production Budget (3hr max)"
4. Add tentative events for Blog 1.0 outdoor tasks
See `project-instructions/CALENDAR-SETUP.md` for detail.

## Step 4: Gather Missing Info (when convenient)

**From Learning Curriculum project:**
Ask Claude to generate a curriculum progress report. Update `02-CONTENT-REGISTRY.md`.

**From your equipment shelf:**
Confirm items marked ⚠️ in `03-EQUIPMENT-TRACKER.md`.

## Step 5: Git commit

```powershell
cd D:\live_code\RF-Hub\claude-desktop-project-management
git add .
git commit -m 'Add inter-project management system: shared context, project instructions, workflow docs'
git push
```

---

## How It All Connects

```
┌──────────────────────────────────────────────────────────────┐
│  D:\live_code\RF-Hub\claude-desktop-project-management\       │
│  shared-context\                                             │
│                                                              │
│  01-PROJECT-MAP  02-CONTENT-REGISTRY                         │
│  03-EQUIPMENT-TRACKER  04-LEARNING-LOG                       │
│                                                              │
│  ← All Claude Desktop instances read via Desktop Commander → │
└─────────────────────────────┬────────────────────────────────┘
                              │
            ┌─────────────────┼─────────────────┐
            │                 │                 │
      ┌─────▼─────┐    ┌─────▼─────┐    ┌─────▼─────┐
      │ RF-Hub    │    │ Curriculum│    │ Blog &   │
      │ Platform  │    │           │    │ Content  │
      └─────┬─────┘    └─────┬─────┘    └─────┬─────┘
            │                 │                 │
            └────────┬────────┴────────┬────────┘
                     │                 │
             ┌───────▼───────┐ ┌──────▼──────────┐
             │ GitHub Issues │ │ Google Calendar  │
             │ (handoffs)    │ │ (scheduling)     │
             └───────┬───────┘ └─────────────────┘
                     │
             ┌───────▼───────┐
             │  Git Repo     │
             │  (source of   │
             │   truth)      │
             └───────────────┘
```

---

## Day-to-Day Usage

**Starting a new chat:**
Claude reads thin project instructions (~30 lines). If cross-project context is needed, it reads from shared-context/ via Desktop Commander.

**Finishing a session:**
Claude suggests a calendar entry for next session and flags any cross-project handoffs as GitHub Issues.

**When workstreams intersect:**
Claude reads 02-CONTENT-REGISTRY.md for cross-references. GitHub Issues handle task handoffs.

**Outdoor tasks:**
Check weather → confirm calendar event → execute → update shared-context docs.
