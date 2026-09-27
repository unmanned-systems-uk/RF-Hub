# Sideband: S21 — Measuring What Gets Through

**Tags:** `[F]` `[I]` `[FL]`
**Cross-refs:** Sideband: s-parameter-matrix, Sideband: vswr-bridge-measurement, Sideband: dut-characterisation-workflow
**Series:** Sideband — Topic Snippets for RF-Hub

---

S21 is the S-parameter that answers: *how much signal makes it from one end of a device to the other?* It is measured using the **tracking generator** (TG) built into the RSA5065N — the TG sweeps a signal across the frequency range while the analyser simultaneously measures what arrives at its input. The ratio of received to transmitted is S21, plotted in decibels across the sweep.

<!-- VISUAL: s21-trace-explorer
Interactive chart showing characteristic S21 traces for common RF devices.

Layout:
  - Main plot area: frequency on the x-axis (logarithmic or linear, switchable), S21 in dB on the y-axis (0 dB at top, going negative downward to −80 dB).
  - Grid lines subtle (opacity 0.15), dark background.
  - A device selector on the left (or tabs along the top): 4 preset DUT types.

Device presets (each draws a characteristic trace in a distinct colour):
  1. "Through/Short Cable" — flat line at 0 dB across full frequency range. Colour: green. Label: "S21 = 0 dB — perfect through"
  2. "Attenuator (−10 dB)" — flat line at −10 dB. Colour: amber. Label: "S21 = −10 dB — flat loss"
  3. "Bandpass Filter" — passband shape: −50 dB at low frequencies, rising to −2 dB in passband (e.g. 433–435 MHz region), then falling back to −50 dB. Sharp skirts on both sides. Colour: blue. Label: passband centre and −3 dB bandwidth displayed dynamically.
  4. "Coax Cable (5m RG58)" — gently sloping line starting near 0 dB at low frequencies and declining with frequency (e.g. −0.5 dB at 10 MHz, −3.5 dB at 100 MHz, −11 dB at 1 GHz). Colour: purple. Label: "Increasing loss with frequency — cable characteristic"

Interactive features:
  - Clicking each preset draws that trace and shows a description panel below explaining what the shape means.
  - "Compare all" mode overlays all four traces simultaneously on the same plot, each in its distinct colour with a legend.
  - Hovering over any trace shows a tooltip: "At [freq]: S21 = [value] dB"
  - A draggable marker (inverted triangle, amber) can be placed on the active trace; its frequency and S21 value display prominently.
  - For the bandpass filter preset: two auto-placed markers at −3 dB points with a BW readout: "3 dB bandwidth: X kHz"

Normalisation reminder (top of panel):
  - Small info badge: "Traces shown after through-normalisation. 0 dB = reference through cable."

Styling:
  - Dark background, RF-Hub theme.
  - IBM Plex Mono for axis values, tooltips, and readouts.
  - Trace lines 2px stroke, smooth curves.
  - Responsive: on mobile, device selector moves below the chart.
-->

---

## The Tracking Generator Setup

An S21 measurement uses the tracking generator as a **swept signal source** that is locked to the analyser's sweep — for every frequency step, the TG outputs a signal at exactly that frequency while the analyser measures the signal arriving at RF IN. The connection is straightforward:

```
TG OUT → [cable] → DUT input → [cable] → RF IN
```

There is no bridge involved. The signal travels *through* the DUT, and the analyser compares what arrives at RF IN against what the TG sent. The result is a transmission trace — S21 — plotted in dB across the frequency range.

---

## Through Normalisation — Setting the 0 dB Reference

Before inserting the DUT, perform a **through normalisation**:

1. Connect TG OUT directly to RF IN using the same cable(s) that will be used with the DUT
2. Trigger "Normalise" (or store the reference trace)
3. The analyser subtracts this reference from all subsequent measurements

After normalisation, the baseline cable shows 0 dB — any loss introduced by inserting the DUT is shown as negative dB relative to that baseline. Any gain (from an amplifier) appears as positive dB.

> Through normalisation removes cable loss, connector insertion loss, and frequency-dependent roll-off from the TG output. Always normalise with the exact cables you will use for measurement.

---

## Reading S21 Traces

The S21 axis runs from 0 dB (no change from reference) downward to −60 dB or lower:

- **0 dB** — signal passes through unchanged (the device adds neither loss nor gain)
- **Negative dB** — the device attenuates the signal (loss)
- **Positive dB** — the device amplifies the signal (gain — only active devices)

---

## Characteristic S21 Shapes

Different devices produce recognisable trace shapes:

**Attenuator** — a flat horizontal line below 0 dB. A 10 dB attenuator shows a perfectly flat −10 dB trace across the full frequency range. Flatness confirms consistent, frequency-independent loss.

**Bandpass filter** — a passband shape with steep skirts. Inside the passband: low loss (near 0 dB). Outside: deep attenuation (−40 dB or more). The −3 dB bandwidth and centre frequency are directly readable from the trace. Ripple within the passband indicates filter quality.

**Cable (insertion loss)** — a gentle, monotonically declining slope. Cables lose more signal at higher frequencies due to skin effect and dielectric loss. A 5 m length of RG58 might show −0.5 dB at 10 MHz and −10 dB at 500 MHz. The slope is characteristic of the cable type.

**Through/short cable** — a flat trace sitting at exactly 0 dB after normalisation. Confirms the calibration is correct and the reference is valid.

**Amplifier** — a trace above 0 dB across the operating bandwidth, falling off outside the design range. The gain (S21 in positive dB), bandwidth, and gain flatness are all directly readable.

---

## Screenshot Placeholders

*[RSA screenshot: S21 measurement of a 10 dB attenuator — flat trace at −10 dB from 1 MHz to 3 GHz. To be added after T10 data capture.]*

*[RSA screenshot: S21 measurement of a 433 MHz bandpass filter — passband and skirts visible. To be added after T10 data capture.]*

---

## The Quick Reference

| S21 value | What it means | Typical device |
|-----------|--------------|----------------|
| 0 dB | No loss or gain — signal passes unchanged | Short cable, ideal through |
| −3 dB | Half the signal power passes through | 3 dB attenuator, filter −3 dB point |
| −10 dB | One tenth of signal power passes through | 10 dB attenuator |
| −20 dB | One hundredth of power passes through | Cable at high frequency |
| < −40 dB | Strong attenuation / stopband | Filter stopband, good isolation |
| +10 dB | Signal is amplified (10× power) | Amplifier with 10 dB gain |
| Flat vs frequency | Consistent, frequency-independent response | Attenuator, good amplifier |
| Sloping downward | Increasing loss with frequency | Cable, skin effect |
| Passband shape | Selective — passes only some frequencies | Filter |

---

*Sideband snippets are short-form RF-Hub reference topics. They appear in lessons, blog posts, and the knowledge base.*
