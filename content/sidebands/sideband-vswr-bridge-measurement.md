# Sideband: The VSWR Bridge — How Your Analyser Measures Reflections

**Tags:** `[F]` `[I]` `[FL]`
**RSGB Refs:** 2E3, 2E4, 2E5, 2E6
**Cross-refs:** Blog: Understanding S11, Sideband: s-parameter-matrix, Sideband: dut-characterisation-workflow
**Series:** Sideband — Topic Snippets for RF-Hub

---

When a spectrum analyser with a tracking generator measures S11 — the reflection coefficient of an antenna, filter, or any RF device — it needs a way to separate the reflected signal from the incident signal. The component that does this is the **VSWR bridge** (also called a **reflection bridge** or **return loss bridge**). Understanding how the bridge works helps you calibrate correctly and interpret what you're actually measuring.

<!-- VISUAL: vswr-bridge-principle
Interactive schematic diagram showing the VSWR bridge circuit and signal flow.

Layout — two panels side by side (stacked on mobile):

Panel 1 — Bridge Schematic:
  - Wheatstone bridge circuit drawn on a dark background:
    - Top-left node: "TG OUT" (source, amber label)
    - Top-right node: connected through a 50Ω reference resistor (labelled "R_ref = 50 Ω") to the bottom-right node
    - Bottom-left node: "RF IN / Detector" (blue label)
    - Bottom-right node: "Test Port" (white label, DUT connects here)
    - Two bridge arms shown:
      Arm 1: Top-left → bottom-left via internal 50Ω resistor (source arm)
      Arm 2: Top-left → top-right → bottom-right = reference arm
      Arm 3: Bottom-left → bottom-right = measurement arm
  - Small animated signal dots flow from TG OUT around the bridge.
  - At balance (50Ω load at test port): animated dots cancel at RF IN node (null), label "Balanced — null output".
  - At mismatch: animated dots no longer cancel, label "Unbalanced — reflected signal at detector".

Panel 2 — Connection Diagram (bench setup):
  - Simple block diagram:
    - RSA5065N box with TG OUT port → cable → "VSWR Bridge" component → Test Port → DUT symbol (variable load)
    - VSWR Bridge "Detect" port → cable → RSA5065N RF IN
  - Arrows show signal direction. Labels in IBM Plex Mono.
  - "OSL Standards" shown as three small icons (open socket, short plug, 50Ω terminator) near the Test Port.

Toggle control (below diagrams):
  - Buttons: "50Ω match" | "Open (∞Ω)" | "Short (0Ω)" | "Mismatch"
  - Clicking each updates the load symbol at Test Port and the animation to show:
    - 50Ω match: null at detector (deep null), label "S11 → −∞ dB (perfect)"
    - Open: full reflection, no phase change, label "S11 → 0 dB, 0° phase"
    - Short: full reflection, 180° phase, label "S11 → 0 dB, 180° phase"
    - Mismatch: partial reflection, label "S11 → −10 dB (typical antenna)"

Styling:
  - Dark background, RF-Hub theme.
  - Resistor symbols drawn as standard rectangular IEEE style.
  - IBM Plex Mono for all labels and values.
  - Animated signal dots (amber) flow at 2s period, smooth, looping.
  - Bridge balanced state shown with green dot at RF IN; unbalanced with amber dot.
-->

---

## The Wheatstone Bridge Principle

At its heart, the VSWR bridge is a **Wheatstone bridge** — a circuit with four arms arranged in a diamond. When all arms are balanced (equal impedances), no signal appears at the detector node. When one arm is unbalanced (a mismatch on the test port), a signal appears — and that signal is proportional to the reflected wave.

In the RF bridge:
- One arm contains a precision **50 Ω reference resistor** (the standard impedance)
- The test port connects where the unknown load goes
- The detector monitors the bridge balance point
- The tracking generator drives the circuit

At **perfect balance** (50 Ω load at the test port), the bridge is null — the detector sees nothing. Any deviation from 50 Ω creates an imbalance, and the detector output represents the reflected signal.

---

## Physical Connections on the RSA5065N

The RSA5065N does not have a built-in directional coupler for reflection measurements — it uses an **external VSWR bridge accessory**. The connection procedure is:

1. **TG OUT** → bridge input port (the tracking generator provides the swept stimulus)
2. **Bridge test port** → DUT (the device under test connects here)
3. **Bridge detect output** → **RF IN** (the reflected signal returns to the analyser input)

The tracking generator sweeps across the selected frequency range. For each frequency step, the bridge samples the reflected signal and the analyser displays it as a level relative to the incident signal — giving you the S11 trace in dB.

---

## Calibration — OSL at the Test Port

Before any S11 measurement, the bridge must be **calibrated at the test port reference plane** — the point where the DUT will connect. This removes the effect of the bridge's own imperfections, cable losses, and connector mismatches.

The standard calibration procedure applies three known standards at the test port:

**Open** — the test port is left unconnected (no termination). All signal reflects with 0° phase shift. This sets the 0 dB reference.

**Short** — a short-circuit terminator is applied. All signal reflects with 180° phase shift. This characterises the bridge's phase response.

**Load** — a precision 50 Ω terminator is applied. Ideally nothing reflects (null). This sets the reference impedance.

These three measurements — Open, Short, Load (**OSL**) — give the analyser enough information to mathematically remove errors in the measurement path. The result is a calibrated S11 measurement referenced directly to the test port connector, regardless of what cable or adapter is between the bridge and the port.

> **Calibration must be repeated whenever you change the test port cable, connector type, or measurement frequency range.**

---

## Bridge vs Directional Coupler

Professional Vector Network Analysers (VNAs) use **directional couplers** rather than bridge circuits. Both serve the same purpose — separating incident and reflected waves — but the mechanisms differ.

| Feature | Resistive Bridge | Directional Coupler |
|---------|-----------------|---------------------|
| Principle | Wheatstone null balance | Electromagnetic coupling |
| Frequency range | DC to several GHz | Typically > 1 MHz |
| Insertion loss | Higher (resistive loss) | Lower |
| Source match | Limited | Excellent |
| Cost | Low | Higher |
| Typical use | Low-cost scalar analysers, RSA5065N accessories | VNAs, dedicated S11 ports |

The bridge approach works well for practical bench measurements of antennas, filters, and cables. Its main limitation is that it measures **scalar** S11 (magnitude only) unless the analyser hardware supports phase measurement — which most tracking-generator setups do not.

---

## The Quick Reference

| Step | Action | Purpose |
|------|--------|---------|
| 1 | Connect: TG OUT → bridge input | Provides the swept RF stimulus |
| 2 | Connect: bridge detect → RF IN | Returns reflected signal to analyser |
| 3 | Calibrate: apply Open at test port | Sets 0 dB reference, captures open response |
| 4 | Calibrate: apply Short at test port | Captures phase/short response |
| 5 | Calibrate: apply 50 Ω Load at test port | Sets reference null |
| 6 | Connect DUT at test port | Now measuring S11 of the device |
| 7 | Recalibrate if cable/connector changes | Reference plane shifts with any change |

---

*Sideband snippets are short-form RF-Hub reference topics. They appear in lessons, blog posts, and the knowledge base.*
