# Section 8: Safety

<!-- Exam weight: ~8% (~3–4/46 questions) -->
<!-- Sub-sections: 8A, 8B, 8C, 8D, 8E, 8F, 8G, 8H -->
<!-- Syllabus refs: 8A1, 8A4, 8A6, 8A8, 8B2, 8B3, 8B4, 8B5, 8B6, 8E1 -->
<!-- RSGB source: Chapter 3 Tools, Construction & Safe Practice (pp.7–11) -->

Safety is the only topic in this course where getting it wrong has immediate, irreversible consequences. The exam tests a handful of specific facts — fuse ratings, RCD behaviour, shock thresholds, the correct response to an accident — but the real point is to build habits that keep you and everyone around you unharmed.

This section covers mains electrical safety, working on live circuits, RF exposure, working at height, batteries, soldering, fire, and lightning. Cross-references point to §1G (EMF compliance framework), §6D (station earthing), and §7H (shack layout).

> [WARNING] **Life-safety content.** If you have any doubt about electrical work in your shack, engage a qualified electrician. The correct fuse or RCD saves equipment; the correct response to a shock saves a life.

---

## 8A — Mains Electrical Safety

### The UK Mains Supply (8A1)

The UK mains supply is **230 V RMS at 50 Hz**. RMS (Root Mean Square) is the equivalent DC value in terms of power delivery — but the actual peak voltage of a sinusoidal supply is higher:

```
V_peak = V_RMS × √2 = 230 × 1.414 ≈ 325 V
```

Every time you handle a mains-connected device, up to 325 V is present across the conductors. That is enough to be lethal under the right conditions. The hazard is not the voltage alone but the **current that voltage drives through the body**:

| Current through body | Effect |
|---|---|
| ~1 mA | Perception — slight tingling |
| ~15 mA | Cannot let go — muscular contraction locks the grip |
| ~50 mA | Respiratory paralysis — breathing stops |
| ~100 mA | Ventricular fibrillation — almost certainly fatal without immediate intervention |
| >1 A | Deep burns, cardiac arrest |

Even relatively low voltages — mains at 230 V, a car battery charging at 14 V across a fault path with wet skin — can produce fatal currents. The body's resistance varies widely with skin condition (wet skin is far lower resistance than dry), the contact points, and the path the current takes.

> [WARNING] **8A1:** The path that kills is current across the heart. Current entering one hand and leaving the other passes directly through the chest. This is why the one-hand rule (§8B) matters — keeping one hand away from the circuit removes that path.

### Fuses and Fuse Ratings (8A4)

A fuse is a safety device that **protects the equipment** by breaking the circuit if the current exceeds a safe level. It does not protect a person from shock — that is the RCD's job (see below). A fuse consists of a thin metal strip inside a ceramic or glass tube; excess current heats the strip until it melts, opening the circuit.

**Calculating the correct fuse rating:**

```
Current (A) = Power (W) ÷ Voltage (V)
```

Example: A transceiver rated at 500 W connected to 230 V mains:

```
I = 500 ÷ 230 = 2.17 A
```

Select the **next higher standard fuse rating** above the calculated current. UK standard BS 1362 plug fuses come in three ratings:

| Fuse | Typical appliances |
|---|---|
| **3 A** | Clock radio, DVD player, fan, food mixer, fridge, lamp, PC, radio, television, video player |
| **5 A** | Coffee maker, hi-fi system, microwave oven, toaster |
| **13 A** | Dishwasher, hair dryer, electric iron, kettle |

For the 2.17 A calculated above, the correct fuse is **3 A** (the next standard rating above 2.17 A).

> [INFO] **8A4:** I = P ÷ V. Always fit the **manufacturer's specified fuse**. If no manufacturer guidance is available, calculate and fit the nearest standard rating above. Never fit a fuse higher than necessary — it defeats the protection.

**Fuses must not be substituted with wire, foil, or oversized fuses.** A fuse that is too large will not blow when needed, allowing dangerous currents to flow.

#### Fast-Blow and Slow-Blow Fuses

Two types of fuse are important:

| Type | Characteristic | When to use |
|---|---|---|
| **Fast-blow** | Blows quickly at rated current | Sensitive electronics, integrated circuits — cannot tolerate even brief overcurrents |
| **Slow-blow** (time-delay) | Tolerates brief current surges before blowing | Motor loads, transformers — high inrush current at start-up is normal |

> [WARNING] Fast-blow and slow-blow fuses are **not interchangeable**. Fitting a fast-blow where a slow-blow is specified will cause nuisance blowing on start-up. Fitting a slow-blow where a fast-blow is specified may allow a damaging current surge through sensitive components before the fuse reacts.

### Residual Current Devices (8A6)

An RCD (Residual Current Device) detects current **leaking to earth** — for example, current passing through a person who has touched a live conductor and is standing on the ground. It does this by comparing the current flowing out on the live wire with the current returning on the neutral wire. In a healthy circuit, these are equal. If they differ by approximately **30 mA** (current leaking elsewhere), the RCD trips the circuit in **25–40 milliseconds**.

This is fast enough to prevent ventricular fibrillation in most cases — though it is not a guarantee of safety.

Your home consumer unit (fuse board) contains **RCBOs** — combination devices that include both an MCB (Miniature Circuit Breaker) and an RCD:

| Device | What it protects against |
|---|---|
| **MCB** (Miniature Circuit Breaker) | Overcurrent — too much current flows, protecting cables and equipment from overheating |
| **RCD** (Residual Current Device) | Earth leakage — current taking an unexpected path, typically through a person |
| **RCBO** | Both — an MCB and RCD combined in a single unit |

**Portable RCDs** (Picture 3.13 in RSGB Ch.3) plug directly into a mains socket and add RCD protection to any appliance connected to them. They are strongly recommended whenever working outdoors or at a field day site where the installation's protection level may be unknown.

> [INFO] **8A6:** An RCD trips at ~30 mA in 25–40 ms, providing protection against fatal electric shock. A portable RCD can be added to any socket. Make sure your shack is protected by an RCD or RCBO at the consumer unit.

### What to Do if Someone Gets an Electric Shock (8A8)

This procedure must be memorised. A person in contact with a live mains circuit cannot release themselves — the muscular contraction from the current prevents it. Touching them directly connects you to the same live circuit.

**Correct sequence:**

1. **DO NOT touch the victim while they are in contact with the live source**
2. **Immediately switch off the power** — at the socket, or at the consumer unit if the socket switch cannot be reached
3. **Call 999** (or ask someone else to call while you act)
4. **Start CPR** if the person is unresponsive and not breathing normally — continue until emergency services arrive

> [WARNING] **8A8:** Step 1 is not "pull them away" — it is "switch off the power first." Grabbing a person in contact with 230 V mains will pass current through both of you. Find the off switch first.

**Shack master switch:** Install a clearly labelled master switch that cuts all mains power to the shack. Anyone entering the room can isolate power immediately in an emergency, even if they do not know which socket or device is involved.

---

## 8B — Working on Live Circuits

### The Golden Rule (8B4, 8B6)

**Do not work on live circuits.** Isolate the supply before touching any internal wiring, components, or connectors. This applies to the shack as much as to domestic wiring.

The RSGB Ch.3 acknowledges there are occasions when fault-finding or calibration requires the circuit to be powered. In those cases:

**Precautions when live working is unavoidable:**

1. **Risk assessment first** — think through exactly what you intend to do and write it down if others are present
2. **One hand behind your back** — keeps one hand completely clear of any conductor, preventing current from flowing hand-to-hand across the heart
3. **Insulated tools only** — properly insulated screwdrivers, probes, and clip leads rated for the voltage
4. **Rubber gloves** — appropriate electrical insulating gloves
5. **No jewellery** — rings, bracelets, and watch straps are conductors; remove them
6. **Dry environment** — water dramatically reduces skin resistance
7. **Do not work alone** — have someone present who is not in contact with the circuit, who knows where the master switch is, and who can call for help

> [INFO] **8B4, 8B6:** Even when live working cannot be avoided, minimise risk: one hand rule, insulated tools, no jewellery, never alone. Ensure a master switch is accessible so someone nearby can isolate power instantly in an accident.

### Test Before Touch (8B6)

Before touching any component in a de-energised circuit, verify it is actually de-energised with a multimeter set to AC volts. A switched-off appliance is not necessarily safe:

- A power supply may have its switch on the secondary (low-voltage) side, leaving the mains transformer primary live
- A fault can cause unexpected live voltages on chassis metalwork
- Mains is not always switched off simply because the equipment appears dead

**Measure first, touch second — every time.**

### Capacitor Discharge Hazard (8B4, 8B6)

Large electrolytic capacitors — particularly the filter capacitors in mains power supplies — can **retain a lethal charge for minutes or hours after the supply is switched off**. A PSU storing 400 V on a 2,000 µF capacitor holds enough energy to cause cardiac arrest.

```
Energy stored = ½ × C × V²
Example: ½ × 0.002 × 400² = 160 joules  ← well above the lethal threshold
```

> [WARNING] **Switching off the PSU does not discharge the capacitors.** Always allow several minutes, then measure with a multimeter before touching any component inside a power supply. A **bleed resistor** across the capacitor drains the charge safely at switch-off — check that the design includes one, or add one.

---

## 8C — RF Burns and RF Exposure (8B5)

### Direct RF Burns

RF energy at high power levels causes real physical burns. Unlike an electric shock which produces a sharp, obvious jolt, RF burns develop gradually through tissue heating — you may not immediately realise how much damage is occurring.

The hazard is highest at:
- **Antenna feedpoints and connectors** — especially on HF at 100 W (Intermediate maximum); a bare-hand grip on a driven element at the feedpoint can produce serious burns
- **Coaxial connectors that are not properly tightened** — RF voltage appears across the gap
- **Antenna matching units (ATUs)** with internal components at high RF voltage

**Never touch any part of an antenna system while transmitting.** This includes the feeder, connectors, balun housing, and any metalwork connected to the antenna.

> [WARNING] **8B5:** RF does not give the same warning signal as mains. You may feel warmth before realising you are being burned. At Intermediate power levels (up to 100 W), contact with live antenna components can cause deep tissue burns. Keep hands clear whenever transmitting.

### RF Field Exposure

Concentrated RF energy causes **heating within body tissue**, in the same manner as a microwave oven. At amateur radio power levels, the risk of reaching dangerous whole-body exposure limits is low for correctly sited antennas. However, specific situations require care:

- **Microwave frequencies** (3 GHz and above) — the eyes and brain are particularly susceptible to microwave heating. Never look into a waveguide aperture or stand in front of a dish antenna while transmitting on microwave bands.
- **Antennas too close to the operating position** — including loft antennas — may expose the operator or other occupants of the building to RF fields above recommended limits. The temptation to mount antennas in the loft is understandable in built-up areas; it requires careful consideration of everyone in the building, not just the operator.
- **Handheld radios** — antennas on low-power handhelds are generally within safe exposure limits at rated power; keep the antenna away from the face when transmitting.

**Regulatory bodies:**
- **ICNIRP** — International Commission on Non-Ionising Radiation Protection: publishes the exposure guidelines that form the basis of UK and EU limits
- **NIHP** — National Institute for Health Protection: UK body with oversight of non-ionising radiation safety

> [INFO] **8B5, cross-ref §1G:** You need to know the names ICNIRP and NIHP. The exam does not require you to memorise the specific exposure limits — those are covered in the EMF compliance framework in §1G. The practical rules here are: never touch a transmitting antenna, keep antennas as far from occupied space as possible, and take special care on microwave frequencies.

---

## 8D — Antenna Work at Height

### Working at Height — The Hazards

Falls from height are one of the leading causes of fatal accidents in and around the home. Installing and maintaining antennas involves ladders, roofs, and occasionally masts — each with specific risks.

> [WARNING] **Never work at height alone.** A person who falls from a ladder or roof may be incapacitated. A spotter on the ground can raise the alarm, stabilise the ladder, and call 999. Do not treat this as optional.

### Ladder Safety (8D1, 8D2)

The **1-in-4 rule:** for every 4 m of height, the base of the ladder should be 1 m out from the wall. This gives the correct angle (~75°) for stability. A ladder too steep can tip backward; too shallow and the feet slip out.

Additional precautions:
- **Tie the top of the ladder** to a fixed point — a hook, ring bolt, or the guttering bracket — before climbing
- **Three points of contact** at all times — two feet and one hand on the ladder. If you need both hands for a task, stop and think whether you should be on a scaffold platform instead
- **Wear rubber-soled footwear** — smooth-soled shoes slip on rungs
- **No tools in hands while climbing** — use a tool bag worn over the shoulder or a rope and bucket to haul items up once you are in position
- **Do not overreach** — descend and move the ladder rather than leaning sideways

### Roof Work (8D3)

Working on a pitched roof requires a **safety harness anchored to a ridge bolt or roof anchor**. The harness must be rated for the load and the anchor point must be independently secure — not simply the chimney stack or a vent pipe.

- Check the **weather forecast before starting** — wet tiles or felt are far more slippery than they appear from the ground
- Establish an **exclusion zone at ground level** below the work area — no one should stand underneath while work is in progress
- If others are present on the ground, wear hard hats — tools and components can fall

### Overhead Power Lines (8B2)

High-voltage transmission lines and distribution cables carry thousands of volts. They can **arc across several metres** — direct contact is not necessary for electrocution.

> [WARNING] **8B2:** Before erecting any antenna, mast, or pole, look up. Check the area above and around the work site for overhead power lines. The industry guidance is to maintain clearance at least equal to the height of the structure being erected — if the mast is 6 m tall, keep it at least 6 m clear of any overhead cable. If a power line is too close to the intended antenna site, relocate the site or contact your distribution network operator.

- Never attempt to divert, duck under, or work near overhead lines
- If any equipment contacts an overhead line, call 105 (UK Power Networks emergency) and keep everyone clear until the network operator confirms the line is de-energised

---

## 8E — Battery Safety

### Lead-Acid Batteries

Lead-acid batteries — found in cars, motorcycles, large UPS units, and some field-day supplies — contain **sulphuric acid electrolyte (H₂SO₄)**. This is a highly corrosive liquid that causes serious chemical burns on contact with skin or eyes.

Hazards and precautions:

| Hazard | Precaution |
|---|---|
| **Sulphuric acid electrolyte** | Wear eye protection and gloves when handling. If acid contacts skin, flush immediately with large amounts of water. If eyes are affected, flush continuously and get medical help. |
| **Hydrogen gas during charging** | Charging produces hydrogen (H₂), which is explosive. Charge in a ventilated area — never in a sealed room or under a workbench with no airflow. |
| **Short-circuit** | A short circuit across a lead-acid battery produces enormous currents — easily several hundred amps — causing violent arcing, extreme heat, fire, and possible explosion. Keep tools clear of battery terminals; never lay a spanner or metal rule across the top of an exposed battery. |
| **Acid spill** | Neutralise with sodium bicarbonate (baking soda) before cleaning up. |

> [WARNING] Never short-circuit any battery. Even a small 12 V lead-acid battery can weld metal, ignite fires, and cause the battery case to rupture. Keep battery terminals covered or insulated when the battery is not connected.

### Lithium-Ion and LiPo Batteries

Lithium-ion and LiPo (lithium polymer) batteries are used in portable transceivers, handheld radios, and USB power banks. They are lighter and higher energy-density than lead-acid, but carry their own risks:

| Hazard | Precaution |
|---|---|
| **Thermal runaway** | A damaged, punctured, or incorrectly charged Li-ion cell can enter thermal runaway — an uncontrolled self-heating reaction that results in fire and, in severe cases, explosion. |
| **Overcharging** | Use only a charger specifically designed for the battery chemistry and capacity. Using the wrong charger is a leading cause of Li-ion fires. |
| **Physical damage** | A bent, crushed, or punctured Li-ion cell must be treated as unsafe. Do not continue using it; do not charge it. |
| **Disposal** | Li-ion batteries must not go in general refuse. Take to a designated battery recycling point. |

> [WARNING] **Never puncture, crush, or short-circuit a lithium battery.** If a Li-ion battery begins to bulge, feel hot, or smell of solvent, treat it as a fire risk: remove it from the equipment (if safe to do so), place it on a non-combustible surface away from flammable material, and observe it. Do not put it in a bin.

---

## 8F — Soldering Safety (8B3)

### Heat

A soldering iron tip operates at **300 to 400 °C**. Contact with skin produces an instant, serious burn. Burns from soldering irons are one of the most common workshop injuries because the iron looks inactive when it is not.

- Always rest the iron in its **stand** when not actively using it — never lay it on the bench
- Assume the iron is hot if it has been plugged in, even if you did not use it
- **Allow solder joints to cool** before handling the board — rosin flux takes 5–10 seconds to solidify; the component leads and pads remain hot longer
- Eye protection: **wear safety glasses** when clipping component leads — small lengths of wire fly off at speed and direction when snipped

### Solder Fumes

The flux core in solder (typically **rosin/colophony flux**) produces fumes when heated. These fumes can irritate the eyes, throat, and lungs. Long-term exposure is a recognised occupational health hazard.

- Work in a **well-ventilated area** — open a window, or use a fume extractor/fan drawing fumes away from your face
- Do not bend over the iron so that fumes rise into your face
- The HSE publishes specific guidance:
  - INDG248: *Solder Fumes and You*
  - INDG249F: *Controlling Health Risks from Rosin Based Solder Fluxes*
  - Available at **www.hse.gov.uk**

### Lead Solder

Traditional tin-lead solder (typically 60% tin, 40% lead) is still used in hobby and amateur radio work, though lead-free alternatives are increasingly common. Lead is a cumulative toxin:

- Do **not inhale** solder fumes or dust
- Do **not eat, drink, or touch your face** at the soldering bench
- **Wash hands** thoroughly after a soldering session before eating or drinking
- Keep lead solder away from children

> [INFO] **8B3:** The three soldering safety rules for the exam: ventilate to remove fumes, wear eye protection when clipping leads, and wash hands after using lead solder.

### Good and Bad Solder Joints

A correctly made solder joint is **bright and shiny** with a smooth, concave fillet of solder filling the gap between the component lead and the pad. A **dry joint** (cold joint) is dull and grey — the solder did not flow properly, typically because the joint was moved before the solder solidified, or the iron did not bring both the pad and the lead up to temperature together. Dry joints are a common cause of intermittent faults in home-built equipment.

---

## 8G — Fire and Emergency

### Electrical Fire — Never Use Water

Electrical fires (involving live mains-connected equipment) must **never** be tackled with water. Water conducts electricity; pouring it over a live appliance completes a circuit through the water stream and the person holding the hose.

**Correct extinguisher for an electrical fire: CO₂ (carbon dioxide).**

CO₂ extinguishers:
- Do not conduct electricity
- Leave no residue that damages equipment
- Suffocate the fire by displacing oxygen
- Are identified by a **black label** on the cylinder

> [WARNING] **Never use a water extinguisher on an electrical fire.** If in doubt about an extinguisher type, evacuate and call 999.

Other extinguisher types for reference (the exam focuses on electrical):

| Fire class | Material | Extinguisher |
|---|---|---|
| A | Ordinary combustibles (wood, paper, fabric) | Water, foam |
| B | Flammable liquids (petrol, paint) | Foam, CO₂, dry powder |
| C | Flammable gases | Dry powder |
| **E (electrical)** | **Live electrical equipment** | **CO₂ only** |
| F | Cooking oils | Wet chemical |

### Shack Fire Precautions

- Keep a **CO₂ fire extinguisher** in or immediately outside the shack
- Install a **smoke detector** in the shack — transceivers, power supplies, and chargers left unattended are ignition risks
- Know your **evacuation route** — RF cables, power leads, and desktop clutter can make an emergency exit difficult; keep the path to the door clear
- Never leave charging lithium batteries unattended in an enclosed space overnight

---

## 8H — Environmental Safety and Lightning

### Lightning (8E1)

A direct lightning strike will destroy antenna systems regardless of protective measures. There is no commercially viable protection against a direct strike; the best approach is avoidance.

**Practical measures for nearby strikes and induced surges:**

- **Disconnect coaxial feeders from all equipment** during electrical storms. If possible, disconnect at the antenna end too. A nearby (not direct) strike induces enormous transient voltages in antenna systems and feed cables — enough to destroy a transceiver even if the cable is not directly struck.
- **Disconnect mains** — induced surges can also travel via the mains wiring.
- **Gas discharge arrestors** (also called spark gaps or lightning arrestors) in the feeder path: these present an open circuit at normal transmitter voltages but **break down and conduct at the high voltages produced by a nearby lightning strike**, diverting the surge to earth before it reaches the equipment. They do not protect against a direct strike.
- **Static discharge resistor** — a resistor of **greater than 100 kΩ** connected across the antenna (between the antenna feedpoint and earth) provides a bleed path for **static electricity** that builds up on antennas from charged clouds or nearby lightning activity. This is a separate, lower-voltage issue from the lightning surge itself. The resistor is high enough in value that it has negligible effect on normal antenna operation.

> [INFO] **8E1:** The correct order of protection: (1) disconnect during storms — primary protection, (2) gas discharge arrestors for nearby-strike surge diversion, (3) static bleed resistor for static charge. None of these protects against a direct strike.

### Overhead Power Lines (Repeated Safety Point — also §8D)

Check above before erecting any structure. If a line is too close, contact your Distribution Network Operator (call 105 in the UK) — do not attempt to work near or below live lines.

### Temperature, Humidity, and Ventilation

- Keep transceivers and power supplies in a **ventilated area** — convection cooling depends on airflow; equipment in enclosed furniture will overheat
- Do not operate in high humidity environments without checking the equipment's specified operating range — condensation on PCBs causes short circuits and corrosion
- Allow equipment brought in from the cold to reach room temperature before powering up — condensation forms on cold surfaces placed in warm air

### Rodent Damage

Rodents gnaw through coaxial cable insulation, mains leads, and connecting cables. A mains cable with the insulation damaged is a fire and electrocution hazard. **Inspect all cables periodically**, particularly those routed through walls, under floors, or in outdoor runs. Replace any cable with damaged insulation immediately — do not tape over damage to mains cables.

---

## 8I — Self-Check

<details>
<summary><strong>Q1: UK mains is 230 V RMS. What is the approximate peak voltage?</strong></summary>

**325 V.** Peak voltage = RMS × √2 = 230 × 1.414 ≈ 325 V. The peak voltage is what appears across the conductors at the crest of each cycle — substantially higher than the RMS figure suggests.

</details>

<details>
<summary><strong>Q2: A desk lamp is rated 60 W. Connected to 230 V mains, which fuse should be fitted in the plug?</strong></summary>

**3 A.** Calculate: I = P ÷ V = 60 ÷ 230 = 0.26 A. The next standard UK fuse rating above 0.26 A is 3 A. (A lamp is listed in the RSGB examples as a typical 3 A appliance.)

</details>

<details>
<summary><strong>Q3: What is the correct type of fire extinguisher to use on a live electrical fire?</strong></summary>

**CO₂ (carbon dioxide), identified by a black label.** Water conducts electricity and must never be used on live electrical equipment. CO₂ does not conduct, leaves no residue, and smothers the fire by displacing oxygen.

</details>

<details>
<summary><strong>Q4: Someone in your shack has received an electric shock and is still in contact with the live conductor. What is the first thing you must do?</strong></summary>

**Switch off the power.** Do NOT touch the person until the circuit is de-energised — grabbing them will pass current through you as well. Turn off power at the socket or at the consumer unit. Then call 999, and start CPR if the person is unresponsive and not breathing normally.

</details>

<details>
<summary><strong>Q5: An RCD detects a current imbalance of approximately how many milliamps and trips in how long?</strong></summary>

**~30 mA, in 25–40 milliseconds.** This is fast enough to prevent ventricular fibrillation in most cases, since the heart-stopping threshold is ~100 mA and the RCD disconnects the supply before the full lethal current can flow for enough time to cause cardiac arrest.

</details>

<details>
<summary><strong>Q6: You switch off a mains power supply to work inside it. Why might it still be dangerous to touch internal components immediately?</strong></summary>

**Large electrolytic capacitors retain their charge** after the supply is switched off. A power supply filter capacitor can hold hundreds of volts for minutes or hours. Always wait, then measure across the capacitors with a voltmeter before touching any internal components. A bleed resistor across the capacitor drains the charge at switch-off — check the design includes one.

</details>

<details>
<summary><strong>Q7: What is the purpose of a static discharge resistor (>100 kΩ) connected across an antenna to earth?</strong></summary>

**It bleeds away static charge** that builds up on the antenna from atmospheric electricity or nearby lightning activity. The high resistance means it has negligible effect on normal RF transmission, but it provides a continuous discharge path for static — preventing the build-up of large static voltages that could damage equipment or cause a sharp discharge. It does not protect against direct lightning strikes or the high-voltage surge from a nearby strike (that requires a gas discharge arrestor).

</details>

<details>
<summary><strong>Q8: When soldering, why should gloves not be worn when drilling metal and eye protection be worn when clipping component leads?</strong></summary>

**Drilling:** Gloves can catch on the rotating drill bit and drag the hand into the chuck — bare hands are safer because you can feel the bite and pull away. Secure the workpiece in a vice instead.

**Clipping leads:** Small lengths of wire fly off unpredictably when cut with side-cutters. Eye protection prevents them entering the eye. This is one of the most reliably overlooked workshop hazards.

</details>

---

## 8J — Workshop Construction Safety (8B3–8B6)

Building and modifying equipment is a core part of amateur radio. The workshop introduces its own set of hazards — different from mains wiring but just as capable of causing injury. Most workshop accidents are caused by one of three things: inadequate securing of work, wrong tool for the job, and lapses in PPE.

### General Principles

A safe workshop is an organised one. Keep the bench clear of clutter — searching for a tool with one hand while holding work with the other is how cuts happen. Ensure the area is well lit; poor lighting leads to misjudged cuts and missed fingers. Tie back long hair and avoid loose sleeves. Loose clothing near rotating equipment (drill, rotary tool) can catch and pull a hand in before you react.

> [INFO] **8B3:** Safe workshop basics: clear bench, adequate lighting, no loose clothing near rotating equipment, hair tied back.

### Hand Tools

Use the **correct tool for the job** — attempting to use a screwdriver as a chisel or a file as a lever is dangerous and damages both the tool and the work.

**Sharp tools are safer than blunt ones.** A blunt saw or drill bit requires extra force; that force is uncontrolled when the tool slips. A sharp tool cuts predictably with light pressure.

**Always work away from the body.** When using a screwdriver, file, or chisel, the direction of force should not be pointing at your own hand, wrist, or body in case the tool slips.

### Marking Out and Centre Punching

Before drilling, **mark the drill position clearly** and use a **centre punch** to make a small indent. Without a centre punch, a drill bit will wander across the surface before biting in — especially on metal. The punch indent gives the tip somewhere to seat immediately and prevents slipping.

> [INFO] **8B5 — centre punch:** Always centre punch a metal workpiece before drilling. This prevents the drill bit walking across the surface and causing a mis-drilled hole or personal injury from the bit snagging.

### Clamping and Securing Work

**Never hold work freehand while drilling or sawing.** A drill bit catching in the work at the moment of breakthrough can spin the workpiece violently. A bench vice, G-clamp, or machine vice holds the work securely so that catch-and-spin cannot injure you.

> [INFO] **8B3:** Always clamp or vice work securely before drilling or sawing. A workpiece that spins free can cause serious laceration injuries.

### Drilling — Hand Drill vs Pillar Drill

A **hand drill (or cordless drill)** is versatile and portable. A **pillar drill (bench drill)** is safer for repetitive or accurate work:

- Both hands are free to hold the work or operate the guard
- Feed rate is controlled by the quill handle, not arm pressure
- A chip guard can be fitted to the column

**The chuck key rule:** On any drill with a keyed chuck, the **chuck key must be removed before switching the power on.** A chuck key left in the chuck becomes a projectile the instant the motor starts. Make removing the key the last action before pressing the power button — every time.

> [WARNING] **8B4, 8B6 — chuck key:** Remove the chuck key from the drill before switching power on. A key left in the chuck will fly out with serious force when the motor starts.

**PPE for drilling:**
- **Safety glasses** — metal swarf and drill tip fragments are eye hazards
- **No gloves near rotating drills** — a loose glove can catch in the rotating chuck or bit and pull the hand in; bare hands give you tactile feedback and can pull clear

### Cutting and Deburring

After cutting metal with a hacksaw or tin snips, the cut edge will have a sharp burr. Run a **file** across both sides of the cut to remove it. Burrs on aluminium chassis, PCB brackets, and connector holes will cut skin without obvious contact — deburr every cut edge before handling.

### Battery Short-Circuit Hazard

Vehicle and leisure batteries operate at 12 V — low enough that electric shock is rarely the hazard. The hazard is **short-circuit current**. A large lead-acid battery can deliver hundreds of amps through a short circuit, enough to instantly weld rings, watches, and bracelets against skin, causing deep burns from heat rather than electrical energy.

Remove **all jewellery and metal watch straps** before working on vehicle batteries or any high-capacity battery system. A wedding ring bridging the positive terminal and the vehicle chassis can be welded to the finger in less than a second.

> [WARNING] **8A8 — battery short-circuit:** Remove all jewellery and metal watch straps before working near vehicle batteries. A 12 V battery is not a shock hazard but produces enough current to cause severe burns from short-circuit heating.

### Drilling and Soldering PPE Summary

| Activity | Required PPE | Forbidden |
|---|---|---|
| Drilling metal | Safety glasses | Gloves near rotating bit |
| Cutting with snips/saw | Safety glasses, care with edges | — |
| Soldering | Safety glasses (for lead clipping), ventilation | Eating/drinking at bench |
| Working on batteries | Remove jewellery, watch strap | Metal tools laid across terminals |

---

## Interactive Suggestions (for INTERACTIVES batch)

1. **Fuse rating calculator** — enter appliance power (W) and mains voltage (V), get the calculated current and the correct BS 1362 fuse rating with the worked calculation shown. Directly practises the 8A4 exam calculation.

2. **RF exposure self-assessment decision tree** — guided questions: power level, antenna type, distance from occupied space, frequency band. Outputs a "likely within limits / seek advice / take action" result. Complements the §1G EMF compliance framework.

---

*Section 8 complete. Handoff to LessonsBuilder (Frontend) for HTML build.*
