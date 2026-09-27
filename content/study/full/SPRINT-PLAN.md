# RFH Full-Licence Sprint Plan (S18–S27)

**Source:** RSGB Full Licence Manual 3rd Ed (Alan Betts G0HIQ, syllabus v1.6 Feb 2024), 104p / 14 chapters
**Curriculum home:** `/pages/study/full/section-N-<slug>.html`
**Content pipeline:** Docs writes .md → Master reviews → LessonsBuilder builds HTML → Frontend spot-check → Testing sign-off → Master closes.

---

## Sprint breakdown

| Sprint | Chapters | Pages | URL slug | Weeks | Reasoning |
|--------|----------|-------|----------|-------|-----------|
| **S18** | Ch 1 Licence Conditions | 5 | `full-licensing` | 2 | Standalone; deep verification pass against 2024 Ofcom |
| **S19** | Ch 2 Operating + Ch 3 Safety | 8 | `full-operating` + `full-safety` (2 pages) | 2 | Ch 2: required exam content up front + expandable "dive deeper" section with 5–10 pages of RSGB Operating Manual material |
| **S20** | Ch 4 Basic Circuits | 12 | `full-basic-circuits` | 3 | Largest theory chapter; ~25 figures, many interactives |
| **S21** | Ch 5 Semiconductors | 8 | `full-semiconductors` | 2 | Diagram-dense; needs BJT/FET config comparator interactives |
| **S22** | Ch 6 Signals + Ch 7 Transmitter | 12 | `full-signals` + `full-transmitter` | 3 | Ch 6 short bolt-on; Ch 7 is meaty |
| **S23** | Ch 8 TX Interference + Ch 9 Receiver | 16 | `full-tx-interference` + `full-receiver` | 3 | Grouped RX-side hardware; heavy interactives |
| **S24** | Ch 10 SDR + Ch 11 Feeders & Antennas | 11 | `full-sdr` + `full-feeders-antennas` (2 pages) | 3 | SDR merged in per PO 2026-09-12 |
| **S25** | Ch 12 Propagation | 5 | `full-propagation` | 2 | MUF/EME/meteor scatter |
| **S26** | Ch 13 EMC | 13 | `full-emc` | 3 | Longest chapter; filter designer widgets |
| **S27** | Ch 14 Measurements | 8 | `full-measurements` | 2 | Rich in test-instrument interactives |

**Total: 10 sprints ≈ 25 weeks (~6 months).**

---

## Per-sprint tasks (standard template)

Each sprint spins up these tasks:

### 1. Docs — chapter Markdown source (~1–2 weeks per chapter)
- **Title:** `[Docs] Full §N-<slug> Markdown content`
- **Output:** `/content/study/full/section-N-<slug>.md`
- **Requirements:**
  - Cover every subsection from the catalogue
  - Cross-reference existing Intermediate `.md` where topics overlap (e.g. Full §5 semiconductors links back to Intermediate §2 basic electronics)
  - `target="_blank"` on all content links
  - Regulatory content flagged as `[VERIFY]` for human review
  - RSGB attribution + "not affiliated with RSGB" disclaimer

### 2. LessonsBuilder — HTML page build
- **Title:** `[Frontend] Build Full §N-<slug> HTML from Markdown + activate card`
- **Output:** `/pages/study/full/section-N-<slug>.html`
- **Requirements:** rf-hub-v2 patterns; ToC; hero; sidebar; heading anchors `ch-NA`/`ch-NB`; images referenced from `/assets/images/study/full/`

### 3. Docs — mock exam question bank (~20–30 questions per chapter)
- **Title:** `[Docs] LESSONS: Full §N-<slug> mock exam questions (N items)`
- **Output:** JSON payload to quiz DB with syllabus refs

### 4. Interactives (per widget flagged in catalogue)
- **Title:** `[Frontend] Interactive: <widget-name>`
- **Location:** `/frontend/interactives/full-<name>.html`
- **Requirements:** Standalone HTML; iframe-embeddable; rf-hub-v2 patterns

### 5. Portal card activation
- **Title:** `[Frontend] Full portal card + landing page activation`
- One task shared across sprint or split per sprint

### 6. Testing
- **Title:** `[Testing] Full §N verification pass`
- Cross-refs resolve, images render, interactives functional, physics/pedagogy sanity

---

## Interactives inventory (Full-specific, prioritised)

Widgets identified across the catalogue. Some may share code with existing Intermediate widgets via a "simple/advanced" mode toggle.

### High priority (multi-chapter reuse)
1. **Reactance/impedance calculator** — X_L, X_C vs f with cursor (Ch 4). Extends existing `reactance-vs-frequency.html`
2. **Q-factor / bandwidth visualiser** — slider Q → sharpness (Ch 4)
3. **Phasor animator** — R+L or R+C series (Ch 4)
4. **RC time-constant explorer** — τ=RC, live V_c(t), I(t) (Ch 4)
5. **Transformer impedance matching calc** — Z_p, Z_s → N ratio (Ch 4)
6. **Decibel calculator** — dB conversions (Ch 4)
7. **BJT load-line explorer + class A/AB/B/C classifier** (Ch 5)
8. **BJT config comparator** (CE/CB/CC) (Ch 5)
9. **Diode I-V explorer** (Si/Ge/Schottky/zener) (Ch 5)
10. **Rectifier + smoothing simulator** (HW/FW, cap/load sliders) (Ch 5)
11. **Amp class conduction-angle animator** (Ch 5, 7)
12. **Op-amp gain calculator** (Ch 5)
13. **Sampling/aliasing visualiser** (Ch 6) — HIGH VALUE
14. **Fourier square-wave builder** (add odd harmonics) (Ch 6)
15. **Mixer product visualiser** (f1, f2 → spectrum) (Ch 7, 9)
16. **PLL synthesiser calc** (Ch 7)
17. **PEP vs average power calc** (Ch 7)
18. **Two-tone IMD calculator** (Ch 8)
19. **Morse key-click bandwidth visualiser** (Ch 8) — rise-time slider
20. **FM deviation vs channel spacing** (Ch 8)
21. **Superhet freq-plan calculator** (RF+IF → LO+image+spurs) (Ch 9)
22. **Image-frequency visualiser** (Ch 9)
23. **AGC time-constant animator** (Ch 9)
24. **IP3 / dynamic-range calc** (Ch 9)
25. **Reciprocal mixing visualiser** (Ch 9) — HIGH VALUE (Full-only concept)
26. **SDR sample-rate vs bandwidth calc** (Ch 10)
27. **ADC bit-depth vs dynamic range** (~6n dB) (Ch 10)
28. **Standing-wave animator** (VSWR slider, fwd+refl superposition) (Ch 11) — HIGH VALUE
29. **Yagi element-spacing / gain estimator** (Ch 11)
30. **Loading-coil efficiency calc** (short vertical) (Ch 11)
31. **ATU matcher** (L/T/Pi solver) (Ch 11) — HIGH VALUE
32. **Coax loss calculator** (Ch 11)
33. **Radiation pattern viewer** (GP vs 5/8) (Ch 11) — extends existing `radiation-3d-v5.html`
34. **MUF/LUF diurnal predictor** (time + sunspot slider) (Ch 12) — HIGH VALUE
35. **PFD calculator** (Ch 12, 13)
36. **Skip distance animator** (Ch 12)
37. **Sunspot cycle plotter** (Ch 12) — external solar flux feed
38. **Field-strength calculator** (P, gain, dist → V/m, dBμV/m) (Ch 13) — HIGH VALUE
39. **LC filter designer** (f_c + Z → Pi/T/L components) (Ch 13)
40. **CM/DM current visualiser** (animated cable pair) (Ch 13)
41. **Interference troubleshooting flowchart** (Ch 13)
42. **RMS/peak/PEP converter** (Ch 14)
43. **VSWR calculator** (Fwd/Ref power → SWR + return loss + mismatch loss) (Ch 14) — HIGH VALUE
44. **Oscilloscope simulator** (timebase + V/div sliders, various sigs) (Ch 14)
45. **SSB two-tone envelope generator** (Ch 14)
46. **Directional coupler animator** (Fwd+Ref phasors) (Ch 14)
47. **Dip meter LC-resonance calc** (Ch 14)
48. **Spectrum analyser mock display** (RBW/span → carrier+harmonics) (Ch 14)

### Regulation-specific widgets (Ch 1, 3)
49. **Emission designator decoder** (F3E → "FM telephony analogue") (Ch 1)
50. **UK callsign parser** (input callsign → licence class, region) (Ch 1)
51. **Band-plan visualiser** (primary/secondary allocations) (Ch 1)
52. **EMF compliance-distance calculator** (mirrors Ofcom's) (Ch 3) — HIGH VALUE
53. **Mobile-install safety zone checker** (Ch 3)
54. **Earthing scheme visualiser** (RF/safety/lightning bonding) (Ch 3)
55. **Antenna keep-out (RF exposure) visualiser** (Ch 3)

**Total: 55 interactive widget candidates.** Many share code with Intermediate widgets — deliver as extensions/modes rather than duplicates where possible.

---

## Structural decisions for Anthony to review Sunday

1. **URL structure:** `/pages/study/full/section-N-<slug>.html` mirroring Intermediate — confirm?
2. **Portal card:** Portal currently tracks Intermediate only. Do we add a **separate Full progress card** or extend the existing one to combine? Recommendation: separate card so licence-class progress is visually clear.
3. **Merge S24 into S23 or S25?** SDR is only 2 pages — probably too small for its own sprint. Recommendation: fold into S25 (Feeders & Antennas neighbour).
4. **Ch 2 supplementing:** Ch 2 Operating is thin (1.5 useful pages). Recommendation: build supplementary content from RSGB Operating Manual — that's a Docs task worth flagging in S19.
5. **Interactives priorities:** 55 candidates is a lot. Anthony marks the HIGH-VALUE items (already flagged); others queue as "nice-to-have."
6. **Full study index page** at `/pages/study/full/index.html` — modelled on Intermediate index. New Frontend task.

---

## Ready to dispatch when Anthony approves

- Create 11 CCPM sprints (S18-S28) with dates
- Create ~85 tasks (11 sprints × ~7 tasks average)
- Set up dependencies (Docs → LessonsBuilder → Testing chain)

Master creates the sprints and first-wave tasks after Anthony reviews Sunday morning. No autonomous CCPM creation without approval.
