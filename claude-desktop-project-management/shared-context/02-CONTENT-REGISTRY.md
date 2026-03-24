# Content Registry

> **Purpose:** Maps all content across RF-Hub — curriculum lessons, blog posts, Unsquelched episodes, and interactive visualisations. All Claude Desktop projects can read this via Desktop Commander for cross-references.
>
> **Location:** D:\live_code\RF-Hub\claude-desktop-project-management\shared-context\
> **Last updated:** 2026-03-24

---

## Antenna Curriculum Lessons

> **Source of truth:** `curriculum/antennas/CURRICULUM-STATUS.md` + `curriculum/antennas/PROGRESS.md`
> **Status key:** ✅ Complete | 📝 Draft | ⬜ Not started | 🔧 Skeleton (pre-curriculum HTML, not rebuilt from MD)

### Unit 1: How Antennas Work (Lessons 1–5)

| # | Lesson | MD Draft | HTML Built | Interactives Used | Notes |
|---|--------|----------|------------|-------------------|-------|
| 1 | What is EM Radiation? | ✅ Done | ✅ Built | em-animato-2.html (primary), em-radiation.html (deep-dive) | 6 sections, 7 visual briefs |
| 2 | From Waves to Wires | ✅ Done | ✅ Built | em-radiation.html (primary), tx-rx-complete.html, field-detachment.html (all acts) | 5 sections, dipole length formula, 5 visual briefs |
| 3 | Radiation Patterns | ✅ Done | ✅ Built | radiation-3d-v5.html (?antenna=dipole), field-detachment.html (?acts=4&start=4&ui=minimal) | 7 sections, energy coupling thread, F/B ratio |
| 4 | Antenna Types Tour | ✅ Done | ✅ Built | radiation-3d-v5.html (?antenna=vertical, then full selector) | 8 sections, 6 antenna families, 5 polarisation seeds for L05 |
| 5 | Polarisation | ✅ Done | ✅ Built | polarisation-mismatch.html, df-hunt.html (capstone) | 7 sections, cos θ formula, Unit 1 capstone. All 5 L04 seeds resolved, L02 wrong-model resolved |

### Unit 2: Characteristics & Measurement (Lessons 6–10)

| # | Lesson | MD Draft | HTML Built | Interactives Used | Notes |
|---|--------|----------|------------|-------------------|-------|
| 6 | Impedance | ⬜ | 🔧 Skeleton | — | |
| 7 | SWR and Return Loss | ⬜ | 🔧 Skeleton | — | |
| 8 | The Smith Chart | ⬜ | 🔧 Skeleton | — | |
| 9 | Gain, Directivity, Efficiency | ⬜ | 🔧 Skeleton | radiation-3d-v5.html (?antenna=yagi&ui=full) planned | |
| 10 | VNA Antenna Measurement Lab | ⬜ | 🔧 Skeleton | — | |

### Unit 3: Design & Construction (Lessons 11–15)

| # | Lesson | MD Draft | HTML Built | Interactives Used | Notes |
|---|--------|----------|------------|-------------------|-------|
| 11 | Dipole Deep Dive | ⬜ | 🔧 Skeleton | — | |
| 12 | Vertical Antennas | ⬜ | 🔧 Skeleton | — | |
| 13 | Yagi-Uda Antennas | ⬜ | 🔧 Skeleton | — | |
| 14 | Broadband Antennas | ⬜ | 🔧 Skeleton | — | Cross-link to Blog 1.0 (EFHW) |
| 15 | Impedance Matching | ⬜ | 🔧 Skeleton | — | Cross-link to Blog 1.0 (UNUN/balun) |

### Unit 4: Advanced Systems (Lessons 16–20)

| # | Lesson | MD Draft | HTML Built | Interactives Used | Notes |
|---|--------|----------|------------|-------------------|-------|
| 16 | Antenna Arrays | ⬜ | 🔧 Skeleton | — | |
| 17 | Phased Arrays | ⬜ | 🔧 Skeleton | — | |
| 18 | Direction Finding | ⬜ | 🔧 Skeleton | — | |
| 19 | Practical Phased Array | ⬜ | 🔧 Skeleton | — | |
| 20 | Software Beamforming | ⬜ | 🔧 Skeleton | — | |

### Capstone Projects

| Unit | Project | Status |
|------|---------|--------|
| 1 | Antenna Scavenger Hunt (L05 Part D) | ⬜ Not started |
| 2 | Full Antenna Characterisation Report | ⬜ Not started |
| 3 | Design-Build-Measure Project | ⬜ Not started |
| 4 | Phased Array Demonstrator | ⬜ Not started |

---

## Electronics Curriculum Lessons

> **New track** — started March 2026. RSGB Foundation syllabus aligned.
> **Source:** `curriculum/electronics/unit-1/`

### Unit 1: The Language of Electricity (Lessons 1–2+)

| # | Lesson | MD Draft | HTML Built | Interactives Used | Notes |
|---|--------|----------|------------|-------------------|-------|
| 1 | What is Electricity? | ✅ Done | ✅ Built | 5 canvas visuals (inline) | RSGB 2A1. Charge, current, conductors/insulators, electron flow |
| 2 | Voltage, Current, and Resistance | ✅ Done | ✅ Built | 6 canvas visuals (inline), Ohm's law calculator | RSGB 2A1, 2A2, 2C1. Ohm's law, circuit schematics |

---

## Interactive Visualisations

> **Location:** `frontend/interactives/`
> **Config & parameters:** `frontend/interactives/CONFIG.md`
> **Rule:** Every interactive is a single standalone HTML file. Lesson context via URL query parameters.

| File | Description | Used In Lessons | Status |
|------|-------------|-----------------|--------|
| `em-animato-2.html` | EM field animator — freq slider, E/H wave views, wavelength readout, antenna selector | Antenna L01 | ✅ Built |
| `em-radiation.html` | "How Antennas Radiate" — 4-act SVG narrative: current → fields → detachment → reception | Antenna L01 (deep-dive), L02 (primary) | ✅ Built |
| `tx-rx-complete.html` | TX→RX complete link — stage-driven layer visibility + field detachment pinch-off | Antenna L02 | ✅ Built |
| `field-detachment.html` | Field detachment canvas — 4 acts, amber/red/purple stages, speed slider. URL params: ?acts=, ?start=, ?highlight=, ?ui= | Antenna L02, L03 | ✅ Built |
| `radiation-3d-v5.html` | 3D radiation pattern viewer — Three.js, 7 antenna patterns, orbit/drag, oscilloscope, spectrum analyser. URL params: ?antenna=, ?ui=, ?view= | Antenna L03, L04, L09 (planned) | ✅ Built |
| `polarisation-mismatch.html` | TX/RX polarisation mismatch — rotation slider, oscilloscope, FFT graph, Linear/Circular mode toggle | Antenna L05 (Section 4) | ✅ Built |
| `df-hunt.html` | Direction finding game — 2D map, hidden TX, two loop antennas with rotation + FFT graphs, bearing triangulation | Antenna L05 (Section 7 capstone) | ✅ Built |

---

## Blog Posts

### Blog 1.0: Remote End-Fed Wire Antennas for SDR Reception
- **Status:** 🔨 In progress
- **Git location:** `curriculum/Blogs/phase2-lwhf160-checklist.md` (deployment checklist)
- **Curriculum links:** Antenna Lesson 14 (EFHW/broadband), Antenna Lesson 15 (matching/baluns)
- **Unsquelched:** Potential video companion
- **Antennas:** Moonraker LWHF-160, BH7JYR EFHW
- **Location:** Tweed Valley, Scottish Borders. Wire runs N→S, mast north, house south.
- **Key concepts:** Terrain propagation, coax loss vs remote digitisation trade-off

### Blog 2.0: [Planned — topic TBC]
- **Status:** 📋 Not started
- **Candidates:** S21 measurement series, remote SDR enclosure, DC-to-Light learning journey

### Meta-Blog Series: Learning RF from DC-to-Light with Claude AI
- **Status:** 📋 Planned
- **Concept:** Documenting the learning journey, failures, AI collaboration, terminology struggles
- **Curriculum links:** All — narrative wrapper around the curriculum
- **Unsquelched:** Primary content source for the channel concept

---

## Unsquelched (YouTube / Podcast)

- **Status:** 📋 Pre-launch. Intro script drafted.
- **Production tools:** NotebookLM, Nano Banana / Veo for AI visuals
- **Content sources:** Blog posts (adapted), experiment footage, learning journey narration
- **3-hour rule:** Weekly content production capped to protect the hobby

---

## Other RF-Hub Pages (Non-Curriculum)

| Page | Location | Status | Notes |
|------|----------|--------|-------|
| index.html (Dashboard) | `frontend/index.html` | ✅ Live | Stats, progress bar, modules grid. Auth UI loaded but no login button in nav (⚠️ gap) |
| learning-path.html | `frontend/pages/learning-path.html` | ✅ Live | 26 modules, 4 phases, API-backed with static fallback |
| frequency-bands.html | `frontend/pages/frequency-bands.html` | ✅ Live | Spectrum reference |
| antennas.html | `frontend/pages/antennas.html` | ✅ Live | Comprehensive antenna guide |
| gsm-cellular.html | `frontend/pages/gsm-cellular.html` | ✅ Live | 13 sections, GSM reference |
| understanding-s11.html | `frontend/pages/blog/understanding-s11.html` | ✅ Live | Canonical V2 template page |

---

## Guides

| File | Description | Status |
|------|-------------|--------|
| `curriculum/guides/grounding-choking-and-feed-systems.md` | Grounding, choking, and feed systems guide (517 lines) | ✅ Written |

---

## Summary

| Track | MD Complete | HTML Built | Total Lessons |
|-------|-----------|------------|---------------|
| Antenna Unit 1 | 5/5 | 5/5 | 5 |
| Antenna Units 2–4 | 0/15 | 0/15 (skeletons) | 15 |
| Electronics Unit 1 | 2/2 | 2/2 | 2 |
| **Total** | **7/22** | **7/22** | **22** |
| Interactives | — | — | 7/7 built |
| Blog posts | — | — | 1 in progress |
