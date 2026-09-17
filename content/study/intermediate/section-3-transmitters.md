# Section 3: Transmitters & Receivers

<!-- Exam weight: 7/46 questions (~15%) -->
<!-- Sub-sections: 3A, 3B, 3C, 3E, 3F, 3G, 3H, 3I, 3K, 3L, 3M -->
<!-- Syllabus refs: 3A2-3, 3B1, 3C1-3, 3E1-3, 3F1-2, 3G2-5, 3H2-4, 3I1-3, 3K1, 3L1, 3M1-3 -->

This section covers how radios work inside — receivers, transmitters, and transceivers.
Most questions are about block diagrams, how specific stages function, and why certain
design choices are made.

---

## 3A: The Superheterodyne Receiver

### 3A Theory — Why Superhet? (3A2)

A **crystal diode receiver** (simple detector) can receive signals but has very limited
selectivity. At low frequencies this is acceptable. Above about 3 MHz, signals are
too close together and the receiver cannot separate them.

The **superheterodyne (superhet)** design solves this by converting all incoming signals
to a single fixed **intermediate frequency (IF)** before filtering and detection.
Filtering at a fixed frequency is much easier to do well than filtering at hundreds of
different RF frequencies.

> [INFO] **3I1:** A crystal diode receiver does not have adequate selectivity at higher
> frequencies. A superhet architecture is needed above a few MHz.

### 3A Theory — Superhet Block Diagram (3A3)

The superhet receive chain in order:

<img src="/assets/images/study/section-3/fig-3-1-superhet-rx-block.svg" alt="Superheterodyne receiver block diagram showing signal chain from antenna through RF Amp, Mixer, IF Amp, Detector and AF Amp to speaker, with Local Oscillator feeding the Mixer" width="700" height="220" loading="lazy">

**Each stage explained:**

1. **RF Amplifier:** Boosts the weak incoming signal. Selects a range of frequencies
   including the wanted signal. Helps set the noise figure of the receiver.

2. **Mixer:** Combines the RF signal with the local oscillator (LO) signal.
   Produces the IF by taking the difference (or sum) of the two frequencies.

3. **Local Oscillator (LO):** Generates a stable signal. The LO frequency is set so
   that `LO - RF = IF` (or `RF - LO = IF` depending on design).

4. **IF Amplifier:** Amplifies the signal at the fixed IF. The IF filter here sets
   the selectivity of the receiver. Because IF is fixed, this filter can be very precise.

5. **Detector:** Extracts the audio (or data) from the IF signal. The type of detector
   depends on the mode (AM, SSB, FM, CW).

6. **AF Amplifier:** Amplifies the audio signal to a useful level for headphones or speaker.

> [INFO] **3I3:** The RF amplifier in a superhet **selects a range of signals including
> the wanted signal.** It does not do the final selectivity — that is the IF filter's job.

### 3A Theory — Image Frequency and Rejection (3A2, 3I2)

The mixer responds to two RF frequencies that both produce the same IF:
- The **wanted signal:** `f_RF`
- The **image frequency:** `f_RF + 2 × IF` (or `f_RF − 2 × IF`)

**Example:** IF = 455 kHz, wanted signal at 7.100 MHz.
LO = 7.100 + 0.455 = 7.555 MHz.
Image = 7.555 + 0.455 = **8.010 MHz** — a signal here also mixes down to 455 kHz.

To reject the image, the RF amplifier's filter must attenuate signals at the image frequency.
Using a **higher IF** makes the image further away from the wanted signal, making it easier
to filter out.

> [INFO] **3I2:** Image rejection is improved by using a **high IF**. The image falls
> further from the wanted signal and is more easily removed by the RF filter.

**IF transformers** in a superhet are often enclosed in aluminium screening cans.
This prevents unwanted coupling between stages — without screening, the high-gain IF
amplifier could pick up its own output and oscillate.

> [INFO] **3I2:** IF transformers are screened in aluminium cans to **prevent unwanted
> coupling between stages**.

### 3A Self-Check Questions

**Q1.** In a superhet receiver, what is the purpose of the local oscillator?
<details><summary>Answer</summary>

The LO generates a signal that is mixed with the incoming RF. The difference between
the RF and LO frequencies produces the intermediate frequency (IF).
</details>

**Q2.** A receiver has an IF of 10.7 MHz. A wanted signal arrives at 145.000 MHz.
What is the image frequency?
<details><summary>Answer</summary>

LO = 145.000 + 10.700 = 155.700 MHz.
Image = 155.700 + 10.700 = **166.400 MHz**.
</details>

**Q3.** Why are IF transformers enclosed in metal screening cans?
<details><summary>Answer</summary>

To prevent unwanted coupling between the high-gain IF stages, which could cause
oscillation or reduced performance.
</details>

**Q4.** Why does a superhet receiver have better selectivity than a crystal diode receiver?
<details><summary>Answer</summary>

The superhet converts all received signals to a fixed IF. A high-quality fixed filter
at the IF can provide precise, narrow selectivity. A diode receiver filters at the
received frequency, which is much harder to do at HF.
</details>

**Q5.** How is image rejection improved in a superhet?
<details><summary>Answer</summary>

By using a **higher IF**. This places the image frequency further away from the wanted
signal, making it easier to attenuate with the RF filter.
</details>

---

## 3B: Mixers

### 3B Theory — How a Mixer Works (3B1)

A **mixer** is a non-linear device that combines two input signals and produces
output frequencies that include their sum and difference:

```
Output frequencies = f_RF ± f_LO
```

In a superhet, the difference (or sum) is selected by the IF filter. The unwanted
product is rejected.

**Types of mixer:**
- **Diode ring (double balanced) mixer:** uses four diodes in a bridge. Suppresses
  both input frequencies at the output. Good isolation between ports.
- **Active mixer (e.g. Gilbert cell):** uses transistors. Can provide conversion gain.

**Mixing products:** A real mixer also produces harmonics and intermodulation products
(3rd order, etc.). Strong out-of-band signals can mix to produce interference — this
is why receiver **dynamic range** matters.

> [INFO] **3B1:** A mixer combines the RF and LO signals to produce the IF. The IF is
> typically the difference frequency: IF = |f_RF − f_LO|.

---

## 3C: Receiver Characteristics

### 3C Theory — Sensitivity (3C1)

**Sensitivity** is a measure of how weak a signal the receiver can detect usefully.

It is affected by:
- The **noise figure** of the RF amplifier (lower = better)
- The **bandwidth** of the IF filter (narrower = less noise = more sensitive)

A sensitive receiver can detect signals only slightly above the noise floor.

> [INFO] **3I (D2F-M2-Q34):** Sensitivity is the receiver's ability to receive weak
> signals that are only a little stronger than the natural RF noise.

**Noise figure (NF):** describes how much noise the receiver itself adds. Measured in dB.
A lower NF = less added noise = better sensitivity.

> [WARNING] **3K1 (D2F-M1-Q36):** Adding an RF preamplifier does not always improve
> performance. If the preamplifier's own noise is similar to or worse than the receiver's
> noise, it will degrade the overall noise figure. A 10 dB gain preamp with 0.1 μV
> internal noise added to a receiver with 0.1 μV noise makes things **worse**, not better.

### 3C Theory — Selectivity (3C2)

**Selectivity** is the ability to receive one signal while rejecting others nearby.
It depends on the IF filter bandwidth and Q factor.

- **High Q, narrow bandwidth → high selectivity** (can pick out one signal in a crowded band)
- **Low Q, wide bandwidth → low selectivity** (nearby signals interfere)

> [INFO] **3H4 / 3I (D2F-M1-Q34):** A highly selective receiver has a **high Q-factor
> and narrow bandwidth.** If the tuning sections have low Q, adjacent signals are more
> likely to interfere with the wanted signal.

### 3C Theory — Oscillator Drift and Stability (3C3)

An oscillator that drifts in frequency causes the received signal to wander off.
In a transmitter, drift causes the output to move out of band.

**Example:** An LC oscillator specified at 0.1% maximum drift, used on 10 MHz.
```
Max drift = 10 000 kHz × 0.001 = 10 kHz
```
The transmitter output could move 10 kHz away from the set frequency. On a band from
10.100 to 10.150 MHz, a transmission below 10.110 MHz (10.100 + 10 kHz margin) could
drift out of band.

> [INFO] **3C3:** Oscillator drift of 0.1% at 10 MHz = 10 kHz maximum drift. A CW signal
> set near the band edge could drift out of band.

### 3C Theory — Dynamic Range (3C1–3C2)

**Dynamic range** is the range of signal strengths the receiver can handle usefully —
from the noise floor (weakest detectable signal) up to the level where the receiver
distorts or overloads.

Poor dynamic range causes **intermodulation distortion (IMD):** strong signals mixing
in the receiver's own circuits to produce spurious signals at other frequencies.

> [INFO] A receiver with good dynamic range can be used on a busy band without strong
> nearby signals causing false signals or blocking.

### 3C Theory — Unwanted Emissions from a Transmitter

A transmitter radiating on multiple bands simultaneously has a problem — usually:
- **Harmonics** present in the output (multiples of the fundamental)
- **Mixer products** not fully filtered at the transmitter output

**Remedy:** Fit a **low-pass filter** at the transmitter output. This passes the
fundamental frequency and attenuates harmonics above it.

> [INFO] **3C (D2F-M2-Q36):** A transmitter radiating on other amateur bands should have
> a **low-pass filter** fitted at the output to attenuate harmonics.

### 3C Self-Check Questions

**Q1.** What does receiver sensitivity describe?
<details><summary>Answer</summary>

The ability to receive weak signals that are only slightly stronger than the noise floor.
</details>

**Q2.** A highly selective receiver has which two characteristics?
<details><summary>Answer</summary>

**High Q-factor** and **narrow bandwidth.** These allow it to separate closely spaced signals.
</details>

**Q3.** A transmitter is found to radiate on harmonics above its fundamental frequency.
What is the simplest fix?
<details><summary>Answer</summary>

Fit a **low-pass filter** at the transmitter antenna output. It passes the fundamental
and attenuates harmonics.
</details>

**Q4.** An LC oscillator has a quoted drift of 0.05% and is used at 28 MHz.
What is the maximum frequency drift?
<details><summary>Answer</summary>

28 000 × 0.0005 = **14 kHz**
</details>

**Q5.** Why can adding a preamplifier sometimes make reception worse?
<details><summary>Answer</summary>

If the preamplifier's own internal noise is high, it adds more noise to the signal than
gain. The overall noise figure of the preamp + receiver combination worsens.
</details>

---

## 3E: CW and SSB Transmitters

### 3E Theory — Amplitude Modulation (AM) Review (3F1)

**AM (Amplitude Modulation):** the carrier amplitude varies with the audio signal.
The output contains:
- The carrier
- An upper sideband (USB)
- A lower sideband (LSB)

AM bandwidth ≈ 2 × highest audio frequency. A 3 kHz audio signal produces 6 kHz AM bandwidth.

### 3E Theory — Single Sideband (SSB) (3E1, 3E2, 3F2)

**SSB** transmits only one sideband. The carrier and the other sideband are removed.
This gives:
- Half the bandwidth of AM (only one sideband = 3 kHz for 3 kHz audio)
- No power wasted in the carrier
- All power in the useful sideband

**Bandwidth comparison (largest to smallest):**

| Mode | Typical bandwidth |
|------|------------------|
| AM | ~6 kHz |
| SSB | ~3 kHz |
| FM (voice) | 16 kHz (with 5 kHz deviation) |
| CW | ~500 Hz – 1 kHz |
| FT8 | ~50 Hz |

> [INFO] **3E1 / 3E2:** In decreasing order of bandwidth: **AM, SSB, CW.** (FM is wider
> than AM but is less commonly compared in this context.)

**SSB transmitter block diagram:**

<img src="/assets/images/study/section-3/fig-3-2-ssb-tx-block.svg" alt="SSB transmitter block diagram showing signal chain from microphone through AF Amp, Balanced Modulator, SSB Filter, Mixer and PA to antenna, with VFO/PLL Oscillator feeding the Mixer" width="700" height="220" loading="lazy">

**Balanced modulator:** produces a double-sideband suppressed-carrier (DSB-SC) signal.
Both sidebands are present, but the carrier is suppressed (cancelled by the balanced
circuit design).

> [INFO] **3E1:** The output of a balanced modulator contains **two sidebands but with
> the carrier suppressed.** This is DSB-SC — double sideband suppressed carrier.

**SSB filter (3E2):** removes one of the two sidebands from the balanced modulator output.
A **crystal filter** is typically used — its very narrow, precise passband removes the
unwanted sideband cleanly.

> [INFO] **3E (RF-Hub Q14):** In an SSB transmitter, the unwanted sideband is removed
> by a **crystal filter**.

**In a modern transceiver**, the SSB filter is often shared between transmit and receive
paths. In receive, it selects the IF passband. In transmit, it removes the unwanted sideband.

> [INFO] **3M (D2F-M1-Q39):** In a modern transceiver, the **SSB filter** is typically
> shared between transmit and receive circuits.

### 3E Theory — CW Transmitters (3K1)

A **CW (continuous wave)** transmitter is simpler than an SSB transmitter:
- A keyed oscillator produces RF at the transmit frequency
- The key on/off shapes the envelope of the signal

**CW waveform:** the transitions between key-on and key-off should be **shaped** (with
a slight rise and fall time). This is "key shaping" or "keying envelope shaping."

- Hard keying (instant on/off) produces **key clicks** — interference on adjacent frequencies
- Shaped keying produces a clean, click-free signal

> [INFO] **3H (D2F-M1-Q33):** The most desirable CW transmitted signal has shaped
> (soft) rise and fall times — not an abrupt square wave. This minimises key clicks.

**CW demodulation:** requires a **Beat Frequency Oscillator (BFO).**

In SSB/AM receive, the detector reconstructs audio from the IF. For CW, there is only
a carrier — no audio. The BFO injects a signal close to the IF, producing a difference
frequency in the audio range:

```
Audio tone = |IF - BFO frequency|
```

**Example:** CW on 10.000 MHz, IF = 600 kHz.
To receive: LO = 10.000 + 0.600 = 10.600 MHz.
The CW signal appears at exactly 600 kHz in the IF.
BFO at 599.3 kHz produces: 600.0 - 599.3 = **0.7 kHz = 700 Hz** audio tone.

> [INFO] **3K1:** The demodulator for a CW receiver requires a **beat frequency oscillator
> (BFO).** A BFO frequency of 599.3 kHz with a 600 kHz IF gives a 700 Hz audio tone.

### 3E Self-Check Questions

**Q1.** What does a balanced modulator produce?
<details><summary>Answer</summary>

**Two sidebands with the carrier suppressed** (DSB-SC — double sideband suppressed carrier).
</details>

**Q2.** In an SSB transmitter, what component removes the unwanted sideband?
<details><summary>Answer</summary>

A **crystal filter.** Its narrow, precise passband passes one sideband and rejects the other.
</details>

**Q3.** Why is a BFO needed for CW reception?
<details><summary>Answer</summary>

A CW signal has no audio component — it is just a carrier switched on and off. The BFO
injects a signal close to the IF, producing an audible tone equal to the frequency difference.
</details>

**Q4.** List these modes in decreasing order of bandwidth: CW, SSB, AM.
<details><summary>Answer</summary>

**AM, SSB, CW.** AM is widest (~6 kHz), SSB narrower (~3 kHz), CW narrowest (~500 Hz).
</details>

**Q5.** What causes "key clicks" in CW transmission, and how are they prevented?
<details><summary>Answer</summary>

Hard (instant) keying produces sharp edges on the waveform, which spread energy across
adjacent frequencies as key clicks. **Shaped keying** with a controlled rise and fall time
prevents this.
</details>

---

## 3F: Modulation

### 3F Theory — Types of Modulation (3F1, 3F2)

**Modulation** is the process of varying a carrier wave to carry information.

| Type | What varies | Typical use |
|------|------------|-------------|
| AM (Amplitude Modulation) | Carrier amplitude | BC, AM voice |
| FM (Frequency Modulation) | Carrier frequency | VHF/UHF voice |
| PM (Phase Modulation) | Carrier phase | Data, some digital modes |
| SSB | Amplitude (one sideband only) | HF voice |
| CW | Amplitude (keyed on/off) | Morse code |

**Modulation index (m):**
- For AM: m = peak modulating voltage / carrier voltage (100% modulation = m = 1)
- For FM: m (or β) = peak deviation / modulating frequency

Overmodulation in AM causes **splatter** — distortion sidebands spread beyond the
intended bandwidth and interfere with adjacent channels.

> [INFO] **3F1:** Know the common modulation types. FM uses frequency variation;
> AM uses amplitude variation; SSB is AM with carrier and one sideband removed.

---

## 3G: FM Transmitters and Receivers

### 3G Theory — Frequency Modulation (3A2, 3G2, 3G3)

In **FM**, the carrier frequency varies proportionally with the audio signal amplitude.
The carrier amplitude stays constant.

- **Centre frequency:** the unmodulated carrier frequency
- **Peak deviation (Δf):** the maximum change from centre frequency.
  This occurs at the amplitude peaks of the modulating signal.
- **Modulation index (β):** β = Δf / f_mod (deviation divided by modulating frequency)

> [INFO] **3A2:** Peak deviation is the **maximum change from the centre frequency**,
> occurring at the amplitude peaks of the modulating audio signal.

#### FM bandwidth — Carson's Rule (3G4)

The bandwidth of an FM signal is approximately:

```
BW ≈ 2 × (Δf + f_max)
```

Where Δf = peak deviation and f_max = highest audio frequency.

**Example:** Deviation = 5 kHz, highest audio = 3 kHz.
```
BW ≈ 2 × (5 + 3) = 2 × 8 = 16 kHz
```

> [INFO] **3G4 / 3E (D2F-NEW-024):** Carson's rule: BW ≈ 2(deviation + max audio).
> With 5 kHz deviation and 3 kHz audio: BW ≈ 16 kHz.

#### FM Capture Effect (3G4)

When two FM signals arrive on the same frequency simultaneously, an FM receiver does not hear both equally — it **locks onto the stronger signal and largely suppresses the weaker one**. This is the **FM capture effect**.

For capture to occur, the stronger signal typically needs to be at least 6 dB above the weaker one. If two signals are nearly equal in strength, the receiver may switch between them ("threshold flutter") rather than capturing one cleanly.

This is a property unique to FM — AM and SSB receivers do not behave this way. AM and SSB simply add the two signals together, producing a mixed output. FM captures one.

**Amateur radio consequence:** On VHF/UHF FM, two stations transmitting simultaneously on the same frequency will result in listeners hearing only the stronger signal. This is why simplex calling on 145.500 MHz uses a single calling convention — whoever transmits last, louder, or with better propagation to the receiving station "wins" the capture.

> [INFO] **3G4:** The FM capture effect means an FM receiver **captures the stronger of two co-channel signals** and suppresses the weaker. This requires the dominant signal to be approximately 6 dB or more above the interferer. This property is unique to FM (not AM/SSB).

#### FM sidebands and modulation index (3A3)

Unlike AM (which has only two sidebands), FM produces **multiple sidebands**.
The number and amplitude of sidebands depends on the **modulation index** (β).

- Higher β → more sidebands needed to represent the signal
- As the modulating frequency decreases (while keeping deviation constant), β increases,
  and more sidebands are required

> [INFO] **3A (D2F-M1-Q29) / 3A (D2F-M2-Q35):** As the FM modulation index increases,
> the **number of sidebands required increases.** More sidebands = wider occupied bandwidth.

### 3G Theory — FM Generation (3E3)

FM can be generated by applying an audio signal to a **variable capacitance diode (varicap)**
connected to a tuned oscillator circuit. The audio signal varies the reverse bias voltage on
the varicap, which changes its capacitance, which varies the oscillator frequency.

> [INFO] **3E3:** FM is generated by applying an AF signal to a **variable capacitance diode
> connected to an oscillator circuit.** The varicap changes capacitance with voltage,
> pulling the oscillator frequency.

### 3G Theory — Harmonics (3G2)

**Harmonics** are signals at exact multiples of the fundamental frequency.

- 2nd harmonic = 2 × f
- 3rd harmonic = 3 × f
- nth harmonic = n × f

Harmonics are produced by non-linearity in amplifiers. They can cause interference on
other bands. A low-pass filter at the transmitter output suppresses them.

> [INFO] **3G2:** Harmonics are **multiples of the fundamental frequency.** A signal at
> 7 MHz produces harmonics at 14 MHz, 21 MHz, 28 MHz, etc.

### 3G Theory — Transmitter Without an Antenna (3G3)

Operating a transmitter without a connected antenna is undesirable. All the output power
has nowhere to go — it is reflected back into the transmitter's power amplifier stage.

This can:
- **Damage the PA transistors or valves** (overheating from reflected power)
- Cause high SWR, which the PA may not tolerate

Always use a dummy load if testing without an antenna.

> [INFO] **3G3:** Operating a transmitter without an antenna is undesirable because **the
> transmitter could be damaged** by the reflected power.

### 3G Theory — RTTY Duty Cycle

**RTTY (Radio Teletype)** transmits a continuous carrier at one of two frequencies.
Unlike SSB voice (where the average power is much less than peak), RTTY is at near-100%
duty cycle — the transmitter is always at full power.

A transmitter designed for SSB voice at 100 W peak may only be designed for:
- ~25–30 W continuous (the average power on voice)

Running RTTY at 100 W peak subjects the PA to continuous full power — the transmitter
**runs considerably hotter** and may fail.

> [WARNING] **3G (D2F-M2-Q32):** Running an SSB transmitter on RTTY at the same peak
> power level as voice will cause it to run **considerably hotter.** Reduce power when
> operating continuous-carrier modes (RTTY, FM, SSTV).

### 3G Self-Check Questions

**Q1.** What is peak deviation in FM?
<details><summary>Answer</summary>

The **maximum change in frequency from the centre frequency**, occurring at the amplitude
peaks of the modulating signal.
</details>

**Q2.** An FM station uses 2.5 kHz deviation and a maximum audio frequency of 3 kHz.
What is the approximate bandwidth using Carson's rule?
<details><summary>Answer</summary>

BW ≈ 2 × (2.5 + 3) = 2 × 5.5 = **11 kHz**
</details>

**Q3.** A 14 MHz transmitter produces a harmonic that falls in the 10 m band (28 MHz).
Which harmonic is this?
<details><summary>Answer</summary>

28 / 14 = 2. This is the **2nd harmonic.**
</details>

**Q4.** Why should you not key a transmitter without an antenna connected?
<details><summary>Answer</summary>

The RF output has nowhere to go and is reflected back into the PA. This can **damage
the transmitter.**
</details>

**Q5.** An FM signal has modulation index β = 5. If the modulation index doubles to 10,
what happens to the number of sidebands?
<details><summary>Answer</summary>

The number of sidebands **increases** — a higher modulation index requires more sidebands
to accurately represent the FM signal.
</details>

---

## 3H: Digital Modes

### 3H Theory — Overview of Digital Modes (3H2, 3H3)

Digital modes encode audio or data as binary information before transmission.

| Mode | Bandwidth | Use | Notes |
|------|-----------|-----|-------|
| **FT8** | ~50 Hz | Weak signal DX | 15-second transmit cycles |
| **FT4** | ~90 Hz | Contest weak signal | 7.5-second cycles |
| **JT65** | ~180 Hz | EME, weak signal | Slow |
| **WSPR** | ~6 Hz | Propagation beacons | Very weak signal |
| **PSK31** | ~31 Hz | Chat, HF | Narrow, keyboard-speed |
| **RTTY** | ~500 Hz | Traditional teletype | FSK, older standard |
| **SSTV** | ~2 kHz | Slow scan TV | Images over voice bandwidth |

> [INFO] **3H2 / 3H3:** Digital modes use narrow bandwidths and error-correction to operate
> at signal levels well below what voice modes need. FT8 works with signals up to 20–25 dB
> below noise floor (after averaging over the 15-second window).

### 3H Theory — Receiver for Digital Modes

Digital modes require the receiver to:
- Pass audio (usually 100 Hz – 3 kHz) to a sound card or internal DSP
- The software decodes the mode — not the hardware

For most digital modes, the receiver is set up exactly as for SSB. The audio output is fed
to a PC. Dedicated software (WSJT-X for FT8/WSPR, FLDIGI for many others) decodes the signal.

> [INFO] **3H (RF-Hub Q15):** The IF in a superhet receiver is a **fixed frequency lower
> than the received signal.** It is where the selectivity filter and detector operate.

### 3H Theory — Receiver Block Diagram Stages

A standard analogue superhet receiver has these stages in order:

1. RF Amplifier
2. Mixer + LO
3. IF Amplifier + IF Filter
4. **Detector** ← this is the stage that demodulates
5. AF Amplifier

In a block diagram exam question, the detector comes **after** the IF amplifier and
**before** the audio amplifier.

> [INFO] **3H2 (D2F-M1-Q33):** In a receiver block diagram, the detector block is inserted
> between the IF amplifier and the AF amplifier.

### 3H Self-Check Questions

**Q1.** Which digital mode uses the narrowest bandwidth?
<details><summary>Answer</summary>

**WSPR** (~6 Hz) is the narrowest. FT8 (~50 Hz) is also very narrow. PSK31 is ~31 Hz.
</details>

**Q2.** Where in the superhet block diagram is the detector placed?
<details><summary>Answer</summary>

After the IF amplifier, before the AF amplifier.
</details>

**Q3.** Why can FT8 decode signals well below the noise floor?
<details><summary>Answer</summary>

FT8 uses a 15-second transmission window with error-correcting coding. The software
integrates and averages the signal over the full window, extracting it from the noise.
</details>

**Q4.** What is the main difference between RTTY and PSK31?
<details><summary>Answer</summary>

RTTY uses **FSK** (frequency shift keying) — two separate frequencies. PSK31 uses
**phase shift keying** (PSK) — the phase of the carrier changes. PSK31 is also much
narrower (31 Hz vs ~500 Hz for RTTY).
</details>

**Q5.** How does a software-defined radio (SDR) receive digital modes differently from
a traditional superhet?
<details><summary>Answer</summary>

An SDR digitises a wide chunk of spectrum early in the receive chain. All filtering,
demodulation, and decoding is done in software. A superhet uses hardware stages for
IF filtering and detection.
</details>

---

## 3I: Transceivers

### 3I Theory — Transceiver Architecture (3I1, 3I2)

A **transceiver** combines a transmitter and receiver in one unit. They share circuits
where possible to reduce cost, size, and complexity.

**Circuits typically shared:**
- VFO or PLL (sets the operating frequency for both TX and RX)
- SSB filter (used for both IF selectivity on RX and sideband selection on TX)
- PA/driver stages (some sharing in final stages)

**TX/RX switching:** When transmitting, an antenna relay (or PIN diode switch) connects
the PA to the antenna and disconnects the receiver input. This protects the sensitive
receiver front end from the high transmit power.

> [INFO] **3I1:** In a transceiver, TX/RX switching connects the antenna to either the
> PA (TX) or the RF amplifier (RX). The SSB filter is typically shared.

### 3I Theory — VFO and PLL (3M2, 3M3)

**VFO (Variable Frequency Oscillator):**
- A manually tunable oscillator
- The main advantage: **frequency can be changed** freely across the band
- Disadvantage: may drift, especially as it warms up

> [INFO] **3C1:** The main advantage of a VFO is that its **frequency can be changed.**
> Fixed crystals only work on one frequency.

**PLL (Phase Locked Loop):** (3A — RF-Hub Q13)
A PLL synthesises frequencies from a reference oscillator (usually crystal-controlled).
It generates stable, precise frequencies across a wide range.

> [INFO] **3A (RF-Hub Q13):** PLL stands for **Phase Locked Loop.** It is used in
> frequency synthesisers to generate stable, tunable frequencies.

**How a PLL works (simplified):**
1. A **voltage-controlled oscillator (VCO)** generates the output frequency
2. A **divider** divides the VCO frequency by N
3. A **phase detector** compares the divided VCO to the reference crystal oscillator
4. The error voltage steers the VCO until they are locked in phase
5. Changing N changes the output frequency in precise steps

Most modern HF transceivers use a PLL synthesiser or DDS (direct digital synthesis)
rather than a free-running VFO.

### 3I Theory — Transverters (3M3)

A **transverter** converts a transceiver's frequency range to a different band.

**Example:** A transceiver covering 1.8–30 MHz is used with an 80 MHz LO transverter
to operate on the 6 m band (50 MHz):

```
TX: 28 MHz transceiver output + 22 MHz oscillator = 50 MHz output  (example values)
RX: 50 MHz antenna signal − 22 MHz oscillator = 28 MHz to receiver
```

**Sideband reversal:** If the LO is above the output frequency, tuning higher on the
transceiver produces lower frequency on the output. The sidebands are also reversed
(USB becomes LSB). Most modern radios compensate for this automatically.

> [INFO] **3M (D2F-M1-Q39):** To use a 1.8–30 MHz transceiver on 144 MHz, use a
> **transverter** with an appropriate local oscillator.

### 3I Self-Check Questions

**Q1.** What is the main advantage of using a PLL synthesiser instead of a free-running VFO?
<details><summary>Answer</summary>

A PLL synthesiser locks to a crystal reference, giving **frequency stability** comparable
to the crystal. It can also generate many precise frequencies across a wide range.
</details>

**Q2.** Which circuit is typically shared between the transmit and receive paths in a
modern SSB transceiver?
<details><summary>Answer</summary>

The **SSB filter.** On receive it sets IF selectivity; on transmit it removes the unwanted
sideband.
</details>

**Q3.** What does a transverter do?
<details><summary>Answer</summary>

Converts a transceiver's frequency range to a different (usually higher) band by mixing
with a local oscillator.
</details>

**Q4.** Why is TX/RX switching necessary in a transceiver?
<details><summary>Answer</summary>

To connect the antenna to the PA during transmit and to the receiver RF input during
receive. Without switching, the high transmit power would damage the sensitive receiver.
</details>

**Q5.** PLL stands for what, and what does it do in a transceiver?
<details><summary>Answer</summary>

**Phase Locked Loop.** It synthesises stable, precise frequencies by locking a
voltage-controlled oscillator to a crystal reference oscillator.
</details>

---

## 3K: Filters and AGC

### 3K Theory — Filter Types (3K1, 3G3)

Filters select or reject signals based on frequency.

| Filter type | What it passes | Typical use |
|-------------|----------------|------------|
| Low-pass | Frequencies below cut-off | Harmonic suppression at TX output |
| High-pass | Frequencies above cut-off | Block mains hum, subsonic interference |
| Band-pass | Frequencies in a range | IF filter, RF preselector |
| Band-stop (notch) | All except a narrow range | Interference rejection |

> [INFO] **3G3 (D2F-M1-Q32 and 3C):** Fit a **low-pass filter** at the transmitter output
> to suppress harmonics. The fundamental passes; harmonics above it are attenuated.

**Crystal filters:** used as IF filters in superhets. Very narrow bandwidth, extremely
steep skirts. A 2.4 kHz crystal filter is typical for SSB; a 500 Hz filter for CW.

**Ceramic filters:** similar function, lower cost, slightly less ideal performance.

**Band-pass filter example:**

> [INFO] **3G3 (3G3-2025):** A band-pass filter passes a range of frequencies and
> attenuates those outside. On a frequency/amplitude diagram, this looks like a
> hump with steep sides — flat in the pass-band, attenuated outside.

### 3K Theory — AGC (Automatic Gain Control) (3H3, 3H4)

**AGC** automatically reduces the IF or RF gain when a strong signal is received.
This keeps the audio output at a roughly constant level across a wide range of signal
strengths.

**AGC attack time:** how quickly the AGC responds to a sudden strong signal.
- **Fast attack:** the gain reduces quickly when a sudden strong signal arrives.
  Benefit: prevents a loud burst on SSB from being painful. Useful on crowded bands.
- **Slow attack / slow release:** smoother, but a sudden strong signal can momentarily
  produce a very loud output before the AGC catches it.

> [INFO] **3K1 (D2F-M1-Q37):** One advantage of a **fast attack** AGC is that a sudden
> large RF signal on SSB will **not result in an overly loud audio output.** The gain
> reduces quickly before the audio can reach a painful level.

### 3K Self-Check Questions

**Q1.** A transmitter produces harmonics at 21 MHz and 28 MHz. The fundamental is at 7 MHz.
What filter should be fitted to suppress the harmonics?
<details><summary>Answer</summary>

A **low-pass filter** with a cut-off above 7 MHz but below 14 MHz. This passes the 7 MHz
fundamental and attenuates the 21 MHz and 28 MHz harmonics.
</details>

**Q2.** What is the IF filter's job in a superhet receiver?
<details><summary>Answer</summary>

It sets the **selectivity** — the bandwidth of signals passed from the IF to the detector.
It rejects adjacent-channel interference.
</details>

**Q3.** What is the advantage of a fast-attack AGC in an SSB receiver?
<details><summary>Answer</summary>

It reduces gain rapidly when a sudden strong signal arrives, preventing a painfully loud
burst of audio before the AGC settles.
</details>

**Q4.** A CW receiver has an IF of 455 kHz and a BFO set to 454 kHz.
What audio tone will be heard?
<details><summary>Answer</summary>

|455 − 454| = **1 kHz** (1 000 Hz) tone.
</details>

**Q5.** What is the difference between a band-pass and a low-pass filter?
<details><summary>Answer</summary>

A **low-pass filter** passes all frequencies below the cut-off and attenuates above.
A **band-pass filter** passes a specific range of frequencies (between two cut-offs)
and attenuates both above and below.
</details>

---

## 3L: Digital Signal Processing (DSP)

### 3L Theory — DSP in Modern Receivers (3L1)

**DSP (Digital Signal Processing)** replaces analogue IF and AF stages with software.

A DSP-based receiver:
1. Digitises the IF signal with an ADC
2. Processes the digital samples in software (filtering, demodulation, noise reduction)
3. Converts back to audio with a DAC

**Advantages of DSP:**
- Filters can be changed in software (bandwidth, shape)
- Multiple simultaneous demodulation paths
- Noise reduction algorithms
- No component drift
- Precise, repeatable performance

**SDR (Software Defined Radio)** takes DSP to an extreme — the ADC is placed very early
in the receive chain (sometimes directly after the antenna), and all processing is in
software.

> [INFO] **3M (3M3-2025):** In an SDR receiver block diagram, the blank box after the
> analogue front end typically performs **low-pass filtering** — to remove aliased signals
> before or after digitising (anti-aliasing filter or decimation filter).

### 3L Theory — Fourier Transform and Spectrum Display

A **spectrum display** shows signal amplitude vs frequency in real time.

It is produced by performing a **Fourier transform** on the time-domain signal.
The Fourier transform decomposes a complex waveform into its constituent frequencies.

> [INFO] **3M1 (D2F-M1-Q38 → 3M1-2025):** A spectrum display is produced by a **Fourier
> transform process** within the receiver. Time-domain samples are converted to a
> frequency-domain representation.

A **waterfall display** shows frequency vs time, with amplitude coded as colour.
This makes it easy to spot signals appearing and disappearing, and to see their bandwidth.

---

## 3M: Oscillators

### 3M Theory — Oscillator Types (3M1, 3M2, 3M3)

An **oscillator** generates a continuous sine wave at a specific frequency.

| Type | Stability | Typical use |
|------|-----------|------------|
| LC oscillator | Poor–moderate | Simple VFO, test equipment |
| Crystal oscillator | Excellent | Reference, fixed frequencies |
| PLL synthesiser | Excellent (locked to crystal) | Modern transceiver VFO |
| DDS (Direct Digital Synthesis) | Excellent | SDR, modern rigs |

**LC oscillator:** uses a tuned LC circuit to set frequency. Cheap and tunable, but
frequency drifts with temperature.

**Crystal oscillator:** the crystal's mechanical resonance is very stable. Drift is
measured in parts per million (ppm). Can be temperature-compensated (TCXO) or
oven-controlled (OCXO) for even better stability.

### 3M Theory — Phase Noise (3M2)

**Phase noise** is a measure of frequency instability in an oscillator.
It describes random short-term frequency fluctuations.

Measured in **dBc/Hz** — decibels below the carrier per hertz of bandwidth.
A lower (more negative) dBc/Hz value = cleaner oscillator.

To fully specify phase noise, you must quote both:
1. The **dBc/Hz level**
2. The **frequency offset** from the carrier (e.g. −130 dBc/Hz at 1 kHz offset)

> [INFO] **3M (D2F-M2-Q33):** When quoting phase noise in dBc/Hz, you must also specify
> the **frequency offset from the carrier.** Without the offset, the figure is meaningless.

Poor phase noise causes:
- The oscillator to "spread" noise into adjacent channels
- The receiver's noise floor to rise for signals near strong carriers ("reciprocal mixing")

### 3M Theory — Reading Frequency Domain Graphs

A **frequency domain graph** (spectrum plot) shows:
- X-axis: frequency
- Y-axis: amplitude (V or dBm)

A pure sine wave appears as a single vertical line (spike) at its frequency.

A sine wave with a harmonic appears as two spikes — the fundamental and one at 2× frequency.

**Time domain to frequency domain example:**
Waveform: 1.5 cycles in 1.5 μs → T = 1 μs → f = **1 MHz**.
The frequency domain shows a single spike at 1 MHz.

> [INFO] **3M (D2F-M2-Q37):** Be able to identify the correct frequency domain graph for
> a given time-domain waveform. Use f = 1/T to find the frequency.

### 3M Theory — Spurious Oscillations (3M3)

A **spurious oscillation** (also called a **parasitic oscillation**) is an unintended oscillation within a transmitter, most commonly in the power amplifier (PA) stage. Unlike harmonics (which are exact multiples of the intended frequency), spurious oscillations can appear at unpredictable frequencies determined by stray component values rather than by the intended circuit design.

**How they arise:**

In any PCB or wiring, there is stray inductance (from wire and track lengths) and stray capacitance (between tracks, leads, and components). These parasitic L and C values can form unintended resonant circuits within the PA. If the stage has enough gain at the spurious frequency — which is often well above the intended operating frequency — it can oscillate at that stray frequency simultaneously with or instead of the intended frequency.

**Effects:**
- Transmission on unintended frequencies — a licence violation (UK licence requires transmissions only on licensed bands with specified characteristics)
- Can cause interference on other amateur bands or services
- Difficult to detect without a spectrum analyser — the spurious signal may be at a frequency far outside the band in use
- PA efficiency may drop; the stage may heat excessively

**Prevention:**
- Short, direct lead connections in the PA — minimise stray L
- Ferrite beads on component leads to suppress high-frequency gain
- RF bypassing (decoupling capacitors) at the PA supply rail
- Screen the PA from other stages
- Some designs include a small resistor in series with the base or gate to reduce HF gain and damp parasitic modes

> [INFO] **3M3:** A spurious (parasitic) oscillation is an **unintended oscillation** in the PA caused by stray inductance and capacitance forming an unwanted resonant circuit. It produces signals at unpredictable frequencies, may cause interference outside the intended band, and is a licence violation if it results in out-of-band transmission. Prevention: short leads, ferrite beads, RF decoupling.

### 3M Self-Check Questions

**Q1.** Why is a crystal oscillator more stable than an LC oscillator?
<details><summary>Answer</summary>

A crystal's mechanical resonance has a very high Q factor and is much less sensitive to
temperature and component variation than an LC circuit.
</details>

**Q2.** A signal waveform shows 2 cycles in 4 μs. What frequency is this, and where
would the spike appear on a frequency domain display?
<details><summary>Answer</summary>

T = 4/2 = 2 μs. f = 1/T = 1/0.000002 = **500 kHz.** Spike at 500 kHz on the spectrum.
</details>

**Q3.** Phase noise is measured as −120 dBc/Hz. What other figure must be quoted to
make this measurement useful?
<details><summary>Answer</summary>

The **frequency offset from the carrier** at which this phase noise level applies
(e.g. "at 1 kHz offset").
</details>

**Q4.** A PLL locks at a particular frequency and will not synthesise other frequencies.
What component would you adjust to change the output frequency?
<details><summary>Answer</summary>

Change the **divide ratio (N)** in the programmable divider. This changes the frequency
the VCO locks to.
</details>

**Q5.** An HF transceiver covering 1.8–30 MHz is to be used on 50 MHz.
What is needed to make this work?
<details><summary>Answer</summary>

A **transverter** with an appropriate local oscillator (e.g. 20 MHz LO so 30 MHz
transceiver output mixes to 50 MHz output).
</details>

---

## Section 3 — Key Facts Summary

- **Superhet:** converts all RF to a fixed IF for precise filtering and detection
- **Image rejection:** improved by using a **higher IF**
- **IF transformers:** screened in aluminium cans to prevent inter-stage coupling
- **Selectivity:** set by the IF filter bandwidth and Q factor
- **Sensitivity:** limited by receiver noise figure
- **Balanced modulator:** outputs DSB-SC (two sidebands, no carrier)
- **SSB filter:** crystal filter removes unwanted sideband; shared in transceiver
- **BFO:** needed for CW reception; produces audio tone = |IF − BFO|
- **AM > SSB > CW** in decreasing bandwidth order
- **FM bandwidth:** Carson's rule: BW ≈ 2(deviation + max audio)
- **FM generation:** varicap diode on oscillator pulled by AF signal
- **Harmonics:** multiples of fundamental; suppress with low-pass filter at TX output
- **RTTY duty cycle:** continuous carrier — runs transmitter hot; reduce power from SSB levels
- **AGC fast attack:** prevents sudden loud audio burst on SSB
- **PLL:** Phase Locked Loop — stable frequency synthesis from crystal reference
- **Transverter:** extends transceiver to a different band using a mixer and LO
- **Phase noise:** dBc/Hz — must specify frequency offset too
- **Fourier transform:** converts time-domain signal to frequency-domain spectrum display
- **DSP:** replaces analogue IF/AF stages with software; enables SDR architecture
- **Operating TX without antenna:** damages the PA — use a dummy load instead

---

## Section 3 — Formula Reference

| Formula | Use |
|---------|-----|
| IF = \|f_RF − f_LO\| | Intermediate frequency |
| f_image = f_RF + 2 × IF | Image frequency (high-side LO) |
| BW ≈ 2(Δf + f_max) | FM bandwidth (Carson's rule) |
| β = Δf / f_mod | FM modulation index |
| Audio = \|IF − BFO\| | CW receive tone |
| f = 1/T | Frequency from period |

---

*Section 3 covers ~15% of the Intermediate exam. Block diagram questions and FM bandwidth
calculations are the most frequently tested topics.*
