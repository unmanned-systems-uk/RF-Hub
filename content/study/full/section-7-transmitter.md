<!-- RF-Hub Full Licence Study — Chapter 7: The Transmitter
     Exam weight: ~15–20% (large chapter, 10 pages, heavily examined)
     Sub-sections: §7A architecture, §7B SSB, §7C FM, §7D oscillators (LC/Xtal/PLL/DDS),
                   §7E freq multipliers & mixers, §7F PA, §7G PEP/speech/ALC, §7H SWR/transceivers
     Syllabus refs: 7A1, 7B1, 7C1, 7D1, 7E1, 7F1, 7G1, 7H1 [VERIFY against syllabus v1.6]
     RSGB source: Full Licence Manual 3rd ed. (G0HIQ), pp. 41–50
     New at Full: PLL, DDS, PEP, ALC, speech processors, frequency multiplier, balanced modulator
     Cross-refs: §5F (PA bias classes), §5G (JFET/varicap), §6F (DAC/DDS), §8 (TX interference)
-->

# §7 — The Transmitter

A transmitter must produce a **clean, modulated sinewave at the desired frequency** with minimal output at any other frequency. It must be controllable and measurable — frequency, power, modulation quality, and spurious outputs must all be within specification. Transmissions must remain inside the amateur bands.

Modern multi-mode transceivers have replaced mode-specific designs. Rather than separate AM/FM/SSB transmitters, a single architecture with a configurable modulator block serves all modes. This chapter traces that architecture stage by stage.

> **Cross-ref:** PA bias classes (Class A, B, C) are covered in §5F. This chapter applies those classes to transmitter design and adds the efficiency and power measurement aspects examined at Full licence level.

---

## §7A — Transmitter Architecture

<!-- VISUAL: section-7-fig7.1 — block diagram: audio amp → modulator & filter → mixer → filter & RF driver → RF power amplifier → output filter → antenna; crystal oscillator → frequency synthesiser → mixer. Multi-mode architecture. -->

The general-purpose transmitter block diagram (Fig 7.1) has three functional paths:

**Audio/modulation path:** microphone → audio amplifier → modulator and filter (where modulation is applied and unwanted products are removed).

**Carrier/frequency path:** crystal reference oscillator → frequency synthesiser → mixer. The synthesiser provides the precise, stable, tuneable carrier frequency.

**RF path:** modulated signal at IF → mixer → filter → RF driver → power amplifier → output filter → antenna.

The block labelled "modulator and filter" handles SSB, FM, AM, or data as appropriate — it represents the mode-specific circuitry. Everything downstream is mode-agnostic.

### Why Low-IF First?

Modulation is performed at a low intermediate frequency (IF), typically 1–10 MHz, not at the final transmit frequency. This allows:
- Sharp crystal filters to remove unwanted sidebands (easier at low IF where proportional selectivity is better)
- Stable, mode-locked oscillators that are not subject to pulling
- Simple band-changing by adjusting the synthesiser, not the modulator

---

## §7B — Single Sideband (SSB) Generation

### SSB and Why It Is Efficient

An AM signal is equivalent to three sinewaves: the carrier (which carries no information) plus two sidebands — upper and lower — that are mirror images of each other. Both sidebands carry identical information. At 100% modulation, each sideband contains only one quarter of the carrier power.

**SSB removes the carrier and one sideband**, transmitting only the information-bearing sideband. Benefits:
- **Half the bandwidth** of AM (or the same bandwidth as a single sideband of AM)
- **All transmitted power carries information** — no wasted carrier power
- **Power advantage:** with 100% AM modulation, each sideband is ¼ of carrier power; with SSB the full transmitter power goes into one sideband

### The Balanced Modulator

<!-- VISUAL: section-7-fig7.13 — diode ring balanced modulator: audio input (via transformer) + RF carrier input (via transformer) → four diodes in ring → double-sideband RF output (transformer). Both transformers and the ring arrangement shown. -->

The **diode ring balanced modulator** (Fig 7.13) produces a **double-sideband suppressed-carrier (DSB-SC)** output. The RF carrier is injected at the junction of the two transformers. On each half-cycle, one pair of diodes conducts and the other is cut off. The carrier currents cancel through the transformer windings — the carrier is suppressed. What remains is both sidebands with no carrier.

The output is mathematically equivalent to AM with 100% modulation depth, but with the carrier term removed.

### The Crystal Filter

<!-- VISUAL: section-7-fig7.14 — crystal filter circuit (ladder network of crystals) with frequency diagram above showing: lower sideband (shaded, removed), suppressed carrier, upper sideband (passes). Filter pass-band shown centred on USB. -->

The DSB-SC signal is passed through a **crystal filter** — a narrow bandpass filter centred on one sideband. Crystal filters have extremely sharp skirts (high Q, up to 50,000 per crystal) and are able to remove the unwanted sideband while passing the wanted one. This is most practical at a low IF (e.g. 6 MHz) because at 6 MHz a 600 Hz separation represents a larger proportional frequency difference than it would at 144 MHz.

The resulting **SSB signal cannot be multiplied in frequency** — multiplication would scale the audio frequencies along with the carrier, distorting the modulation. It must be **mixed** to the final transmit frequency.

### Mixing Up to the Final Frequency

<!-- VISUAL: section-7-fig7.17 — SSB IF mixing block diagram: 6MHz crystal oscillator → modulator & sideband filter → Mixer; VFO (7.8–8.35MHz) → Mixer; output → Filter 1.8–2MHz → second Mixer → Filter 14–14.35MHz (20m output); Filters for other bands also shown. -->

The SSB signal at IF (e.g. 6 MHz) is mixed with the local oscillator (VFO or PLL, e.g. 7.8–8.35 MHz). The mixer produces **sum and difference** outputs:
- Difference: 7.8 − 6 = **1.8 MHz** to 8.35 − 6 = **2.35 MHz** (covers 160m and 80m)
- Sum: 7.8 + 6 = **13.8 MHz** to 8.35 + 6 = **14.35 MHz** (covers 20m)

A filter selects the desired output; the unwanted mixer product is rejected. By switching filters and adjusting the VFO range, the same modulator covers multiple HF bands.

> **[7B1]** SSB generation: balanced modulator (DSB-SC) → crystal filter (select one sideband) → mixer to final frequency. SSB uses half the bandwidth and all power carries information. Cannot be frequency-multiplied.

---

## §7C — Frequency Modulation (FM) Generation

### FM Fundamentals

In FM, the **carrier frequency** varies in proportion to the instantaneous amplitude of the audio signal. The amplitude of the carrier is constant — no amplitude information is conveyed. Compare with AM where the carrier amplitude varies and frequency is constant.

<!-- VISUAL: section-7-FM1 — three-trace diagram: audio sinewave (top), unmodulated carrier (middle), FM-modulated carrier (bottom) with frequency compression/expansion visible at the peaks and troughs of the audio. -->

**Key FM quantities:**

| Term | Definition | Formula |
|---|---|---|
| Peak deviation | Maximum frequency swing from carrier | Set by transmitter design and regulatory limit |
| Deviation ratio | Ratio of actual deviation to peak deviation at any instant | Actual deviation / Peak deviation |
| Modulation index | Ratio of peak deviation to maximum audio frequency | Peak deviation / Max audio frequency |

### Amateur FM Parameters

| Band | Peak deviation | Max audio freq | Modulation index | Carson's BW |
|---|---|---|---|---|
| VHF (145 MHz) | ±2.5 kHz | 2.8–3 kHz | ≈0.8 | 2×(3+2.5) = **11 kHz** |
| UHF (70 cm) | ±5 kHz | 3 kHz | ≈1.7 | 2×(3+5) = **16 kHz** |
| FM broadcast | ±75 kHz | 15 kHz | 5 | Wide band |

**Carson's Rule** gives the bandwidth containing most of the FM signal power:

```
BW = 2 × (maximum audio frequency + peak deviation)
```

Amateur FM uses **narrow-band FM (NBFM)** with modulation index ≤ 1. FM broadcast is **wide-band FM (WBFM)** with index > 1.

> **[7C1]** FM over-deviation increases bandwidth and causes interference to **adjacent channels** only (unlike AM over-modulation which affects multiple channels). Both are undesirable and must be avoided.

### FM Spectrum

<!-- VISUAL: section-7-FM2 — FM spectrum: carrier at 1000 kHz, with sidebands extending above and below (995, 997, 998, 999 kHz and 1001, 1002, 1003, 1004, 1005 kHz) — theoretically infinite but amplitude diminishes rapidly with distance from carrier. -->

FM produces **theoretically infinite sidebands**, but those far from the carrier have negligible amplitude and can be ignored. Unlike AM, the carrier amplitude in FM may vary along with the sidebands.

### Generating FM

<!-- VISUAL: section-7-fig7.12 — Colpitts oscillator with varicap diode added: audio input via DC block → varicap across the L-C tank circuit (replacing or paralleling C); varicap reverse-bias varies with audio, changing effective capacitance and thus oscillator frequency. DC blocking capacitors shown on audio path. -->

FM is applied directly at the **oscillator**. A **varicap (varactor) diode** is connected across the oscillator's LC tuned circuit (Fig 7.12 — a Colpitts oscillator with varicap). The audio voltage changes the reverse bias on the varicap, which changes its capacitance, which changes the oscillator frequency. DC blocking capacitors prevent the audio from disturbing the varicap's DC bias point.

**Phase modulation** is an alternative: the phase of the oscillator output is shifted by the audio, which manifests as frequency modulation (a phase shift that changes with time = frequency change). Phase modulation is applied to the **output** of the oscillator, not its frequency-determining components. This avoids the risk of degrading oscillator stability. In practice, a CR circuit can make phase modulation look like frequency modulation.

### Simple FM VHF Transmitter

<!-- VISUAL: section-7-fig7.2 — FM VHF TX block diagram: mic → audio amp → (FM to osc, dashed) and (phase mod to buffer, dashed); osc → buffer amp → frequency multiplier → filter & driver → PA & filtering → antenna. The two modulation injection points shown with dashed lines. -->

The early FM VHF transmitter (Fig 7.2) used a frequency multiplier chain to achieve the final output frequency. A low-frequency oscillator (e.g. 8 MHz) is multiplied by a chain to reach 144 MHz (e.g. ×18 = 3×3×2). **Frequency deviation is also multiplied**, so the oscillator needs only a small deviation to produce the required deviation at VHF. This design has largely been superseded by synthesisers at VHF and below, but is still used at microwave frequencies where synthesisers are expensive.

---

## §7D — Oscillators

The oscillator is the frequency-governing heart of the transmitter. It must be accurate, stable, and controllable.

### LC Oscillator (Colpitts VFO)

<!-- VISUAL: section-7-fig7.3 — Colpitts oscillator: transistor in emitter-follower configuration; C1 and C2 divide the tank circuit voltage and feed it back to the emitter (input); L is the inductor; C is the main tuning variable capacitor; DC block capacitors shown. -->

The **Colpitts oscillator** (Fig 7.3) uses an emitter-follower transistor. The output at the emitter is fed back via a capacitor voltage divider (C1 and C2) to the tuned LC circuit. The circuit amplifies its own signal at the resonant frequency; C1 and C2 in series, in parallel with variable capacitor C and inductor L, set the frequency.

```
f = 1 / (2π√(LC))   where C is the effective series combination of C1, C2, and main variable C
```

This device is called a **VFO (Variable Frequency Oscillator)** because C can be varied to tune. Design rules for a stable VFO:

- Separate, stable DC supply (isolated from the PA)
- High-quality components; coil tightly wound on low-loss former
- Rigid variable capacitor, insulated coupling to the front panel
- Short, rigid wiring; away from heat sources
- Buffer amplifier follows the VFO output (§7D below)

VFOs can drift with temperature and mechanical vibration — a calibration check is essential.

### Crystal Oscillator

<!-- VISUAL: section-7-fig7.4 — crystal oscillator circuit: crystal replacing part of the feedback path in a Colpitts circuit; trimmer capacitors (5–35 pF) allow small frequency pulling; DC blocking capacitors. -->

A **crystal** replaces the LC element in the feedback path (Fig 7.4). Crystal resonators have a Q of up to 50,000 — far higher than any LC circuit — giving extremely stable, accurate, and repeatable frequency. The crystal can resonate at either its **series** or **parallel** resonant frequency (which are within about 0.1% of each other); circuit design determines which is used.

**Frequency pulling:** trimmer capacitors (5–35 pF) can shift the crystal frequency slightly — a **VXO** (variable crystal oscillator). The range is small.

<!-- VISUAL: section-7-fig7.5 — crystal switching: multiple crystals switchable via diodes or a rotary switch to the 0V rail, allowing selection of one of several operating frequencies. -->

Early equipment used multiple switched crystals (Fig 7.5) for channelised operation. Today, the crystal oscillator mainly serves as a **precision frequency reference** for a PLL synthesiser.

> Temperature coefficients of C1 and C2 matter (see §4K). Use polystyrene or mica capacitors; if positive TC dominates, add a small negative-TC capacitor to compensate.

### Phase Locked Loop (PLL) Synthesiser

<!-- VISUAL: section-7-fig7.6 — PLL block diagram: Crystal reference oscillator (6 MHz) → Fixed divider ÷A (÷6000) → 1kHz → Phase comparator; VCO (output f<sub>out</sub>) → Programmable divider ÷N → 1kHz → Phase comparator; Phase comparator → Low-pass filter → VCO. f<sub>out</sub> = f<sub>crystal</sub> × N/A. -->

The PLL combines the **frequency agility of a VFO** with the **accuracy of a crystal**, without needing a crystal calibrator.

**How it works:**
1. The crystal reference oscillator (e.g. 6 MHz) is divided by a fixed value A (e.g. 6000) to produce a reference of 1 kHz.
2. The **VCO** (Voltage Controlled Oscillator — a Colpitts with varicap) runs at the desired output frequency f<sub>out</sub>.
3. f<sub>out</sub> is divided by a programmable value N. If the VCO is on frequency, this also gives 1 kHz.
4. The **phase comparator** compares the two 1 kHz signals and outputs a DC voltage proportional to the phase difference.
5. This voltage is smoothed by a **low-pass filter** and applied to the VCO varicap — correcting its frequency.

```
f<sub>out</sub> = f<sub>crystal</sub> × N / A
```

The **frequency step size** equals the reference input to the phase comparator (1 kHz in this example). Smaller steps require a smaller reference → larger division ratios → slower loop response.

<!-- VISUAL: section-7-fig7.7 — three waveforms: reference frequency (top), VCO output (middle), phase comparator output pulses (bottom). Pulse width narrows/widens as VCO leads/lags the reference, controlling the low-pass filter DC level. -->

**PLL problems:** if the frequency dial is turned quickly, the two comparator inputs diverge in frequency and **lock is lost**. The VCO swings uncontrolled, producing signals across adjacent channels. An **out-of-lock indication** must inhibit the transmitter until lock is restored. Modern **dual-loop** PLL designs use two nested loops with different step sizes — fast response for large steps, fine steps for slow movements.

### Direct Digital Synthesis (DDS)

<!-- VISUAL: section-7-fig7.8 — DDS block diagram: Clock → Frequency control (sets step size through table) → Sinewave lookup table → DAC → Low-pass filter → Sinewave output. -->

**DDS** uses a DAC (from §6F) to generate a sinewave directly in the digital domain:
1. A **sinewave look-up table** stores one cycle as digital amplitude values
2. A **clock** steps through the table; the step size (controlled by a register) sets the output frequency
3. The DAC converts each digital value to an analogue voltage → staircase approximating a sinewave
4. A **low-pass filter** removes the harmonics from the staircase

```
f<sub>out</sub> = (step size × clock frequency) / table length
```

DDS gives extremely fine frequency resolution (sub-Hz) and fast settling. The disadvantage is **phase noise** — the discrete amplitude steps produce sidebands close to the carrier that the LPF cannot remove, raising the noise floor. This degrades adjacent-channel performance. Increasing the number of bits (larger amplitude steps) reduces, but cannot eliminate, phase noise.

---

## §7E — Frequency Multipliers and Mixers

### Frequency Multiplier

<!-- VISUAL: section-7-fig7.10 — frequency multiplier: transistor biased class C (base near 0V); RF input at frequency f; collector tuned circuit resonates at 2f or 3f (doubled or tripled); output at 2f or 3f. -->

A transistor biased in **Class C** (§5F) conducts for less than half a cycle, producing a highly distorted pulse output rich in harmonics. The **collector tuned circuit** is resonated at the desired harmonic (2f for doubling, 3f for tripling). The tuned circuit selects that harmonic and suppresses the fundamental and others.

Early VHF FM transmitters used chains of multipliers — for example, an 8 MHz oscillator multiplied ×18 (3×3×2) to reach 144 MHz. The frequency deviation is also multiplied, so the oscillator deviation is set correspondingly low.

```
Example: 8 MHz × 3 × 3 × 2 = 144 MHz
         If required deviation at 144 MHz = ±2.5 kHz, oscillator needs ±138 Hz
```

At microwave frequencies, **varactor diode multipliers** are used (Fig 7.11) because synthesisers are expensive above ~1 GHz.

> **SSB signals cannot be multiplied** — this would scale the audio sideband frequencies along with the carrier, distorting the voice information and corrupting the modulation.

### Mixer (Up-Conversion)

<!-- VISUAL: section-7-fig7.17 — mixing block diagram: SSB IF (6MHz) + VFO (7.8–8.35MHz) → Mixer → Filter selects either difference (1.8–2.35MHz = lower HF bands) or sum (13.8–14.35MHz = 20m) output. Unwanted product rejected. -->

A mixer multiplies two input signals to produce sum and difference frequency outputs:

```
f<sub>out</sub> = f<sub>in</sub> ± f<sub>LO</sub>
```

For a 6 MHz SSB signal mixed with a VFO at 8.0–8.35 MHz:
- Difference: 8.0–8.35 − 6 = **2.0–2.35 MHz** (filtered away)
- Sum: 8.0–8.35 + 6 = **14.0–14.35 MHz** (20m band — selected by filter)

Adjusting the VFO range to 7.8–8.0 MHz shifts the sum output to 13.8–14.0 MHz. In this way, a single 6 MHz modulator block covers the entire 20m band. Switching filters covers other HF bands.

---

## §7F — Power Amplifiers

### PA Classes in the Transmitter

The choice of PA bias class depends on the mode being transmitted:

| Mode | Amplitude variation? | Required PA class | Why |
|---|---|---|---|
| SSB | Yes — varies with speech | **Class A (linear)** | Non-linearity would create intermodulation products and distort voice |
| AM | Yes — carrier + sidebands | **Class A (linear)** | Same reason |
| FM | No — constant envelope | **Class C** | No amplitude info to preserve; Class C efficient and harmonics filtered by tuned output |
| CW | On/off only | **Class C** | Amplitude is binary; harmonics filtered |
| FSK/AFSK | Depends on type | Class A if amplitude changes; Class C for constant-envelope FSK |

### PA Circuit Design

<!-- VISUAL: section-7-fig7.19 — 144 MHz low-power PA: transistor (BLY83-class) with RFC1 holding base at 0V DC (→ Class C); RFC2 provides DC supply; L2, L3 and associated capacitors provide both impedance matching and harmonic filtering; output to 50Ω feeder. Trimmer capacitors adjustable from front panel. -->

The **base at 0 V** (held by RFC1, which has negligible impedance to DC but high impedance to RF) places the transistor in **Class C** (§5F). RFC2 provides DC supply to the collector without passing RF.

L2, L3 and the associated capacitors serve a **dual function**:
1. **Harmonic filtering** — the tuned network attenuates harmonics from the Class C distorted waveform
2. **Impedance matching** — the transistor's collector impedance is lower than 50 Ω (it is a high-current, low-voltage device); the network transforms this to the 50 Ω standard expected by feeders and antennas

> **[7F1]** Transistors operating into the wrong impedance are prone to damage. Commercial transmitters include a sensing facility that detects mismatch and progressively shuts down the output.

### PA Efficiency

| Class | Conduction angle | Efficiency | Notes |
|---|---|---|---|
| A | 360° | ≈35% | Linear; half supply voltage headroom wasted even at zero signal |
| B (push-pull) | 180° | ≈50% | Two transistors, complementary; crossover distortion without Class AB |
| AB | >180° | Between A and B | Eliminates crossover distortion; used for linear audio PAs |
| C | <180° | ≈67% | Best efficiency; tuned output mandatory; constant envelope only |

### PA Output Matching (Fig 7.20)

<!-- VISUAL: section-7-fig7.20 — 28–30MHz transistor output stage: RFC (RF choke) provides DC feed; inductor and capacitor network (L, C combination with trimmer capacitors) matches low transistor collector impedance to 50Ω output; capacitors adjustable from panel. -->

At 28–30 MHz (Fig 7.20) the inductor is not tapped (the frequency is high enough that simple LC networks suffice). Trimmer capacitors must be re-adjusted when changing frequency — important for Class C designs where collector Q is critical. At VHF/UHF, integrated-circuit RF amplifier modules are common, requiring minimal external matching (Fig 7.18).

---

## §7G — PEP, Speech Processors, and ALC

### Peak Envelope Power (PEP)

On SSB, the transmitted power varies from zero (silence) to maximum on speech peaks. The licence states the **Peak Envelope Power (PEP)** permitted — defined as:

> **PEP = the average RF power over one RF cycle at the crest of the modulation envelope**

Speech is highly **peaky** — a typical peak-to-average ratio of **20:1 (13 dB)**. A 100 W PEP transmitter averages only about 5 W on voice. The peak must not exceed the licensed limit. **No RF cycle may exceed 400 W** (or 1 kW on Primary amateur allocations).

An ordinary moving-coil meter is too sluggish to capture genuine speech peaks. PEP measurement requires an oscilloscope or an electronic **peak-hold** device. Some VSWR meters include this function.

| Mode | Average power relative to PEP |
|---|---|
| SSB voice | ~5% (20:1 peak ratio) |
| AM (carrier + sidebands) | ~67% of peak (constant carrier) |
| FM | 100% (constant envelope — always at full power when PTT pressed) |
| RTTY / data (continuous) | 100% — fully modulated continuously |

> **[7G1]** RTTY and slow-scan TV may run the PA at full average power continuously. Heatsinks designed for SSB voice duty may be inadequate for data modes. Check thermal ratings before extended data operation.

### Speech Processors

A speech processor limits the peak amplitude of the audio signal, raising the **average** power for the same PEP rating:

- Halving peak amplitude → **doubles average power** (from 5 W to 10 W on a 100 W PEP rig)
- Heavy processing on difficult contacts can raise average power to 40 W or more
- Check heatsink ratings — data-level average power may be sustained

> **Important:** verify the assumptions made when the PA heatsink was designed. On AM, continuous transmission at 2/3 of peak power may be specified; heavy SSB processing can approach this.

### Automatic Level Control (ALC)

<!-- VISUAL: section-7-ALC — block diagram: output of PA sampled → ALC detector → ALC voltage → controls gain of driver/PA input stage; displayed on front-panel meter. Feedback loop reduces gain if output exceeds threshold. -->

**ALC** samples the PA output and reduces the drive if the level exceeds a set threshold. It is displayed on a panel meter or bar-graph. ALC is **essential** because:

1. Over-driving the PA causes **distortion and splatter** — IMD products spread onto adjacent frequencies, far beyond the occupied bandwidth
2. Over-driving may **damage** the PA transistors

Best practice: set the drive so that ALC just kicks in on the loudest speech peaks — the transmitter operates against its manual drive setting, with ALC acting as a safety net, not the primary level control.

> **[7G1]** If an external PA is used, ALC from the PA must control the transceiver's output. If no ALC interface is available, reduce transceiver output manually so the PA never overloads.

---

## §7H — SWR Protection and Transceivers

### SWR Protection

Most VHF/UHF transmitters (and many HF rigs) include an **SWR sensing** circuit that monitors reflected power. The hazard from high SWR is not primarily the reflected power itself — it is that the **load impedance seen by the transistor is incorrect**, which can place the transistor outside its safe operating area. At high power this can destroy the output stage.

**Protection action:** the SWR sensor progressively reduces output power as SWR rises. Continued operation into a mismatched load is permissible at reduced power — instant destruction is prevented, but the root cause (wrong antenna, damaged feeder, faulty connector) must be investigated.

### CW and Keying

A CW transmission keys the carrier on and off — conceptually 100% AM. The **carrier oscillator must run continuously** and must never be keyed directly. Even small supply voltage variations from keying cause a frequency shift heard as a **chirp** at the onset of each dot or dash.

<!-- VISUAL: section-7-fig7.15 — CW keying: key up/key down waveform; fast rise time (top trace) shows high-frequency audio content; slow rise time (bottom trace) shows controlled envelope, narrower bandwidth, no key clicks. -->

The bandwidth of a CW transmission is determined by the **rise and fall time of the envelope**, not by the sending speed:
- **Fast rise time** → abrupt edges → high-frequency components → **key clicks** audible several kHz away
- **Slow, shaped rise time** → narrower BW → clean signal → good operating practice

### Data Modes

**FSK (Frequency Shift Keying):** two RF signals 170 Hz apart; switched between 'mark' and 'space'. Non-linear PA acceptable.

**AFSK (Audio FSK):** two audio tones (e.g. 1275 Hz / 1445 Hz) fed into the microphone socket. The audio modulates a USB or LSB carrier. The resulting RF spectrum is identical to the audio spectrum shifted up by the carrier frequency. Using the wrong sideband inverts the data. AFSK requires a **linear PA** because it uses SSB modulation.

Common digital modes and their properties:

| Mode | RF bandwidth | Type | PA class |
|---|---|---|---|
| RTTY | ~300 Hz | FSK | Class C/A |
| PSK31 | 31 Hz | Phase shift keying | Linear (Class A) |
| PSK63 | 63 Hz | PSK | Linear |
| Olivia | 500 Hz–2 kHz | MFSK, error-correcting | Linear |
| FT8 | 50 Hz | Digital weak signal | Linear |
| WSPR | 6 Hz | Beacon/propagation | Linear |

### Transceivers

A **transceiver** integrates transmitter and receiver in one unit. Oscillators, IF filters, and certain amplifier stages are **shared** between the transmit and receive paths:

<!-- VISUAL: section-7-fig7.21 — 20m SSB transceiver block diagram: antenna → PA (on TX) / RF amp (on RX) → Buffer amp; PLL (8–8.35MHz) → Mixer; Mixer ↔ 14–14.35MHz (antenna side) and 6MHz (IF side); IF filter (6MHz); on RX: product detector → audio amp; crystal osc (6MHz); on TX: 6MHz amp → balanced modulator; mic amp → balanced modulator. T/R changeover at antenna. -->

**On receive:** antenna → RF amp → mixer (with PLL) → 6 MHz IF filter → product detector (with 6 MHz carrier injection) → audio amplifier.

**On transmit:** microphone → audio amp → balanced modulator (with 6 MHz crystal carrier) → 6 MHz sideband filter → 6 MHz amplifier → mixer (with PLL) → PA → antenna.

The **T/R (transmit/receive) changeover relay** switches the antenna between PA output and RF amplifier input. On CW it is operated by the key; on SSB/FM/data by the PTT.

**RIT (Receiver Incremental Tuning):** allows the receive frequency to be offset from the transmit frequency by a small amount (typically ±3–10 kHz). Useful in SSB nets where stations on slightly different frequencies cause tonal differences — you can tune your received audio without moving your transmit frequency and disrupting the whole net.

---

## §7 — Self-Check Questions

**Q1.** Why is the modulation stage of a multi-mode transmitter usually performed at a low IF rather than at the final transmit frequency?
<details><summary>Answer</summary>
Crystal filters for removing the unwanted SSB sideband are much more practical at low frequencies — at 6 MHz, 600 Hz represents a proportionally larger separation than at 144 MHz. Also, the modulated signal must be mixed (not multiplied) to the final frequency, and mixing is straightforward to implement.
</details>

**Q2.** Describe the function of the balanced modulator in SSB generation.
<details><summary>Answer</summary>
The balanced modulator (diode ring circuit) combines the audio and RF carrier signals to produce a double-sideband suppressed-carrier (DSB-SC) output. The carrier is cancelled by the symmetry of the ring; only both sidebands appear at the output. The crystal filter then removes one sideband to leave a single-sideband signal.
</details>

**Q3.** State Carson's Rule and calculate the RF bandwidth required for 70cm FM amateur use (peak deviation ±5 kHz, maximum audio 3 kHz).
<details><summary>Answer</summary>
Carson's Rule: BW = 2 × (max audio frequency + peak deviation) = 2 × (3 + 5) = **16 kHz**.
</details>

**Q4.** A PLL synthesiser uses a 10 MHz crystal reference divided by 10,000 to produce a 1 kHz reference. The VCO output is divided by N. If N = 144,500, what is the output frequency?
<details><summary>Answer</summary>
f<sub>out</sub> = f<sub>crystal</sub> × N/A = 10 MHz × 144,500 / 10,000 = **144.500 MHz**. Step size = 1 kHz (the reference frequency).
</details>

**Q5.** Why can an SSB signal not be frequency-multiplied to reach the final transmit frequency?
<details><summary>Answer</summary>
Frequency multiplication scales all frequencies present by the multiplication factor — this includes the audio sideband frequencies. The audio components would be multiplied along with the carrier, distorting the voice pitch and making the transmission unintelligible. SSB must be mixed to the final frequency instead.
</details>

**Q6.** A 100 W PEP SSB transmitter has a typical voice peak-to-average ratio of 20:1. What is the approximate average power on voice, and what happens to average power when a speech processor halves the peak amplitude?
<details><summary>Answer</summary>
Average power = 100 / 20 = **5 W**. Halving the peak amplitude while maintaining the same PEP limit doubles the average power to approximately **10 W**.
</details>

**Q7.** What is the definition of Peak Envelope Power (PEP)?
<details><summary>Answer</summary>
PEP is the average RF power over one complete RF cycle measured at the crest of the modulation envelope — i.e. at the highest-amplitude peak of the signal.
</details>

**Q8.** Explain why FM and CW transmitters can use Class C PA stages but SSB transmitters cannot.
<details><summary>Answer</summary>
FM has a constant-amplitude envelope — the PA only needs to reproduce frequency variation, not amplitude variation. CW amplitude is simply on or off. Class C can handle both without distortion of the information. SSB encodes information in amplitude variations; a non-linear Class C stage would generate intermodulation products that distort the voice and spread the signal across adjacent frequencies.
</details>

**Q9.** What is the purpose of the ALC circuit and what fault condition does over-driving the PA cause?
<details><summary>Answer</summary>
ALC (Automatic Level Control) monitors PA output and reduces the drive if power exceeds a set level, preventing over-drive. Over-driving causes the PA to operate non-linearly, generating intermodulation distortion (IMD) products that appear as splatter on adjacent frequencies — potentially several kHz either side of the intended signal — and may damage the output transistors.
</details>

**Q10.** What is RIT on a transceiver and when is it useful?
<details><summary>Answer</summary>
RIT (Receiver Incremental Tuning) allows the receive frequency to be offset from the transmit frequency without altering the transmit frequency. It is useful when operating on an SSB net where other stations are on slightly different frequencies, allowing you to optimise received audio quality without disrupting others' transmit frequencies.
</details>

---

## Suggested Interactives for RFH-Interactives

- **PLL lock/unlock visualiser** — reference, VCO, and comparator waveforms; step through frequency change to show lock acquisition.
- **SSB generation block diagram** — click each block to see the signal at that point (spectrum or waveform view).
- **Carson's Rule calculator** — sliders for deviation and max audio; live BW output.
- **PA load-line interactive** — Class A, B, C operating points on I<sub>C</sub>–V<sub>CE</sub> characteristics; efficiency vs output power visualisation.
- **ALC / PEP meter simulator** — voice waveform input; show difference between average and peak power; speech processor effect.

---

*Source: RSGB Full Licence Manual, 3rd Edition (Alan Betts G0HIQ), Chapter 7, pp. 41–50. Syllabus v1.6 Feb 2024.*
