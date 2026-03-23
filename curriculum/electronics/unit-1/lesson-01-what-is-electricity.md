# Lesson 1 — What Is Electricity?

**Unit:** 1 — The Language of Electricity  
**Level:** `[F]` Foundation  
**RSGB Syllabus:** 2A1  
**Prerequisites:** None  
**Equipment Needed:** None (optional: a multimeter for the bench experiment at the end)  
**Estimated Time:** 25 minutes theory + interactive exploration

---

## Learning Objectives

By the end of this lesson you will be able to:

1. Explain what electric charge is and why it is the starting point for all of electronics
2. Describe how current flows in a conductor at the particle level
3. State the unit of current (ampere) and relate it to the physical movement of charge
4. Distinguish between conductors and insulators, and explain why the distinction exists at the atomic level
5. Recognise the difference between conventional current direction and electron flow, and know which convention this curriculum uses
6. Explain why a complete circuit is necessary for sustained current flow

---

## 1. Charge: Where It All Starts

Everything in this curriculum — every component, every circuit, every signal you will ever transmit or receive — comes back to one physical quantity: **electric charge**.

Charge is a fundamental property of matter, as fundamental as mass. You cannot see it directly, but its effects are everywhere: the spark from your finger to a metal door handle, lightning crossing kilometres of sky, the 100 W signal from an HF transmitter reaching the other side of the world.

Here is what you need to know about charge at this stage.

**Atoms contain charged particles.** Every atom has a nucleus of positively charged **protons** and uncharged **neutrons**, surrounded by negatively charged **electrons**. In a neutral atom, the number of protons equals the number of electrons and the charges balance to zero.

**Charge comes in two types: positive and negative.** This is not a labelling convention — positive and negative charges behave in physically opposite ways. Like charges repel each other. Unlike charges attract. This attraction and repulsion is the engine that drives everything in electronics.

**The electron carries the smallest freely-moving unit of charge.** A single electron's charge is unimaginably small: about 1.6 × 10⁻¹⁹ coulombs. The **coulomb** (symbol **C**) is the SI unit of charge. In practice we never work with individual electrons — we work with incomprehensibly large numbers of them moving together.

**Charge is conserved.** You cannot create or destroy charge. You can only move it from one place to another. This is not just a theoretical principle — it is the foundation of every circuit analysis technique you will learn. When charge flows into one end of a component, exactly the same amount flows out the other end. No exceptions. Ever.

> **A note on the word "electricity."** In everyday English, "electricity" means everything from the energy that lights your house to the spark from a Van de Graaff generator. It is surprisingly imprecise. In this curriculum we avoid it as a technical term. Instead we talk about **charge**, **current**, **voltage**, and **power** — each with a precise definition and a measurable unit. When we say "electricity" informally, we mean the general phenomenon. When precision matters, we use the specific quantity.

<!-- VISUAL: atom-charge-model
A simple, stylised atom diagram (NOT a Bohr planetary model with orbits — use a nucleus-plus-cloud approach to avoid planting wrong models).

Centre: a cluster of small spheres — amber for protons (labelled "+"), grey for neutrons (no label). This is the nucleus.

Surrounding: a soft, blurred cloud (cyan/blue tint) representing the electron probability region, with a few electron markers (small cyan dots) scattered within it. Each electron labelled "−".

Annotations:
  - Arrow from proton: "Positive charge (+)"
  - Arrow from electron: "Negative charge (−)"
  - Arrow from neutron: "No charge"
  - A note near the cloud: "In a neutral atom, positive charges = negative charges → net charge is zero"

Below the atom, a two-panel inset:
  Panel A — "Like charges repel": two positive charges with arrows pushing them apart
  Panel B — "Unlike charges attract": one positive and one negative with arrows pulling them together

Style: Dark background, clean labels in IBM Plex Sans. Protons in amber (--accent-e), electrons in cyan (--accent-h), neutrons in mid-grey.
-->

---

## 2. Current: Charge in Motion

Charge sitting still is electrostatics — interesting for understanding lightning, but not much use for building a radio. Electronics begins when charge *moves*.

**Electric current is the rate at which charge flows past a point.** That is the definition. Not "the amount of charge" — the *rate*. How much charge passes per second.

The unit of current is the **ampere** (symbol **A**), named after the French physicist André-Marie Ampère. One ampere means one coulomb of charge flowing past a point every second.

> **1 A = 1 C/s** — one ampere equals one coulomb per second.

What does one ampere actually look like at the particle level? One coulomb contains approximately 6.24 × 10¹⁸ electrons. That is 6,240,000,000,000,000,000 electrons passing a single point in one second. Even a tiny current of one milliamp (1 mA = 0.001 A) involves about 6.24 × 10¹⁵ electrons per second. The numbers are absurd, which is exactly why we use amperes instead of counting electrons.

In RF electronics, the currents you encounter span a huge range:

- A sensitive receiver might detect a signal that induces **microamps** (μA, millionths of an ampere) in the antenna
- A typical circuit might draw **milliamps** (mA, thousandths of an ampere) from its power supply
- An HF transmitter's final amplifier might pull **several amperes** from a 13.8 V supply
- A high-power broadcast transmitter can demand **hundreds of amperes**

The prefixes matter. You will use them constantly:

| Prefix | Symbol | Multiplier | Example |
|--------|--------|------------|---------|
| micro | μ | × 10⁻⁶ (÷ 1,000,000) | 50 μA received signal |
| milli | m | × 10⁻³ (÷ 1,000) | 250 mA circuit draw |
| (none) | A | × 1 | 3 A transmitter PA |
| kilo | k | × 10³ (× 1,000) | (rare in current — common in frequency and resistance) |

<!-- VISUAL: current-flow-pipe
A horizontal conductor (wire) shown in cross-section, stylised as a translucent tube.

Inside the tube, small cyan spheres (electrons) drift slowly from right to left. Each electron has a tiny "−" label. The drift is SLOW — not a torrent, more like a lazy river. This is physically accurate: electron drift velocity in a typical copper wire is only about 0.1 mm/s at 1 A.

Above the wire, a vertical dashed line marks "this point." A counter tallies electrons passing the line per second, then converts to coulombs (÷ 6.24 × 10¹⁸), then displays the current in amperes.

Below the wire, a slider lets the student adjust the current from 0.1 mA to 5 A. As current increases:
  - More electrons appear in the tube (higher density, slightly faster drift)
  - The counter speeds up
  - The ampere readout updates

Key label: "Current = rate of charge flow. More charge per second = more amperes."

A small inset note: "Electrons drift slowly (~0.1 mm/s at 1A in copper). The electric field that pushes them travels at nearly the speed of light. That's why the lamp turns on instantly — the push arrives fast, even though individual electrons barely move."

Style: Dark background. Wire outline in mid-grey. Electrons in cyan. Counter digits in amber (IBM Plex Mono).
-->

### The Speed Misconception

There is a common misconception worth addressing now, because it will come back to bite you later if left uncorrected.

When you flip a light switch, the lamp turns on almost instantly. It is natural to assume the electrons must be racing through the wire at enormous speed. They are not.

In a typical copper wire carrying one ampere, the electrons drift at roughly **0.1 millimetres per second**. That is not a typo. A tenth of a millimetre. Per second. A snail would leave them behind.

So why does the lamp turn on instantly? Because the **electric field** that pushes the electrons propagates through the wire at close to the speed of light. When you close the switch, the field reaches every electron in the circuit almost simultaneously, and they all start moving at once. It is like a pipe already full of water: push on one end and water comes out the other end immediately, even though no individual water molecule has travelled the full length.

The current you measure — amperes — is the collective drift of enormous numbers of very slow electrons. The signal that tells them to move travels fast. The electrons themselves do not.

---

## 3. Conventional Current vs Electron Flow

Here is something that trips up every beginner, and it has tripped up students since the 18th century.

When Benjamin Franklin was experimenting with static electricity in the 1740s, he had to pick a direction for current flow. He guessed that positive charge moved from the positive terminal, through the circuit, to the negative terminal. He was wrong — we now know that in metal conductors, it is the negatively charged electrons that move, and they flow from negative to positive.

But Franklin's convention stuck. Every circuit diagram, every textbook, every equation you will encounter in electronics defines current as flowing from **positive to negative**. This is called **conventional current**.

The actual electron movement — from **negative to positive** — is called **electron flow**.

Both descriptions produce the same results in circuit analysis. Ohm's law works. Kirchhoff's laws work. Power calculations work. The maths does not care which direction you call "positive," as long as you are consistent.

**This curriculum uses conventional current**, as does virtually all electronics and RF engineering literature. Current flows from positive to negative. When we draw an arrow showing current direction on a circuit diagram, it points from + to −.

If this feels uncomfortable, here is the practical resolution: think of current as a flow of positive charge from + to −. The fact that electrons (negative charge) are actually flowing the other way means that a flow of negative charge in one direction is mathematically identical to a flow of positive charge in the opposite direction. The physics is the same either way.

> **Convention settled:** In this curriculum, current flows from positive to negative (conventional current). All circuit diagrams, arrows, and analysis use this convention. This matches the RSGB syllabus, ARRL literature, and standard engineering practice.

<!-- VISUAL: conventional-vs-electron
Two identical simple circuits side by side (battery + lamp + wire loop), both with the same components in the same arrangement.

LEFT — "Conventional Current":
  - Arrow on the wire showing current flowing from the + terminal of the battery, through the external circuit, to the − terminal
  - Arrow colour: amber
  - Label: "Conventional current: + to −"
  - Small note: "Used in circuit analysis, schematics, and this curriculum"

RIGHT — "Electron Flow":
  - Arrow on the wire showing electrons flowing from the − terminal, through the external circuit, to the + terminal
  - Arrow colour: cyan
  - Small electron symbols (−) dotted along the wire moving in the arrow direction
  - Label: "Electron flow: − to +"
  - Small note: "What physically happens in a metal conductor"

Centre divider text: "Both describe the same circuit. Both give the same answers. Convention: we use the left one."

Style: Dark background. Battery clearly labelled + and − with amber/cyan. Lamp glowing equally in both circuits (same current, same brightness — the choice of convention changes nothing physical).
-->

---

## 4. Conductors and Insulators

Not all materials allow current to flow. Whether a material conducts depends on what is happening at the atomic level.

### Conductors

In a **conductor**, some electrons are not tightly bound to individual atoms. In metals — copper, aluminium, silver, gold — the outermost electrons are shared across the entire material in what physicists call an "electron sea" or "conduction band." These **free electrons** can move through the material when pushed by an electric field.

Copper is the workhorse of electronics. It has excellent conductivity (one free electron per atom readily available for conduction), it is ductile enough to draw into thin wire, and it is affordable. Almost every wire, PCB trace, and connector you will encounter in RF work is copper or copper-plated.

Silver is slightly more conductive than copper — about 5% better. At RF frequencies, where current flows only in a thin skin on the conductor surface (the **skin effect** — we will cover this properly in a later unit), that 5% can matter. This is why some RF connectors and cavity filters are silver-plated.

Aluminium is lighter and cheaper than copper but less conductive. It is used for antenna elements, ground planes, and chassis where weight matters.

### Insulators

In an **insulator**, all electrons are tightly bound to their atoms. There are no free electrons available to carry current. Apply an electric field and nothing moves — the electrons stay locked in place.

Common insulators in electronics: glass, ceramic, most plastics (PVC, PTFE, polyethylene), rubber, dry air. You encounter them as wire insulation, PCB substrate material, coaxial cable dielectric, and the dielectric in capacitors (a concept we will meet in Unit 2).

**PTFE** (polytetrafluoroethylene, commonly known as Teflon) is particularly important in RF work. It has extremely low dielectric loss at high frequencies, which is why premium RF coaxial cables and PCB materials use PTFE as the dielectric. When you see cable types like RG-142 or substrate names like Rogers RT/duroid, they are PTFE-based.

### The Spectrum Between

The conductor/insulator division is not binary. **Semiconductors** — silicon and germanium — sit between the two extremes. Their conductivity can be controlled by adding impurities (doping), by temperature, or by applying a voltage. This controllability is what makes transistors possible, and transistors are what make amplifiers, oscillators, and everything else in active electronics possible. We will reach semiconductors in Unit 4.

There are also materials whose conductivity depends on conditions: wet wood conducts (poorly), dry wood insulates. Salt water is a decent conductor; pure water is a reasonable insulator. In RF engineering, the conductivity of soil and sea water directly affects ground-wave propagation and antenna ground systems — a topic covered in the antenna curriculum.

<!-- VISUAL: conductor-insulator-atomic
Two side-by-side panels showing the atomic-level view:

LEFT — "Conductor (Copper)":
  - A grid of copper atoms (amber nuclei) in a regular lattice
  - Between and around the atoms, a scattering of free electrons (cyan dots) moving randomly in all directions — the "electron sea"
  - When an electric field arrow appears (from left), the free electrons begin drifting (slowly) to the right
  - Label: "Free electrons in the conduction band can move when pushed by an electric field"

RIGHT — "Insulator (Glass)":
  - A grid of atoms with electrons shown tightly bound (small cyan dots orbiting close to each nucleus, not free to roam)
  - When the same electric field arrow appears, nothing moves. The electrons stay bound.
  - Label: "All electrons are bound to their atoms. No free carriers — no current."

Below both panels, a conductivity scale bar running from "Perfect insulator" (left, dark) through "Semiconductor" (middle, amber-cyan gradient) to "Perfect conductor" (right, bright cyan). Key materials marked on the scale:
  Glass — Rubber — Silicon — Germanium — Iron — Aluminium — Copper — Silver

Style: Dark background. Lattice atoms in amber, electrons in cyan, electric field arrow in purple.
-->

---

## 5. Circuits: The Complete Path

Current does not flow in isolation. It needs a complete, unbroken path — from the energy source, through the circuit, and back to the source. This path is called a **circuit** (from the Latin *circuitus* — "a going around").

Break the path at any point and current stops everywhere in the circuit, instantly. This is why a switch works: it opens a gap in the conductor, breaking the circuit. Close the gap, current flows. Open it, current stops.

The simplest circuit has four elements:

1. **A source of energy** — a battery, power supply, or signal generator. It provides the force that pushes charge around the circuit. (We will define this force precisely in Lesson 2 — it is called *voltage*.)
2. **A conductor** — wire connecting the components. It provides the path for current.
3. **A load** — something that uses the energy: a lamp, a resistor, an amplifier, an antenna. Without a load, you have a short circuit (all the energy source's push with no resistance — dangerous and destructive).
4. **A return path** — the conductor back to the source. The circuit must be complete.

Every circuit you will ever analyse, no matter how complex, is built from these elements. A superhet receiver with hundreds of components is still, at its core, sources pushing current through loads along complete paths.

<!-- VISUAL: simple-circuit-interactive
A minimal interactive circuit:

Components:
  - A battery (labelled + and −, voltage shown as "?V" — voltage is not yet defined, so keep it abstract)
  - A single lamp (or resistor symbol)
  - Two wires connecting them in a loop
  - A switch in one wire segment

States:
  SWITCH CLOSED:
    - Conventional current arrow appears, flowing from + terminal through external circuit to − terminal
    - Small animated electrons (cyan dots) drift in the opposite direction inside the wire (subtle, secondary)
    - The lamp glows
    - A note: "Complete circuit → current flows"

  SWITCH OPEN:
    - Current arrow disappears
    - Electron drift stops
    - The lamp is dark
    - A gap appears in the wire at the switch
    - A note: "Broken circuit → no current anywhere"

Interaction: Click/tap the switch to toggle open/closed. Student sees the immediate effect on the entire circuit.

Optional extension: a second switch in series — both must be closed for current to flow. Demonstrates that a break ANYWHERE stops current EVERYWHERE.

Style: Dark background. Battery terminals in amber (+) and cyan (−). Wire in light grey. Current arrow in amber. Switch as a simple lever/contact.
-->

### Why "Complete Path" Matters in RF

At this point you might wonder: does a transmitting antenna have a complete circuit? The signal leaves the antenna and radiates into space — where is the return path?

Good question. The answer is that the antenna *does* form a complete circuit, but the return path is not always an obvious wire. In a dipole antenna, current flows up one half and back down the other — the two halves of the dipole are the outgoing and return paths. In a vertical monopole, the ground plane provides the return. In a transmission line, one conductor carries current out and the other carries it back.

The complete-circuit principle is never violated. It just gets more interesting in RF systems. The antenna curriculum covers this in detail.

---

## 🔧 Hands-On: Build Your First Circuit (Optional Bench Experiment)

If you have a multimeter, a battery (AA or 9V), and a small torch bulb or LED (with a resistor), you can verify the complete-circuit principle directly.

**What you need:**
- One battery (1.5 V AA or 9 V PP3)
- One small load (torch bulb, or LED with a 470 Ω resistor in series)
- Two short pieces of wire (or crocodile clip leads)
- A multimeter set to DC current (mA range)

**What to do:**

1. Connect the battery, load, and multimeter in a loop — the multimeter in series so all the current flows through it.
2. Note the current reading. This is the current flowing in every part of the circuit — it is the same everywhere in a series loop (we will prove this in Lesson 4 with Kirchhoff's current law, but observe it now).
3. Disconnect one wire. The current drops to zero everywhere. Not just at the break point — everywhere.
4. Reconnect. Current returns to the same value.

You have just demonstrated: charge conservation (same current everywhere in a series loop) and the complete-circuit principle (break anywhere, current stops everywhere).

> **Experiment note:** This experiment is referenced here but exists as a standalone entity in the RF-Hub experiment library. A full write-up with equipment options, safety notes, and measurement recording templates is linked from the experiment index.

---

## Summary

**Electric charge** is a fundamental property of matter. It comes in two types (positive and negative), is carried by protons and electrons, and is always conserved — never created or destroyed.

**Electric current** is the rate of charge flow. One ampere equals one coulomb of charge passing a point per second. The electrons that carry current in a metal wire drift very slowly; the electric field that pushes them propagates at nearly the speed of light.

**Conventional current** flows from positive to negative. Electron flow is the opposite direction. Both describe the same physics. This curriculum uses conventional current, matching standard engineering practice.

**Conductors** (metals like copper, silver, aluminium) have free electrons that can move under an electric field. **Insulators** (glass, ceramic, PTFE, most plastics) have all electrons tightly bound. **Semiconductors** sit between the two — their controllable conductivity is the foundation of active electronics.

**A circuit requires a complete path.** Break the path anywhere and current stops everywhere. Every circuit consists of a source, a conductor, a load, and a return path.

---

## Self-Check Exercises

### Quick Calculations

Use the relationship **1 A = 1 C/s** for these. A calculator is fine.

**Q1.** A circuit carries a steady current of 2 A. How much charge passes a point in the wire in 10 seconds?

<!-- SELF-CHECK-ANSWERS: quick-calc-q1
Q = I × t = 2 A × 10 s = 20 coulombs.
In 10 seconds, 20 coulombs of charge pass the point. That's approximately 1.25 × 10²⁰ electrons.
-->

**Q2.** A receiver's antenna input stage draws 50 μA. Express this in amperes.

<!-- SELF-CHECK-ANSWERS: quick-calc-q2
50 μA = 50 × 10⁻⁶ A = 0.000050 A = 5 × 10⁻⁵ A.
The prefix μ (micro) means "divided by one million."
-->

**Q3.** An HF transmitter draws 22 A from a 13.8 V power supply. A handheld VHF radio draws 350 mA on transmit. How many times more current does the HF transmitter draw?

<!-- SELF-CHECK-ANSWERS: quick-calc-q3
First, get both in the same units. 350 mA = 0.35 A.
Ratio: 22 / 0.35 = 62.9 — the HF transmitter draws about 63 times more current.
(We haven't covered power yet, but this gives you a feel for the scale difference. Lesson 3 will connect current and voltage to power.)
-->

### Concept Questions

Think about each question before revealing the answer.

**Q4.** You have a simple circuit: battery, switch, and lamp in a loop. The switch is closed and the lamp is lit. You now cut the wire between the lamp and the battery's negative terminal. What happens to the current flowing between the battery's positive terminal and the lamp?

<!-- SELF-CHECK-ANSWERS: concept-q4
The current drops to zero EVERYWHERE in the circuit — including between the positive terminal and the lamp. Breaking the circuit at any point stops current at every point. Current requires a complete path. There is no "current left over" between the battery and the lamp just because that section of wire is still connected.
-->

**Q5.** Copper is used for almost all wiring in electronics. Silver is a slightly better conductor. Why isn't silver used instead?

<!-- SELF-CHECK-ANSWERS: concept-q5
Cost. Silver is far more expensive than copper, and the conductivity improvement is only about 5%. For most applications the difference doesn't justify the cost. However, in RF applications where current flows in a thin skin on the surface (skin effect), even a small conductivity improvement matters — which is why RF connectors and cavity filters are sometimes silver-plated. You get the benefit of silver's conductivity where it counts (the surface) without the cost of making the entire component from silver.
-->

**Q6.** Is current a flow of electrons or a flow of positive charges?

<!-- SELF-CHECK-ANSWERS: concept-q6
In a metal conductor, the physical reality is that electrons (negative charges) move. But conventional current — the universal convention in electronics — describes current as a flow of positive charge from + to −. Both descriptions produce identical results in every equation and analysis technique. We use conventional current in this curriculum because it matches all standard references, schematics, and engineering practice. The key is consistency.
-->

**Q7.** A friend says: "When I flip a light switch, electricity shoots through the wire at the speed of light and reaches the bulb." What is right and what is wrong about this statement?

<!-- SELF-CHECK-ANSWERS: concept-q7
Partially right, mostly wrong. What travels at near the speed of light is the ELECTRIC FIELD — the push that tells all the electrons in the wire to start moving. The electrons themselves drift at about 0.1 mm/s in typical conditions — extraordinarily slowly. The bulb lights up almost instantly because the field arrives almost instantly, not because electrons sprint from the switch to the bulb. The wire was already full of free electrons; the field just nudged them all at once.
-->

### Conductor or Insulator?

For each material, state whether it is a conductor, insulator, or semiconductor, and give a one-sentence reason.

1. Copper wire
2. The rubber coating on a mains cable
3. A silicon chip (undoped)
4. Sea water
5. The PTFE dielectric inside a coaxial cable
6. A gold-plated SMA connector pin
7. Dry air

<!-- SELF-CHECK-ANSWERS: conductor-insulator
1. Conductor — copper has abundant free electrons in its conduction band.
2. Insulator — rubber has no free electrons; all electrons are tightly bound.
3. Semiconductor — pure silicon has very few free carriers at room temperature, but its conductivity can be controlled by doping or temperature.
4. Conductor (poor) — dissolved salt provides mobile ions (Na⁺ and Cl⁻) that carry current. Not as good as a metal, but far better than an insulator.
5. Insulator — PTFE has extremely low conductivity, which is precisely why it's chosen as a dielectric in RF cables (low loss).
6. Conductor — gold is an excellent conductor and highly resistant to corrosion, making it ideal for connector surfaces where reliable contact matters.
7. Insulator (normally) — dry air has no free charges. However, at high enough voltages it breaks down and becomes conducting (this is what lightning is — and what can happen at high-power RF connector junctions).
-->

---

## What's Next

You now know what charge is, what current is, and why materials conduct or insulate. But we have not yet answered the most basic practical question: **what pushes the charge around?**

In **Lesson 2 — Voltage, Current, and Resistance**, we introduce the two missing pieces: **voltage** (the force that drives current) and **resistance** (the opposition to current flow). Together with current, they form the three quantities of Ohm's law — the single most-used equation in all of electronics.

---

<!-- LESSON-META
lesson_id: E-L01
unit: 1
curriculum: electronics
title: What Is Electricity?
level: [F]
rsgb_ref: 2A1
status: DRAFT
interactives_used: none (visual briefs for HTML agent)
visual_briefs: atom-charge-model, current-flow-pipe, conventional-vs-electron, conductor-insulator-atomic, simple-circuit-interactive
experiment_refs: basic-circuit-multimeter (bench experiment, optional)
estimated_reading_time: 25 minutes
cross_curriculum_links: antenna-curriculum (complete circuit / return path discussion references antenna feed systems)
-->
