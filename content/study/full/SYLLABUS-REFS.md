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

*Populated 2026-09-14. Section file: `section-8-transmitter-interference.md`. (~5–8% weight).*

| Ref | Pages | Topic summary |
|-----|-------|---------------|
| 8A1 [VERIFY] | 51–52 | Frequency drift causes (temperature, supply voltage, mechanical stress, crystal ageing); crystal oscillators vs LC VFO; TCXO/OCXO; licence frequency tolerance; warm-up time |
| 8B1 [VERIFY] | 52–53 | Harmonics: integer multiples of f_carrier from PA non-linearity; class C worst; 3rd harmonic of 14 MHz = 42 MHz (near 6 m); UK limit −43 dBc; low-pass filter primary cure; parasitic oscillations (ferrite beads, bypassing) |
| 8C1 [VERIFY] | 53–54 | PLL reference spurs at ±f_ref from carrier; DDS phase truncation spurs; phase noise: broadband skirt close to carrier; degrades adjacent-channel quality; improved by OCXO reference |
| 8D1 [VERIFY] | 54 | Key clicks: fast rise/fall time on CW envelope → sidebands many kHz wide; cure: shaped envelope ~5 ms rise time (raised-cosine/Gaussian); too slow → mushy dots |
| 8E1 [VERIFY] | 54–55 | FM over-deviation: excessive audio → carrier swings beyond channel edges → adjacent-channel interference; limit ±2.5 kHz for 12.5 kHz channels; cured by audio limiter |
| 8F1 [VERIFY] | 55–56 | IMD: PA non-linearity mixes audio tones → 3rd-order products 2f1−f2 and 2f2−f1 outside passband = SSB splatter; causes: overdrive, faulty ALC, high SWR; −30 dBc acceptable; FM/CW unaffected |

**Populate status: ✅ Ch8 — section file written 2026-09-14**

---

## Ch 9: The Receiver (pp 57–66)

*Populated 2026-09-14. Section file: `section-9-receiver.md`. (~10–12% weight); heavily tested at Full.*

| Ref | Pages | Topic summary |
|-----|-------|---------------|
| 9A1 [VERIFY] | 57–58 | Sensitivity/NF: thermal noise −174 dBm/Hz; P=kTB; NF = SNR_in − SNR_out; MDS ~3 dB above noise floor; narrower BW improves sensitivity |
| 9B1 [VERIFY] | 58–59 | Dynamic range: noise floor (bottom) and IP3 (top); 3rd-order IMD products at 2f1−f2 / 2f2−f1; SFDR ≈ 2/3×(OIP3 − NF); higher IP3 = better strong-signal handling |
| 9C1 [VERIFY] | 59–60 | Superhet: RF filter → mixer → IF filter → IF amp → detector; f_IF = f_LO − f_signal; fixed IF allows sharp crystal/ceramic filter; typical IF: 455 kHz (AM), 8–10 MHz (HF SSB), 10.7 MHz (VHF FM) |
| 9D1 [VERIFY] | 60–61 | Image frequency: f_image = f_LO + f_IF; image is 2×f_IF away; rejected by preselector before mixer; higher IF = image further = easier rejection |
| 9E1 [VERIFY] | 61 | Double superhet: high first IF (45–70 MHz, image rejection) + low second IF (455 kHz/9 MHz, selectivity); roofing filter at first IF limits strong signals; standard in modern HF transceivers |
| 9F1 [VERIFY] | 61–62 | Product detector + BFO: for SSB/CW (carrier suppressed); BFO re-inserts carrier; USB/LSB/CW selected by BFO offset; audio = difference product; without BFO = duck speech |
| 9G1 [VERIFY] | 62–63 | AGC: rectified IF → controls IF/RF gain → constant audio; attack 1–10 ms; decay 0.5–5 s; fast attack / slow decay for SSB; hang AGC; threshold stops noise boost between QSOs |
| 9H1 [VERIFY] | 63 | FM discriminator: Foster-Seeley, ratio detector, quadrature (IC); limiter before discriminator removes AM noise (capture effect); SINAD 12 dB sensitivity; NBFM ±2.5 kHz / WBFM ±75 kHz |
| 9I1 [VERIFY] | 63–64 | Filters: crystal (high Q, HF IF, SSB BW 2–2.8 kHz); ceramic (455 kHz/10.7 MHz); mechanical (455 kHz, legacy); DSP (adjustable, notch, ideal shape; still needs roofing filter before ADC) |
| 9J1 [VERIFY] | 64–65 | Blocking: strong signal compresses RF/mixer → wanted disappears; improved by IP3, roofing filter. Cross-mod: AM signal transfers modulation via non-linearity. Reciprocal mixing: strong signal × LO phase noise → IF noise; improved by low-phase-noise LO |
| 9K1 [VERIFY] | 65–66 | Friis noise: F_total = F1 + (F2−1)/G1 + …; first stage dominates; cable loss before Rx raises NF; masthead LNA (NF 0.5–1 dB, gain 15 dB) negates cable NF; risk: LNA overloads on strong signals; benefit mainly VHF+ (HF external noise dominates) |

**Populate status: ✅ Ch9 — section file written 2026-09-14**

---

## Ch 10: Software Defined Radio (pp 67–68)

*Populated 2026-09-15. Section file: `section-10-sdr.md`. Short chapter (~3–5% weight); introduces SDR architecture at Full level.*

| Ref | Pages | Topic summary |
|-----|-------|---------------|
| 10A1 [VERIFY] | 67 | SDR concept: hardware-defined → software-defined; mode flexibility, wide instantaneous bandwidth, post-capture analysis |
| 10B1 [VERIFY] | 67 | Down-conversion SDR: mixer → low IF → ADC; I/Q quadrature sampling eliminates image ambiguity; RTL-SDR/SDRplay examples |
| 10C1 [VERIFY] | 67–68 | Direct sampling: ADC at antenna; no mixer; 100+ Msps for HF coverage; high-end transceivers (Flex, ANAN) |
| 10D1 [VERIFY] | 68 | Sample rate → instantaneous bandwidth (Nyquist: BW = f_sample/2); bit depth → dynamic range (~6 dB/bit; 14-bit = 80 dB; 8-bit = 48 dB) |
| 10E1 [VERIFY] | 68 | FFT waterfall/panadapter: frequency vs power (panadapter); time axis added (waterfall, scrolling); bin width = f_sample/FFT_size; signal identification by spectral signature |

**Populate status: ✅ Ch10 — section file written 2026-09-15**

---

## Ch 11: Feeders and Antennas (pp 69–77)

*Populated 2026-09-15. Section file: `section-11-feeders-antennas.md`. Heavy chapter (~12–15% weight, 9 pages); most antenna types are new at Full level.*

| Ref | Pages | Topic summary |
|-----|-------|---------------|
| 11A1 [VERIFY] | 69 | Free space impedance 377 Ω; antenna as interface between 50 Ω feeder and 377 Ω free space; radiation resistance (73 Ω dipole; 35 Ω λ/4 vertical; short dipole < 5 Ω); efficiency = R_rad/(R_rad+R_loss) |
| 11B1 [VERIFY] | 69–70 | Coaxial feeder: Z₀ = 138/√ε_r × log(D/d); 50 Ω vs 75 Ω; loss increases with frequency and VSWR; RG58/RG213/LMR-400 comparison table |
| 11C1 [VERIFY] | 70 | Open-wire feeder: 300/450/600 Ω balanced; lower loss at HF due to high Z and external fields; velocity factors; must use balun at ATU; cannot route through buildings |
| 11D1 [VERIFY] | 70–71 | Velocity factor VF = v/c; λ_cable = (300/f_MHz)×VF; electrical length used in stubs, phasing harnesses, λ/4 transformers (Z_in = Z₀²/Z_load) |
| 11E1 [VERIFY] | 71 | Baluns: 1:1 choke balun (common-mode suppression only, no impedance transform); 4:1 voltage balun (200 Ω balanced → 50 Ω); Guanella vs Ruthroff; ununs (9:1 for EFHW, 4:1 for random wire) |
| 11F1 [VERIFY] | 71–72 | VSWR: Γ = (ZL−Z₀)/(ZL+Z₀); VSWR=(1+|Γ|)/(1−|Γ|); P_reflected=|Γ|²; VSWR 2:1 = 11% reflected; high VSWR multiplies feeder loss; voltage peaks risk |
| 11G1 [VERIFY] | 72 | Ground plane: λ/4 vertical over perfect ground = 35 Ω; elevated radials (4 at 45°) → ~50 Ω; buried radials; counterpoise for elevated antennas; mobile body as ground plane |
| 11H1 [VERIFY] | 72–73 | Yagi: reflector (longer)/driven/directors (shorter); each director adds gain; 3-el ~7 dBd, 5-el ~9 dBd; F/B ratio 15–25 dB; split-dipole Z ~25 Ω (λ/4 match); folded dipole driven element ~280 Ω (4:1 balun) |
| 11I1 [VERIFY] | 73–74 | LPDA: active region shifts with frequency; 6–8 dBd constant across decade range; wide BW vs Yagi high gain; used for HF multiband beams, EMC test, TV aerials |
| 11J1 [VERIFY] | 74 | 5/8-wave vertical: R_rad ~60 Ω; +3 dBd gain; lower radiation angle; capacitive reactance cancelled by series base inductor; standard VHF/UHF mobile whip |
| 11K1 [VERIFY] | 74 | Folded dipole: two parallel conductors; Z ≈ 4×73 = 280 Ω; slightly wider BW; standard Yagi driven element; 4:1 balun to 75 Ω or 6:1 to 50 Ω |
| 11L1 [VERIFY] | 75 | EFHW: high Z at end (~2,450 Ω); 49:1 unun (7:1 turns ratio); multiband on harmonics (40/20/15/10 m); common-mode issue: separate choke balun needed on coax |
| 11M1 [VERIFY] | 75 | Slot antenna: complement of dipole (Babinet's principle); Z_slot = η²/(4×Z_dipole) ≈ 486 Ω; flush-mounted (aircraft, mobile phone frame, marine); active region is the gap |
| 11N1 [VERIFY] | 76 | Loading coils: base/centre/top loading; centre loading better efficiency; Q determines efficiency (efficiency = R_rad/(R_rad+R_loss)); trap antennas (L/C at upper band freq = open circuit; inductive below = loading for lower band) |
| 11O1 [VERIFY] | 76–77 | ATU networks: L (series+shunt, simple, one-direction); T high-pass (2 series caps + shunt L, wide range, adjustable Q, common in commercial ATUs); Pi low-pass (series L + 2 shunt C, harmonic suppression, PA output); ATU does NOT reduce feeder VSWR |

**Populate status: ✅ Ch11 — section file written 2026-09-15**

---

## Ch 12: Propagation (pp 78–82)

*Populated 2026-09-15. Section file: `section-12-propagation.md`. (~8–12% weight, 5 pages; cross-refs Intermediate §5B/§5D/§5E/§5F).*

| Ref | Pages | Topic summary |
|-----|-------|---------------|
| 12A1 [VERIFY] | 78 | Ionospheric layers: D (60–90 km, daylight only, absorbs low HF ∝ 1/f²); E (90–130 km, short hops, Es host); F1 (130–210 km, day only); F2 (210–400 km, primary DX layer, persists at night); night: D gone, F1+F2 merge |
| 12B1 [VERIFY] | 78–79 | Solar activity: 11-year sunspot cycle; SFI/F10.7 (solar flux at 2800 MHz / 10.7 cm, Penticton); high SFI → higher foF2 → higher MUF; SFI ~65 (min) to >200 (max); SID (X-ray flare → D-layer blackout); CME → geomagnetic storm; Kp index (0–9) |
| 12C1 [VERIFY] | 79 | Critical frequency foF2: highest frequency reflected vertically by F2; fc = √(N/81) MHz; measured by ionosonde (swept radar, 1–20 MHz); ionogram shows virtual height vs frequency; foF2 varies 3–14 MHz with solar activity and time of day |
| 12D1 [VERIFY] | 79–80 | MUF = fc × sec(θ); sec(θ) = √(1+(d/2h)²); typical factor 3–5 for amateur paths; LUF set by D-layer absorption (∝ 1/f²); OWF = 0.85 × MUF; worked example: fc=9 MHz, d=2000 km, h=300 km → MUF ≈ 31 MHz |
| 12E1 [VERIFY] | 80 | Skip distance: minimum ground range for sky-wave return; dead zone between ground-wave limit and skip distance (no signal); skip distance increases with frequency (28 MHz: 2000–4000 km; 7 MHz: 200–800 km) |
| 12F1 [VERIFY] | 80–81 | Fading (QSB): multipath (D/E/F2 simultaneously, multiple hops); fast fading near MUF; slow fading on stable paths; selective fading: different audio frequencies fade at different rates → SSB "Donald Duck" distortion; CW/digital modes less vulnerable |
| 12G1 [VERIFY] | 81 | Troposcatter: always-present weak scatter from turbulence; up to ~800 km VHF/UHF. Ducting: temperature inversion traps VHF/UHF; anticyclones/coastal boundaries; 144 MHz paths to 1000–2000+ km; FM co-channel interference as indicator |
| 12H1 [VERIFY] | 81 | Sporadic-E: unpredictable dense E-layer patches; peaks summer (May–Aug NH); single hop 1000–2200 km; most active 50 MHz, occasional 144 MHz; double-hop Es ~4000 km (EU–NA on 6 m); HF Es brings strong near-skip signals on 21/28 MHz |
| 12I1 [VERIFY] | 81–82 | Auroral propagation: VHF (50–144 MHz); north–south paths only; characteristic buzz/rasp on received signal; CW best mode; SSB/FM unusable; Kp ≥ 5 for UK northern stations, Kp ≥ 7 for southern UK |
| 12J1 [VERIFY] | 82 | Meteor scatter: ionised trails at 80–120 km; 28–144 MHz; paths 1000–2200 km; MSK144 (15s periods, fast modulation) for 144 MHz; FSK441 for 50 MHz; major showers (Perseids Aug, Geminids Dec); sporadic background year-round |
| 12K1 [VERIFY] | 82 | EME: ~250–260 dB path loss at 144 MHz; JT65B/QRA64 enable modest-station contacts (100W + small Yagi); Doppler ±300 Hz compensated by WSJT-X; antenna pointing updates needed; propagation-independent (immune to ionospheric storms) |

**Populate status: ✅ Ch12 — section file written 2026-09-15**

---

## Ch 13: EMC (pp 83–95)

| Ref | Pages | Topic summary |
|-----|-------|---------------|
| 13A1 | 83 | Amateur dual role: source of interference (TX power levels in residential areas) AND victim (SMPS, PLT, LED drivers). Licence acknowledges both; neither party has absolute right — reasonable balance required |
| 13B1 | 83–84 | Post-Brexit UK law: EMC Regulations 2016 (SI 2016/1091) replaces EMC Directive 2014/30/EU; Radio Equipment Regulations 2017 (SI 2017/1206) replaces RED 2014/53/EU. Equipment must bear UKCA mark (new UK-market goods) or CE mark (transitional). Modifying CE-marked equipment invalidates conformity; operator liable under Wireless Telegraphy Act 2006 |
| 13C1 | 84–85 | CM/DM currents: I_DM = (I_A − I_B)/2 (opposite directions, fields cancel); I_CM = (I_A + I_B)/2 (same direction, fields add, cable radiates). CM on coax flows on braid outer surface. Small CM (milliamps) radiates more than large DM signal |
| 13D1 | 85–86 | Field strength formula: E (V/m) = √(30 × P × G) / r. Derived from PFD = PG/(4πr²) and PFD = E²/(120π). E falls as 1/r; PFD as 1/r². Worked examples: 100 W + G=1 at 10 m → 5.5 V/m; rearranged for distance: r = √(30PG)/E |
| 13E1 | 86–87 | Near/far-field boundary: r ≈ λ/(2π) ≈ 0.159λ. At HF, neighbours may be in the near field (40 m band: boundary 6.7 m; 80 m: 13.6 m; 20 m: 3.4 m). Formula E=√(30PG)/r valid only in far field; use Ofcom EMF spreadsheet for compliance at close range |
| 13F1 | 87–88 | Four coupling mechanisms: (1) Radiated — EM wave through space, E∝1/r; remedy: distance, shielding. (2) Conducted — shared mains/cables; remedy: mains filter. (3) Inductive — H field, H∝1/r³ near field; remedy: separation, twisted pair. (4) Capacitive — E field, ∝1/r² near field; remedy: shielding, CM choke |
| 13G1 | 88–89 | CM ferrite choke: coax or cable wound through toroid; DM flux cancels (zero core impedance); CM flux adds (high impedance). Mix 31 (1–300 MHz) broadband HF; Mix 43 (25–300 MHz) HF/VHF; Mix 61 (200 MHz–1 GHz) VHF/UHF; Mix 75 (MF/low HF). Z ∝ N². FT240-31 with 8 turns ≈ 1500–3000 Ω CM at 3–30 MHz |
| 13H1 | 89–90 | Filter placement: LPF at TX output (suppresses harmonics before antenna, benefits all victims). HPF at victim input (blocks HF while passing VHF/UHF). BPF for specific-band receivers. BSF/notch for single-interferer rejection. Both LPF+HPF together maximises effectiveness |
| 13I1 | 90–91 | Pi/T filter design: L = Z₀/(2πfc); C = 1/(2πfc × Z₀). Pi: shunt–series–shunt (suits high-Z source). T: series–shunt–series (suits low-Z). HP: swap element types (series C, shunt L). Worked: fc=30 MHz, Z₀=50 Ω → L=265 nH, C=106 pF. HP: fc=40 MHz, Z₀=75 Ω → C=53 pF, L=300 nH |
| 13J1 | 91 | Cascading: attenuations add in dB. Two identical Pi sections → 2× dB attenuation. Practical limit ~80–100 dB due to component parasitics (inductor SRF, capacitor series L). Merging shunt capacitors at junction reduces component count |
| 13K1 | 91–92 | Coax shielding: characterised by transfer impedance Z_T (Ω/m). RG-58 ~40 dB; RG-213 ~45 dB; double-screened (foil+braid) 80–100+ dB. Double-screened 40–50 dB better at VHF than single braid. Use when routing past SMPS/PLT/noise sources |
| 13L1 | 92–93 | Mains filter: X caps across L-N (DM suppression, fail-open); Y caps from each line to earth (CM suppression); CM choke in series both conductors. Max Y cap: 4.7 nF per line (leakage: 230 V / 677 kΩ ≈ 0.34 mA; total ≤ 3.5 mA per IEC 60950). DANGER: larger Y caps → excess earth leakage, shock hazard in PME |
| 13M1 | 93 | Notch (band-stop) filter: parallel LC shunt trap → high impedance at resonance, diverts one frequency to ground. Depth limited by inductor Q. Use for single strong interferer (FM station overloading HF RX, specific amateur band). Series LC in signal path also works (short at resonance) |
| 13N1 | 93–94 | Equipment-specific: BC AM radio — RF rectification at semiconductor junctions, remedy ferrite + bypass cap. DVB-T — aerial amplifier LNA overload → pixelation, remedy HPF at aerial input. DECT — conducted via mains, remedy CM choke on mains. Hi-fi — rectification at audio input junctions, remedy ferrite on interconnects + bypass caps. PLT — 1–30 MHz broadband data on mains, RSGB/Ofcom complaint path. Alarms — RF immunity failure, contact manufacturer |
| 13O1 | 94 | Telephone RFI: RF couples onto telephone pair (radiated/inductive/conducted), rectified at handset junctions → voice in phone. Remedy: ferrite CM choke on telephone cable at entry to equipment, 100 pF–1 nF bypass capacitors from each conductor to screen. ADSL noise floor rise: keep feeder ≥0.5 m from telephone cables |
| 13P1 | 94–95 | SMPS noise: switching at 20 kHz–500 kHz produces harmonic comb across entire HF spectrum. Identify by switching devices off one at a time (comb spacing = fundamental frequency). Remedy: mains filter + CM choke on DC output leads; replace uncertified grey-market chargers (CE-marked units must meet EN 55032) |
| 13Q1 | 95 | Complaint procedure: (1) dummy load test — verify own equipment first; (2) keep log (date/time/freq/mode/power/symptoms); (3) approach neighbour non-confrontationally, offer filter; (4) RSGB EMC Advisory Service (free to members); (5) Ofcom Spectrum Management if equipment non-compliant. Most cases resolved at step 3 or 4 |
| 13R1 | 95 | Shack EMC: single-point star earthing eliminates earth loops. RF in audio/USB = CM current on interconnect — ferrite choke on cable cures it without affecting signal. Galvanic isolator (audio transformer or USB isolator) breaks DC/RF ground loop completely. Earth loop path: TX chassis → audio cable → PC → mains → TX |

**Populate status: ✅ Ch13 — section file written 2026-09-16 (section-13-emc.md, commit 7da95a8)**

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
