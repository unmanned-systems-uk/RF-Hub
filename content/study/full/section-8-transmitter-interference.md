<!-- RF-Hub Full Licence Study — Chapter 8: Transmitter Interference
     Exam weight: ~5–8% (~6 subsections)
     Sub-sections: §8A frequency stability/drift, §8B harmonics/spurious,
                   §8C PLL/DDS spurs, §8D key clicks, §8E FM over-deviation,
                   §8F IMD/SSB splatter
     Syllabus refs: 8A1, 8B1, 8C1, 8D1, 8E1, 8F1 [VERIFY against syllabus v1.6]
     RSGB source: Full Licence Manual 3rd ed. (G0HIQ), Ch 8, pp. 51–56
     New at Full: most detail new; over-deviation concept touched at Intermediate
-->

# §8 — Transmitter Interference

A transmitter must radiate only on the intended frequency and within licence limits. This chapter covers the causes and cures of unwanted transmitter emissions — from harmonic radiation and PLL spurious outputs to key clicks and intermodulation splatter. Understanding these is essential both for exam questions and for being a good neighbour on the bands.

---

## §8A — Frequency Stability and Drift

A transmitter's output frequency is not perfectly constant. **Frequency drift** is a slow, unwanted change in output frequency over time.

### Causes of Drift

| Cause | Mechanism |
|---|---|
| Temperature | Inductors, capacitors, and crystal cuts change with temperature |
| Supply voltage | Transistor junction capacitance varies with bias voltage |
| Mechanical stress | Physical flexing of components changes LC values |
| Crystal ageing | Crystal cut relaxes very slowly over years |

A **crystal oscillator** (Q up to 50,000) is far more stable than a free-running LC VFO (Q of a few hundred). PLL synthesisers locked to a crystal reference inherit that crystal's stability.

### Consequences

- Drift shifts the transmitted signal off the stated frequency, potentially causing interference to adjacent channel users.
- Licence conditions require that the transmitted frequency be held within stated tolerances (typically ±50 Hz at HF for a modern transceiver).
- A drifting transmitter can be identified by the pitch change heard at a distant receiver using a BFO/product detector.

### Mitigation

- Use crystal oscillators or PLL synthesisers rather than free-running LC VFOs.
- Allow warm-up time before transmitting.
- Use a temperature-compensated crystal oscillator (TCXO) or oven-controlled crystal oscillator (OCXO) in critical applications.

---

## §8B — Harmonics and Spurious Emissions

### Harmonics

A **harmonic** is a signal at an integer multiple of the fundamental transmit frequency. All practical transmitter PA stages produce some harmonics because transistors are non-linear devices.

- **2nd harmonic:** 2 × f_carrier (e.g., 14 MHz → 28 MHz)
- **3rd harmonic:** 3 × f_carrier (e.g., 14 MHz → 42 MHz)
- **5th harmonic:** 5 × f_carrier (14 MHz → 70 MHz)

> **Exam trap:** A class C PA producing a strong 3rd harmonic from 14 MHz will fall at 42 MHz — within the 6 m band. A 7 MHz 3rd harmonic lands at 21 MHz (15 m band). Harmonics from one amateur band can cause interference on another.

Class C amplifiers produce stronger harmonics than class A because of their highly non-linear operation. The tuned output network provides some harmonic attenuation, but a dedicated **low-pass filter** on the transmitter output is the primary suppression mechanism.

**UK licence limit:** Spurious emissions (including harmonics) must generally be at least **–43 dBc** (43 dB below the carrier) for transmitters above 25 W, and –50 dBc for some categories. The exact limits are in the licence terms.

### Other Spurious Emissions

Beyond harmonics, transmitters can produce:

- **Parasitic oscillations:** self-oscillation at unintended frequencies due to stray feedback (RF on supply lines, stray inductance/capacitance). Cured by ferrite beads, bypassing, and careful layout.
- **Mixer products:** in a superhet transmitter, unwanted IF signals reaching the output if the filtering is insufficient.
- **Sub-harmonics:** rare, but possible in some designs operating near saturation.

### Mitigation

1. **Low-pass filter** on the PA output — most effective for harmonics.
2. **Bandpass filter** on the output — also rejects signals on other bands entirely.
3. Good PA design with appropriate class of operation for the mode.
4. Ferrite beads on supply leads to kill parasitic oscillations.

---

## §8C — PLL and DDS Spurious Outputs

### PLL Reference Spurs

A PLL synthesiser is locked to a reference frequency f_ref. In practice, the reference frequency is not completely removed by the loop filter and appears as **reference spurs** — sidebands offset from the carrier by ±f_ref (and multiples).

> **Example:** A PLL with a 5 kHz reference produces sidebands 5 kHz either side of the carrier. On SSB, these sidebands lie within adjacent SSB channels and can cause interference.

Reference spurs are reduced by:
- Improving the loop filter (more suppression at the reference frequency offset).
- Reducing the reference frequency step size (worse for frequency resolution — a design tradeoff).
- Using a fractional-N PLL architecture.

### DDS Spurious Outputs

A **DDS** synthesiser produces phase truncation spurs because the phase accumulator has more bits than the look-up table address width. These appear at predictable offsets related to the ratio of the output frequency to the clock frequency.

Unlike harmonics, DDS spurs cannot be removed by a simple low-pass filter because they may fall within the LPF passband. Careful choice of output frequency (avoiding problematic ratios) and higher DAC bit depth reduce these spurs.

### Phase Noise

Both PLL and DDS synthesisers add **phase noise** — a broadband skirt of low-level noise close to the carrier. High phase noise degrades transmitted signal quality and, in a receiver, causes reciprocal mixing (see §9J). For transmitters:

- Phase noise from the LO mixes with the modulation to widen the effective transmitted bandwidth.
- A good-quality synthesiser will have phase noise well below –120 dBc/Hz at 10 kHz offset.

---

## §8D — Key Clicks

**Key clicks** are spurious radio frequency energy radiated either side of the carrier when sending CW. They arise from the shape of the keyed envelope.

### Cause

When a carrier is switched on and off by a Morse key, the envelope waveform has rise and fall edges. A **square-wave keying** waveform (infinitely fast rise and fall) would theoretically produce sidebands extending infinitely either side of the carrier. In practice, fast but finite rise times produce sidebands extending many kHz beyond the CW signal, causing interference to stations on nearby frequencies.

<!-- VISUAL: section-8-fig8.1 — time-domain view of CW envelope (fast-rise square wave vs shaped cosine rise); frequency-domain showing narrow vs wide spectral spread. Replace with /assets/images/study/full/section-8/fig8-1-key-clicks.svg once created. -->

### Solution: Envelope Shaping

The rise and fall time of the CW envelope must be **shaped** — typically with a raised cosine or Gaussian envelope — to avoid abrupt transitions:

- **Rise/fall time ≈ 5 ms** is a commonly quoted target for HF CW.
- Too fast (< 1 ms): key clicks extend several kHz either side.
- Too slow (> 15 ms): the Morse dots become soft and hard to copy; the signal may even sound like a "chirp".

Most modern transceivers include built-in envelope shaping. Older or homebrew rigs may require a shaping circuit between the key and the PA.

> **Key fact:** Key clicks are caused by a **short rise time** on the CW envelope. The cure is to slow the rise and fall time with shaping.

---

## §8E — FM Over-deviation

FM over-deviation is covered in §7C in the context of the transmitter design. The interference aspect:

When a transmitter **over-deviates**, the instantaneous frequency swings beyond the channel edges, occupying the frequencies allocated to adjacent channels. The effect on adjacent-channel stations is heard as a buzzing or splashing noise, appearing as if the transmitting station is simultaneously on their frequency.

### Causes

- Audio input level too high (gain too high on the microphone amplifier).
- No audio limiter or compressor fitted in the transmit chain.
- Use of a condenser microphone with high sensitivity without appropriate gain-setting.
- CTCSS/sub-tone signals adding to the audio level.

### Permitted deviation

- UK VHF/UHF amateur FM: typically ±2.5 kHz for 12.5 kHz channel spacing.
- Maximum deviation is set by the transmitter's audio limiter.

### Detection

Over-deviation is typically identified by other users on adjacent channels reporting interference, or by measuring the transmitted signal on a spectrum analyser or deviation meter.

---

## §8F — Intermodulation Distortion (IMD) and SSB Splatter

### What is IMD?

**Intermodulation distortion (IMD)** occurs when two or more signals mix in a non-linear device, producing sum and difference products at new frequencies. In a transmitter PA, the non-linearity of the transistor causes the multiple audio frequency components in an SSB signal to mix with each other.

For two audio tones f₁ and f₂ passing through a non-linear PA, the significant third-order IMD products appear at:
- **2f₁ − f₂** and **2f₂ − f₁**

These fall very close to the original signals — just outside the normal audio bandwidth — and appear in the transmitted spectrum as sidebands adjacent to the wanted signal.

### SSB Splatter

When these IMD products are strong enough to be detected by adjacent-channel receivers, the effect is called **splatter**. The receiving operator hears a distorted copy of the transmitting station's audio on their frequency, often described as a "splashing" sound.

<!-- VISUAL: section-8-fig8.2 — spectrum display showing a clean two-tone SSB signal vs an overdriven signal with 3rd-order IMD products at ±(f2–f1) either side of the sideband cluster. Replace with /assets/images/study/full/section-8/fig8-2-imd-spectrum.svg once created. -->

### Third-Order IMD Products

Third-order products are the most troublesome because they fall close to the wanted signal:

> **Two-tone test:** Apply two equal audio tones (e.g., 700 Hz and 1,900 Hz) to the SSB transmitter and observe the output spectrum. The 3rd-order products appear at 2×700−1900 = −500 Hz (outside audio range, but the method is to use the RF spectrum). In practice, the 3rd-order ratio is specified as the dB difference between the wanted tone and the 3rd-order product.

### Causes

1. **PA overdrive:** driving the PA beyond its linear region compresses the peaks and creates IMD.
2. **Inadequate ALC:** if the ALC feedback is not working or is incorrectly set, speech peaks can overdrive the PA.
3. **Mismatched PA:** operating the PA into the wrong load impedance (high SWR) can push it into compression.

### Consequences

| IMD Level | Typical Effect |
|---|---|
| Better than –30 dBc | Acceptable; minimal adjacent-channel interference |
| –20 to –30 dBc | Audible splatter; complaints from adjacent stations |
| Worse than –20 dBc | Severe splatter; technically illegal under licence terms |

### Cure

1. Reduce the audio drive or transmitter drive level.
2. Ensure the ALC is operating correctly and connected.
3. Use a speech processor **with care** — over-compression increases the peak-to-average ratio, worsening IMD.
4. Ensure the antenna match is correct (SWR < 1.5:1 ideally).

> **Revision note:** IMD is an **amplitude** problem caused by **non-linearity** in the PA. It only matters for amplitude-varying modes (SSB, AM). FM and CW are unaffected by PA non-linearity (constant-envelope modes).

---

## §8 — Self-Check Questions

**Q1.** Name three causes of transmitter frequency drift.
<details><summary>Answer</summary>
Temperature changes (altering component values), supply voltage variations (affecting transistor junction capacitance), and mechanical stress/vibration (changing LC component values). Crystal ageing is a fourth cause operating over longer timescales.
</details>

**Q2.** A transmitter operates on 14.150 MHz with a class C PA. The 3rd harmonic falls on which frequency and which amateur band?
<details><summary>Answer</summary>
3rd harmonic = 3 × 14.150 MHz = 42.450 MHz. This falls within the 6 m amateur band (50–52 MHz in the UK). Note: strictly 42.450 MHz is just below the 6 m band — the point is that 3rd harmonics of the 20 m band land close to 6 m.
</details>

**Q3.** What is the primary method of reducing harmonic radiation from a transmitter?
<details><summary>Answer</summary>
A low-pass filter fitted at the transmitter output. For multi-band operation, a set of switched low-pass filters (one per band) is used.
</details>

**Q4.** What causes key clicks, and how are they cured?
<details><summary>Answer</summary>
Key clicks are caused by a fast (square-wave) rise and fall time on the CW keying envelope, which creates wide sidebands extending many kHz either side of the carrier. The cure is to shape the envelope — typically slowing the rise and fall to approximately 5 ms using a raised-cosine or Gaussian shaping circuit.
</details>

**Q5.** What is the difference between over-deviation and IMD/splatter in terms of which mode each affects?
<details><summary>Answer</summary>
Over-deviation affects FM transmitters: excessive audio level causes the carrier to swing beyond the permitted frequency deviation, occupying adjacent channels. IMD/splatter affects SSB (and AM) transmitters: non-linearity in the PA causes multiple audio tones to mix, producing intermodulation products just outside the wanted bandwidth. FM is not affected by IMD because it is a constant-amplitude mode.
</details>

**Q6.** What is a PLL reference spur, and why is it problematic?
<details><summary>Answer</summary>
A PLL reference spur is a spurious signal appearing as a sideband at ±f_reference (and harmonics) from the carrier, caused by incomplete filtering of the reference frequency in the PLL loop filter. It is problematic because it places a discrete spurious signal within adjacent channels that may be occupied by other stations.
</details>

---

*Source: RSGB Full Licence Manual, 3rd Edition (Alan Betts G0HIQ), Chapter 8, pp. 51–56. Syllabus v1.6 Feb 2024.*
