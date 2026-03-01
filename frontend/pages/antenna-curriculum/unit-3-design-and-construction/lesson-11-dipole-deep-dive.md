# Lesson 11: Dipole Deep Dive — The Reference Antenna

**Unit:** 3 — Design & Construction  
**Prerequisites:** Unit 2 complete  
**Equipment needed:** Wire, coax, connectors, VNA  
**Estimated time:** Theory 30 min + Lab 60 min

---

## Learning Objectives

- Calculate dipole length for any target frequency including velocity factor
- Explain current and voltage distribution on a dipole
- Design, build, and VNA-measure a dipole for a specific band
- Execute the build-measure-trim optimisation cycle

---

## Sections to Write

### Half-Wave Dipole Physics
- L = (300 / f_MHz) × 0.5 × VF (velocity factor typically 0.95 for bare wire)
- Why a real dipole is shorter than theoretical λ/2
- Effect of wire diameter on bandwidth and resonant length

### Current and Voltage Distribution
- Current: sinusoidal, maximum at centre, zero at tips
- Voltage: inverse — zero at centre, maximum at tips
- This determines impedance: low Z at centre (~73 Ω), high Z at tips

### Impedance at Resonance
- Free space: ~73 + j0 Ω
- Effect of height above ground: can range from 50–100 Ω
- Below/above resonance: capacitive/inductive reactance appears

### Feed Methods
- Centre-fed (standard) — balanced feedpoint, needs balun to coax
- Off-centre fed dipole (OCFD) — unequal arm lengths, multiband potential

### Bandwidth Considerations
- Thicker elements = wider bandwidth (lower Q)
- Fan dipole: multiple dipoles on same feedpoint for multiband
- Inverted-V configuration: practical compromise for limited space

### Hands-On Lab: Build a 145 MHz Dipole
1. Calculate dimensions for 145 MHz
2. Cut wire, prepare coax with connectors
3. Assemble and mount
4. VNA measure: find actual resonance
5. Trim wire length to optimise SWR
6. Document before/after measurements

### Interactive Elements
- Dipole designer: enter frequency, wire diameter, height → get length, pattern, impedance estimate

---

**Previous:** [Lesson 10 — VNA Lab](../unit-2-characteristics-and-measurement/lesson-10-vna-antenna-measurement-lab.md)  
**Next:** [Lesson 12 — Vertical Antennas](lesson-12-vertical-antennas.md)
