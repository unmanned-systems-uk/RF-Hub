# Lesson 9: Gain, Directivity, and Efficiency

**Unit:** 2 — Characteristics & Measurement  
**Prerequisites:** Lessons 3, 6  
**Equipment needed:** None  
**Estimated time:** 25 minutes

---

## Learning Objectives

- Define directivity, gain, and realised gain
- Use the relationship Gain = Efficiency × Directivity
- Convert between dBi and dBd (dBi = dBd + 2.15)
- Spot unrealistic gain claims in product marketing

---

## Sections to Write

### Directivity — Pattern Focus
- How concentrated is the pattern compared to isotropic?
- Measured in dBi — higher = more focused beam
- Dipole directivity = 2.15 dBi

### Efficiency — Power In vs Power Radiated
- η = P_radiated / P_input — accounts for ohmic and ground losses
- Efficiency = Radiation resistance / (Radiation resistance + Loss resistance)
- Small antennas often have poor efficiency (high loss relative to radiation)

### Gain — The Practical Number
- Gain = Directivity × Efficiency
- This is what matters in link budget calculations
- Realised gain also accounts for impedance mismatch loss

### dBi vs dBd
- dBi: referenced to isotropic (the absolute standard)
- dBd: referenced to a dipole (common in amateur radio)
- dBi = dBd + 2.15 always
- Watch out: manufacturers sometimes use dBd to make numbers look bigger

### Effective Aperture
- The antenna's "capture area" for incoming signals
- A_eff = (λ² × G) / (4π) — gain determines how much signal an antenna collects
- Larger effective aperture = more signal captured

### Beware Marketing Gain Claims
- Physics limits gain for a given antenna size and type
- If a small handheld antenna claims 15 dBi, be sceptical
- Rule of thumb: a dipole = 2.15 dBi, a 3-element Yagi ≈ 7 dBi

### Interactive Elements
- Reuse `radiation-3d-v5.html` with gain values overlaid
- Gain/directivity/efficiency calculator — adjust parameters, see relationships

---

**Previous:** [Lesson 8 — Smith Chart](lesson-08-smith-chart.md)  
**Next:** [Lesson 10 — VNA Antenna Measurement Lab](lesson-10-vna-antenna-measurement-lab.md)
