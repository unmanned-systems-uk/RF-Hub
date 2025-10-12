# Claude Code Rules for RF-Hub Project

## Purpose

These rules ensure maintainability, traceability, and project continuity. Documentation updates are **CRITICAL** to avoid confusion and duplicate work.

**MUST** rules are non-negotiable; **SHOULD** rules are strongly recommended.

---

## 📋 Documentation Update Requirements

### ⚠️ CRITICAL RULE: Update Documentation AFTER Every Task

When you complete ANY task, you **MUST** update documentation in this exact order:

---

### Priority 1: MUST UPDATE (After EVERY Task)

These files **MUST** be updated immediately after completing any task:

#### 1. **docs/claude-code/CC-CHECKPOINT.md** - Active Work Status
**When to update:** After EVERY coding session  
**What to update:**
```markdown
## Current Status
- Update completion percentage
- Note what you just finished
- List what's next

## Last Session Summary
- Date and time
- What was completed
- Time spent
- Files modified
- Issues encountered

## Blockers/Issues
- Add any new blockers discovered
- Remove resolved blockers
```

#### 2. **docs/claude-code/CC-TASKS.md** - Task Tracking
**When to update:** After completing any task from TODO-MASTER.md  
**What to update:**
```markdown
## Completed Tasks
- Move completed task from "In Progress" to "Completed"
- Add completion date and actual time spent
- Note any deviations from original plan
- List all files created/modified

## In Progress
- Update status of current work
- Adjust time estimates if needed

## Next Up
- Update based on new priorities
```

#### 3. **docs/03-TODO-MASTER.md** - Master Task List
**When to update:** After completing any task  
**What to update:**
```markdown
## For Completed Tasks:
1. Mark task with ✅ in the appropriate section
2. Move entire task entry to "✅ COMPLETED (Last 7 Days)" section
3. Add completion details:
   - **Completed:** [Date] by CC
   - **Actual Time:** X hours
   - **Files Modified:** List of files
4. Update "Last Updated" timestamp at top of file
5. Update Sprint Summary statistics

## For New Tasks:
- Add to appropriate priority section
- Include all required fields (Priority, Status, Assigned, Deadline, Estimated Time)
```

#### 4. **docs/02-PROGRESS-TRACKER.md** - Overall Project Status
**When to update:** After completing major features or pages  
**What to update:**
```markdown
## Overall Status Percentage
- Recalculate based on pages/features completed

## Website Pages Status
- Update completion status for relevant page
- Move from "IN PROGRESS" to "COMPLETED" section
- Add completion date, features delivered, testing status

## Core Features Status
- Mark features as complete
- Update statistics

## Statistics Section
- Update lines of code
- Update time investment
- Update content stats

## Update Log
- Add entry with date, time, and what changed
```

---

### Priority 2: SHOULD UPDATE (When Applicable)

Update these files when you make relevant changes:

#### 5. **docs/05-FILE-STRUCTURE.md** - File Organization
**When to update:** When creating new files or directories  
**What to update:**
```markdown
- Add new files to appropriate section
- Document file purpose
- Update directory structure tree
- Note any file relocations or deletions
```

#### 6. **docs/09-CONTENT-INVENTORY.md** - Content Tracking
**When to update:** When adding content (modules, quizzes, images, etc.)  
**What to update:**
```markdown
- Add new content items
- Update completion status
- Note content location
- Track content creators
```

#### 7. **backend/API-IMPLEMENTATION-SUMMARY.md** - Backend Documentation
**When to update:** When modifying backend code  
**What to update:**
```markdown
- Document new API endpoints
- Update authentication changes
- Note database schema modifications
- Add usage examples
```

#### 8. **backend/IMPLEMENTATION-STATUS.md** - Backend Progress
**When to update:** When working on backend features  
**What to update:**
```markdown
- Mark features as complete
- Update implementation status
- Document testing results
```

---

### Priority 3: VERIFY (Check Periodically)

These files may need updates, but are primarily managed by others:

#### 9. **docs/anthony/ANTHONY-DECISIONS.md**
**Check if:** Your work was blocked pending an Anthony decision  
**Action:** Verify Anthony has documented the decision

#### 10. **docs/07-DATABASE-SCHEMA.md**
**Check if:** You made database-related changes  
**Action:** Ensure schema documentation reflects current state

---

## 🔄 Standard Task Completion Workflow

Follow this checklist for EVERY task completion:

```markdown
## Task Completion Checklist

### Implementation Phase
- [ ] Write code following best practices
- [ ] Test functionality thoroughly
- [ ] Ensure mobile responsive (if frontend)
- [ ] Run any linting/formatting tools

### Documentation Phase (CRITICAL - DO NOT SKIP)
- [ ] Update docs/claude-code/CC-CHECKPOINT.md
  - Current status
  - Last session summary
  - Next steps
- [ ] Update docs/claude-code/CC-TASKS.md
  - Move task to completed
  - Add actual time spent
  - List files modified
- [ ] Update docs/03-TODO-MASTER.md
  - Mark task ✅
  - Move to COMPLETED section
  - Update timestamps
  - Update sprint summary
- [ ] Update docs/02-PROGRESS-TRACKER.md
  - Update overall percentage
  - Update relevant sections
  - Add to update log
- [ ] If applicable: Update docs/05-FILE-STRUCTURE.md
- [ ] If applicable: Update docs/09-CONTENT-INVENTORY.md
- [ ] If applicable: Update backend documentation

### Handoff Phase
- [ ] Commit changes with clear message
- [ ] Note in checkpoint if task requires Anthony review
- [ ] Identify and document any blockers for next task
```

---

## 💻 Implementation Best Practices

### Before Coding

- **BP-1 (MUST)** Read the task description in TODO-MASTER.md completely
- **BP-2 (MUST)** Check CC-CHECKPOINT.md for context from previous sessions
- **BP-3 (SHOULD)** Review related files in FILE-STRUCTURE.md
- **BP-4 (SHOULD)** Ask clarifying questions if requirements unclear
- **BP-5 (SHOULD)** Draft approach for complex work (>4 hours)

### While Coding

- **C-1 (MUST)** Follow existing code style and patterns
- **C-2 (MUST)** Use consistent naming conventions with existing code
- **C-3 (MUST)** Comment complex logic (when > 10 lines of conditional logic)
- **C-4 (SHOULD)** Keep functions focused and single-purpose
- **C-5 (SHOULD)** Reuse existing utility functions from main.js
- **C-6 (SHOULD NOT)** Create duplicate functionality
- **C-7 (MUST)** Test in multiple browsers (Chrome, Firefox, Safari)
- **C-8 (MUST)** Test responsive design (desktop, tablet, mobile)

### File Management

- **F-1 (MUST)** Create files in correct directory per FILE-STRUCTURE.md
- **F-2 (MUST)** Use correct path references (assets/css, assets/js, assets/images)
- **F-3 (MUST)** Follow naming conventions:
  - HTML: lowercase-with-hyphens.html
  - CSS: lowercase-with-hyphens.css
  - JS: camelCase.js
  - Images: PascalCase or descriptive-name.ext
- **F-4 (SHOULD)** Keep files under 1000 lines when possible

### HTML Best Practices

- **H-1 (MUST)** Use semantic HTML5 elements
- **H-2 (MUST)** Include proper meta tags and page title
- **H-3 (MUST)** Link to assets/css/styles.css for styling
- **H-4 (MUST)** Link to assets/js/main.js for utilities
- **H-5 (SHOULD)** Add ARIA labels for accessibility
- **H-6 (SHOULD)** Use consistent navigation structure across pages

### CSS Best Practices

- **CSS-1 (MUST)** Add styles to assets/css/styles.css (not inline)
- **CSS-2 (SHOULD)** Use existing CSS variables for colors/spacing
- **CSS-3 (SHOULD)** Follow mobile-first responsive design
- **CSS-4 (MUST)** Test breakpoints: 320px, 768px, 1024px, 1920px
- **CSS-5 (SHOULD)** Use grid/flexbox for layouts

### JavaScript Best Practices

- **JS-1 (MUST)** Use functions from assets/js/main.js when available
- **JS-2 (MUST)** Handle errors gracefully with try-catch
- **JS-3 (MUST)** Validate user input before processing
- **JS-4 (SHOULD)** Use localStorage for persistence (via main.js helpers)
- **JS-5 (SHOULD)** Add event listeners in DOMContentLoaded
- **JS-6 (SHOULD NOT)** Use global variables (wrap in IIFE if needed)
- **JS-7 (MUST)** Test with console open for errors

---

## 📝 Git Commit Best Practices

### Commit Message Format

**GH-1 (MUST)** Use clear, descriptive commit messages
**GH-2 (SHOULD)** Follow format: `[Component] Action: Description`

Examples:
```
[Frontend] Add: Learning path page with 26 modules
[Backend] Fix: Authentication middleware error handling
[Docs] Update: Progress tracker with latest completions
[CSS] Fix: Mobile navigation menu hamburger icon
[Database] Add: Quiz attempts table schema
```

**GH-3 (SHOULD NOT)** Refer to Claude or Anthropic in commit messages
**GH-4 (SHOULD)** Include file count in message: "Modified 3 files"

### Commit Checklist

Before committing:
- [ ] All documentation updated per Priority 1 requirements
- [ ] Code tested and working
- [ ] No console errors
- [ ] Responsive design verified
- [ ] Clear commit message written

---

## 🎯 Remember Shortcuts

Quick commands for common workflows:

### QSTART
```
Review current task in CC-CHECKPOINT.md and CC-TASKS.md.
Understand requirements from TODO-MASTER.md.
Check FILE-STRUCTURE.md for file locations.
Begin implementation.
```

### QDONE
```
Complete task following Task Completion Checklist.
Update all Priority 1 documentation (MUST):
  1. CC-CHECKPOINT.md
  2. CC-TASKS.md  
  3. TODO-MASTER.md
  4. PROGRESS-TRACKER.md
Update Priority 2 documentation if applicable.
Commit changes with clear message.
```

### QSTATUS
```
Generate summary report of:
  - Current task status
  - Completion percentage
  - Recent completions (last 3)
  - Next priority tasks (top 3)
  - Any blockers
```

### QCHECK
```
Verify all documentation is synchronized:
  1. CC-CHECKPOINT.md matches current work
  2. CC-TASKS.md reflects TODO-MASTER.md
  3. PROGRESS-TRACKER.md percentages accurate
  4. All timestamps current
  5. No conflicting information
```

### QREVIEW
```
Review your work before marking complete:
  1. Code works as expected
  2. Mobile responsive
  3. No console errors
  4. All edge cases handled
  5. Documentation updated
  6. Ready for Anthony review
```

---

## ⚠️ Common Mistakes to Avoid

### Documentation Mistakes

- **❌ DON'T:** Mark a task complete without updating docs
- **❌ DON'T:** Update only one documentation file
- **❌ DON'T:** Forget to update timestamps
- **❌ DON'T:** Leave tasks in "In Progress" when done
- **❌ DON'T:** Skip updating PROGRESS-TRACKER.md percentages
- **✅ DO:** Follow the Task Completion Checklist completely

### Code Mistakes

- **❌ DON'T:** Create files in wrong directory
- **❌ DON'T:** Use incorrect path references
- **❌ DON'T:** Copy-paste code without testing
- **❌ DON'T:** Skip mobile testing
- **❌ DON'T:** Ignore console errors
- **✅ DO:** Test thoroughly before marking complete

### Process Mistakes

- **❌ DON'T:** Start new task with old blockers unresolved
- **❌ DON'T:** Work on tasks not in TODO-MASTER.md
- **❌ DON'T:** Skip clarifying questions when confused
- **❌ DON'T:** Assume requirements without checking docs
- **✅ DO:** Follow the workflow systematically

---

## 📊 Quality Gates

Before marking ANY task complete:

### Gate 1: Functionality
- [ ] Feature works as specified
- [ ] All requirements met
- [ ] Edge cases handled
- [ ] Error handling implemented

### Gate 2: Compatibility
- [ ] Works in Chrome, Firefox, Safari
- [ ] Mobile responsive (tested at 320px, 768px, 1024px)
- [ ] No horizontal scroll on mobile
- [ ] Touch targets adequate (min 44x44px)

### Gate 3: Code Quality
- [ ] No console errors
- [ ] Code follows existing patterns
- [ ] Functions properly named
- [ ] Comments added where needed

### Gate 4: Documentation (CRITICAL)
- [ ] CC-CHECKPOINT.md updated
- [ ] CC-TASKS.md updated
- [ ] TODO-MASTER.md updated
- [ ] PROGRESS-TRACKER.md updated
- [ ] Applicable secondary docs updated

### Gate 5: Handoff
- [ ] Clear commit message
- [ ] Next steps identified
- [ ] Blockers documented
- [ ] Anthony review noted if needed

**If ANY gate fails, task is NOT complete.**

---

## 🚨 Emergency Procedures

### If You Discover Documentation is Out of Sync

1. **STOP** current work immediately
2. Review last 3-5 commits to understand what was done
3. Update all documentation to reflect actual current state
4. Add note to CC-CHECKPOINT.md explaining the sync issue
5. Resume work only after docs are accurate

### If You Can't Find Information

1. Check docs/00-READ-THIS-FIRST.md for orientation
2. Check FILE-STRUCTURE.md for file locations
3. Check TODO-MASTER.md for task context
4. Check CC-CHECKPOINT.md for recent work context
5. If still unclear, note question in CC-CHECKPOINT.md for Anthony

### If You Encounter a Blocker

1. Document blocker in CC-CHECKPOINT.md immediately
2. Update task status to ⏸️ Blocked in TODO-MASTER.md
3. Note blocking reason and what's needed to unblock
4. Identify alternative tasks that can be done
5. Update Anthony via checkpoint file

---

## 📚 Key Documentation Files Reference

Quick reference for what each file contains:

| File | Purpose | Update Frequency |
|------|---------|-----------------|
| CC-CHECKPOINT.md | Current work status, session log | Every session |
| CC-TASKS.md | Task tracking for CC | Every task |
| TODO-MASTER.md | Master task backlog | Every task completion |
| PROGRESS-TRACKER.md | Overall project status | Major completions |
| FILE-STRUCTURE.md | Project organization | New files |
| 07-DATABASE-SCHEMA.md | Database structure | Backend changes |
| 09-CONTENT-INVENTORY.md | Content tracking | New content |
| ANTHONY-DECISIONS.md | Decision log | Anthony only |
| API-IMPLEMENTATION-SUMMARY.md | Backend API docs | Backend changes |

---

## ✅ Success Criteria

You're following these rules correctly when:

1. ✅ No task is marked complete without all Priority 1 docs updated
2. ✅ All timestamps in documentation are current
3. ✅ CC-CHECKPOINT.md accurately reflects current state
4. ✅ TODO-MASTER.md and CC-TASKS.md are synchronized
5. ✅ PROGRESS-TRACKER.md percentages are accurate
6. ✅ File locations match FILE-STRUCTURE.md
7. ✅ Anthony can pick up work easily from your documentation
8. ✅ No conflicting information across documents

---

**Remember: Good documentation is not optional. It's what makes this project maintainable and allows everyone to work effectively.**

**Last Updated:** October 12, 2025
**Next Review:** Weekly with TODO-MASTER.md updates
