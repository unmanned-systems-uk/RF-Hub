# Sideband: Resistance, Reactance, and Impedance — Three Flavours of Opposition

**Tags:** `[F]` `[I]` `[FL]`  
**RSGB Refs:** 2A1, 2C1, 2E3, 2E4, 2E5, 2E6  
**Cross-refs:** Unit 1 Lesson 2, Unit 3 Lessons 13–16  
**Series:** Sideband — Topic Snippets for RF-Hub

---

Every circuit opposes the flow of current. But not all opposition works the same way. Understanding the distinction between **resistance**, **reactance**, and **impedance** — and knowing when each one matters — is fundamental to RF electronics.

All three are measured in ohms (Ω). That's where the similarity ends.

<!-- VISUAL: energy-flow-comparison
Side-by-side animated comparison of R, X, and Z — three small circuit loops shown horizontally.

Loop 1 — "Resistance (R)":
  - Simple circuit: AC source → resistor → return.
  - Animated energy dots flow from source through resistor. On entering the resistor, dots change colour from RF-Hub amber to a fading red/grey and scatter outward as "heat" particles that drift away and disappear. Energy exits the circuit permanently.
  - Label below: "Energy destroyed — converted to heat"

Loop 2 — "Reactance (X)":
  - Simple circuit: AC source → capacitor (or toggle to inductor).
  - Animated energy dots flow into the component, collect/bunch up (storing), then reverse direction and flow back to the source on the return half-cycle. The dots change colour to blue (capacitor/electric field) or green (inductor/magnetic field) while stored, then return to amber when released.
  - The animation pulses: forward → store → reverse → release → forward, in sync with a subtle sine wave trace running along the bottom.
  - Label below: "Energy borrowed — stored and returned each cycle"

Loop 3 — "Impedance (Z)":
  - Circuit: AC source → resistor in series with capacitor (or inductor) → return.
  - Energy dots split behaviour: some scatter as heat at the resistor (like Loop 1), while the remainder oscillate back and forth through the reactive component (like Loop 2).
  - Label below: "Energy partly destroyed, partly borrowed"

Styling:
  - Dark background (RF-Hub theme), IBM Plex Mono for labels.
  - Each loop approximately 200px wide, stacked horizontally on desktop, vertically on mobile.
  - Smooth 60fps CSS/JS animation, looping continuously.
  - A pause/play button bottom-right of the whole visual.
-->

---

## Resistance (R) — The Energy Destroyer

Resistance is opposition that **converts electrical energy into heat**. When current flows through a resistor, energy leaves the circuit permanently — it's dissipated. A 100 Ω resistor behaves the same whether you feed it DC or AC at any frequency. Resistance doesn't care about frequency.

This is the opposition you meet first. Ohm's law — **V = IR** — describes it completely. A resistor carrying 1 A with 10 V across it dissipates 10 W as heat. That energy is gone.

**Key property:** Resistance is purely real. It has no frequency dependence. Current and voltage are always in phase.

---

## Reactance (X) — The Energy Borrower

Reactance is opposition that **stores energy temporarily and returns it** to the circuit. No energy is destroyed — it's borrowed and given back each cycle. This only occurs in AC circuits, and it comes in two forms:

**Capacitive reactance (X<sub>C</sub>)** — A capacitor stores energy in its electric field. It opposes changes in voltage. As frequency increases, the capacitor charges and discharges more rapidly, offering *less* opposition:

> X<sub>C</sub> = 1 / (2πfC)

A capacitor is a high impedance at low frequencies and a low impedance at high frequencies. At DC (f = 0), reactance is infinite — the capacitor blocks completely.

**Inductive reactance (X<sub>L</sub>)** — An inductor stores energy in its magnetic field. It opposes changes in current. As frequency increases, the rate of current change increases, so the inductor offers *more* opposition:

> X<sub>L</sub> = 2πfL

An inductor is a low impedance at low frequencies and a high impedance at high frequencies. At DC (f = 0), reactance is zero — the inductor is just a piece of wire.

**Key property:** Reactance is frequency-dependent. Voltage and current are 90° out of phase (voltage leads current in an inductor; current leads voltage in a capacitor). No power is dissipated — energy sloshes back and forth.

<!-- VISUAL: reactance-vs-frequency
Interactive chart showing X_C and X_L plotted against frequency, with a live component-value control.

Layout:
  - X-axis: Frequency (logarithmic scale, 1 kHz → 1 GHz), labelled with band markers (LF, HF, VHF, UHF) as subtle vertical reference lines.
  - Y-axis: Reactance in ohms (Ω), logarithmic scale, 0.1 Ω → 100 kΩ.
  - Two curves:
    1. X_L = 2πfL — rising line, coloured green, labelled "Inductive (X_L)".
    2. X_C = 1/(2πfC) — falling line, coloured blue, labelled "Capacitive (X_C)".
  - The intersection point is highlighted with a pulsing dot and labelled "Resonance — X_L = X_C" with the resonant frequency shown.

Controls (below the chart):
  - Slider: "Capacitance" — range 1 pF → 1 µF (logarithmic), default 100 pF. Value shown beside slider.
  - Slider: "Inductance" — range 1 nH → 10 mH (logarithmic), default 1 µH. Value shown beside slider.
  - As either slider moves, both curves update in real-time and the resonance point shifts along the frequency axis.
  - Readout below sliders: "Resonant frequency: XX.X MHz" updating live.

Hover behaviour:
  - Hovering anywhere on the chart shows a vertical crosshair with both reactance values at that frequency displayed in a tooltip: "At 14.2 MHz: X_L = 89.2 Ω, X_C = 112.1 Ω".

Styling:
  - Dark background, RF-Hub theme. Grid lines subtle (opacity 0.15).
  - IBM Plex Mono for axis labels and readouts. IBM Plex Sans for curve labels.
  - Curves 2px stroke, smooth. Amber accent for the resonance dot.
  - Responsive: on mobile, sliders stack below chart.
-->

---

## Impedance (Z) — The Complete Picture

In any real AC circuit, you rarely have pure resistance or pure reactance alone. A coil of wire has both inductance *and* resistance. A capacitor connected by leads has tiny amounts of inductance. A practical circuit combines both energy-destroying and energy-storing opposition.

**Impedance is the total opposition to current flow in an AC circuit.** It combines resistance and reactance into a single quantity:

> Z = R + jX

The **j** (engineers use *j* because *i* is already taken by current) indicates that resistance and reactance act at right angles to each other — they can't simply be added. They combine as a right-angle triangle:

> |Z| = √(R² + X²)

where |Z| is the magnitude of impedance — the number your meter reads.

The **phase angle** (φ) between voltage and current depends on the ratio of reactance to resistance:

> φ = arctan(X / R)

If X = 0, the circuit is purely resistive and φ = 0° — voltage and current are in step. If R = 0, the circuit is purely reactive and φ = 90° — they're completely out of step.

<!-- VISUAL: impedance-triangle
Interactive impedance triangle that responds to user-controlled R and X values.

Display:
  - A right-angle triangle drawn on a dark canvas:
    - Horizontal leg = R (resistance), coloured amber, labelled "R = XX Ω"
    - Vertical leg = X (reactance), coloured blue (if X_C dominant) or green (if X_L dominant), labelled "X = XX Ω"
    - Hypotenuse = |Z| (impedance magnitude), coloured white, labelled "|Z| = XX Ω"
    - Phase angle φ shown as an arc at the R/Z corner with its value displayed: "φ = XX.X°"
  - The triangle redraws smoothly as the user changes values.

Controls:
  - Slider: "R" — range 0 → 200 Ω, default 50 Ω.
  - Slider: "X" — range −200 → +200 Ω (negative = capacitive, positive = inductive), default 0 Ω. Slider centre is zero. Left half labelled "Capacitive (−X_C)", right half labelled "Inductive (+X_L)".

Live readouts (below triangle, updating in real-time):
  - "Z = R + jX = 50 + j0 Ω"
  - "|Z| = √(R² + X²) = 50.0 Ω"
  - "φ = arctan(X/R) = 0.0°"
  - Each formula shows the symbolic form on the left and the computed result on the right.

Behaviour at extremes:
  - When X = 0: triangle collapses to a horizontal line, label reads "Purely resistive — φ = 0°".
  - When R = 0: triangle collapses to a vertical line, label reads "Purely reactive — φ = 90°".
  - When R = X: triangle is a 45° right triangle, label reads "Equal R and X — φ = 45°".

Presets (clickable buttons below the sliders):
  - "50 Ω pure" → R=50, X=0
  - "Typical antenna" → R=36, X=−22
  - "Resonant antenna" → R=50, X=0
  - "Mismatched load" → R=25, X=+40

Styling:
  - Dark background, RF-Hub theme.
  - Triangle scales to fill available canvas width (max 500px), maintaining aspect ratio.
  - IBM Plex Mono for numerical readouts, IBM Plex Sans for labels.
  - Smooth transitions (~0.3s ease) when sliders move or presets are clicked.
  - Angle arc drawn as a proper SVG arc, radius ~30px.
-->

---

## Why This Matters in RF

At audio frequencies and below, reactance is often small enough to ignore — circuits behave roughly as if only resistance matters. But at radio frequencies, reactance dominates. A few centimetres of wire becomes a significant inductor. A connector has measurable capacitance. Impedance — the full R + jX picture — becomes essential.

This is why RF engineers think in impedance, not just resistance. When you see a specification like "50 Ω" for a coaxial cable or antenna system, that's an impedance — and at the design frequency, the goal is to make the reactive part as close to zero as possible, leaving only the 50 Ω of resistance doing useful work.

Every time you connect a NanoVNA to measure an antenna, you're measuring impedance — resistance and reactance together — and the job of matching is to cancel the reactance while presenting the right resistance to your transmitter.

---

## The Quick Reference

| Property | Symbol | Energy | Frequency dependent? | Phase angle |
|----------|--------|--------|---------------------|-------------|
| Resistance | R | Dissipated as heat | No | 0° |
| Capacitive reactance | X<sub>C</sub> | Stored in electric field | Yes — decreases with f | −90° |
| Inductive reactance | X<sub>L</sub> | Stored in magnetic field | Yes — increases with f | +90° |
| Impedance | Z | Both (combined) | Yes (via X component) | 0° to ±90° |

---

*Sideband snippets are short-form RF-Hub reference topics. They appear in lessons, blog posts, and the knowledge base.*
