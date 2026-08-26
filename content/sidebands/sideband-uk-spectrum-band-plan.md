# Sideband: UK Spectrum Allocation & Amateur Band Plan — From 160 Metres to 23 Centimetres

**Tags:** `[F]` `[I]` `[FL]`
**RSGB Refs:** 1A1, 1B1, 1C1, 8A1
**Cross-refs:** Frequency Bands, Operating Procedures, Digital Modes
**Series:** Sideband — Topic Snippets for RF-Hub

---

The radio spectrum from HF through UHF is shared between dozens of services — broadcast, maritime, aviation, military, emergency, and amateur. Understanding who uses what, and where amateur radio fits in, is essential knowledge for your licence exam and for operating without causing interference.

This page covers two things:
1. **Spectrum Allocation** — the big picture of who uses what from 1.8 MHz to 1.3 GHz
2. **Amateur Band Plans** — the detailed RSGB band plans for every amateur band, including modes, power limits, and centres of activity

---

## Important Notes Before You Start

**Post-February 2024 Licence Changes:** Ofcom significantly updated UK amateur radio licence conditions on 21 February 2024. The power limits shown here reflect the **current** post-2024 figures:

| Licence Class | Power Limit | Callsign Prefix |
|---------------|-------------|-----------------|
| Foundation | **25 W PEP** | M7 |
| Intermediate | **100 W PEP** | 2E0, M8, M9 |
| Full | **1,000 W PEP** (primary bands) | M0 |

> **Old vs New:** If you see older references quoting 10 W Foundation, 50 W Intermediate, or 400 W Full — those were the pre-2024 limits. The exam syllabus was updated from 1 September 2024 to reflect the new figures.

**Band Plan vs Licence Conditions:** The RSGB band plan is a *voluntary coordination tool* — a gentleman's agreement on how to share each band. Your Ofcom licence (OFW611) sets the *legal* limits. In practice, everyone follows the band plan because it makes the bands work for everyone.

**LSB and USB Convention:** Below 10 MHz, SSB stations use **Lower Sideband (LSB)**. Above 10 MHz, SSB stations use **Upper Sideband (USB)**. This is a universal convention, not a regulation — but breaking it means nobody can hear you properly.

---

## Part 1: UK Spectrum Allocation — Who Uses What

This section shows the wider picture of spectrum users around the amateur bands. It helps you understand why certain bands have restrictions and who your neighbours are.

### HF Spectrum (1.8–30 MHz)

The HF spectrum is heavily shared. Amateur allocations sit between maritime, aviation, broadcast, military, and fixed-service users.

| Frequency Range | Primary Users | Amateur Band? |
|----------------|---------------|---------------|
| 1.810–2.000 MHz | Fixed, Mobile, Amateur | **160m** — primary 1.810–1.850; secondary above 1.850 |
| 2.000–2.502 MHz | Fixed, Mobile, Maritime | — |
| 2.502–2.850 MHz | Fixed, Mobile, Maritime, Aeronautical | — |
| 2.850–3.500 MHz | Aeronautical Mobile (HF air traffic) | — |
| 3.500–3.800 MHz | Amateur (primary), Fixed, Mobile | **80m** |
| 3.800–4.000 MHz | Fixed, Mobile, Aeronautical | — |
| 4.000–5.060 MHz | Fixed, Maritime Mobile | — |
| 5.060–5.450 MHz | Fixed, Mobile | **60m** (UK channelised segments, secondary) |
| 5.450–7.000 MHz | Fixed, Mobile, Broadcasting | — |
| 7.000–7.200 MHz | Amateur (primary) | **40m** |
| 7.200–10.100 MHz | Fixed, Broadcasting, Maritime, Aeronautical | — |
| 10.100–10.150 MHz | Fixed (primary), Amateur (secondary) | **30m** — CW/digital only |
| 10.150–14.000 MHz | Fixed, Mobile, Broadcasting, Aeronautical | — |
| 14.000–14.350 MHz | Amateur (primary) | **20m** |
| 14.350–18.068 MHz | Fixed, Mobile, Broadcasting | — |
| 18.068–18.168 MHz | Amateur (primary) | **17m** (WARC — no contests) |
| 18.168–21.000 MHz | Fixed, Mobile, Broadcasting | — |
| 21.000–21.450 MHz | Amateur (primary) | **15m** |
| 21.450–24.890 MHz | Fixed, Mobile, Broadcasting, Aeronautical | — |
| 24.890–24.990 MHz | Amateur (primary) | **12m** (WARC — no contests) |
| 24.990–28.000 MHz | Fixed, Mobile, Land Mobile | — (CB radio at 27 MHz is just below) |
| 28.000–29.700 MHz | Amateur (primary) | **10m** |

> **What's around you matters.** Knowing that aeronautical HF sits just below 80m, or that international broadcasters share parts of the HF spectrum, explains why you sometimes hear non-amateur signals — and why staying within your band edges is critical.

### VHF Spectrum (30–300 MHz)

| Frequency Range | Primary Users | Amateur Band? |
|----------------|---------------|---------------|
| 30–50 MHz | Military, TETRA, Fixed Links | — |
| 50–52 MHz | Amateur | **6m** — primary 50–51; secondary 51–52 |
| 52–68 MHz | Fixed, Mobile (old Band I TV cleared) | — |
| 68–70 MHz | Fixed, Mobile, Military | — |
| 70.0–70.5 MHz | Amateur (secondary) | **4m** — UK/Ireland only; not widely available in Europe |
| 70.5–87.5 MHz | Fixed, Mobile, Military | — |
| 87.5–108 MHz | FM Broadcasting (Band II) | — |
| 108–118 MHz | Aeronautical Radionavigation (VOR, ILS) | — |
| 118–137 MHz | Aeronautical Mobile (air traffic control, AM voice) | — |
| 137–144 MHz | Meteorological Satellites, Space Operations | — |
| 144–146 MHz | Amateur (primary) | **2m** |
| 146–156 MHz | Fixed, Mobile, Emergency Services | — |
| 156–174 MHz | Maritime Mobile (VHF marine channels; Ch 16 = 156.800 MHz distress) | — |
| 174–230 MHz | DAB Digital Radio Broadcasting (Band III) | — |
| 230–300 MHz | Military, Fixed, Mobile | — |

### UHF Spectrum (300 MHz–1.3 GHz)

| Frequency Range | Primary Users | Amateur Band? |
|----------------|---------------|---------------|
| 300–380 MHz | Military, Fixed, Mobile | — |
| 380–400 MHz | TETRA Emergency Services (police, fire, ambulance) | — |
| 400–430 MHz | Fixed, Mobile, PMR, Paging | — |
| 430–440 MHz | Radiolocation (primary), Amateur (secondary) | **70cm** — London restriction on 431–432 MHz |
| 440–470 MHz | PMR446 (446.0–446.2 MHz unlicensed), Professional PMR | — |
| 470–694 MHz | UHF Television (Freeview DVB-T) | — |
| 694–960 MHz | 4G/5G Mobile Broadband, ISM (868 MHz) | — |
| 960–1215 MHz | Aeronautical Radionavigation (DME, ADS-B at 1090 MHz) | — |
| 1215–1300 MHz | Radiolocation (primary; L-band radar) | — |
| 1240–1325 MHz | Radiolocation (primary), Amateur (secondary) | **23cm** — Intermediate/Full only |

---

## Part 2: Amateur Band Plans — Band by Band

Each band section below shows the full RSGB band plan with mode segments, power limits, restrictions, and centres of activity.

**Centres of Activity (CoA)** are specific frequencies where operators gather for a particular mode. They're the starting point when you want to find activity — tune there first, then spread out.

---

### 160 Metres — 1.810–2.000 MHz

**Nickname:** "Top Band"
**Sideband:** LSB
**Allocation:** Primary 1.810–1.850 MHz; secondary 1.850–2.000 MHz
**Character:** Challenging propagation, mainly night-time; regional and short-skip DX

| Class | Power (1.810–1.850) | Power (1.850–2.000) |
|-------|---------------------|---------------------|
| Foundation | 25 W | 32 W max |
| Intermediate | 100 W | 32 W max |
| Full | 400 W | 32 W max |

> **Why 32 W above 1.850?** The upper segment is a secondary allocation — amateurs must not cause interference to primary users. All licence classes are capped at 32 W regardless.

| Frequency | Modes | Notes |
|-----------|-------|-------|
| 1.810–1.838 MHz | CW | 1.810–1.830: non-interference to stations outside UK |
| 1.838–1.843 MHz | Digital / Narrowband | PSK, RTTY, data modes (500 Hz max bandwidth) |
| 1.843–2.000 MHz | All modes (SSB dominant) | LSB; 2.7 kHz max bandwidth |

**Centres of Activity:**

| Frequency | Mode |
|-----------|------|
| 1.836 MHz | WSPR |
| 1.840 MHz | FT8 |
| 1.843 MHz | SSB calling (lowest LSB dial setting) |

---

### 80 Metres — 3.500–3.800 MHz

**Nickname:** "Eighty"
**Sideband:** LSB
**Allocation:** Primary (Region 1)
**Character:** Busy band; local nets day and night, DX at night; high QRM

| Class | Power |
|-------|-------|
| Foundation | 25 W |
| Intermediate | 100 W |
| Full | 1,000 W |

| Frequency | Modes | Notes |
|-----------|-------|-------|
| 3.500–3.510 MHz | CW | DX window — intercontinental only |
| 3.510–3.560 MHz | CW | 3.555: QRS (slow CW); 3.560: QRP CW |
| 3.560–3.570 MHz | CW | Contest-free |
| 3.570–3.600 MHz | Digital / Narrowband | RTTY, PSK, FT8, FT4 |
| 3.600–3.650 MHz | All modes / SSB | 3.630: digital voice |
| 3.650–3.700 MHz | SSB | Contest-free |
| 3.700–3.800 MHz | SSB | 3.775–3.800: DX window |

**Centres of Activity:**

| Frequency | Mode |
|-----------|------|
| 3.555 MHz | QRS (slow CW for learners) |
| 3.560 MHz | QRP CW |
| 3.573 MHz | FT8 |
| 3.603 MHz | SSB (lowest LSB dial) |
| 3.630 MHz | Digital voice |
| 3.760 MHz | Region 1 emergency |

---

### 60 Metres — 5 MHz (UK Channelised)

**Sideband:** USB
**Allocation:** Secondary — UK-specific channelised segments
**Access:** **Full licence ONLY** — Foundation and Intermediate NOT permitted
**Character:** Unique propagation combining ground wave and sky wave; excellent for UK-wide coverage

| Class | Power |
|-------|-------|
| Foundation | NOT PERMITTED |
| Intermediate | NOT PERMITTED |
| Full | 100 W (200 W EIRP max) |

**Additional restrictions:** No mobile operation. No contests. The UK has its own channelised allocation — it did NOT adopt the WRC-15 worldwide 60m band.

**UK Channels (selected key segments):**

| Segment (kHz) | Width | Usage |
|---------------|-------|-------|
| 5258.5–5264.0 | 5.5 kHz | CW; QRP ~5262 kHz |
| 5276.0–5284.0 | 8 kHz | SSB (5278.5 kHz USB); emergency comms |
| 5298.0–5307.0 | 9 kHz | All modes; USB 5298.5, 5301, 5304 kHz |
| 5313.0–5323.0 | 10 kHz | All modes; AM 5317 kHz |
| 5354.0–5358.0 | 4 kHz | USB 5354 kHz |
| 5362.0–5374.5 | 12.5 kHz | USB 5363, 5371.5 kHz; digital 5366 kHz |
| 5395.0–5401.5 | 6.5 kHz | USB 5395, 5398.5 kHz |
| 5403.5–5406.5 | 3 kHz | USB 5403.5 kHz |

---

### 40 Metres — 7.000–7.200 MHz

**Nickname:** "Forty"
**Sideband:** LSB
**Allocation:** Primary (Region 1)
**Character:** The workhorse band; excellent day and night; DX at night, regional daytime

| Class | Power |
|-------|-------|
| Foundation | 25 W |
| Intermediate | 100 W |
| Full | 1,000 W |

| Frequency | Modes | Notes |
|-----------|-------|-------|
| 7.000–7.040 MHz | CW | 7.030: QRP CW |
| 7.040–7.050 MHz | Digital / Narrowband | RTTY, PSK, FT4, FT8 |
| 7.050–7.060 MHz | All modes / Digital | Unattended data stations permitted |
| 7.060–7.100 MHz | All modes / SSB | 7.090: SSB QRP |
| 7.100–7.130 MHz | SSB | Contest-free; 7.110: Region 1 emergency |
| 7.130–7.200 MHz | SSB | Contest preferred segment |

**Centres of Activity:**

| Frequency | Mode |
|-----------|------|
| 7.030 MHz | QRP CW |
| 7.053 MHz | Lowest LSB dial for voice |
| 7.070 MHz | Digital voice |
| 7.074 MHz | FT8 |
| 7.090 MHz | SSB QRP |
| 7.110 MHz | Region 1 emergency |

---

### 30 Metres — 10.100–10.150 MHz

**Sideband:** N/A — **NO SSB permitted**
**Allocation:** Secondary (amateur secondary to fixed service)
**Character:** Quiet, narrow band; excellent propagation; CW and digital only

| Class | Power |
|-------|-------|
| Foundation | 25 W |
| Intermediate | 100 W |
| Full | 150 W max |

> **Key restrictions:** CW and narrow-bandwidth digital modes ONLY. No SSB (except life-safety emergencies). No contests. No bulletins. This is a WARC band. The 150 W Full limit reflects the secondary allocation.

| Frequency | Modes | Notes |
|-----------|-------|-------|
| 10.100–10.130 MHz | CW | 10.106: DX; 10.116: QRP |
| 10.130–10.150 MHz | Digital / Narrowband | FT8, WSPR, PSK |

**Centres of Activity:**

| Frequency | Mode |
|-----------|------|
| 10.106 MHz | CW DX |
| 10.116 MHz | QRP CW |
| 10.136 MHz | FT8 |
| 10.140 MHz | WSPR |

---

### 20 Metres — 14.000–14.350 MHz

**Nickname:** "Twenty"
**Sideband:** USB
**Allocation:** Primary
**Character:** The DX band; worldwide propagation daytime; the busiest HF band

| Class | Power |
|-------|-------|
| Foundation | 25 W |
| Intermediate | 100 W |
| Full | 1,000 W |

| Frequency | Modes | Notes |
|-----------|-------|-------|
| 14.000–14.060 MHz | CW | 14.055: QRS; 14.060: QRP |
| 14.060–14.070 MHz | CW | Contest-free |
| 14.070–14.099 MHz | Digital / Narrowband | FT8, FT4, PSK, RTTY |
| 14.099–14.101 MHz | **BEACONS ONLY** | International Beacon Project — listen only, never transmit |
| 14.101–14.125 MHz | All modes / Digital | Unattended data stations permitted |
| 14.125–14.300 MHz | SSB | 14.230: SSTV; 14.285: SSB QRP |
| 14.300–14.350 MHz | SSB | Contest-free; 14.300: maritime mobile net |

**Centres of Activity:**

| Frequency | Mode |
|-----------|------|
| 14.055 MHz | QRS (slow CW) |
| 14.060 MHz | QRP CW |
| 14.074 MHz | FT8 |
| 14.076 MHz | FT4 |
| 14.130 MHz | Digital voice |
| 14.230 MHz | SSTV |
| 14.285 MHz | SSB QRP |
| 14.300 MHz | Maritime mobile net |

---

### 17 Metres — 18.068–18.168 MHz

**Sideband:** USB
**Allocation:** Primary (WARC band — no contests)
**Character:** Good DX band when open; narrow (100 kHz); quieter than 20m

| Class | Power |
|-------|-------|
| Foundation | 25 W |
| Intermediate | 100 W |
| Full | 1,000 W |

| Frequency | Modes | Notes |
|-----------|-------|-------|
| 18.068–18.095 MHz | CW | 18.086: QRP |
| 18.095–18.109 MHz | Digital / Narrowband | Data modes |
| 18.109–18.111 MHz | **BEACONS ONLY** | IBP — do not transmit |
| 18.111–18.168 MHz | All modes / SSB | 18.130: SSB QRP; 18.150: digital voice |

**Centres of Activity:**

| Frequency | Mode |
|-----------|------|
| 18.086 MHz | QRP CW |
| 18.100 MHz | FT8 |
| 18.130 MHz | SSB QRP |
| 18.150 MHz | Digital voice |

---

### 15 Metres — 21.000–21.450 MHz

**Nickname:** "Fifteen"
**Sideband:** USB
**Allocation:** Primary
**Character:** Excellent DX during high solar activity; quiet during solar minimum

| Class | Power |
|-------|-------|
| Foundation | 25 W |
| Intermediate | 100 W |
| Full | 1,000 W |

| Frequency | Modes | Notes |
|-----------|-------|-------|
| 21.000–21.070 MHz | CW | 21.055: QRS; 21.060: QRP |
| 21.070–21.110 MHz | Digital / Narrowband | FT8, FT4, PSK, RTTY |
| 21.110–21.120 MHz | Digital (Packet) | AX.25 packet radio |
| 21.120–21.149 MHz | CW | Upper CW segment |
| 21.149–21.151 MHz | **BEACONS ONLY** | IBP — do not transmit |
| 21.151–21.450 MHz | All modes / SSB | 21.180: digital voice; 21.285: SSB QRP; 21.340: SSTV |

**Centres of Activity:**

| Frequency | Mode |
|-----------|------|
| 21.055 MHz | QRS (slow CW) |
| 21.060 MHz | QRP CW |
| 21.074 MHz | FT8 |
| 21.076 MHz | FT4 |
| 21.180 MHz | Digital voice |
| 21.285 MHz | SSB QRP |
| 21.340 MHz | SSTV |

---

### 12 Metres — 24.890–24.990 MHz

**Sideband:** USB
**Allocation:** Primary (WARC band — no contests)
**Character:** Narrow (100 kHz); best during high solar activity; very quiet otherwise

| Class | Power |
|-------|-------|
| Foundation | 25 W |
| Intermediate | 100 W |
| Full | 1,000 W |

| Frequency | Modes | Notes |
|-----------|-------|-------|
| 24.890–24.915 MHz | CW | 24.906: QRP |
| 24.915–24.929 MHz | Digital / Narrowband | Data modes |
| 24.929–24.931 MHz | **BEACONS ONLY** | IBP — do not transmit |
| 24.931–24.990 MHz | All modes / SSB | 24.950: SSB QRP; 24.960: digital voice |

**Centres of Activity:**

| Frequency | Mode |
|-----------|------|
| 24.906 MHz | QRP CW |
| 24.915 MHz | FT8 |
| 24.950 MHz | SSB QRP |
| 24.960 MHz | Digital voice |

---

### 10 Metres — 28.000–29.700 MHz

**Nickname:** "Ten"
**Sideband:** USB
**Allocation:** Primary
**Character:** Wide band (1.7 MHz); worldwide DX during high solar activity; local FM repeaters at top end

| Class | Power |
|-------|-------|
| Foundation | 25 W |
| Intermediate | 100 W |
| Full | 1,000 W |

| Frequency | Modes | Notes |
|-----------|-------|-------|
| 28.000–28.070 MHz | CW | 28.055: QRS; 28.060: QRP |
| 28.070–28.190 MHz | Digital / Narrowband | FT8, WSPR, PSK, RTTY |
| 28.190–28.225 MHz | **BEACONS** | IBP regional and coordinated beacons |
| 28.225–28.300 MHz | Beacons (personal) | Uncoordinated personal beacons |
| 28.300–29.000 MHz | All modes / SSB | 28.330: digital voice; 28.360: SSB QRP; 28.400: SSB calling |
| 29.000–29.100 MHz | AM | AM telephony (6 kHz max bandwidth) |
| 29.100–29.200 MHz | FM simplex | 10 kHz channel spacing |
| 29.200–29.300 MHz | All modes | Wideband digital experiments |
| 29.300–29.510 MHz | Satellite downlinks | Amateur satellite use |
| 29.510–29.700 MHz | FM repeaters | 29.600: FM calling; repeater outputs −600 kHz shift |

**Centres of Activity:**

| Frequency | Mode |
|-----------|------|
| 28.055 MHz | QRS (slow CW) |
| 28.060 MHz | QRP CW |
| 28.074 MHz | FT8 |
| 28.180 MHz | WSPR |
| 28.330 MHz | Digital voice |
| 28.360 MHz | SSB QRP |
| 28.400 MHz | SSB calling |
| 29.600 MHz | FM calling |

---

### 6 Metres — 50.000–52.000 MHz

**Nickname:** "The Magic Band"
**Sideband:** USB
**Allocation:** Primary 50–51 MHz; secondary 51–52 MHz
**Character:** Sporadic-E propagation gives surprise DX openings; tropospheric ducting; meteor scatter

| Class | Power (50–51 MHz) | Power (51–52 MHz) |
|-------|-------------------|-------------------|
| Foundation | 25 W | 25 W |
| Intermediate | 100 W | 100 W |
| Full | ~400 W | 100 W max |

| Frequency | Modes | Notes |
|-----------|-------|-------|
| 50.000–50.100 MHz | CW / Beacons | 50.090: CW calling |
| 50.100–50.130 MHz | SSB (DX window) | **Intercontinental only** — do not use for local QSOs |
| 50.110 MHz | SSB DX calling | Establish contact then QSY |
| 50.130–50.300 MHz | Narrowband / SSB | 50.200: UK/EU SSB calling |
| 50.300–50.500 MHz | All modes / Digital | FT8, PSK, EME, meteor scatter |
| 50.500–51.000 MHz | All modes | Voice, SSTV, APRS |
| 51.210–51.390 MHz | FM repeater inputs | 10 kHz spacing |
| 51.410–51.590 MHz | FM simplex | 51.510: FM calling |
| 51.610–51.790 MHz | FM repeater outputs | 500 kHz below inputs |

**Centres of Activity:**

| Frequency | Mode |
|-----------|------|
| 50.090 MHz | CW calling |
| 50.110 MHz | SSB DX calling (international) |
| 50.200 MHz | SSB calling (UK/Europe) |
| 50.313 MHz | FT8 |
| 51.510 MHz | FM calling |

---

### 4 Metres — 70.000–70.500 MHz

**Sideband:** USB
**Allocation:** Secondary — UK and Ireland specific (not widely available in Europe)
**Character:** Similar propagation to 6m but rarer openings; growing interest

| Class | Power |
|-------|-------|
| Foundation | 25 W |
| Intermediate | 100 W |
| Full | **160 W max** (lower than normal — band-specific restriction) |

| Frequency | Modes | Notes |
|-----------|-------|-------|
| 70.000–70.090 MHz | Propagation beacons only | No QSOs |
| 70.090–70.100 MHz | Personal beacons | Low-power uncoordinated |
| 70.100–70.250 MHz | CW / SSB / Digital | 70.200: SSB activity centre |
| 70.250–70.294 MHz | All modes | 70.260: AM calling |
| 70.294–70.500 MHz | FM / Digital Voice | 12.5 kHz channels; 70.450: FM calling |

**Centres of Activity:**

| Frequency | Mode |
|-----------|------|
| 70.185 MHz | Cross-band |
| 70.200 MHz | SSB primary activity |
| 70.260 MHz | AM calling |
| 70.450 MHz | FM calling |

---

### 2 Metres — 144.000–146.000 MHz

**Nickname:** "Two"
**Sideband:** USB (for SSB)
**Allocation:** Primary
**Character:** The busiest VHF band; local FM, repeaters, DX via tropo/meteor scatter/EME; satellites; APRS

| Class | Power |
|-------|-------|
| Foundation | 25 W |
| Intermediate | 100 W |
| Full | 1,000 W |

| Frequency | Modes | Notes |
|-----------|-------|-------|
| 144.000–144.025 MHz | Satellite | Satellite downlinks |
| 144.025–144.100 MHz | CW | EME lower portion |
| 144.100–144.150 MHz | CW / MGM | EME, JT65 |
| 144.150–144.400 MHz | SSB / CW / MGM | 144.300: SSB/CW calling (DX); 144.370: meteor scatter |
| 144.400–144.500 MHz | **BEACONS ONLY** | No QSOs, no FM |
| 144.500–144.794 MHz | All modes | 144.500: SSTV calling; 144.600: digital data |
| 144.794–144.990 MHz | Digital (unattended) | 144.800: APRS; DV gateways, packet |
| 144.990–145.194 MHz | FM repeater inputs | 12.5 kHz spacing |
| 145.200–145.594 MHz | FM simplex | **145.500: FM calling (mobile)** |
| 145.594–145.794 MHz | FM repeater outputs | 600 kHz above inputs |
| 145.806–146.000 MHz | Satellite service | 145.800: ISS downlink; 145.825: APRS-sat |

**Centres of Activity:**

| Frequency | Mode |
|-----------|------|
| 144.050 MHz | CW calling |
| 144.174 MHz | FT8 |
| 144.300 MHz | SSB/CW DX calling |
| 144.370 MHz | Meteor scatter |
| 144.500 MHz | SSTV calling |
| 144.800 MHz | APRS (national) |
| 145.500 MHz | FM calling (mobile) |
| 145.800 MHz | ISS voice downlink |

---

### 70 Centimetres — 430.000–440.000 MHz

**Sideband:** USB (for SSB)
**Allocation:** Secondary (shared with radiolocation primary)
**Character:** Local FM repeaters; digital voice; satellite; ATV; EME

| Class | Power (430–432 MHz) | Power (432–440 MHz) |
|-------|---------------------|---------------------|
| Foundation | 25 W | 25 W |
| Intermediate | 40 W ERP | 100 W |
| Full | 40 W ERP | 1,000 W |

> **London restriction:** 431–432 MHz is unavailable within a 100 km radius of Charing Cross, London.

| Frequency | Modes | Notes |
|-----------|-------|-------|
| 430.000–432.000 MHz | All modes | Internet voice gateways; repeater outputs (7.6 MHz shift) |
| 432.000–432.100 MHz | CW / MGM | EME; JT65 |
| 432.100–432.400 MHz | SSB / CW / MGM | 432.200: SSB/CW calling |
| 432.400–432.500 MHz | **BEACONS ONLY** | Propagation and personal beacons |
| 432.500–432.994 MHz | All modes | RTTY, SSTV, AM, fax |
| 432.994–433.381 MHz | FM/DV repeater outputs | 1.6 MHz shift from inputs |
| 433.394–433.600 MHz | FM/DV simplex | **433.500: FM calling** |
| 433.600–434.600 MHz | All modes | 433.700: emergency priority channel |
| 434.594–434.981 MHz | FM/DV repeater inputs | 1.6 MHz below outputs |
| 435.000–438.000 MHz | Satellite service | Amateur satellite |
| 438.000–440.000 MHz | All modes | DV calling 438.6125 MHz |

**Centres of Activity:**

| Frequency | Mode |
|-----------|------|
| 432.174 MHz | FT8 |
| 432.200 MHz | SSB/CW calling |
| 433.500 MHz | FM calling (UK) |
| 433.700 MHz | Emergency priority |
| 438.6125 MHz | Digital voice calling |

---

### 23 Centimetres — 1240–1325 MHz

**Sideband:** USB (for SSB)
**Allocation:** Secondary (shared with radiolocation — L-band radar)
**Access:** **Intermediate and Full ONLY** — Foundation not permitted
**Character:** Microwave entry band; ATV; narrowband DX; EME

| Class | Power |
|-------|-------|
| Foundation | NOT PERMITTED |
| Intermediate | 50 W |
| Full | 400 W |

> **Caution:** This band shares spectrum with L-band civil and military radar (1215–1400 MHz). Amateurs must not cause interference and must accept interference from primary users.

| Frequency | Modes | Notes |
|-----------|-------|-------|
| 1240.000–1243.000 MHz | All modes / ATV inputs | Narrowband; beacons; ATV repeater inputs |
| 1243.250–1260.000 MHz | ATV / Data | — |
| 1260.000–1270.000 MHz | Satellite uplinks | Caution — primary radar 1250–1290 MHz |
| 1270.000–1296.000 MHz | All modes / ATV | Wideband digital |
| 1296.000–1296.150 MHz | CW / Narrowband | 1296.065: EME; 1296.100: SSB/CW calling |
| 1296.150–1296.800 MHz | All modes narrowband | 1296.500: FM calling |
| 1296.800–1297.000 MHz | Digital (unattended) | Beacons, APRS |
| 1297.000–1297.500 MHz | FM repeater outputs | 25 kHz spacing |
| 1298.000–1298.500 MHz | FM repeater inputs | — |
| 1298.500–1300.000 MHz | All modes | — |
| 1300.000–1325.000 MHz | ATV repeater outputs | UK-unique extension |

**Centres of Activity:**

| Frequency | Mode |
|-----------|------|
| 1296.065 MHz | EME |
| 1296.100 MHz | SSB/CW calling |
| 1296.500 MHz | FM calling |

---

## Part 3: Quick Reference Tables

### Power Limits at a Glance (Post-February 2024)

| Band | Foundation | Intermediate | Full | Notes |
|------|-----------|-------------|------|-------|
| 160m (primary) | 25 W | 100 W | 400 W | |
| 160m (secondary) | 32 W | 32 W | 32 W | All classes capped |
| 80m | 25 W | 100 W | 1,000 W | |
| 60m | — | — | 100 W | Full only |
| 40m | 25 W | 100 W | 1,000 W | |
| 30m | 25 W | 100 W | 150 W | Secondary; CW/digital only |
| 20m | 25 W | 100 W | 1,000 W | |
| 17m | 25 W | 100 W | 1,000 W | WARC — no contests |
| 15m | 25 W | 100 W | 1,000 W | |
| 12m | 25 W | 100 W | 1,000 W | WARC — no contests |
| 10m | 25 W | 100 W | 1,000 W | |
| 6m (primary) | 25 W | 100 W | ~400 W | |
| 6m (secondary) | 25 W | 100 W | 100 W | All limited |
| 4m | 25 W | 100 W | 160 W | Band-specific Full limit |
| 2m | 25 W | 100 W | 1,000 W | |
| 70cm (430–432) | 25 W | 40 W ERP | 40 W ERP | London restriction |
| 70cm (432–440) | 25 W | 100 W | 1,000 W | |
| 23cm | — | 50 W | 400 W | Intermediate/Full only |

### SSB Sideband Convention

| Below 10 MHz | Above 10 MHz |
|-------------|-------------|
| **LSB** (Lower Sideband) | **USB** (Upper Sideband) |
| 160m, 80m, 40m | 30m (digital only), 20m, 17m, 15m, 12m, 10m, 6m, 4m, 2m, 70cm, 23cm |

> **Why?** This is a historical convention from early SSB equipment design. There's no technical reason — it's simply what everyone does, and if you transmit on the wrong sideband, your audio will be unintelligible.

### Band Restrictions Summary

| Band | Key Restriction |
|------|----------------|
| 60m | Full licence only; channelised; no mobile; no contests; 100 W / 200 W EIRP |
| 30m | CW and narrow digital only — no SSB; no contests; secondary allocation |
| 17m, 12m | WARC bands — no contest activity (IARU agreement) |
| 160m above 1.850 | Secondary — 32 W max all classes |
| 4m | Full licence capped at 160 W (not 400/1000 W) |
| 70cm 430–432 MHz | 40 W ERP max; unavailable within 100 km of Charing Cross |
| 23cm | Foundation excluded; secondary; shared with L-band radar |

### FT8 Frequencies — Every Band

| Band | FT8 Centre |
|------|-----------|
| 160m | 1.840 MHz |
| 80m | 3.573 MHz |
| 60m | 5.357 MHz |
| 40m | 7.074 MHz |
| 30m | 10.136 MHz |
| 20m | 14.074 MHz |
| 17m | 18.100 MHz |
| 15m | 21.074 MHz |
| 12m | 24.915 MHz |
| 10m | 28.074 MHz |
| 6m | 50.313 MHz |
| 2m | 144.174 MHz |
| 70cm | 432.174 MHz |

---

## Sources and Further Reading

- **RSGB Band Plans** — updated annually each January/February: [rsgb.org/main/operating/band-plans/](https://rsgb.org/main/operating/band-plans/)
- **Ofcom Amateur Radio Licence** (OFW611) — the legal document defining your permitted frequencies and power
- **UK Frequency Allocation Table (UKFAT)** — Ofcom's master list of all UK spectrum users
- **IARU Region 1 Band Plans** — the international framework the RSGB band plan is based on

> **Always check the current RSGB band plan.** Band plans are updated each year and frequencies can change. The RSGB website has the definitive current version.

---

*Sideband snippets are short-form RF-Hub reference topics. They appear in lessons, blog posts, and the knowledge base.*
