# Contributor Guide

**Last Updated:** October 8, 2025

## Roles & Responsibilities

# Contributor Guide

**Purpose:** Define roles, workflows, and collaboration protocols  
**Last Updated:** October 8, 2025  
**Status:** Active

---

## 👥 Team Structure

### Anthony (Project Lead)
**Role:** Strategic direction, technical validation, equipment testing

**Primary Responsibilities:**
- Make strategic decisions (features, priorities, tech stack)
- Review technical accuracy (RF content)
- Test equipment and document measurements
- Validate user experience
- Final approval on major changes
- Community engagement (future)

**Time Commitment:** Flexible, as available  
**Key Skills:** RF engineering, amateur radio, VNA operation  
**Workspace:** docs/anthony/

---

### Claude (Sonnet 4.5) - Research & Planning
**Role:** Content research, documentation, specifications

**Primary Responsibilities:**
- Research and write educational content
- Design database schemas and system architecture
- Create specifications for Claude Code
- Write quiz questions and learning materials
- Maintain documentation
- Provide technical guidance

**Time Commitment:** Available 24/7 (AI assistant)  
**Key Skills:** Technical writing, research, system design  
**Workspace:** docs/claude/

---

### Claude Code - Implementation
**Role:** HTML/CSS/JavaScript development, deployment

**Primary Responsibilities:**
- Implement website pages
- Build interactive features
- Maintain file structure and styling
- Browser/device testing
- Performance optimization
- Deployment and hosting

**Time Commitment:** Available as needed (AI assistant)  
**Key Skills:** Web development, testing, deployment  
**Workspace:** docs/claude-code/

---

## 🔄 Workflow Overview

### Daily Workflow

**Morning Routine (Everyone):**
1. Check your checkpoint file (CURRENT-WORK, CLAUDE-CHECKPOINT, CC-CHECKPOINT)
2. Review TODO-MASTER for assigned tasks (look for your name/emoji)
3. Check PROGRESS-TRACKER for updates from others
4. Plan your day's work

**During Work:**
- Update your checkpoint file every 30 minutes during complex tasks
- Create checkpoints before context switches
- Document decisions and blockers immediately

**End of Day:**
- Mark completed tasks in TODO-MASTER
- Update PROGRESS-TRACKER if you hit milestones
- Update your checkpoint file with tomorrow's plan
- Hand off work if needed (update relevant task files)

---

### Weekly Workflow

**Monday (Planning Day):**

**Anthony:**
- Review IDEAS-SCRATCHPAD, approve/reject new ideas
- Prioritize TODO-MASTER tasks for the week
- Make pending decisions (check ANTHONY-DECISIONS.md)
- Review progress and adjust timeline

**Claude:**
- Check CLAUDE-TASKS for new assignments
- Plan week's research and writing
- Update content schedules

**Claude Code:**
- Review CC-TASKS for build queue
- Plan week's implementation work
- Schedule testing time

---

## 📋 Task Management

### How Tasks Flow

**1. Idea Generation** (Anyone)
- Add to IDEAS-SCRATCHPAD.md
- Provide effort estimate (EASY/MEDIUM/HARD/EPIC)
- Describe benefit and rationale

**2. Approval** (Anthony)
- Reviews ideas weekly
- Marks as APPROVED, REJECTED, or NEEDS RESEARCH
- Approved ideas move to TODO-MASTER

**3. Task Creation** (Anyone, Anthony prioritizes)
- Add to TODO-MASTER.md
- Assign priority (🔥⚡📌💡)
- Assign to person (🎯🔍🔧)
- Set deadline and estimated time

**4. Assignment** (Specific task lists)
- Added to CLAUDE-TASKS or CC-TASKS
- Detailed spec provided if needed
- Dependencies noted

**5. Execution** (Assignee)
- Update checkpoint file when starting
- Work on task, checkpoint regularly
- Ask questions if blocked

**6. Completion** (Assignee)
- Mark complete in TODO-MASTER
- Update PROGRESS-TRACKER
- Update checkpoint file
- Hand off if needed

**7. Review** (As needed)
- Anthony reviews technical content
- Testing for features
- Approval to deploy

---

## 🎯 Decision-Making Process

### Decision Types

**Strategic Decisions** (Anthony)
- Backend technology choice
- Monetization strategy
- Domain name
- Major feature additions
- Budget allocations
- Launch timing

**Technical Decisions** (Claude + Anthony approval)
- Database schema design
- API endpoint structure
- Security implementations
- Integration approaches

**Implementation Decisions** (Claude Code)
- Code structure
- Library choices (within approved list)
- Styling details
- Component design

### Decision Framework

**For any significant decision:**

1. **Research:** Gather information (Claude if needed)
2. **Document:** Create entry in appropriate decisions log
3. **Options:** List alternatives with pros/cons
4. **Impact:** Identify what's affected
5. **Discuss:** If needed, create dedicated chat
6. **Decide:** Anthony makes call for strategic, others for their domain
7. **Document:** Record decision and rationale
8. **Communicate:** Update affected tasks and notify team via docs
9. **Execute:** Assign follow-up tasks

**Decision Speed Guidelines:**
- Critical blocking decisions: Within 48 hours
- High priority decisions: Within 1 week
- Medium priority: Within 2 weeks
- Low priority: As time allows

---

## 💬 Communication Protocols

### Primary Communication: Documentation

**All communication happens through docs:**
- TODO-MASTER for task assignments
- Checkpoint files for active work
- PROGRESS-TRACKER for status updates
- Decision logs for choices made
- Chat conversations for complex discussions

**Benefits:**
- Asynchronous (work anytime)
- Documented (nothing lost)
- Searchable (find past discussions)
- Clear (no ambiguity)

---

### When to Create a New Chat

**Create separate chats for:**
- Major features ("3 - Authentication System")
- Complex research ("4 - Advanced Phased Array Theory")
- Separate topics ("5 - Marketing Strategy")
- Troubleshooting specific issues ("Debug - Mobile Nav")

**Keep in main chat for:**
- Quick updates
- Clarifications
- Daily coordination
- File structure changes
- Quick questions

**Chat Naming Convention:**
```
[Number] - [Topic Name]
Examples:
1 - RF-Learning-Hub webpage management (main)
2 - Backend Tech Research
3 - Authentication System Implementation
4 - Deployment & Launch
```

---

### Chat Continuity Protocol

**THE CHECKPOINT RULE:**  
Before ANY substantial work, create a checkpoint.

**When to Checkpoint:**
- Starting a new task (even small ones)
- Every 30 minutes during complex work
- Before switching topics
- When chat feels long (200+ lines)
- Before asking CC to implement something
- When making important decisions

**Checkpoint Format:**
```markdown
## [TIMESTAMP] - [NAME] Checkpoint

**Current Task:** [What you're working on]
**Status:** [% complete]
**Completed:** [What's done]
**In Progress:** [Current activity]
**Next Steps:** [What's left]
**If Interrupted:** [How to resume]
**Files Modified:** [List]
**Blocking Issues:** [Any problems]
```

**Recovery Process (If Chat Interrupted):**
1. Check relevant checkpoint file
2. Read ACTIVE CHECKPOINT section
3. Create recovery chat with context
4. Resume from "Next Steps If Interrupted"
5. Update checkpoint after completion

---

## 📁 File Management

### Who Updates What

| Document | Anthony | Claude | CC | Update Frequency |
|----------|---------|--------|----|------------------|
| PROJECT-OVERVIEW | Owner | Review | Read | Monthly |
| PROGRESS-TRACKER | Update | Update | Update | After each task |
| TODO-MASTER | Prioritize | Add | Add | Daily |
| IDEAS-SCRATCHPAD | Approve | Add | Add | Weekly review |
| FILE-STRUCTURE | - | - | Owner | After file changes |
| STYLING-GUIDE | Approve | - | Owner | After new components |
| DATABASE-SCHEMA | Approve | Owner | Implement | As designed |
| DEPLOYMENT-GUIDE | Review | Input | Owner | Pre-launch |
| CONTENT-INVENTORY | - | Owner | - | Weekly |
| CONTRIBUTOR-GUIDE | Approve | Update | Update | As needed |
| ANTHONY-DECISIONS | Owner | Read | Read | After decisions |
| CURRENT-WORK | Owner | - | - | Daily |
| CLAUDE-CHECKPOINT | - | Owner | Read | Every 30 min |
| CLAUDE-TASKS | Assign | Owner | Read | Daily |
| CC-CHECKPOINT | - | Read | Owner | Every session |
| CC-TASKS | Assign | Assign | Owner | Daily |

---

### File Naming Conventions

**Documentation:**
- Format: `##-DESCRIPTION.md`
- Numbers for ordering (01-10)
- ALL CAPS for visibility
- Hyphens for readability

**Code Files:**
- HTML: `lowercase-with-hyphens.html`
- CSS: `lowercase.css`
- JavaScript: `camelCase.js` functions, `lowercase.js` files
- Images: `PascalCase-Descriptive.ext`

**Workspace Files:**
- `WORKSPACE-NAME.md` (all caps)
- Descriptive names
- Clear purpose

---

## 🔧 Technical Workflows

### Content Creation → Publication

**1. Research Phase** (Claude)
- Research topic thoroughly
- Document sources
- Create outline
- Draft content in claude/content-drafts/

**2. Review Phase** (Anthony)
- Technical accuracy check
- Clarity and accessibility review
- Suggest improvements

**3. Revision Phase** (Claude)
- Incorporate feedback
- Finalize content
- Add to CONTENT-INVENTORY

**4. Implementation Phase** (CC)
- Create HTML page
- Add styling
- Integrate content
- Test responsiveness

**5. Testing Phase** (Anthony + CC)
- Browser testing
- Mobile testing
- Accessibility check
- Content flow verification

**6. Deployment Phase** (CC)
- Merge to main branch
- Automatic deployment (Netlify)
- Monitor for issues
- Update PROGRESS-TRACKER

**Estimated Timeline:** 1 week per major page

---

### Feature Development Workflow

**1. Ideation** (Anyone)
- Add to IDEAS-SCRATCHPAD
- Describe benefit and use case

**2. Approval** (Anthony)
- Review feasibility
- Check alignment with goals
- Approve or reject

**3. Planning** (Claude)
- Create detailed specification
- Design database changes
- Document API endpoints
- Estimate effort

**4. Review** (Anthony)
- Approve technical approach
- Confirm requirements
- Green-light implementation

**5. Implementation** (CC)
- Build feature
- Write tests
- Document code
- Update FILE-STRUCTURE

**6. Testing** (All)
- Functional testing
- Edge case testing
- User acceptance testing
- Performance testing

**7. Deployment** (CC)
- Merge to production
- Monitor metrics
- Fix critical bugs immediately

**8. Retrospective** (All)
- What worked well?
- What could improve?
- Document lessons learned

**Estimated Timeline:** 1-4 weeks depending on complexity

---

## 🐛 Bug Fixing Protocol

**When a Bug is Discovered:**

**1. Report** (Anyone)
- Create task in TODO-MASTER
- Priority: 🔥 if critical, ⚡ if high impact
- Describe: Steps to reproduce, expected vs actual behavior
- Assign: CC (usually)

**2. Investigate** (CC)
- Reproduce the bug
- Identify root cause
- Estimate fix time
- Update task with findings

**3. Fix** (CC)
- Implement fix
- Test thoroughly
- Document what was changed
- Update PROGRESS-TRACKER

**4. Verify** (Anthony or CC)
- Confirm bug is fixed
- Check for side effects
- Close task

**5. Deploy** (CC)
- Push to production
- Monitor for regressions

**Critical Bugs:**
- Fix immediately (drop other work)
- Notify Anthony
- Deploy ASAP
- Post-mortem: Why did it happen? How to prevent?

---

## ✅ Quality Standards

### Code Quality (CC)

**Before Committing:**
- [ ] Code is clean and readable
- [ ] No console.log statements left in
- [ ] Comments added for complex logic
- [ ] Responsive design tested
- [ ] Cross-browser tested (Chrome, Firefox, Safari minimum)
- [ ] Accessibility checked (alt text, ARIA labels)
- [ ] No broken links
- [ ] File structure updated
- [ ] Styling guide updated (if new components)

**Testing Checklist:**
- [ ] Desktop (1920px, 1366px)
- [ ] Tablet (768px)
- [ ] Mobile (375px, 320px)
- [ ] Chrome latest
- [ ] Firefox latest
- [ ] Safari latest
- [ ] Lighthouse score >90

---

### Content Quality (Claude)

**Before Publishing:**
- [ ] Technically accurate (verified sources)
- [ ] Beginner-friendly language
- [ ] Examples provided
- [ ] Sources cited where needed
- [ ] Learning objectives clear
- [ ] Practical applications shown
- [ ] Reviewed by Anthony (RF content)
- [ ] Added to CONTENT-INVENTORY

**Tone Guidelines:**
- Educational but not academic
- Encouraging and positive
- Clear and concise
- Jargon explained
- Inclusive language

---

## 🚫 What NOT to Do

**Don't:**
- ❌ Make strategic decisions without Anthony's input
- ❌ Change file structure without updating FILE-STRUCTURE.md
- ❌ Commit untested code
- ❌ Leave tasks incomplete without documentation
- ❌ Skip checkpoint creation during complex work
- ❌ Assume - ask questions if unsure
- ❌ Delete old documentation (archive it)
- ❌ Ignore user feedback
- ❌ Rush to deploy without testing
- ❌ Forget to update PROGRESS-TRACKER

**Do:**
- ✅ Document everything
- ✅ Communicate clearly via docs
- ✅ Test thoroughly before deploying
- ✅ Ask questions early
- ✅ Update checkpoint files regularly
- ✅ Mark tasks complete promptly
- ✅ Celebrate wins (even small ones!)
- ✅ Learn from mistakes
- ✅ Keep quality high
- ✅ Focus on user value

---

## 🎓 Onboarding (Future Contributors)

**When a new contributor joins:**

**Day 1:**
1. Read README.md (project overview)
2. Read this CONTRIBUTOR-GUIDE.md
3. Read PROJECT-OVERVIEW.md (mission and goals)
4. Set up workspace folder
5. Introduce yourself in a chat

**Week 1:**
2. Read relevant technical docs (for your role)
3. Review PROGRESS-TRACKER (current status)
4. Check TODO-MASTER (available tasks)
5. Take a small starter task
6. Learn the checkpoint system

**Month 1:**
7. Contribute to main features
8. Participate in decisions (domain area)
9. Help improve documentation
10. Build confidence and expertise

---

## 🏆 Success Metrics

**Individual:**
- Tasks completed on time
- Quality of work (few bugs, good feedback)
- Communication clarity
- Collaboration effectiveness
- Documentation quality

**Team:**
- Meeting milestone dates
- User satisfaction
- Code quality metrics
- Content accuracy
- Community engagement

**Project:**
- Pages complete (target: 13/13)
- Modules complete (target: 26/26)
- User registrations
- Completion rates
- Community growth

---

## 📞 Getting Help

**If You're Stuck:**

1. **Check documentation first**
   - Relevant docs in docs/
   - Your checkpoint file
   - TODO-MASTER for context

2. **Search past conversations**
   - Use conversation_search tool
   - Look in archives/

3. **Ask in main chat**
   - "1 - RF-Learning-Hub webpage management"
   - Be specific about the problem

4. **Create dedicated chat** (if complex)
   - For in-depth troubleshooting
   - For research needs

5. **Escalate to Anthony** (if needed)
   - Tag with 🎯 in TODO-MASTER
   - Document in ANTHONY-DECISIONS if strategic

**Response Times:**
- Claude: Immediate (AI)
- Claude Code: Immediate (AI)
- Anthony: Within 24-48 hours (human schedule)

---

## 🔄 Continuous Improvement

**This guide is living documentation.**

**Monthly Review:**
- What's working?
- What's not working?
- What's missing?
- Update this guide

**Feedback Welcome:**
- Suggestions for improvement
- Clarifications needed
- New sections to add
- Outdated info to remove

**Version History:**
- Track major changes
- Document rationale
- Keep old versions in archives

---

## 📝 Quick Reference

**Key Files:**
- Start here: README.md
- Your tasks: [YOUR-NAME]-TASKS.md
- Your work: [YOUR-NAME]-CHECKPOINT.md
- All tasks: TODO-MASTER.md
- Project status: PROGRESS-TRACKER.md
- New ideas: IDEAS-SCRATCHPAD.md

**Key Principles:**
- Document everything
- Communicate via docs
- Test before deploying
- Quality over speed
- User value first
- Collaborate openly

**Key Habits:**
- Daily: Check tasks, update checkpoint
- Weekly: Review progress, plan ahead
- Monthly: Reflect and improve

---

**Remember:** We're building the best RF learning platform on the internet. Quality, accuracy, and user experience are paramount. When in doubt, ask. When you know, document.

**Let's build something amazing! 📡🚀**

---

**Last Updated:** October 8, 2025  
**Next Review:** November 8, 2025  
**Version:** 1.0  
**Status:** ✅ Active and ready to use