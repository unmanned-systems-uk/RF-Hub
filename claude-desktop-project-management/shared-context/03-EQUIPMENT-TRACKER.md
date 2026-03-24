# Equipment & Experiment Tracker

> **Purpose:** Central inventory of RF equipment and planned/completed experiments.
>
> **Location:** D:\live_code\RF-Hub\claude-desktop-project-management\shared-context\
> **Last updated:** 2026-03-24

---

## Equipment Inventory

### Test & Measurement
| Equipment | Model | Key Specs | Notes |
|-----------|-------|-----------|-------|
| Spectrum Analyser / VNA | Rigol RSA5065N | Real-time SA with native VNA capability | Primary bench instrument |
| NanoVNA (newer) | ⚠️ Model TBC | ⚠️ Freq range TBC | Need to confirm model number |
| NanoVNA (older) | ⚠️ Model TBC | ⚠️ Freq range TBC | Need to confirm model number |
| Calibration Kit | CK106A | — | For VNA calibration |

### SDR Receivers
| Equipment | Model | Key Specs | Notes |
|-----------|-------|-----------|-------|
| HackRF | Pro or One (⚠️ confirm) | 1 MHz – 6 GHz | Wideband Tx/Rx capable |
| RTL-SDR | Blog V4 | ~24 MHz – 1.766 GHz | Primary receive SDR |

### Antennas
| Antenna | Model | Frequency Range | Use Case |
|---------|-------|----------------|----------|
| Discone | Diamond D130N | 25–1300 MHz | Wideband monitoring. Outperformed directional LTE antenna in real-world test. |
| Airband antenna | ⚠️ Model TBC | Airband | Aviation monitoring |
| ADS-B antenna | ⚠️ Model TBC | 1090 MHz | ADS-B reception |
| EFHW (blog antenna 1) | BH7JYR EFHW | HF | Blog 1.0 subject |
| End-fed wire (blog antenna 2) | Moonraker LWHF-160 | HF (160m–6m) | Blog 1.0 subject |

### Filters & Amplifiers
| Item | Model | Purpose |
|------|-------|---------|
| AM/FM band-stop filter | Flamingo | Block broadcast FM interference |
| ADS-B filter/preamp | SAWbird ADS-B | 1090 MHz filtering + LNA |
| Signal distribution | ⚠️ Details TBC | Splitting/combining |

### Computing & Infrastructure
| Item | Purpose | Notes |
|------|---------|-------|
| Raspberry Pi (planned) | Remote SDR enclosure | PoE powered, ~25m from shack |
| Ubuntu Linux VM | RF-Hub development server | 10.0.1.213 |
| Hammond 1550 series (planned) | IP-rated aluminium enclosure | Thermal management is key challenge |

---

## Experiments

### Active / In Progress

**S21 Measurement Series**
- **Goal:** Parallel S21 measurements on RSA5065N and NanoVNA(s), producing structured lab writeups
- **Feeds:** Curriculum Lesson 10, Unsquelched content
- **Status:** Planning. Blocked on NanoVNA model number confirmation.
- **Next step:** Confirm NanoVNA models and firmware-reported frequency ranges.

**Blog 1.0 EFHW Deployment**
- **Goal:** Deploy and characterise end-fed wire antennas at Tweed Valley site
- **Antennas:** Moonraker LWHF-160 + BH7JYR EFHW
- **Site:** Wire runs N→S, mast at north end, house at south end
- **Status:** Planning and drafting. Points 1-3 drafted. Outdoor tasks weather-dependent.
- **Weather dependency:** HIGH — Scottish Borders. Schedule on dry days.

### Planned

**Remote SDR Enclosure**
- **Goal:** RPi + SDR dongle at antenna location (~25m from shack), PoE powered, Ethernet backhaul
- **Key challenge:** Thermal management in sealed IP-rated aluminium enclosure
- **Starting point:** ADS-B setup with dump1090/readsb
- **Feeds:** Blog content, potential curriculum module on coax loss vs remote digitisation

### Completed Experiments / Key Observations

**LTE Directional vs Omnidirectional Test**
- Diamond D130N discone dramatically outperformed a directional LTE antenna
- Root cause: Sector alignment issues / coverage nulls
- **Curriculum relevance:** Lesson 12 (radiation patterns), practical RF decision-making

**Spectrum Analyser vs Digital Receiver Sensitivity**
- RSA5065N could not detect signals the modem successfully decoded
- Demonstrates difference between broadband power measurement and correlation/coding gain
- **Curriculum relevance:** Lesson 20, potential standalone topic

---

## Items Needing Confirmation

⚠️ These need Anthony to check physical equipment:
1. NanoVNA newer model — exact model number and firmware version
2. NanoVNA older model — exact model number and firmware version
3. HackRF — Pro or One?
4. Airband antenna — model number
5. ADS-B antenna — model number
6. Signal distribution equipment — model/details
