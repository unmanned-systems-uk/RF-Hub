# RF-Hub Antenna Curriculum
## A Structured, Progressive Learning Path

**Version:** 1.0 — Draft for Review  
**Date:** 1 March 2026  
**Status:** PROPOSAL — Awaiting Anthony's approval

---

## Overview

4 Units, 20 Lessons — building from zero knowledge to phased array construction.

Each lesson has three layers:
1. **Theory** — Concepts explained clearly with diagrams
2. **Interactive** — Browser-based visualisations and calculators
3. **Hands-On Lab** — Real equipment exercises (where applicable)

## Design Principles

- **Build on what exists.** The four resource files (`em-radiation.html`, `em-animato-2.html`, `tx-rx-complete.html`, `radiation-3d-v5.html`) become embedded components, not orphaned pages.
- **Spiral learning.** Revisit concepts at increasing depth.
- **SDR-first, not exam-first.** Use equipment to *discover* concepts before formalising.
- **One concept per lesson.** ~20–30 min theory + interactive, separate lab time.
- **Progressive equipment requirements.** Early lessons need nothing. Later lessons bring in VNA.

---

## Curriculum Map

### Unit 1: How Antennas Work (Lessons 1–5)
*Foundation concepts — no equipment needed*

| # | Lesson | Key Concept | Interactive Element |
|---|--------|-------------|-------------------|
| 1 | What is EM Radiation? | E/H fields, wavelength, spectrum | `em-radiation.html` + `em-animato-2.html` |
| 2 | From Waves to Wires | Accelerating charges, reciprocity | `tx-rx-complete.html` + NEW standing wave vis |
| 3 | Radiation Patterns | Main lobe, nulls, beamwidth | `radiation-3d-v5.html` + NEW pattern compare |
| 4 | Antenna Types Tour | Wire, aperture, array, broadband | NEW antenna selector quiz |
| 5 | Polarisation | Linear, circular, cross-pol loss | NEW polarisation visualiser |

**Capstone:** Antenna Scavenger Hunt — identify 10 antenna types in the wild

### Unit 2: Antenna Characteristics & Measurement (Lessons 6–10)
*Quantitative understanding — introduces VNA*

| # | Lesson | Key Concept | Interactive Element |
|---|--------|-------------|-------------------|
| 6 | Impedance | R + jX, radiation resistance | NEW impedance visualiser |
| 7 | SWR and Return Loss | Γ, SWR, return loss conversions | NEW SWR converter + standing wave anim |
| 8 | The Smith Chart | Reading impedance, key points | NEW interactive Smith chart |
| 9 | Gain & Directivity | dBi, dBd, efficiency, aperture | Reuse `radiation-3d-v5.html` + NEW calc |
| 10 | VNA Antenna Measurement Lab | S11, calibration, real measurements | NEW virtual VNA sim |

**Capstone:** Full characterisation report of your D130N discone

### Unit 3: Antenna Design & Construction (Lessons 11–15)
*Design, model, build, measure — full cycle*

| # | Lesson | Key Concept | Interactive Element |
|---|--------|-------------|-------------------|
| 11 | Dipole Deep Dive | λ/2 physics, velocity factor | NEW dipole designer |
| 12 | Vertical Antennas | Monopole, ground plane, radials | NEW ground plane designer |
| 13 | Yagi-Uda Antennas | Parasitic elements, gain vs BW | NEW Yagi element explorer |
| 14 | Broadband Antennas | Discone, LPDA, spiral | NEW bandwidth comparison |
| 15 | Impedance Matching | L-networks, baluns, Smith chart | NEW L-network calc |

**Capstone:** Design-build-measure a custom antenna with full write-up

### Unit 4: Advanced Antenna Systems (Lessons 16–20)
*Arrays, phased systems, adaptive techniques*

| # | Lesson | Key Concept | Interactive Element |
|---|--------|-------------|-------------------|
| 16 | Antenna Arrays | Array factor, element spacing | NEW array pattern builder |
| 17 | Phased Arrays | Beam steering, phase shift calc | NEW beam steering sim |
| 18 | Direction Finding | Watson-Watt, interferometer | NEW DF simulator |
| 19 | Practical Phased Array | Build matched pair, phasing harness | Hands-on build |
| 20 | Software Beamforming | Digital BF, coherent SDR | NEW digital BF demo |

**Capstone:** Two-element phased array demonstrator with beam steering

---

## Build Order

**Phase A — Content (MD files, Claude writes):**
1. Unit 1 lessons (no new interactives needed beyond embedding existing resources)
2. Unit 2 lessons (theory — can launch with calculators only)

**Phase B — Core interactives (Claude Code builds at milestone):**
3. SWR/RL/Γ converter (L7) — simple, high value
4. Standing wave animation (L7) — visual impact
5. Interactive Smith chart (L8) — centrepiece tool
6. Dipole designer (L11) — practical utility
7. Polarisation visualiser (L5) — fills content gap

**Phase C — Remaining content + advanced interactives:**
8. Unit 3 lessons (labs + design)
9. Array pattern builder (L16) + beam steering sim (L17)
10. Unit 4 lessons

---

## Decisions Needed from Anthony

1. **Scope:** 20 lessons / 4 units — right size?
2. **Interactive priority:** Which of 21 new tools should CC build first?
3. **Lab requirements:** Create simulated alternatives for equipment-free learners?
4. **Quiz system:** Integrate with existing DB schema or standalone?
5. **Unsquelched:** Should capstones double as YouTube/podcast content?

---

## File Structure

```
curriculum/antennas/
├── README.md                    ← this file
├── unit-1/
│   ├── lesson-01-em-radiation.md
│   ├── lesson-02-how-antennas-radiate.md
│   ├── lesson-03-radiation-patterns.md
│   ├── lesson-04-antenna-types.md
│   └── lesson-05-polarisation.md
├── unit-2/
│   ├── lesson-06-impedance.md
│   ├── lesson-07-swr-return-loss.md
│   ├── lesson-08-smith-chart.md
│   ├── lesson-09-gain-directivity.md
│   └── lesson-10-vna-lab.md
├── unit-3/
│   ├── lesson-11-dipole-deep-dive.md
│   ├── lesson-12-vertical-antennas.md
│   ├── lesson-13-yagi-antennas.md
│   ├── lesson-14-broadband-antennas.md
│   └── lesson-15-impedance-matching.md
└── unit-4/
    ├── lesson-16-antenna-arrays.md
    ├── lesson-17-phased-arrays.md
    ├── lesson-18-direction-finding.md
    ├── lesson-19-practical-phased-array.md
    └── lesson-20-software-beamforming.md
```
