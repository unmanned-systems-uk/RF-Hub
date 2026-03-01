# Lesson 7: SWR and Return Loss — Is My Antenna Working?

**Unit:** 2 — Characteristics & Measurement  
**Prerequisites:** Lesson 6 (Impedance)  
**Equipment needed:** None  
**Estimated time:** 25 minutes

---

## Learning Objectives

- Define SWR, return loss, and reflection coefficient (Γ)
- Convert between SWR, return loss, and reflection coefficient
- Set practical SWR thresholds for different applications
- Explain what happens to reflected power

---

## Sections to Write

### Reflection Coefficient (Γ)
- When antenna impedance ≠ feedline impedance, some power reflects back
- Γ = (Z_load - Z₀) / (Z_load + Z₀) — ranges from 0 (perfect match) to 1 (total reflection)
- Γ is what the VNA actually measures (as S11)

### SWR: Standing Wave Ratio
- Forward and reflected waves combine to create a standing wave on the feedline
- SWR = (1 + |Γ|) / (1 - |Γ|) — ranges from 1:1 (perfect) to ∞:1 (total mismatch)
- SWR 1.5:1 = good, 2:1 = acceptable, 3:1 = needs attention

### Return Loss
- Return loss (dB) = -20 × log₁₀(|Γ|)
- S11 on a VNA display = return loss (approximately)
- -10 dB return loss = SWR ~2:1, -20 dB = SWR ~1.2:1

### Conversion Table
- SWR ↔ Return Loss ↔ Γ ↔ % Power Reflected — comprehensive table

### What Happens to Reflected Power?
- Common myth: reflected power damages the transmitter
- Reality: reflected power is re-reflected at the transmitter and eventually dissipated
- Real concern: increased feedline losses when SWR is high

### Interactive Elements
- SWR/RL/Γ converter: enter any one value, see all three + visual gauge
- Standing wave animation: forward + reflected waves creating standing pattern on feedline

---

## Knowledge Check
<!-- To be written -->

## Summary
<!-- To be written -->

---

**Previous:** [Lesson 6 — Impedance](lesson-06-impedance.md)  
**Next:** [Lesson 8 — The Smith Chart](lesson-08-smith-chart.md)
