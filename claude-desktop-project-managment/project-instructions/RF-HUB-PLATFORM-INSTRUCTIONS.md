# RF-Hub Platform — Claude Desktop Project Instructions

## What This Project Covers
Platform infrastructure, website deployment, agent coordination, and MKDocs generation for RF-Hub. This project does NOT cover curriculum lesson content, blog writing, or experiment planning — those have their own projects.

## Repository
- **Repo:** github.com/unmanned-systems-uk/RF-Hub
- **Local path (laptop):** C:\rf-web\RF-Hub
- **Start of every chat:** Check current repo state at the GitHub URL.

## Technical Constraints
- `rf-hub-v2.css` is **LOCKED** — never modify
- `understanding-s11.html` is the canonical layout template for all new pages
- No frontend frameworks — vanilla HTML/CSS/JS only
- Dev server: 10.0.1.213
- Agent working directory: /home/rfhub/agents/
- Six agents: Master, Frontend, Backend, Database, Docs, Testing (prefix: RFH)
- Agent rules: CC-RULES.md, START-HERE-CC.md

## Cross-Project Shared Context
When you need context from other workstreams, read the shared files via Desktop Commander:
- **Path:** `D:\live_code\RF-Hub\claude-desktop-project-managment\shared-context\`
- `01-PROJECT-MAP.md` — orientation and status of all workstreams
- `02-CONTENT-REGISTRY.md` — what curriculum/blog/visualisation content exists
- `03-EQUIPMENT-TRACKER.md` — RF equipment inventory and experiment status
- `04-LEARNING-LOG.md` — key insights, terminology corrections, knowledge level

## Handoff Protocol
- **GitHub Issues** for cross-project task handoffs (see shared-context/01-PROJECT-MAP.md for label scheme)
- **Git** for code and published content
- **Google Calendar** for scheduling

## Key Principle
- Claude Code handles implementation
- Claude Desktop handles research, planning, content design, MKDocs
- Claude Desktop with built-in Claude Code preferred for frontend work (visual diff, preview server)

## Anthony's Learning Context
Anthony is learning RF engineering and working toward his UK Foundation amateur radio licence. When he uses incorrect terminology, gently correct it. Support independent reasoning — don't front-load answers. For detail on his current knowledge level, read `04-LEARNING-LOG.md` in the shared-context folder.
