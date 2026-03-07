# Lesson 8: The Smith Chart — Your RF Roadmap

**Unit:** 2 — Characteristics & Measurement  
**Prerequisites:** Lessons 6–7  
**Equipment needed:** None (pairs with VNA work in Lesson 10)  
**Estimated time:** 35 minutes

---

## Learning Objectives

- Read impedance (R + jX) from a Smith chart
- Identify key points: centre (50 Ω match), open circuit, short circuit
- Determine if impedance is inductive or capacitive from chart position
- Trace a frequency sweep on a Smith chart and interpret the shape

---

## Sections to Write

### Why the Smith Chart Exists
- Converts complex impedance maths into visual geometry
- Invented by Phillip Smith in 1939 — still the most-used tool in RF
- Every VNA has a Smith chart display mode

### The Chart Layout
- Constant resistance circles (horizontal axis = purely resistive)
- Constant reactance arcs (upper half = inductive, lower half = capacitive)
- Centre = Z₀ (perfect 50 Ω match)
- Right edge = open circuit (infinite impedance)
- Left edge = short circuit (zero impedance)

### Reading Impedance
- Any point on the chart represents a unique R + jX value
- Normalised impedance: divide by Z₀ to use the chart
- De-normalise: multiply back by Z₀ to get real Ohms

### SWR Circles on the Smith Chart
- Constant SWR traces a circle centred on the chart centre
- Larger circle = higher SWR = worse match
- A point sitting right at centre = SWR 1:1

### Frequency Sweeps
- A VNA traces impedance vs frequency as a curve on the Smith chart
- A small tight loop near centre = well-matched across frequency
- A large arc = impedance varies significantly = narrowband antenna

### Interactive Elements
- Interactive Smith chart: click anywhere to read R + jX, see SWR circle
- Guided tutorial: step-by-step plotting exercise

---

## Knowledge Check
<!-- To be written -->

## Summary
<!-- To be written -->

---

**Previous:** [Lesson 7 — SWR and Return Loss](lesson-07-swr-and-return-loss.md)  
**Next:** [Lesson 9 — Gain, Directivity, and Efficiency](lesson-09-gain-directivity-efficiency.md)
