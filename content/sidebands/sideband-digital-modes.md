# Sideband: Digital Modes — Every Way Your Radio Can Talk Without Your Voice

**Tags:** `[F]` `[I]` `[FL]`
**RSGB Refs:** 8A1, 8B1, 8C1, 8D1
**Cross-refs:** Unit 8 (Operating Practices), Foundation syllabus Section 8
**Series:** Sideband — Topic Snippets for RF-Hub

---

Amateur radio isn't just voice and Morse code. There are **over 30 digital modes** — ways for your radio to send and receive data using a computer. Some let you make contacts on the other side of the world with just 5 watts. Others send email without the internet. Some transmit images, and some create entire mesh networks.

This guide covers every major digital mode available to amateur radio operators today, organised by what they do.

---

## How Digital Modes Work — The Basics

Every digital mode follows the same basic principle: your computer generates audio tones that encode data. These tones feed into your radio's microphone input (or USB audio port). The radio transmits them as an RF signal. At the other end, a receiver captures the signal, feeds the audio to a computer, and software decodes it back into data.

Modern radios like the **Icom IC-7610** (HF/6m) and **IC-9700** (VHF/UHF/23cm) make this simple — a single USB cable carries both audio and radio control. Older radios need a sound card interface like a SignaLink USB or Digirig.

**Three things you need for most digital modes:**
1. A radio (SSB for HF modes, FM for VHF/UHF modes)
2. A computer running the appropriate software
3. A connection between them (USB cable, sound card interface, or both)

---

## 1. Weak-Signal and DX Modes

These modes are designed to make contacts when signals are barely above the noise floor. They use clever encoding to pull data out of signals you can't even hear.

### FT8 — The King of Digital

**What it is:** The most popular digital mode in amateur radio. FT8 (Franke-Taylor 8-FSK) makes brief, structured contacts using 15-second transmission cycles. It can decode signals **21 dB below the noise floor** — that's a signal buried so deep in noise it's completely inaudible.

**How it works:** Your computer and the distant station exchange callsigns, grid locators, and signal reports in a fixed sequence. Each transmission carries just 77 bits of information — about 13 characters. The entire contact takes roughly 75 seconds.

**Why it matters:** FT8 has transformed amateur radio. A 5-watt station with a simple wire antenna can work stations thousands of kilometres away. PSK Reporter logs approximately **26 million spots per day**, of which nearly 90% are FT8.

| Detail | Value |
|--------|-------|
| Bandwidth | 50 Hz |
| Cycle time | 15 seconds |
| Min decode SNR | −21 dB |
| Software | WSJT-X, JTDX |
| IC-7610 | Yes — all HF bands + 6m |
| IC-9700 | Yes — 2m and 70cm |

**Common dial frequencies:**

| Band | Frequency (MHz) |
|------|-----------------|
| 80m | 3.573 |
| 40m | 7.074 |
| 30m | 10.136 |
| 20m | 14.074 |
| 17m | 18.100 |
| 15m | 21.074 |
| 10m | 28.074 |
| 6m | 50.313 |
| 2m | 144.174 |
| 70cm | 432.174 |

**Important:** FT8 is **not** a conversational mode. You can't type messages. It's a structured exchange — callsigns, signal reports, and confirmation. Think of it as a digital handshake, not a conversation.

**UK Licence:** All levels (Foundation, Intermediate, Full).

---

### FT4 — FT8's Faster Sibling

**What it is:** A faster variant of FT8 designed for contesting. Uses 7.5-second cycles instead of 15 — roughly 2.5 times faster. Slightly less sensitive than FT8 (−17.5 dB vs −21 dB) but still decodes signals well below the noise.

| Detail | Value |
|--------|-------|
| Bandwidth | 90 Hz |
| Cycle time | 7.5 seconds |
| Min decode SNR | −17.5 dB |
| Software | WSJT-X |
| IC-7610 / IC-9700 | Yes |

**When to use it:** During digital contests, or when band conditions are good enough that FT8's extra sensitivity isn't needed.

---

### JT65 — The Moonbounce Pioneer

**What it is:** Designed for EME (Earth-Moon-Earth / moonbounce) communication. Uses 65 tones and 60-second transmission cycles for even deeper weak-signal performance (−24 dB). Largely superseded by FT8 on HF but still used for EME on VHF/UHF.

| Detail | Value |
|--------|-------|
| Bandwidth | ~178 Hz |
| Cycle time | 60 seconds |
| Min decode SNR | −24 dB |
| Software | WSJT-X |

---

### JT9 — The Narrowband Specialist

**What it is:** Companion to JT65 using only 9 tones and an extraordinarily narrow **16 Hz bandwidth** — less than 10% of JT65. Slightly more sensitive (−25 dB). Now largely replaced by FT8 for most purposes.

---

### WSPR — The Propagation Reporter

**What it is:** WSPR (Weak Signal Propagation Reporter, pronounced "whisper") is a one-way beacon mode. Your station transmits its callsign, grid locator, and power level. Stations worldwide receive it and upload reports to the WSPRnet database. It's not for making contacts — it's for **mapping propagation**.

**Why it's remarkable:** WSPR decodes at **−28 dB** SNR. A 200 mW WSPR beacon has the effective DX capability of a 1 kW SSB transmitter. Run it overnight on 5 watts and wake up to a map showing exactly where your signal reached.

| Detail | Value |
|--------|-------|
| Bandwidth | 6 Hz |
| Transmission time | 110.6 seconds |
| Min decode SNR | −28 dB |
| Software | WSJT-X |
| Typical power | 200 mW to 5 W |
| IC-7610 / IC-9700 | Yes |

---

### Q65 — For Fading Signals on VHF+

**What it is:** A weak-signal mode optimised for fast-fading propagation on VHF and above — troposcatter, rain scatter, ionoscatter, and EME. Uses 65-tone FSK with variable sequence lengths (15 to 300 seconds).

| Detail | Value |
|--------|-------|
| Software | WSJT-X |
| IC-7610 | 6m only |
| IC-9700 | Yes — primary platform |

---

### MSK144 — Meteor Scatter

**What it is:** Designed for meteor scatter communication on VHF. Meteors leave brief ionised trails in the atmosphere that reflect radio signals. MSK144 uses extremely short message bursts (72 ms frames) to exploit these reflections, which typically last only 0.1 to 10 seconds.

**Range:** 500–2,000 km via meteor trail reflections. Best during major showers (Perseids in August, Geminids in December) but usable year-round.

| Detail | Value |
|--------|-------|
| Primary band | 2m (144 MHz) |
| Software | WSJT-X |
| IC-9700 | Yes |

---

### FST4 — LF and MF Specialist

**What it is:** Designed for the lowest amateur bands — 2200m (136 kHz) and 630m (472 kHz). Approaches theoretical sensitivity limits with transmission sequences up to 30 minutes long. FST4W provides WSPR-like beacon functionality for these bands.

---

## 2. Keyboard and Chat Modes

These modes let you type messages back and forth in real-time — digital conversations over radio.

### PSK31 — The Original PC Digital Mode

**What it is:** One of the first popular PC-based digital modes, developed by Peter Martinez (G3PLX) in 1998. Uses phase-shift keying at 31.25 baud for keyboard-to-keyboard chat. Fits in just 31 Hz of bandwidth.

**How it works:** You type, your computer converts text to audio tones using phase shifts, and the other station's computer decodes them back to text. Free-form text — you can say whatever you want.

| Detail | Value |
|--------|-------|
| Bandwidth | ~31 Hz |
| Speed | ~50 WPM |
| Software | fldigi, HRD DM780 |
| IC-7610 / IC-9700 | Yes |

**Current status:** Declining. FT8 and JS8Call have taken much of the activity, but you'll still find operators on 20m (14.070 MHz) and 40m.

---

### JS8Call — FT8 With Conversations

**What it is:** Built on FT8's modulation but extended for **free-form text messaging, store-and-forward, and relay networking**. Developed by Jordan Sherer (KN4CRD). Where FT8 is a structured handshake, JS8Call is a full conversation.

**Key features:**
- Free-form text messages up to several hundred characters
- Store-and-forward messaging — leave a message for someone who isn't online
- Relay capability — messages hop through other stations to reach the destination
- Heartbeat beacons for network presence
- Designed for emergency communications and off-grid operation

| Detail | Value |
|--------|-------|
| Min decode SNR | −24 dB |
| Speed modes | Slow (8 WPM), Normal (15.6 WPM), Fast, Turbo, Ultra |
| Software | JS8Call |
| IC-7610 / IC-9700 | Yes |
| Internet required | No — fully RF-based |

**Growing popularity** in the emergency communications (EMCOMM) community.

---

### RTTY — The Classic

**What it is:** Radio Teletype — the original digital mode dating back to mechanical teletypes. Uses frequency-shift keying (FSK) with a 170 Hz shift between mark and space. Still popular for HF contesting (CQWW RTTY, ARRL RTTY Roundup).

| Detail | Value |
|--------|-------|
| Bandwidth | ~250 Hz |
| Speed | 45.45 baud (~60 WPM) |
| Encoding | 5-bit Baudot (uppercase only) |
| Software | fldigi, MMTTY, N1MM+ |
| IC-7610 | Yes — has built-in RTTY decoder |

---

### Olivia MFSK — The Noise Fighter

**What it is:** A multi-frequency shift keying mode designed for extremely difficult conditions. Uses multiple tones with strong error correction. Can decode when the **noise is 10 times stronger than the signal**. Excellent for ragchewing in poor conditions.

| Detail | Value |
|--------|-------|
| Common config | 8/250 (8 tones, 250 Hz BW) |
| Software | fldigi |
| Best for | Conversation in poor conditions |

---

### Hellschreiber (Feld-Hell) — The Visual Mode

**What it is:** Characters are transmitted as graphical images — painted pixel by pixel onto a scrolling display. Based on 1920s mechanical technology. Your eye does the decoding rather than an algorithm. Works surprisingly well in high noise because human pattern recognition is remarkably good.

| Detail | Value |
|--------|-------|
| Bandwidth | ~75 Hz |
| Speed | ~35 WPM |
| Software | fldigi |

**Fun fact:** Still has a dedicated community — the Feld Hell Club.

---

### Other Chat Modes

| Mode | Notes |
|------|-------|
| **Contestia** | Derived from Olivia, roughly twice the speed. Capital letters only. |
| **Thor** | MFSK-based with full-time FEC. Extremely robust against multipath. |
| **MFSK16** | Multi-tone FSK, ~42 WPM. Can send small images alongside text. |
| **PSK63/125** | Faster variants of PSK31 — wider bandwidth, higher speed. |

---

## 3. Digital Voice Modes

Instead of transmitting your analogue voice as-is, digital voice modes encode it into a data stream. This gives you clearer audio, data alongside voice, and — with internet linking — worldwide communication through local repeaters and hotspots.

### D-STAR — Your IC-9700's Built-In Digital Voice

**What it is:** Digital Smart Technologies for Amateur Radio. An open protocol developed by JARL (Japan Amateur Radio League), primarily manufactured by Icom. **Your IC-9700 has D-STAR built in.**

**What it does:**
- **Digital voice** with simultaneous low-speed data (1200 bps alongside voice)
- **Call sign routing** — call a specific person by their callsign, and the network routes your call to whichever repeater they're on, anywhere in the world
- **GPS position reporting** (D-PRS) — your position transmitted alongside your voice
- **Reflectors** — internet-connected conference rooms. Link your local repeater (or hotspot) to a reflector and talk to operators worldwide
- **DD mode** (23cm only) — 128 kbps data, essentially high-speed networking over radio

**How the network works:**
1. Your IC-9700 transmits D-STAR on 2m, 70cm, or 23cm
2. A local D-STAR repeater (or your own hotspot) receives it
3. The gateway connects via internet to reflectors or routes your call
4. The distant station hears you through their local repeater/hotspot

**Reflector types:**

| Type | Protocol | Notes |
|------|----------|-------|
| REF | DPlus | Original reflector system |
| XRF | DExtra | Community alternative |
| DCS | DCS | German centralised system |
| XLX | Multi-protocol | Newest — bridges D-STAR, DMR, and C4FM |

**Popular UK reflectors:** DCS001 (UK National), XLX316, REF001

**To get started:** Register your callsign at a D-STAR gateway. The IC-9700 can also work D-STAR simplex (radio to radio, no internet).

| Detail | Value |
|--------|-------|
| Modulation | GMSK, 4800 bps total |
| Voice codec | AMBE (proprietary) |
| Channel bandwidth | 6.25 kHz |
| IC-7610 | No — HF radio, no D-STAR |
| IC-9700 | **Yes — native D-STAR** |

---

### DMR — Digital Mobile Radio

**What it is:** A commercial digital voice standard (ETSI) adapted for amateur radio. Uses **TDMA** (Time Division Multiple Access) — two timeslots on a single 12.5 kHz channel, effectively doubling the capacity of each frequency.

**How it differs from D-STAR:**
- Uses **talkgroups** instead of reflectors — virtual channels for group conversations
- Requires a **DMR ID** (7-digit number from RadioID.net)
- Radio needs a **codeplug** — a configuration file containing channels, talkgroups, and contacts
- **Many manufacturers** make DMR radios (Anytone, TYT, Hytera, Radioddity) — from £30 to £150

**Key concepts:**
- **Timeslots:** TS1 and TS2 — two simultaneous conversations on one frequency
- **Colour codes:** 0–15, like CTCSS but digital — must match the repeater
- **Talkgroups:** Static (always active) or dynamic (activated by keying up)
- **Common UK talkgroups:** 91 (Worldwide), 235 (UK), 9 (Local)
- **Networks:** Brandmeister (largest, thousands of repeaters), TGIF (simpler, hobbyist-friendly)

| Detail | Value |
|--------|-------|
| Modulation | 4FSK TDMA |
| Voice codec | AMBE+2 (proprietary) |
| IC-7610 | No |
| IC-9700 | **No** — Icom doesn't make DMR radios |

**To use DMR:** You need a DMR-capable radio (not your Icoms). A hotspot (Pi-Star + MMDVM board) can bridge between D-STAR and DMR.

---

### C4FM / System Fusion — Yaesu's Answer

**What it is:** Yaesu's proprietary digital voice using C4FM (Continuous Four-Level FM) modulation. Its killer feature is **Auto Mode Select (AMS)** — the radio automatically detects whether an incoming signal is analogue FM or digital, so a Fusion repeater works for both.

**Internet linking via WIRES-X:** Yaesu's linking system connects Fusion nodes and rooms worldwide. Some radios can browse and connect to rooms directly from the display.

| Detail | Value |
|--------|-------|
| Modulation | C4FM FDMA |
| Voice codec | AMBE+2 |
| IC-7610 / IC-9700 | **No** — requires Yaesu radio |

**Cross-mode:** A Pi-Star hotspot can bridge between C4FM, D-STAR, and DMR — so your IC-9700 on D-STAR can reach people on Fusion and DMR networks.

---

### M17 — The Open-Source Alternative

**What it is:** A fully open-source digital voice protocol using the royalty-free **Codec2** vocoder. The only digital voice mode with **no proprietary components**. No licensing fees, no closed-source codecs.

**Why it matters:** D-STAR, DMR, and C4FM all use the proprietary AMBE codec, which adds cost to every radio. M17 uses the open-source Codec2, making the entire protocol free to implement.

**Current status:** Still early. Hardware options are limited (Module 17 adapter, prototype handhelds). Growing community support. Reflector network operational.

| Detail | Value |
|--------|-------|
| Voice codec | Codec2 (open source) |
| IC-7610 / IC-9700 | No — needs M17 hardware |

---

### FreeDV — Digital Voice on HF

**What it is:** Open-source digital voice for HF SSB. Uses Codec2 to transmit clear digital voice in **less bandwidth than analogue SSB**. Works with any SSB transceiver — just USB audio to a computer running FreeDV software.

| Detail | Value |
|--------|-------|
| Bandwidth | 1.1–1.6 kHz |
| Common calling freq | 14.236 MHz |
| Software | FreeDV (free) |
| IC-7610 | **Yes** — operates on HF SSB |
| IC-9700 | No |

---

### P25 — Public Safety Crossover

**What it is:** A digital radio standard built for police, fire, and EMS. Some amateur use on 70cm. Requires P25-capable hardware — not commonly used by UK amateurs.

---

### Digital Voice Comparison

| Feature | D-STAR | DMR | C4FM/Fusion | M17 |
|---------|--------|-----|-------------|-----|
| Codec | AMBE | AMBE+2 | AMBE+2 | Codec2 |
| Open source | Protocol yes, codec no | No | No | **Fully open** |
| Timeslots | 1 | 2 (TDMA) | 1 | 1 |
| FM compatible | No | No | **Yes (AMS)** | No |
| Manufacturers | Icom only | Many (cheap) | Yaesu only | DIY/limited |
| Internet linking | Reflectors | Talkgroups | WIRES-X | Reflectors |
| IC-9700 | **Native** | No | No | No |
| Hotspot bridge | Yes | Yes | Yes | Yes |

---

## 4. Data and Messaging Modes

These modes send structured data rather than voice or real-time text.

### Winlink — Email Without the Internet

**What it is:** A global system that sends and receives **standard email over radio**. Your message travels by RF from your station to a Winlink gateway, then via internet to the recipient's email inbox. In a disaster (no internet), the entire chain can work RF-only.

**How it works:**
1. You compose an email in Winlink Express (Windows) or Pat (Linux)
2. Your radio connects to an RMS gateway station via VARA, PACTOR, or ARDOP
3. The gateway forwards your email to the Winlink CMS (cloud server)
4. The CMS delivers it as normal email

**Transport protocols:**
| Protocol | Type | Speed | Hardware needed |
|----------|------|-------|----------------|
| VARA HF | Software modem (OFDM) | ~3000 bps | Sound card only |
| VARA FM | VHF/UHF variant | Faster | Sound card only |
| PACTOR III/IV | Hardware modem | ~3600–5500 bps | Dedicated TNC (£700+) |
| ARDOP | Open-source modem | Moderate | Sound card only |
| AX.25 Packet | Classic packet | 1200/9600 baud | TNC or software TNC |

| Detail | Value |
|--------|-------|
| IC-7610 | Yes — VARA HF, PACTOR, ARDOP |
| IC-9700 | Yes — VARA FM, Packet on VHF/UHF |
| Internet required | At gateway end (unless fully RF relay) |

**Essential for emergency communications.** Used by RAYNET (UK), ARES/RACES (US), military MARS, and SHARES networks worldwide.

---

### APRS — Automatic Packet Reporting System

**What it is:** A real-time system for tracking, messaging, weather reporting, and telemetry. Your station broadcasts position, weather data, or short messages. Digipeaters extend the range over RF, and iGates bridge to the internet, where everything appears on **aprs.fi** — a global real-time map.

**Common uses:**
- Vehicle/pedestrian tracking during events
- Weather station reporting
- Two-way text messaging
- Object placement (mark locations on the map)
- Telemetry from remote stations
- ISS regularly digipeats APRS packets (145.825 MHz)

| Detail | Value |
|--------|-------|
| UK frequency | 144.800 MHz |
| Data rate | 1200 baud AX.25 |
| Software | YAAC, Xastir, APRSdroid |
| IC-7610 | Limited — HF APRS at 300 baud |
| IC-9700 | Yes — VHF APRS with external TNC |

---

### AX.25 Packet Radio

**What it is:** The data protocol underneath APRS and Winlink VHF. Packet radio was the original amateur digital networking system. Uses 1200 baud on VHF and 9600 baud on UHF. Still used for APRS, Packet BBS systems, and Winlink access.

**Software TNC:** Direwolf — a free software TNC that replaces hardware TNCs. Runs on a PC or Raspberry Pi with a sound card connection to your radio.

---

### Packet BBS — Store and Forward Messaging

**What it is:** Bulletin board systems accessible via packet radio. Connect to a local BBS to read and post messages, which get forwarded between BBSes via RF. No internet required. Experiencing a small resurgence among off-grid enthusiasts.

---

## 5. Image Modes

### SSTV — Slow-Scan Television

**What it is:** Transmits still images over radio. Each image takes 36 seconds to several minutes depending on the mode and resolution. The signal fits in a standard SSB audio channel (~3 kHz).

**How it works:** Brightness is mapped to audio frequency — 1500 Hz = black, 2300 Hz = white, with sync pulses at 1200 Hz. The receiving software paints the image line by line as the signal comes in.

**Popular formats:**

| Mode | Time | Notes |
|------|------|-------|
| Robot 36 | ~36 sec | Fast, lower resolution |
| Scottie S1 | ~110 sec | Popular in USA |
| Martin M1 | ~114 sec | Popular in Europe |
| PD120 | ~126 sec | High resolution, used by ISS |

**The ISS regularly transmits SSTV images** on 145.800 MHz during special events. You can receive them with nothing more than a handheld and a phone app (Robot36 on Android).

**Primary HF calling frequency:** 14.230 MHz

| Detail | Value |
|--------|-------|
| IC-7610 | Yes — HF SSTV on SSB |
| IC-9700 | Yes — VHF/UHF SSTV on FM |
| Software | MMSSTV, QSSTV, Robot36 |

---

### Weather FAX (Radiofax)

**What it is:** Receive-only mode for weather charts broadcast by national weather services on HF. Not an amateur transmission mode, but received by many amateurs. UK broadcasts from Northwood on frequencies including 4610 and 8040 kHz.

| Detail | Value |
|--------|-------|
| IC-7610 | Yes — receive on HF |
| Software | fldigi, JWX |

---

### ATV / DATV — Amateur Television

**What it is:** Full-motion video over radio. Analogue ATV requires ~6 MHz bandwidth (UHF and above only). Digital ATV (DATV) uses DVB-S encoding for better quality in less bandwidth. Requires dedicated equipment — not something your IC-7610 or IC-9700 handles.

**UK club:** BATC (British Amateur Television Club).

---

## 6. Internet-Linked Voice Systems

These systems connect amateur radio stations worldwide using the internet as a backbone. You talk on your local radio, and the audio is carried over the internet to distant stations.

### EchoLink

**What it is:** VoIP system connecting amateur stations over the internet. Can be accessed from a radio (via a local EchoLink node) or directly from a PC or smartphone app. Callsign verification required.

| Detail | Value |
|--------|-------|
| Access | Radio via node, or smartphone/PC app |
| IC-9700 | Yes — via VHF/UHF FM to local node |

---

### AllStar Link

**What it is:** Fully open-source VoIP linking system based on Asterisk PBX. Connects repeaters, remote bases, and hotspots. Over 23,000 nodes online. Popular with experimenters due to open-source nature.

---

### IRLP — Internet Radio Linking Project

**What it is:** Radio-to-radio only VoIP linking (no smartphone access). Uses DTMF commands to connect to other nodes. Declining as EchoLink and AllStar offer more flexibility.

---

### WIRES-X

**What it is:** Yaesu's internet linking system for System Fusion and analogue FM nodes. Requires Yaesu hardware (HRI-200 interface or WIRES-X capable radio). Cross-mode bridging possible via Pi-Star hotspot.

---

### Internet-Linked Comparison

| System | Open source | App access | Radio access | Cross-mode |
|--------|-------------|------------|--------------|------------|
| EchoLink | No | Yes (iOS/Android) | Yes (VHF/UHF FM) | Limited |
| AllStar | **Yes** | Web dashboard | Yes (VHF/UHF FM) | Via bridges |
| IRLP | No | No | Yes (VHF/UHF FM) | No |
| WIRES-X | No | No | Yaesu only | Via Pi-Star |
| D-STAR reflectors | Varies | No | D-STAR radios | Via XLX |
| Brandmeister (DMR) | No | Dashboard | DMR radios | **Yes — extensive** |

---

## 7. Mesh and Emergency Networks

These create entire data networks over radio — independent of the internet.

### AREDN — Amateur Radio Emergency Data Network

**What it is:** Converts off-the-shelf Wi-Fi routers into mesh network nodes operating on amateur radio frequencies. Creates self-forming, self-healing IP networks. Run VoIP phones, video conferencing, web servers, Winlink, and chat — all over radio.

| Detail | Value |
|--------|-------|
| Bands | 900 MHz, 2.4 GHz, 3.4 GHz, 5.8 GHz |
| Hardware | Modified Ubiquiti/Mikrotik/TP-Link routers |
| Range | 5–15 km (2.4 GHz), 20–50 km (5.8 GHz with directional antenna) |
| Speed | Up to 150 Mbps (5.8 GHz) |
| IC-7610/IC-9700 | No — uses dedicated Wi-Fi hardware |

**No encryption permitted** on amateur frequencies. Growing rapidly in the emergency communications community.

---

### Meshtastic — LoRa Text Messaging

**What it is:** A LoRa-based mesh networking platform for off-grid text messaging. Uses inexpensive radio modules (£15–40) to create decentralised mesh networks. Messages hop between nodes to extend range. Community range record: **331 km**.

| Detail | Value |
|--------|-------|
| Bands | 868 MHz (EU ISM), 433 MHz (amateur) |
| Range | 2–5 km urban, 10–20 km rural, 100+ km with line-of-sight |
| Power | Days on a small battery |
| Encryption | AES-256 on ISM bands (NOT permitted on amateur bands) |
| IC-7610/IC-9700 | No — uses dedicated LoRa hardware |
| Licence | None needed on 868 MHz ISM band |

**Exploding in popularity** — hundreds of thousands of active devices worldwide. Popular with outdoor, preparedness, and amateur radio communities.

---

### HAMNET — European Backbone

**What it is:** A high-speed amateur radio IP network primarily in German-speaking Europe. Uses commercial wireless equipment on amateur microwave bands (5.8 GHz) to create a backbone network separate from the internet. Links between mountain-top relay sites carry megabit+ speeds.

---

## 8. Getting Connected — Your IC-7610 and IC-9700

### IC-7610 (HF + 6m)

Your IC-7610 has a **built-in USB audio codec** — a single USB-B cable to your PC handles everything:
1. Install Icom USB driver
2. Connect USB cable
3. Two virtual devices appear: COM port (CI-V control) and sound card
4. Set radio to USB-D (USB Digital) mode
5. In WSJT-X/fldigi: select the Icom sound card for audio, COM port for CAT control

**What it can do digitally:**
- All HF weak-signal modes (FT8, FT4, WSPR, JT65, JT9, Q65, FST4)
- All HF chat modes (PSK31, RTTY, JS8Call, Olivia, Hellschreiber)
- Winlink (VARA HF, PACTOR with external TNC, ARDOP)
- SSTV on HF
- FreeDV digital voice on HF
- Weather FAX reception
- Built-in RTTY encoder/decoder

**What it can't do:** D-STAR, DMR, C4FM, APRS (no VHF/UHF).

### IC-9700 (2m / 70cm / 23cm)

Same USB setup as the IC-7610. Plus:
- **Native D-STAR** — digital voice, reflectors, call sign routing, D-PRS GPS
- Can run two digital modes simultaneously (one per VFO)
- VHF/UHF weak-signal modes (FT8, Q65, MSK144 meteor scatter)
- VHF APRS (with external TNC or Direwolf)
- Winlink (VARA FM, Packet)
- SSTV on VHF/UHF
- DD mode on 23cm (128 kbps data)

**What it can't do:** DMR, C4FM (different manufacturers). But a **Pi-Star hotspot** can bridge your D-STAR to DMR and C4FM networks.

### The Pi-Star Hotspot — Your Bridge Between Worlds

A **hotspot** is a low-power personal "repeater" that fits in your pocket. It connects your radio (via RF) to the internet, giving you access to reflectors, talkgroups, and rooms from home — even without a local repeater.

**Pi-Star** running on a Raspberry Pi with an MMDVM board can cross-mode between D-STAR, DMR, C4FM, P25, and NXDN. Your IC-9700 on D-STAR can reach people on DMR talkgroups and Fusion rooms.

---

## 9. Software You'll Need

### WSJT-X — Weak-Signal Modes

The essential software for FT8, FT4, JT65, JT9, WSPR, Q65, MSK144, and FST4. Free, open source, available on Windows, Linux, and macOS. Developed by Nobel laureate Joe Taylor (K1JT).

**Critical:** Your PC clock must be accurate to within ±1 second of UTC. Use NTP time synchronisation.

### fldigi — Everything Else

Supports 20+ modes including PSK31, RTTY, Olivia, Hellschreiber, MFSK, Contestia, Thor, CW, and Weather FAX. The Swiss army knife of digital modes.

### JS8Call — Messaging Over Radio

Standalone application for JS8Call mode. Free-form text messaging with store-and-forward and relay capabilities.

### Winlink Express / Pat — Email Over Radio

Winlink Express (Windows) or Pat (Linux/cross-platform) for sending and receiving email over HF and VHF radio.

### MMSSTV / QSSTV — Image Modes

MMSSTV (Windows) or QSSTV (Linux) for sending and receiving SSTV images.

### FreeDV — HF Digital Voice

FreeDV application for digital voice on HF SSB. Free and open source.

---

## The Quick Reference

| Mode | Type | Bandwidth | Software | IC-7610 | IC-9700 | Popularity |
|------|------|-----------|----------|---------|---------|------------|
| FT8 | Weak signal | 50 Hz | WSJT-X | Yes | Yes | Very high |
| FT4 | Weak signal | 90 Hz | WSJT-X | Yes | Yes | High (contests) |
| WSPR | Propagation | 6 Hz | WSJT-X | Yes | Yes | Moderate |
| JT65 | Weak signal (EME) | 178 Hz | WSJT-X | Yes | Yes | Low (EME only) |
| Q65 | Weak signal (VHF+) | Varies | WSJT-X | 6m only | Yes | Growing |
| MSK144 | Meteor scatter | — | WSJT-X | 6m only | Yes | Niche |
| PSK31 | Chat | 31 Hz | fldigi | Yes | Yes | Declining |
| RTTY | Chat/contest | 250 Hz | fldigi/MMTTY | Yes | Limited | Moderate |
| JS8Call | Messaging | 50 Hz | JS8Call | Yes | Yes | Growing |
| Olivia | Chat (weak signal) | 250–2000 Hz | fldigi | Yes | Limited | Low |
| Hellschreiber | Visual text | 75 Hz | fldigi | Yes | No | Niche |
| D-STAR | Digital voice | 6.25 kHz | Built-in | No | **Yes** | Moderate |
| DMR | Digital voice | 12.5 kHz | N/A | No | No | High |
| C4FM/Fusion | Digital voice | 12.5 kHz | N/A | No | No | Moderate |
| M17 | Digital voice (open) | 9 kHz | N/A | No | No | Emerging |
| FreeDV | Digital voice (HF) | 1.1–1.6 kHz | FreeDV | Yes | No | Low |
| Winlink | Email over radio | Varies | Winlink Express | Yes | Yes | High (EMCOMM) |
| APRS | Tracking/messaging | — | YAAC/APRSdroid | Limited | Yes | Moderate |
| SSTV | Images | 3 kHz | MMSSTV | Yes | Yes | Moderate |
| AREDN | Mesh network | Wi-Fi | AREDN firmware | No | No | Growing |
| Meshtastic | LoRa messaging | — | Meshtastic app | No | No | Very high |

---

## UK Licence Levels and Digital Modes

**Foundation licence holders** can use **all digital mode types**. The restriction is on power, not modes:
- Foundation: 25 W (10 W on some bands)
- Intermediate: 100 W (50 W on some bands)
- Full: 400 W (1 kW on some bands)

FT8's weak-signal capability means Foundation power limits are rarely a problem — 25 W on FT8 works worldwide.

**Bandwidth limits apply** — some wideband modes (PACTOR III/IV, ATV) may need Intermediate or Full depending on the band and occupied bandwidth. Check the Ofcom band plan.

---

*Sideband snippets are short-form RF-Hub reference topics. They appear in lessons, blog posts, and the knowledge base.*
