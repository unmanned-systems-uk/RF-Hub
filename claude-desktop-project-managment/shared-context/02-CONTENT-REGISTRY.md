# Content Registry

> **Purpose:** Maps all content across RF-Hub — curriculum lessons, blog posts, Unsquelched episodes, and interactive visualisations. All Claude Desktop projects can read this via Desktop Commander for cross-references.
>
> **Location:** D:\live_code\RF-Hub\claude-desktop-project-managment\shared-context\
> **Last updated:** 2026-03-24

---

## Curriculum Lessons

> **Status key:** ✅ Complete | 🔨 In progress | 📋 Planned | ❌ Blocked

### Unit 1: Electromagnetic Fundamentals
| # | Lesson | Status | Visualisations | Related Blog | Notes |
|---|--------|--------|----------------|--------------|-------|
| 1 | What is RF? The Electromagnetic Spectrum | 📋 | em-radiation.html | — | |
| 2 | Wavelength, Frequency, and the Speed of Light | 📋 | em-animator-2.html | — | |
| 3 | How Radio Waves Propagate | 📋 | — | — | |
| 4 | Polarisation | 📋 | — | — | |
| 5 | Near Field vs Far Field | 📋 | — | — | |

### Unit 2: Transmission Line Theory & Measurements
| # | Lesson | Status | Visualisations | Related Blog | Notes |
|---|--------|--------|----------------|--------------|-------|
| 6 | Impedance and Why 50Ω | 📋 | — | — | |
| 7 | Transmission Lines and Characteristic Impedance | 📋 | — | — | |
| 8 | Reflections, VSWR, and Return Loss | 📋 | — | — | |
| 9 | Understanding S11 | 🔨 | understanding-s11.html | — | Canonical template page |
| 10 | Understanding S21 (Insertion Loss & Gain) | 📋 | — | — | S21 experiment series feeds this |

### Unit 3: Antenna Fundamentals
| # | Lesson | Status | Visualisations | Related Blog | Notes |
|---|--------|--------|----------------|--------------|-------|
| 11 | How Antennas Radiate | 📋 | tx-rx-complete.html | — | |
| 12 | Radiation Patterns and Gain | 📋 | radiation-3d-v4/v5/v6 | — | Three.js 3D patterns |
| 13 | Dipoles and Monopoles | 📋 | — | — | |
| 14 | End-Fed Antennas (EFHW, Random Wire) | 📋 | — | Blog 1.0 | Strong cross-link |
| 15 | Loop Antennas (Large vs Small) | 📋 | — | — | Key learning: large loop = E-field antenna |

### Unit 4: Practical RF & Advanced Topics
| # | Lesson | Status | Visualisations | Related Blog | Notes |
|---|--------|--------|----------------|--------------|-------|
| 16 | Matching Networks and Baluns | 📋 | — | Blog 1.0 (UNUN/balun) | Counterpoise reasoning links here |
| 17 | Filters and Amplifiers | 📋 | — | — | |
| 18 | SDR Fundamentals | 📋 | — | — | Remote SDR enclosure project |
| 19 | Phased Arrays | 📋 | — | — | |
| 20 | Measurement Techniques (VNA, SA) | 📋 | — | — | S21 experiment series |

> ⚠️ **NOTE:** The curriculum project maintains the authoritative detailed lesson plans. This registry tracks cross-references only. Ask the Learning Curriculum project for full lesson content and progress.

---

## Blog Posts

### Blog 1.0: Remote End-Fed Wire Antennas for SDR Reception
- **Status:** 🔨 In progress
- **Git location:** docs/blog-1.0/BLOG-1.0-INDEX.md
- **Curriculum links:** Lesson 14 (EFHW), Lesson 16 (matching/baluns)
- **Unsquelched:** Potential video companion
- **Antennas:** Moonraker LWHF-160, BH7JYR EFHW
- **Location:** Tweed Valley, Scottish Borders. Wire runs N→S, mast north, house south.
- **Structure:**
  - Point 1: [Title TBC] — ✅ Drafted
  - Point 2: [Title TBC] — ✅ Drafted
  - Point 3: [Title TBC] — ✅ Drafted
  - Point 4: Counterpoise — 📋 Next up
  - Point 5+: TBC
- **Weather dependency:** Outdoor antenna deployment tasks. Scottish Borders weather = plan for rain.
- **Key concepts:** Terrain propagation tool concept documented. Coax loss vs remote digitisation trade-off.

### Blog 2.0: [Planned — topic TBC]
- **Status:** 📋 Not started
- **Candidates:** S21 measurement series, remote SDR enclosure, DC-to-Light learning journey

### Meta-Blog Series: Learning RF from DC-to-Light with Claude AI
- **Status:** 📋 Planned
- **Concept:** Documenting the learning journey, failures, AI collaboration, terminology struggles
- **Curriculum links:** All — this series is the narrative wrapper around the curriculum
- **Unsquelched:** Primary content source for the channel concept

---

## Unsquelched (YouTube / Podcast)

- **Status:** 📋 Pre-launch. Intro script drafted.
- **Production tools:** NotebookLM, Nano Banana / Veo for AI visuals
- **Content sources:** Blog posts (adapted), experiment footage, learning journey narration
- **3-hour rule:** Weekly content production capped to protect the hobby

---

## Interactive Visualisations (Standalone)

| File | Type | Curriculum Link | Status |
|------|------|-----------------|--------|
| em-radiation.html | EM wave viz | Lesson 1 | ✅ Built (standalone) |
| em-animator-2.html | EM animation | Lesson 2 | ✅ Built (standalone) |
| tx-rx-complete.html | Tx/Rx chain | Lesson 11 | ✅ Built (standalone) |
| radiation-3d-v4.html | 3D pattern (Three.js) | Lesson 12 | ✅ Built (standalone) |
| radiation-3d-v5.html | 3D pattern (improved) | Lesson 12 | ✅ Built (standalone) |
| radiation-3d-v6.html | 3D pattern (latest) | Lesson 12 | ✅ Built (standalone) |
| canvas-instrument-architecture.md | Design doc | All instruments | ✅ Architecture defined |

> **Integration goal:** These standalone demos need to be embedded into their respective curriculum lessons as proper educational components, not just linked as separate pages.

---

## Other RF-Hub Pages (Non-Curriculum)

| Page | Status | Notes |
|------|--------|-------|
| gsm-cellular.html | 📋 Pending integration | 13 sections complete, needs CSS + routing |
| antennas.html | ✅ Live | Comprehensive antenna guide |
| equipment.html | 🔨 | Equipment page |
| understanding-s11.html | ✅ Live | Canonical template |
