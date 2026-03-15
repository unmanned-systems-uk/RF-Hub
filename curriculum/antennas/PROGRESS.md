# RF-Hub Antenna Curriculum — Content & Progress Tracker

**Living Document** — Updated each session  
**Last Updated:** 15 March 2026  
**Current Focus:** Unit 2 — L06 Impedance (planning)

---

## Project Scope

- **What this project does:** Generate curriculum content as markdown files
- **What it doesn't do:** HTML conversion, interactive builds, login/tracking, site design
- **Pipeline:** Plan lesson (startup chat) → Write .md (writing chat) → At milestone, separate project converts .md → HTML

---

## Design Principles

### Three Parallel Learning Paths (every concept, every time)
1. **Clear text** — stands alone for readers. Short sentences, no jargon without explanation
2. **Visual design briefs** — animations/diagrams described in the .md for HTML conversion. Primary tool for visual/dyslexic learners
3. **Guided interactive exercises** — hands-on discovery using existing HTML tools

### MD File Format
Each .md contains:
- Theory text (prose, ~20-25 min reading)
- `<!-- VISUAL: description -->` blocks describing how HTML should illustrate each concept
- Formula animation briefs (letters move on hover/scroll for rearrangements)
- Technical term visual anchors (e.g. "radiation resistance" → power flow diagram)
- Interactive embedding references with guided exploration instructions
- Self-check exercises

### Key Rules
- Formulas get animated rearrangement visuals, not just static symbols
- Every abstract term gets a concrete visual anchor
- Spiral learning — introduce then revisit at depth in later lessons
- No equipment needed for Unit 1
- **Interactive embedding — Option 1 (iframe):** All interactive HTML tools are embedded via `<iframe>`. Each interactive remains a fully isolated, standalone `.html` file. Lesson `.md` files reference the target file by path. The `<!-- VISUAL: -->` brief for that section notes the iframe `src` path and suggested height. Updates to an interactive file are automatically reflected in every lesson that embeds it — no lesson file needs to change.
- **radiation-3d-v5.html — single configurable file (query parameter architecture):** One file only — never separate versioned copies. Lesson context is set via URL query parameter in the iframe `src`. If a specific antenna is passed (e.g. `?antenna=dipole`), the file loads that pattern and hides the selector. If no parameter is passed, the full selector is shown. This lets early lessons constrain student focus while later lessons open up full interactivity. Example usage per lesson:
  - L03: `radiation-3d-v5.html?antenna=dipole` — dipole only, no selector
  - L04 (sections): `radiation-3d-v5.html?antenna=vertical` — vertical pattern, reasoning exercise
  - L04 (closing): `radiation-3d-v5.html` — full selector, all families visible
  - L09: `radiation-3d-v5.html?antenna=yagi` — Yagi pattern for gain discussion
  - Claude Code enhancement brief must specify: single file, `?antenna=` query param support, selector hidden when param is present, selector shown when no param.
- **field-detachment.html — shared configurable resource, planned evolution across lessons:** Created 9 Mar 2026. Shows the field detachment lifecycle in canvas animation (4 acts). URL parameters control which acts are shown, start act, highlight mode, and UI chrome. L2 uses it as-is (all 4 acts, full UI). L3 uses Act 4 with minimal UI as visual context before introducing radiation-3d-v5.html. **Planned growth path:** for L3 the propagating loops are rudimentary but pedagogically useful — the directionality is technically inaccurate (treats all directions equally) but visually communicates propagation at foundation level. In later lessons, the animation will be enhanced toward technical accuracy (correct dipole toroid energy distribution). **Long-term goal:** synchronise loop propagation timing and pattern shape with radiation-3d-v5.html so the two tools can be used side by side and tell the same story from different angles. This is a deferred Claude Code task — see CONFIG.md for current parameter spec.

---

## Existing Resources

### Interactive HTML Files
**Canonical location:** `D:\live_code\RF-Hub\frontend\interactives\`  
**Config & parameter spec:** `D:\live_code\RF-Hub\frontend\interactives\CONFIG.md`  
*(Moved from `resources\` on 7 Mar 2026 — `resources\` no longer holds HTML interactives)*

| File | Description | Used In |
|------|-------------|---------|
| `em-radiation.html` | "How Antennas Radiate" — 4-act narrative: current→fields→detachment→reception. SVG diagrams with animations | L1 (optional deep-dive), L2 (primary) |
| `em-animato-2.html` | EM Field & Radiation Pattern Animator — freq slider, wavelength readout, E/H wave views, antenna type selector | L1 (centrepiece interactive) |
| `tx-rx-complete.html` | TX to RX complete link visualisation | L2 |
| `radiation-3d-v5.html` | 3D radiation pattern viewer — query parameter controlled (see CONFIG.md) | L3, L4, L9 |
| `field-detachment.html` | Field detachment canvas animation — 4 acts: field expands, current reverses, pinch-off, full cycle. Three-stage colour highlight (amber/red/purple). Speed slider. URL-configurable acts, start act, highlight, and UI mode. **Foundation for L3 radiation pattern visualisation — planned to grow in accuracy across lessons.** (see CONFIG.md for full parameter spec) | L2 (all acts), L3 (Act 4, minimal UI as radiation pattern context), future lessons |
| `polarisation-mismatch.html` | **PLANNED — not yet built.** TX/RX polarisation mismatch interactive. TX antenna transmits; RX antenna has a rotation slider (0°–360°). Oscilloscope shows received waveform amplitude changing as cos θ. FFT shows peak power dropping. Mode toggle: linear TX vs circular (RHCP) TX — circular mode shows constant 3 dB penalty regardless of RX rotation. Reuses oscilloscope/FFT rendering approach from radiation-3d-v5.html. | L5 (primary interactive, Section 4) |
| `df-hunt.html` | **PLANNED — not yet built.** Unit 1 capstone DF game. 2D overhead view. A hidden TX antenna at an unknown position. Two small loop antennas at known positions. Student rotates each loop to find the null bearing (FFT shows signal strength changing as loop rotates). Intersection of the two null bearings gives the TX position. "Found" button checks whether bearing angles are within tolerance. Loops only — no antenna type selection. | L5 (capstone, Section 7) |

---

## Curriculum Map

### Unit 1: How Antennas Work (Lessons 1–5) — No equipment needed

| # | Lesson | Status | Notes |
|---|--------|--------|-------|
| 1 | What is EM Radiation? | 📝 DRAFT | Startup chat complete, plan agreed. Writing chat complete, .md drafted |
| 2 | From Waves to Wires | 📝 DRAFT | Startup + writing (7 Mar 2026). lesson-02-how-antennas-radiate.md written. Note: HTML existed in frontend folder from unknown prior session — .md is now the canonical source. |
| 3 | Radiation Patterns | 📝 DRAFT | Startup chat 7 Mar 2026. Plan agreed. Writing chat 7 Mar 2026. lesson-03-radiation-patterns.md written. |
| 4 | Antenna Types Tour | 📝 DRAFT | Startup chat 7 Mar 2026. Plan agreed. Writing chat 7 Mar 2026. lesson-04-antenna-types-tour.md written. |
| 5 | Polarisation | 📝 DRAFT | Startup chat 15 Mar 2026. Writing chat 15 Mar 2026. lesson-05-polarisation.md written. 7 sections + 4-part self-check + 2 interactive exercises + capstone. All 5 L04 seeds harvested. L02 wrong-model resolved. |

### Unit 2: Antenna Characteristics & Measurement (Lessons 6–10)

| # | Lesson | Status | Notes |
|---|--------|--------|-------|
| 6 | Impedance | ⬜ NOT STARTED | |
| 7 | SWR and Return Loss | ⬜ NOT STARTED | |
| 8 | The Smith Chart | ⬜ NOT STARTED | |
| 9 | Gain & Directivity | ⬜ NOT STARTED | |
| 10 | VNA Antenna Measurement Lab | ⬜ NOT STARTED | |

### Unit 3: Antenna Design & Construction (Lessons 11–15)

| # | Lesson | Status | Notes |
|---|--------|--------|-------|
| 11 | Dipole Deep Dive | ⬜ NOT STARTED | |
| 12 | Vertical Antennas | ⬜ NOT STARTED | |
| 13 | Yagi-Uda Antennas | ⬜ NOT STARTED | |
| 14 | Broadband Antennas | ⬜ NOT STARTED | |
| 15 | Impedance Matching | ⬜ NOT STARTED | |

### Unit 4: Advanced Antenna Systems (Lessons 16–20)

| # | Lesson | Status | Notes |
|---|--------|--------|-------|
| 16 | Antenna Arrays | ⬜ NOT STARTED | |
| 17 | Phased Arrays | ⬜ NOT STARTED | |
| 18 | Direction Finding | ⬜ NOT STARTED | |
| 19 | Practical Phased Array | ⬜ NOT STARTED | |
| 20 | Software Beamforming | ⬜ NOT STARTED | |

**Status Key:** ⬜ NOT STARTED → 📋 PLANNED → ✏️ WRITING → 📝 DRAFT → ✅ COMPLETE

---

> **Detailed lesson plans** for each unit live in their unit folder:
> - unit-1/UNIT-1-PLANS.md — L01–L05 (all drafted)
> - unit-2/UNIT-2-PLANS.md — L06–L10 (created as planning begins)

---

## Session Log

| Date | Lesson | Chat Type | Outcome |
|------|--------|-----------|---------|
| 15 Mar 2026 | All | Housekeeping | Project cleanup: moved .old files to `archive/frontend/unit-1-old-html/`, stray HTMLs and amendment docs to `archive/curriculum/antennas/unit-1-amendments/`, consolidated `_archive/frontend-md-drafts/` to `archive/`, moved CURRICULUM-STATUS.md to `curriculum/antennas/`, split PROGRESS.md (775→141 lines) with lesson plans extracted to `unit-1/UNIT-1-PLANS.md` (647 lines). Reviewed existing lesson-06-impedance.html for reusable content. |
| 15 Mar 2026 | L5 | Writing | Draft .md written (lesson-05-polarisation.md). 7 sections: bridge from L04 (5 seeds named) → what polarisation is (definition, Seed 1) → wrong-model resolution from L02 (elicit-confront-resolve, two-panel visual, Seed 2) → mismatch and coupling loss (cos θ formula, 3 worked examples, mismatch table, polarisation-mismatch.html guided exercise, Seed 3) → circular polarisation (RHCP/LHCP, right-hand rule, GPS/satellite rationale, 3 dB penalty, Seed 4) → practical guide (10-row applications table, dual-pol, Faraday rotation, Seed 5) → Unit 1 close + df-hunt.html capstone. Self-check: Parts A–D (concepts, calculations, cross-lesson energy coupling, optional scavenger hunt). 7 visual briefs. |
| 15 Mar 2026 | L5 | Startup | Plan agreed. 7 sections: bridge from L04 → what polarisation is → wrong-model resolution (L02 deferral) → mismatch and coupling loss → circular polarisation → practical guide → Unit 1 close + capstone. Two new interactives specified: polarisation-mismatch.html (TX/RX rotation with oscilloscope/FFT) and df-hunt.html (loop DF triangulation game). Three agent tasks defined. Reviewed lesson-05-polarisation.old — rejected as retrofit, retained as reference. |
| 9 Mar 2026 | All | Architecture | **field-detachment.html created and moved to shared interactives.** Canvas animation — 4 acts, three-stage colour highlight (amber/red/purple), speed slider. URL params: `?acts=`, `?start=`, `?highlight=`, `?ui=`. Moved to `frontend/interactives/`. CONFIG.md updated with full param spec and per-lesson usage table. PROGRESS.md updated with evolution plan. |
| 9 Mar 2026 | All | Architecture | **field-detachment.html evolution decision.** L2 uses as-is (all acts, full UI). L3 uses `?acts=4&start=4&ui=minimal` as radiation pattern visual context. Long-term: enhance toward technically accurate dipole pattern, synchronise with radiation-3d-v5.html. Deferred Claude Code task. |
| 7 Mar 2026 | All | Architecture | **Interactives relocated to `frontend\interactives\`.** All four HTML files moved from `resources\`. CONFIG.md created with full query parameter spec for `radiation-3d-v5.html` and iframe embed format. See `frontend\interactives\CONFIG.md`. |
| 7 Mar 2026 | All | Architecture | **radiation-3d-v5.html query parameter architecture locked.** Single file, `?antenna=` param controls which pattern loads and whether selector is visible. No versioned copies ever. See Key Rules for full spec and per-lesson usage table. |
| 7 Mar 2026 | All | Architecture | **iframe embedding rule locked (Option 1).** All interactives embedded via iframe. See Key Rules. |
| 7 Mar 2026 | L4 | Startup | Plan agreed. 6 antenna families in directivity order. Polarisation seeds planted at vertical, collinear, Yagi, patch/GPS, and dish. radiation-3d-v5.html used for vertical comparison only; static briefs for all other types. |
| 7 Mar 2026 | L4 | Writing | Draft .md written (424 lines). 8 theory sections + interactive exercise + 4-part self-check + summary. 6 antenna families (monopole, collinear, loop, Yagi, patch, dish). 5 polarisation seeds. 9 visual briefs. Directivity spectrum closing section with explicit L05 handoff. |
| 1 Mar 2026 | L1 | Startup | Plan agreed. Design principles established. PROGRESS.md created |
| 1 Mar 2026 | L1 | Writing | Draft .md written (440 lines, 26KB). 6 theory sections, 7 visual briefs, 1 guided interactive exercise (em-animato-2.html), 1 optional deep-dive link (em-radiation.html), 4 self-check exercise groups |
| 7 Mar 2026 | L2 | Startup + Writing | Combined chat. Plan agreed + .md written. 5 sections, 5 visual briefs, 4-act detachment story, dipole length formula + 3 worked examples, 2 guided interactives (em-radiation.html + tx-rx-complete.html), 5-part self-check. Written to unit-1 folder as canonical source. |
| 7 Mar 2026 | L3 | Startup | Plan agreed. Energy coupling as lesson thread confirmed. radiation-3d-v5.html enhancement logged as separate deferred task. |
| 7 Mar 2026 | L3 | Writing | Draft .md written. 7 sections + 5-part self-check. Energy coupling wrong-model correction in S2, consistent language throughout. 3D pattern, polar plot reading, F/B ratio, directivity, pattern preview. Static visual briefs for multi-antenna comparison. |


---

