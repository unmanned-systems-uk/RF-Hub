# Learning Log

> **Purpose:** Records key learning moments, terminology corrections, independent reasoning breakthroughs, and RF insights. Feeds the "DC-to-Light" meta-blog series and Unsquelched content. Also helps Claude across all projects understand Anthony's current knowledge level.
>
> **Location:** D:\live_code\RF-Hub\claude-desktop-project-managment\shared-context\
> **Last updated:** 2026-03-24
> **Convention:** Most recent entries at the top. Tag each entry with relevant curriculum lesson(s).

---

## Reasoning Breakthroughs

These are moments where Anthony independently worked through a concept before confirmation.

### End-Fed = Dipole When Counterpoise Equals Radiator [Lessons 14, 16]
- **Insight:** An end-fed antenna with a counterpoise wire equal in length to the radiating element is effectively a dipole — making the UNUN unnecessary. In that case, you need a choke balun instead.
- **Why it matters:** Shows understanding of how antenna topology determines the matching requirement.
- **Blog link:** Blog 1.0, Point 4 (counterpoise) — this insight drives that section.

### −6 dB per Distance Doubling (Not −3 dB) [Lesson 3]
- **Insight:** Power follows inverse square law (1/r²), so doubling distance = −6 dB, not −3 dB.
- Anthony caught a genuine −3 dBm offset bug in a visualisation based on this understanding.
- **Why it matters:** Demonstrates developing RF instincts strong enough to spot implementation errors.

### Large Loops vs Small Loops [Lesson 15]
- **Insight:** Large loops (circumference ≈ 1λ) are E-field antennas. The "H-field antenna" distinction applies only to electrically small loops.
- **Curriculum note:** Lesson 15 should explicitly address this misconception.

### Active Antenna Testing Requires DC Bias [Lesson 20]
- **Insight:** Active GNSS antennas need DC bias voltage for meaningful VNA characterisation. Testing unpowered only measures unpowered input impedance.
- **Curriculum note:** Important practical caveat for Lesson 20 (measurement techniques).

### Spectrum Analyser ≠ Digital Receiver Sensitivity [Lesson 20]
- **Insight:** The RSA5065N could not detect signals the LTE modem decoded successfully. Broadband power measurement vs correlation/coding gain.
- **Why it matters:** Easy to assume "if the SA can't see it, nothing's there" — wrong for digital signals.

---

## Terminology Corrections Log

| Incorrect | Correct | Context |
|-----------|---------|---------|
| UNUM | UNUN (unbalanced-to-unbalanced) | Antenna matching discussion |
| freight | ferrite | Ferrite cores/chokes discussion |
| Armature | Amateur (as in Amateur radio) | Radio licensing discussion |

> **Note for all Claude projects:** When Anthony uses incorrect terminology, gently correct it and explain the correct term. This is explicitly requested to support learning.

---

## Key Principles Established

- **Experimentation drives content, not the reverse.** The 3-hour rule protects this.
- **Dual-output mindset:** Most experiments serve both curriculum and blog/Unsquelched.
- **Independent reasoning preferred:** Work through concepts logically before receiving answers.
- **AI-transparent development:** Anthony openly credits AI tools as collaborators.
- **Context management:** Large file transfers work better as concise summaries than line-by-line transfers.

---

## Current Knowledge Level Assessment

- **Strong:** Practical antenna deployment, basic S-parameter concepts, SDR receiver operation, inverse square law, propagation basics
- **Developing:** Transmission line theory, matching network design, filter theory, measurement technique nuances
- **Early stage:** Phased arrays, advanced modulation schemes, detailed circuit-level RF design
- **Working toward:** UK Foundation amateur radio licence

---

## Template for New Entries

```
### [Brief Title] [Lesson ##]
- **Date:** YYYY-MM-DD
- **Insight:** What was learned or reasoned
- **How it came up:** Context
- **Why it matters:** Significance
- **Content potential:** Blog/Unsquelched/Curriculum applicability
```
