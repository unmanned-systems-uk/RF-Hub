# Ubuntu SDR Workstation Build Spec

> **Status:** Planning
> **Target hardware:** TBC (desktop / Raspberry Pi 5 / both)
> **Purpose:** Full SDR receive, decode, and experimentation environment

## Core SDR Frameworks

| Package | Purpose |
|---------|---------|
| GNU Radio | Signal processing framework — flowgraph-based DSP |
| SoapySDR | Hardware abstraction layer — one API for all SDR devices |
| SoapyHackRF | SoapySDR driver for HackRF One/Pro |
| SoapyRTLSDR | SoapySDR driver for RTL-SDR Blog V4 |
| libhackrf | Low-level HackRF library and `hackrf_transfer` CLI |
| rtl-sdr | Low-level RTL-SDR drivers and CLI tools |

## SDR Applications

| Application | Purpose |
|-------------|---------|
| SDR++ | Modern general-purpose SDR receiver (replaces SDR#) |
| GQRX | GTK-based SDR receiver — good for quick monitoring |
| CubicSDR | Cross-platform SDR — waterfall-focused |
| Inspectrum | Offline signal analysis — load IQ recordings and inspect |
| SigDigger | Suscan-based signal analyser — good for unknown signals |
| URH (Universal Radio Hacker) | Protocol analysis — capture, demodulate, decode digital protocols |

## Decoding Tools

| Tool | Decodes |
|------|---------|
| multimon-ng | POCSAG, FLEX, EAS, SSTV, DTMF, AFSK, and more |
| WSJT-X | FT8, FT4, JT65, JT9, WSPR |
| fldigi | PSK31, RTTY, CW, MFSK, Olivia, and dozens more |
| direwolf | AX.25, APRS packet radio |
| dump1090 | ADS-B aircraft tracking |
| rtl_433 | ISM band devices (weather stations, tyre sensors, etc.) |
| QSSTV | Slow-scan TV decode and encode |
| dsd / DSDPlus | Digital voice — DMR, D-STAR, P25 (limited on Linux) |
| gr-satellites | Satellite telemetry decoding via GNU Radio |

## Signal Analysis & Identification

| Tool | Purpose |
|------|---------|
| Inspectrum | Visual IQ file analysis with measurement cursors |
| baudline | Real-time FFT analysis with spectrogram — excellent for modulation ID |
| Artemis | Signal identification database (pairs with sigidwiki.com) |
| SigDigger | Wideband capture + narrowband analysis |

## Audio Piping (critical for decoder chains)

| Tool | Purpose |
|------|---------|
| PulseAudio / PipeWire | System audio routing |
| pavucontrol | GUI audio routing between SDR apps and decoders |
| virtual audio cable (PulseAudio null sink) | Pipe SDR audio output into decoder input without hardware loopback |

## Hardware to Support

| Device | Interface | Notes |
|--------|-----------|-------|
| HackRF One | USB 2.0 | Needs udev rules for non-root access |
| HackRF Pro | USB 2.0 | Same driver as HackRF One |
| RTL-SDR Blog V4 | USB 2.0 | Needs RTL-SDR Blog specific drivers (not generic rtl-sdr) |
| NanoVNA-H4 | USB serial | NanoVNA-Saver (Python app) |
| Rigol RSA5065N | LAN/USB | SCPI control via Python (pyvisa) — stretch goal |

## udev Rules

All SDR devices need udev rules to allow non-root USB access. Create `/etc/udev/rules.d/99-sdr.rules`:

```
# HackRF
SUBSYSTEM=="usb", ATTR{idVendor}=="1d50", ATTR{idProduct}=="6089", MODE="0666"
# RTL-SDR
SUBSYSTEM=="usb", ATTR{idVendor}=="0bda", ATTR{idProduct}=="2838", MODE="0666"
```

## Install Priority

**Phase 1 — Get receiving:**
1. HackRF + RTL-SDR drivers and udev rules
2. SDR++ (AppImage — no build required)
3. PulseAudio null sink for audio piping
4. WSJT-X + fldigi (apt install)

**Phase 2 — Full decode lab:**
5. GNU Radio (apt or from source for latest)
6. multimon-ng, direwolf, dump1090, rtl_433
7. QSSTV
8. Inspectrum + baudline

**Phase 3 — Advanced:**
9. URH, SigDigger, gr-satellites
10. NanoVNA-Saver
11. Python + pyvisa for Rigol SCPI control
