<!-- RF-Hub Full Licence Study — Chapter 10: Software Defined Radio
     Exam weight: ~3–5% (short chapter, 2 pages)
     Sub-sections: §10A SDR concept/architecture, §10B direct-sampling vs down-conversion,
                   §10C I/Q sampling, §10D sample rate + bit depth → dynamic range,
                   §10E FFT waterfall/panadapter
     Syllabus refs: 10A1, 10B1, 10C1, 10D1, 10E1 [VERIFY v1.6]
     RSGB source: Full Licence Manual 3rd ed. (G0HIQ), Ch 10, pp. 67–68
     New at Full: SDR architecture, direct sampling, I/Q, panadapter
-->

# §10 — Software Defined Radio

SDR moves the boundary between hardware and software as close to the antenna as possible. Understanding where and how that boundary sits — and what it costs in terms of sample rate and dynamic range — is the entire chapter.

---

## §10A — What SDR Is

In a conventional transceiver, each function (filter, demodulation, frequency selection) is implemented in dedicated hardware. Change mode from SSB to FM and the signal path physically switches between different filter and detector stages.

A **Software Defined Radio** replaces those hardware stages with a general-purpose processor running algorithms:

<img src="/assets/images/study/full/section-10/fig-10-1-sdr-block-diagram.svg" alt="SDR overview block diagram: antenna feeds analogue front-end and ADC (analogue domain), then digital samples flow through software DSP to produce audio or decoded data (digital domain)" width="700" height="190" loading="lazy">

The front-end is minimal — typically only a bandpass filter and low-noise amplifier. Everything from filtering to demodulation runs in software (a PC, FPGA, or embedded DSP).

**Why this matters:**
- Any mode (SSB, FM, CW, FT8, WSPR, SSTV) is just a different software module — no hardware change
- The full instantaneous bandwidth of the ADC is visible simultaneously on a waterfall display
- Received RF can be recorded as raw I/Q samples and replayed or reprocessed later
- Firmware updates can improve performance or add modes without touching hardware

---

## §10B — Direct Sampling vs Down-Conversion

Two architectures dominate amateur SDR.

### Down-Conversion SDR

The incoming RF is mixed to a low intermediate frequency (IF) or to baseband before the ADC. This is the most common approach.

<img src="/assets/images/study/full/section-10/fig-10-2-sdr-hardware-frontend.svg" alt="SDR hardware front-end block diagram: antenna feeds bandpass filter, LNA, mixer (with software-controlled local oscillator below), baseband filter and ADC before software processing" width="700" height="220" loading="lazy">

The ADC only needs to sample at twice the bandwidth of interest — a 2 MHz bandwidth radio needs only a ~2 Msps ADC. Most consumer SDR dongles (RTL-SDR, SDRplay, Airspy) use this approach with a TV tuner chip as the RF front-end.

**Quadrature (I/Q) sampling** is used to avoid image problems. Two ADC channels are used, with the local oscillator fed 90° out of phase to one of them:

- **I channel** — In-phase samples
- **Q channel** — Quadrature (90°-shifted) samples

The I/Q pair encodes both the amplitude and phase of the signal. Software can then tune to any frequency within the sampled band, and image frequencies that would alias into the passband in a single-channel receiver are cleanly separated. This is fundamental to how SDR tuning works: changing the software's digital NCO frequency tunes the radio, not the hardware oscillator.

### Direct Sampling

In direct sampling, the ADC sits immediately at the antenna (after a bandpass filter and LNA), with no mixer:

```
Antenna → BPF → LNA → high-speed ADC → digital samples → software
```

This requires a much faster ADC. To cover 0–30 MHz requires at least 60 Msps (Nyquist); in practice, 100–200 Msps ADCs are used. The Nyquist alias bands are used intentionally to fold higher-frequency signals into the ADC's usable range — a form of harmonic undersampling.

High-end amateur transceivers (Flex-6000 series, ANAN series, modern Icom/Yaesu flagship models) use direct-sampling HF architectures. The ADC digitises the entire HF spectrum simultaneously; software selects the desired channel.

| Feature | Down-conversion | Direct sampling |
|---|---|---|
| ADC speed required | Low (×2 BW only) | High (covers full RF band) |
| Hardware complexity | Higher (mixer, LO) | Lower (no mixer) |
| Image rejection | I/Q cancellation | Inherent (no mixing) |
| Typical use | Consumer dongles, entry SDR | High-performance transceivers |

---

## §10C — I/Q Signals and Quadrature Sampling

It is worth spending a moment on I/Q, because it appears in every SDR discussion.

A real-valued signal sampled at rate f_s can only represent frequencies from 0 to f_s/2 (one-sided spectrum). An **I/Q pair** sampled at f_s represents a complex (two-sided) signal from −f_s/2 to +f_s/2. This doubles the usable bandwidth for the same sample rate, and — more importantly — allows the software to distinguish positive and negative frequency offsets from the centre frequency.

When you tune an SDR receiver to 14.200 MHz and the sample rate is 2 Msps, the software sees frequencies from 13.200 to 15.200 MHz simultaneously. A signal at 14.150 MHz appears at −50 kHz (i.e. 50 kHz below centre) in the I/Q representation, while one at 14.250 MHz appears at +50 kHz. Without I/Q, both would fold to the same 50 kHz offset and be indistinguishable.

---

## §10D — Sample Rate and Bit Depth

Two ADC parameters set the limits of an SDR receiver's performance.

### Sample Rate → Bandwidth

By the Nyquist theorem (§6C), the maximum usable bandwidth is half the sample rate. A 2.048 Msps SDR can process (and display on the waterfall) a total of 2.048 MHz of spectrum at once.

Higher sample rate means:
- Wider panadapter window
- More simultaneous channels visible
- Higher requirement for USB/PCIe transfer bandwidth and CPU processing

Entry-level SDR dongles: 2–3.2 Msps. High-performance SDRs: 10–20 Msps. Transceiver ADCs: 100–200 Msps for full HF coverage.

### Bit Depth → Dynamic Range

Each bit of ADC resolution contributes approximately 6 dB of dynamic range (§6B). A 14-bit ADC has a theoretical SNR of ~80 dB. A 16-bit ADC reaches ~96 dB.

In practice, the Spurious-Free Dynamic Range (SFDR) and IP3 of the analogue front-end set the real limit — but bit depth is the ceiling:

| Bit depth | Theoretical dynamic range |
|---|---|
| 8-bit (cheap dongle) | ~48 dB |
| 12-bit | ~72 dB |
| 14-bit | ~80 dB |
| 16-bit | ~96 dB |

A receiver with only 48 dB of dynamic range will produce visible IMD products when a strong signal is present, even if the software is excellent. This is why high-end SDR receivers use 16-bit ADCs — the same fundamental constraint as §9B applies whether the receiver is analogue or digital.

> [INFO] **10C1/10D1:** Sample rate determines how much spectrum the SDR can see simultaneously (instantaneous bandwidth = sample rate / 2). Bit depth sets the dynamic range ceiling (~6 dB per bit). A 14-bit SDR has the same ~80 dB ceiling as a 14-bit ADC in a traditional receiver.

---

## §10E — FFT Waterfall and Panadapter

### Panadapter

A **panadapter** is a real-time spectrum display: frequency runs along the X axis, received signal power on the Y axis. The display updates typically 15–25 times per second.

The FFT (Fast Fourier Transform) converts a block of time-domain I/Q samples into a power-vs-frequency spectrum:

```
Block of N I/Q samples → FFT → N/2 frequency bins, each bin width = sample rate / N
```

With a 2.048 Msps sample rate and FFT size of 4096:
- Each bin = 2,048,000 / 4096 = **500 Hz wide**
- Total span = 2.048 MHz

Larger FFT → finer frequency resolution, but more computation and higher latency. Most SDR software allows the FFT size to be adjusted.

### Waterfall Display

The **waterfall** adds a time dimension: each new spectrum line is added at the top and scrolls downward. Signal power is represented as colour (typically black → blue → green → yellow → red for increasing power). Earlier time is visible lower on the screen.

The waterfall makes it easy to:
- Identify signal types by their visual signature (PSK31 = single thin vertical line; SSB = wide lumpy trace; FT8 = eight simultaneous tones appearing for 12.6 seconds at a time; WSPR = two faint tones lasting 110 seconds)
- Spot propagation openings (a band that was empty suddenly fills with signals)
- Distinguish continuous carriers from intermittent signals
- Find clear frequencies without transmitting

> [INFO] **10E1:** A panadapter shows frequency vs signal strength in real time using FFT. A waterfall adds time as the vertical axis (latest at top, scrolling downward), with power shown as colour. The frequency resolution is sample rate / FFT size — larger FFT gives finer resolution at the cost of longer processing time.

---

## §10F — Self-Check Questions

**Q1.** An SDR dongle has an 8-bit ADC sampling at 2.048 Msps. What is the instantaneous bandwidth visible on its waterfall, and what is the theoretical dynamic range?

<details><summary>Answer</summary>

**Bandwidth:** Nyquist limit = sample rate / 2 = 2.048 / 2 = **1.024 MHz**.

**Dynamic range:** 8 bits × 6 dB = **~48 dB**. This is relatively modest; a strong broadcast station nearby can produce visible IMD products in the display.
</details>

---

**Q2.** Why does SDR use I/Q (quadrature) sampling rather than a single ADC channel?

<details><summary>Answer</summary>

A single ADC produces a one-sided spectrum (0 to f_s/2). It cannot distinguish a signal 50 kHz above the centre frequency from one 50 kHz below — both alias to the same offset. The I/Q pair encodes complex (amplitude + phase) samples, giving a two-sided spectrum (−f_s/2 to +f_s/2) that distinguishes positive and negative offsets from centre. This doubles effective bandwidth and eliminates image frequency ambiguity.
</details>

---

**Q3.** A direct-sampling SDR receiver uses a 100 Msps ADC. What is the maximum frequency it can digitise without aliasing?

<details><summary>Answer</summary>

Nyquist limit = 100 / 2 = **50 MHz**. Signals above 50 MHz would alias. A bandpass filter before the ADC must remove signals above 50 MHz to prevent aliasing. (In practice, the second Nyquist zone 50–100 MHz can be used intentionally via undersampling, but this requires careful bandpass filtering of that specific zone.)
</details>

---

**Q4.** What is the difference between a panadapter and a waterfall display?

<details><summary>Answer</summary>

A **panadapter** shows a real-time frequency-vs-power spectrum (a single horizontal slice). A **waterfall** adds time as the vertical axis: each new panadapter sweep scrolls the display downward, so the history of received signals is visible. A waterfall makes it easy to identify intermittent signals, propagation changes, and signal types by their characteristic visual patterns.
</details>
