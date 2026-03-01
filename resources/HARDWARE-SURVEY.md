# SDR Platform Hardware Survey

**Generated:** 2026-02-17
**Host:** Raspberry Pi Compute Module 5 Lite (`sdr@10.0.1.155`)
**Purpose:** Document current hardware state and identify architectural constraints for future planning

---

## 1. Host Platform

| Component | Detail |
|-----------|--------|
| **Board** | Raspberry Pi Compute Module 5 Lite Rev 1.0 |
| **SoC** | BCM2712 (Cortex-A76, quad-core, 2.4 GHz) |
| **RAM** | 16 GiB LPDDR4X |
| **Storage** | 458 GiB NVMe (Samsung) on `/dev/nvme0n1` |
| **OS** | Ubuntu 25.10 (oracular), kernel 6.17.0-1008-raspi, aarch64 |
| **User** | `sdr` |
| **IP** | `10.0.1.155` (eth0, 10.0.1.0/24 LAN) |

**Memory at survey time:**
- Total: 15 GiB | Used: 1.1 GiB | Free: 13 GiB | Cache: 953 MiB
- Swap: 1.0 GiB (unused)

**Storage at survey time:**
- Root filesystem: 458 GiB total, 11 GiB used, 429 GiB free (3%)

---

## 2. USB Bus Architecture

### 2.1 Bus Topology

The CM5 exposes USB via two USB controllers and one legacy OTG controller:

```
Bus 1  — dwc2 (OTG)     USB 2.0 HS   480 Mbps   (legacy/OTG port)
Bus 2  — xhci-hcd       USB 2.0 HS   480 Mbps   ← HackRF Pro connected here
Bus 3  — xhci-hcd       USB 3.0 SS  5000 Mbps   (SuperSpeed pair for Bus 2)
Bus 4  — xhci-hcd       USB 2.0 HS   480 Mbps   ← USB Hub → RTL-SDR + HackRF One
Bus 5  — xhci-hcd       USB 3.0 SS  5000 Mbps   (SuperSpeed pair for Bus 4)
```

Bus 2/3 and Bus 4/5 are **paired port sets** — each physical USB-A port on the CM5 baseboard exposes both a USB 2.0 High Speed lane and a USB 3.0 SuperSpeed lane. However, USB 2.0 devices (like all three SDRs) can only use the HS lane and do not benefit from SuperSpeed capacity.

### 2.2 Current Device Assignment

> **Note:** HackRF One and HackRF Pro share USB PID `1d50:6089`.
> Use `hackrf_info` to identify the actual model.
> lsusb will label both as `"Great Scott Gadgets HackRF One SDR"` — Board ID from `hackrf_info` is authoritative:
> `2` = HackRF One, `5` = HackRF Pro.

```
Bus 001 — dwc2 OTG (480 Mbps)
  └── (empty)

Bus 002 — xhci USB 2.0 HS (480 Mbps)
  └── Port 1: HackRF Pro  [1d50:6089, serial ...e13]  → /dev/hackrf-pro
      ✓ hackrf_info: "This device is on its own USB bus."

Bus 003 — xhci USB 3.0 SS (5000 Mbps) — UNUSED by current SDR devices

Bus 004 — xhci USB 2.0 HS (480 Mbps)
  └── Port 1: QinHeng USB Hub  [1a86:8091]  (4-port, USB 2.0)
        ├── Hub Port 1: RTL-SDR  [0bda:2838, serial 81055823]  → /dev/rtlsdr
        └── Hub Port 2: HackRF One  [1d50:6089, serial ...b067]  → /dev/hackrf-one
            (Opera Cake antenna switch attached)
      ⚠ hackrf_info: "2 other devices on the same USB bus. You may have problems at high sample rates."

Bus 005 — xhci USB 3.0 SS (5000 Mbps) — UNUSED by current SDR devices
```

### 2.3 Stable Device Paths (udev)

Installed: `/etc/udev/rules.d/90-sdr-stable.rules`

| Symlink | Device | Serial |
|---------|--------|--------|
| `/dev/hackrf-pro` | HackRF Pro (TCXO/FPGA) | `...e13` |
| `/dev/hackrf-one` | HackRF One + Opera Cake | `...b067` |
| `/dev/rtlsdr` | Nooelec SMArt v5 (R820T2) | `81055823` |

---

## 3. SDR Device Inventory

### 3.1 HackRF Pro ("Praline")

| Field | Value |
|-------|-------|
| **Serial** | `0000000000000000977c64de2b357e13` |
| **Board ID** | 5 — HackRF Pro |
| **Hardware Rev** | r1.2 |
| **Firmware** | 2026.01.3 (API 1.10) |
| **Frequency** | 100 kHz – 6 GHz |
| **Max Bandwidth** | 20 MHz (complex I/Q) |
| **ADC/DAC** | 8-bit |
| **Interface** | USB 2.0 High Speed (480 Mbps) |
| **Special** | TCXO (temperature-compensated oscillator), FPGA, USB-C connector |
| **USB Bus** | Bus 002 — dedicated port, no hub, no shared devices |
| **hackrf_info status** | "This device is on its own USB bus." ✓ |

### 3.2 HackRF One (GSG r10)

| Field | Value |
|-------|-------|
| **Serial** | `000000000000000078d063dc2a48b067` |
| **Board ID** | 2 — HackRF One |
| **Hardware Rev** | r10 |
| **Firmware** | 2024.02.1 (API 1.08) |
| **Frequency** | 1 MHz – 6 GHz |
| **Max Bandwidth** | 20 MHz (complex I/Q) |
| **ADC/DAC** | 8-bit |
| **Interface** | USB 2.0 High Speed (480 Mbps) |
| **Attached** | Opera Cake antenna switch (address 0) |
| **USB Bus** | Bus 004 → via USB hub → shared with RTL-SDR |
| **libhackrf warning** | "2 other devices on same USB bus. You may have problems at high sample rates." |

### 3.3 Nooelec RTL-SDR SMArt v5

| Field | Value |
|-------|-------|
| **Serial** | `81055823` |
| **Tuner** | Rafael Micro R820T2 |
| **Frequency** | ~24 MHz – 1.766 GHz |
| **Max Bandwidth** | 2.4 MHz stable / 3.2 MHz reduced dynamic range |
| **ADC** | 8-bit (RTL2832U) |
| **Interface** | USB 2.0 High Speed (480 Mbps) |
| **Declared Power** | 500 mA |
| **USB Bus** | Bus 004 → via USB hub → shared with HackRF One |

### 3.4 U-Blox GNSS

| Field | Value |
|-------|-------|
| **Device** | `/dev/ttyACM0` |
| **USB ID** | `1546:01a9` |
| **Status** | gpsd running |
| **USB Bus** | Not confirmed — likely dwc2 (Bus 001) or Bus 004 hub |

---

## 4. USB Bandwidth Analysis

### 4.1 Theoretical Limits

USB 2.0 High Speed theoretical maximum: **480 Mbps (60 MB/s)**
Practical throughput after protocol overhead: **~400 Mbps (50 MB/s)**

HackRF bandwidth demand at various sample rates:

| Sample Rate | Bandwidth | Data Rate (8-bit I+Q) | % of USB 2.0 HS |
|-------------|-----------|----------------------|-----------------|
| 2 MSPS | 2 MHz | 4 MB/s (32 Mbps) | 7% |
| 8 MSPS | 8 MHz | 16 MB/s (128 Mbps) | 27% |
| 10 MSPS | 10 MHz | 20 MB/s (160 Mbps) | 33% |
| 20 MSPS | 20 MHz | **40 MB/s (320 Mbps)** | **67%** |

**At 20 MSPS (maximum), a single HackRF consumes ~67% of one USB 2.0 HS bus.**

### 4.2 Bus Contention — Current Setup

**Bus 004 (shared — CRITICAL concern):**
- HackRF One at 20 MSPS: 320 Mbps
- RTL-SDR at 2.4 MSPS: ~38 Mbps
- USB hub overhead: ~5–10%
- **Total demand: ~390 Mbps on a 480 Mbps bus**
- Headroom: <20% — fragile, likely to cause drops at max HackRF bandwidth

**Bus 002 (HackRF Pro — better, but still limited):**
- HackRF Pro at 20 MSPS: 320 Mbps
- Bus is otherwise empty
- Headroom: ~33% — adequate for single-device operation
- Not suitable for simultaneous TX+RX at high bandwidth

### 4.3 Simultaneous Dual-HackRF Operation

Running both HackRFs at high sample rates simultaneously requires:
- HackRF Pro (Bus 002): 20 MSPS → 320 Mbps
- HackRF One (Bus 004): 20 MSPS → 320 Mbps
- **Total: 640 Mbps across two 480 Mbps USB 2.0 buses**

Both buses are **individually** capable of sustaining one HackRF at full rate.
However, the HackRF One's bus is **shared with the RTL-SDR via a hub**, making simultaneous full-bandwidth operation of both HackRFs while running RTL-SDR unreliable.

### 4.4 USB 3.0 — Why It Doesn't Fully Help

The Pi5 CM5 has USB 3.0 SuperSpeed (5 Gbps) on Bus 3 and Bus 5.
All current SDR devices are **USB 2.0 only** — they negotiate High Speed (480 Mbps) regardless of whether connected to a USB 3.0 port.

USB 3.0 ports provide **bus isolation benefit**: a USB 2.0 device on a USB 3.0 port gets dedicated HS bandwidth without sharing the SS lane. However, the total USB 2.0 throughput per port remains 480 Mbps — no gain for single-device scenarios.

---

## 5. Architectural Concerns for High-Bandwidth Work

### 5.1 Summary of Issues

| Issue | Severity | Impact |
|-------|----------|--------|
| HackRF One + RTL-SDR on shared USB hub | **High** | Drop-outs at ≥8 MSPS with both active. **Confirmed 2026-02-17:** RTL-SDR stutters visibly in SDR++ with HackRF One idle — hub overhead alone sufficient to cause drops at 2.4 MSPS. HackRF Pro on dedicated Bus 002 receives cleanly simultaneously. |
| Both HackRFs share same xhci controller | **Medium** | Internal contention at full bandwidth |
| All SDRs are USB 2.0 HS limited | **Medium** | Hard ceiling of 40 MB/s per device |
| No USB 3.0 SuperSpeed SDR devices available | Low | Future devices may benefit from SS |
| dwc2 OTG bus (Bus 1) unused but slow | Low | Not useful for SDR — OTG/gadget mode |
| libhackrf warns on HackRF Pro "same bus" | Low | False positive — Pro has dedicated port |

### 5.2 Pi5 CM5 as Permanent Development Platform

The Pi5 CM5 is **adequate for single-device experiments** and lower sample rates. For serious high-bandwidth work (dual HackRF at 20 MSPS, simultaneous TX+RX, long captures), the USB architecture is the limiting factor — not the CPU or RAM.

**The Pi5 CM5 is better suited as a portable/field platform** where its compact form factor, low power consumption, and mobility outweigh the USB bandwidth constraints.

---

## 6. Future Host Platform

### 6.1 Requirements

The USB bandwidth analysis in section 4 drives the following requirements for a primary high-bandwidth SDR bench host:

**USB Architecture (critical):**
- Minimum 2 independent PCIe-backed xhci controllers — one dedicated per HackRF
- No USB hubs anywhere in the SDR signal path
- USB 3.0/3.1 Gen 1 or better on each SDR port (isolation + future USB 3.0 SDR devices)
- ≥500 mA power delivery per SDR port without hub

**System:**
- CPU: x86-64, ≥8 cores for real-time DSP (GNU Radio, signal processing pipelines)
- RAM: ≥16 GiB
- Storage: Fast NVMe (HackRF at 20 MSPS generates 2.4 GB/min of IQ data)
- PCIe: full-size slots available for dedicated USB controller cards
- OS: Ubuntu/Debian Linux — full SDR toolchain support

### 6.2 Platform Options Evaluated

#### Option A — AMD Ryzen Mini-PC (Beelink SER5/7, Minisforum UM780/890)

AMD Ryzen APUs integrate 2–3 independent xhci controllers directly into the CPU die.
Community `lsusb` reports show Bus 006–010 as separate root hubs on the Beelink SER5 —
a significant improvement over the Pi5. Compact, good Linux support, good DSP performance.

| Model | CPU | USB Controllers | Approx. Cost |
|-------|-----|----------------|-------------|
| Beelink SER5 Max | Ryzen 5 5600H | 3x independent xhci | ~£220 |
| Beelink SER7 | Ryzen 7 7735HS | 3x independent xhci | ~£350 |
| Minisforum UM890 Pro | Ryzen 9 8945HS | 3x independent xhci + USB4 | ~£500 |

**Advantage:** Compact, self-contained, strong CPU for DSP.
**Concern:** No full-size PCIe slots — cannot add dedicated USB cards if onboard controllers are
insufficient. USB port-to-controller mapping varies by baseboard; verification by `lsusb` on
actual hardware required before purchase.

---

#### Option B — Used x86 Desktop Workstation + Dedicated PCIe USB Cards ✓ *Selected*

A used enterprise-grade desktop (Dell Optiplex, HP EliteDesk, Lenovo ThinkCentre) with one
dedicated PCIe USB 3.1 card per HackRF device.

**Why this is the correct architecture for SDR:**

Each PCIe USB card is an independent PCIe endpoint with its own xhci controller, its own
interrupt line, and its own DMA path to system RAM. There is no shared silicon, no hub,
no contention. This is as clean as USB gets on any platform.

- HackRF Pro → dedicated PCIe USB 3.1 card (slot 1)
- HackRF One → dedicated PCIe USB 3.1 card (slot 2)
- RTL-SDR → onboard USB (low bandwidth, always-on monitoring — ADS-B, rtl_433)
- GNSS → onboard USB (serial only, negligible bandwidth)

| Component | Specification | Approx. Cost |
|-----------|--------------|-------------|
| Dell Optiplex 7070/7080 Tower | i7 9th/10th gen, 16–32 GiB RAM, NVMe | £80–150 used |
| PCIe USB 3.1 card x2 | Single-port, dedicated xhci (e.g. StarTech, Inateck) | £15–25 each |
| **Total** | | **~£110–200** |

**Advantage:** Best possible USB isolation. Full PCIe expansion. Proven enterprise Linux
support. Cheap. Substantial CPU headroom for GNU Radio DSP workloads.
**Concern:** Desktop form factor — not portable. Larger power draw than mini-PC.

**Note on PCIe card selection:** Choose cards based on the **ASMedia ASM3142** or
**Fresco Logic FL1100** chipsets — both have excellent Linux kernel support and are
well-tested with HackRF and RTL-SDR. Avoid generic no-name cards with unknown chipsets.

---

#### Option C — Pi5 CM5 + PCIe USB Expansion via M.2

The Pi5 CM5 has a PCIe Gen 2 x1 lane (500 MB/s) accessible on some baseboards.
An M.2 Key-M to USB 3.1 controller card could add one independent bus.

**Advantage:** Lowest cost upgrade to existing hardware.
**Concern:** PCIe Gen 2 x1 bandwidth is shared with the M.2 slot. Adds only one extra
controller. Pi5 remains the bottleneck for sustained multi-device operation. Not a
long-term solution.

---

#### Option D — No Change (Pi5 Mitigation Only)

Continue with the Pi5, applying the bandwidth management rules from section 5:
- HackRF Pro on Bus 002 for all high-bandwidth work
- RTL-SDR for always-on low-bandwidth services only
- HackRF One rate-limited to ≤8 MSPS when RTL-SDR is active

**Advantage:** Free. Sufficient for many experiments.
**Concern:** Dual-HackRF at full bandwidth is not achievable. Hub contention remains.

---

### 6.3 Decision

**Selected: Option B — Used Dell tower + dedicated PCIe USB 3.1 cards per device.**

Rationale:
- Guarantees complete USB isolation per SDR device — no compromise
- Lowest total cost of any option that meets the requirements
- Full PCIe expansion path for future hardware (additional SDR devices, capture cards, GPU for DSP)
- Enterprise-grade Linux compatibility out of the box
- Pi5 CM5 transitions to its natural role: portable/field platform

*Platform selection TBD — specific Dell Optiplex model and PCIe card selection to be documented once hardware is acquired.*

### 6.4 Pi5 Interim Mitigation

While the bench host is being sourced:

1. **Use HackRF Pro (Bus 002) for all high-bandwidth experiments** — cleanest bus path
2. **RTL-SDR for always-on services only** (ADS-B, ISM monitoring) — low bandwidth, stays on hub
3. **Never run HackRF One + RTL-SDR simultaneously at high sample rates**
4. **Cap HackRF One at ≤8 MSPS when RTL-SDR is active**

---

## 7. Installed Software State

| Tool | Version/Status | Notes |
|------|---------------|-------|
| libhackrf | git-cc63a764 | Compiled from source — supports HackRF Pro API 1.10 |
| SDR++ | v1.2.1 | Compiled from source. sdrpp-server.service enabled, port 5259 |
| rtl_sdr / librtlsdr | Installed | Package install |
| rtl_433 | Installed | ISM band decoder |
| dump1090-mutability | Installed (service inactive) | Needs RTL-SDR device assignment |
| SoapySDR | Installed | Hardware abstraction layer |
| gpsd | Active (running) | U-Blox GNSS on /dev/ttyACM0 |
| GNU Radio | **Not installed** | Required for complex DSP flows |
| Python 3.13 | Installed | |
| gcc/g++, cmake, git | Installed | Build toolchain ready |

### systemd Services

| Service | Status |
|---------|--------|
| `gpsd.service` | Active (running) |
| `sdrpp-server.service` | Enabled (running) |
| `dump1090-mutability.service` | Installed, **inactive** |

### udev Rules

| File | Purpose |
|------|---------|
| `/etc/udev/rules.d/20-rtlsdr.rules` | RTL-SDR mode 0666 |
| `/etc/udev/rules.d/53-hackrf.rules` | HackRF plugdev access |
| `/etc/udev/rules.d/90-sdr-stable.rules` | **Stable symlinks by serial** (added 2026-02-17) |

---

## 8. Open Items

- [ ] Evaluate mini-PC / NUC as primary high-bandwidth SDR host
- [ ] Investigate CM5 baseboard USB port layout — can RTL-SDR be moved off the hub?
- [ ] Configure dump1090-mutability service with `/dev/rtlsdr`
- [ ] Create systemd unit for rtl_433 persistent ISM monitoring
- [ ] Install GNU Radio for complex DSP work
- [ ] Set up MQTT broker for decoded data egress
- [ ] Investigate powered USB hub replacement with per-port power switching

---

*Survey performed 2026-02-17. Pi5 CM5 established as portable/prototype platform. Future primary development host TBD.*
