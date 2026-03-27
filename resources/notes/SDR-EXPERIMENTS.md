# SDR Experiments & Use Cases

**Hardware:** 2x HackRF One, 1x Nooelec RTL-SDR v5, 1x U-Blox GNSS
**Platform:** Pi5 CM5 Lite (16GB RAM, 458GB NVMe) @ 10.0.1.155

---

## ADS-B Aircraft Tracking

**Frequency:** 1090 MHz | **Device:** RTL-SDR | **Tool:** dump1090-mutability

Aircraft broadcast their position, altitude, speed, heading, and callsign on 1090 MHz using Mode S transponders. The RTL-SDR can receive these unencrypted broadcasts and decode them in real time.

**What you can do:**
- Live aircraft map in a web browser (tar1090 or dump1090 web UI)
- Track every aircraft within ~200 nautical miles (line of sight dependent)
- Log flight data to database for historical analysis
- Feed to FlightAware — get a free Enterprise account in return
- Feed to ADS-B Exchange — open data, no commercial strings
- Feed to multiple aggregators simultaneously (dump1090 supports it)
- Correlate with GNSS timestamps for precise timing
- Build alerts: "notify me when a helicopter is within 5km"

**Data output:** JSON over HTTP, SBS BaseStation format, or raw AVR hex. Typically 50-500+ messages/second depending on air traffic density.

**Interesting angles:**
- Compare coverage with/without external antenna vs stock RTL-SDR antenna
- Map your reception range — dump1090 can generate polar range plots
- Detect military aircraft (they sometimes broadcast ADS-B, sometimes don't)
- Track ISS if it passes overhead (ISS has an ADS-B transponder experiment)

---

## ISM Band Monitoring (433/868 MHz)

**Frequency:** 433.92 MHz, 868 MHz | **Device:** RTL-SDR | **Tool:** rtl_433

The ISM (Industrial, Scientific, Medical) bands are used by hundreds of consumer devices that transmit without encryption. rtl_433 decodes over 250 device protocols out of the box.

**What you can pick up:**
- **Weather stations** — temperature, humidity, wind speed, rainfall (Acurite, Oregon Scientific, Fine Offset, LaCrosse)
- **Car tyre pressure sensors (TPMS)** — pressure and temperature from passing vehicles
- **Door/window sensors** — wireless alarm sensors broadcasting open/close
- **Smoke detectors** — some wireless interconnected models
- **Energy monitors** — OWL, Efergy, CurrentCost power consumption sensors
- **Soil moisture sensors** — garden automation sensors
- **Pool thermometers** — floating wireless temperature sensors
- **Garage door openers** — presence detection (not replay)
- **Wireless doorbells** — trigger detection
- **Baby monitors** — older DECT-style units on 868 MHz
- **Gas/water meters** — some smart meters broadcast on 868 MHz (AMR)
- **Refrigerator/freezer thermometers** — wireless kitchen sensors

**Data pipeline:**
```
RTL-SDR → rtl_433 → JSON → MQTT → Home Assistant / Grafana / InfluxDB
```

**Interesting angles:**
- Discover devices you didn't know existed in your neighbourhood
- Build a "neighbourhood weather network" from multiple stations you can receive
- TPMS data can tell you how many cars pass your house and their tyre health
- Feed into Home Assistant for automation (e.g., close windows when rain sensor triggers)
- Run for 24 hours and catalogue every ISM device within range

---

## Spectrum Analysis & RF Environment Survey

**Frequency:** 1 MHz – 6 GHz | **Device:** HackRF One | **Tool:** hackrf_sweep, inspectrum

The HackRF can sweep the entire spectrum from 1 MHz to 6 GHz in seconds. This lets you map every radio signal in your environment.

**What you can do:**
- **Full spectrum sweep** — see every transmitter from AM radio to WiFi 6E
- **Interference hunting** — find sources of radio noise affecting other equipment
- **Signal identification** — capture unknown signals and characterise them (frequency, bandwidth, modulation)
- **Waterfall recording** — record spectrum activity over time to spot intermittent signals
- **WiFi channel survey** — visualise 2.4 GHz and 5 GHz band usage
- **Mobile network mapping** — see which LTE/5G bands are in use locally
- **EMI debugging** — find unintentional radiators (switched-mode PSUs, LED drivers, USB3 interference)
- **Before/after comparisons** — measure RF impact of new equipment

**Tools:**
- `hackrf_sweep` — command-line sweep, outputs CSV for plotting
- `inspectrum` — GUI tool for analysing captured IQ files
- `qspectrumanalyzer` — real-time spectrum analyser GUI
- Custom Python with `matplotlib` — scriptable analysis

**Interesting angles:**
- Record a 24-hour waterfall and see how the RF environment changes (morning commute = more phones, evening = more WiFi)
- Compare indoor vs outdoor reception
- Map your house room-by-room for WiFi signal strength
- Find that mystery interference that's been killing your WiFi

---

## Amateur Radio Experimentation

**Frequency:** 1 MHz – 6 GHz (TX + RX) | **Device:** HackRF One | **Tool:** GNU Radio

The HackRF can both transmit and receive, making it a universal amateur radio transceiver (with appropriate filtering and amplification for serious work).

**What you can do (RX only — no license needed):**
- Listen to amateur radio conversations (HF SSB, VHF FM, UHF repeaters)
- Decode digital modes: FT8, WSPR, PSK31, APRS, DMR, D-STAR, C4FM
- Receive amateur satellites (AMSAT, ISS digipeater)
- WSPR propagation monitoring — see which HF bands are open right now

**What you can do (TX — requires amateur license):**
- Transmit on amateur bands (Foundation license is straightforward in the UK)
- APRS position beacons
- Digital voice (DMR, FreeDV)
- WSPR beacon — contribute propagation data
- Satellite uplink experiments (very low power, directional antenna needed)

**Note:** HackRF output is ~-10 dBm (0.1 mW). For practical TX you need an external amplifier and bandpass filter. Fine for lab experiments and very short range work. Two HackRFs allow simultaneous TX on one, RX on the other.

**Interesting angles:**
- Decode APRS to see local amateur activity on a map
- Listen to FT8 on 20m (14.074 MHz) — worldwide contacts with milliwatts
- Receive ISS APRS digipeater (145.825 MHz) when it passes overhead
- WSPR monitoring gives real-time HF propagation data

---

## NOAA Weather Satellite Imagery

**Frequency:** 137 MHz | **Device:** RTL-SDR or HackRF | **Tool:** satdump, noaa-apt, WXtoImg

Three NOAA satellites (NOAA-15, NOAA-18, NOAA-19) continuously broadcast weather imagery as they orbit. Each pass takes ~12 minutes and covers a ~3000 km wide strip.

**What you receive:**
- APT (Automatic Picture Transmission) — analogue signal at 137 MHz
- Visible light and infrared imagery of Earth from ~800 km altitude
- Real-time cloud cover, storms, weather fronts visible
- Each pass produces a unique image of your region

**Requirements:**
- RTL-SDR or HackRF (RTL-SDR is fine)
- V-dipole or QFH antenna (simple to build, huge improvement over stock antenna)
- Satellite pass prediction (look up NOAA pass times for your location)
- Clear sky view (works through clouds — it's the satellite's camera that sees clouds)

**Pipeline:**
```
RTL-SDR → FM demod → APT decode → PNG image
```

**Interesting angles:**
- Build a V-dipole antenna from coat hangers for under a pound
- Automate reception: predict passes, record, decode, save to gallery
- Compare your received imagery with official NOAA imagery
- METEOR-M2 satellites also broadcast digital LRPT at 137 MHz — higher resolution than NOAA APT
- Post your images online — there's an active community of satellite image collectors

---

## LoRa / Meshtastic Monitoring

**Frequency:** 868 MHz (EU) / 915 MHz (US) | **Device:** RTL-SDR or HackRF | **Tool:** rtl_433 (partial), custom decoders

LoRa (Long Range) is a chirp-spread-spectrum modulation used by IoT devices and the Meshtastic mesh networking project. If anyone in your area runs Meshtastic nodes, you can see their traffic.

**What you can pick up:**
- LoRaWAN IoT sensors (The Things Network devices)
- Meshtastic mesh messages (if nodes are in range)
- Private LoRa links (industrial sensors, agricultural monitoring)
- LoRa signal strength and propagation characteristics

**Limitations:** LoRa's spread spectrum makes it harder to decode than simple OOK/FSK signals. rtl_433 has basic LoRa support. Full decoding needs a dedicated LoRa radio or custom DSP.

**Interesting angles:**
- Survey how many LoRa devices are active in your area
- Test LoRa range from your location — how far can you receive?
- If you add a dedicated LoRa module (SX1276/SX1262), the Pi5 becomes a Meshtastic gateway

---

## AIS Marine Tracking

**Frequency:** 161.975 MHz, 162.025 MHz | **Device:** RTL-SDR | **Tool:** rtl_ais, AIS-catcher

Ships broadcast their position, heading, speed, and identity on AIS (Automatic Identification System). If you're within range of any waterway, port, or coast, you can track shipping.

**What you receive:**
- Ship name, MMSI, IMO number
- Position (lat/lon), course, speed
- Ship type, dimensions, draught
- Destination and ETA

**Range:** 20-50+ nautical miles depending on antenna height and terrain.

**Pipeline:**
```
RTL-SDR → rtl_ais / AIS-catcher → NMEA sentences → OpenCPN / MarineTraffic feed
```

**Interesting angles:**
- Feed to MarineTraffic to get a free station listing
- Combine with ADS-B for a complete air + maritime traffic picture
- Even inland, you may pick up river/canal traffic

---

## Pager Decoding (POCSAG/FLEX)

**Frequency:** 153-169 MHz | **Device:** RTL-SDR | **Tool:** multimon-ng

Pager networks still operate in the UK (hospitals, emergency services, businesses). POCSAG and FLEX are unencrypted protocols — you can decode the messages.

**What you receive:**
- Hospital pager messages (nurse calls, emergency alerts)
- Fire service callouts
- Engineering alerts
- Restaurant/bar table buzzers (some use POCSAG)

**Legal note:** Receiving is legal in the UK under the Wireless Telegraphy Act. Publishing or acting on intercepted messages is restricted.

**Pipeline:**
```
RTL-SDR → rtl_fm → multimon-ng → text output
```

---

## FM/DAB Radio & Broadcast Analysis

**Frequency:** 88-108 MHz (FM), 174-240 MHz (DAB) | **Device:** RTL-SDR | **Tool:** rtl_fm, dabtools

Not the most exotic use case but useful for testing and baseline measurements.

**What you can do:**
- Receive and demodulate FM radio stations
- Decode DAB/DAB+ digital radio (dabtools, welle.io)
- RDS (Radio Data System) decoding — station name, programme type, traffic info
- Measure FM signal strength for propagation studies
- Detect pirate radio stations

---

## Stratum 1 NTP Server (GNSS)

**Device:** U-Blox GNSS | **Tool:** gpsd + chrony/ntpd

The U-Blox GNSS module provides GPS time accurate to ~50 nanoseconds. This can drive a Stratum 1 NTP server — the highest tier of time accuracy available.

**What you get:**
- LAN-wide precision time synchronisation
- Independence from internet NTP servers
- Sub-millisecond accuracy for all devices on the network
- PPS (Pulse Per Second) if the U-Blox module supports it — gets you to ~1 microsecond

**Why it matters:**
- Log correlation across multiple servers/devices
- Accurate timestamps on SDR captures
- Network forensics and debugging
- Pure nerd satisfaction of having a Stratum 1 clock

**Setup:**
```
U-Blox → gpsd → chrony (prefer over ntpd for modern systems)
```

---

## Signal Intelligence & Protocol Reverse Engineering

**Device:** HackRF One | **Tool:** Universal Radio Hacker (URH), inspectrum, GNU Radio

For unknown or undocumented protocols, the HackRF can capture raw IQ samples for offline analysis.

**What you can investigate:**
- Unknown wireless devices around the house
- Proprietary remote controls (garage doors, car key fobs — RX analysis only)
- Smart meter protocols
- Industrial wireless sensors
- Custom IoT protocols

**Tools:**
- **Universal Radio Hacker (URH)** — GUI for capture, demod, and protocol analysis
- **inspectrum** — visualise and annotate IQ captures
- **GNU Radio** — build custom demodulation chains
- **SigDigger** — signal analysis tool

**Workflow:**
```
1. Identify frequency (hackrf_sweep or known spec)
2. Capture IQ samples (hackrf_transfer)
3. Analyse in URH/inspectrum
4. Identify modulation (OOK, FSK, GFSK, etc.)
5. Extract bit patterns
6. Reverse engineer protocol
```

---

## Multi-Device Experiment Ideas

These experiments use two or more SDR devices simultaneously:

| Experiment | Devices Used | Description |
|-----------|-------------|-------------|
| **Simultaneous ADS-B + ISM** | RTL-SDR + HackRF | ADS-B on RTL-SDR, ISM monitoring on HackRF (HackRF works fine for RX at 433 MHz) |
| **TX/RX loopback test** | HackRF #1 + HackRF #2 | Transmit on one, receive on other. Verify modulation, test signal chains. |
| **Wideband scan + narrowband capture** | HackRF (sweep) + RTL-SDR (focused) | Use HackRF to find signals, RTL-SDR to monitor them continuously |
| **Direction finding** | 2x RTL-SDR (if you add another) | Phase comparison between two antennas for rudimentary direction finding |
| **GPS-disciplined spectrum capture** | U-Blox + HackRF | Timestamp IQ captures with GPS time for precise signal timing |
| **Correlated ADS-B + AIS** | RTL-SDR + HackRF | Track aircraft AND ships simultaneously for complete transport picture |

---

## Data Integration Ideas

| Source | Sink | Value |
|--------|------|-------|
| rtl_433 → MQTT | Home Assistant | Automate based on nearby sensors (weather, motion, door states) |
| dump1090 → JSON | Grafana + InfluxDB | Historical aircraft traffic analysis, coverage mapping |
| hackrf_sweep → CSV | Python + matplotlib | RF environment reports, interference analysis |
| gpsd → chrony | LAN NTP | Precision time for all network devices |
| AIS → NMEA | OpenCPN | Maritime situational awareness |
| All sources → MQTT | Node-RED | Custom automation, alerting, cross-source correlation |

---

## Quick Win Priority (What to set up first)

1. **dump1090 + tar1090** — instant gratification, aircraft on a map within minutes
2. **rtl_433 → MQTT** — discover what ISM devices are around you (often surprising)
3. **hackrf_sweep** — one command gives you a picture of the entire RF spectrum
4. **GNSS NTP** — gpsd already running, just add chrony config
5. **NOAA satellite pass** — schedule a capture for the next NOAA pass overhead

---

*This hardware combination covers the RF spectrum from 1 MHz to 6 GHz with both RX and TX capability. The Pi5's 16GB RAM and NVMe storage can handle even demanding DSP workloads like GNU Radio flowgraphs.*
