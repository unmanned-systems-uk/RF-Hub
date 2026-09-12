# Study Cross-Reference Map — Full Licence

**Purpose:** Maps each Full licence study chapter/subsection to existing RF-Hub content (Intermediate study pages, sidebands, antenna curriculum, interactives, blog) for use by Frontend when adding "Go deeper" callout boxes and iframe embeds.

**Generated:** 2026-09-12
**Audited Intermediate content:** `/content/study/intermediate/section-*.md` (9 sections)
**Audited RF-Hub sidebands:** `/frontend/pages/sidebands/` (12 pages)
**Audited antenna curriculum:** `/frontend/pages/antenna-curriculum/` (20 lessons)
**Audited interactives:** `/frontend/interactives/` (20+ pages)

---

## Conventions

- **go-deeper** — callout box with link text and URL; `target="_blank"` always
- **iframe-embed** — inline interactive widget (may also have go-deeper companion)
- **intermediate-xref** — link to the corresponding Intermediate study page where concept is taught at lower level
- **Anchor** — heading ID in the study page (LessonsBuilder convention: `ch-NA` / `ch-NB` etc., e.g. `ch-1a`, `ch-1b`)
- `(no existing content)` — nothing in current RF-Hub content covers this subsection adequately
- `(TBD)` — to be assessed when the chapter Markdown is written

---

## Ch 1: Licence Conditions

> **Study page (planned):** `/content/study/full/section-1-licence-conditions.md`
> **RSGB source:** Chapter 1 (pp 6–10)
> **Sprint:** S18

### §1 — Overview, Exam Scope, and Reference Documents (intro)
- (no existing content)
- **Anchor in study page:** `#ch-1a`

### §1C1 — Content of Messages
- (no existing content)
- **Anchor in study page:** `#ch-1b`
- **Intermediate cross-ref:** see Intermediate §1 (`/pages/study/intermediate/section-1-licensing.html`) for Foundation-level message rules

### §1D1 — Transmitter Standards and Undue Interference
- (no existing content specific to this)
- **Anchor in study page:** `#ch-1c`
- **Intermediate cross-ref:** Intermediate §3 (transmitter stability) and §6 (EMC/interference)

### §1E1 — Remote Control Operation
- (no existing content)
- **Anchor in study page:** `#ch-1d`

### §1F1 — CEPT T/R 61-01 and HAREC
- (no existing content)
- **Anchor in study page:** `#ch-1e`
- **Note:** CEPT T/R 61-01 applies to Full licence (HAREC) holders **only** — explicitly excluded from Foundation and Intermediate

### §1F2 — ITU Regions
- (no existing content)
- **Anchor in study page:** `#ch-1f`
- **Link to:** `/pages/sidebands/uk-spectrum-band-plan.html` — shows UK allocations in context of ITU regional plan
- **Type:** go-deeper

### §1G1 — EMF Compliance Assessment
- **Intermediate cross-ref:** Intermediate §4H (`section-4-feeders-antennas.html#ch-4h`) and Intermediate §1G (`section-1-licensing.html`)
- **Anchor in study page:** `#ch-1g`
- **Interactive candidate:** `full-emf-compliance-calc.html` — mirrors Ofcom spreadsheet inputs/outputs (HIGH VALUE, from interactives backlog #52)

### §1H1 — Schedule 1, Callsigns, and Operating Conditions
- (no existing content)
- **Anchor in study page:** `#ch-1h`
- **Interactive candidates:**
  - `full-callsign-parser.html` — enter callsign → licence class, RSL, region (backlog #50)
  - `full-emission-designator-decoder.html` — enter J3E/F3E/A1A → decode to plain English (backlog #49)

### §1I — Emission Designators and Bandwidth Terms (supplementary)
- (no existing content)
- **Anchor in study page:** `#ch-1i`

---

## Ch 2: Operating Techniques

> **Study page (planned):** `/content/study/full/section-2-operating-techniques.md`
> **RSGB source:** Chapter 2 (pp 11–12, thin — supplement from RSGB Operating Manual)
> **Sprint:** S19

### §2 — All subsections (TBD)
- **Intermediate cross-ref:** Intermediate §7 (`/pages/study/intermediate/section-7-operating-practices.html`) covers band plans, CQ procedure, DX, nets, contests, log-keeping
- **Link:** `/pages/study/intermediate/section-7-operating-practices.html`
- **Label:** "Intermediate §7: Operating Practices — band plans, CQ procedure, DX, contests, log-keeping"
- **Type:** intermediate-xref / go-deeper
- **Interactive candidates:** split-VFO simulator (backlog #not listed), contest exchange practice, phonetic drill
- **Anchor:** `#ch-2a`

---

## Ch 3: Amateur Radio Safety

> **Study page (planned):** `/content/study/full/section-3-safety.md`
> **RSGB source:** Chapter 3 (pp 13–18, safety-critical content — accuracy paramount)
> **Sprint:** S19

### §3 — All subsections (TBD)
- **Intermediate cross-ref:** Intermediate §8 (`/pages/study/intermediate/section-8-safety.html`) covers mains, RF burns, height, batteries, soldering, fire, lightning
- **Link:** `/pages/study/intermediate/section-8-safety.html`
- **Label:** "Intermediate §8: Safety — mains, RF exposure, height safety, battery handling, fire"
- **Type:** intermediate-xref / go-deeper
- **New at Full:** PME hazard, Ofcom EMF compliance (2021+), ICNIRP compliance distance, mobile install deep-dive, working at height risk assessment, lightning protection (GDTs, spark gaps)
- **Interactive candidates:**
  - `full-emf-compliance-calc.html` — Ofcom EMF compliance distance calculator (backlog #52, HIGH VALUE)
  - `full-mobile-safety-zone.html` — mobile install safety zone checker (backlog #53)
  - `full-earthing-scheme.html` — RF/safety/lightning bonding visualiser (backlog #54)

---

## Ch 4: Basic Circuits

> **Study page (planned):** `/content/study/full/section-4-basic-circuits.md`
> **RSGB source:** Chapter 4 (pp 19–30, largest theory chapter, ~37 subsections, ~25 figures)
> **Sprint:** S20

### §4 — All subsections (TBD)
- **Intermediate cross-ref:** Intermediate §2 (`/pages/study/intermediate/section-2-electronics.html`) covers Ohm's law, AC, reactance, resonance at Intermediate level
- **Link:** `/pages/study/intermediate/section-2-electronics.html`
- **Label:** "Intermediate §2: Electronics — prerequisite foundation for Full §4 Basic Circuits"
- **Type:** intermediate-xref / go-deeper
- **New at Full:** Kirchhoff's laws, maximum power transfer, RC τ time constant, phasor diagrams, series/parallel resonance voltage/current magnification, Q factor/bandwidth, circulating currents (Q·I_line), transformer impedance ratio (N²), Faraday screening, formal decibel derivation
- **Existing interactives to reuse:**
  - `/interactives/reactance-vs-frequency.html` — already built; embed at reactance section
  - `/interactives/impedance-triangle.html` — already built; embed at impedance section
  - `/interactives/lc-filter.html` — already built; embed at resonance section
- **New interactive candidates (backlog #1–8):**
  - `full-rc-time-constant.html` — τ=RC, live V_c(t) and I(t) (HIGH value)
  - `full-phasor-animator.html` — R+L or R+C series phasors (HIGH value)
  - `full-q-bw-visualiser.html` — Q factor → bandwidth and resonance sharpness slider
  - `full-transformer-match-calc.html` — Z_p, Z_s → turns ratio N
  - `full-decibel-calc.html` — dB to/from power and voltage ratios

---

## Ch 5: Semiconductors

> **Study page (planned):** `/content/study/full/section-5-semiconductors.md`
> **RSGB source:** Chapter 5 (pp 31–38, ~20 subsections, ~30 figures)
> **Sprint:** S21

### §5 — All subsections (TBD)
- **Intermediate cross-ref:** Intermediate §2 (`/pages/study/intermediate/section-2-electronics.html`) — diodes, BJTs, FETs, ICs at Intermediate level
- **Link:** `/pages/study/intermediate/section-2-electronics.html#2g--semiconductors--diodes-transistors-and-transformers`
- **Type:** intermediate-xref / go-deeper
- **New at Full:** BJT CE/CB/CC configs quantified (Z_in, Z_out, gain), load-line analysis, Class A/AB/B/C quiescent points, dual-gate FETs (mixer/AGC), op-amps (virtual earth, non-inverting/inverting gains), SMPS buck/boost
- **New interactive candidates (backlog #9–12):**
  - `full-bjt-loadline.html` — drag Q-point, classify class A/AB/B/C (HIGH value)
  - `full-bjt-config-compare.html` — CE/CB/CC side-by-side (Z_in, Z_out, gain, phase)
  - `full-diode-iv.html` — Si/Ge/Schottky/zener I-V curves
  - `full-rectifier-smooth.html` — HW/FW rectifier + smoothing cap slider

---

## Ch 6: Analogue and Digital Signals

> **Study page (planned):** `/content/study/full/section-6-signals.md`
> **RSGB source:** Chapter 6 (pp 39–40, short chapter, ~6 subsections)
> **Sprint:** S22

### §6 — All subsections (TBD)
- **Intermediate cross-ref:** Intermediate §2 (2F section — digital signals and sampling) at `/pages/study/intermediate/section-2-electronics.html`
- **New at Full:** Formal binary maths, Nyquist theorem with formula (f_s ≥ 2·f_max), aliasing shown, Fourier decomposition of square wave, quantisation error, sample-and-hold + reconstruction LPF
- **New interactive candidates (backlog #13–14):**
  - `full-sampling-aliasing.html` — sample rate slider, shows aliasing (HIGH value)
  - `full-fourier-builder.html` — add odd harmonics to build square wave

---

## Ch 7: The Transmitter

> **Study page (planned):** `/content/study/full/section-7-transmitter.md`
> **RSGB source:** Chapter 7 (pp 41–50, ~18 subsections, ~26 figures)
> **Sprint:** S22

### §7 — All subsections (TBD)
- **Intermediate cross-ref:** Intermediate §3 (`/pages/study/intermediate/section-3-transmitters.html`) — SSB, FM, oscillators, PLL, harmonics, digital modes at Intermediate level
- **Link:** `/pages/study/intermediate/section-3-transmitters.html`
- **Type:** intermediate-xref / go-deeper
- **New at Full:** Crystal oscillator equivalent circuit (Q>10k), DDS (accumulator + LUT + DAC + LPF), frequency mixer image filtering in detail, push-pull even-harmonic cancellation, PEP (Peak Envelope Power) definition and measurement, speech processing, SWR foldback protection
- **Existing interactives to reuse:**
  - `/interactives/signal-path-profile.html` — if applicable to TX block diagram
- **New interactive candidates (backlog #15–17):**
  - `full-mixer-products.html` — f1, f2 → output spectrum (sum/diff/harmonics)
  - `full-pll-calc.html` — N divider → synthesised frequency
  - `full-pep-avg-calc.html` — PEP vs average power for SSB/AM/FM

---

## Ch 8: Transmitter Interference

> **Study page (planned):** `/content/study/full/section-8-tx-interference.md`
> **RSGB source:** Chapter 8 (pp 51–56, ~16 subsections)
> **Sprint:** S23

### §8 — All subsections (TBD)
- **Intermediate cross-ref:** Intermediate §3 (3M spurious oscillations section, 3G harmonics) + Intermediate §6 (EMC) at `/pages/study/intermediate/section-3-transmitters.html` and `section-6-emc.html`
- **New at Full:** Quantified stability targets (ppm), ripple modulation model (±50/100 Hz sidebands), 3rd-order IMD products (2f₁−f₂, 2f₂−f₁), PLL reference spur mechanism, key-click rise-time shaping (~5 ms envelope), FM over-deviation quantified vs channel spacing (±2.5/±5 kHz vs 12.5/25 kHz), test-bench workflow
- **New interactive candidates (backlog #18–20):**
  - `full-imd-calc.html` — two-tone IMD: f1, f2, order → output spectrum
  - `full-key-click-bw.html` — rise-time slider → occupied bandwidth (HIGH value)
  - `full-fm-deviation.html` — deviation vs channel spacing visual

---

## Ch 9: The Receiver

> **Study page (planned):** `/content/study/full/section-9-receiver.md`
> **RSGB source:** Chapter 9 (pp 57–66, ~21 subsections, ~21 figures)
> **Sprint:** S23

### §9 — All subsections (TBD)
- **Intermediate cross-ref:** Intermediate §3 (receiver section) at `/pages/study/intermediate/section-3-transmitters.html`
- **New at Full:** IP3 and dynamic range (blocking, desensitisation), double superhet architecture, image frequency calculation (f_LO ± IF), FM discriminator/ratio detector circuit level, filter shape factor + insertion loss, reciprocal mixing (LO phase noise), cascade noise figure (Friis), AGC attack/decay design, cross-modulation
- **New interactive candidates (backlog #21–25):**
  - `full-superhet-calc.html` — RF+IF → LO+image+spurs (HIGH value)
  - `full-image-freq.html` — IF slider → image frequency visualiser
  - `full-ip3-calc.html` — IP3/dynamic range calculator
  - `full-reciprocal-mixing.html` — LO phase noise + strong signal → noise floor (HIGH value)
  - `full-agc-animator.html` — AGC attack/decay time constants

---

## Ch 10: Software Defined Radio

> **Study page (planned):** `/content/study/full/section-10-sdr.md`
> **RSGB source:** Chapter 10 (pp 67–68, short chapter, ~5 subsections)
> **Sprint:** S24

### §10 — All subsections (TBD)
- (no direct Intermediate equivalent — SDR is Full-only topic in RF-Hub)
- **RF-Hub existing content:** The RSA5065N sideband pages at `/pages/sidebands/` use an SDR-class instrument; link from §10 where appropriate
- **New at Full:** Direct-sampling ADC architecture, sample rate × bit-depth → dynamic range × bandwidth, FFT-based waterfall/panadapter, software mode demodulation
- **New interactive candidates (backlog #26–27):**
  - `full-sdr-sample-rate.html` — sample rate vs bandwidth calculator
  - `full-adc-dynamic-range.html` — bit depth → dynamic range (~6n dB rule)

---

## Ch 11: Feeders and Antennas

> **Study page (planned):** `/content/study/full/section-11-feeders-antennas.md`
> **RSGB source:** Chapter 11 (pp 69–77, §11.A–11.Q, ~17 subsections, ~25 figures)
> **Sprint:** S24

### §11 — All subsections (TBD)
- **Intermediate cross-ref:** Intermediate §4 (`/pages/study/intermediate/section-4-feeders-antennas.html`) — feeders, SWR, antenna types, EMF at Intermediate level
- **Antenna curriculum:** `/pages/antenna-curriculum/` — 20 lessons covering dipole, vertical, Yagi, EFHW, etc. in depth; link liberally
- **Embed (existing):** `/interactives/radiation-3d-v5.html?antenna=dipole&ui=standard` and `?antenna=yagi` — already used in Intermediate §4F
- **New at Full:** Velocity factor for stub physical length, formal VSWR from forward/reflected power, current vs voltage baluns + ferrite mix selection, R_rad vs R_loss efficiency, quantitative Yagi trade-offs, log-periodic τ scale factor, loading-coil position effect on efficiency, L/T/Pi ATU network derivation, EFHW high-Z matching
- **New interactive candidates (backlog #28–33):**
  - `full-standing-wave-animator.html` — VSWR slider, forward+reflected superposition (HIGH value)
  - `full-yagi-estimator.html` — element spacing → gain/BW/F-B
  - `full-loading-coil-calc.html` — short vertical: coil position → efficiency
  - `full-atu-matcher.html` — L/T/Pi network solver (HIGH value)
  - `full-coax-loss-calc.html` — frequency + length → loss in dB

---

## Ch 12: Propagation

> **Study page (planned):** `/content/study/full/section-12-propagation.md`
> **RSGB source:** Chapter 12 (pp 78–82, §12.A–12.R, ~18 subsections)
> **Sprint:** S25

### §12 — All subsections (TBD)
- **Intermediate cross-ref:** Intermediate §5 (`/pages/study/intermediate/section-5-propagation.html`) — ground wave, sky wave, ionosphere, VHF at Intermediate level
- **New at Full:** Quantitative PFD (P/4πr²), critical frequency (fc) via ionosonde, MUF = fc × sec θ, LUF (D-layer absorption), sunspot/solar flux MUF effect, Es/auroral/meteor scatter mechanisms, EME path loss, tropospheric ducting mechanism, selective vs flat fading
- **New interactive candidates (backlog #34–37):**
  - `full-muf-diurnal.html` — time + sunspot slider → MUF/LUF (HIGH value)
  - `full-pfd-calc.html` — P, gain, distance → PFD in W/m² and dBW/m²
  - `full-skip-animator.html` — ionosphere refraction + skip distance
  - `full-sunspot-plotter.html` — solar flux cycle with external feed

---

## Ch 13: EMC

> **Study page (planned):** `/content/study/full/section-13-emc.md`
> **RSGB source:** Chapter 13 (pp 83–95, §13.A–13.S, ~19 subsections, ~22 figures — longest chapter)
> **Sprint:** S26

### §13 — All subsections (TBD)
- **Intermediate cross-ref:** Intermediate §6 (`/pages/study/intermediate/section-6-emc.html`) — EMC basics, ferrite chokes, filters, interference types at Intermediate level
- **New at Full:** Formal CM/DM current analysis, field strength from PFD (V/m), Pi/T filter derivation from f_c, cascading filters, mains X/Y cap safety + CM choke, PLT (powerline telecommunications) as HF noise polluter, EMC Regs 2016 / RE Regs 2017 legal framework, complaint-handling procedure (log → coordinate → RSGB EMC → Ofcom escalation)
- **New interactive candidates (backlog #38–41):**
  - `full-field-strength-calc.html` — P, gain, distance → V/m and dBμV/m (HIGH value)
  - `full-lc-filter-designer.html` — f_c + Z → Pi/T/L component values (HIGH value)
  - `full-cm-dm-visualiser.html` — animated common/differential mode currents on cable pair
  - `full-interference-flowchart.html` — interference troubleshooting decision tree

---

## Ch 14: Measurements

> **Study page (planned):** `/content/study/full/section-14-measurements.md`
> **RSGB source:** Chapter 14 (pp 96–103, §14.A–14.P, ~16 subsections, ~28 figures)
> **Sprint:** S27

### §14 — All subsections (TBD)
- **Intermediate cross-ref:** Intermediate §9 (`/pages/study/intermediate/section-9-measurements.html`) — multimeter, oscilloscope, SWR meter, spectrum analyser at Intermediate level
- **New at Full:** Formal RMS/peak/PEP relationships (PEP for SSB two-tone test), Bruene directional coupler circuit, reciprocal frequency counter (gate time, TCXO/OCXO reference), SA resolution bandwidth (RBW) and sweep, scope probe compensation, two-tone SSB linearity test interpretation, field strength meter (relative measurement only — not absolute)
- **Existing interactives to reuse:** (none directly applicable — extend Intermediate widgets)
- **New interactive candidates (backlog #42–48):**
  - `full-rms-peak-pep.html` — convert between RMS, peak, peak-to-peak, PEP for sine/SSB/AM
  - `full-vswr-calc.html` — forward/reflected power → SWR + return loss + mismatch loss (HIGH value)
  - `full-scope-sim.html` — timebase + V/div sliders, waveform display
  - `full-two-tone-envelope.html` — SSB two-tone test envelope generator
  - `full-directional-coupler-anim.html` — forward + reflected phasors
  - `full-dip-meter-calc.html` — LC resonance from dip frequency
  - `full-sa-mock.html` — RBW/span → carrier + harmonics display

---

## Coverage Summary

| Chapter | Study page | Intermediate cross-ref | Interactive embeds |
|---------|-----------|----------------------|-------------------|
| Ch 1 Licence | `section-1-licence-conditions.md` | Intermediate §1 | emission designator decoder, callsign parser |
| Ch 2 Operating | `section-2-operating-techniques.md` | Intermediate §7 | (TBD) |
| Ch 3 Safety | `section-3-safety.md` | Intermediate §8 | EMF compliance calc |
| Ch 4 Basic Circuits | `section-4-basic-circuits.md` | Intermediate §2 | RC τ, phasor animator, Q/BW, transformer calc |
| Ch 5 Semiconductors | `section-5-semiconductors.md` | Intermediate §2 | BJT load-line, config compare, diode I-V |
| Ch 6 Signals | `section-6-signals.md` | Intermediate §2 (2F) | sampling/aliasing, Fourier builder |
| Ch 7 Transmitter | `section-7-transmitter.md` | Intermediate §3 | mixer products, PLL calc, PEP calc |
| Ch 8 TX Interference | `section-8-tx-interference.md` | Intermediate §3, §6 | IMD calc, key-click BW, FM deviation |
| Ch 9 Receiver | `section-9-receiver.md` | Intermediate §3 | superhet calc, IP3, reciprocal mixing |
| Ch 10 SDR | `section-10-sdr.md` | (none — Full only) | sample rate, ADC dynamic range |
| Ch 11 Feeders/Antennas | `section-11-feeders-antennas.md` | Intermediate §4 + antenna curriculum | standing wave anim, ATU matcher |
| Ch 12 Propagation | `section-12-propagation.md` | Intermediate §5 | MUF/LUF diurnal, PFD calc |
| Ch 13 EMC | `section-13-emc.md` | Intermediate §6 | field strength calc, LC filter designer |
| Ch 14 Measurements | `section-14-measurements.md` | Intermediate §9 | VSWR calc, scope sim, PEP converter |
