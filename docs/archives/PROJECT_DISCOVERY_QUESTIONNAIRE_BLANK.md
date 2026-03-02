# CCPM Project Discovery Questionnaire

**Version:** 1.0
**Date:** 2026-03-02
**Purpose:** Comprehensive requirements gathering for new CCPM-managed projects

---

## Instructions

This questionnaire gathers all information needed to set up a new CCPM-managed project with automated agent orchestration. Please answer all questions as thoroughly as possible.

**Format:** Answer inline after each question, or provide in a separate document with question numbers.

---

## Phase 1: Project Identity (Q1-Q5)

**Q1. Project Name**
What is the display name for this project?
*Example: "NEX-Cam-NHS" or "HomeLab Infrastructure"*

```
Answer:
```

**Q2. Project Slug**
What should the lowercase-hyphenated identifier be?
*Example: "nex-cam-nhs" or "homelab"*

```
Answer:
```

**Q3. Agent Prefix**
What 2-4 character prefix should agents use in their names?
*Example: "NEX" (for NEX-Master, NEX-Backend) or "HL" (for HL-Master)*

```
Answer:
```

**Q4. Short Description**
One-line description of the project purpose:

```
Answer:
```

**Q5. Detailed Description**
Full description including purpose, scope, and goals:

```
Answer:
```

---

## Phase 2: Existing Documentation (Q6-Q9)

**Q6. Existing Design Documentation**
Is there existing design documentation? (yes/no)

```
Answer:
```

**Q7. Documentation Location**
If yes to Q6, where is it located? (file paths, URLs, Confluence, Google Docs, etc.)

```
Answer:
```

**Q8. Specifications & Diagrams**
Any specifications, requirements docs, or architecture diagrams?

```
Answer:
```

**Q9. Documentation Quality**
Notes about documentation completeness, accuracy, or gaps:

```
Answer:
```

---

## Phase 3: Technical Stack (Q10-Q14)

**Q10. Primary Programming Language(s)**
*Example: Python, C++, JavaScript, Rust, Go, etc.*

```
Answer:
```

**Q11. Framework(s)**
*Example: FastAPI, React, Django, Express, Qt, etc.*

```
Answer:
```

**Q12. Database**
*Example: PostgreSQL, SQLite, MongoDB, MySQL, None*

```
Answer:
```

**Q13. Build System**
*Example: CMake, Make, npm, Poetry, Cargo, Maven, Gradle*

```
Answer:
```

**Q14. Package Manager(s)**
*Example: pip, npm, apt, yum, cargo*

```
Answer:
```

---

## Phase 4: System Type (Q15-Q18)

**Q15. System Type**
Select one or more:
- [ ] Embedded
- [ ] Desktop
- [ ] Server/Backend
- [ ] Web Application
- [ ] Mobile
- [ ] Hybrid (explain)

```
Answer:
```

**Q16. Real-Time Requirements**
Does the system have real-time requirements? (yes/no, with details)

```
Answer:
```

**Q17. Safety-Critical**
Is this a safety-critical system? Any certification needs? (DO-178C, ISO 26262, etc.)

```
Answer:
```

**Q18. Performance Requirements**
Any specific performance requirements or constraints?
*Example: <100ms latency, 60fps video processing, handle 10k concurrent users*

```
Answer:
```

---

## Phase 5: Hardware Target (Q19-Q21)

**Q19. Target Platform(s)**
*Example: Jetson Orin, Raspberry Pi 4, x86_64 Linux, AWS, etc.*

```
Answer:
```

**Q20. Hardware Interfaces**
*Example: GPIO, CSI cameras, USB devices, I2C sensors, Ethernet, etc.*

```
Answer:
```

**Q21. Hardware Constraints**
Any hardware-specific requirements or limitations?

```
Answer:
```

---

## Phase 6: Development Environment (Q22-Q24)

**Q22. Development Environment Type**
Where will agent development happen? Select one:

- [ ] **Server/VM** - Agents run on central server (e.g., CCPM server at 10.0.1.210)
- [ ] **Developer PC** - Agents run locally on developer's machine
- [ ] **Target Device** - Agents run directly on target hardware
- [ ] **Hybrid** - Mixed setup (explain which agents go where)

```
Answer:
```

**Q23. Development Host Details**
Provide details based on Q22:

- **If Server/VM:** Hostname and IP address
- **If Developer PC:** OS type (Linux, macOS, Windows/WSL)
- **If Target Device:** SSH access details, hostname, IP
- **If Hybrid:** List which agents run where

```
Answer:
```

**Q24. Agent Working Directory**
Base path for agent working directories:
*Example: `/home/ccpm/agents/{project-slug}/` or `~/projects/{project-slug}/agents/`*

```
Answer:
```

---

## Phase 7: Infrastructure (Q25-Q28)

**Q25. Deployment Target**
*Example: K3s, Docker Compose, bare metal, AWS, GCP, etc.*

```
Answer:
```

**Q26. CI/CD Requirements**
*Example: GitHub Actions, Jenkins, GitLab CI, none*

```
Answer:
```

**Q27. Monitoring Needs**
*Example: Sentry, Prometheus, Grafana, custom logging*

```
Answer:
```

**Q28. Logging Approach**
*Example: Structured JSON, file-based, syslog, cloud logging*

```
Answer:
```

---

## Phase 8: Agent Selection (Q29)

**Q29. Required Agent Roles**
Select all agent roles needed for this project:

- [ ] **Master** (orchestrator) - Sprint coordination, task assignment - **REQUIRED**
- [ ] **Planner** - Task breakdown, dependency planning
- [ ] **Designer** - Architecture, API design
- [ ] **Backend** - Server-side development
- [ ] **Frontend** - UI development
- [ ] **Database** - Schema, migrations, queries
- [ ] **Infrastructure** - DevOps, deployment, monitoring
- [ ] **Testing** - Test development, verification - **RECOMMENDED**
- [ ] **Docs** - Documentation
- [ ] **MCP** - MCP server tools development
- [ ] **Integration** - External APIs, webhooks

```
Selected agents:
```

**Note:** For each selected agent, you may be asked about customizations (MCP tools, plugins, commands).

---

## Phase 9: Integration & Security (Q31-Q37)

**Q31. GitHub Repository**
Create new repo or link existing?
*If existing, provide URL*

```
Answer:
```

**Q32. External Integrations**
Any external APIs or services to integrate?
*Example: Stripe, Twilio, AWS S3, third-party APIs*

```
Answer:
```

**Q33. Compliance & Security**
Any compliance or security requirements?
*Example: GDPR, HIPAA, SOC2, PCI-DSS*

```
Answer:
```

**Q34. HomeLab Infrastructure Access**
Does this project need access to HomeLab infrastructure? (yes/no)

```
Answer:
```

**Q35. External API Credentials**
Does this project need external API credentials? (yes/no, which services?)

```
Answer:
```

**Q36. Database Credentials**
Does this project need database credentials? (yes/no, which databases?)

```
Answer:
```

**Q37. Agent-Specific Tools**
Any specialized tools not covered by standard agent profiles?
*Example: Custom linters, domain-specific CLI tools, hardware interfaces*

```
Answer:
```

---

## Phase 10: Final Questions (Q38)

**Q38. Additional Context**
Anything else important not covered above?
*Example: Team preferences, constraints, known issues, future plans*

```
Answer:
```

---

## Agent Configuration (Q30 - Detailed Configuration)

**For each agent selected in Q29, answer the following:**

### Agent: _______________

**MCP Tools Needed:**
- [ ] Default CCPM messaging tools (check-inbox, signal-completion)
- [ ] HomeLab infrastructure tools (service health, credentials)
- [ ] Database access tools
- [ ] GitHub integration tools
- [ ] Custom tools (specify):

**Plugins Needed:**
- [ ] context7 (documentation lookup)
- [ ] GitHub plugin
- [ ] Custom plugins (specify):

**Context Level:**
- [ ] Full (~50% - Master only)
- [ ] Medium (~25% - Planner, Designer)
- [ ] Lean (~15% - Specialists)

**Custom Notes:**
```
Any domain-specific requirements for this agent:
```

---

## Submission

Once complete, send this questionnaire to the CCPM team or run the `/discovery` command in CC-Forge for interactive guided discovery.

**Questions?** Contact the CCPM team or refer to CC-Forge documentation.

---

*CCPM Project Discovery Questionnaire v1.0*
*Generated by CC-Forge - Project Setup & Scaffolding Specialist*
