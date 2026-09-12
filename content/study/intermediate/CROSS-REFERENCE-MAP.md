# Study Cross-Reference Map — Intermediate Licence

**Purpose:** Maps each Intermediate study section/subsection to existing RF-Hub content (sidebands, antenna curriculum, interactives, blog) for use by Frontend when adding "Go deeper" callout boxes.

**Generated:** 2026-09-08
**Audited content:** `/frontend/pages/sidebands/` (12 pages), `/frontend/pages/antenna-curriculum/` (20 lessons), `/frontend/interactives/` (20 pages), `/frontend/pages/blog/` (2 posts)

---

## Conventions

- **go-deeper** — callout box with link text and URL
- **iframe-embed** — inline interactive widget (may also have go-deeper companion link)
- **Anchor** — heading ID in the study page (CommonMark: lowercase, spaces→hyphens, punctuation stripped)
- `(no existing content)` — nothing in current RF-Hub content covers this subsection adequately

---

## Section 1: Licensing & Operating

### 1A — Licence Purpose and Key Organisations
- (no existing content)

### 1B — Licence Classes, Callsigns, International Prefixes
- (no existing content)

### 1C — Supervision and Third-Party Operation
- (no existing content)

### 1D — Band Plans, Interference, Primary/Secondary Status
- **Link to:** `/pages/sidebands/uk-spectrum-band-plan.html`
- **Label:** "Full UK spectrum allocation and amateur band plan — interactive reference"
- **Type:** go-deeper
- **Anchor in study page:** `#1d--band-plans-and-interference`
- **Notes:** Covers all amateur bands, HF/VHF/UHF allocations, primary vs secondary status — exactly what 1D1/1D2 test.

### 1E — Remote Control
- (no existing content)

### 1F — Special Conditions (Emergency, Clubs)
- (no existing content)

### 1G — ITU, CEPT, International Operation
- (no existing content)

### 1H — Power Limits
- **Link to:** `/pages/sidebands/uk-spectrum-band-plan.html`
- **Label:** "UK band plan including power limits by band and licence class"
- **Type:** go-deeper (secondary, supplement only — band plan has power limit tables)
- **Anchor in study page:** `#1h--power-limits`

---

## Section 2: Electronics & Electrical

### 2A — Units and Prefixes
- (no existing content)

### 2C — Resistors, Capacitors, Inductors (Components)
- (no existing content — reactance-vs-frequency covers the AC behaviour but not the physical component characteristics tested in 2C)

### 2D — Ohm's Law, Power, Component Properties
- (no existing content)

### 2E — Alternating Current, RMS, Reactance
- **Link to:** `/pages/sidebands/resistance-reactance-impedance.html`
- **Label:** "Deep dive: Resistance, Reactance & Impedance — with interactive visualisations"
- **Type:** go-deeper
- **Anchor in study page:** `#2e--alternating-current`

- **Embed:** `/interactives/reactance-vs-frequency.html`
- **Label:** "Interactive: how reactance changes with frequency"
- **Type:** iframe-embed
- **Embed anchor:** `#2e--alternating-current` (place alongside the Xc/XL section)
- **Notes:** The sideband page embeds this interactive at `#section-reactance` — use the same standalone URL for the study page iframe.

### 2F — Impedance, Tuned Circuits, Resonance, Q Factor
- **Link to:** `/pages/sidebands/resistance-reactance-impedance.html#section-impedance`
- **Label:** "Impedance and the complete picture — from the Resistance, Reactance & Impedance deep dive"
- **Type:** go-deeper
- **Anchor in study page:** `#2f--impedance-resonance-q-factor`

- **Embed:** `/interactives/impedance-triangle.html`
- **Label:** "Interactive impedance triangle"
- **Type:** iframe-embed
- **Embed anchor:** `#2f--impedance-resonance-q-factor`
- **Notes:** The sideband page embeds this at `#section-impedance`. lc-filter.html is referenced in task description but does **not** exist in `/frontend/interactives/` — do not link.

### 2G — Semiconductors, Transformers
- (no existing content)

### 2H — Digital Electronics (Binary, Logic Gates, DSP/SDR)
- (no existing content)
- **Notes:** digital-modes.html covers what digital modes are but not how digital logic/DSP works. Not a useful go-deeper for 2H.

### 2I — Power Supplies (Rectification, Regulation, Batteries)
- (no existing content)

### 2J — Decibels (Power/Voltage Ratios, dBm, Cascaded Gain)
- (no existing content)

---

## Section 3: Transmitters & Receivers

### 3A — Superhet Receivers (Architecture, Image Frequency)
- (no existing content)

### 3B — Mixers
- (no existing content)

### 3C — Receiver Performance (Sensitivity, Selectivity, Dynamic Range)
- (no existing content)

### 3E — Transmitter Types (AM, SSB, CW — block diagrams)
- **Embed:** `/interactives/tx-rx-complete.html`
- **Label:** "Interactive: complete TX→RX signal path visualisation"
- **Type:** iframe-embed
- **Anchor in study page:** `#3e--transmitter-types`
- **Notes:** tx-rx-complete.html shows the end-to-end link. Best placed alongside 3E block diagrams for context. Not a perfect match (it's a link-level view, not a modulator-level view) but is the closest existing interactive.

### 3F — Modulation Types Overview
- (no existing content for AM/FM/SSB modulation depth; digital-modes.html covers the digital side only)

### 3G — FM, Deviation, Carson's Rule
- (no existing content)

### 3H — Digital Modes (RTTY, PSK31, FT8, Weak Signal)
- **Link to:** `/pages/sidebands/digital-modes.html`
- **Label:** "Digital modes reference — all modes, software, and IC-7610 setup"
- **Type:** go-deeper
- **Anchor in study page:** `#3h--digital-modes`
- **Notes:** Sideband page includes: how digital modes work, weak-signal modes (FT8/WSPR), keyboard modes (PSK31/RTTY), digital voice, UK licence level requirements — directly relevant to 3H syllabus refs.

### 3I — Transceivers (VFO, PLL, Transverters)
- (no existing content)

### 3K — Filters, AGC
- (no existing content)

### 3L — DSP, Fourier Transform, Spectrum Display
- (no existing content)

### 3M — Oscillators, Phase Noise
- (no existing content)

---

## Section 4: Feeders & Antennas

> **Note:** Section 4 has the richest existing content. The entire antenna curriculum is relevant.
> **Study page:** `/content/study/intermediate/section-4-feeders-antennas.md` — built 2026-09-12.
> **RSGB source chapters:** Ch.10 Antenna Matching (pp.50–53), Ch.11 Feeders & Baluns (pp.54–57), Ch.12 Antenna Concepts (pp.58–60).

### 4A — Antenna Fundamentals (4C5, 4E1)
- **RSGB pages:** pp.50, 58, 60
- **Anchor in study page:** `#4a--antenna-fundamentals`
- **Syllabus refs covered:** 4C5 (dipole feedpoint, length formula), 4E1 (polarisation)

- **Link to:** `/pages/antenna-curriculum/unit-1-how-antennas-work/lesson-05-polarisation.html`
- **Label:** "Antenna Curriculum Lesson 5: Polarisation"
- **Type:** go-deeper
- **Embed:** `/interactives/polarisation-mismatch.html` — Interactive: polarisation mismatch loss

### 4B — Standing Waves, SWR & Reflection Coefficient (4A2, 4E1, 4F1)
- **RSGB pages:** pp.52–53
- **Anchor in study page:** `#4b--standing-waves-swr-and-the-reflection-coefficient`
- **Syllabus refs covered:** 4A2 (SWR definition), 4F1 (return loss, reflection coefficient), 4E1 (SWR measurement)

- **Link to:** `/pages/antenna-curriculum/unit-2-characteristics-and-measurement/lesson-07-swr-and-return-loss.html`
- **Label:** "Antenna Curriculum Lesson 7: SWR and Return Loss"
- **Type:** go-deeper
- **Link to:** `/pages/sidebands/vswr-bridge-measurement.html`
- **Label:** "VSWR Bridge — measurement procedure with the RSA5065N"
- **Type:** go-deeper (secondary)
- **Link to:** `/pages/blog/understanding-s11.html`
- **Label:** "Understanding S11 — reflection coefficient, return loss, and what your analyser is actually measuring"
- **Type:** go-deeper (secondary)

### 4C — Feeders (4A1, 4A2, 4A3)
- **RSGB pages:** pp.54–57
- **Anchor in study page:** `#4c--feeders`
- **Syllabus refs covered:** 4A1 (feeder types, coax construction), 4A2 (feeder impedance, cable types), 4A3 (velocity factor, SWR meter placement)

- **Link to:** `/pages/antenna-curriculum/unit-2-characteristics-and-measurement/lesson-06-impedance.html`
- **Label:** "Antenna Curriculum Lesson 6: Impedance — feedline matching and characteristic impedance"
- **Type:** go-deeper

### 4D — Baluns (4B1)
- **RSGB pages:** pp.51–52, 57
- **Anchor in study page:** `#4d--baluns`
- **Syllabus refs covered:** 4B1 (balun purpose, choke balun, impedance-ratio baluns 1:1/4:1/9:1, unun)

- **Link to:** `/pages/antenna-curriculum/unit-3-design-and-construction/lesson-15-impedance-matching.html`
- **Label:** "Antenna Curriculum Lesson 15: Impedance Matching — including baluns and matching networks"
- **Type:** go-deeper

### 4E — Antenna Matching (4F1)
- **RSGB pages:** pp.50–53
- **Anchor in study page:** `#4e--antenna-matching`
- **Syllabus refs covered:** 4F1 (ATU/AMU operation, matching networks, traps 4C2/4C3)

- **Link to:** `/pages/antenna-curriculum/unit-3-design-and-construction/lesson-15-impedance-matching.html`
- **Label:** "Antenna Curriculum Lesson 15: Impedance Matching — L-networks, Pi-networks, and transmatches"
- **Type:** go-deeper
- **Link to:** `/pages/antenna-curriculum/unit-2-characteristics-and-measurement/lesson-08-smith-chart.html`
- **Label:** "Antenna Curriculum Lesson 8: The Smith Chart — visualising impedance matching"
- **Type:** go-deeper (secondary)

### 4F — Antenna Concepts (4C2, 4C3, 4C4, 4C5, 4D1, 4D2)
- **RSGB pages:** pp.58–60
- **Anchor in study page:** `#4f--antenna-concepts`
- **Syllabus refs covered:** 4C2 (Yagi, multi-element), 4C3 (polarisation, angle), 4C4 (beamwidth, F/B ratio, radiation angle), 4C5 (dipole, common types), 4D1 (radiation patterns, isotropic), 4D2 (gain dBi/dBd, EIRP)

- **Link to:** `/pages/antenna-curriculum/unit-1-how-antennas-work/lesson-04-antenna-types-tour.html`
- **Label:** "Antenna Curriculum Lesson 4: Antenna Types Tour"
- **Type:** go-deeper
- **Link to:** `/pages/antenna-curriculum/unit-3-design-and-construction/lesson-11-dipole-deep-dive.html`
- **Label:** "Antenna Curriculum Lesson 11: Dipole Deep Dive"
- **Type:** go-deeper
- **Link to:** `/pages/antenna-curriculum/unit-3-design-and-construction/lesson-12-vertical-antennas.html`
- **Label:** "Antenna Curriculum Lesson 12: Vertical Antennas"
- **Type:** go-deeper (secondary)
- **Link to:** `/pages/antenna-curriculum/unit-3-design-and-construction/lesson-13-yagi-antennas.html`
- **Label:** "Antenna Curriculum Lesson 13: Yagi Antennas"
- **Type:** go-deeper (secondary)
- **Link to:** `/pages/antenna-curriculum/unit-2-characteristics-and-measurement/lesson-09-gain-directivity-efficiency.html`
- **Label:** "Antenna Curriculum Lesson 9: Gain, Directivity & Efficiency"
- **Type:** go-deeper (secondary)
- **Embed:** `/interactives/radiation-3d-v5.html?antenna=dipole&ui=standard` — Interactive: 3D radiation pattern — dipole
- **Embed:** `/interactives/radiation-3d-v5.html?antenna=yagi&ui=standard` — Interactive: 3D radiation pattern — Yagi

### 4H — EMF and Near-Field Safety (4H1)
- **RSGB pages:** p.78
- **Anchor in study page:** `#4h--emf-and-near-field-safety-4h1` — added 2026-09-12 gap-fill
- **Syllabus refs covered:** 4H1 (near-field EMF, compliance assessment threshold, loft antenna warning)
- **Cross-refs:** §1G (EMF compliance framework), §8C (RF burn hazard)
- **Key content:** Near-field vs far-field distinction; 10 W average EIRP / 100 W instantaneous peak as assessment trigger; antenna type comparison table; loft/indoor antenna elevated exposure warning

---

## Section 5: Propagation

> **Study page:** `/content/study/intermediate/section-5-propagation.md` — built 2026-09-12.
> **RSGB source:** Chapter 13 (pp.61–64).

### 5A — Ground Wave and Sky Wave (5A2, 5A3, 5A4)
- **RSGB pages:** pp.61–63
- **Anchor in study page:** `#5a--ground-wave-and-sky-wave`
- **Syllabus refs covered:** 5A2 (ground wave), 5A3 (sky wave, refraction), 5A4 (skip distance, skip zone)
- (no existing site content covers ground wave / sky wave distinction — study page is primary)

### 5B — The Ionosphere (5B1, 5B2)
- **RSGB pages:** pp.61–63
- **Anchor in study page:** `#5b--the-ionosphere`
- **Syllabus refs covered:** 5B1 (D/E/F layers, Sporadic-E), 5B2 (F layer, MUF, fading)
- (no existing site content — study page is primary)

- **Link to:** `/pages/antenna-curriculum/unit-1-how-antennas-work/lesson-01-em-radiation.html`
- **Label:** "Antenna Curriculum Lesson 1: EM Radiation — electromagnetic waves in space"
- **Type:** go-deeper (foundational context)
- **Embed:** `/interactives/em-animato-2.html` — Interactive: EM wave animator

### 5C — Frequency-Dependent Behaviour: MUF and LUF (5B2, 5B3)
- **RSGB pages:** pp.62–63
- **Anchor in study page:** `#5c--frequency-dependent-behaviour`
- **Syllabus refs covered:** 5B2 (MUF), 5B3 (LUF)

### 5D — Seasonal and Solar Variation (5B3, 5B4)
- **RSGB pages:** pp.62–63
- **Anchor in study page:** `#5d--seasonal-and-solar-variation`
- **Syllabus refs covered:** 5B3 (summer/winter, sunspot cycle), 5B4 (solar flares, CMEs, aurora)

### 5E — VHF and UHF Propagation (5B5, 5C3)
- **RSGB pages:** pp.63–64
- **Anchor in study page:** `#5e--vhf-and-uhf-propagation`
- **Syllabus refs covered:** 5B5 (line-of-sight, radio horizon), 5C3 (tropospheric ducting, terrain)

- **Link to:** `/pages/blog/station-survey-01-six-degree-skyline.html`
- **Label:** "Station Survey #1: The Six-Degree Skyline — how local terrain shapes HF reception"
- **Type:** go-deeper (applied terrain effects, VHF/UHF horizon, LiDAR analysis at IO85LO)
- **Anchor in study page:** `#5e--vhf-and-uhf-propagation`

### 5F — Practical Propagation Effects (5B2)
- **RSGB pages:** pp.63–64
- **Anchor in study page:** `#5f--practical-propagation-effects`
- **Syllabus refs covered:** fading/QSB, short/long path, grey-line, typical range table

---

## Section 6: Electromagnetic Compatibility (EMC)

> **Study page:** `/content/study/intermediate/section-6-emc.md` — built 2026-09-12.
> **RSGB source:** Chapter 8 Good Radio Housekeeping (pp.45–47) + Chapter 9 Harmonics & Spurious Emissions (pp.48–49).

### 6A — What is EMC? (6A1, 6A2, 6A3, 6A4)
- **RSGB pages:** pp.46–47
- **Anchor in study page:** `#6a--what-is-emc`
- **Syllabus refs covered:** 6A1 (EMC definition), 6A2 (emission vs immunity), 6A3 (amateur's legal position), 6A4 (CE marking)

### 6B — Sources of Interference (6B1, 6B2, 6B3)
- **RSGB pages:** pp.45–48
- **Anchor in study page:** `#6b--sources-of-interference`
- **Syllabus refs covered:** 6B1 (harmonics, spurious), 6B2 (domestic sources), 6B3 (vehicle/industrial)

### 6C — Effects of Interference (6C1, 6C2)
- **RSGB pages:** pp.47
- **Anchor in study page:** `#6c--effects-of-interference`
- **Syllabus refs covered:** 6C1 (AM/SSB/FM breakthrough effects), 6C2 (immunity)

### 6D — Fixing Interference at the Source (6C3, 6D1, 6D2, 6D3, 6D4)
- **RSGB pages:** pp.45–47
- **Anchor in study page:** `#6d--fixing-interference-at-the-source`
- **Syllabus refs covered:** 6D1 (LPF, dummy load test), 6D2 (ferrite chokes), 6D3 (cable management, mains filters), 6D4 (antenna position, RF earth)

### 6E — Fixing Interference at the Victim (6E1, 6E2, 6E3)
- **RSGB pages:** pp.46–47
- **Anchor in study page:** `#6e--fixing-interference-at-the-victim`
- **Syllabus refs covered:** 6E1 (immunity standards, manufacturer responsibility), 6E2 (ferrite on victim), 6E3 (diplomatic approach)

### 6F — Checking Your Own Transmitter (6F2, 6F3)
- **RSGB pages:** pp.48–49
- **Anchor in study page:** `#6f--checking-your-own-transmitter`
- **Syllabus refs covered:** 6F2 (licence requirement, harmonic checking procedure), 6F3 (overmodulation, overdeviation, CW key shaping)

---

## Section 7: Operating Practices & Procedures

> **Study page:** `/content/study/intermediate/section-7-operating-practices.md` — built 2026-09-12.
> **RSGB source:** Chapter 2 Operating Techniques (pp.4–6) + Chapter 8 Good Radio Housekeeping (pp.45–47, non-EMC elements).

### 7A — Band Plans and Frequency Etiquette (7A3, 7A4)
- **RSGB pages:** pp.4–6
- **Anchor in study page:** `#7a--band-plans-and-frequency-etiquette`
- **Syllabus refs covered:** 7A3 (band plans, IARU Region 1), 7A4 (mode segments, WARC bands, satellite sub-bands)

- **Link to:** `/pages/sidebands/uk-spectrum-band-plan.html`
- **Label:** "UK spectrum allocation and amateur band plan — full HF/VHF/UHF reference"
- **Type:** go-deeper

- **Link to:** `/pages/sidebands/uk-repeaters.html`
- **Label:** "UK repeater directory — VHF/UHF repeater channels and linking systems"
- **Type:** go-deeper (secondary, for 2 m repeater segment context)

### 7B — Making Contact (7B1)
- **RSGB pages:** pp.4, 6
- **Anchor in study page:** `#7b--making-contact`
- **Syllabus refs covered:** 7B1 (CQ calls, phonetics, RST reports, QSO structure)

- **Link to:** `/pages/sidebands/phonetic-alphabet.html`
- **Label:** "NATO phonetic alphabet and ITU alternatives — full reference"
- **Type:** go-deeper

- **Link to:** `/pages/sidebands/qso-scripts.html`
- **Label:** "QSO scripts — structured contact examples from CQ to 73"
- **Type:** go-deeper (secondary)

- **Link to:** `/pages/sidebands/q-codes.html`
- **Label:** "Q-codes — full reference with HF and VHF/FM usage notes"
- **Type:** go-deeper (secondary, Q-codes appear in self-check at §7B)

### 7C — DX Operating and Pileups (7B1 continued)
- **RSGB pages:** pp.4–5
- **Anchor in study page:** `#7c--dx-operating-and-pileups`
- **Syllabus refs covered:** 7B1 (DX conventions, split operation)

- **Link to:** `/pages/sidebands/qso-scripts.html`
- **Label:** "QSO scripts — DX and pileup exchange formats"
- **Type:** go-deeper

### 7D — Digital Modes Etiquette
- **RSGB pages:** pp.5–6
- **Anchor in study page:** `#7d--digital-modes-etiquette`
- (Digital mode etiquette is operating-practices layer on top of mode knowledge from §3H)

- **Link to:** `/pages/sidebands/digital-modes.html`
- **Label:** "Digital modes reference — FT8, PSK31, RTTY, WSJT-X and software setup"
- **Type:** go-deeper (technical background for modes mentioned in 7D)

### 7E — Nets and Group Operations
- **RSGB pages:** p.4
- **Anchor in study page:** `#7e--nets-and-group-operations`
- (no existing site content; cross-reference to §1 for nets definition)

### 7F — Contest Operating (7F2)
- **RSGB pages:** pp.5–6
- **Anchor in study page:** `#7f--contest-operating`
- **Syllabus refs covered:** 7F2 (contest exchange format, WARC band restriction)

- **Link to:** `/pages/sidebands/qso-scripts.html`
- **Label:** "QSO scripts — contest exchange formats and serial number logging"
- **Type:** go-deeper

### 7G — Log-keeping (7G1, 7G2, 7G3, 7G4)
- **RSGB pages:** p.5
- **Anchor in study page:** `#7g--log-keeping`
- **Syllabus refs covered:** 7G1–7G4 (log-keeping not required since 2024; recommended practice; QSL and awards)
- (no existing site content)

### 7H — Good Radio Housekeeping
- **RSGB pages:** pp.45–47 (Ch. 8 non-EMC elements)
- **Anchor in study page:** `#7h--good-radio-housekeeping`
- (EMC elements cross-referenced to §6; station layout, earthing, ergonomics covered here)
- **Notes:** The unmapped interactives `station-monitor.html` and `df-hunt.html` may suit §7 — Frontend to confirm topic before linking.

---

## Section 8: Safety

> **Study page:** `/content/study/intermediate/section-8-safety.md` — built 2026-09-12.
> **RSGB source:** Chapter 3 Tools, Construction & Safe Practice (pp.7–11).

### 8A — Mains Electrical Safety (8A1, 8A4, 8A6, 8A8)
- **RSGB pages:** pp.9–10
- **Anchor in study page:** `#8a--mains-electrical-safety`
- **Syllabus refs covered:** 8A1 (mains supply, shock thresholds), 8A4 (fuse rating calculation), 8A6 (RCDs, MCBs, RCBOs), 8A8 (correct shock response sequence)
- (no existing site content)

### 8B — Working on Live Circuits (8B4, 8B6)
- **RSGB pages:** pp.8–9
- **Anchor in study page:** `#8b--working-on-live-circuits`
- **Syllabus refs covered:** 8B4 (live working precautions, capacitor discharge), 8B6 (test-before-touch, two-person rule, master switch)
- (no existing site content)

### 8C — RF Burns and RF Exposure (8B5)
- **RSGB pages:** pp.9, 11
- **Anchor in study page:** `#8c--rf-burns-and-rf-exposure-8b5`
- **Syllabus refs covered:** 8B5 (RF burns, never touch antenna, ICNIRP/NIHP, domestic antenna proximity)
- (no existing site content; EMF compliance framework in §1G)

### 8D — Antenna Work at Height (8B2)
- **RSGB pages:** pp.8, 10
- **Anchor in study page:** `#8d--antenna-work-at-height`
- **Syllabus refs covered:** 8B2 (overhead power lines, ladder safety, never work alone, UK Work at Height Regulations 2005)
- (no existing site content)

### 8E — Battery Safety
- **RSGB pages:** pp.8–9 (practical safety context from Ch.3)
- **Anchor in study page:** `#8e--battery-safety`
- (no existing site content)

### 8F — Soldering Safety (8B3)
- **RSGB pages:** pp.7–8
- **Anchor in study page:** `#8f--soldering-safety-8b3`
- **Syllabus refs covered:** 8B3 (fume hazards, eye protection, lead solder precautions, HSE guidance)
- (no existing site content)

### 8G — Fire and Emergency
- **RSGB pages:** pp.8–9
- **Anchor in study page:** `#8g--fire-and-emergency`
- (no existing site content)

### 8H — Environmental Safety and Lightning (8E1)
- **RSGB pages:** pp.10–11
- **Anchor in study page:** `#8h--environmental-safety-and-lightning`
- **Syllabus refs covered:** 8E1 (lightning arrestors, static discharge resistor, disconnect during storms)
- (no existing site content)

---

## Section 9: Measurements & Test Equipment

> **Study page:** `/content/study/intermediate/section-9-measurements.md` — built 2026-09-12.
> **RSGB source:** Chapter 14 Measurements (pp.65–66).

### 9A — Introduction to Test Equipment (9A2)
- **RSGB pages:** pp.65–66
- **Anchor in study page:** `#9a--introduction-to-test-equipment`
- **Syllabus refs covered:** 9A2 (analogue vs digital meters, categories of instrument)
- (no existing site content for intro)

### 9B — The Multimeter (9A1, 9A3, 9A5)
- **RSGB pages:** pp.65–66
- **Anchor in study page:** `#9b--the-multimeter`
- **Syllabus refs covered:** 9A1 (measuring V/I/R), 9A3 (probes, connections), 9A5 (voltage/current/resistance = three measurements for Intermediate licence)
- (no existing site content for basic multimeter use)

### 9C — The Oscilloscope (9C1)
- **RSGB pages:** p.14 (covered elsewhere in manual)
- **Anchor in study page:** `#9c--the-oscilloscope`
- **Syllabus refs covered:** 9C1 (oscilloscope controls, reading Vpp and frequency)
- (no existing site content)

### 9D — Signal Generators (9D1)
- **RSGB pages:** p.15
- **Anchor in study page:** `#9d--signal-generators`
- **Syllabus refs covered:** 9D1 (AF/RF/function generators, receiver sensitivity testing)
- (no existing site content)

### 9E — SWR Meters and Power Meters (9B1, cross-ref §4B)
- **RSGB pages:** pp.56–58 (from feeder chapter — directional coupler, SWR measurement)
- **Anchor in study page:** `#9e--swr-meters-and-power-meters`
- **Syllabus refs covered:** 9B1 (SWR meter directional coupler, placement, power meter use)

- **Link to:** `/pages/sidebands/vswr-bridge-measurement.html`
- **Label:** "The VSWR Bridge — Wheatstone bridge principle, RSA calibration, and measurement procedure"
- **Type:** go-deeper

- **Link to:** `/pages/antenna-curriculum/unit-2-characteristics-and-measurement/lesson-07-swr-and-return-loss.html`
- **Label:** "Antenna Curriculum Lesson 7: SWR and Return Loss"
- **Type:** go-deeper (secondary)

- **Link to:** `/pages/antenna-curriculum/unit-2-characteristics-and-measurement/lesson-08-smith-chart.html`
- **Label:** "Antenna Curriculum Lesson 8: The Smith Chart — impedance matching visualised"
- **Type:** go-deeper (secondary)

- **Embed:** `/interactives/vswr-bridge-principle.html`
- **Label:** "Interactive: Wheatstone bridge — impedance slider shows bridge balance and VSWR derivation"
- **Type:** iframe-embed

### 9F — Spectrum Analysers (9E1, 9E2)
- **RSGB pages:** p.15
- **Anchor in study page:** `#9f--spectrum-analysers`
- **Syllabus refs covered:** 9E1 (spectrum analyser — amplitude vs frequency display), 9E2 (harmonic identification, EMC use)

- **Link to:** `/pages/blog/understanding-s11.html`
- **Label:** "Understanding S11 — reflection coefficient, return loss, and what your analyser is actually measuring"
- **Type:** go-deeper (RSA5065N context — same instrument, different measurement mode)

- **Link to:** `/pages/sidebands/s-parameter-matrix.html`
- **Label:** "S-Parameters — two-port model, S11/S21, and the relationship to spectrum analyser measurements"
- **Type:** go-deeper (secondary)

- **Link to:** `/pages/sidebands/s21-transmission-measurement.html`
- **Label:** "S21 Transmission Measurement — filter response and insertion loss on the RSA5065N"
- **Type:** go-deeper (secondary)

- **Embed:** `/interactives/s21-trace-explorer.html`
- **Label:** "Interactive: S21 trace explorer — simulated spectrum analyser traces for filter, amplifier, attenuator, cable"
- **Type:** iframe-embed

- **Embed:** `/interactives/dut-signature-gallery.html`
- **Label:** "Interactive: DUT signature gallery — S11/S21 characteristic traces by device type"
- **Type:** iframe-embed (secondary)

### 9G — Dip Meters and Antenna Analysers (9A2)
- **RSGB pages:** p.65
- **Anchor in study page:** `#9g--dip-meters-and-antenna-analysers`
- **Syllabus refs covered:** 9A2 (dip meter / grid-dip oscillator, antenna analyser)
- (no existing site content)

### 9H — Test Setups and Procedures (9E1–9E4)
- **RSGB pages:** pp.15, 65–66
- **Anchor in study page:** `#9h--test-setups-and-procedures`
- **Syllabus refs covered:** 9E1–9E4 (TX/RX test setups, dummy load, directional coupler, common errors)

- **Link to:** `/pages/antenna-curriculum/unit-2-characteristics-and-measurement/lesson-10-vna-antenna-measurement-lab.html`
- **Label:** "Antenna Curriculum Lesson 10: VNA Measurement Lab — practical S-parameter and SWR measurement"
- **Type:** go-deeper (measurement procedure context)

- **Link to:** `/pages/sidebands/dut-characterisation-workflow.html`
- **Label:** "DUT Characterisation — five-step workflow: calibrate, connect, sweep, capture, interpret"
- **Type:** go-deeper (secondary)

- **Embed:** `/interactives/s-parameter-signal-flow.html`
- **Label:** "Interactive: 2-port S-parameter signal flow — visualises what the analyser is measuring"
- **Type:** iframe-embed (secondary)

---

## Interactives Not Yet Mapped to Study Sections

These interactives exist in `/frontend/interactives/` but are not yet referenced by any study section. Frontend may want to surface them elsewhere:

| File | Description | Suggested Study Link |
|------|-------------|---------------------|
| `energy-flow-comparison.html` | Energy flow comparison (likely Poynting vector / field energy) | Section 4 or 5A if covers wave energy transport |
| `signal-path-profile.html` | Signal path profile viewer | Section 5 (propagation path) or blog |
| `station-monitor.html` | Station monitor dashboard | Section 7 (operating) |
| `panorama-viewer.html` | Panorama viewer (terrain) | Blog (station survey context) |
| `horizon-rose.html` | Horizon rose (terrain skyline) | Blog (station survey) |
| `terrain-3d.html` | 3D terrain viewer | Blog (station survey) |
| `wspr-decode-map.html` | WSPR decode world map | Blog (station survey) |
| `df-hunt.html` | Direction finding hunt game | Section 7 (operating, DF) |

> **Action for Frontend:** Read these files to confirm their topics before adding study links. Some (horizon-rose, terrain-3d, wspr-decode-map) are blog-only placeholders; others (energy-flow, signal-path-profile) may warrant study section links.

---

## Coverage Summary

| Section | Study Page Exists | Go-Deeper Links | Iframe Embeds |
|---------|------------------|-----------------|---------------|
| 1 — Licensing | ✅ | 1D band plans | — |
| 2 — Electronics | ✅ | 2E reactance, 2F impedance | reactance-vs-frequency, impedance-triangle |
| 3 — Transmitters | ✅ | 3H digital modes | tx-rx-complete |
| 4 — Feeders & Antennas | ✅ | All unit-2/3 lessons | radiation-3d, polarisation-mismatch |
| 5 — Propagation | ✅ | L01 EM radiation, blog survey | em-animato-2 |
| 6 — EMC | ✅ | — | — |
| 7 — Operating | ✅ | band-plan, uk-repeaters, phonetics, qso-scripts, q-codes, digital-modes | — |
| 8 — Safety | ✅ | — | — |
| 9 — Measurements | ✅ | vswr-bridge, s-param sidebands, VNA lesson, blog S11 | vswr-bridge-principle, s21-explorer, dut-gallery, s-param-flow |

**Coverage gaps:** Sections 6 (EMC) and 8 (Safety) have zero matching existing RF-Hub sideband/curriculum content — study pages are the primary resource for those topics. Section 9 sideband links (vswr-bridge, s-parameters) are advanced go-deeper content beyond the exam syllabus.
