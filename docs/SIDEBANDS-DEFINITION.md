# Sidebands — Content Component Definition

**Status:** DRAFT — Pending Anthony's approval  
**Created:** 2026-03-26  
**Purpose:** Define the "Sideband" reusable content component for all RF-Hub agents

---

## 1. What Is a Sideband?

A **Sideband** is a self-contained, reusable knowledge snippet — typically 2–5 sentences — that explains a single RF concept, definition, relationship, or practical insight. The name borrows from RF terminology: just as sidebands carry the actual information content alongside a carrier signal, these components carry knowledge alongside the main lesson or blog content.

### 1.1 Sideband vs Existing Components

| Component | Purpose | Reusable? | Standalone? |
|-----------|---------|-----------|-------------|
| **Sideband** | Portable knowledge snippet (definition, concept, relationship) | ✅ Yes — same content appears in multiple pages | ✅ Yes — can render on its own |
| `.callout` | Contextual note within a specific article | ❌ No — written for its surrounding context | ❌ No — needs parent article |
| `.alert-box` | Warning or prominent notice | ❌ No — context-specific | ❌ No — needs parent article |
| `.summary-card` | Overview/navigation card in a grid | ❌ No — links to content | ❌ No — needs grid layout |

### 1.2 Key Characteristics

- **Atomic:** One concept per Sideband. If it covers two ideas, split it into two Sidebands.
- **Context-free:** Must make sense without reading the surrounding page. No phrases like "as mentioned above" or "in the previous section."
- **Reusable:** The same Sideband can appear on multiple pages. Content is authored once and embedded by reference.
- **Concise:** Target 2–5 sentences (40–120 words). Not a mini-article — a focused knowledge unit.
- **Accurate:** Must use correct terminology and SI units. Equations use standard notation.

---

## 2. Content Schema

Every Sideband has the following fields:

| Field | Required | Description |
|-------|----------|-------------|
| `id` | ✅ | Unique slug, kebab-case. E.g. `impedance-vs-resistance` |
| `title` | ✅ | Short, descriptive heading. E.g. "Impedance, Reactance & Resistance" |
| `body` | ✅ | The explanation text (2–5 sentences, HTML permitted) |
| `category` | ✅ | One of: `fundamentals`, `antennas`, `measurement`, `propagation`, `sdr`, `components` |
| `tags` | ✅ | Array of keywords for cross-referencing. E.g. `["impedance", "resistance", "reactance", "ohms"]` |
| `related` | ❌ | Array of other Sideband `id` values that are conceptually linked |
| `curriculum_ref` | ❌ | Which curriculum lesson(s) this maps to. E.g. `"antennas/unit-1/lesson-3"` |
| `level` | ❌ | Difficulty: `foundation`, `intermediate`, `advanced`. Default: `foundation` |

---

## 3. HTML Pattern

### 3.1 Embedded Mode (inside a lesson or blog)

Uses the `<aside>` semantic element. CSS class `.sideband` (to be added to `rf-hub-v2.css` in a future update — see Section 6).

```html
<aside class="sideband" id="sideband-impedance-vs-resistance" data-category="fundamentals">
  <div class="sideband-header">
    <span class="sideband-icon">📡</span>
    <h4 class="sideband-title">Impedance, Reactance & Resistance</h4>
    <span class="badge badge--em">SIDEBAND</span>
  </div>
  <div class="sideband-body">
    <p>Resistance, reactance, and impedance are all forms of opposition to electrical
    current flow measured in Ohms (Ω). Resistance (<em>R</em>) dissipates energy as heat,
    reactance (<em>X</em>) temporarily stores energy (inductors/capacitors) without
    dissipation, and impedance (<em>Z</em>) is the total combined opposition in AC circuits,
    calculated as <code>Z = R + jX</code>.</p>
  </div>
  <div class="sideband-footer">
    <span class="sideband-tags">
      <span class="badge">impedance</span>
      <span class="badge">resistance</span>
      <span class="badge">reactance</span>
    </span>
  </div>
</aside>
```

### 3.2 Standalone Mode (glossary page, search results)

When rendered outside an article (e.g. on a future `/pages/sidebands.html` glossary page), the same markup is used but may appear in a grid layout:

```html
<div class="sideband-grid">
  <!-- Multiple <aside class="sideband"> components here -->
</div>
```

### 3.3 Semantic Rules

- **Always use `<aside>`** — this is semantically correct for tangentially related content that can be removed without affecting the main flow.
- **Always include `id="sideband-{id}"`** — enables deep-linking and fragment references (`understanding-s11.html#sideband-impedance-vs-resistance`).
- **Always include `data-category`** — enables filtering and future JS interactivity.
- **Never use `<div>` as the root** — `<aside>` signals to screen readers and parsers that this is supplementary content.

---

## 4. Styling Specification

> **Status:** Sideband styles have been added to `rf-hub-v2.css` as Section 19 (approved by Anthony, 2026-03-26). The stylesheet is now re-locked. No separate `sidebands.css` is needed.

### 4.1 Proposed CSS (compatible with V2 design tokens)

```css
/* ─── SIDEBANDS ─────────────────────────────────────────────── */

.sideband {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent-em);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  padding: var(--space-lg);
  margin: var(--space-xl) 0;
  position: relative;
  transition: border-color 0.3s;
}

.sideband:hover {
  border-left-color: var(--accent-h);
}

.sideband-header {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
}

.sideband-icon {
  font-size: 16px;
  flex-shrink: 0;
}

.sideband-title {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--accent-em);
  margin: 0;
  flex: 1;
}

.sideband-body {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.sideband-body strong {
  color: var(--text-primary);
  font-weight: 500;
}

.sideband-body code {
  font-family: var(--font-mono);
  font-size: 0.85em;
  background: rgba(167, 139, 250, 0.1);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  color: var(--accent-em);
}

.sideband-footer {
  margin-top: var(--space-md);
  padding-top: var(--space-sm);
  border-top: 1px solid var(--border);
}

.sideband-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.sideband-tags .badge {
  font-size: 10px;
  padding: 3px 10px;
  opacity: 0.7;
}

/* Category accent variants */
.sideband[data-category="fundamentals"]  { border-left-color: var(--accent-em); }
.sideband[data-category="antennas"]      { border-left-color: var(--accent-e); }
.sideband[data-category="measurement"]   { border-left-color: var(--accent-h); }
.sideband[data-category="propagation"]   { border-left-color: var(--accent-electron); }
.sideband[data-category="sdr"]           { border-left-color: var(--accent-current); }
.sideband[data-category="components"]    { border-left-color: var(--accent-power); }

/* Grid layout for standalone glossary pages */
.sideband-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: var(--space-lg);
  margin: var(--space-xl) 0;
}
```

### 4.2 Visual Differentiation from Existing Components

| Feature | `.callout` | `.alert-box` | `.sideband` |
|---------|-----------|-------------|-------------|
| Left border | 3px solid | None (full border) | 3px solid |
| Background | `rgba(255,255,255,0.02)` | Gradient | `var(--bg-card)` (solid) |
| Has header row | ❌ Icon + inline text | ✅ h4 heading | ✅ Icon + title + badge |
| Has footer/tags | ❌ | ❌ | ✅ Tag badges |
| Border colour changes by category | ❌ Fixed per variant | ❌ | ✅ `data-category` driven |
| Hover state | ❌ | ❌ | ✅ Border colour shift |
| Semantic element | `<div>` | `<div>` | `<aside>` |

The Sideband is visually distinct: it has the `SIDEBAND` badge in the header, a tag footer, a solid card background (rather than near-transparent), and category-driven border colouring. A reader should never confuse it with a callout or alert.

---

## 5. Content Authoring Rules

### 5.1 Writing Guidelines

When an agent is asked to "write a Sideband", they must follow these rules:

1. **One concept only.** If the explanation requires "and also..." or "separately...", it should be two Sidebands.

2. **No context dependency.** Never write "as we saw earlier" or "in the diagram above." The Sideband might appear on a completely different page.

3. **Use correct terminology.** Every technical term must be accurate. Include the symbol/abbreviation on first use. E.g. "Return Loss (RL)" not just "return loss."

4. **Include units.** Always state units: "measured in Ohms (Ω)", "expressed in dBm", "frequency in MHz."

5. **Equations in `<code>` tags.** Use inline code for simple equations: `Z = R + jX`. For complex equations, consider a future MathJax integration.

6. **Tag generously.** Include all terms a learner might search for. If a Sideband mentions "SWR" and "VSWR", both should be tags.

7. **Assign a category.** Every Sideband gets exactly one category from the permitted list.

8. **Link related Sidebands.** If explaining impedance, link to the Sideband on reflection coefficient.

### 5.2 Example Sidebands

**Good — Atomic, context-free, properly tagged:**

```
id: impedance-vs-resistance
title: Impedance, Reactance & Resistance
category: fundamentals
tags: [impedance, resistance, reactance, ohms, AC, opposition]
level: foundation
body: >
  Resistance, reactance, and impedance are all forms of opposition
  to electrical current flow measured in Ohms (Ω). Resistance (R)
  dissipates energy as heat, reactance (X) temporarily stores
  energy (inductors/capacitors) without dissipation, and impedance
  (Z) is the total combined opposition in AC circuits, calculated
  as Z = R + jX.
related: [reflection-coefficient, characteristic-impedance]
```

**Bad — Context-dependent, covers multiple concepts, vague tags:**

```
id: antenna-stuff
title: Antenna Basics
category: antennas
tags: [antenna]
body: >
  As we discussed in Chapter 1, antennas convert electrical signals
  to radio waves. The dipole we looked at earlier has a specific
  radiation pattern. You should also know about gain, which is
  measured in dBi, and bandwidth, which relates to the SWR curve.
  There are also different polarisation types to consider.
```

This is bad because:
- References "Chapter 1" and "earlier" (context-dependent)
- Covers antennas, gain, bandwidth, SWR, and polarisation (not atomic)
- Single vague tag "antenna" (should have specific terms)
- No equations, no units on first mention of dBi
- Too broad — should be 4–5 separate Sidebands

---

## 6. Implementation Roadmap

### Phase 1: Content First (Current)
- [ ] Define the Sideband schema (this document)
- [ ] Author initial batch of 10–20 Sidebands as YAML/JSON data
- [ ] Store in `curriculum/sidebands/` directory (one file per Sideband or a single `sidebands.json`)

### Phase 2: Manual Embedding
- [x] Add `.sideband` CSS to `rf-hub-v2.css` (Section 19, approved 2026-03-26)
- [ ] Manually embed Sidebands into existing lessons/blogs using the HTML pattern
- [ ] Build a standalone `/pages/sidebands.html` glossary page

### Phase 3: Dynamic Rendering (Backend Integration)
- [ ] Store Sidebands in PostgreSQL with the schema from Section 2
- [ ] Create API endpoint: `GET /api/sidebands/:id` returns rendered HTML partial
- [ ] Create API endpoint: `GET /api/sidebands?category=fundamentals&tags=impedance` for search/filter
- [ ] Build server-side partial rendering so pages can include Sidebands by `id`
- [ ] Add "Related Sidebands" auto-suggestion based on page tags

### Phase 4: Interactivity
- [ ] Collapsible Sidebands (click to expand full content, show title-only by default)
- [ ] "Copy link" button for sharing direct fragment URLs
- [ ] Spaced repetition / "Mark as learned" integration with user progress tracking
- [ ] Search/filter on the glossary page

---

## 7. File Storage Convention

Until backend integration (Phase 3), Sidebands are stored as structured data:

```
curriculum/
└── sidebands/
    ├── README.md              ← Points back to this definition doc
    ├── fundamentals.json      ← All fundamentals-category Sidebands
    ├── antennas.json          ← All antenna-category Sidebands
    ├── measurement.json       ← All measurement-category Sidebands
    └── ...
```

Each JSON file follows this structure:

```json
{
  "category": "fundamentals",
  "sidebands": [
    {
      "id": "impedance-vs-resistance",
      "title": "Impedance, Reactance & Resistance",
      "body": "Resistance, reactance, and impedance are all forms of opposition to electrical current flow measured in Ohms (Ω). Resistance (<em>R</em>) dissipates energy as heat, reactance (<em>X</em>) temporarily stores energy (inductors/capacitors) without dissipation, and impedance (<em>Z</em>) is the total combined opposition in AC circuits, calculated as <code>Z = R + jX</code>.",
      "tags": ["impedance", "resistance", "reactance", "ohms", "AC"],
      "related": ["reflection-coefficient", "characteristic-impedance"],
      "curriculum_ref": "antennas/unit-1/lesson-3",
      "level": "foundation"
    }
  ]
}
```

---

## 8. Agent Instructions Summary

When any RF-Hub agent receives the instruction **"write a Sideband"** or **"create a Sideband for [topic]"**, they must:

1. **Read this document first** (`docs/SIDEBANDS-DEFINITION.md`)
2. **Produce one JSON object** matching the schema in Section 2
3. **Follow all authoring rules** in Section 5
4. **Produce the HTML partial** matching the pattern in Section 3 (if embedding into a page)
5. **Validate:** Is it atomic? Context-free? Properly tagged? Correct terminology and units?
6. **Add to the appropriate JSON file** in `curriculum/sidebands/`

### Quick Reference Card for Agents

```
┌─────────────────────────────────────────────────────┐
│  SIDEBAND CHECKLIST                                 │
├─────────────────────────────────────────────────────┤
│  □ Single concept only (atomic)                     │
│  □ No references to surrounding content (portable)  │
│  □ 2–5 sentences, 40–120 words (concise)            │
│  □ Correct terminology with symbols on first use    │
│  □ Units stated (Ω, dB, MHz, etc.)                  │
│  □ Category assigned (one of six)                   │
│  □ Tags: 3+ specific keywords                       │
│  □ Related Sidebands linked where applicable        │
│  □ HTML uses <aside class="sideband">               │
│  □ id="sideband-{kebab-case-id}"                    │
│  □ data-category attribute set                      │
└─────────────────────────────────────────────────────┘
```

---

## Changelog

| Date | Author | Change |
|------|--------|--------|
| 2026-03-26 | Anthony + Claude | Initial definition document |
| 2026-03-26 | Anthony + Claude | Added `.sideband` CSS to `rf-hub-v2.css` Section 19 |
| 2026-03-26 | Anthony + Claude | Added Sidebands reference to `CLAUDE.md` critical files |
