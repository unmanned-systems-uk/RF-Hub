# Unit 1 — Detailed Lesson Plans

**Archived from PROGRESS.md** — Unit 1 content work complete (all 5 MDs drafted).
These plans are reference material for the HTML conversion project.

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


---

## Lesson 5 — Polarisation: Orientation Matters (DETAILED PLAN)

**Status:** 📋 PLANNED
**Agreed:** 15 March 2026 (startup chat)
**Target file:** `unit-1/lesson-05-polarisation.md`

### Core Teaching Goal
Polarisation is the E field orientation of the radiated wave. It determines whether two antennas can couple energy efficiently. Getting it wrong costs most of your signal. This lesson resolves all five polarisation seeds planted in L04, resolves the wrong-model deferral from L02 (Section 5 — "the wave doesn't hit the antenna"), and closes Unit 1 with a capstone.

### What L05 Resolves
- **L02 deferral:** The "wave hits antenna like a beach" wrong model. L02 Section 5 flagged it and promised L05 would resolve it with a full elicit-confront-resolve treatment and two-panel visual.
- **L04 seed 1 (Section 2 — vertical monopole):** "The orientation of the conductor sets the orientation of the E field in the wave."
- **L04 seed 2 (Section 3 — collinear):** "A receiving antenna with a different polarisation orientation would not couple efficiently with this signal."
- **L04 seed 3 (Section 5 — Yagi):** Rotating elements 90° around the boom changes polarisation without changing the pattern. Two Yagis on the same tower with different element orientations won't couple well.
- **L04 seed 4 (Section 6 — patch/GPS):** GPS uses circular polarisation so the receiver works regardless of tilt.
- **L04 seed 5 (Section 7 — dish):** The dish is polarisation-neutral; the feed sets the polarisation. Satellite operators use dual-polarisation for capacity.

### What L05 Does NOT Cover
- Elliptical polarisation as a full topic (one sentence acknowledging it as the general case — no axial ratio numbers)
- Design equations for circularly polarised patches
- dBi values
- Impedance effects of polarisation

---

### Theory Sections (Layer 1)

**1. Bridge from L04 — Five Seeds, One Lesson**
- Open by explicitly naming the five places in L04 where polarisation appeared: vertical monopole, collinear, Yagi element orientation, GPS patch, dish feed.
- "You heard the word five times. Each time it was connected to a different practical consequence. This lesson explains what polarisation actually is, why it determines whether two antennas couple energy, and what circular polarisation achieves."
- Restate the energy coupling lens from L03: polarisation is a factor in coupling efficiency, alongside pattern shape.
- Short — 2–3 paragraphs. No new physics yet.

**2. What Is Polarisation?**
- Definition: the orientation of the E field oscillation in a propagating wave.
- A vertical conductor produces a vertically polarised wave — E field oscillates up and down. A horizontal conductor produces horizontally polarised — E field oscillates side to side.
- Directly harvests L04 seed 1 (vertical monopole): "the wire's orientation and the wave's E field orientation are the same thing" — that observation is now the definition.
- VISUAL: Animated wave propagating rightward. E field vector shown oscillating in one plane (vertical). The source conductor shown alongside, oriented in the same plane. Caption: "the conductor's orientation determines the E field orientation in the wave."
- VISUAL: Same wave, but now the conductor is horizontal — E field oscillates horizontally. Side-by-side with the vertical version.

**3. Why Polarisation Affects Energy Coupling — The L02 Wrong-Model Resolution**
- This is the mechanistic section. Full elicit-confront-resolve pattern.
- **Elicit:** "You might picture the wave arriving at the receiving antenna end-on, like a ball hitting a stick. The signal 'hits' the antenna and gets absorbed."
- **Confront:** That's not how coupling works. L02 told you: "the field passes through the wire — the antenna samples the field already threading through it." Now we can explain why orientation matters.
- **Resolve:** The E field component **parallel** to the conductor drives current along the conductor. The component **perpendicular** to the conductor does nothing — there is no conductor length in that direction for the field to push electrons along. If the E field is entirely perpendicular to the wire, zero current flows. Zero energy couples.
- This is why rotating an antenna changes signal strength — the question L02 explicitly deferred to L05.
- VISUAL: Two-panel diagram. **Panel A** (wrong model): wave as a projectile arriving end-on at the antenna tip, labelled "Not this — the wave does not hit the antenna." **Panel B** (correct model): wavefront passing broadside through the antenna, E field vectors shown along the conductor driving current flow, labelled "This — the E field component parallel to the conductor drives current."
- VISUAL: Three-position sequence — same wave, same antenna. Position 1: E field fully aligned with conductor (100% coupling). Position 2: E field at 45° (partial coupling — only the parallel component drives current). Position 3: E field perpendicular (0% coupling). Annotate each with the parallel component shown as a projected vector.
- Harvests L04 seed 2 (collinear): "a receiving antenna with a different polarisation orientation would not couple efficiently" — now the student knows the physical mechanism.

**4. Polarisation Mismatch and Coupling Loss**
- Now the quantitative consequence. Matched polarisation = full coupling. Cross-polarisation = near-zero coupling.
- The cos θ formula: Loss (dB) = −20 × log₁₀(cos θ), where θ is the angle between the two polarisation planes.
- VISUAL: Formula animation brief — cos θ highlighted, θ shown as the angle between two antenna orientations. Hover/scroll rearrangement: solve for θ given a target loss.
- Worked examples at real angles:
  - θ = 0° → cos 0 = 1 → 0 dB loss (matched)
  - θ = 45° → cos 45 = 0.707 → 3 dB loss (half power)
  - θ = 90° → cos 90 = 0 → theoretically infinite loss (cross-polarised)
- Mismatch summary table (from .old file, verified):
  - V→V: 0 dB | H→H: 0 dB | V→H: 20+ dB | V→45° slant: 3 dB | Any linear→Circular: 3 dB | RHCP→RHCP: 0 dB | RHCP→LHCP: 20+ dB
- Real-world note: perfect cross-pol is theoretical — reflections from buildings, terrain, and ionosphere mix the polarisation, but you can still lose 20+ dB.
- **Interactive exercise with polarisation-mismatch.html** inserted here. Guided exploration:
  1. "Set the TX to vertical linear. Rotate the RX antenna slowly from 0° to 90°. Watch the oscilloscope and FFT."
  2. "At what angle does the FFT peak drop by 3 dB? What angle is that?"
  3. "Continue to 90°. What happens to the received signal?"
  4. "Now switch the TX to RHCP mode. Rotate the RX through the full 360°. What do you notice about the FFT peak level?"
  5. "Why is the circular-to-linear loss constant regardless of rotation angle?"
- Harvests L04 seed 3 (Yagi): two Yagis on the same tower, one horizontal, one vertical — same pattern, different polarisation, poor coupling between them. Now the student can calculate the loss.

**5. Circular Polarisation**
- The E field vector rotates as the wave propagates — traces a helix through space.
- RHCP: looking at the oncoming wave, the E field rotates clockwise. Right-hand rule: point right thumb in direction of travel, fingers curl in direction of rotation.
- LHCP: counter-clockwise looking at the oncoming wave.
- Why satellites use it: the satellite's orientation relative to the ground station constantly changes as it crosses the sky. A linearly polarised signal would fade as the relative angle shifted. Circular polarisation handles this automatically — as long as the receiving antenna matches the hand, orientation doesn't matter.
- The 3 dB penalty: receiving a circularly polarised signal with a linear antenna (or vice versa) always costs exactly 3 dB — half the power. This is because the linear antenna can only respond to one component of the rotating field. It's constant regardless of antenna rotation — which is exactly the property that makes circular useful for satellites.
- Opposite-hand circular is cross-polarised: RHCP → LHCP gives 20+ dB loss, same as V → H.
- Harvests L04 seed 4 (GPS/patch): GPS satellites transmit RHCP. The GPS patch in your device is designed for RHCP. This is why GPS works regardless of how you tilt your phone — the circular polarisation absorbs the orientation changes.
- One sentence on elliptical: "In practice, most real signals fall between perfect linear and perfect circular — the E field traces an ellipse. We call this elliptical polarisation. The details belong to later units."
- VISUAL: Three diagrams — (1) Linear: E field vector oscillating in one plane as the wave propagates, tip traces a straight line. (2) Circular: E field vector rotating, tip traces a circle/helix. (3) Elliptical: tip traces an ellipse. Each shown from the "looking at oncoming wave" perspective and from the side.
- VISUAL: Right-hand rule diagram — thumb pointing toward viewer (direction of travel), fingers curling clockwise = RHCP.

**6. Practical Polarisation Guide**
- Applications table (adapted from .old file, expanded):
  - FM broadcast (UK): Vertical (or mixed) — vertical whip antennas on cars
  - Amateur VHF/UHF: Vertical (FM), Horizontal (SSB/CW) — convention and practicality
  - Amateur HF: Varies — ionosphere rotates polarisation unpredictably (Faraday rotation)
  - Satellite downlinks: RHCP or LHCP — orientation-independent
  - GPS: RHCP — all GPS satellites transmit RHCP
  - Wi-Fi: Often vertical or mixed — consumer antennas typically vertical
  - TV broadcast (UK): Horizontal (legacy analogue), Vertical (some DAB)
  - ADS-B (1090 MHz): Vertical — aircraft monopole antennas
- Harvests L04 seed 5 (dish/feed): the dish is polarisation-neutral, the feed at the focal point determines the beam's polarisation. Satellite operators use dual-polarisation (V + H on the same frequency) to double capacity — the two signals don't couple because they're cross-polarised.
- Short note on Faraday rotation for HF: the ionosphere rotates the polarisation plane unpredictably, which is why HF operators don't worry much about polarisation matching — by the time the signal arrives, its polarisation has been scrambled.

**7. Unit 1 Close and Capstone**
- Brief recap of what the five lessons built — one paragraph per lesson:
  - L01: EM wave born from changing fields (λ = c/f, E⊥H inseparable pair)
  - L02: Antenna radiates by field detachment (current → field expansion → pinch-off → free propagation)
  - L03: Radiation pattern as energy coupling map (donut shape, polar plots, directivity)
  - L04: Six antenna families, current distribution as the analytical lens, directivity spectrum
  - L05: Polarisation completes the picture — E field orientation, coupling loss, circular polarisation
- Forward reference to Unit 2: "You now understand the wave, the pattern, and the polarisation. What you don't yet know is what happens at the feedpoint — impedance, matching, and how to measure it. That's Unit 2."
- **Capstone exercise — "Hunt the Source" (df-hunt.html).** Guided instructions:
  1. "You see a 2D overhead map. Somewhere on it is a hidden transmitter."
  2. "You have two small loop antennas at known positions. Remember from Lesson 4: the loop has a sharp null broadside to the loop face."
  3. "Rotate Loop A until the FFT shows minimum signal — the null is pointing at the TX. Note the bearing."
  4. "Do the same with Loop B."
  5. "The intersection of the two null bearings is where the TX is hiding. Press 'Found' when you think you have it."
  6. "If both bearings are within tolerance, you've located the transmitter."
- VISUAL: No separate visual brief needed — the df-hunt.html interactive IS the visual for this section.

---

### Interactive Layer (Layer 2)

- **polarisation-mismatch.html** — primary interactive, used after Section 4 (mismatch and coupling loss)
  - TX antenna transmitting; RX antenna with rotation slider (0°–360°)
  - Oscilloscope display: received waveform amplitude changes as cos θ
  - FFT display: peak power drops as rotation increases
  - Mode toggle: Linear TX vs Circular (RHCP) TX
  - In linear mode: student discovers the 3 dB point at 45° and the null at 90°
  - In circular mode: student sees constant 3 dB penalty regardless of RX rotation angle
  - Reuses oscilloscope/FFT rendering approach from radiation-3d-v5.html for visual consistency
  - Location: `frontend/interactives/polarisation-mismatch.html`

- **df-hunt.html** — Unit 1 capstone, used in Section 7
  - 2D overhead view of a playing field
  - Hidden TX antenna at randomised position
  - Two small loop antennas at known, fixed positions
  - Each loop has a rotation control (slider or drag-to-rotate)
  - FFT display for each loop — signal strength changes as the loop rotates, minimum at null (broadside to loop face pointing at TX)
  - Student rotates each loop to find its null bearing
  - Visual bearing lines drawn from each loop in the null direction
  - "Found" button — checks whether the intersection of the two bearings falls within a tolerance radius of the actual TX position
  - Success/failure feedback with option to try again (new random TX position)
  - Loops only — no antenna type selection
  - Location: `frontend/interactives/df-hunt.html`

- No existing interactive for polarisation visualisation (3D rotating E field vector). Noted as future enhancement. Visual briefs in the .md carry this for now.

---

### Self-Check (Layer 3)

**Part A — Quick Concepts**
1. What polarisation does a vertical whip antenna produce? Why?
2. A satellite transmits RHCP. You receive with a vertical dipole. How much signal do you lose from the polarisation mismatch? Why is it that specific number?
3. Why is circular polarisation preferred for satellite communications?
4. Your neighbour's FM antenna is mounted horizontally. Most local FM broadcasts are vertically polarised. What problem will they experience, and approximately how severe is it?
5. GPS signals are RHCP. If you tried to receive them with an LHCP antenna, what would happen? Why?

**Part B — Calculations**
1. Two linearly polarised antennas are misaligned by 30°. Calculate the polarisation mismatch loss in dB.
2. At what angle does the mismatch loss reach exactly 3 dB? Show your working.
3. A Yagi is mounted with horizontal elements. A second Yagi on the same tower is mounted with vertical elements. Both point at the same distant station. What is the approximate coupling loss between these two antennas due to polarisation alone?

**Part C — Connect It Back (Energy Coupling)**
This question ties polarisation back to the energy coupling model from Lesson 3.

A half-wave dipole is mounted vertically. An EM wave arrives from the broadside direction (maximum of the radiation pattern). The wave is horizontally polarised. Does the antenna couple energy from this wave? Explain your answer using both the radiation pattern (from L03) and polarisation (from this lesson). What does this tell you about the relationship between pattern and polarisation as factors in energy coupling?

**Part D — Antenna Scavenger Hunt (Optional Capstone Portfolio)**
Find and document **10 different antennas** in the real world (walk around your neighbourhood, drive around, or use Google Street View). For each antenna, identify and record:
- Type (dipole, Yagi, dish, vertical, panel, patch, etc.)
- Likely frequency range (use size as a clue — λ = 300/f in MHz)
- Polarisation (vertical, horizontal, circular — reason from element orientation)
- Probable purpose (mobile phone, TV, satellite, amateur, Wi-Fi, etc.)
- A photo or screenshot

Bonus challenges:
- Find at least one example of each antenna family from Lesson 4
- Spot a polarisation mismatch in the wild (a wrongly oriented TV antenna?)
- Estimate the gain of one antenna based on its type and size

---

### Key Decisions

- L05 is the final lesson in Unit 1 — closes the unit with a capstone
- Wrong-model resolution from L02 is in Section 3 using full elicit-confront-resolve pattern with two-panel visual
- All five L04 polarisation seeds are explicitly harvested (each section names which seed it resolves)
- Elliptical polarisation: one sentence only — no axial ratio, no numeric thresholds (Unit 2 territory)
- cos θ formula gets animated rearrangement visual and three worked examples
- Circular polarisation: RHCP/LHCP explained with right-hand rule; satellite rationale; 3 dB linear-circular penalty
- The capstone scavenger hunt from the .old file is retained as an optional portfolio exercise (Part D of self-check), not a graded capstone
- The primary capstone is df-hunt.html — interactive, fun, and synthesises L04 (loop DF) + L05 (polarisation)
- Loops only for df-hunt.html — no antenna type selection (the learning already happened in L04)
- polarisation-mismatch.html includes a circular/linear mode toggle so the satellite argument lands viscerally
- No dBi values, no impedance, no design equations

---

### Agent Tasks (3 separate tasks)

#### TASK 1 — Write lesson-05-polarisation.md
**Agent:** Curriculum content project (this project)
**Chat type:** Writing chat
**Input:** This plan (PROGRESS.md L05 section) + L01–L04 .md files for continuity checking
**Output:** `curriculum/antennas/unit-1/lesson-05-polarisation.md`
**Scope:**
- Write the full 7-section lesson .md following the plan above
- Include all `<!-- VISUAL: -->` briefs as specified
- Include guided interactive exercise instructions for polarisation-mismatch.html (Section 4) and df-hunt.html (Section 7)
- Include all self-check exercises (Parts A, B, C, D)
- Use energy coupling language consistent with L03
- Explicitly harvest all five L04 polarisation seeds by name
- Resolve the L02 wrong-model deferral in Section 3
- Forward reference to Unit 2 (impedance) in Section 7
- Update PROGRESS.md status to ✏️ WRITING → 📝 DRAFT when complete
**Constraints:**
- Foundation level — no axial ratio numbers, no dBi, no design equations
- One sentence on elliptical polarisation, no more
- cos θ formula: animation brief + three worked examples at 0°, 45°, 90°
- ~20–25 min reading time target

#### TASK 2 — Build polarisation-mismatch.html
**Agent:** Claude Code interactive builds project
**Output:** `frontend/interactives/polarisation-mismatch.html`
**Scope:**
- Standalone HTML file (no framework dependencies beyond what radiation-3d-v5.html uses)
- TX antenna visual — fixed orientation, transmitting
- RX antenna visual — rotation slider (0°–360°) controlling orientation
- Oscilloscope display: shows received waveform, amplitude scales as cos θ of the angle between TX and RX polarisation planes
- FFT display: shows frequency peak, peak height drops as cos θ (same relationship)
- Mode toggle button: **Linear** (default) vs **Circular (RHCP)**
  - Linear mode: amplitude follows cos θ — drops to zero at 90°, recovers through 180° (inverted phase), null again at 270°, full at 360°
  - Circular mode: amplitude is constant at cos 45° (−3 dB) regardless of RX rotation angle — student sees the flat line and understands why circular is orientation-independent
- Visual style: match RF-Hub design system (dark theme, amber/cyan/purple accents, DM Serif Display / IBM Plex Sans / IBM Plex Mono fonts, `rf-hub-v2.css` link)
- Oscilloscope/FFT rendering approach: reuse or adapt from radiation-3d-v5.html for visual consistency
- URL parameters (for iframe embedding):
  - `?mode=linear` or `?mode=circular` — start in specified mode
  - `?angle=45` — start at specified RX angle
  - `?ui=minimal` — hide title/description chrome, show only the interactive
- Responsive — works in an iframe embed and as a standalone page
- No external API calls, no build step, pure HTML/CSS/JS
**Constraints:**
- Foundation level — no axial ratio readout, no Stokes parameters, no advanced polarisation metrics
- The 3 dB circular-to-linear penalty must be visually obvious and constant
- The cos θ relationship in linear mode must be discoverable by the student before the lesson text explains the formula
- Accessible: slider must be keyboard-navigable, oscilloscope/FFT must have sufficient contrast

#### TASK 3 — Build df-hunt.html
**Agent:** Claude Code interactive builds project
**Output:** `frontend/interactives/df-hunt.html`
**Scope:**
- Standalone HTML file (no framework dependencies)
- 2D overhead view — a rectangular "playing field" area
- **Hidden TX antenna:** position randomised on each game start (or "New Game" button press). Not visible to the student until found.
- **Two small loop antennas** at fixed, known positions on the map (e.g. bottom-left quadrant and bottom-right quadrant, labelled "Loop A" and "Loop B")
- Each loop has a **rotation control** — either a slider (0°–360°) or click-and-drag rotation on the loop icon itself
- **FFT/signal strength display for each loop:**
  - Signal strength varies as the loop rotates — follows the small loop's figure-of-eight pattern relative to the bearing toward the hidden TX
  - **Minimum** (null) when the loop's broadside axis points directly at the TX
  - **Maximum** when the loop is edge-on to the TX direction
  - Display: a simple bar graph or FFT-style peak for each loop, updating in real-time as the student rotates
- **Bearing lines:** as the student rotates each loop, a faint bearing line extends from the loop in the current null direction (broadside axis). This helps the student visualise where the two bearings intersect.
- **"Found" button:** student presses when they believe they've located the TX. System checks whether the intersection of the two current null bearings falls within a tolerance radius (e.g. ±5° on each bearing, or a distance threshold from actual TX position). Success/failure feedback.
- **Success state:** TX position revealed on the map. Distance error shown. Option to play again with a new random TX position.
- **Failure state:** "Not quite — adjust your bearings and try again." Student can keep adjusting without penalty.
- Visual style: match RF-Hub design system (dark theme, amber/cyan/purple accents, fonts, `rf-hub-v2.css`)
- The loop icons should visually show their current orientation (a small oval/rectangle that rotates as the student adjusts)
- URL parameters:
  - `?ui=minimal` — hide title/description chrome
  - `?difficulty=easy` or `?difficulty=hard` — easy = TX closer to loops (larger signal variation), hard = TX further away (subtler signal changes)
- Responsive — works in iframe and standalone
- No external API calls, no build step, pure HTML/CSS/JS
**Constraints:**
- Loops only — no antenna type selection (the pedagogical choice is locked)
- Signal model: use the small loop's cos² θ power pattern (where θ is the angle between the loop's broadside axis and the bearing to the TX). This gives null broadside and maximum edge-on, matching L04 Section 4.
- The null must be sharp enough to be detectable but not so sharp that a 1° change causes a dramatic jump — smooth the response so the student can "hunt" the null gradually
- The game must be completable without any prior trigonometry knowledge — the student finds the bearings by watching the signal meter, not by calculating angles
- Accessible: rotation controls must be keyboard-navigable
- Fun: this is the Unit 1 capstone — it should feel rewarding. Consider a brief congratulatory animation on success.

### Open Items / Deferred
- Polarisation visualiser (3D rotating E field vector animation) — noted as future interactive. Visual briefs in the .md carry the concept for now.
- polarisation-mismatch.html phase inversion display through 180°–360° — decide during build whether to show phase flip or wrap cos θ as |cos θ| (simpler for foundation level). Agent to decide based on clarity.
- df-hunt.html difficulty scaling — exact thresholds (tolerance radius, signal variation range) to be tuned during build.
- CONFIG.md update — add polarisation-mismatch.html and df-hunt.html parameter specs after build is complete.
