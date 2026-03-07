# RF-Hub Antenna Curriculum — Content & Progress Tracker

**Living Document** — Updated each session  
**Last Updated:** 7 March 2026  
**Current Focus:** Lesson 3 — Radiation Patterns (DRAFT complete)

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

---

## Curriculum Map

### Unit 1: How Antennas Work (Lessons 1–5) — No equipment needed

| # | Lesson | Status | Notes |
|---|--------|--------|-------|
| 1 | What is EM Radiation? | 📝 DRAFT | Startup chat complete, plan agreed. Writing chat complete, .md drafted |
| 2 | From Waves to Wires | 📝 DRAFT | Startup + writing (7 Mar 2026). lesson-02-how-antennas-radiate.md written. Note: HTML existed in frontend folder from unknown prior session — .md is now the canonical source. |
| 3 | Radiation Patterns | 📝 DRAFT | Startup chat 7 Mar 2026. Plan agreed. Writing chat 7 Mar 2026. lesson-03-radiation-patterns.md written. |
| 4 | Antenna Types Tour | 📝 DRAFT | Startup chat 7 Mar 2026. Plan agreed. Writing chat 7 Mar 2026. lesson-04-antenna-types-tour.md written. |
| 5 | Polarisation | ⬜ NOT STARTED | |

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

## Lesson 1 — What is EM Radiation? (DETAILED PLAN)

**Status:** 📝 DRAFT  
**Agreed:** 1 March 2026 (startup chat)  
**Written:** 1 March 2026 (writing chat)  
**Target file:** `unit-1/lesson-01-em-radiation.md`

### Theory Sections (Layer 1)

1. **What is a field?**
   - Not mystical — "a value at every point in space"
   - Gravity as familiar example, then electric, then magnetic
   - VISUAL: animated field lines appearing around objects (gravity around Earth, E around charge, H around magnet)

2. **Static vs changing fields — the Maxwell insight**
   - Static charge → E field (goes nowhere)
   - Static magnet → H field (goes nowhere)
   - CHANGE one → CREATES the other. This is the engine.
   - VISUAL: side-by-side — static field (boring, stationary) vs changing field (new field type springs into existence)

3. **The wave is born**
   - Accelerating charge → changing E → creates H → changing H → creates E → self-sustaining
   - Soap bubble analogy (revisited in L2 with full detachment story)
   - VISUAL: chain reaction animation — each field generating the next, propagating outward

4. **Wavelength, frequency, and c**
   - λ = c/f relationship
   - Physical intuition: 145 MHz ≈ 2m, 2.4 GHz ≈ 12.5cm, visible light ≈ nanometres
   - VISUAL: formula rearrangement animation (solve for λ, f, or c — letters slide into position)
   - VISUAL: wavelength-at-human-scale comparisons (2m wave next to a person, 70cm next to an arm, etc.)

5. **The electromagnetic spectrum**
   - Radio → microwave → IR → visible → UV → X-ray → gamma
   - Where amateur bands live, where SDR range sits
   - ALL the same thing (E⊥H at c), just different frequencies
   - VISUAL: zoomable spectrum strip with clickable bands showing wavelength at human scale

6. **E and H: the inseparable pair**
   - E oscillates one way, H perpendicular, wave travels perpendicular to both
   - Preps student for the interactive
   - VISUAL: the classic E⊥H⊥k diagram, animated

### Interactive Layer (Layer 2)

- **em-animato-2.html** — embedded/linked after Section 4 with guided exercise:
  - "Set frequency to 145 MHz. Note the wavelength."
  - "Slide to 440 MHz — what happened?"
  - "Now try 1296 MHz."
  - "Can you find a frequency where wavelength = 1 metre?"
- **em-radiation.html** — linked after Section 6 as optional "go deeper" preview of Lesson 2

### Self-Check (Layer 3)

- Quick-fire λ = c/f calculations (5 examples, HF through microwave)
- Spectrum placement exercise (FM broadcast, 2m, 70cm, WiFi, GPS — where do they sit?)
- Concept questions ("Can you have E without H in a propagating wave? Why not?")

### Open Decisions
- ~~How HTML interactives are embedded (iframe vs direct link)~~ — **Resolved 7 Mar 2026: iframe (Option 1). See Key Rules.**

---

## Lesson 2 — From Waves to Wires (DETAILED PLAN)

**Status:** 📝 DRAFT
**Agreed:** 7 March 2026 (startup chat)
**Written:** 7 March 2026 (writing chat)
**Target file:** `unit-1/lesson-02-how-antennas-radiate.md` ✅ Written

### Theory Sections (Layer 1)

1. **Bridge from Lesson 1**
   - Recap: changing fields → EM wave (L1). Now flip: we have a wire — how do we make it emit that change?
   - Connects to L1's E⊥H pair; sets up the lesson's central question

2. **DC vs AC: the acceleration key** *(short)*
   - DC = steady current = constant field = no radiation
   - AC = reversing current = charges accelerating = fields shaking loose
   - VISUAL: side-by-side animation — static DC wire (field lines sit still) vs AC wire (field lines detaching and propagating)

3. **The detachment story** *(main new content)*
   - 4-act narrative in text: current builds → field expands outward → current reverses → expanded field can't snap back → it pinches off → propagates freely
   - Soap bubble analogy from L1 pays off here
   - VISUAL: sequential diagram — 4 frames showing field expansion, reversal, pinch-off, free propagation
   - → "Now watch it happen" bridge → guided walk through `em-radiation.html` act by act (Layer 2)

4. **The half-wave dipole**
   - Standing wave pattern: current max at centre (feedpoint), zero at tips; voltage is inverse
   - Guitar string analogy
   - Physical length formula: L = λ/2 = c/(2f). Worked examples at 145 MHz, 435 MHz, 1296 MHz
   - VISUAL: formula rearrangement animation (L, c, f — letters slide to solve for each variable)
   - VISUAL: dipole diagram with current distribution curve overlaid (sinusoidal, peak at centre)
   - Forward reference: "Why λ/2 specifically? That's the resonance story — we'll dig into it in Lesson 6."

5. **Reciprocity** *(short)*
   - TX and RX are mirror images: same pattern, same gain, same impedance
   - Correct language: the passing E field *induces* current in the conductor (not "hits" or "lands on")
   - Wrong-model flag: "You might picture the wave arriving like a wave hitting a beach. That picture will mislead you — we'll replace it properly in Lesson 5 when we cover polarisation."
   - VISUAL (deferred to L5): two-panel diagram — Panel A (wrong: wave as projectile hitting antenna end-on, labelled "Not this") vs Panel B (correct: wavefront passing through antenna broadside, E field vectors along conductor driving current, labelled "This — the field threads through the conductor")
   - → Guided exercise: `tx-rx-complete.html`

### Interactive Layer (Layer 2)

- **em-radiation.html** — primary interactive, used after Section 3 (detachment story)
  - Guided walk: Act 1 (current and fields), Act 2 (field expansion), Act 3 (current reversal / pinch-off), Act 4 (free propagation and reception)
  - Each act: student observes, then a one-sentence prompt ties it back to the text
- **tx-rx-complete.html** — after Section 5 (reciprocity)
  - Short exercise: identify where the antenna sits in the TX chain vs RX chain; note they are identical

### Self-Check (Layer 3)

- Physical length calculations: calculate element length at 145 MHz, 435 MHz, 1296 MHz (applies L1 λ=c/f + L2 L=λ/2)
- Concept questions: DC vs AC radiation, where current is max/zero on a dipole, what reciprocity means
- Optional: sketch current distribution from memory, check against the diagram

### Key Decisions

- Why λ/2 is NOT explained in L2 — deferred to L6 (Impedance / resonance). L2 treats it as a given practical fact with a forward reference.
- Wrong RX mental model ("wave hits antenna") flagged in L2 but NOT fully resolved — deferred to L5 (Polarisation) where it gets full elicit-confront-resolve treatment with the two-panel visual
- Correct language for RX: "the E field induces current in the conductor" — used from L2 onward
- Text-first approach: full text story in Section 3 before directing student to em-radiation.html

---

## Lesson 3 — Radiation Patterns (DETAILED PLAN)

**Status:** 📋 PLANNED
**Agreed:** 7 March 2026 (startup chat)
**Target file:** `unit-1/lesson-03-radiation-patterns.md`

### Core Teaching Goal
Establish the radiation pattern as a **3D map of energy distribution** — not "signal strength," not "where the wave goes," but where this antenna couples energy most efficiently. This framing unifies TX and RX naturally (same map, both directions) and directly corrects the common wrong model of the receive antenna as a passive voltage pickup.

### Energy Coupling — Wrong Model Correction (runs through entire lesson)
This is a persistent thread, not a single correction:
- **One explicit correction** in Section 2 (naming the wrong model and replacing it)
- **Consistent language** throughout: "energy couples," "efficient coupling," "energy transfer geometry"

Wrong models to correct:
- ❌ "E field induces a voltage, which drives a current" — makes voltage the received quantity
- ❌ "The signal hits the antenna and is absorbed" — wave-as-projectile
- ✅ The EM wave carries energy. The antenna couples that energy into current flow. Every antenna property (length, orientation, resonance, pattern) is a factor in how efficiently that coupling occurs.

### Theory Sections (Layer 1)

1. **Bridge from Lesson 2**
   - L2 ended: "the detached wave propagates outward carrying energy." L3 opens: where does that energy go?
   - Plant energy language immediately: "an antenna doesn't just emit a signal — it distributes electromagnetic energy in a specific 3D shape."

2. **What is a radiation pattern?**
   - A 3D map of energy distribution — at every direction in space, how efficiently does this antenna couple energy?
   - Explicit wrong-model correction here: "you might think of it as 'where the signal is strongest' — roughly right, but the more precise picture is: where does energy transfer most efficiently between this antenna and the wave?"
   - Works identically TX and RX (same geometry, same coupling efficiency) — reciprocity lands naturally here
   - VISUAL: radiation-3d-v5.html introduced here — "look at this shape before we explain it"

3. **Why a donut? Current distribution drives the shape**
   - Direct connection back to L2 current distribution: the pattern shape is *caused by* the current distribution
   - Maximum current at centre → maximum radiation broadside
   - Zero current at tips → zero radiation along the wire axis (the nulls are not random — they are the boundary condition from L2)
   - On the RX side: "along the null axis, no energy couples — not because the wave missed the antenna, but because the geometry cannot transfer energy from that direction"
   - Guitar string payoff from L2: same null-at-boundary physics, different medium
   - VISUAL: dipole with current distribution overlaid (from L2), arrows showing "maximum current here → maximum energy radiates this way," null axis clearly marked

4. **Reading a polar plot**
   - 2D slices of the 3D pattern — two key planes
   - Both naming conventions introduced: H-plane / azimuth plane (top-down), E-plane / elevation plane (side)
   - dB scale: relative only. 0 dB = peak. Reference rings at −3 dB and −10 dB. Framed as: "how much less energy couples at this angle compared to peak"
   - VISUAL: E-plane and H-plane polar plots for the half-wave dipole, annotated with: main lobe, nulls, −3 dB ring, −10 dB ring, axis labels with both naming conventions

5. **Front-to-back ratio** *(short)*
   - Introduced via a generic asymmetric polar plot (labelled "example directional antenna — not yet explained")
   - No antenna type, no construction — just: how many dB quieter is the back lobe vs main lobe? Read it off the plot.
   - Dipole teaching point: dipole is symmetric, so no meaningful F/B ratio. "When we reach directional antennas in Lesson 4, F/B ratio becomes a key design target."
   - VISUAL: generic asymmetric polar plot with F/B annotation. NOT a Yagi — a schematic/abstract shape.

6. **Directivity: concentrating energy** *(concept only, no formulas)*
   - If you reshape the pattern to concentrate energy in fewer directions, those directions receive more — total energy budget unchanged, just redistributed
   - Isotropic radiator as reference: a theoretical point source radiating equally in all directions (a sphere). Every real antenna is compared to this.
   - The dipole is slightly better than isotropic in the broadside plane — it steals energy from the null axes and redirects it
   - Hard stop: no dBi, no efficiency formula, no gain number. L9 owns this.
   - VISUAL: sphere (isotropic) vs donut (dipole), same total energy, different shape. Simple side-by-side.

7. **Pattern preview** *(very short — 1–2 paragraphs)*
   - Static visuals: dipole toroid, vertical (same toroid rotated 90°), one generic directional pencil shape
   - One paragraph: "different antenna geometries produce different energy distribution shapes — Lesson 4 is the tour"
   - NOTE: radiation-3d-v5.html is currently dipole-only. Static visuals carry this section for now.
   - DEFERRED TASK: radiation-3d-v5.html needs enhancement (see below) — when built, HTML conversion swaps static visuals for interactive

### Interactive Layer (Layer 2)

- **radiation-3d-v5.html** — current dipole-only version, used after Section 2 and Section 3
  - After Section 2: "just look at this shape before we explain it" — free exploration, no specific task
  - After Section 3 (guided exercise):
    1. Rotate the 3D pattern — identify the toroid, identify the two nulls
    2. "Where would you place a receiving antenna to get maximum energy coupling?"
    3. "Where would you place it to get zero coupling? Why does zero coupling occur at exactly those points?" (connect to L2 current distribution)
    4. Toggle rings vs shells — "what does each view show about how energy propagates outward?"

### Self-Check (Layer 3)

- Polar plot reading: 3 diagrams (dipole E-plane, dipole H-plane, generic directional), identify main lobe, nulls, estimate F/B ratio where applicable
- Concept questions: why are dipole nulls at the tips? What does a circular polar plot imply about energy distribution? What does directivity mean without using any numbers?
- **Energy coupling question:** "A dipole is placed in the path of an EM wave, but its axis is aligned with the wave's direction of travel. What happens to energy coupling? Why?" (tests null understanding through the energy lens)
- Sketch from memory: E-plane and H-plane patterns for a vertical half-wave dipole, with both naming convention labels

### Key Decisions

- dB scale is relative only (0 dB = peak). No dBi, no absolute gain. L9 owns that.
- Both plane naming conventions introduced together (H-plane/E-plane AND azimuth/elevation)
- F/B ratio via generic asymmetric polar plot — no Yagi, no specific antenna type
- Light pattern preview at end (static visuals) to motivate L4
- radiation-3d-v5.html used for dipole pattern only — static briefs cover other pattern shapes
- "Energy coupling" is the consistent language throughout (not "signal strength," not "voltage induced")

### Deferred — radiation-3d-v5.html Enhancement
**Separate task for Claude Code agent.** Architecture confirmed: single file, query parameter control (see Key Rules). The enhancement needs:
- Vertical antenna pattern (same toroid, rotated 90°)
- At minimum one directional pattern (Yagi-style or generic pencil lobe)
- `?antenna=` query parameter support — loads specified pattern, hides selector
- No parameter = full selector shown, all antenna types available
- When built, HTML conversion updates affected lesson iframes to use correct `?antenna=` parameters

---

## Session Log

| Date | Lesson | Chat Type | Outcome |
|------|--------|-----------|---------|
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

## Lesson 4 — Antenna Types Tour (DETAILED PLAN)

**Status:** 📋 PLANNED
**Agreed:** 7 March 2026 (startup chat)
**Target file:** `unit-1/lesson-04-antenna-types-tour.md`

### Core Teaching Goal
Build a mental map of the main antenna families. For each: what does the current distribution look like → what pattern shape does that produce → where and why would you use it? Organising principle is **increasing directivity** — from omnidirectional to pencil-beam — so the lesson has a coherent through-line rather than a random list.

### What L04 Does NOT Cover
No impedance values, design equations, construction specifics, or absolute dBi gain numbers. Those belong to Units 2 and 3. L04 is a conceptual map, not a design guide. Forward references are used liberally.

### Polarisation Seed Strategy
L04 plants five seeds for L05, all lightweight. Each seed names the concept "polarisation" without explaining it — the student hears the word in context, sees why it matters, and is pointed to L05. No definition is given in L04.

---

### Theory Sections (Layer 1)

**1. Bridge from L03**
- L03 closed: "you'll meet the main antenna families and see how each produces a different pattern shape through different physical design choices."
- Restate the analytical lens: current distribution → pattern shape. This is the question to ask about every antenna type in this lesson.
- Introduce the organising axis: we'll move from antennas that spread energy in all horizontal directions equally, to antennas that concentrate it into a narrow beam. The physics driving that progression is the same throughout.

**2. Vertical / Monopole**
- Half a dipole above a ground plane. The ground plane acts as a mirror — it supplies the missing half of the dipole via its image.
- Quarter-wave monopole: most common variant. Current maximum at the base (feed point), zero at the tip.
- Pattern: same toroid as the dipole but truncated — the lower hemisphere is replaced by the ground plane. Energy radiates outward in all horizontal directions equally (omnidirectional in azimuth).
- Low radiation angle: the ground plane redirects some energy toward the horizon — useful for ground-to-ground communication.
- VISUAL: side-by-side — full dipole with its toroid vs quarter-wave monopole with ground plane and its half-toroid. Current distribution overlaid on both.
- **Guided exercise with radiation-3d-v5.html**: "Load the dipole pattern. Imagine slicing the toroid at the equator and removing the bottom half. That's what the ground plane does. Where does that energy go?" (Conceptual — student reasons from what they see, not from a monopole pattern they don't have.)
- **POLARISATION SEED:** "Notice the antenna element is vertical. The E field in the wave it produces oscillates vertically — in the same plane as the wire. This is called polarisation. We'll build the full picture in Lesson 5, but keep this in mind: the orientation of the conductor sets the orientation of the E field in the wave."

**3. Collinear Array**
- Multiple half-wave elements stacked end-to-end on a single vertical axis, with phasing sections between them.
- Each element adds its radiation to the others in the horizontal plane. The donut gets squashed — more energy concentrates toward the horizon, less goes skyward.
- The pattern stays omnidirectional in azimuth (circle in H-plane) — the symmetry is preserved. The E-plane pattern compresses.
- This is directivity in action from L03: same total energy, redistributed. The student can visualise the donut being pressed flatter by a hand from above and below.
- Real-world use: base station antennas — every direction on the horizon matters, but you don't want to waste energy pointing at the sky or into the ground.
- VISUAL: E-plane comparison — single vertical dipole pattern (wide donut) vs 4-element collinear (flattened donut). H-plane for both: both circles. Same total energy, different distribution shown by equal area.
- **POLARISATION SEED:** "Stacking vertical elements keeps the overall polarisation vertical. When we reach Lesson 5, this will be relevant: a horizontally polarised antenna at the other end of the link would not couple efficiently with this signal."

**4. Loop**
- A closed conducting loop. Current circulates around the loop — the current distribution is fundamentally different from an open dipole.
- Small loop (circumference << λ): the pattern has a figure-of-eight with nulls **broadside to the loop plane** (perpendicular to the loop face). This is the opposite null orientation from a dipole.
- This matters enormously for direction finding (DF): rotate a small loop until the null points at a signal source — the loop face is then perpendicular to the incoming wave. The null is sharp and easy to detect.
- Large loop (circumference ≈ λ): different current distribution, different pattern. Briefly noted — not the focus.
- VISUAL: small loop diagram with current flow arrows around the loop; radiation pattern showing null broadside to the loop face and maximum edge-on; comparison to dipole showing opposite null orientation.
- VISUAL: DF use diagram — loop being rotated to find the null, with signal source direction indicated.

**5. Yagi-Uda**
- One driven element (half-wave dipole) + one reflector (slightly longer, behind the driven element) + one or more directors (slightly shorter, in front).
- The parasitic elements are not connected to the transmitter — they are driven by the near-field of the driven element and re-radiate with a phase shift that either adds (directors, forward) or subtracts (reflector, backward).
- Pattern consequence: energy is concentrated forward, suppressed backward. The toroid of the dipole is reshaped into a forward lobe.
- F/B ratio from L03 is applied here for the first time to a real antenna. The more elements, the more forward gain — and usually the better the F/B.
- Real-world use: terrestrial TV receiving antennas are Yagis. Ham radio VHF/UHF directional links. Satellite ground stations.
- VISUAL: Yagi diagram with element labels (reflector, driven element, directors). Current distribution on each element — amplitude and phase relationship shown qualitatively. Radiation pattern showing forward lobe + suppressed back lobe + F/B ratio marked.
- NOTE: no element lengths, no design equations. The physical principle only.
- **POLARISATION SEED:** "Notice that it's the orientation of the **driven element** that determines polarisation — not the direction the boom points. A horizontal Yagi (boom pointing toward the target, elements horizontal) produces horizontally polarised waves. Rotate the whole Yagi 90° around the boom axis — now the elements are vertical, and so is the polarisation. The gain pattern is the same; the polarisation is different. We will return to this in Lesson 5."

**6. Patch / Microstrip**
- A flat rectangular (or circular) conductor above a ground plane, separated by a thin dielectric. Fed from the edge or a probe through the substrate.
- The current distribution is along the patch surface. Radiation occurs primarily from the two radiating edges (the sides where the E field fringe outward).
- Pattern: broadside — the main lobe points perpendicular to the patch surface, not along it. Wide beamwidth in both planes. Low gain compared to Yagi or dish, but compact and low-profile.
- Real-world use: WiFi and Bluetooth antennas inside laptops and phones. GPS receivers. Phased arrays (many patches together — Unit 4).
- VISUAL: patch cross-section showing dielectric layer, ground plane, fringing E fields at edges; 3D pattern showing broadside main lobe.
- **POLARISATION SEED:** "GPS uses patch antennas, but not ordinary linearly polarised ones. GPS satellite signals are circularly polarised — meaning the E field vector rotates as the wave travels. A circularly polarised GPS patch works no matter how you tilt your receiver. That's the trick. Lesson 5 will explain what circular polarisation is and why it's useful. For now: GPS patches are an example of an antenna designed specifically for a polarisation property, not just a pattern property."

**7. Dish / Parabolic Reflector**
- Not an antenna on its own — it is a reflector. A feed antenna (dipole, horn, patch) sits at the focal point. The dish converts the feed's near-spherical radiation into a narrow parallel beam.
- The physics: any ray from the focal point reflects off the parabola parallel to the axis. The wavefront emerging from the dish is flat (planar), which produces a very narrow, high-gain beam.
- The larger the dish relative to wavelength, the narrower the beam. Satellite dishes, microwave backhaul links, radio telescopes — all the same principle, different scales.
- Pattern: extreme pencil beam. Very high directivity. Very high F/B ratio. Narrow beamwidth requires precise pointing.
- VISUAL: parabolic dish cross-section with ray diagram — focal point, reflection paths, emerging parallel beam. 3D pattern showing pencil lobe.
- **POLARISATION SEED:** "The dish itself is polarisation-neutral — it just reflects. The polarisation of the beam is set entirely by the feed antenna at the focus. Point a vertically polarised dipole feed at the dish: vertically polarised beam. Replace it with a circularly polarised horn: circularly polarised beam. The dish amplifies the pattern; the feed antenna defines the polarisation."

**8. Pattern Preview and the Directivity Spectrum**
- Short closing section (~2 paragraphs).
- Recap the six families as a spectrum: vertical/monopole → collinear → loop (omnidirectional but different null) → Yagi → patch → dish.
- The directivity progression: from "same energy in all horizontal directions" to "almost all energy in one narrow direction."
- The same physics throughout: current distribution determines pattern shape. More complex current distributions can produce more concentrated patterns.
- Forward reference to L05: "Before we go further into antenna design, we need to talk about polarisation — a property that sits alongside the pattern and matters just as much for whether two antennas actually couple energy."
- No new VISUAL needed here — the summary is conceptual.

---

### Interactive Layer (Layer 2)

- **radiation-3d-v5.html** — used in Section 2 only (vertical/monopole).
  - Exercise: load the dipole 3D pattern. Student reasons from it to the monopole pattern by imagining the ground-plane truncation. Guided prompt: "Which half of this pattern does the ground plane replace? What does the antenna do with that energy?"
  - This is deliberately conceptual — the student doesn't have a monopole pattern to look at, they have to reason from what they know.

- Static visual briefs carry all other sections (collinear, loop, Yagi, patch, dish). The radiation-3d-v5.html enhancement (multi-type selector) is a deferred task — when complete, this lesson's interactive layer gets upgraded.

---

### Self-Check (Layer 3)

**Part A — Pattern Matching**
Six unlabelled polar plots (E-plane or H-plane). Student matches each to: vertical monopole, collinear, loop, Yagi, patch, dish. One sentence of justification required for each.

**Part B — Directivity Ranking**
Rank the six antenna families from most omnidirectional to most directional. Write one sentence explaining why each step in the ranking occurs — what physical change drives the increase in directivity?

**Part C — Concept Questions**
1. A collinear array has more gain on the horizon than a single vertical, but its H-plane pattern is still a circle. How is that possible? What did directivity tell us about this in Lesson 3?
2. A small loop and a half-wave dipole are both placed vertically. A signal arrives from the front. Which couples more energy? Now the signal arrives broadside. Which couples more? (Tests understanding of opposite null orientations.)
3. Why do Yagi directors need to be slightly shorter than the driven element? (Qualitative answer only — what effect does this produce on the radiated wave?)
4. The dish is described as "polarisation-neutral." What does that mean, and what determines the polarisation of a dish antenna in practice?

**Part D — Antenna Selection Scenario**
Given each communication requirement, choose an antenna family and give a one-paragraph justification referencing pattern shape and energy coupling:
1. A mobile repeater base station serving vehicles in all directions on a flat plain.
2. A point-to-point microwave link between two buildings 15 km apart.
3. A direction-finding receiver trying to locate an emergency beacon.
4. A GPS receiver in a handheld device that gets tilted in all orientations.

---

### Key Decisions

- Organising principle is increasing directivity — not alphabet order or random list
- No design equations, no element lengths, no construction details — conceptual map only
- Polarisation seeds planted at 5 points (vertical, collinear, Yagi, patch, dish) — word "polarisation" used, concept named, explanation deferred to L05
- Loop included for null orientation contrast and DF relevance — small loop only
- radiation-3d-v5.html used for vertical section only (dipole reasoning exercise)
- Patch section used to introduce circular polarisation by name via GPS example — no definition, pure hook
- Dish closes the directivity spectrum — feed sets polarisation is the seed
- L05 "What's Next" transition: polarisation as the next property alongside pattern

### Open Items / Deferred
- radiation-3d-v5.html enhancement (multi-type selector) remains deferred to Claude Code project
- When enhancement complete: Sections 2–7 get interactive comparison exercises added; static briefs remain in .md as fallback
