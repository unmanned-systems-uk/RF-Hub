<!-- RF-Hub Full Licence Study — Chapter 6: Analogue and Digital Signals
     Exam weight: ~5–8% (~6 subsections, concise chapter)
     Sub-sections: §6A analogue/digital, §6B binary numbers, §6C ADC/quantisation,
                   §6D sampling/Nyquist/aliasing, §6E Fourier/FFT, §6F DAC/DDS
     Syllabus refs: 6A1, 6B1, 6C1, 6D1, 6E1 [VERIFY against syllabus v1.6]
     RSGB source: Full Licence Manual 3rd ed. (G0HIQ), pp. 39–40
     New at Full: entire chapter — not covered at Foundation or Intermediate
-->

# §6 — Analogue and Digital Signals

This short but exam-dense chapter underpins Software Defined Radio (Ch 10) and the DDS synthesiser in Ch 7. It introduces digital signal processing theory — how analogue signals are converted to numbers, sampled, transformed between domains, and reconstructed.

---

## §6A — Analogue and Digital Signals

An **analogue signal** can take any voltage or current value within the circuit's limits and can contain any range of frequencies. Any noise added to it becomes indistinguishable from the wanted signal and degrades the information.

A **digital signal** is limited to a fixed number of discrete levels — most commonly two: logic '1' and logic '0'. The actual voltages depend on the technology (RS232 uses ±3–25 V; microcontrollers often 0/3.3 V). Crucially, provided a voltage is within the specified range for its level, noise that does not push it over the threshold has **no effect** on the stored information. This is the fundamental advantage of digital representation over analogue.

> **Key contrast:** An analogue signal degrades continuously with noise. A digital signal is immune to noise up to the point where the noise margin is exceeded — then it fails catastrophically.

---

## §6B — Binary Numbers

Microprocessors process information as ones and zeros — **base 2** (binary). Each digit position doubles in value, so a 4-bit word can represent 0 to 15 (2⁴ − 1 = 15).

| Decimal | Binary | Decimal | Binary |
|---------|--------|---------|--------|
| 0 | 0000 | 8 | 1000 |
| 1 | 0001 | 9 | 1001 |
| 2 | 0010 | 10 | 1010 |
| 3 | 0011 | 11 | 1011 |
| 4 | 0100 | 12 | 1100 |
| 5 | 0101 | 13 | 1101 |
| 6 | 0110 | 14 | 1110 |
| 7 | 0111 | 15 | 1111 |

An 8-bit **byte** covers 0–255 (2⁸ − 1). The more bits used, the finer the representation.

**Converting decimal to binary:** repeatedly divide by 2 and record the remainders from bottom to top. For example, 13 → 8+4+1 → **1101**.

---

## §6C — Analogue to Digital Conversion (ADC)

To process an analogue signal digitally, it must be **sampled** at intervals and each sample represented as a binary number (a **digital word**).

### Quantisation and Quantisation Noise

Because the amplitude is rounded to the nearest available digital level, the result is not exact — the error is called **quantisation noise**. With a 4-bit ADC, only 16 levels are available; a 14-bit ADC gives 16,384 levels.

<!-- VISUAL: section-6-fig6.1 — sine wave overlaid on binary level staircase (0000–1111 steps), showing sample points and quantisation error between the true analogue value and the nearest digital step. Replace with /assets/images/study/full/section-6/fig6-1-quantisation.svg once created. -->

**Handling negative voltages:** the zero-crossing is mapped to the mid-scale binary word (e.g. 1000 for a 4-bit ADC). Words below 1000 represent negative voltages; words above represent positive voltages.

### SNR and Bit Depth

A 14-bit ADC gives a signal-to-quantisation-noise ratio (SNR) of better than **80 dB** when the signal fully uses the ADC range. In practice, if the wanted signal is 60 dB below the ADC's maximum, the effective SNR drops to 80 − 60 = **20 dB**. The ADC design must ensure quantisation noise stays below the RF noise floor so the converter is not the limiting factor in receiving weak signals.

> **Exam note:** The exact bits-to-SNR formula is not in the syllabus — the concept and approximate figures are what matter.

---

## §6D — Sampling Rate and the Nyquist Theorem

Sampling too infrequently misses detail; sampling too often creates excess data that overwhelms processing. Harry Nyquist proved the optimum:

> **Nyquist theorem:** A signal must be sampled at **at least twice the highest frequency present** to be faithfully reproduced.

If the highest audio frequency is 3 kHz, the minimum sample rate is 6 ksamples/s. In practice, sample rates are higher because real filters are imperfect.

<!-- VISUAL: section-6-nyquist-sampling — interactive showing a sine wave with adjustable sample rate; slider below Nyquist rate demonstrates aliasing artefact; slider above shows accurate reconstruction. Widget path: /interactives/nyquist-sampling (to be delivered by RFH-Interactives). Replace this comment with the iframe below once live:

<iframe src='/interactives/nyquist-sampling' style='width:100%; height:600px; border:1px solid #1e293b; border-radius:8px; display:block;' loading='lazy' title='Nyquist Sampling Interactive'></iframe>
-->

### Aliasing

If a frequency **above half the sample rate** is present during sampling, it is indistinguishable from a lower frequency — its alias. For example, with a 2 ksample/s rate, a 1.1 kHz signal aliases to 900 Hz (100 Hz above half the rate → alias is 100 Hz below).

<!-- VISUAL: section-6-fig6.4 — two overlapping waveforms (solid 900 Hz, dashed 1100 Hz) sharing identical sample points, demonstrating the aliasing ambiguity. -->

**Anti-aliasing filter:** a low-pass filter fitted **before** the ADC removes any frequencies above the Nyquist limit before sampling, preventing aliasing. It is an essential part of every practical ADC system.

---

## §6E — Fourier Transforms and the Frequency Domain

An analogue waveform displayed on an oscilloscope shows **amplitude vs time** — the **time domain**. The same signal can be represented as **amplitude vs frequency** — the **frequency domain** — showing which frequencies are present and at what level, exactly as a spectrum analyser displays.

<!-- VISUAL: section-6-fig6.5 — left panel: time domain showing complex waveform (1 kHz + phase-shifted 2nd harmonic + 1.25 kHz); right panel: frequency domain showing three clear peaks. Illustrates how spectrum analysis reveals constituent frequencies invisible in the time domain. -->

The **Fourier transform** is the mathematical process that converts time-domain sample data into frequency-domain data. The **Fast Fourier Transform (FFT)** is a computationally efficient algorithm that allows near-real-time frequency analysis — the basis of the **waterfall display** in SDR software.

| Representation | Axes | Instrument |
|---|---|---|
| Time domain | Amplitude vs time | Oscilloscope |
| Frequency domain | Amplitude vs frequency | Spectrum analyser / SDR waterfall |

The same signal — two different views. Neither is more "real"; each reveals information the other obscures.

---

## §6F — Digital to Analogue Conversion (DAC)

The reverse process reconstructs an analogue signal from digital words. A **DAC** reads a sequence of digital values and produces a corresponding analogue voltage — conceptually by setting the taps of a resistor chain (potential divider). The output is a **staircase** approximating the desired waveform.

<!-- VISUAL: section-6-fig6.6 — staircase approximation of a sine wave produced by stepping through digital look-up table values. -->

### Look-Up Table Approach

A **sinewave look-up table** stores one cycle of a sine wave as digital amplitudes. Stepping through this table at a clock-controlled rate generates a sine wave whose frequency equals:

```
f_out = (step rate through table) × (clock frequency / table length)
```

This is the basis of **Direct Digital Synthesis (DDS)** — covered in §7D.

### Output Artefacts

The staircase output contains harmonics from the discrete amplitude levels. These must be removed by an **analogue low-pass filter** on the DAC output. Any errors in amplitude or timing also produce **phase noise** sidebands close to the wanted frequency — a limitation of DDS that cannot be filtered away.

---

## §6 — Self-Check Questions

**Q1.** Why is a digital signal more noise-resistant than an analogue signal?
<details><summary>Answer</summary>
A digital signal uses discrete levels (typically just two). Noise must exceed the threshold margin before it changes the logical value. An analogue signal carries any noise directly as distortion of the wanted information.
</details>

**Q2.** An ADC has 8 bits. How many discrete amplitude levels can it represent?
<details><summary>Answer</summary>
2⁸ = 256 levels (0 to 255).
</details>

**Q3.** State the Nyquist theorem in plain language.
<details><summary>Answer</summary>
A signal must be sampled at least twice as fast as the highest frequency present in order to be accurately reconstructed from the samples.
</details>

**Q4.** A system samples at 8 ksample/s. What is the highest audio frequency that can be correctly represented, and what must be done to frequencies above this before sampling?
<details><summary>Answer</summary>
The Nyquist limit is 8 000 / 2 = 4 kHz. Any frequencies above 4 kHz must be removed by an anti-aliasing low-pass filter before the ADC, otherwise they will alias to lower frequencies and corrupt the audio.
</details>

**Q5.** What is the difference between the time domain and the frequency domain view of a signal?
<details><summary>Answer</summary>
The time domain shows how the signal amplitude varies with time (oscilloscope). The frequency domain shows which frequencies are present and at what amplitude (spectrum analyser / SDR waterfall). The Fourier transform converts between the two representations.
</details>

**Q6.** Why does the DAC output require a low-pass filter?
<details><summary>Answer</summary>
The DAC output is a staircase waveform that contains harmonics from the discrete amplitude steps. The low-pass filter removes these harmonics, leaving only the wanted analogue signal.
</details>

---

## Suggested Interactives for RFH-Interactives

- **Nyquist sampling widget** — adjustable frequency / sample rate slider; shows aliasing below Nyquist rate. *(See §6D iframe placeholder above.)*
- **Binary number converter** — decimal input → binary word display; shows bit weights.
- **FFT visualiser** — add sine wave components; watch frequency domain update in real time.
- **DAC staircase** — adjust bit depth; observe smoothing quality and harmonic content vs LPF cutoff.

---

*Source: RSGB Full Licence Manual, 3rd Edition (Alan Betts G0HIQ), Chapter 6, pp. 39–40. Syllabus v1.6 Feb 2024.*
