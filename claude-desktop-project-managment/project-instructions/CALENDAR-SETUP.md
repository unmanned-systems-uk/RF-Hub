# Google Calendar Setup Guide

> **Purpose:** How to use Google Calendar for RF-Hub project scheduling.
> **Location:** D:\live_code\RF-Hub\claude-desktop-project-managment\project-instructions\

---

## Calendar Structure

### Create One Dedicated Calendar: "RF-Hub"
Keep all RF work in a single calendar (not personal) so it's easy to toggle visibility.

### Event Types

**Session Planning (recurring)**
- 3-4 sessions per week, block your typical slots
- Title format: `RF: [workstream]` e.g., "RF: Blog 1.0" or "RF: Curriculum"
- Description: Brief note on what to work on.

**Content Production Cap (recurring weekly)**
- One recurring event: "RF: Content Production Budget (3hr max)"
- Track cumulative hours against the 3-hour cap
- Includes: blog writing, video editing, podcast work, Unsquelched prep
- Does NOT include: curriculum design, platform development, experiments

**Weather-Dependent Tasks (as needed)**
- Title: `RF: OUTDOOR — [task]` e.g., "RF: OUTDOOR — EFHW antenna deployment"
- Description: Weather requirements, equipment needed, duration estimate
- Set as tentative until weather window confirmed
- Link to the corresponding GitHub Issue

**Milestones (as needed)**
- Title: `RF MILESTONE: [what]`
- Targets, not hard deadlines. The hobby should not become stressful.

---

## Example Week (3-4 sessions)

```
Monday evening    — RF: Curriculum (Lesson 14 content design) [indoor]
Wednesday evening — RF: Blog 1.0 Point 4 drafting [indoor, counts toward 3hr cap]
Saturday morning  — RF: Lab (S21 measurement series) [indoor]
Saturday afternoon— RF: OUTDOOR — EFHW deployment [weather permitting]
```

---

## Claude's Role with Calendar

Claude should:
- Suggest session topics based on current project state at end of productive chats
- Flag weather windows for outdoor tasks when relevant
- Track content production hours against the 3-hour cap
- Not over-schedule — protect free time and spontaneity
