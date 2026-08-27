# Sideband: DUT Characterisation — A Complete Measurement Walkthrough

**Tags:** `[F]` `[I]` `[FL]`
**RSGB Refs:** 2E3, 2E4, 2E5, 2E6
**Cross-refs:** Sideband: s-parameter-matrix, Sideband: vswr-bridge-measurement, Sideband: s21-transmission-measurement
**Series:** Sideband — Topic Snippets for RF-Hub

---

Characterising a Device Under Test (DUT) means measuring enough S-parameters to know how it behaves at RF frequencies — what it reflects, what it passes, and how those properties vary across a frequency range. This walkthrough combines S11 (reflection) and S21 (transmission) measurements into a systematic five-step procedure using the RSA5065N with a VSWR bridge and tracking generator.

<!-- VISUAL: dut-signature-gallery
Interactive gallery of S11 and S21 trace signatures for common RF device types.

Layout:
  - 2×2 grid of device cards (stacks to 1 column on mobile).
  - Each card shows: device name, icon, and a small preview of its S11 and S21 traces on a miniature chart.
  - Clicking a card expands it to full width and shows detailed description.

Device cards:

Card 1 — "Antenna"
  - S11: deep resonance dip at design frequency (e.g. −25 dB at 145 MHz), rising sharply on both sides. Amber trace.
  - S21: not applicable / not shown (single port device). Label: "S21: N/A — single-port device"
  - Description: "An antenna presents a frequency-selective impedance. S11 shows the resonance: the deeper and narrower the dip, the better matched and more selective the antenna. The resonant frequency is read directly at the S11 minimum."

Card 2 — "Bandpass Filter"
  - S11: high (near 0 dB) in stopband, dipping in passband (good match within band).
  - S21: passband with sharp skirts — low loss in band, high attenuation out of band. Blue trace.
  - Description: "A filter shows complementary S11 and S21: where S21 is high (passband), S11 is low (good match). Where S21 is low (stopband), S11 is high (signal rejected at input). Insertion loss, bandwidth, and skirt steepness are all readable."

Card 3 — "Attenuator"
  - S11: flat, low across full frequency range (e.g. −25 dB — well matched at all frequencies).
  - S21: flat, fixed below 0 dB (e.g. −10 dB — consistent loss across full range). Amber trace.
  - Description: "An attenuator is the reference device. Flat S11 (good match at both ports across all frequencies) and flat S21 (consistent, frequency-independent loss). Deviation from flatness reveals frequency-dependent behaviour."

Card 4 — "Coax Cable"
  - S11: low across the range (mostly well-matched), with small periodic ripples (connector reflections).
  - S21: gently declining slope — loss increases with frequency. Purple trace.
  - Description: "Cable shows rising insertion loss with frequency (skin effect and dielectric loss). The slope steepness identifies cable type and length. Ripples in S11 reveal impedance discontinuities — damaged connectors, kinks, or water ingress."

Interactive features:
  - Each card: click to expand with full description and larger trace view.
  - "Overlay" button: shows all S21 traces on one plot for direct comparison.
  - Marker tool on expanded view: drag a frequency marker to read S11 and S21 values at any point.
  - "Identify this DUT" quiz mode: shows a trace and asks user to select the device type (antenna / filter / attenuator / cable). Correct answer reveals the explanation.

Styling:
  - Dark background, RF-Hub theme. Cards use var(--bg-card) with var(--accent-h) top border.
  - Mini trace plots: 100px × 60px, no axis labels (signature shapes only).
  - IBM Plex Mono for all technical labels and values.
  - Responsive grid collapses gracefully on mobile.
-->

---

## The Five-Step Characterisation Workflow

### Step 1 — Define the Frequency Range

Set the analyser sweep to cover the DUT's intended operating band plus sufficient margin on each side to show the full roll-off behaviour:

- **Antennas:** centre on the design frequency, span 20–50% of centre frequency
- **Filters:** span at least one decade below and above the passband
- **Cables and attenuators:** sweep 1 MHz to the cable's rated frequency (or 3 GHz)

A too-narrow span misses off-resonance behaviour. A too-wide span compresses the passband detail. Set a resolution bandwidth (RBW) appropriate for the sweep speed you need.

---

### Step 2 — Calibrate S11 (VSWR Bridge + OSL)

Connect the VSWR bridge (TG OUT → bridge input; bridge detect → RF IN). Apply the **Open/Short/Load (OSL)** calibration standards at the test port — the connector where the DUT will attach:

1. **Open** — leave the test port unconnected. Store the open reference.
2. **Short** — connect the short-circuit standard. Store the short reference.
3. **Load** — connect the precision 50 Ω terminator. Store the load reference.

The analyser uses these three references to compute error correction. All subsequent S11 measurements are corrected back to the test port reference plane.

*Cross-reference: [VSWR Bridge Measurement](sideband-vswr-bridge-measurement.md) for bridge connection details and calibration rationale.*

---

### Step 3 — Measure S11

Connect the DUT to the calibrated test port. The analyser displays the corrected S11 trace — reflection coefficient vs frequency in dB.

**Record:**
- The frequency span and marker positions
- The minimum S11 value and the frequency at which it occurs (resonant frequency for antennas)
- The −10 dB bandwidth (the frequency range where S11 < −10 dB — equivalent to VSWR < 2:1)
- Any unexpected features: multiple resonances, rising floor, periodic ripple

**Label your trace:** include DUT identifier, date, cable type, and calibration reference plane in the trace title or notes file.

---

### Step 4 — Calibrate S21 (Through Normalisation)

Disconnect the VSWR bridge. Reconnect for a transmission measurement:

```
TG OUT → [cable A] → [cable B] → RF IN
```

With both cables connected end-to-end (no DUT in the path), trigger **Normalise**. The analyser stores this as the 0 dB reference — all subsequent S21 traces show loss or gain relative to this baseline, with cable and connector effects removed.

*Cross-reference: [S21 — Measuring What Gets Through](sideband-s21-transmission-measurement.md) for normalisation procedure and trace interpretation.*

---

### Step 5 — Measure S21

Insert the DUT between cable A and cable B:

```
TG OUT → [cable A] → DUT input → DUT output → [cable B] → RF IN
```

The analyser displays the S21 trace — transmission through the DUT relative to the normalised reference.

**Record:**
- Passband centre frequency and −3 dB bandwidth (for filters)
- In-band insertion loss (minimum S21 in passband)
- Out-of-band rejection (S21 in stopband, for filters)
- Frequency-dependent slope (for cables)
- Any unexpected gain (check for oscillation if you see positive S21 with a passive device)

---

### Optional Step 6 — Reciprocity Check (S22 / S12)

For **passive devices**, you can verify reciprocity by reversing the DUT and repeating the measurements:

- **S22** is measured with the DUT reversed in the VSWR bridge (what was the output connector is now at the test port)
- **S12** is measured with the DUT reversed in the transmission path

For a passive reciprocal device, S22 should match S11 and S12 should match S21. Significant differences indicate a non-reciprocal element (a ferrite isolator, for example) or a measurement error.

*Cross-reference: [S-Parameters — The Four Numbers](sideband-s-parameter-matrix.md) for the definition of S22 and S12.*

---

## Recording and Labelling Results

Good bench practice captures enough information to reproduce the measurement:

```
[DUT ID]_[parameter]_[date]_[span].[marker]
e.g. LPDA-145MHz_S11_2026-07-06_130-160MHz.M1_-23.4dB@145.1MHz
```

Place markers at key points before saving a screenshot:
- S11: marker at minimum (resonance frequency and depth)
- S21: marker at −3 dB points and centre frequency for filters; marker at 100 MHz and 1 GHz for cables

---

## DUT Signature Gallery

Different RF devices produce characteristic and recognisable S-parameter signatures:

**Antenna** — S11 shows a deep resonance dip at the design frequency; S21 is not applicable (single-port device). The resonance depth (< −15 dB is good) and bandwidth (−10 dB bandwidth indicates usable range) are the key metrics.

**Bandpass filter** — S11 and S21 are complementary: low S11 (good match) in the passband where S21 is high (low loss); high S11 (signal rejected) in the stopband where S21 is low (high attenuation). Read insertion loss, bandwidth, and skirt steepness directly.

**Attenuator** — flat, low S11 across the full frequency range (a well-matched attenuator presents 50 Ω at both ports at all frequencies); flat S21 at the rated attenuation value. Flatness is the key quality indicator.

**Cable** — low S11 (well-matched), with small ripples from imperfect connectors; S21 declining with frequency as a smooth slope determined by cable type and length. Water ingress or a damaged connector appears as an anomalous ripple.

---

## Screenshot Placeholders

*[RSA screenshot: Full characterisation of a 433 MHz bandpass filter — S11 and S21 overlaid, passband and stopband visible. To be added after T09/T10 data capture.]*

*[RSA screenshot: Antenna S11 measurement — 145 MHz dipole, resonance dip visible. To be added after T09 data capture.]*

*[RSA screenshot: Cable S21 — 5m RG58 from 1 MHz to 1 GHz, sloped insertion loss. To be added after T10 data capture.]*

---

## The Quick Reference

| Step | Measurement | Setup | Key records |
|------|------------|-------|-------------|
| 1 | Set frequency range | Analyser sweep settings | Span, RBW, reference level |
| 2 | Calibrate S11 | VSWR bridge + OSL standards at test port | Calibration date and port |
| 3 | Measure S11 | DUT at test port | Resonance freq, min S11, −10 dB BW |
| 4 | Calibrate S21 | TG → cables → RF IN (no DUT), normalise | Normalise reference |
| 5 | Measure S21 | DUT in transmission path | Insertion loss, BW, slope |
| 6* | Reciprocity check | Reverse DUT, re-measure S11 and S21 | S22 vs S11, S12 vs S21 |

*Step 6 optional for passive devices; required for active devices.

---

*Sideband snippets are short-form RF-Hub reference topics. They appear in lessons, blog posts, and the knowledge base.*
