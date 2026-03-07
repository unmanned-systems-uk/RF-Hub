# Lesson 10: VNA Antenna Measurement Lab

**Unit:** 2 — Characteristics & Measurement  
**Prerequisites:** Lessons 6–9 + VNA calibration knowledge  
**Equipment needed:** RSA5065N (VNA mode), calibration kit, antenna(s)  
**Estimated time:** 60–90 minutes (hands-on lab)

---

## Learning Objectives

- Perform a 1-port SOL calibration on the RSA5065N
- Measure S11 (return loss) of a real antenna
- Read SWR, impedance, and Smith chart from VNA display
- Determine an antenna's resonant frequency, bandwidth, and feedpoint impedance

---

## Sections to Write

### Pre-Lab Review (10 min)
- Brief recap of Lessons 6–9 concepts
- What S11 tells you and what it can't (no gain information)
- Calibration: why SOL (Short-Open-Load) is essential for accurate results

### Lab Step 1: VNA Calibration
- Set frequency range for target band (e.g., 100–200 MHz for 2m band)
- Connect Short standard → calibrate → connect Open → calibrate → connect Load → calibrate
- Verify calibration: Load should show S11 < -40 dB across band
- Common mistakes and how to avoid them

### Lab Step 2: Measure the Diamond D130N Discone
- Connect D130N to calibrated VNA port
- Sweep 25–1300 MHz (full range of antenna)
- Record: S11 plot, SWR plot, Smith chart trace
- Identify resonant points (where SWR dips)
- Note bandwidth at each resonance (SWR < 2:1 criterion)
- Compare to manufacturer specifications

### Lab Step 3: Measure a Simple Antenna
- Connect a dipole, whip, or rubber duck
- Narrower sweep around expected resonance
- Record: resonant frequency, SWR at resonance, impedance (R + jX)
- Smith chart interpretation: where does the trace sit?

### Lab Step 4: Document and Compare
- Screenshot all measurements
- Annotate Smith chart traces
- Create comparison table: expected vs. measured
- Discuss any discrepancies

### Interactive Elements
- Virtual VNA simulator (future) — practice before touching real equipment

---

## 🏆 UNIT 2 CAPSTONE: Full Antenna Characterisation Report

Choose one antenna from your collection. Produce:
1. S11 plot across its operating range
2. SWR plot with bandwidth marked
3. Annotated Smith chart trace
4. Table: resonant frequency, bandwidth, impedance at resonance
5. Comparison to manufacturer spec sheet
6. Your assessment: is this antenna performing as expected?

Publish as an RF-Hub equipment log entry.

---

**Previous:** [Lesson 9 — Gain, Directivity, Efficiency](lesson-09-gain-directivity-efficiency.md)  
**Next:** [Unit 3, Lesson 11 — Dipole Deep Dive](../unit-3-design-and-construction/lesson-11-dipole-deep-dive.md)
