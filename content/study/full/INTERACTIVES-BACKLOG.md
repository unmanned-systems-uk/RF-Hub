# Full-Licence Interactives — Priority Split

**Split confirmed by PO Anthony 2026-09-12:**
Phase 1 = build alongside content sprints. Phase 2 = pending backlog for later add-on.

---

## Phase 1 — HIGH-VALUE (10, build with sprints)

Each Phase 1 widget spawns an `[Interactives]` CCPM task in its sprint. Tests as part of sprint testing pass.

| # | Widget | Sprint | Purpose |
|---|--------|--------|---------|
| 1 | **EMF compliance-distance calculator** | S19 (Ch 3 Safety) | Ofcom compliance — every operator must do this |
| 2 | **Sampling / aliasing visualiser** | S22 (Ch 6 Signals) | Nyquist theorem — impossible from text alone |
| 3 | **Reciprocal mixing visualiser** | S23 (Ch 9 Receiver) | New-at-Full concept; LO phase noise into passband |
| 4 | **Standing-wave animator** | S24 (Ch 11 Feeders) | Fwd+refl superposition; reusable in EMC + Measurements |
| 5 | **ATU matcher (L/T/Pi solver)** | S24 (Ch 11 Feeders) | Every Full holder uses this practically |
| 6 | **MUF/LUF diurnal predictor** | S25 (Ch 12 Propagation) | Time + sunspot slider = band-planning tool |
| 7 | **Field-strength calculator** | S26 (Ch 13 EMC) | P/gain/dist → V/m for EMC assessments |
| 8 | **LC filter designer** | S26 (Ch 13 EMC) | Cut-off + Z → Pi/T/L components |
| 9 | **VSWR calculator** | S27 (Ch 14 Measurements) | Fwd/Ref → SWR + return loss + mismatch loss |
| 10 | **Oscilloscope simulator** | S27 (Ch 14 Measurements) | Timebase + V/div sliders on various signals |

---

## Phase 2 — Pending backlog (45, later add-on)

Build after Phase 1 sprints complete and Full curriculum is live. Priority order within each sprint slot below (rough — reorder as needed).

### Chapter 3 Safety (S19 add-ons)
- Mobile-install safety zone checker
- Earthing scheme visualiser (RF/safety/lightning bonding)
- Antenna keep-out (RF exposure) visualiser

### Chapter 4 Basic Circuits (S20 add-ons — theory-heavy chapter)
- RC time-constant explorer (τ=RC, V_c/I curves)
- Reactance calculator (X_L, X_C vs f, cursor) — extends existing `reactance-vs-frequency.html`
- Series/parallel LC resonance visualiser
- Phasor animator (R+L or R+C series)
- Q-factor / bandwidth visualiser
- Transformer impedance matching calc
- Decibel calculator
- Crystal equivalent-circuit resonance plotter

### Chapter 5 Semiconductors (S21 add-ons)
- BJT load-line explorer + Class A/AB/B/C classifier
- BJT config comparator (CE/CB/CC)
- Diode I-V explorer (Si/Ge/Schottky/zener)
- Rectifier + smoothing simulator (HW/FW, cap/load sliders)
- Amp class conduction-angle animator (also serves Ch 7)
- Op-amp gain calculator
- Linear vs SMPS efficiency compare
- Varactor-tuned LC (bias → C → f_r)

### Chapter 6 Signals (S22 add-ons)
- Fourier square-wave builder (add odd harmonics)
- Time-domain vs freq-domain toggle
- Binary-decimal converter

### Chapter 7 Transmitter (S22 add-ons)
- SSB block-diagram walker (waveform per block)
- Mixer product visualiser (f1, f2 → spectrum, also Ch 9)
- PLL synthesiser calc (N → freq)
- PEP vs average power calc
- Crystal equiv-circuit Z sweep

### Chapter 8 TX Interference (S23 add-ons)
- Two-tone IMD calculator
- Morse key-click bandwidth visualiser (rise-time slider)
- FM deviation vs channel-spacing widget
- Oscillator drift simulator (temp → ppm)
- Ripple-modulation spectrum viewer

### Chapter 9 Receiver (S23 add-ons)
- Superhet freq-plan calc (RF+IF → LO+image+spurs)
- Image-frequency visualiser (IF slider)
- AGC time-constant animator
- IP3 / dynamic-range calculator
- Filter shape-factor comparator

### Chapter 10 SDR (S24 add-ons)
- SDR sample-rate vs bandwidth calc
- ADC bit-depth vs dynamic-range (~6n dB) widget
- Analogue superhet vs SDR block side-by-side
- Live-embed SDR console (WebSDR/KiwiSDR)
- FFT/waterfall walkthrough

### Chapter 11 Feeders & Antennas (S24 add-ons)
- Yagi element-spacing / gain estimator
- Loading-coil efficiency calc (short vertical)
- Coax loss calculator
- Radiation pattern viewer (GP vs 5/8) — extends `radiation-3d-v5.html`

### Chapter 12 Propagation (S25 add-ons)
- PFD calculator (also Ch 13)
- Skip distance animator
- Sunspot cycle plotter (external solar flux feed)

### Chapter 13 EMC (S26 add-ons)
- CM/DM current visualiser (animated cable pair)
- Interference troubleshooting flowchart
- Coupling-mode identifier quiz

### Chapter 14 Measurements (S27 add-ons)
- RMS/peak/PEP converter
- SSB two-tone envelope generator
- Directional coupler animator (Fwd+Ref phasors)
- Dip meter LC-resonance calc
- Spectrum analyser mock display (RBW/span → carrier+harmonics)
- Shunt/multiplier resistor calculator

### Regulation-specific (Ch 1 licensing)
- Emission designator decoder (F3E → "FM telephony analogue")
- UK callsign parser (licence class + region)
- Band-plan visualiser (primary/secondary allocations, tooltips)

---

## Delivery notes

- **Phase 2 is not a sprint** — it's a backlog. Dispatched in small batches after the corresponding content sprint closes.
- Many Phase 2 widgets could share code with existing Intermediate widgets via "simple/advanced" mode toggle — Interactives agent decides case-by-case.
- Phase 2 batches don't block sprint closure; they're the "if capacity allows" tier.
- Track Phase 2 progress separately from Phase 1 sprint deliverables.

## When Phase 2 dispatch happens

- After each Phase 1 sprint closes with its HIGH-VALUE widget delivered, review the chapter's Phase 2 candidates and dispatch 1-3 as fill work
- No firm deadline — Anthony can request specific widgets ad-hoc via CCPM
- Consider a dedicated "Phase 2 catch-up sprint" (e.g. S28) once Full curriculum is live
