# Lesson 6: Impedance — The Antenna's Personality

**Unit:** 2 — Characteristics & Measurement  
**Prerequisites:** Unit 1 complete  
**Equipment needed:** None (theory lesson — VNA work in Lesson 10)  
**Estimated time:** 30 minutes

---

## Learning Objectives

By the end of this lesson you will be able to:

- Define antenna impedance as resistance + reactance (R + jX)
- Explain the difference between radiation resistance and loss resistance
- Describe why impedance changes with frequency
- Explain why 50 Ω is the standard reference impedance

---

## Sections to Write

### What is Impedance?
- Impedance = R + jX (complex number)
- Resistance (R): energy consumed — radiation resistance (useful) + loss resistance (wasted)
- Reactance (X): energy stored and returned — inductive (+jX) or capacitive (-jX)
- Analogy: water flowing through pipes with springs attached

### Radiation Resistance
- The portion of resistance that represents power actually radiated as EM waves
- A dipole in free space: ~73 Ω radiation resistance at resonance
- If radiation resistance is high relative to loss resistance, the antenna is efficient

### Loss Resistance
- Power dissipated as heat in the antenna conductor, ground, and nearby objects
- Ground losses are significant for verticals — why good radial systems matter
- Thin wires have higher loss resistance than thick conductors

### Reactance and Resonance
- Below resonant frequency: antenna appears capacitive (-jX)
- Above resonant frequency: antenna appears inductive (+jX)
- At resonance: X = 0, impedance is purely resistive
- Resonance is the frequency where the antenna "wants" to operate

### Why 50 Ω?
- Historical compromise between maximum power handling (~30 Ω) and minimum loss (~77 Ω)
- 50 Ω coax is the standard for transmitting systems
- 75 Ω is used for receive-only (cable TV, broadcast) — optimised for low loss

### Interactive Elements
- Impedance visualiser: animated circuit showing current/voltage as R and X change
- Frequency sweep animation: feedpoint Z changing as you tune across resonance

---

## Knowledge Check
<!-- To be written with full content -->

## Summary
<!-- To be written with full content -->

---

**Previous:** [Lesson 5 — Polarisation](../unit-1-how-antennas-work/lesson-05-polarisation.md)  
**Next:** [Lesson 7 — SWR and Return Loss](lesson-07-swr-and-return-loss.md)
