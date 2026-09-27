# RSGB Intermediate — Content Gap Audit

**Date:** 2026-09-26
**Source paper:** `RSGB - Intermediate Level - Full Exam.xlsx` (142 questions, 27 embedded diagrams)
**PO mock result:** 142/142 (100%)
**Standing rule:** RSGB paper is reference-only. Never copy questions/diagrams verbatim into RF-Hub. Use only for topic-gap analysis. See `feedback_rsgb_exam_papers_reference_only.md`.

---

## Executive summary

Of 142 questions covering the full Intermediate syllabus:

| Status | Count | Notes |
|---|---|---|
| Covered adequately | ~98 | Verified via grep of `content/study/intermediate/*.md` |
| Fixed in today's sprint (2026-09-25) | 7 | Shipped as urgent gap-fixes during PO's revision |
| **Genuine gaps or thin coverage** | **~25** | This report — post-exam sprint scope |
| Diagram-based questions | 27 | Visual concept types listed in §Diagrams |

**Highest-impact gap clusters:**

1. **Workshop-tools safety** (§8B) — chuck key, centre punch, pillar drill safety — 3 exam questions, zero coverage
2. **Practical construction basics** (§9C/D/E) — resistor letter-code notation (5k6), screening between stages, easiest-metal-to-solder, tinned tip purpose
3. **Satellite operating details** (§7G) — Doppler shift on pass, minimum TX power principle
4. **EMC diagnostic procedures** (§6) — which everyday things aren't RF sources, masthead-amp overload, radiated-vs-conducted mains test, vehicle antenna positions
5. **dB decomposition worked example** (§9B) — the specific "how do I compute a 17 dB gain without a scientific calculator" pattern (PO stumbled on this)

Nothing found suggests the site is *wrong* on any topic. Everything below is either **missing** (topic not present) or **thin** (topic mentioned but no worked example / no specific angle the exam probes).

---

## Fixed today during PO revision (2026-09-25)

Seven topics were dispatched, written and rebuilt in a same-day cycle during Anthony's revision. All live now; no follow-up needed.

| Syllabus | Topic | Commit |
|---|---|---|
| 3F1 | PA efficiency → heat dissipation (worked example, exam trap) | 887f8a3 |
| 3G2 | Oscillator harmonic falling in-band (48 MHz → 144 MHz trap) | a2cadbd |
| 3G5 | Chirp (PSU sag on keying) vs key clicks | a1928ee |
| 3H2 | Direct conversion receiver (LO = signal freq) | 89de646 |
| 3I1 | TRF receiver architecture | b4f6604 |
| 3L1 | AGC signal derived from IF | 6e86078 |
| 4A1 | Waveguide cutoff (WG13 worked example) | 1c5b913 |

---

## Genuine gaps by section (post-exam sprint scope)

### §1 Licensing

| Syllabus | Topic | Coverage state | Suggested action |
|---|---|---|---|
| 1G1 | Which HF band is Primary but has no satellite allocation? | 30m listed as secondary (line 451), no primary-vs-satellite matrix | Add a small table showing primary/secondary AND satellite/no-satellite for each HF band |
| 1E1 | Licence class required to set up a Direction-Finding beacon | Not covered | Add one-paragraph block in §1E on beacon/DF-station licence rules |

### §2 Technical

| Syllabus | Topic | Coverage state | Suggested action |
|---|---|---|---|
| 2E8 | Voltage at ½λ point on a feeder with a positive peak | Half-wavelength repeat pattern mentioned (line 760) but no worked example on same-phase / opposite-phase at ½λ point | Add a worked example showing at ½λ you see the same peak; at ¼λ you see zero |
| 3A2 | AM depth of modulation (m = 0.1 → quiet) | FM modulation index covered; AM depth of modulation as a concept is thin | Add short block in §3A distinguishing AM depth of modulation (0-1 range, how loud/quiet) from FM modulation index |

### §3 Transmitters and receivers

Mostly well covered after today's fixes. Remaining thin spots:

| Syllabus | Topic | Coverage state | Suggested action |
|---|---|---|---|
| 3B1 | SSB TX block diagram — mixer vs frequency synthesiser position | Block diagram exists (fig-3-2) but doesn't explicitly test "which block is misplaced" | Add a "correct order" annotation callout naming each block position |

### §5 Propagation

| Syllabus | Topic | Coverage state | Suggested action |
|---|---|---|---|
| 5B5 | Sporadic E enhancement on 24/28 MHz | Not explicitly covered; §5 mentions D/E/F layers generally | Add short section on sporadic E (Es) — mid-summer, ~50 MHz, enables long-skip on 10/12/6m |

### §6 EMC

| Syllabus | Topic | Coverage state | Suggested action |
|---|---|---|---|
| 6A3 | Why CE-marked equipment can still suffer interference | CE marking mentioned but not the "TX field exceeds agreed limits" reasoning | Add one-line explanation in §6A |
| 6B2 | Which everyday devices are/aren't RF interference sources | Common sources listed but no "least likely" ranking (soldering iron = passive) | Add small table listing common sources (plasma TV, SMPS, LED lighting, motors) vs non-sources (soldering iron, incandescent lamp, etc.) |
| 6C2 | Masthead TV amplifier — effect of amateur signal on it | Not covered | Add one paragraph on masthead-amp overload/desensitisation by strong nearby amateur transmitters |
| 6D4 | Test if RF is entering victim via mains vs radiated | Dummy load mentioned generally; no explicit "swap to dummy load to isolate radiated vs conducted" test | Add worked diagnostic procedure |
| 6F3 | Best position for vehicle antenna | Vehicle installation §6F mentions wiring routing (90° to vehicle wiring) but not antenna mounting position | Add a "vehicle antenna position" mini-section — centre of roof best, boot lip acceptable, wing mount worst |

### §7 Operating practices

| Syllabus | Topic | Coverage state | Suggested action |
|---|---|---|---|
| 7G3 | Satellite Doppler — freq shifts during pass | Not covered | Add short block: freq rises on approach, falls on recession, low-Earth-orbit satellites have short passes (minutes) |
| 7G4 | Amateur satellite TX power — use lowest possible | Not covered | Add one paragraph explaining the shared repeater/transponder principle |

### §8 Safety — workshop tools

**Full gap area.** Three exam questions on workshop tools with zero coverage in §8.

| Syllabus | Topic | Coverage state | Suggested action |
|---|---|---|---|
| 8B4 | Chuck key must be removed before power on | Not covered | Add workshop-tools mini-section in §8B |
| 8B5 | Centre punch use (prevents drill slipping) | Not covered | Same section |
| 8B6 | Pillar drill safety (both hands needed) | Not covered | Same section |

**Suggested single block:** §8 already has power-tool safety (drill in §8B). Extend that block into a proper "Workshop hand-tools and power-tools" mini-section covering: centre punch (before drilling), chuck key (remove before power), vice/clamp (secure workpieces), pillar drill (two-hand operation, better than handheld), tool sharpness (blunt tools are dangerous).

### §9 Measurements & construction

Several small gaps:

| Syllabus | Topic | Coverage state | Suggested action |
|---|---|---|---|
| 9B1 | dB shortcut worked example (17 dB = ×50) | 20-log-3 = ×5 shortcut is implied but no explicit decomposition worked example | Add small "dB mental arithmetic" callout with 13 = 10+3 → ×20, 17 = 20−3 → ×50, 23 = 20+3 → ×200 patterns |
| 9C1 | Resistor letter-code notation (5k6 = 5.6 kΩ) | Colour codes covered; letter/BS 1852 notation not | Add a small note on letter codes: R47 = 0.47 Ω, 4R7 = 4.7 Ω, 5k6 = 5.6 kΩ, 2M2 = 2.2 MΩ |
| 9D1 | Thin metal sheet used for inter-stage screening | Screening mentioned in general terms; not framed as "why thin metal sheet in radio construction" | Add one-line callout in §9D |
| 9E3 | Copper easiest to solder; aluminium/stainless hard | Not covered | Add small "solderability by metal" table |
| 9E4 | Tinned soldering iron tip improves heat conduction | Not covered explicitly | Add short paragraph in §9E soldering |

---

## Diagram-based question types (27 images total)

Anthony flagged pre-exam that "block diagram" questions were his weak area. Confirmed patterns tested in the paper:

### Circuit-diagram identification (10 images)

- Potentiometer output max/min (§2C2 potentiometer with fixed resistor either side)
- Capacitor network — max capacitance achievable by arrangement (§2D2)
- RLC circuit — where energy is dissipated vs stored (§2E6)
- Reactance phase — bold current line, which line is voltage? (§2E3)
- Transistor circuit — value of β from Ic/Ib on schematic (§2I3)
- Transistor circuit — function of R1 and R2 (bias) (§2I4)
- Crystal in oscillator circuit — what does it do? (§2I6)
- Mains PSU diagram — where does smoothing cap fit? (§2J2)
- Mains PSU diagram — what is component X? (§2J4)
- Voltmeter/ammeter connection for power measurement (§9A5)

**Coverage state:** individual concepts covered in text; circuit-diagram question TYPE not drilled. **Suggested:** add 3-5 diagram-identification quiz questions in study MD self-check sections using our own SVGs.

### Block-diagram questions (5 images)

- SSB TX block diagram — one function in wrong position (§3B1)
- Direct conversion receiver — LO freq for 7.1 MHz signal (§3H2)
- SDR receiver diagram — what's in the blank box? (Fourier / sampling / filter) (§3M3)
- CW envelope showing key clicks (§3G4)
- Vehicle antenna position (§6F3)

**Coverage state:** All block diagrams exist as SVGs in section-3 assets; question TYPE testing "identify the misplaced block" or "identify the missing block" not drilled.

### Graph/waveform-reading questions (7 images)

- Resonance curve — identify f_r on graph (§2H1)
- Tuned circuit type from graph shape — L+C parallel vs series (§2H2)
- Selectivity comparison — which curve is most selective? (§2H4)
- High-pass filter identification from 4 options (§2H5)
- Standing wave voltage vs position (§2E3 phase reading)
- CW envelope shape (§3G4)
- PSU output waveform — rectified/smoothed shape (§2J3)
- Frequency domain vs time domain matching (§3M2 — 4 waveforms, which is which)

**Coverage state:** Concepts covered in text; graph-reading exam questions not systematically practised.

### Physical arrangement questions (2 images)

- Vehicle antenna mounting position — 4 options (§6F3)
- (Various minor)

---

## Recommended post-exam sprint plan

Prioritised by exam impact + effort:

### Sprint A — Workshop tools & construction basics (highest coverage-per-hour)

Six easy-to-write additions, all one-paragraph blocks:

- §8B workshop tools expansion (chuck key, centre punch, pillar drill, vice) — 8B4/8B5/8B6
- §9C letter-code notation (R/k/M positions) — 9C1
- §9D thin metal screening callout — 9D1
- §9E copper as easiest-to-solder + tinned tip purpose — 9E3/9E4

**Estimated:** 1 Docs commit, 1 LessonsBuilder rebuild. ~2 hours.

### Sprint B — EMC diagnostic procedures

Five practical-diagnostic paragraphs:

- §6A CE mark limits explanation — 6A3
- §6B RFI-source ranking table — 6B2
- §6C masthead amp overload — 6C2
- §6D dummy-load-vs-antenna diagnostic — 6D4
- §6F vehicle antenna mounting — 6F3

**Estimated:** 1 Docs commit, 1 LessonsBuilder rebuild. ~3 hours.

### Sprint C — Satellite operating

- §7G Doppler on satellite passes — 7G3
- §7G minimum TX power principle — 7G4
- §7G LEO vs GEO pass duration (context)

**Estimated:** 1 Docs commit, 1 LessonsBuilder rebuild. ~2 hours.

### Sprint D — Small technical additions

- §1G primary-vs-satellite matrix — 1G1
- §1E DF beacon licence class — 1E1
- §2E ½λ standing wave worked example — 2E8
- §3A AM depth of modulation vs FM index — 3A2
- §5B sporadic E on 10m/6m — 5B5
- §9B dB decomposition worked example (17 dB = ×50) — 9B1

**Estimated:** 1 Docs commit spanning three sections, 3 LessonsBuilder rebuilds. ~4 hours.

### Sprint E — Diagram-question drill (deferred)

Author original diagram-identification quiz questions using our own SVGs. Covers:

- Circuit-identification (potentiometer, R1/R2 bias, PSU components, meter placement)
- Block-diagram-with-missing-block (SDR blank box, SSB TX order)
- Graph-reading (resonance, selectivity comparison, filter type ID)
- Physical arrangement (vehicle antenna)

**NOT copying RSGB questions.** Author fresh scenarios covering same concepts.

**Estimated:** 1 Docs sprint + Interactives SVGs for new diagrams. Larger — a proper sprint.

---

## Copyright compliance

- No RSGB question stems reproduced in this report
- No RSGB diagrams reproduced or referenced by filename in future content
- All suggested content additions must be authored independently by Docs
- Reference-only rule per `feedback_rsgb_exam_papers_reference_only.md` enforced throughout

---

## Notes for future sessions

- Post-exam sprints A–D total ~11 hours of Docs work + 4–5 LessonsBuilder rebuilds. Not a huge lift; could all be done in 2–3 days if prioritised.
- Sprint E (diagram-drill) is a bigger piece and should be scoped separately.
- If more RSGB "mock" papers arrive (Full or Foundation), re-run this same audit process against them.
- If PO's RSGB contact eventually formalises the relationship, consider whether RF-Hub should credit RSGB explicitly (case-by-case decision — do not do this without contact's sign-off).
