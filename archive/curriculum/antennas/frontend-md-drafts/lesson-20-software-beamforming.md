# Lesson 20: Software Beamforming — Steering in Code

**Unit:** 4 — Advanced Systems
**Prerequisites:** Lesson 19, basic Python familiarity helpful
**Equipment needed:** RTL-SDR or HackRF (optional — concepts work without hardware)
**Estimated time:** 40 minutes

---

## Learning Objectives

- Explain how digital beamforming works (complex weights applied to sampled signals)
- Calculate the steering vector for a given array geometry and target direction
- Understand delay-and-sum beamforming and its limitations
- Describe MVDR (Capon) beamforming and why it outperforms delay-and-sum
- Connect the concepts to real tools (GNU Radio, Python NumPy, RTL-SDR)

---

## Sections to Write

### What Software Beamforming Actually Does — Multiply, Phase, Sum
### Complex Weights — Amplitude and Phase as a Single Number
### Steering Vector — How Geometry Maps to Phase Differences
### Delay-and-Sum — The Simplest Beamformer, Step by Step
### Limitations of Delay-and-Sum — Sidelobes, No Null Steering
### MVDR Beamforming — Minimise Output Power Except in Target Direction
### MUSIC Algorithm — Finding Angles by Eigenvalue Decomposition
### GNU Radio and Python Workflow — From ADC Samples to Beam Output
### Practical Demo: Receive Two FM Stations, Steer a Null to Suppress One
### Capstone Exercise: Full Unit 4 Review — Arrays, Phasing, DF, Beamforming Together

---

**Previous:** [Lesson 19 — Practical Phased Array](lesson-19-practical-phased-array.md)
**Next:** Unit 4 Complete — Capstone Project
