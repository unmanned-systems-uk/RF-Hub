# Section 3: Amateur Radio Safety (Full)

<!-- Exam weight: ~8% (~4/46 questions) -->
<!-- Sub-sections: 3A–3H -->
<!-- Syllabus refs: 3A1, 3B1, 3C1 [all VERIFY against current RSGB syllabus] -->
<!-- RSGB source: Full Licence Manual 3rd Ed, Chapter 3 (pp 13–18) -->
<!-- New at Full vs Intermediate: PME/TN-C-S in depth, vehicle safety in depth, risk assessment for public events, ICNIRP compliance distance detail, static discharge devices, generator safety, RF interference to vehicle ECUs -->

Safety at Full licence level builds substantially on the groundwork from Foundation and Intermediate. If you are coming directly from the Intermediate, you should be familiar with the 30 V threshold, basic earthing, fuses and MCBs, soldering safety, antenna mechanical safety, and disconnecting antennas before a thunderstorm — all covered in <a href="../intermediate/section-8-safety.html" target="_blank">Intermediate §8</a>. This chapter introduces the topics where Full licence material goes further: the hazards of high-voltage equipment, risk assessment for public events and temporary locations, vehicle installation standards, RF exposure compliance under ICNIRP, static discharge protection for antennas, and — the single largest new topic — **Protective Multiple Earthing (PME)** and the potentially fatal consequences of adding an RF earth in a PME-supplied property without proper bonding.

> [DANGER] High voltage is the most significant hazard in the amateur shack. Valve rigs and linear amplifiers may have HT supplies at **2 kV or more**. Less obviously: **even 30 V can cause an accident** under adverse conditions (poor health, wet skin, compromised path to earth). No voltage can be defined as absolutely safe. Never assume any supply is harmless.

---

## 3A — Safe Use of Electricity in the Shack (3A1)

> [INFO] **Syllabus ref 3A1 [VERIFY]:** Electrical safety in the amateur shack — earthing practice, RCDs and RCBOs, switching off before working, indicator lamps, test probe insulation, the one-hand rule.

### Earthing

All mains-powered equipment in the shack must be properly earthed — including ancillary items such as Morse keys and microphones. The earth connection provides a **low-resistance path to earth**: if a fault develops (for example, the mains live conductor contacts the chassis), current flows to earth rather than through the operator, and the fuse blows or the circuit breaker trips.

Metalwork that is truly floating (genuinely at extra-low voltage with no connection to mains potential) does not need to be earthed. In practice, most shack equipment is mains-powered, and the earthing requirement applies.

- Test earth wiring periodically to confirm nothing has worked loose or corroded
- Earthing provides fault current diversion — it is not a substitute for a fuse or breaker, it works alongside one

### Switching Off Before Working

The general rule is that **no work should be undertaken on live equipment** if it can be done safely with the power off. If you can take the safer option, take it.

- When removing or replacing circuit boards or components: **turn the equipment off**; for mains-powered equipment, unplug the mains as well
- Measuring potential differences or currents through components sometimes requires power on — but if the measurement can equally be done with power off (for example, a continuity or resistance check), power down first

### RCDs and RCBOs

Two related devices protect against earth-fault currents:

| Device | What it does |
|---|---|
| **RCD** (Residual Current Device) | Detects current imbalance between live and neutral — indicating earth fault current — and disconnects the circuit. Does not protect against overcurrent (overload or short). |
| **RCBO** (Residual Current Circuit Breaker with Overcurrent protection) | Combines RCD protection with overcurrent protection (fuse/MCB equivalent) in a single unit. |

The standard RCD trip threshold is **30 mA in 25–40 ms**. This matters because **less than 100 mA can stop the heart** — the 30 mA threshold provides a significant safety margin but is not guaranteed protection in all circumstances.

> [WARNING] An RCD is not the same as an RCBO. An RCD alone does not provide overcurrent protection. For full protection at a circuit level, use an RCBO, which handles both earth fault and overload/short circuit.

### The Double-Pole Switch and Master OFF

A **double-pole switch** isolates both the live and neutral conductors simultaneously. Because neutral is bonded to earth at the supply point, it can still carry dangerous voltage relative to true earth if a fault occurs in the distribution network — disconnecting neutral as well as live removes this risk.

All shack equipment should be controlled by a **clearly marked master OFF switch** that is:
- Double-pole
- Easily reached (not hidden behind equipment)
- Clearly labelled — especially important in an emergency when someone else may need to cut power

### Indicator Lamps and Warning Reminders

An indicator lamp is a useful reminder that equipment is live — but a lamp that is not lit does **not** mean the equipment is safe. The lamp itself may have failed. Always confirm with a meter before touching internal components.

- **Neon lamps:** reliable for mains voltage indication (glow reliably at 230 V AC)
- **LEDs:** better for low-voltage circuits; they may be off simply because the voltage is low, not because it is absent
- Good practice: a brighter indicator on the main input, a dimmer lamp for standby state — helps distinguish standby from fully off

### Test Probes and Insulated Tools

When working in or around live equipment:
- Use test probes with **insulated shafts and a very small exposed metal tip** — minimises the area that can accidentally bridge two conductors
- Use screwdrivers similarly insulated — prevents inadvertent short circuits when adjusting live components
- **Remove metal watch straps and rings** before working on or near live equipment — metal jewellery can bridge terminals and cause a short circuit or burn

### The One-Hand Rule

When making measurements inside live equipment that is at high potential:
- **Keep one hand in your pocket** (or behind your back)
- This eliminates the hand-to-hand current path — a current passing hand-to-hand travels through the chest cavity and across the heart
- Current passing hand-to-foot still travels through the body but avoids the most dangerous path

> [WARNING] Avoid wearing headphones when adjusting live equipment. A sudden burst of noise (for example, a relay closing, a signal appearing) can cause an involuntary flinching movement — precisely when you do not want to lose control of where your hands are.

---

## 3B — Safety at Temporary Locations and Public Events (3B1)

> [INFO] **Syllabus ref 3B1 [VERIFY]:** Temporary station safety — site surveys, risk assessment for public events, tripping hazards, outdoor power supplies, generator safety, RF exposure at public events.

Both mobile stations and temporary stations are operated in unfamiliar territory. A site survey **before** setting up is essential.

### Site Survey

- Check for **overhead power lines** — any vertical antenna or support pole must be far enough away from power lines that it cannot reach them even if it falls over; consider the full height of the structure and the direction it would fall
- Plan ladder use for temporary antennas carefully — safe positioning, footing on uneven ground, having a second person present
- Identify all hazards before deploying: trip hazards, uneven terrain, proximity to the public

### Risk Assessment for Public Events

When operating a **Special Event Station** or any station where members of the public are present, a **formal risk assessment** is required. The structure is:

1. **Identify all realistic hazards** — electrical, mechanical (trip hazards, antenna guy-lines, falling poles), RF exposure, generator/fuel hazards
2. **Assess each hazard:** how *likely* is it to occur; what *degree of harm* could it cause
3. **Score = likelihood × severity**; for each hazard, document the **mitigation** (physical barriers, cable ramps, reduced power, exclusion zones)
4. **Document it** — insurers will require to see the risk assessment if an incident occurs

A Special Event Station is a public showcase for amateur radio. Accidents at a public event are not acceptable and can damage the reputation of the hobby. Seek professional advice for complex or high-risk scenarios.

> [WARNING] **RF exposure must be included in the risk assessment** for public events. Members of the public may approach closer to antennas than would be possible in a domestic shack, and higher powers may be used. Calculate compliance distances (see §3E) and enforce exclusion zones.

### Cabling and Tripping Hazards

- Route cables **around the edges of rooms and walkways**, secured flat to avoid raised loops
- Where cables must cross a walkway: use **rubber cable protectors** (ramp-style covers)
- Over doorways: secure cables above head height or tape them in a conduit across the top of the door frame
- Any electrical supply cables used **outdoors** must be **weatherproof**; connectors must be suitable for outdoor use

### Outdoor Power and RCD/RCBO

When using mains power outdoors, the risk profile is different from a dry shack floor:
- **Wet ground has much better earth conductivity** than a dry shack floor — fault currents can be significantly higher
- An **RCD or RCBO is mandatory for outdoor use** — this should be the first item in the outdoor supply chain before any equipment is connected
- A clearly labelled **single master OFF switch** is still required — it must be obvious to anyone on site, not buried under cables

**Before connecting any equipment:**
- Check all mains plugs and DC leads for visible damage (cracked insulation, bent pins, corroded connectors)
- Verify that fuses are **correctly rated** — a 13 A fuse protecting a 5 A circuit provides little protection; at 5 A draw, the fuse will not blow until catastrophic overload

### Generator Safety

Generators introduce hazards beyond normal mains supply:

- **Fuel storage:** store fuel in an appropriate container in a safe place, **away from the generator** and away from the public area; obey fire safety requirements
- **Refuelling:** never refuel a running generator; follow the generator supplier's advice on safe refuelling procedures; allow the generator to cool before refuelling if it has been running
- **Fire extinguishers:** must be readily available in the generator area; check that they are **suitable for the fuel type** (e.g. CO₂ or dry powder for petrol/diesel — water is not suitable for fuel fires)
- **Physical barriers:** the generator area should be closed off with clear barriers so the public and untrained personnel cannot access it
- **Carbon monoxide:** generators produce CO — never operate indoors or in an enclosed space; ensure adequate ventilation even in a marquee or partial enclosure

---

## 3C — Vehicle Safety (3C1)

> [INFO] **Syllabus ref 3C1 [VERIFY]:** Vehicle installation — secure mounting, antenna positioning, driver distraction, wiring to FCS 1362 standard, RF interference to vehicle electronics, insurance.

### Secure Mounting of Equipment and Antennas

- All radio equipment in a vehicle must be **securely fastened** — loose equipment can become a projectile in sudden braking or an accident, with serious injury potential
- Antennas must be **securely attached** to the vehicle bodywork
- Antenna height: not so tall as to be impractical for the operating area (low bridges, car parks, tree-lined roads)
- Antenna flexibility: not so flexible as to whip and risk striking pedestrians when the vehicle moves slowly

### Driver Distraction

Using a **hand-held microphone while driving** is not a *prima facie* offence in the same way as using a handheld mobile phone — but it does risk prosecution for **"driving without due care and attention"** and will be very significant in the event of an accident. It may also affect your motor insurance validity.

Strongly recommended practice:
- **Remote TX/RX switching** at the steering wheel (PTT button or footswitch)
- **Hands-free microphone** (headset or boom mic) for voice operation
- **Major retuning or resetting of controls:** only when the vehicle is stationary; a passenger can adjust controls while the vehicle is moving

### Wiring Standard (FCS 1362)

The following wiring guidance reflects advice from the motor vehicle and communications industries (FCS 1362, 2009 standard — **[VERIFY]** against current guidance):

- **Positive lead:** connect to battery positive via a **suitable fuse**, or in accordance with the vehicle manufacturer's instructions noting the current requirements of the radio equipment
- **Negative lead:** connect directly to the vehicle chassis; the negative lead **should NOT be fused** (this applies to vehicles with a "negative chassis" earthing system, which covers the vast majority of modern vehicles)
- Wiring should be **tucked away** so as not to interfere with vehicle controls (pedals, gear lever, steering column)
- Where cables pass through **bulkheads:** use proper rubber grommets to protect the cable from the sharp metal edge
- Protect cables from sharp edges and abrasion throughout their run

> [WARNING] Incorrectly wired DC leads can start fires in a vehicle. A fused positive and an unfused direct-to-chassis negative is the correct configuration. Do not fuse the negative — it slows fault isolation and can leave the chassis at battery potential relative to ground during a fault. [VERIFY] FCS 1362 wiring guidance before installation.

### RF Interference to Vehicle Electronics

Modern vehicles contain many electronic control units (ECUs) — engine management, ABS, airbag systems, stability control. RF interference with these systems is not merely an inconvenience; it is a **safety hazard**.

- Keep transmitters, amplifiers, and cables carrying RF **well away from the vehicle wiring loom** and any electronic control circuits
- Comply with any **manufacturer recommendations** on maximum RF power level and antenna location for in-vehicle radio equipment
- Installed radio equipment should be **specified as suitable for in-vehicle use** — using equipment not designed for vehicular installation may be a shortcoming that affects the driver's insurance and the vehicle's roadworthiness
- For questions about how your radio installation affects your motor insurance: consult your insurance provider directly

### Boats

The same principles for secure mounting, earthing, wiring, and RF interference apply to marine installations. Additional **marine safety knowledge** is required — the marine environment introduces further hazards (corrosion, bilge, fuel vapour, VHF Channel 16 emergency monitoring obligations) that are beyond the scope of the amateur radio syllabus but must be addressed before operating from a vessel.

---

## 3D — Overseas and Temporary Mains Supply (3B1)

When operating abroad or using equipment designed for a different mains standard:

- Mains voltages and frequencies **differ between countries** (e.g. North America 120 V 60 Hz; UK/EU 230 V 50 Hz); earthing practice also differs
- **Transformers** designed for 60 Hz will draw **more magnetising current at 50 Hz** and may overheat; check the specification before using a 60 Hz transformer on UK 50 Hz mains
- **Switch-mode power supplies** are more likely to be usable across different voltage/frequency combinations — check the label for the rated input range; most modern SMPS accept 100–240 V 50–60 Hz

---

## 3E — Exposure to RF Energy (3C1)

> [INFO] **Syllabus ref 3C1 [VERIFY]:** ICNIRP RF exposure limits, biophysical mechanism (heating), Ofcom licence condition 9-1, relationship to EMF compliance assessment (§1G). The compliance thresholds and calculation method are covered in detail at <a href="section-1-licence-conditions.html#1g" target="_blank">§1G (1G1)</a>.

### The ICNIRP Framework

The biologically significant effect of RF energy on body tissue is **heating** — RF currents induced in tissue generate heat. This becomes a risk only when the heat load exceeds what the body's temperature regulation can remove.

The amateur licence requires compliance with exposure limits from **ICNIRP** (International Commission on Non-Ionising Radiation Protection) as a licence condition **(Condition 9-1)** — **[VERIFY]** whether current licence references the 1998 or 2020 ICNIRP guidelines. The limits vary with:
- RF frequency (different tissues absorb energy differently at different frequencies)
- Period of exposure (short high-intensity exposure vs sustained lower-intensity exposure)

The relevant Ofcom guidance documents are **[VERIFY URLs]**:
- *Guidance on EMF Compliance and Enforcement*
- *Ofcom's EMF licence condition — What you need to know as an Amateur radio user*
- RSGB Technical Note No. 1: *What You Need to Know about Electromagnetic Fields*

The compliance thresholds, the Ofcom/RSGB calculator, and the record-keeping requirement are all covered in detail at <a href="section-1-licence-conditions.html#1g" target="_blank">§1G (1G1)</a>. The key thresholds to know: **below 10 W average EIRP per 6-minute period, OR below 100 W instantaneous peak EIRP, no exclusion zone calculation is required.**

### RF Exposure at Public Events

At a Special Event Station, the public may approach closer to antennas than would normally occur at a home station, and higher powers may be in use. RF exposure calculations must be part of the risk assessment (§3B). If the compliance distance extends into the public area, either reduce power or enforce a physical exclusion zone.

**Interactive — EMF Compliance Distance Calculator:**

<iframe src='/interactives/full-emf-compliance-distance.html' style='width:100%; height:750px; border:1px solid #1e293b; border-radius:8px; display:block;' loading='lazy' title='EMF Compliance Distance Calculator'></iframe>

---

## 3F — Thunderstorms and Lightning Protection (3C1)

Lightning poses two distinct risks to the amateur station:

1. **Equipment damage:** Static charge build-up before a storm, and the massive electromagnetic fields induced by a nearby strike, can cause irreparable damage to receivers and transceivers even without a direct strike
2. **Direct strike risk:** A tall mast or an antenna connected to earth effectively raises the earth potential closer to the clouds. Once a stepped leader leaves the cloud, a well-earthed antenna structure may present the path of least resistance for the return stroke

### Lightning Physics (Background)

Electric charge accumulates in storm clouds, generating a massive potential difference with ground. This ionises a column of air along which a **stepped leader** propagates downward. The **return stroke** then carries megavolts in a fraction of a second up the ionised, low-resistance channel. Nothing short of a full **BS EN/IEC 62305** lightning protection installation will guard against a direct strike — fortunately, direct strikes to amateur antennas are relatively infrequent in the UK.

### Protection Method 1 — Disconnection

- **Disconnect the antenna feeders** from all equipment as soon as a storm approaches, and move the RF connector physically away from the equipment
- Simple and effective, but relies on the operator being present; does not allow static charges to discharge gradually

### Protection Method 2 — Static Discharge Devices

Commercial static-discharge devices — typically sealed units filled with an inert gas — can be built into antenna feeders. Home-brew equivalents using motor car spark plugs are sometimes used.

These devices:
- Present **high impedance to RF** — they have negligible effect on normal transmission or reception
- Provide a **low-impedance path to earth for static charge build-up**, allowing gradual discharge before it reaches a damaging level
- Do **not** protect against a direct lightning strike — they handle the static precursor, not the return stroke itself

> [WARNING] Static discharge devices reduce the risk of equipment damage from charge build-up but do not replace physical disconnection as protection against a nearby or direct strike. In a severe storm, disconnect the feeder regardless of whether a discharge device is fitted.

**Further reading (all [VERIFY] for current URLs/editions):**
- RSGB *Radio Communication Handbook*
- RSGB *Guide to EMC*
- BS EN/IEC 62305 — Code of Practice for Protection of Structures against Lightning
- Local Authority Building Control guidance

---

## 3G — Protective Multiple Earthing (PME) (3C1)

This is the most complex safety topic in the Full licence syllabus and the one most likely to produce exam questions. Read it carefully.

> [INFO] **Syllabus ref 3C1 [VERIFY]:** PME (TN-C-S) systems, RF earth bonding requirement, consequences of neutral conductor failure, Part P notification. [VERIFY] bonding requirements against current BS 7671 (18th Edition Amendment 2 at time of writing).

### What is PME?

**PME** (Protective Multiple Earthing, also called TN-C-S) is increasingly common in new-build UK properties and as existing street cabling is replaced.

In a PME supply:
- The **District Network Operator (DNO)** earths the neutral conductor at multiple points along the street cabling — but **not** at each individual property
- At the point where the supply enters the property, the **mains earth is bonded to the neutral conductor** at the **Main Earth Terminal (MET)**
- All exposed metalwork inside the property — central heating pipes, water pipes, gas pipes — is bonded to the MET, creating an **equipotential zone**; all exposed metalwork is at the same potential relative to each other
- Under normal conditions this is completely safe; a small potential difference between the mains earth and any RF earth is normal and is not itself a problem

### The RF Earth Bonding Problem

If you install an **RF earth** (copper rods driven into the ground, connected to your transmitters and antenna feeders), you now have **two earths** in your shack:
- The mains earth, which is part of the PME equipotential system bonded to neutral
- Your RF earth, which is connected directly to the soil

These two earths **will be at slightly different potentials**. This creates a potential difference across anything connected to both (for example, a transceiver whose chassis is connected to both the mains earth via its power supply and to the RF earth via its antenna connector).

**The solution is mandatory:** the RF earth must be **bonded to the MET** to bring it into the same equipotential zone as the mains earth.

> [WARNING] This bonding cable may need to carry **substantial current** — potentially the same order of magnitude as the main supply cable to the property — because it may be in the return path for all connected appliances. Size the bonding cable accordingly; do not use a light earth wire. [VERIFY] minimum cable size requirement against current BS 7671.

### Part P — Notifiable Work

The bonding of an RF earth to the MET is **notifiable work under Part P of the Building Regulations** (England and Wales — [VERIFY] for Scotland and Northern Ireland equivalents):
- You must have a **qualified electrician** carry out and formally inspect the bonding
- It is an offence to carry out and not have notifiable electrical work inspected
- The RSGB leaflet *Earthing and the Radio Amateur* (ENM07 — **[VERIFY URL]**) and leaflet number 12 on *Part P and the Radio Amateur* (**[VERIFY]**) provide further guidance

### The Neutral Failure Scenario

This is the scenario that makes PME genuinely dangerous for the amateur:

**What happens if the neutral conductor fails in the street cabling:**

1. The neutral wire breaks or is disconnected upstream of your property
2. Your appliances still need a return current path — with neutral gone, return current attempts to flow back through whatever earth connections exist
3. If your RF earth provides a path to the substation (via the ground and the neutral earthing points in the street), **return current from your entire house flows through your RF earth connection** — potentially overheating it and causing a fire
4. The house earth (and neutral, since they are bonded at the MET) may rise to **230 V** relative to true earth
5. Your transceiver — connected to the RF earth via the antenna — is now at a different potential from other items in the shack connected to the mains earth: **risk of fatal electric shock**

> [DANGER] In the neutral failure scenario in a PME property: if the RF earth is not bonded to the MET, equipment in the shack may be at 230 V relative to other mains-connected items. Touching both simultaneously would be potentially fatal. This is not a theoretical risk — neutral failures do occur. The mandatory bonding of the RF earth to the MET is not optional.

**If the RF earth connection itself fails** (in addition to the neutral failure):
- The entire house earth and neutral rise to 230 V
- Every piece of mains-connected equipment with an exposed metal chassis is now at 230 V relative to true ground
- The risk extends beyond the shack to the whole property

### Plastic Service Pipes

Where **all services entering the property** (water, gas) use **plastic pipes**:
- The metal pipework inside the house (taps, radiators, gas appliances) is **not connected to earth** via the service entry and is effectively floating
- Building Regulations do not require bonding in this case
- However: if **any** service entry is via metal pipe, a qualified electrician must assess whether bonding to the MET is required to maintain the equipotential zone

**When in doubt about whether your property has PME:** ask your DNO. They are obliged to tell you. Do not assume.

---

## 3H — Self-Check Questions

<details>
<summary><strong>Q1: What is the purpose of earthing mains-powered equipment in the shack, and what happens if earthing is absent when a fault develops?</strong></summary>

Earthing provides a **low-resistance path to earth** so that if the mains live conductor contacts the equipment chassis, fault current flows to earth rather than through the operator. The sudden high current blows the fuse or trips the circuit breaker. **Without earthing:** fault current may flow through the operator instead — since the operator becomes the lowest-resistance path to earth — resulting in electric shock. The fuse or breaker may not trip because the current through a human body may not be high enough to blow a fuse, but is easily enough to be fatal.

</details>

<details>
<summary><strong>Q2: What is the difference between an RCD and an RCBO, and which is required outdoors?</strong></summary>

An **RCD** (Residual Current Device) detects earth fault current (imbalance between live and neutral) and disconnects the circuit. It does not provide overcurrent protection. An **RCBO** (Residual Current Circuit Breaker with Overcurrent protection) combines RCD earth-fault protection with MCB overcurrent protection in a single unit. **Outdoors**, an RCD or RCBO is mandatory — the better earth conductivity of wet ground increases fault current risk. The RCBO is preferable because it also protects against overload. The standard trip threshold is **30 mA in 25–40 ms**.

</details>

<details>
<summary><strong>Q3: You are measuring voltages inside a linear amplifier running at 2 kV HT with the power on. What precaution reduces the risk of a hand-to-hand current path through your chest?</strong></summary>

The **one-hand rule:** keep one hand in your pocket (or behind your back) while making the measurement with the other hand. If the probe inadvertently contacts a high-voltage point, current enters one hand but cannot travel across the chest to the other hand — instead it must find another path (typically to ground via the feet), which, while still dangerous, is less likely to cause cardiac arrest than a hand-to-heart-to-hand current path.

</details>

<details>
<summary><strong>Q4: You are operating a Special Event Station at a public outdoor event using a generator. List four generator-related safety requirements.</strong></summary>

Any four from: (1) Store fuel in a safe, approved container away from the generator and away from the public; (2) Fit physical barriers to close off the generator area from the public; (3) Have fire extinguishers of the correct type for fuel fires (CO₂ or dry powder — not water) readily available; (4) Follow the manufacturer's advice on safe refuelling — never refuel a running generator; (5) Never operate the generator in an enclosed space (CO hazard); (6) Include the generator in the formal risk assessment with documented mitigations.

</details>

<details>
<summary><strong>Q5: When wiring a transceiver to a vehicle battery (FCS 1362), should the negative lead be fused? Explain why or why not.</strong></summary>

**No — the negative lead should not be fused.** The negative lead connects directly to the vehicle chassis. Fusing the negative lead can leave the chassis at battery potential during a fault (the fuse blows, interrupting the return path, so the chassis and equipment rise to supply voltage relative to ground). The positive lead must be fused close to the battery to protect the cable in the event of a short circuit. [VERIFY] FCS 1362 against current vehicle wiring guidance.

</details>

<details>
<summary><strong>Q6: What are static discharge devices fitted in antenna feeders, and what do they protect against? What do they NOT protect against?</strong></summary>

Static discharge devices are sealed units (commercial versions filled with inert gas; DIY versions using spark plugs) connected into the antenna feeder. They present **high impedance to RF** signals, so they have negligible effect during normal transmission and reception. To slowly-accumulating static charge, they present a **low-impedance path to earth**, allowing gradual, safe discharge before a damaging build-up occurs. They protect against **static charge build-up** (the pre-storm precursor to equipment damage). They do **not** protect against a direct lightning strike — the energy of a return stroke far exceeds their capability. Physical disconnection of feeders remains the only reliable protection against a direct strike.

</details>

<details>
<summary><strong>Q7: Your property has a PME (TN-C-S) mains supply. You install a copper earth rod in the garden and connect it to your transceiver. Why is this potentially dangerous, and what must you do?</strong></summary>

In a PME system, the mains earth and neutral are bonded at the Main Earth Terminal (MET). Your RF earth (the copper rod) is at true soil potential, which differs from the PME mains earth potential. Any equipment connected to both earths (for example, your transceiver — connected to the mains earth via its power supply, and to the RF earth via the antenna connector) now bridges two different potentials: a shock risk exists. More critically, if the neutral conductor fails in the street, return current may flow through your RF earth, heating it and potentially causing a fire; additionally, the mains earth and neutral may rise to 230 V, creating a fatal shock hazard between mains-connected and RF-earth-connected items. **You must bond the RF earth to the MET** so all earths are at the same potential. This work is **notifiable under Part P** of the Building Regulations and must be carried out and inspected by a qualified electrician.

</details>

<details>
<summary><strong>Q8: A neutral conductor failure occurs in the street cabling serving your PME-supplied property. Your RF earth is correctly bonded to the MET. What risk remains, and what would happen if the RF earth bond itself were to fail?</strong></summary>

With correct bonding, the RF earth and mains earth are at the same potential — the main bonding cable may carry return current from appliances back to earth via the soil path, risking overheating and fire if it is undersized (the bonding cable must be substantial enough to handle this current). There is no differential voltage between the RF earth and the mains earth. **If the bonding cable itself fails** (breaks or corrodes through) while the neutral is also failed: the house earth and neutral can rise to **230 V** relative to true earth. All mains-connected equipment with metal chassis becomes live at 230 V relative to ground — potentially fatal for anyone touching it. This is why the bonding cable must be of adequate size, periodically inspected, and mechanically protected.

</details>

---

## Suggested Interactives for RFH-Interactives

1. **PME neutral failure simulator** — Schematic diagram of a PME supply showing: DNO earthing points, street cabling, MET, RF earth rod, transceiver. User can toggle: neutral conductor intact/failed, RF earth bonded/unbonded. Widget shows current paths and resulting voltages at each node. Clearly illustrates why the bonding is mandatory and what the failure scenario looks like. (HIGH VALUE — maps directly to the most complex exam topic in this chapter.)

2. **Risk assessment builder for portable events** — User enters a scenario (event type, power level, antenna type, generator yes/no). Widget generates a skeleton risk assessment with the standard hazard categories pre-filled. User adjusts likelihood/severity scores; widget calculates risk scores and flags items above threshold. Useful practical tool as well as exam preparation.

3. **RCD/RCBO identifier** — Given a description of a situation (indoor shack, outdoor event, mains from generator, existing circuit with just an MCB), user selects the appropriate device and the widget confirms/explains. Covers the RCD vs RCBO distinction and the mandatory outdoor requirement.

4. **Lightning protection decision tree** — User inputs: storm approaching (yes/no), discharge device fitted (yes/no), operator present (yes/no), feeder connected to equipment (yes/no). Tree walks through the correct actions (disconnect feeder, move connector away from equipment, do not rely on discharge device alone for severe storms).
