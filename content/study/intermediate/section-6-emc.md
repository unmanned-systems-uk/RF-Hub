# Section 6: Electromagnetic Compatibility (EMC)

<!-- Exam weight: ~8% (~3–4/46 questions) -->
<!-- Sub-sections: 6A, 6B, 6C, 6D, 6E, 6F, 6G -->
<!-- Syllabus refs: 6A1-4, 6B1-3, 6C1-2, 6D1-4, 6E1-3, 6F2-3 -->
<!-- RSGB source: Chapter 8 Good Radio Housekeeping (pp.45–47) + Chapter 9 Harmonics & Spurious Emissions (pp.48–49) -->

EMC is the least glamorous part of amateur radio — until you have an interference problem. Then it becomes the most urgent. This section covers what the law says about interference, where interference comes from, and how to deal with it from both sides of the problem: as the amateur who is potentially causing it, and as the amateur whose weak-signal reception is being ruined by it.

The practical wisdom here matters for your day-to-day operating licence conditions, for keeping good relations with your neighbours, and for one or two exam questions.

---

## 6A — What is EMC?

### Definition (6A1, 6A2)

**Electromagnetic Compatibility (EMC)** is the ability of equipment to function correctly in its electromagnetic environment without itself causing unacceptable interference to other equipment in that environment.

The definition has two sides:
1. **Emission** — your equipment must not radiate RF energy that interferes with other equipment
2. **Susceptibility/Immunity** — your equipment must be able to operate in the presence of RF energy from other equipment without being disrupted

Both sides are legally required. The EMC Directive (now adopted into UK law post-Brexit as the **Electromagnetic Compatibility Regulations**) requires that:
- Manufacturers must design equipment that does not cause undue interference
- Manufacturers must ensure equipment has adequate immunity to interference
- Equipment must carry the **CE marking** (or UKCA marking post-Brexit) to confirm it meets these requirements

> [INFO] **6A1, 6A2:** EMC has two sides: emission (don't cause interference) and immunity (withstand interference from others). Both are legal requirements under UK/EU EMC Regulations. CE/UKCA marking indicates compliance.

### The Amateur's Position (6A3, 6A4)

Amateur radio is unusual: we are licensed to **transmit at significant power levels in residential areas** — a privilege that comes with responsibility. This puts us in a dual position:

- As **transmitters:** we are potentially a source of interference to neighbours' televisions, radios, telephones, speakers, and any other electronic devices
- As **receivers:** we are victims of the modern electrical noise floor — switch-mode power supplies, LED drivers, solar inverters, VDSL modems, and hundreds of other domestic sources all radiate broadband noise that degrades our weak-signal reception

Your amateur licence conditions include a requirement to **accept interference from lawfully operated equipment** (particularly ISM devices) and an obligation to ensure your transmissions comply with the licence conditions regarding spurious emissions. This is a two-way acknowledgement of the shared electromagnetic environment.

> [INFO] **6A3, 6A4:** Amateurs have a special dual role: we are both potential sources of interference (to neighbours) and victims of interference (from domestic electronics). The licence obliges us to operate cleanly and to accept some interference from lawfully operated equipment.

### Why CE-Marked Equipment Can Still Be Interfered With (6A3)

A device bearing a CE mark has been tested for immunity — but only up to a **stated level**. The immunity test levels in the EN standards are set for a typical domestic environment, not for a property next door to a legal amateur station running 100 W into a garden antenna.

In practice:
- An amateur transmitter at 50 W on 7 MHz can produce an electric field strength of several volts per metre at 5–10 metres range
- The immunity test for CE-marked consumer goods requires the equipment to survive fields of typically 1–3 V/m at the test frequency
- The amateur's legitimate transmission can therefore exceed the immunity level that CE marking requires, while still being fully compliant with the amateur licence

This means both statements can be simultaneously true: **your transmission is clean and legal**, and **the victim equipment is CE-marked and compliant**. Interference still happens. Neither party is technically at fault. The immunity standard assumes equipment will not be used immediately adjacent to a high-power transmitter.

This is not a loophole to hide behind — the practical and neighbourly duty is to minimise unnecessary interference regardless of the legal position. But it does mean the amateur is not automatically in the wrong.

> [INFO] **6A3:** CE marking guarantees immunity only to the test level stated in the relevant EN standard. Amateur transmitters in residential gardens may produce field strengths exceeding that test level. Both the amateur and the neighbour's equipment can be fully compliant while interference still occurs.

---

## 6B — Sources of Interference

### Harmonics from Your Transmitter (6B1)

As covered in Section 3, **harmonics** are signals at exact multiples of the fundamental frequency:

```
Fundamental: f
2nd harmonic: 2f
3rd harmonic: 3f
nth harmonic: nf
```

A transmitter on 7.050 MHz produces harmonics at 14.100 MHz, 21.150 MHz, 28.200 MHz, etc. If these harmonics are not suppressed, they will be radiated from your antenna along with the wanted signal.

Why harmonics are produced: all power amplifiers have some non-linearity. A perfectly linear amplifier would produce only the fundamental frequency. Real amplifiers produce small amounts of harmonics. A **low-pass filter** at the transmitter output suppresses harmonics above the operating frequency.

> [INFO] **6B1:** Harmonics are produced by non-linearity in the transmitter PA. They fall at exact multiples of the fundamental. A low-pass filter in the transmitter output path suppresses them. Check: the 2nd harmonic of a 50 MHz signal is 100 MHz (FM broadcast band) — an unlicensed transmission on that frequency.

### Spurious Emissions (6B1)

Beyond harmonics, transmitters can produce **spurious emissions** — unwanted signals that are not simply multiples of the fundamental:

- **Mixer products** — intermodulation products from the mixing stages in a transceiver
- **Oscillator leakage** — the local oscillator or synthesiser signal leaking to the output
- **Phase noise** — noise sidebands on a signal generated by an impure oscillator
- **Parasitic oscillations** — the PA oscillating at a frequency it was not designed for, often due to stray capacitance or inductance

Well-designed modern equipment has very low spurious levels. Home-built equipment or modified commercial equipment needs careful checking.

### Domestic and Commercial Interference Sources (6B2, 6B3)

The modern home is a broadband noise generator. Common sources:

| Source | Typical frequency range | What it sounds like |
|--------|------------------------|---------------------|
| Switch-mode power supplies (chargers, LED drivers, PC PSUs) | Broadband, 50 kHz–30 MHz+ | Broadband hiss or ticking |
| VDSL modems (FTTC broadband) | Up to ~17 MHz | Broadband noise, especially 3.5–7 MHz |
| LED lighting (cheap unfiltered drivers) | Broadband | Buzzing |
| Solar PV inverters | Broadband, variable | Wideband hash |
| Plasma TVs | Broadband, strongest below 10 MHz | Broadband hash (mostly obsolete now) |
| Arcing thermostats | Broadband, triggered cyclically | Click/buzz correlated with thermostat switching |
| Electric motors / motor brushes | Broadband | Buzzing correlated with motor running |
| Computers and peripherals | Broadband, clock harmonics | Broadband + regular peaks at clock harmonics |
| Vehicle ignition systems | Broadband, pulse | Ticking/buzzing while engine runs |
| Industrial: welding equipment, SCADA | Variable | |

A receiving amateur in a modern residential area may experience a **noise floor of S5–S7** on HF. An S9 DX signal 20 years ago would have been workable; the same signal today may be buried in noise. This is one of the biggest practical challenges for HF reception in urban environments.

> [INFO] **6B2, 6B3:** Common domestic interference sources include SMPS, LED lighting, VDSL modems, solar inverters, arcing thermostats, and computers. These raise the HF noise floor, making weak-signal reception difficult. All are covered by EMC Regulations requiring a minimum immunity level.

### Why Some Devices Interfere and Others Do Not (6B2)

The pattern is consistent: **devices that switch electrical current rapidly produce broadband RF noise**; devices that simply heat or move at slow speeds produce little or none. Understanding why helps you prioritise the investigation when your noise floor rises.

**HIGH interference potential:**
- Switched-mode power supplies (any charger, LED driver, PC PSU, TV power supply) — the switching transistor creates fast edges at the switching frequency and all its harmonics, extending from audio frequencies into the HF range and beyond
- PLT (Powerline Telecommunications) / VDSL modems — deliberately inject RF into the mains wiring as a data carrier; the mains wiring acts as an unintentional antenna
- LED lighting with cheap or unfiltered drivers — the LED driver is a switch-mode converter running at 50–500 kHz
- Solar PV inverters and battery inverters — high-power switching at RF-generating frequencies
- EV chargers — high-power switching converters
- Electric motors with carbon brush commutators — the commutator sparks on every contact; a vacuum cleaner or power drill produces bursts of broadband noise
- Arcing thermostats — the arc at the contact switch produces a click-burst every cycle

**LOW or no interference potential:**
- Soldering irons — passive resistive heating element, no switching, no RF emission
- Incandescent light bulbs — resistive heating, no RF emission (now largely replaced)
- Mechanical clocks — no electrical switching
- Linear (non-switching) power supplies — only mains-frequency harmonics, negligible at HF

**Practical diagnostic step:** with your receiver running, walk around the building switching circuits off at the consumer unit one at a time. Watch the noise floor. The circuit whose disconnection makes a significant difference identifies the culprit.

---

## 6C — Effects of Interference

### What Breakthrough Looks and Sounds Like (6C1, 6C2)

**When amateur transmissions break through into domestic equipment:**

| Cause | Effect on victim equipment |
|-------|---------------------------|
| AM or SSB speech | Speech sounds heard on analogue radio, telephone, or hi-fi speakers |
| FM transmissions | Muted or reduced volume on FM receiver ("capture effect" — FM receiver locks onto the stronger signal) |
| Digital modes | Buzzing or clicking sounds correlated with the digital signal rhythm |
| CW | Clicking or tone correlated with the keying |
| Any strong RF | Digital audio dropouts, VDSL disconnections, DAB muting, pixelation on digital TV |

> [INFO] **6C1:** AM/SSB breakthrough causes speech sounds. FM breakthrough causes muted/reduced volume (capture effect). Strong RF on any mode can disrupt VDSL, DAB, digital TV.

### Masthead TV Amplifier Overload (6C2)

A **masthead amplifier** (also called a mast-head pre-amp or antenna booster) is a small wideband amplifier fitted at the top of the TV aerial mast, as close to the antenna as possible. Its purpose is to boost all incoming signals before the coax feeder attenuates them.

The problem for an amateur radio operator is that a masthead amplifier is **wideband** — it amplifies everything from roughly 40 MHz upward. When an amateur transmitter is nearby, the amplifier receives not only the TV signals in the UHF band (470–790 MHz) but also the much stronger amateur transmissions on HF or VHF.

A strong input signal can **overdrive (overload) the amplifier's input stage**. When a low-noise amplifier is overloaded, it generates **intermodulation products** — spurious signals that appear at combination frequencies across the entire spectrum. The effect on the TV is ghost images, patterning, sudden loss of signal, or dropouts on all channels simultaneously. All channels are affected, which distinguishes this from a co-channel interference problem.

**Counter-intuitive result:** the masthead amplifier was fitted to *improve* TV reception, but in the presence of a nearby amateur station it can actively worsen it by generating intermodulation across all channels.

**Fix:** fit a **high-pass filter** between the antenna and the masthead amplifier input. A filter that passes 470 MHz and above while rejecting HF and VHF amateur frequencies removes the overloading signal before it reaches the amplifier. Replacement masthead amplifiers with integrated bandpass filtering are also available.

> [INFO] **6C2 — masthead amplifier overload:** A wideband masthead amplifier can be overloaded by strong nearby amateur transmissions, generating intermodulation products that disrupt all TV channels simultaneously. Fix: fit a high-pass filter ahead of the amplifier to block amateur-band frequencies.

**When domestic interference affects your reception:**

Raised noise floor. On HF, a quiet rural amateur may have an S0–S2 noise floor; an urban amateur surrounded by switch-mode power supplies may have S5–S7. Weak DX signals that would otherwise be S4–S5 simply disappear into the noise.

The effect is particularly severe on 3.5 MHz (80 m) and 7 MHz (40 m), which are most affected by VDSL and SMPS noise. The higher bands are progressively less affected as the noise sources fall in efficiency above 10–15 MHz.

---

## 6D — Fixing Interference at the Source

### At the Transmitter (6D1, 6D3)

If your transmissions are causing interference, the first thing to check is whether the problem originates in your transmitter or in the victim equipment's inadequate immunity:

**Diagnostic test:** Disconnect your antenna and connect a dummy load. Transmit. If the interference disappears, the problem is caused by radiated RF from the antenna. If it persists, RF is entering the victim equipment via the mains supply or some other conducted path.

**If it is radiated RF from the antenna:**
- Check your transmitter for harmonics and spurious emissions (see §6F)
- Fit an **external low-pass filter** at the transmitter RF output, between the TX and the SWR meter/ATU (if not already fitted internally)
- Ensure your antenna is resonant — a mismatched antenna can cause RF current to flow in unexpected paths (on the coax braid, on mains cables) and radiate from places other than the antenna
- Reduce power to the minimum needed for the contact

**If it is conducted RF via the mains:**
- Fit a **ferrite ring** or **clip-on ferrite** to the mains lead at the transmitter, as close to the equipment as possible
- Fit a **mains filter** on the transmitter power supply lead to prevent RF entering the mains wiring
- A mains filter should be fitted between the mains socket and the power supply

> [INFO] **6D1, 6D3:** Low-pass filter at the TX output suppresses harmonics. Ferrite rings on mains leads prevent RF entering the domestic mains. Always place ferrites as close to the equipment as possible. Disconnect the antenna and test with a dummy load to determine whether the problem is radiated or conducted.

### Diagnostic Procedure — Radiated vs Conducted Path (6D4)

When a complaint arises, the first question is: **is the RF reaching the victim equipment through the air (radiated path), or through the mains wiring (conducted path)?** The symptoms alone do not tell you — both paths can produce identical effects at the victim device.

**Standard two-step procedure:**

**Step 1 — dummy load test:**
Disconnect the antenna, connect a 50 Ω dummy load, and transmit.
- If the interference **stops** → the problem is a **radiated path** from the antenna. The RF only reached the victim because the antenna was radiating. Fix: work on antenna placement, transmitter filtering, and victim-side ferrite chokes.
- If the interference **continues** → the RF is arriving via the **mains supply** as a conducted signal. The antenna is not the culprit — RF from your transmitter is coupling into the mains wiring directly. Fix: fit ferrite chokes on the transmitter mains lead, add a mains filter, and check the victim device's mains lead too.

**Step 2 — harmonic emission check (6D3):**
Once you have confirmed the primary path, check whether harmonics are contributing:
- Keep the dummy load connected
- Tune a general-coverage receiver (or RTL-SDR) to 2×f, 3×f, 4×f of your operating frequency in turn
- Key the transmitter briefly on CW
- A weak signal is normal — any significant signal strength indicates a harmonic that may be causing interference on that band

> [INFO] **6D3, 6D4 — diagnostic procedure:** (1) Disconnect antenna, use dummy load, transmit — if interference stops, the path is radiated from the antenna; if it continues, the path is conducted via mains. (2) Check harmonics by tuning a receiver to 2f, 3f, 4f with the dummy load connected.

### Route Separation and Cable Management (6D4)

Good cable management prevents many EMC problems before they start. The shack layout matters:

![EMC in a radio station — mains filtering, screened cables, physical route separation and RF earthing all work together to keep the station clean and reliable.](/assets/images/study/section-6/emc-station-layout.png)

**Principles:**
- **Physical separation:** keep RF cables away from mains cables, audio cables, and control cables. The coupling between cables decreases with distance (falls roughly as 1/distance). Even 20–30 cm of separation can make a significant difference.
- **Screened cables:** use good-quality coax with a heavy braid. Microphone leads and audio cables should be screened. Connectors must maintain continuity of the shield — a poor connector is as bad as no screen.
- **RF earth:** provide a dedicated RF earth in addition to the safety mains earth. The RF earth uses copper-coated steel rods (~2 m long) driven into the ground close to the shack, with a heavy gauge cable direct to the transmitter chassis. RF earths and mains earths serve different purposes — **never connect them directly** (this would defeat the mains earth safety function).

> [WARNING] **6A3:** Two earths are required in a shack: a **mains earth** (safety — keep, never remove) and an **RF earth** (performance). Confusing these or removing the mains earth is a safety hazard and can cause fatal electric shock.

### Ferrite Chokes (6D2)

**Ferrite rings and clip-on ferrites** are the most versatile tools in EMC troubleshooting. Different ferrite materials are optimised for different frequency ranges:

- **Material 31/43:** effective from 1–300 MHz — good general purpose for HF/VHF chokes
- **Material 61:** effective at VHF and above — best above 30 MHz
- **Material 77:** lower frequencies, good from 500 kHz to ~10 MHz

A ferrite increases the inductance of a choke without adding significant resistance. The more turns through a ferrite, the higher the impedance to common-mode currents — but at higher frequencies, stray capacitance limits effectiveness.

Practical use:
- Wrap several turns of the mains lead through a ferrite ring (clip the ferrite onto the cable, or coil the lead through a toroid)
- Fit to TV downleads at the point where they enter the house
- Fit to the audio cable from the microphone to the transmitter
- Fit to the control cable of the ATU

![Choke balun construction — coax wound around a ferrite toroid to block common-mode currents. Alternative constructions: ferrite beads / snap-on ferrite cores.](/assets/images/study/ferrite-choke-common-mode.png)

> [INFO] **6D2:** Ferrite chokes on cables suppress common-mode RF currents. Different materials suit different frequency ranges (material 43: HF/VHF; material 61: VHF+). More turns = higher impedance. Place ferrites as close to the equipment as possible. Used on both transmitter leads (to keep RF in) and victim equipment leads (to keep RF out).

### Antenna Position (6D4)

Antenna placement is the single most effective EMC measure. No amount of filtering will fully substitute for putting the antenna away from the problem:

- Keep antennas **as far from houses as possible** — in the garden, not in the loft
- **Never install antennas in the loft.** House wiring runs throughout the structure. RF coupled into the loft wiring is distributed around the entire house, coupling into every electrical circuit and potentially reaching every device. This is the scenario most likely to cause widespread interference.
- For verticals, use as many **ground radials** as practical — the better the RF ground, the less RF returns via the mains earth
- If interference is mainly to one neighbour, position the antenna to minimise radiation in that direction (if using a directional antenna)

> [INFO] **6D4:** Antenna position is the most important EMC factor. Antennas in lofts couple RF into house wiring. Keep antennas outside and as far from neighbouring properties as practical.

---

## 6E — Fixing Interference at the Victim

### The Immunity Argument (6E1, 6E2)

Sometimes you have done everything right — your transmitter is clean, your antenna is well positioned, and you have ferrites on every cable — but interference to a neighbour's equipment continues. This can happen because **the victim equipment is inadequately immune** to RF.

The EMC Regulations (BS EN standards) require domestic equipment to have a **minimum level of immunity** to radio frequency interference. Equipment designed and marked to these standards should not be disrupted by transmissions from a legally operated amateur station.

If the victim equipment fails this immunity test, the **manufacturer bears responsibility** — not the amateur. You are not legally obliged to shut down to protect a poorly-designed device. However, being right does not necessarily make the situation with your neighbour comfortable. The diplomatic approach matters even when the law is on your side.

> [INFO] **6E1, 6E2:** Domestic equipment must meet BS EN immunity standards. An adequately immune device should tolerate legal amateur transmissions. If equipment fails despite the amateur operating cleanly, the cause may be inadequate immunity — the manufacturer's responsibility, not the amateur's.

### Fixes at the Victim (6E2, 6E3)

That said, simple improvements to the victim device often solve the problem quickly and cost very little:

- **Ferrite chokes on the victim's mains lead and signal cables** — the same technique as at the transmitter. A snap-on ferrite on the TV's aerial cable entry point costs a few pence and often eliminates breakthrough entirely.
- **High-pass filter on the TV aerial socket** — passes TV frequencies (470–850 MHz) but rejects HF amateur signals. Fitted between the wall aerial socket and the TV. Very effective for classic HF breakthrough into analogue/DAB/Freeview equipment.
- **Low-pass filter on audio inputs** — for hi-fi amplifiers picking up speech from a nearby SSB transmission. Passes audio (< 20 kHz) but rejects RF.
- **Mains filter on the victim device** — suppresses RF entering via the power lead. Fit between the wall socket and the device.
- **Improving screening on old equipment** — ferrite chockes on every lead connected to the victim device. Old/cheap equipment with thin, unscreened cables picks up RF easily.

**Before making any modifications** to a neighbour's equipment, ask permission and make clear that the modification is reversible and will not affect the device's functionality.

---

## 6F — Checking Your Own Transmitter

### The Legal Requirement (6F2)

Your licence conditions require you to **check your transmissions periodically** for harmonics and spurious emissions. You must not transmit signals that cause unnecessary interference.

**How to check for harmonics:**

1. Calculate the frequencies of your harmonics: 2×f, 3×f, 4×f, 5×f — note these down
2. Connect a well-screened dummy load to the transmitter (not an antenna — you want to contain the signal)
3. Set a second receiver or SDR to one of the harmonic frequencies, positioned a short distance from the transmitter (not connected to an antenna)
4. Key the transmitter on CW
5. The receiver should show a very weak signal, or nothing. If the harmonic is almost as strong as the fundamental, seek help from a more experienced amateur or contact your equipment supplier

A **spectrum analyser** is the ideal tool — it shows the fundamental and all harmonics simultaneously. An **RTL-SDR dongle** with appropriate software can function as a basic spectrum analyser and is inexpensive.

> [INFO] **6F2:** Check your transmitter periodically for harmonics and spurious emissions as required by your licence conditions. Use a dummy load and a receiver tuned to harmonic frequencies. A spectrum analyser or RTL-SDR gives a comprehensive view.

### Overmodulation and Overdeviation (6F3)

**Overmodulation (AM/SSB):** occurs when the audio amplitude fed to the modulator is too high. The transmitted signal becomes distorted and wider than it should be, causing **adjacent channel interference** (your signal spills into the neighbouring frequencies and disrupts other stations).

How to avoid: set the **microphone gain** so that the **ALC meter** shows peaks at the top of the normal range — not pegged hard against the limit. The ALC (Automatic Level Control) in the transmitter will reduce gain when the audio level is too high, but if you drive the audio harder than the ALC can handle, the modulator distorts.

On SSB, a simple check: have another amateur listen 3–4 kHz away from your transmission. If they can hear anything from your signal, you are overmodulating.

**Overdeviation (FM):** occurs when the audio amplitude causes the carrier to deviate more than the permitted amount (typically ±2.5 kHz for NFM, ±5 kHz for wideband FM). Results in a wider transmitted signal, interference to adjacent channels, and increased distortion at the receiver.

**CW key shaping:** a transmitter keyed with an abrupt square waveform produces harmonics of the keying frequency as sidebands on the transmitted signal. A well-designed CW transmitter includes a **key shaping circuit** that slows the rise and fall times of the RF envelope, keeping the transmitted signal narrow.

> [INFO] **6F3:** Overmodulation (AM/SSB) and overdeviation (FM) produce excessive bandwidth and adjacent channel interference. Adjust microphone gain and audio levels to keep the ALC within normal range. For CW, key shaping (slowing the rise/fall of the RF envelope) prevents keying-waveform harmonics.

### Log Keeping (6F2)

Although a logbook is no longer a condition of the UK amateur licence, keeping a log of your transmissions is **strongly advisable** for EMC purposes:

- If a complaint of interference is made, you can demonstrate whether or not you were transmitting at the time
- If you were transmitting, the log shows the band, power, mode, and antenna — data useful for reproducing and diagnosing the problem
- If you were not transmitting, you can quickly clear your name
- A logbook may be required as a first step if a complaint reaches Ofcom

---

## 6G — Getting Help

### The RSGB EMC Committee (6D1, 6F2)

The RSGB EMC Committee at **rsgb.org/emc** is the UK amateur's first port of call for complex interference problems:
- Produces leaflets on common EMC problems (available free to download)
- Leaflets aimed at both amateurs and neighbours/complainants
- Committee members can provide expert advice and may be able to assist directly
- Contact via the RSGB website or ask your local club for the nearest committee member

### Ofcom (6F2)

If the interference source is **not** an amateur station (domestic or commercial interference into your receiver), and it is persistent:
- Report to **Ofcom** — the UK spectrum regulator
- Ofcom can investigate unlicensed or non-compliant emissions
- The BBC is responsible for investigating interference to domestic TV and radio broadcasting reception

If **you** are the source of a formal complaint and cannot resolve it directly, Ofcom may become involved. Having a record of your diagnostic steps and the attempts you made to resolve the problem demonstrates good faith.

### Diplomatic Approach to Complaints (6E3)

If a neighbour complains:
- Be honest, open, and professional — do not become defensive
- **Offer not to transmit** at key times while the investigation is underway — not as a permanent concession, but as a cooperative measure while a technical solution is found. Phrase this carefully so it is clear this is temporary
- Do not admit blame before you have done any investigation — the problem may not be caused by you
- Do not suggest a permanent solution before you know what the problem actually is
- Ask the neighbour to cooperate with tests: note when the interference happens, check whether it correlates with your transmissions
- Be sympathetic — from the neighbour's perspective their TV is broken and the obvious explanation is the antenna in your garden

---

## 6H — Vehicle Installation EMC (6F3)

Installing a radio in a vehicle is one of the most EMC-challenging environments in amateur radio. A modern car contains dozens of microcontrollers, a CAN bus, engine management units, and kilometres of wiring — all in close proximity to your transmitter and antenna.

### Antenna Position

Getting the antenna position right is the single most effective step. The ranking from best to worst:

| Position | Ground plane | RF coupling to loom | Notes |
|---|---|---|---|
| Centre of metal roof | Large and symmetric | Minimal — equidistant from all looms | Best, but requires drilling |
| Boot/hatchback lip | Moderate | Low | Common compromise, good performance |
| Wing or rear quarter | Smaller, asymmetric | Moderate — nearer front/rear looms | Acceptable if roof not possible |
| Bonnet / front bumper | Poor (near engine) | High — directly over ECU and ignition | Worst choice; likely to cause engine RFI |

The further the antenna is from the engine bay and its wiring harness, the less RF is coupled in. The larger and more symmetric the ground plane, the better the antenna performs and the lower the ground current that flows through the bodywork.

### Wiring and Cable Routing

Modern vehicles use a **CAN bus** — a two-wire network connecting all electronic control units. CAN is heavily filtered and robust, but individual ECUs can still be disrupted by high-field RF.

**To minimise coupling:**
- Route the TX power cable and coaxial feeder **perpendicular to vehicle wiring looms** where they must cross — parallel runs, even a short distance apart, pick up RF inductively
- Keep RF cable runs as short as practicable
- Use quality coax with a solid braid — poor braid coverage causes the feeder to radiate
- Connect power directly to the battery positive terminal via a fused cable, and negative to the battery negative terminal or a clean chassis bonding point — not via an auxiliary fuse box buried in a wiring loom

### RFI Effects on Engine Management

A poorly installed VHF/UHF mobile transmitter can cause RF to appear on the **ignition system**, **oxygen sensor inputs**, or **mass-airflow sensor** circuits. Symptoms include:

- Rough idle or misfire when transmitting
- Engine management warning light illuminating during transmission
- Fault codes logged in the ECU memory that appear without an apparent mechanical fault
- Adaptive functions (idle speed, fuel trim) resetting after each transmission

These are not permanent faults — the ECU recovers when RF is removed — but repeated triggering can cause the vehicle to enter limp-home mode. The fix is always better antenna placement and cable routing, never modifications to the vehicle's ECU or wiring.

> [INFO] **6F3 — vehicle EMC:** Centre-roof antenna gives the best ground plane and the least RFI coupling to vehicle wiring. Route power and RF cables perpendicular to vehicle looms. RFI on engine management can cause misfires and fault codes — fix by improving antenna position and cable routing, not by modifying vehicle systems.

---

## 6J — ISM Bands (cross-reference to §1)

The **ISM (Industrial, Scientific, and Medical) bands** are frequency allocations that can be used without a specific licence for industrial, scientific, and medical applications. Common examples:
- **2.4 GHz:** Wi-Fi, Bluetooth, microwave ovens
- **5.8 GHz:** Wi-Fi (5 GHz)
- **433.92 MHz:** key fobs, remote sensors, short-range devices

Amateur radio shares some ISM allocations. As an amateur, you **must accept interference from lawfully operated ISM devices** on these shared frequencies. You cannot compel an ISM user to stop operating lawfully, even if their emissions disrupt your communications.

> [INFO] **ISM overlap:** Amateurs must accept interference from ISM devices on shared frequencies. This is a licence condition. See §1 for the full ISM band discussion.

---

## 6K — Self-Check Questions

**Q1.** What does EMC stand for, and what two obligations does it place on equipment manufacturers?

<details><summary>Answer</summary>

**Electromagnetic Compatibility.** The two obligations are:
1. Equipment must not cause undue electromagnetic interference to other equipment (**emission** limit)
2. Equipment must have adequate **immunity** — it must function satisfactorily in the presence of electromagnetic interference from other lawfully operated equipment

Both are required under UK EMC Regulations (previously the EU EMC Directive).
</details>

---

**Q2.** You are transmitting SSB on 14 MHz. A neighbour complains that speech sounds are audible on their hi-fi system. You disconnect your antenna and connect a dummy load. The speech sounds disappear. What does this tell you, and what should you do next?

<details><summary>Answer</summary>

The speech sounds **disappearing with the dummy load** tells you the interference is caused by **radiated RF from your antenna** — not by RF conducted via the mains supply.

Next steps:
- Check your transmitter for overmodulation (ALC within range, microphone gain correct)
- Check for harmonics or spurious emissions with a dummy load and a receiver
- Consider adding a low-pass filter at the transmitter output
- Suggest fitting a ferrite choke on the hi-fi's speaker cables and mains lead
- Check the hi-fi is CE-marked and meets EMC immunity standards
</details>

---

**Q3.** What is a low-pass filter in this context, and where should it be fitted?

<details><summary>Answer</summary>

A **low-pass filter** passes signals below a certain cut-off frequency and attenuates signals above it. In a transmitter context, it is fitted at the **RF output**, between the transmitter and the SWR meter/ATU, to suppress harmonic and spurious emissions above the operating frequency while allowing the wanted signal to pass.

It does not affect the fundamental transmission — only the unwanted higher-frequency emissions.
</details>

---

**Q4.** You are operating legally and your transmissions appear clean, but a neighbour's TV breaks up whenever you transmit. What would you tell the neighbour about who is responsible?

<details><summary>Answer</summary>

UK EMC Regulations (BS EN standards) require domestic equipment to have a **minimum level of immunity** to RF interference from lawfully operated stations. If the TV is certified to these standards, it should tolerate your transmissions.

If the TV is failing despite your transmissions being clean and legal, the **manufacturer bears responsibility** for inadequate immunity — not you.

However, before reaching that conclusion:
- Confirm your transmissions are clean (dummy load test, check for harmonics)
- Try a ferrite choke on the TV's aerial lead — this often solves the problem quickly
- Approach the situation diplomatically, not combatively
</details>

---

**Q5.** List four common domestic sources of radio frequency interference that can raise the HF noise floor.

<details><summary>Answer</summary>

Any four from:
- Switch-mode power supplies (chargers, PC power supplies, LED drivers)
- VDSL modems (FTTC broadband equipment)
- LED lighting (cheap/unfiltered)
- Solar PV inverters
- Arcing thermostats
- Electric motors (brushed)
- Computers and peripherals
- Plasma TVs (now mostly obsolete)
</details>

---

**Q6.** Where should you place a ferrite choke on the mains lead of your transmitter, and why?

<details><summary>Answer</summary>

As **close to the transmitter as possible**. This ensures that RF current trying to escape via the mains lead is choked before it can travel along the lead into the house wiring. A ferrite placed near the mains socket would leave the entire length of the lead acting as an RF radiator.
</details>

---

**Q7.** Why is it strongly advisable to keep a log of your transmissions even though it is no longer a licence requirement?

<details><summary>Answer</summary>

A log allows you to demonstrate whether you were transmitting during a period when interference was reported. If you were transmitting, the log records the band, power, mode, and antenna — data useful for diagnosing the cause. If you were not transmitting, you can quickly eliminate yourself as the source.

Ofcom may require a log as a first step if a complaint is formally registered. A log also demonstrates to all parties that you are operating in a serious and responsible manner.
</details>

---

## Suggested Interactives for RFH-Interactives

1. **Harmonic filter designer** — input operating band (dropdown), transmit power, desired harmonic rejection (dB). Output: Butterworth low-pass filter component values (L and C, nearest E12 series values), schematic, and frequency response plot showing the fundamental passing and harmonics attenuated. Ideal placement: §6D.

2. **Ferrite choke impedance plotter** — input: ferrite material type (31/43/61/77), number of turns, core size. Output: impedance vs frequency plot (10 kHz–300 MHz). Show how different materials peak at different frequencies. Ideal placement: §6D (alongside the ferrite discussion).

3. **EMC diagnostic decision tree** — static flow diagram (not interactive, SVG or HTML diagram). "TV breaks up when I transmit → dummy load test → if yes: radiated RF → check harmonics / LPF / antenna position → if no: conducted RF via mains → fit mains filter / ferrite on TX lead → ..." Walk through the standard diagnostic steps. Ideal placement: §6D.

---

*Section 6 complete. Handoff to Frontend (LessonsBuilder) for HTML build. Do NOT build HTML here.*
