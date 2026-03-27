# SDR-Agent Task Ideas & Roadmap

**Created:** 2026-02-17
**Source:** V2-Director initial assessment after hardware survey

---

## Phase 1 — Foundation (Get services running)

| # | Task | Priority | Notes |
|---|------|----------|-------|
| 1 | **Create udev rules for stable device naming** | High | USB enumeration order is not guaranteed. Map by serial/VID:PID to `/dev/sdr-rtl`, `/dev/sdr-hackrf0`, `/dev/sdr-hackrf1`, `/dev/gnss` |
| 2 | **Decide RTL-SDR assignment: ADS-B vs ISM** | High | Only one process can use the RTL-SDR at a time — pick primary use case |
| 3 | **Configure dump1090 as systemd service** | High | ADS-B aircraft tracking on 1090 MHz. Already installed, just needs service config and device path |
| 4 | **Configure rtl_433 as systemd service** | High | ISM band decoder (433/868 MHz). Binary installed, needs unit file + output config (JSON to file or MQTT) |
| 5 | **Set up MQTT broker (Mosquitto)** | High | Central data bus for all decoded SDR output. rtl_433 and dump1090 both support MQTT natively |

---

## Phase 2 — Data Pipeline (Make output useful)

| # | Task | Priority | Notes |
|---|------|----------|-------|
| 6 | **rtl_433 → MQTT → Home Assistant** | Medium | Decode weather stations, door sensors, tyre pressure — feed into HA for automation |
| 7 | **dump1090 → JSON API / tar1090 web UI** | Medium | Install tar1090 for browser-based aircraft map. Expose on LAN. |
| 8 | **Feed ADS-B to FlightAware / ADS-B Exchange** | Medium | Contribute data to community tracking networks — gets you a free FlightAware Enterprise account |
| 9 | **GNSS → NTP server (Stratum 1)** | Medium | Use U-Blox PPS output to run a precision NTP server for the whole LAN. Sub-microsecond accuracy. |
| 10 | **Grafana dashboard for SDR metrics** | Medium | Visualise aircraft count, ISM device activity, GPS fix quality, signal levels over time |

---

## Phase 3 — Advanced (HackRF & DSP)

| # | Task | Priority | Notes |
|---|------|----------|-------|
| 11 | **Install GNU Radio** | Low | Required for custom DSP flowgraphs, signal analysis, amateur radio experimentation |
| 12 | **hackrf_sweep spectrum scanner** | Low | Full 1MHz-6GHz sweep to map the local RF environment. Good for interference hunting. |
| 13 | **SDR++ or GQRX for interactive use** | Low | GUI SDR receiver — needs X11 forwarding or VNC. Good for exploration and debugging. |
| 14 | **Amateur radio TX/RX experiments** | Low | Requires amateur license (Foundation level minimum for TX in UK). HackRF can transmit. |
| 15 | **AIS marine tracking** | Low | If near coast/waterway — 161.975/162.025 MHz. RTL-SDR + rtl_ais. |
| 16 | **NOAA weather satellite reception** | Low | 137 MHz APT signals from NOAA-15/18/19. RTL-SDR + satdump. Produces weather imagery. |
| 17 | **LoRa / Meshtastic monitoring** | Low | 868 MHz (EU). Decode LoRa packets if any Meshtastic nodes are nearby. |

---

## Infrastructure Tasks

| # | Task | Priority | Notes |
|---|------|----------|-------|
| 18 | **Automated USB device health check** | Medium | Cron job to verify all 4 USB devices still enumerated. Alert if one drops. |
| 19 | **Log rotation for SDR services** | Medium | journald handles systemd services, but any file-based output needs logrotate config |
| 20 | **Backup SDR configs to NAS** | Low | Rsync service configs, udev rules, and custom scripts to `cc-share/SDR-PI-Dev/` |
| 21 | **Power monitoring** | Low | Pi5 CM5 can throttle under load. Monitor `vcgencmd measure_temp` and throttle state. |

---

## Decision Points (Need PO Input)

| Decision | Options | Impact |
|----------|---------|--------|
| RTL-SDR primary assignment | ADS-B (dump1090) **or** ISM (rtl_433) | Can only do one at a time with single RTL-SDR |
| MQTT broker location | Local on Pi5 **or** central on 210 **or** existing HA broker | Affects data routing and latency |
| Public ADS-B feeding | Feed to FlightAware/ADSBx **or** keep private | Free Enterprise account if feeding |
| GNU Radio install | Now **or** defer until needed | ~2GB disk, only needed for HackRF DSP work |

---

*Ideas are rough — refine into CCPM tasks when ready to sprint.*
