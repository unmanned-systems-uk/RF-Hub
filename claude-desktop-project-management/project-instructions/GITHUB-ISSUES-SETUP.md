# GitHub Issue Labels & Templates

> **Purpose:** Standard labels and templates for cross-project task handoffs via GitHub Issues on the RF-Hub repo.

---

## Label Scheme

### Workstream Labels (what area does this belong to?)
| Label | Colour | Description |
|-------|--------|-------------|
| `platform` | #0075ca | RF-Hub website infrastructure |
| `curriculum` | #7057ff | Learning curriculum content |
| `blog` | #e4e669 | Blog posts and content |
| `unsquelched` | #d876e3 | Unsquelched channel content |
| `experiment` | #0e8a16 | Lab experiments and measurements |

### Source Labels (where did this come from?)
| Label | Colour | Description |
|-------|--------|-------------|
| `from-blog` | #fbca04 | Raised during blog work |
| `from-curriculum` | #fbca04 | Raised during curriculum work |
| `from-platform` | #fbca04 | Raised during platform work |
| `from-experiment` | #fbca04 | Raised during experiment work |

### Action Labels
| Label | Colour | Description |
|-------|--------|-------------|
| `handoff` | #d93f0b | Cross-project handoff — needs attention in another workstream |
| `content-gap` | #e99695 | Missing content identified |
| `weather-dependent` | #bfdadc | Outdoor task — needs suitable weather window |
| `blocked` | #b60205 | Cannot proceed until dependency resolved |
| `claude-code` | #006b75 | Implementation task for Claude Code agents |
| `equipment-check` | #c5def5 | Requires physical equipment verification |

---

## Issue Templates

### Cross-Project Handoff
```markdown
---
name: Cross-Project Handoff
about: Flag work needed in another workstream
labels: handoff
---

**Source workstream:** [blog / curriculum / platform / experiment]
**Target workstream:** [blog / curriculum / platform / experiment]

**What was discovered:**
[Brief description of what came up]

**What needs to happen:**
[Specific action needed in the target workstream]

**Context:**
[Link to relevant git file, shared-context doc, or conversation summary]

**Priority:** [Low / Medium / High]
```

### Content Gap
```markdown
---
name: Content Gap
about: Missing content identified during cross-reference
labels: content-gap
---

**Identified during:** [Blog X / Lesson Y / Experiment Z]
**Gap location:** [Which lesson, blog, or page needs content]
**What's missing:** [Description]
**Blocking anything?** [Yes — what / No]
```

### Weather-Dependent Task
```markdown
---
name: Weather-Dependent Task
about: Outdoor task that needs scheduling around weather
labels: weather-dependent
---

**Task:** [What needs to be done outdoors]
**Location:** [Where]
**Equipment needed:** [List]
**Estimated duration:** [How long]
**Weather requirements:** Dry, low wind, etc.
**Feeds:** [Which blog/curriculum/experiment this supports]
```

### Claude Code Implementation Task
```markdown
---
name: Claude Code Task
about: Implementation task ready for Claude Code agents
labels: claude-code
---

**Task:** [What needs to be built/integrated]
**Spec location:** [Git path or shared-context doc]
**Template:** understanding-s11.html (canonical layout)
**CSS:** rf-hub-v2.css (DO NOT MODIFY)

**Acceptance criteria:**
- [ ] [Criterion 1]
- [ ] [Criterion 2]

**Agent assignment:** [Frontend / Backend / Database / etc.]
```

---

## Usage Notes

- Every cross-project issue gets BOTH a workstream label AND a source label
- The `handoff` label means "someone in a different Claude Desktop project needs to act on this"
- `weather-dependent` issues should also get a Google Calendar entry when a weather window is identified
- Keep issue descriptions concise — link to shared-context files or git paths for detail
