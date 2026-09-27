# Sideband: S-Parameters — The Four Numbers That Describe Any RF Device

**Tags:** `[F]` `[I]` `[FL]`
**Cross-refs:** Blog: Understanding S11, Sideband: vswr-bridge-measurement, Sideband: s21-transmission-measurement
**Series:** Sideband — Topic Snippets for RF-Hub

---

Any two-port RF device — a filter, an amplifier, an attenuator, a length of cable — can be completely described at a given frequency by four numbers. These are the **S-parameters** (scattering parameters): S11, S21, S12, and S22. Together they form the **S-parameter matrix**, and they capture everything that matters about how a device handles RF signals at its ports.

<!-- VISUAL: s-parameter-signal-flow
Interactive two-port network diagram showing the four wave variables and how each S-parameter is defined.

Layout:
  - Central dark card (approx 220px × 100px) labelled "DUT" in monospace, representing the two-port network.
  - Port 1 on the left, Port 2 on the right.
  - Four animated signal arrows:
    1. a1 — incident wave, Port 1 → DUT (solid amber arrow pointing right, entering left side)
    2. b1 — reflected wave, DUT → Port 1 (dashed amber arrow pointing left, leaving left side)
    3. a2 — incident wave, Port 2 → DUT (solid blue arrow pointing left, entering right side)
    4. b2 — transmitted wave, DUT → Port 2 (dashed blue arrow pointing right, leaving right side)
  - Labels for all four arrows: a1, b1, a2, b2 in IBM Plex Mono.

S-parameter overlay:
  - Four clickable highlight buttons arranged in a 2×2 grid below the diagram: S11 | S21 | S12 | S22.
  - Clicking each button:
    - S11: highlights b1 (output) and a1 (input) arrows in amber. Label appears: "S11 = b1/a1 when a2=0 — input reflection"
    - S21: highlights b2 (output) and a1 (input). Label: "S21 = b2/a1 when a2=0 — forward transmission"
    - S12: highlights b1 (output) and a2 (input). Label: "S12 = b1/a2 when a1=0 — reverse transmission"
    - S22: highlights b2 (output) and a2 (input). Label: "S22 = b2/a2 when a1=0 — output reflection"
  - Non-highlighted arrows fade to 20% opacity.
  - A short description panel below the diagram updates with each selection, showing:
    - Parameter name (e.g. "S11 — Input Reflection Coefficient")
    - What it measures
    - Typical dB value for a well-matched device

Reciprocity indicator (below controls):
  - Toggle: "Show reciprocity" — when active, overlays S12=S21 and S22=S11 equality markers on the diagram with a green check icon.
  - Small explainer text: "Passive devices: S12 = S21 and S22 = S11 (reciprocal)"

Styling:
  - Dark background, RF-Hub theme. IBM Plex Mono for labels and values.
  - Amber (#F59E0B) for Port 1 signals, blue (#60A5FA) for Port 2.
  - DUT box uses var(--bg-card) with a 1px var(--border) border.
  - Arrow animations loop slowly (3s period) to suggest continuous signal flow.
  - Responsive: on mobile, diagram scales to full width.
-->

---

## The Two-Port Model

Imagine a device with two RF connectors — an input and an output. Label them **Port 1** and **Port 2**. At any instant, there are four waves present:

- **a1** — signal travelling *into* Port 1 (incident)
- **b1** — signal travelling *out of* Port 1 (reflected)
- **a2** — signal travelling *into* Port 2 (incident)
- **b2** — signal travelling *out of* Port 2 (transmitted)

S-parameters are ratios of these waves. Each one answers the question: *when I send a signal in at one port, what comes out at the other?*

---

## The Four Parameters

**S11 — Input Reflection Coefficient**

`S11 = b1 / a1` (with Port 2 terminated in 50 Ω, so a2 = 0)

S11 measures how much of the signal entering Port 1 is reflected back out of Port 1. A perfect match returns nothing — S11 would be 0 (−∞ dB). A short circuit returns everything — S11 = 1 (0 dB). A well-matched device typically shows S11 below −15 dB. S11 expressed as a magnitude on a 0–1 scale is the **reflection coefficient** (Γ); expressed in dB it is **Return Loss**.

**S21 — Forward Transmission (Gain or Loss)**

`S21 = b2 / a1` (with Port 2 terminated, a2 = 0)

S21 measures how much signal passes from Port 1 through to Port 2. For a passive device, S21 is ≤ 0 dB (it can only lose or pass signal, never create it). A −3 dB attenuator has S21 = −3 dB. An amplifier with 20 dB of gain has S21 = +20 dB. S21 is the parameter most directly relevant to *how much signal gets through*.

**S12 — Reverse Transmission (Isolation)**

`S12 = b1 / a2` (with Port 1 terminated, a1 = 0)

S12 measures signal travelling *backwards* — from Port 2 to Port 1. For an amplifier, S12 reveals how much output leaks back to the input; good amplifiers have S12 well below −20 dB. For a passive attenuator, S12 = S21 — it passes equally in both directions.

**S22 — Output Reflection Coefficient**

`S22 = b2 / a2` (with Port 1 terminated, a1 = 0)

S22 is the same concept as S11, but measured looking *into Port 2*. It describes how well the output port is matched. For a well-designed filter or amplifier, both S11 and S22 should be low (good match at both ports).

---

## Reciprocity — When S12 = S21

A **reciprocal** device is one where the physics of propagation is symmetrical — the device behaves identically regardless of which way you pass the signal through it. Passive devices (attenuators, filters, cables, splitters) are always reciprocal, which means:

> S12 = S21 and S22 = S11 (for passive, reciprocal devices)

This halves the measurement burden: to fully characterise a passive filter, you need S11 and S21 only — S22 and S12 follow automatically.

Active devices (amplifiers, mixers) are generally **non-reciprocal**. An amplifier passes signal forward (S21 = +20 dB) but blocks it in reverse (S12 = −30 dB). All four parameters must be measured independently.

---

## When Do You Need All Four?

| Measurement goal | Parameters needed |
|-----------------|-------------------|
| Check antenna match (reflection only) | S11 |
| Measure filter passband and loss | S11, S21 |
| Fully characterise a passive device | S11, S21 (S22=S11, S12=S21) |
| Characterise an amplifier | All four: S11, S21, S12, S22 |
| Verify amplifier stability | All four (especially S12) |

For most practical bench work — measuring antennas, filters, cables, and attenuators — S11 and S21 tell you everything you need. The full four-parameter measurement is reserved for active devices and precision characterisation.

---

## The Quick Reference

| Parameter | Ratio | What it measures | Typical goal |
|-----------|-------|-----------------|--------------|
| S11 | b1 / a1 | Input reflection — how much bounces back from Port 1 | < −15 dB (matched) |
| S21 | b2 / a1 | Forward transmission — signal through from Port 1 to Port 2 | Near 0 dB (through), negative (filter/attn) |
| S12 | b1 / a2 | Reverse transmission — signal through from Port 2 to Port 1 | = S21 (passive); < −20 dB (amplifier) |
| S22 | b2 / a2 | Output reflection — how much bounces back from Port 2 | < −15 dB (matched) |

---

*Sideband snippets are short-form RF-Hub reference topics. They appear in lessons, blog posts, and the knowledge base.*
