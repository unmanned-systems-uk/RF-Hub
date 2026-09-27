# Quiz Diagram Audit — 2026-09-17

**Audited by:** RFH-Backend  
**Query:** `SELECT … FROM exam_questions WHERE has_diagram = true AND diagram_url IS NULL`

---

## Summary

| Metric | Count |
|---|---|
| Questions flagged `has_diagram = true` | 28 |
| Questions with `diagram_url` populated | 28 |
| **Questions missing `diagram_url` (primary query)** | **0** |
| Questions with no diagram flag (`has_diagram = false`) | 491 |

**Result: No SVG work is currently outstanding for tagged questions.** Migration 004 (commit b9c7b20, 2026-09-17) populated `diagram_url` for all 28 flagged rows. All 28 URLs verified against the filesystem — 0 broken links.

---

## Coverage: Existing Diagram Questions

### By level

| Level | Count |
|---|---|
| `full` (D2F) | 19 |
| `intermediate` | 9 |
| `foundation` | 0 |
| **Total** | **28** |

### By level × section

#### Full (D2F) — 19 questions

| Section | Count | Question IDs |
|---|---|---|
| 2C | 3 | D2F-M1-Q19, D2F-M2-Q19, D2F-M2-Q23 |
| 2E | 1 | D2F-M1-Q21 |
| 2G | 1 | D2F-M2-Q24 |
| 2H | 1 | D2F-M1-Q26 |
| 2I | 1 | D2F-M1-Q27 |
| 3C | 2 | D2F-M1-Q30, D2F-M2-Q31 |
| 3H | 1 | D2F-M1-Q33 |
| 3M | 2 | D2F-M1-Q38, D2F-M2-Q37 |
| 4B | 1 | D2F-M2-Q42 |
| 4F | 3 | D2F-M1-Q46, D2F-M1-Q47, D2F-M2-Q44 |
| 6D | 1 | D2F-M1-Q58 |
| 9B | 1 | D2F-M1-Q73 |
| 9C | 1 | D2F-M2-Q75 |

#### Intermediate — 9 questions

| Section | Count | Syllabus refs |
|---|---|---|
| 2C | 2 | 2C1-2025-Int'd-2221, 2C2-2025-Int'd-3341 |
| 2F | 1 | 2F1-2025-Int'd-7386 |
| 2I | 2 | 2I4-2025-Int'd-7447, 2I6-2025-Int'd-7003 |
| 2J | 1 | 2J4-2025-Int'd-7464 |
| 3G | 1 | 3G3-2025-Int'd-1476 |
| 3H | 1 | 3H2-2025-Int'd-1249 |
| 3M | 1 | 3M3-2025-Int'd-7020 |

---

## Full Question List (with stems)

### Full (D2F)

| syllabus_ref | section | diagram_url | Stem preview |
|---|---|---|---|
| D2F-M1-Q19 | 2C | `full/2C/full-D2F-M1-Q19.svg` | The circuit shows the bias resistors for the transistor. The input at the transistor base can be taken as 50kΩ. What is the input resistance to the circuit at audio frequencies? |
| D2F-M2-Q19 | 2C | `full/2C/full-D2F-M2-Q19.svg` | The drawing shows the circuit of a switching transistor controlling the current in the coil of a relay. The base is fed with regular pulses to cause the relay contacts to close. Which circuit will min… |
| D2F-M2-Q23 | 2C | `full/2C/full-D2F-M2-Q23.svg` | The battery voltage is 10V. What power is dissipated in the 4kΩ resistor? |
| D2F-M1-Q21 | 2E | `full/2E/full-D2F-M1-Q21.svg` | The circuit diagram shows an oscillator. The function of capacitor C relies upon the ability of a capacitor to… |
| D2F-M2-Q24 | 2G | `full/2G/full-D2F-M2-Q24.svg` | What components are most important in determining the output frequency from this circuit? |
| D2F-M1-Q26 | 2H | `full/2H/full-D2F-M1-Q26.svg` | What current is flowing through the diode shown in the diagram? |
| D2F-M1-Q27 | 2I | `full/2I/full-D2F-M1-Q27.svg` | The circuit shows an amplifier biased in… |
| D2F-M1-Q30 | 3C | `full/3C/full-D2F-M1-Q30.svg` | When the 14MHz transmitter shown is tested, it is found to transmit on 14MHz and on 4MHz at the same time. The most likely cause of the unwanted emission is… |
| D2F-M2-Q31 | 3C | `full/3C/full-D2F-M2-Q31.svg` | The block diagram shows a typical… |
| D2F-M1-Q33 | 3H | `full/3H/full-D2F-M1-Q33.svg` | Which waveform in the drawing is most desirable for a CW transmitted signal? |
| D2F-M1-Q38 | 3M | `full/3M/full-D2F-M1-Q38.svg` | A sine wave and a harmonic are shown at the top of the drawing. Below are four representations in the frequency domain. Which one corresponds to the waveform shown? |
| D2F-M2-Q37 | 3M | `full/3M/full-D2F-M2-Q37.svg` | The drawing shows one and a half cycles of a signal over a time of 1.5µs. Which frequency domain graph corresponds to the waveform shown? |
| D2F-M2-Q42 | 4B | `full/4B/full-D2F-M2-Q42.svg` | The circuit is a… |
| D2F-M1-Q46 | 4F | `full/4F/full-D2F-M1-Q46.svg` | The antenna matching unit shown is… |
| D2F-M1-Q47 | 4F | `full/4F/full-D2F-M1-Q47.svg` | Which one of the following shows a BNC plug? |
| D2F-M2-Q44 | 4F | `full/4F/full-D2F-M2-Q44.svg` | Which one of the following shows a PL259 plug? |
| D2F-M1-Q58 | 6D | `full/6D/full-D2F-M1-Q58.svg` | The drawing shows the mains lead of audio equipment wound on a core to minimise breakthrough. What is the core made of? |
| D2F-M1-Q73 | 9B | `full/9B/full-D2F-M1-Q73.svg` | The oscilloscope displaying the waveform shown is set to a sensitivity of 5mV per division and timebase 1ms per division. What is the peak amplitude of the waveform? |
| D2F-M2-Q75 | 9C | `full/9C/full-D2F-M2-Q75.svg` | The circuit shown is connected to a supply of 24V. R1 is 20kΩ and R2 is 10kΩ. The voltmeter reads 0-15V and has a resistance of 10kΩ. Approximately what voltage will it read? |

### Intermediate

| syllabus_ref | section | diagram_url | Stem preview |
|---|---|---|---|
| 2C1-2025-Int'd-2221 | 2C | `intermediate/2C/int-2C1.svg` | In the circuit shown R1 is 200Ω and R2 is 600Ω. A voltage of 4V is measured across the 200Ω resistor, what is the voltage across R2? |
| 2C2-2025-Int'd-3341 | 2C | `intermediate/2C/int-2C2.svg` | The circuit diagram shows three resistors being used as a potential divider. Each resistor has an identical value, and you may assume that there is no current being drawn from P. The potential at P is… |
| 2F1-2025-Int'd-7386 | 2F | `intermediate/2F/int-2F1.svg` | The drawing shows two digitised sine waves. The sine wave on the right… |
| 2I4-2025-Int'd-7447 | 2I | `intermediate/2I/int-2I4.svg` | Which circuit diagram is that of a common emitter amplifier? |
| 2I6-2025-Int'd-7003 | 2I | `intermediate/2I/int-2I6.svg` | The photograph shows an electronic component often referred to as a… |
| 2J4-2025-Int'd-7464 | 2J | `intermediate/2J/int-2J4.svg` | The diagram is that of a power supply which… |
| 3G3-2025-Int'd-1476 | 3G | `intermediate/3G/int-3G3.svg` | Which ONE of the following frequency/amplitude diagrams shows the effect of a band pass filter? |
| 3H2-2025-Int'd-1249 | 3H | `intermediate/3H/int-3H2.svg` | The drawing shows an incomplete block diagram of an analogue receiver. At which point should the detector block be inserted? |
| 3M3-2025-Int'd-7020 | 3M | `intermediate/3M/int-3M3.svg` | An SDR receiver is shown in the diagram. What function is performed in the blank box? |

---

## Issues for Docs Team

### 1. Orphan SVG — no matching DB row

One SVG committed in d0838d4 has no corresponding question row in `exam_questions`:

| File path | Expected syllabus_ref | Status |
|---|---|---|
| `full/2E/full-D2F-M2-Q27.svg` | `D2F-M2-Q27` | **No DB row found** |

Action needed: Either add the question row for D2F-M2-Q27 (with `has_diagram = true`) or remove the orphan SVG if the question was not ingested.

### 2. Foundation — zero diagram questions

No Foundation questions are currently flagged `has_diagram = true`. This may be correct (Foundation paper questions may not use diagrams), but worth confirming against source papers before Foundation questions are ingested.

### 3. Text-search false positives (no action needed)

Four questions matched a regex sweep for diagram language but do **not** require diagrams — confirmed by reading full stems:

| syllabus_ref | level | Matched term | Verdict |
|---|---|---|---|
| D2F-M2-Q33 | full/3M | "figure" | Means "numerical value", not a diagram |
| 3C5 | intermediate | "noise figure" | Technical term, no diagram |
| 5B4-2025-Int'd-656 | intermediate | "refer to the" | Ionosphere text question, no diagram |
| 9B | intermediate | "circuit is accessible" | Describes physical setup, no diagram |

---

## Dispatch Notes for Docs

No SVG builds are currently pending — the 28 existing tagged questions are fully served.

If new question batches are ingested with `has_diagram = true`, the path convention is:

```
/assets/images/quiz-diagrams/<level>/<section_code>/<prefix>-<ref>.svg
```

Where prefix is:
- `full` for D2F questions: `full-<syllabus_ref>.svg`
- `int` for intermediate: `int-<first_segment_of_syllabus_ref>.svg` (segment = text before first `-`)
- `fnd` for foundation (proposed, not yet used): `fnd-<syllabus_ref>.svg`

After adding SVG files, run migration to populate `diagram_url`:

```sql
-- full level example
UPDATE exam_questions
SET diagram_url = '/assets/images/quiz-diagrams/full/' || section_code || '/full-' || syllabus_ref || '.svg'
WHERE has_diagram = true AND level = 'full' AND diagram_url IS NULL;
```
