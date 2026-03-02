# CCPM Project Discovery — RF-Hub

**Version:** 1.0  
**Date:** 2026-03-02  
**Completed by:** Anthony (owner) + Claude (research/planning)  
**Status:** ✅ Complete — Ready for CCPM onboarding

---

## Phase 1: Project Identity (Q1-Q5)

**Q1. Project Name**

```
RF-Hub
```

**Q2. Project Slug**

```
rf-hub
```

**Q3. Agent Prefix**

```
RFH
```

**Q4. Short Description**

```
Interactive RF engineering education platform — the world's premier destination for radio frequency learning, from fundamentals through advanced topics like phased arrays and SDR.
```

**Q5. Detailed Description**

```
RF-Hub is a comprehensive learning management system for radio frequency engineering education.
It consolidates ~£10,100 of professional RF measurement equipment (Rigol RSA5065N spectrum
analyzer/VNA, HackRF Pro, RTL-SDR units, various antennas) into a structured 26-module
curriculum spanning six phases from basic theory through advanced specializations.

The platform serves dual purposes:
1. Documenting Anthony's own RF learning journey toward his Foundation amateur radio license
2. Creating interactive educational resources for the broader amateur radio and RF engineering community

Key features include interactive visualizations, RF calculators, equipment inventory tracking,
VNA measurement database, structured curriculum with progress tracking, and a quiz system.

A companion YouTube channel and podcast ("Unsquelched") is planned, using an AI-transparent
approach that openly credits AI collaboration in content production.
```

---

## Phase 2: Existing Documentation (Q6-Q9)

**Q6. Existing Design Documentation**

```
Yes — extensive. 17+ structured documentation files in docs/ directory, plus Google Drive integration.
```

**Q7. Documentation Location**

```
Primary: D:\live_code\RF-Hub\docs\
GitHub: https://github.com/unmanned-systems-uk/RF-Hub.git
Google Drive: Integrated (project documentation mirror)

Key files:
- docs/01-PROJECT-OVERVIEW.md — Mission, vision, goals, monetization strategy
- docs/02-PROGRESS-TRACKER.md — Living status dashboard
- docs/03-TODO-MASTER.md — Prioritized task backlog
- docs/05-FILE-STRUCTURE.md — Complete directory tree
- docs/06-STYLING-GUIDE.md — CSS design system
- docs/07-DATABASE-SCHEMA.md — PostgreSQL schema & 33 API endpoints
- docs/08-DEPLOYMENT-GUIDE.md — Hosting & CI/CD plans
- docs/11-V2-STYLING-SPEC.md — V2 design tokens, colour palette, component classes
- docs/12-VISUAL-DESIGN-GUIDE.md — Exact HTML patterns for page construction
- CLAUDE.md — Claude Code project instructions (root)
```

**Q8. Specifications & Diagrams**

```
- Database schema: 8 tables fully specified (docs/07-DATABASE-SCHEMA.md)
- API specification: 33 endpoints across auth, modules, progress, quizzes, badges, calculations
- Visual design system: Complete V2 spec with dark theme, design tokens, component library
- File structure diagram: Full directory tree maintained in docs/05-FILE-STRUCTURE.md
- Curriculum structure: 26 modules across 6 phases defined
- No formal architecture diagrams yet — would benefit from system architecture and data flow diagrams
```

**Q9. Documentation Quality**

```
Documentation is comprehensive but showing age — most files last updated October 2025.
Some inconsistencies between docs (e.g., file structure doc references old paths, deployment
guide still in planning phase). The V2 migration task list (CCPM-TASK-V2-MIGRATION.md) and
visual design guides (docs 11 & 12) are the most current and actionable.

Gaps:
- No system architecture diagram
- No API documentation beyond the schema doc
- Deployment guide incomplete
- Progress tracker likely outdated
- Some docs reference old directory structure (D:\SDR\RF Web Hub\) vs current (D:\live_code\RF-Hub\)
```

---

## Phase 3: Technical Stack (Q10-Q14)

**Q10. Primary Programming Language(s)**

```
- JavaScript (frontend + backend)
- HTML/CSS (frontend)
- SQL (database)
```

**Q11. Framework(s)**

```
- Backend: Node.js + Express 4.x
- Frontend: Vanilla HTML/CSS/JS (NO frameworks — intentional design decision)
- CSS: Custom design system (rf-hub-v2.css) — no CSS frameworks
- Fonts: Google Fonts (DM Serif Display, IBM Plex Sans, IBM Plex Mono)
```

**Q12. Database**

```
PostgreSQL 15+ (chosen over Firebase for ACID compliance, relationship management, JSON support)
```

**Q13. Build System**

```
None currently — static files served directly.
Future: Potentially a simple build step for asset optimization.
NGINX reverse proxy configuration exists (nginx-rf-learning-hub.conf).
```

**Q14. Package Manager(s)**

```
- npm (backend Node.js dependencies)
- apt (system packages on Ubuntu deployment target)
```

---

## Phase 4: System Type (Q15-Q18)

**Q15. System Type**

```
- [x] Web Application
- [x] Server/Backend

Hybrid web application: static frontend served by NGINX + Node.js REST API backend + PostgreSQL database.
```

**Q16. Real-Time Requirements**

```
No — standard request/response web application. No websocket, streaming, or real-time
requirements currently. Future community features (forums, live Q&A) may introduce real-time needs.
```

**Q17. Safety-Critical**

```
No — educational platform. No certification requirements.
Standard web security practices apply (JWT auth, bcrypt passwords, HTTPS, input sanitization).
```

**Q18. Performance Requirements**

```
No specific hard requirements at this stage. General targets:
- Page load: < 3 seconds
- API response: < 500ms
- Support: Initially 100 concurrent users, scaling to 5,000+ active learners by year 1
- Static assets: CDN-served for global access
- Mobile-responsive design required
```

---

## Phase 5: Hardware Target (Q19-Q21)

**Q19. Target Platform(s)**

```
- Development VM: Ubuntu Linux at 10.0.1.213 (CCPM agents + backend dev)
- Frontend deployment: GitHub Pages (static) or Netlify (MVP target)
- Future: Cloud hosting (AWS/GCP) as user base grows
```

**Q20. Hardware Interfaces**

```
None — pure web application. No GPIO, USB, or hardware interfaces.

Note: RF test equipment (Rigol RSA5065N, HackRF, RTL-SDR) is used for content creation
(measurements, screenshots, data) but does not interface with the platform directly.
Anthony's Windows PC is used for equipment interfacing and content creation, not development.
```

**Q21. Hardware Constraints**

```
None beyond standard web hosting requirements.
```

---

## Phase 6: Development Environment (Q22-Q24)

**Q22. Development Environment Type**

```
- [x] Server/VM — Development agents run on dedicated Ubuntu VM
```

**Q23. Development Host Details**

```
Development VM:
  - OS: Ubuntu Linux
  - IP: 10.0.1.213
  - Access: SSH
  - Purpose: All CCPM development agents live here
  - Agent base path: /home/rfhub/agents/
  - Git: GitHub (unmanned-systems-uk/RF-Hub)
  - Tools: Claude Code (AI-assisted development), Node.js, npm, PostgreSQL client

Backend Development Server:
  - OS: Ubuntu Linux
  - IP: 10.0.1.213
  - Services: Node.js, PostgreSQL, NGINX
  - Purpose: Backend runtime and database hosting for development
```

**Q24. Agent Working Directory**

```
/home/rfhub/agents/
```

---

## Phase 7: Infrastructure (Q25-Q28)

**Q25. Deployment Target**

```
Development: NGINX serving static frontend + reverse proxy to Node.js backend on Ubuntu VM (10.0.1.213)
MVP target: GitHub Pages (frontend) + cloud-hosted backend
Future: Netlify or similar CDN for frontend, containerized backend
```

**Q26. CI/CD Requirements**

```
GitHub-based workflow:
- Git push to main triggers deployment (future)
- No CI/CD pipeline configured yet
- GitHub Actions planned for automated testing and deployment
```

**Q27. Monitoring Needs**

```
Minimal at this stage:
- Basic server health checks
- NGINX access/error logs
- Node.js application logging
- Future: Error tracking (Sentry or similar), analytics
```

**Q28. Logging Approach**

```
- Backend: Console logging (stdout) via Node.js
- NGINX: Standard access and error logs
- Future: Structured JSON logging for production
```

---

## Phase 8: Agent Selection (Q29)

**Q29. Required Agent Roles**

```
Selected agents:

- [x] Master (RFH-Master) — Sprint coordination, task assignment — REQUIRED
- [x] Frontend (RFH-Frontend) — HTML/CSS/JS page development, V2 migration
- [x] Backend (RFH-Backend) — Node.js API, Express routes, middleware
- [x] Database (RFH-Database) — PostgreSQL schema, migrations, seed data, queries
- [x] Docs (RFH-Docs) — Documentation maintenance, curriculum content writing
- [x] Testing (RFH-Testing) — API endpoint testing, frontend validation — RECOMMENDED

Not needed at this stage:
- [ ] Planner — Claude (chat) handles planning
- [ ] Designer — Design system already defined in docs 11 & 12
- [ ] Infrastructure — Simple deployment, not enough complexity yet
- [ ] MCP — No MCP server tools required
- [ ] Integration — No external API integrations yet
```

---

## Phase 9: Integration & Security (Q31-Q37)

**Q31. GitHub Repository**

```
Existing: https://github.com/unmanned-systems-uk/RF-Hub.git
```

**Q32. External Integrations**

```
None currently.
Future possibilities:
- Google Fonts CDN (already used)
- YouTube API (for embedded video library)
- CellMapper / tower database APIs (for RF learning content)
- Amateur radio licensing APIs
- Satellite pass prediction APIs (future module)
```

**Q33. Compliance & Security**

```
- GDPR compliance required (user accounts with personal data, UK-based)
- Standard web security: HTTPS, JWT authentication, bcrypt password hashing
- Input sanitization on all API endpoints
- No payment processing yet (freemium model planned for year 2)
```

**Q34. HomeLab Infrastructure Access**

```
Yes — development VM at 10.0.1.213 is on Anthony's home network.
SSH access required for deployment and server management.
```

**Q35. External API Credentials**

```
Not currently. Future:
- YouTube Data API key (video integration)
- Potentially email service (SendGrid/similar for user notifications)
```

**Q36. Database Credentials**

```
Yes — PostgreSQL credentials required:
- Database: rf_learning_hub
- Host: 10.0.1.213 (or localhost on the VM)
- Port: 5432 (default)
- Credentials: Stored in backend/.env (not committed to git)
```

**Q37. Agent-Specific Tools**

```
- RFH-Frontend: Access to rf-hub-v2.css (LOCKED — read-only reference), docs/12-VISUAL-DESIGN-GUIDE.md
- RFH-Backend: Node.js runtime, npm, PostgreSQL client tools
- RFH-Database: psql CLI, access to schema.sql and seed files
- RFH-Docs: Access to curriculum/ directory and docs/ directory
- All agents: Must read CLAUDE.md at project root before any work
```

---

## Phase 10: Final Questions (Q38)

**Q38. Additional Context**

```
Key project principles:
1. AI-transparent development — Claude and Claude Code are credited collaborators, not hidden tools
2. Hands-on learning over theory — practical RF measurements drive curriculum content
3. No frontend frameworks — intentional decision for simplicity and educational value
4. rf-hub-v2.css is LOCKED — agents must not modify the shared stylesheet
5. understanding-s11.html is the reference template — all new pages must match its patterns
6. Anthony is dyslexic — provide clear formatting, writing assistance when needed
7. Anthony is working toward Foundation amateur radio license — correct RF terminology gently

Current priorities:
- V2 styling migration (CCPM-TASK-V2-MIGRATION.md has the full task list)
- Resolving frontend rendering issues
- Converting standalone interactive visualizations into proper curriculum lessons
- Multi-page architecture refinement for GitHub Pages deployment

Known technical debt:
- Backend API exists but is not wired to frontend yet
- Some docs reference old directory paths (D:\SDR\RF Web Hub\)
- Progress tracker and TODO likely need refresh
- No automated testing in place
- No .gitignore file (one should be created)

Team structure:
- Anthony: Project owner, RF learning, equipment testing, decisions
- Claude (chat/Sonnet): Research, planning, technical guidance, curriculum content
- Claude Code: Implementation, coding, file operations, testing
```

---

## Agent Configuration (Q30 — Detailed Configuration)

### Agent: RFH-Master

**MCP Tools Needed:**
- [x] Default CCPM messaging tools (check-inbox, signal-completion)
- [ ] HomeLab infrastructure tools
- [ ] Database access tools
- [x] GitHub integration tools
- [ ] Custom tools

**Plugins Needed:**
- [x] context7 (documentation lookup)
- [x] GitHub plugin
- [ ] Custom plugins

**Context Level:**
- [x] Full (~50%)

**Custom Notes:**
```
Must read CLAUDE.md before assigning any tasks. Coordinates between Frontend, Backend,
Database, Docs, and Testing agents. References docs/03-TODO-MASTER.md and
docs/CCPM-TASK-V2-MIGRATION.md for task prioritization.
```

---

### Agent: RFH-Frontend

**MCP Tools Needed:**
- [x] Default CCPM messaging tools (check-inbox, signal-completion)
- [ ] HomeLab infrastructure tools
- [ ] Database access tools
- [x] GitHub integration tools
- [ ] Custom tools

**Plugins Needed:**
- [x] context7 (documentation lookup)
- [x] GitHub plugin
- [ ] Custom plugins

**Context Level:**
- [ ] Lean (~15%)

**Custom Notes:**
```
CRITICAL: Must read docs/12-VISUAL-DESIGN-GUIDE.md and docs/11-V2-STYLING-SPEC.md before
any work. Must NOT modify frontend/assets/css/rf-hub-v2.css. Must use
frontend/pages/blog/understanding-s11.html as reference template for all new pages.
Vanilla JS only — no frameworks. Dark theme design system with purple/cyan gradient accent.
```

---

### Agent: RFH-Backend

**MCP Tools Needed:**
- [x] Default CCPM messaging tools (check-inbox, signal-completion)
- [ ] HomeLab infrastructure tools
- [x] Database access tools
- [x] GitHub integration tools
- [ ] Custom tools

**Plugins Needed:**
- [x] context7 (documentation lookup)
- [x] GitHub plugin
- [ ] Custom plugins

**Context Level:**
- [ ] Lean (~15%)

**Custom Notes:**
```
Node.js + Express backend in backend/ directory. Must reference docs/07-DATABASE-SCHEMA.md
for API endpoint specifications (33 endpoints across auth, modules, progress, quizzes,
badges, calculations). JWT authentication with bcrypt password hashing. PostgreSQL via pg driver.
Backend exists but is not yet wired to the frontend — this is a key integration task.
```

---

### Agent: RFH-Database

**MCP Tools Needed:**
- [x] Default CCPM messaging tools (check-inbox, signal-completion)
- [ ] HomeLab infrastructure tools
- [x] Database access tools
- [x] GitHub integration tools
- [ ] Custom tools

**Plugins Needed:**
- [x] context7 (documentation lookup)
- [x] GitHub plugin
- [ ] Custom plugins

**Context Level:**
- [ ] Lean (~15%)

**Custom Notes:**
```
PostgreSQL 15+ on Ubuntu VM at 10.0.1.213. Database: rf_learning_hub.
8 tables: users, modules, user_progress, quizzes, quiz_questions, quiz_attempts,
user_badges, saved_calculations. Schema defined in backend/schema.sql.
Seed data in backend/seed_modules_phase1.sql. Must reference docs/07-DATABASE-SCHEMA.md.
```

---

### Agent: RFH-Docs

**MCP Tools Needed:**
- [x] Default CCPM messaging tools (check-inbox, signal-completion)
- [ ] HomeLab infrastructure tools
- [ ] Database access tools
- [x] GitHub integration tools
- [ ] Custom tools

**Plugins Needed:**
- [x] context7 (documentation lookup)
- [x] GitHub plugin
- [ ] Custom plugins

**Context Level:**
- [x] Medium (~25%)

**Custom Notes:**
```
Owns docs/ directory and curriculum/ directory. Responsible for keeping documentation
current, writing curriculum content for 26-module learning path, and maintaining
consistency across all project documentation. Should flag outdated docs for refresh.
Anthony is dyslexic — ensure all documentation is clearly formatted and accessible.
```

---

### Agent: RFH-Testing

**MCP Tools Needed:**
- [x] Default CCPM messaging tools (check-inbox, signal-completion)
- [ ] HomeLab infrastructure tools
- [x] Database access tools
- [x] GitHub integration tools
- [ ] Custom tools

**Plugins Needed:**
- [x] context7 (documentation lookup)
- [x] GitHub plugin
- [ ] Custom plugins

**Context Level:**
- [ ] Lean (~15%)

**Custom Notes:**
```
No testing framework in place yet — this agent's first task should be establishing
a test infrastructure. API endpoint testing for all 33 endpoints, frontend HTML
validation, accessibility testing, and cross-browser checks. Should verify that
new pages match the reference template (understanding-s11.html) patterns.
```

---

## Submission

**Completed:** 2026-03-02  
**Ready for:** CCPM project onboarding and agent provisioning  
**GitHub:** https://github.com/unmanned-systems-uk/RF-Hub.git  
**Development VM:** 10.0.1.213 — /home/rfhub/agents/

---

*CCPM Project Discovery — RF-Hub v1.0*  
*Completed for CC-Forge onboarding*
