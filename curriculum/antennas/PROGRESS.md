# RF-Hub Antenna Curriculum — Content & Progress Tracker

**Living Document** — Updated each session  
**Last Updated:** 7 March 2026  
**Current Focus:** Lesson 2 — From Waves to Wires (DRAFT complete)

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

---

## Existing Resources

### Interactive HTML Files (D:\live_code\RF-Hub\resources)
| File | Description | Used In |
|------|-------------|---------|
| `em-radiation.html` | "How Antennas Radiate" — 4-act narrative: current→fields→detachment→reception. SVG diagrams with animations | L1 (optional deep-dive), L2 (primary) |
| `em-animato-2.html` | EM Field & Radiation Pattern Animator — freq slider, wavelength readout, E/H wave views, antenna type selector | L1 (centrepiece interactive) |
| `tx-rx-complete.html` | TX to RX complete link visualisation | L2 |
| `radiation-3d-v5.html` | 3D radiation pattern viewer | L3, L9 |

---

## Curriculum Map

### Unit 1: How Antennas Work (Lessons 1–5) — No equipment needed

| # | Lesson | Status | Notes |
|---|--------|--------|-------|
| 1 | What is EM Radiation? | 📝 DRAFT | Startup chat complete, plan agreed. Writing chat complete, .md drafted |
| 2 | From Waves to Wires | 📝 DRAFT | Startup + writing (7 Mar 2026). lesson-02-how-antennas-radiate.md written. Note: HTML existed in frontend folder from unknown prior session — .md is now the canonical source. |
| 3 | Radiation Patterns | ⬜ NOT STARTED | |
| 4 | Antenna Types Tour | ⬜ NOT STARTED | |
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
- How HTML interactives are embedded (iframe vs direct link) — deferred to HTML conversion project

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

## Session Log

| Date | Lesson | Chat Type | Outcome |
|------|--------|-----------|---------|
| 1 Mar 2026 | L1 | Startup | Plan agreed. Design principles established. PROGRESS.md created |
| 1 Mar 2026 | L1 | Writing | Draft .md written (440 lines, 26KB). 6 theory sections, 7 visual briefs, 1 guided interactive exercise (em-animato-2.html), 1 optional deep-dive link (em-radiation.html), 4 self-check exercise groups |
| 7 Mar 2026 | L2 | Startup + Writing | Combined chat. Plan agreed + .md written. 5 sections, 5 visual briefs, 4-act detachment story, dipole length formula + 3 worked examples, 2 guided interactives (em-radiation.html + tx-rx-complete.html), 5-part self-check. Written to unit-1 folder as canonical source. |

