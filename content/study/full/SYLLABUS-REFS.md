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

*TBD — populate when `05-semiconductors.pdf` is read. Chapter covers: diodes, rectifiers, BJTs (CE/CB/CC configs), class A/AB/B/C, FETs, op-amps, ICs, SMPS (~20 subsections).*

| Ref | Pages | Topic summary |
|-----|-------|---------------|
| 5A1 | TBD | — |

---

## Ch 6: Analogue and Digital Signals (pp 39–40)

*TBD — populate when `06-analogue-digital-signals.pdf` is read. Chapter covers: binary numbers, sampling, Nyquist theorem, Fourier transforms, DAC (~6 subsections).*

| Ref | Pages | Topic summary |
|-----|-------|---------------|
| 6A1 | TBD | — |

---

## Ch 7: The Transmitter (pp 41–50)

*TBD — populate when `07-transmitter.pdf` is read. Chapter covers: SSB filter method, FM TX, oscillators, PLL, DDS, mixers, PA classes, PEP, ALC, T/R switching (~18 subsections).*

| Ref | Pages | Topic summary |
|-----|-------|---------------|
| 7A1 | TBD | — |

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
