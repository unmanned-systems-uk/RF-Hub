# RSGB Full Licence Syllabus References

**Source:** RSGB Full Licence Manual, 3rd Edition (Alan Betts G0HIQ), Syllabus v1.6 Feb 2024
**Raw scan:** `/mnt/cc-share/RF-Hub/curriculum/RSGB-Full-book/book-interleaved.pdf`
**Chapter PDFs:** `/mnt/cc-share/RF-Hub/curriculum/RSGB-Full-book/by-chapter/`

**Format:** Syllabus Ref → Page Number(s) in the RSGB Full Licence Manual
**Page numbers** refer to the printed page footers in the RSGB manual (Ch1 runs pp 6–10).

**Populate status:**
- ✅ Ch 1 — confirmed from PDF
- ⚠️ Ch 2 — populated from PDF read; exact ref numbers [VERIFY] against official syllabus v1.6
- ⚠️ Ch 3 — populated from PDF read; exact ref numbers [VERIFY] against official syllabus v1.6
- ⬜ Ch 4–14 — TBD: populate when each chapter PDF is read

---

## Ch 1: Licence Conditions (pp 6–10)

| Ref | Pages | Topic summary |
|-----|-------|---------------|
| 1C1 | 6 | Content of messages — plain language; codes/Q-codes permitted; WT Regs 1988; Comms Act 2003; all ages and backgrounds |
| 1D1 | 6–7 | Transmitter standards — clean/stable; undue interference; Ofcom inspection rights; self-test obligation; receive capability on all bands/modes |
| 1E1 | 7 | Remote Control — comms link requirements; if amateur band must be >30 MHz; no encryption; notice at remote location (6-10d) |
| 1F1 | 7–8 | CEPT T/R 61-01 — Full licence (HAREC) only; ~50 countries; up to 3 months; home callsign prefixed by host country; host country rules apply |
| 1F2 | 8 | ITU regions — Region 1 (Europe/Africa/Russia), Region 2 (Americas), Region 3 (Asia/Oceania); must use only frequencies in both schedule AND regional allocation |
| 1G1 | 8–9 | EMF compliance — ICNIRP guidelines; Ofcom/RSGB spreadsheet; compliance distance; 10 W avg EIRP/6 min or 100 W peak = no exclusion zone; records required |
| 1H1 | 9–10 | Schedule 1 and Notice of Coordination — Primary/Secondary allocations; 5 MHz MoD conditions; EIRP limits; callsigns (M0/M1/M5 Full, M8/M9 Intermediate, M3/M6/M7 Foundation); ID requirements; unattended operation types |

---

## Ch 2: Operating Techniques (pp 11–12)

*Populated from `02-operating-techniques.pdf` (2 pages). Chapter is anomalously thin — study page supplements from RSGB Operating Manual tradition. Ref numbers [VERIFY] against official syllabus v1.6 (the PDF does not reproduce the syllabus ref table).*

| Ref | Pages | Topic summary |
|-----|-------|---------------|
| 2A1 [VERIFY] | 11 | 472 kHz and 5 MHz bands — 472–479 kHz secondary to maritime mobile; 5W EIRP (1W within 800km of certain countries); 5 MHz MoD primary; narrow channel slots 5.2585–5.4065 MHz; Band Plan CW 200 Hz / digital 500 Hz max; 200W EIRP / 100W PEP / ≤20m antenna; all carriers/tones must be in-slot |
| 2B1 [VERIFY] | 11 | Pileups and split operation — DX TX on published freq, listens 5–10 kHz up; "listening 5 up"; don't call on DX TX frequency; patient listening; two-rig 5 kHz apart caution |
| 2C1 [VERIFY] | 11–12 | Band plans in other countries — IARU harmonisation; host country rules are a licence requirement; tiered licences limit band access; UK station may listen outside schedule but reply only on UK schedule frequency |
| 2D1 [VERIFY] | 12 | Callsign suffixes (/A /M /P /MM /AM); special event stations (NoV GB0xxx); supervising unlicensed operators (Full licensee's callsign used; Full licensee legally responsible) |

---

## Ch 3: Amateur Radio Safety (pp 13–18)

*Populated from `03-amateur-radio-safety.pdf` (6 pages). Ref numbers [VERIFY] against official syllabus v1.6.*

| Ref | Pages | Topic summary |
|-----|-------|---------------|
| 3A1 [VERIFY] | 13 | Electrical safety — earthing (low-resistance path to earth); RCBO/RCD (30 mA / 25–40 ms); double-pole switch; one-hand rule for live HV work; indicator lamps; insulated test probes; remove jewellery; no defined "safe" voltage (30V can kill in poor conditions) |
| 3B1 [VERIFY] | 14–15 | Safety at temporary locations and public events — site survey; overhead power line avoidance; risk assessment (likelihood × severity, documented); Special Event Stations; tripping hazards; outdoor weatherproof cables; RCD/RCBO mandatory outdoors; generators (fuel storage, fire extinguishers, barriers); RF exposure in risk assessment |
| 3C1 [VERIFY] | 15–18 | Vehicle safety (secure fastening, FCS 1362 wiring, hands-free, RF/ECU separation); RF exposure (ICNIRP — heating only biologically significant; Condition 9-1; links to 1G1); thunderstorms (two risks: equipment damage + direct strike; disconnect method; static discharge devices); PME/TN-C-S (bonded neutral; RF earth must bond to MET via qualified electrician; neutral failure → house rises to 230V; Part P notifiable change) |

---

## Ch 4: Basic Circuits (pp 19–30)

*Populated 2026-09-13. Section file: `section-4-basic-circuits.md`. Largest theory chapter (~18–22% exam weight).*

| Ref | Pages | Topic summary |
|-----|-------|---------------|
| 4A1 | 19 | Current (ampere), charge (coulomb), energy (joule), PD (volt); power P=VI / P=I²R / P=V²/R [VERIFY] |
| 4B1 | 19–20 | Kirchhoff's Voltage Law (loop sum = 0); Kirchhoff's Current Law (current in = current out); resistors series (R_total=R1+R2) and parallel (1/R_total=1/R1+1/R2); potential divider V_out=V_in×R2/(R1+R2) [VERIFY] |
| 4C1 | 20–21 | Real battery: EMF + internal resistance r; terminal voltage = EMF − Ir; maximum power transfer when R_load = r [VERIFY] |
| 4D1 | 21–22 | Capacitance C=Q/V; parallel-plate C=KA/d; safe working voltage; RC time constant τ=CR (63% at 1τ, fully charged ≈5τ); capacitors in series and parallel; dielectric types [VERIFY] |
| 4E1 | 23–24 | Inductance: back-EMF, 1H = 1V at 1A/s change; types (air, ferrite, slug-tuned, toroid); inductors series/parallel; LR time constant τ=L/R [VERIFY] |
| 4F1 | 24 | AC sinewave; V_rms = V_peak/√2 = 0.707·V_peak; phase; harmonics; Fourier analysis [VERIFY] |
| 4G1 | 25–26 | Capacitive reactance X_C=1/(2πfC); inductive reactance X_L=2πfL; phasor diagrams (Pythagoras); impedance Z=√(R²+X²); coupling/decoupling capacitors; RF chokes [VERIFY] |
| 4H1 | 27–28 | Series resonance (minimum Z, V magnification); parallel resonance (maximum Z, dynamic resistance R_D=L/CR); resonant frequency f_r=1/(2π√(LC)); Q=f_r/BW=X_L/R; bandwidth BW=f_r/Q; circulating currents [VERIFY] |
| 4I1 | 29 | Quartz crystals: piezo-electric effect; equivalent circuit (L-C1-R series + C2 parallel); two resonances; Q up to 50,000; frequency pulling by external capacitance; overtone operation [VERIFY] |
| 4J1 | 28–29 | Transformers: V_S/V_P = N_S/N_P; I_P/I_S = N_S/N_P; impedance Z_in = Z_out×(N_P/N_S)²; eddy currents and laminations; ferrite cores; Faraday screening [VERIFY] |
| 4K1 | 29–30 | Temperature coefficients (ppm/°C): capacitors (positive/negative/NP0); inductors (positive TC); compensation by combining ±TC components; inductor screening cans (1.5× coil diameter minimum) [VERIFY] |

**Populate status: ✅ Ch4 — section file written 2026-09-13**

---

## Ch 5: Semiconductors (pp 31–38)

*Populated 2026-09-13. Section file: `section-5-semiconductors.md`. (~12–16% exam weight).*

| Ref | Pages | Topic summary |
|-----|-------|---------------|
| 5A1 | 31 | P-N junction; n-type/p-type doping; depletion layer; forward bias (~0.6 V drop); reverse bias; I-V curve; PIV rating [VERIFY] |
| 5B1 | 31–32 | Half-wave rectifier; reservoir capacitor; ripple; full-wave (centre-tap); bridge rectifier (D1–D4); PIV = 2×V_peak (HW/FW) or V_peak (bridge) [VERIFY] |
| 5C1 | 32 | Zener (reverse breakdown, P=V×I, voltage reference); varactor (reverse-biased capacitance, V_GS → C, used in VFOs/PLLs); Schottky/LED/PIN brief [VERIFY] |
| 5D1 | 33–34 | NPN BJT; I_C = β×I_B; Ic-Vce family curves; simple bias instability; potential-divider + emitter-resistor stable bias; emitter bypass capacitor; coupling capacitors [VERIFY] |
| 5E1 | 35 | CE: Z_in ~1kΩ, Z_out ~5kΩ, phase inversion, current+voltage gain; CB: Z_in ~50Ω, Z_out ~50kΩ, no inversion, no current gain; CC (EF): Z_in 50k–2MΩ, Z_out 10–500Ω, no inversion, current gain [VERIFY] |
| 5F1 | 35–36 | Class A (360° conduction, low distortion, low efficiency); Class B (180°, push-pull); Class AB (>180°, eliminates crossover distortion); Class C (<180°, tuned output, high efficiency, RF PA) [VERIFY] |
| 5G1 | 36–37 | JFET (n-channel, reverse-biased gate, voltage-controlled, pinch-off); IGFET/MOSFET (oxide gate, GΩ impedance, ESD 5–10V); dual-gate MOSFET (Gate 2 for AGC or mixing); transconductance g_m [VERIFY] |
| 5H1 | 37–38 | ESD precautions: antistatic bag/mat/wristband (series R few MΩ, NOT on live equipment); Zener simple stabiliser; series-pass transistor regulator with feedback; IC 78xx regulator (3 terminals, suppression caps mandatory) [VERIFY] |
| 5I1 | 38 | SMPS block: filter→rectify→chop(30–60kHz)→ferrite Tx→rectify→output filter; PWM feedback via optical isolator; high efficiency; RF switching noise raises noise floor; smaller smoothing cap at HF [VERIFY] |
| 5J1 | — | Op-amps: differential input (±), virtual earth, inverting gain = −R_f/R_in, non-inverting gain = 1+R_f/R_in; negative feedback stabilises gain [VERIFY] |

**Populate status: ✅ Ch5 — section file written 2026-09-13**

---

## Ch 6: Analogue and Digital Signals (pp 39–40)

*Populated 2026-09-14. Section file: `section-6-analogue-digital-signals.md`. Short chapter (~5–8% weight); all new at Full.*

| Ref | Pages | Topic summary |
|-----|-------|---------------|
| 6A1 [VERIFY] | 39 | Analogue vs digital signals; noise immunity; binary numbers (Table 6A, 0–15 in 4 bits); byte = 8 bits (0–255) |
| 6B1 [VERIFY] | 39 | ADC: sampling, quantisation noise, bit depth; SNR = ~80 dB at 14 bits full-scale; SNR degrades if signal is below ADC max (80−60=20 dB) |
| 6C1 [VERIFY] | 39–40 | Nyquist theorem: sample rate ≥ 2× highest frequency; aliasing: frequency above Nyquist → alias at lower freq; anti-aliasing low-pass filter before ADC |
| 6D1 [VERIFY] | 40 | Fourier transform: converts time-domain samples to frequency domain; FFT = fast algorithm; time domain (oscilloscope) vs frequency domain (spectrum analyser); same signal, different view |
| 6E1 [VERIFY] | 40 | DAC: sinewave look-up table → DAC → LPF → output; phase noise and harmonics from discrete steps; LPF removes harmonics; DDS (see §7D) uses DAC for RF synthesis |

**Populate status: ✅ Ch6 — section file written 2026-09-14**

---

## Ch 7: The Transmitter (pp 41–50)

*Populated 2026-09-14. Section file: `section-7-transmitter.md`. Largest examined chapter (~15–20% weight); heavily tested at Full.*

| Ref | Pages | Topic summary |
|-----|-------|---------------|
| 7A1 [VERIFY] | 41 | Transmitter architecture (Fig 7.1): audio amp → modulator/filter → mixer → RF driver → PA → output filter; crystal osc → synthesiser; modulation at low IF for practical filtering |
| 7B1 [VERIFY] | 41, 46–47 | SSB: balanced modulator (diode ring, Fig 7.13) → DSB-SC; crystal filter (Fig 7.14) removes one sideband; SSB cannot be frequency-multiplied; mix to final freq via VFO/synthesiser (Fig 7.17); half BW and power advantage over AM |
| 7C1 [VERIFY] | 41–43, 46 | FM: varicap on Colpitts oscillator (Fig 7.12); modulation index = peak dev / max audio freq; NBFM index ≤1; WBFM index >1; Carson's Rule BW = 2×(max audio + peak dev); at 145MHz ±2.5kHz dev → 10.6kHz BW; over-deviation → adjacent channel interference; phase mod alternative (applied to oscillator output) |
| 7D1 [VERIFY] | 42–45 | LC Colpitts VFO (Fig 7.3): emitter-follower, C1/C2 capacitor divider feedback, variable C+L sets freq; Crystal oscillator (Fig 7.4): Q≤50000, series/parallel resonance, VXO trimmer pulling; PLL synthesiser (Fig 7.6): f_out = f_crystal×N/A, step = ref freq, out-of-lock inhibit; DDS (Fig 7.8): sinewave table → DAC → LPF, fine resolution, phase noise limitation |
| 7E1 [VERIFY] | 45–46, 48 | Buffer amplifier (Fig 7.9): isolates VFO from load, class A; Frequency multiplier (Fig 7.10): class C transistor → harmonics → tuned circuit selects nth harmonic; SSB cannot be multiplied; Mixer: f_out = f_in ± f_LO, filter selects sum or difference; VFO range selects band (Fig 7.17) |
| 7F1 [VERIFY] | 48–49 | PA: class A (linear, 35% eff.) for SSB/AM; class C (67%) for FM/CW with tuned output; push-pull class B 50%; output matching L/C network transforms transistor impedance to 50Ω AND filters harmonics (Fig 7.19/7.20); SWR sensing → fold-back protects transistors |
| 7G1 [VERIFY] | 49–50 | PEP = avg RF power over 1 cycle at modulation envelope crest; speech peak:average ≈20:1 (13dB); no cycle >400W (or 1kW Primary); ALC monitors PA output, reduces drive if overdrive → IMD/splatter on adjacent freqs; speech processor limits peaks → raises average power; data modes (RTTY/SSTV) = 100% average duty — check heatsink |
| 7H1 [VERIFY] | 50 | SWR protection: detects reflected power → progressive fold-back; wrong load impedance risks transistor damage; CW: oscillator runs continuously, key shapes envelope; key clicks from fast rise time; Transceivers: shared osc/IF/filter stages; T/R relay on PTT; RIT for fine receive offset without changing TX frequency |

**Populate status: ✅ Ch7 — section file written 2026-09-14**

---

## Ch 8: Transmitter Interference (pp 51–56)

*TBD — populate when `08-transmitter-interference.pdf` is read. Chapter covers: frequency stability, spurious emissions, harmonics, key clicks, FM over-deviation, IMD, direct radiation (~16 subsections).*

| Ref | Pages | Topic summary |
|-----|-------|---------------|
| 8A1 | TBD | — |

---

## Ch 9: The Receiver (pp 57–66)

*TBD — populate when `09-receiver.pdf` is read. Chapter covers: sensitivity, selectivity, dynamic range, superhet, image frequency, double superhet, product detector, AGC, FM discriminator, reciprocal mixing, IP3 (~21 subsections).*

| Ref | Pages | Topic summary |
|-----|-------|---------------|
| 9A1 | TBD | — |

---

## Ch 10: Software Defined Radio (pp 67–68)

*TBD — populate when `10-sdr.pdf` is read. Chapter covers: SDR architecture, direct-sampling ADC, software demodulation, waterfall displays (~5 subsections).*

| Ref | Pages | Topic summary |
|-----|-------|---------------|
| 10A1 | TBD | — |

---

## Ch 11: Feeders and Antennas (pp 69–77)

*TBD — populate when `11-feeders-antennas.pdf` is read. Chapter covers: velocity factor, baluns, VSWR, Yagi, log-periodic, 5/8 whip, folded dipole, EFHW, loading coils, ATU networks (~17 subsections, letter-indexed §11.A–11.Q).*

| Ref | Pages | Topic summary |
|-----|-------|---------------|
| 11A1 | TBD | — |

---

## Ch 12: Propagation (pp 78–82)

*TBD — populate when `12-propagation.pdf` is read. Chapter covers: PFD, ionosphere layers, MUF formula, LUF, fading, Es, tropo, meteor scatter, EME (~18 subsections, letter-indexed §12.A–12.R).*

| Ref | Pages | Topic summary |
|-----|-------|---------------|
| 12A1 | TBD | — |

---

## Ch 13: EMC (pp 83–95)

*TBD — populate when `13-emc.pdf` is read. Chapter covers: CM/DM current, field strength, coupling mechanisms, Pi/T filters, mains filters, equipment-specific interference, complaint procedure (~19 subsections, letter-indexed §13.A–13.S).*

| Ref | Pages | Topic summary |
|-----|-------|---------------|
| 13A1 | TBD | — |

---

## Ch 14: Measurements (pp 96–103)

*TBD — populate when `14-measurements.pdf` is read. Chapter covers: voltmeter loading, RMS/peak/PEP, SWR meter, Bruene coupler, oscilloscope, frequency counter, dip meter, spectrum analyser, dummy loads, field strength meter (~16 subsections, letter-indexed §14.A–14.P).*

| Ref | Pages | Topic summary |
|-----|-------|---------------|
| 14A1 | TBD | — |

---

## Notes

- Page numbers refer to printed page footers in the RSGB Full Licence Manual, 3rd Edition
- The Full licence syllabus uses the same alphanumeric ref format as Intermediate (e.g. 1C1, 4A2) but different items
- Some content in the Full manual is assumed background from Foundation/Intermediate — these items are not re-examined but may be referenced in the study pages for continuity
- CEPT T/R 61-01: applies to Full licence (HAREC) holders **only** — explicitly not Foundation or Intermediate
- Power limits (post-2024 Ofcom): Foundation 25 W, Intermediate 100 W, Full 1000 W
- Regulatory content: flag [VERIFY] in Markdown source when writing; do not assume licence notes are unchanged
