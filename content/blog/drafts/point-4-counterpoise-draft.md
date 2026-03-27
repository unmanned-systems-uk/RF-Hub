# Point 4 — Counterpoise: The Argument That Actually Matters

## DRAFT — Blog 1.0 Section

---

### The part of the antenna nobody talks about

Every antenna textbook starts with the dipole. Two conductors, equal in
length, fed in the centre. Current flows out along one arm, returns along
the other. The system is balanced, self-contained, and elegant. It makes
sense.

Then you meet the end-fed wire, and things get uncomfortable.

An end-fed antenna has one conductor. The feedpoint is at one end of the
wire, and the RF current flowing along that wire has to return to the
source somehow. In a dipole, the return path is the other arm. In an
end-fed, the return path is whatever happens to be connected to the other
terminal of the UNUN — the ground terminal, the coax shield, the earth
connection. The collective term for this return path is the **counterpoise**.

The counterpoise is not optional. It is half the antenna. Without it, the
RF current has no return path, the UNUN cannot do its job, and the antenna
does not work. With a poor counterpoise, the antenna works poorly — and
in ways that are difficult to diagnose, because the symptoms look like
everything else (high SWR, noise, pattern distortion, common-mode current
on the feedline).

This is the single most important reason the feedpoint is 40 metres from
the house.

### What a counterpoise actually does

To understand why this matters, you need a mental model of what the
counterpoise is doing electrically.

At the feedpoint of an end-fed wire, the UNUN transforms the antenna
impedance to something the feedline (or SDR input) can work with. The 9:1
UNUN on the Moonraker LWHF-160 expects to see a high impedance on its
antenna terminal — which is what the end of a long wire presents. On the
other terminal — the ground terminal — it expects to see a low impedance
path to... somewhere.

That "somewhere" is the counterpoise. And "low impedance" is the key
phrase. The counterpoise needs to present a low-impedance RF return path
at the frequencies of interest. If it does, the UNUN works as designed,
the antenna presents a reasonable match, and the system behaves predictably.
If the counterpoise impedance is high or reactive, the UNUN's transformation
ratio is wrong, the match degrades, and RF current goes looking for
alternative return paths.

Those alternative paths are where the trouble starts.

### Near the house: the counterpoise you did not choose

Imagine the LWHF-160 mounted on the chimney. The UNUN sits at the base
of the wire, screwed to a bracket on the chimney stack. The ground
terminal has a wire running to... what, exactly?

**Option 1: The house earth.** The ground terminal connects via a wire down
the wall to the mains earth rod. This is the most common recommendation
for house-mounted end-feds. The problem is that the mains earth is not an
RF earth — it is a safety earth designed for 50 Hz fault currents. At HF
frequencies, the wire running to the earth rod has significant inductance.
The earth rod itself, driven into whatever soil happens to be beneath the
house, may have high ground resistance. And the mains earth connects to
every other earth in the house — the boiler, the consumer unit, the
metalwork. You have not grounded the antenna. You have connected it to
the house.

**Option 2: A dedicated counterpoise wire.** Better in theory — a wire of
calculated length, routed away from the building. But on a chimney, "away
from the building" means along the roof. The wire runs over slates, past
guttering, alongside lead flashing, above the central heating pipes in
the loft. Every piece of metalwork within coupling distance becomes part
of the counterpoise whether you intended it or not. The wire you chose is
in parallel with the metalwork you did not choose, and the metalwork
usually wins because it presents a lower impedance at RF.

**Option 3: No explicit counterpoise.** The UNUN ground terminal connects
to the coax shield, and the coax runs down the wall to the shack. The
counterpoise is now the coax shield — which means the outside of the coax
braid is part of the antenna system. Common-mode current flows on the
shield, the coax radiates, it picks up noise from every device along its
route, and the receiver sees all of it. A common-mode choke at the
feedpoint can reduce this, but it is a mitigation, not a solution. The
fundamental problem — no intentional, controlled counterpoise — remains.

In all three scenarios, the counterpoise is not a single, known component.
It is an uncontrolled collection of metalwork, wiring, and soil connections
whose impedance varies with frequency, weather, and what happens to be
plugged in at the time. The antenna system is not just the wire and the
UNUN — it includes the guttering, the plumbing, the coax shield, the
mains earth, and anything else that provides an RF return path. You cannot
model it. You cannot predict it. You can only measure it, and when you do,
you discover it changes every time someone switches on a kettle.

### Why this is worse than the noise problem

Point 2 covered household RF noise — the conducted and radiated emissions
from switch-mode power supplies, LED drivers, and smart home devices.
That is a real problem, but it is a problem of **interference**: unwanted
signals being added to the wanted signals. In principle, interference can
be filtered, gated, or mitigated with DSP. It degrades performance, but
it does not break the antenna.

The counterpoise problem is different. It is not interference being added
to the system — it is the antenna system itself being corrupted. When the
counterpoise is the house metalwork:

- **The impedance match changes unpredictably.** The SWR you measured on
  Tuesday is not the SWR you get on Thursday, because someone moved the
  garden hose or the boiler cycled.
- **The radiation pattern is distorted.** The counterpoise is part of the
  radiating system. If the counterpoise includes 15 metres of guttering
  running east along the roofline, that guttering radiates and receives.
  Your carefully chosen null direction (Point 3) is compromised by a
  counterpoise element you did not know was there.
- **Common-mode current becomes structural.** When the coax shield is part
  of the counterpoise, common-mode current on the feedline is not a
  side-effect to be managed — it is an inherent feature of the antenna
  system. Chokes and ferrites can attenuate it, but they are fighting the
  system design, not an external problem.
- **Noise coupling is not just additive — it is multiplicative.** The
  counterpoise does not just pick up noise and add it to the signal. It
  changes the antenna's impedance match, which changes the noise figure of
  the system, which changes the signal-to-noise ratio in a way that is
  not simply "noise floor + interference." The entire receive chain is
  compromised.

This is why I called counterpoise integrity the killer argument. Noise can
be managed. Pattern distortion can be accepted. But an antenna system where
the fundamental return path is undefined, uncontrolled, and entangled with
every piece of metalwork in the building — that is not a system you can
characterise, improve, or learn from. And learning is the point.

### The remote counterpoise: what changes at 40 metres

At the mast, 40 metres from the house, the counterpoise situation is
fundamentally different.

**There is no house metalwork within coupling distance.** The nearest
guttering, plumbing, or wiring is 40 metres away. At HF wavelengths,
near-field coupling drops off rapidly with distance — beyond a few
wavelengths, the coupling is negligible. On 40m (7 MHz, wavelength
approximately 43 metres), the house is roughly one wavelength away. On 20m
and above, it is multiple wavelengths away. The house metalwork is
effectively decoupled from the antenna system.

**The counterpoise is a wire I chose.** At the mast base, I can lay a
counterpoise wire of a specific length, in a specific direction, at a
specific height above ground. It is a deliberate, documented component
of the antenna system — not an accidental collection of whatever metal
happened to be nearby.

**The earth rod is in known soil.** The mast location is in the garden,
in ground that I can characterise — soil type, moisture content, depth to
rock. The earth rod goes where I drive it, into ground I have assessed.
It is not the house mains earth with its unknown connections and shared
fault paths.

**There is no coax shield in the system.** The connection back to the
shack is Ethernet, not coax. There is no outer conductor to become an
unwanted counterpoise element. The SDR sits at the feedpoint, inside a
sealed enclosure, and its ground reference is local to the mast — not
shared with the house. This eliminates the entire class of common-mode
feedline problems that plague house-mounted end-feds.

**The system is measurable.** With a known counterpoise and a known earth,
I can measure the feedpoint impedance with a NanoVNA and get a result that
means something. The S11 sweep reflects the antenna system — the wire, the
UNUN, the counterpoise, the earth — not the antenna system plus the house
plus whatever was plugged in at the time. Changes in the measurement
correspond to changes I made, not changes the house made.

This is the practical difference: I can learn from this system because I
can control it. A house-mounted end-fed with a house-entangled
counterpoise is a black box. A remote end-fed with a deliberate
counterpoise is an experiment.

### Two antennas, two counterpoise problems

The two antennas in this project — the Moonraker LWHF-160 and the BH7JYR
EFHW — have different UNUN designs, and this affects their counterpoise
requirements in different ways.

**The LWHF-160 (9:1 UNUN, non-resonant, 160m–6m).** This is a broadband
antenna. The 41.7-metre wire is not a half-wave at any single frequency —
it is a random-length long wire that the 9:1 UNUN impedance-transforms
into something the feedline can tolerate across a wide range. Because the
wire is not resonant, the feedpoint impedance varies significantly with
frequency, and the counterpoise sees a correspondingly wide range of RF
currents. A counterpoise that works well on 40m may be inadequate on 80m
or 160m, where the wire is electrically short and the currents are higher.
The counterpoise needs to present a reasonable impedance across the entire
1.8–50 MHz range — a demanding requirement.

**The BH7JYR EFHW (1:64 UNUN, resonant, 40/20/15/10m).** This is a
half-wave antenna at 7 MHz, with harmonics on 14, 21, and 28 MHz. At
the fundamental frequency, the end of a half-wave wire presents a very
high impedance (several thousand ohms), and the 1:64 UNUN transforms this
down to approximately 50 ohms. The key property of a half-wave end-fed is
that, at resonance, the current minimum is at the feed end. The
counterpoise sees relatively low current compared to the LWHF-160, and
the system is less sensitive to counterpoise quality — at least at the
resonant frequencies. Off-resonance, the advantage disappears.

This difference matters for the experiment. The EFHW should be more
forgiving of counterpoise variations on its design bands, while the
LWHF-160 will reveal counterpoise problems more readily — especially on
the lower bands where the wire is electrically short and the counterpoise
carries more of the system current. Comparing S11 sweeps of both antennas
with different counterpoise configurations is one of the most informative
measurements this project can make.

### The counterpoise experiments

With a remote feedpoint and a deliberate counterpoise, I can run a series
of controlled experiments:

**Experiment 1: Counterpoise length.** Start with a quarter-wave
counterpoise for 40m (approximately 10 metres). Measure the S11 of both
antennas. Then extend it to a quarter-wave for 80m (approximately 20
metres). Then shorten it to a quarter-wave for 20m (approximately 5
metres). Each change alters the counterpoise resonance, and the S11
sweep will show exactly how the feedpoint impedance responds.

**Experiment 2: Counterpoise direction.** The counterpoise wire can be
laid in different directions from the mast base. Running it towards the
house (south) puts it in line with the antenna wire — effectively making
the system more like a dipole with unequal arms. Running it perpendicular
(east or west, along the valley) changes the radiation pattern. Running it
away from the house (north, towards the hills) maximises the separation
from the building. Each direction is a different antenna system with
different characteristics.

**Experiment 3: Earth rod vs no earth rod.** With only the counterpoise
wire (no earth rod), the system relies entirely on the wire for its RF
return path. Adding an earth rod provides a parallel path through the
soil. The difference between the two — visible on the NanoVNA as a change
in S11 — tells you how much the earth contributes at each frequency.
In wet Scottish soil, I would expect the earth rod to make a meaningful
difference on the lower bands (80m, 160m) where the counterpoise wire is
electrically short relative to a quarter-wave.

**Experiment 4: Multiple radials.** Instead of a single counterpoise wire,
lay two, three, or four radials in different directions. More radials
generally means lower ground-system impedance and a more stable match.
The practical question is how many radials are needed before the
improvement becomes marginal — and whether the improvement is measurable
with the equipment I have.

**Experiment 5: Counterpoise height.** A counterpoise wire laid on the
ground couples strongly to the soil. The same wire raised 30 centimetres
above ground on stakes couples less. Raised to a metre, it behaves more
like a free-space conductor. The height changes the effective impedance
and the coupling to ground, and the NanoVNA will show this as a shift in
the S11 trace. This is textbook antenna theory that I can verify with
real measurements at a real site.

Each of these experiments takes minutes to set up and seconds to measure.
The NanoVNA captures a full S11 sweep in a few seconds. The data goes
straight into a laptop or phone for logging. By the end of a single
afternoon, I can have a dataset showing how the counterpoise length,
direction, grounding, quantity, and height affect the antenna system —
on both antennas, across 1.8–50 MHz.

Try doing any of that on a chimney.

### What this means for the blog

The counterpoise is not the most dramatic part of this project. It does not
involve drones or terrain analysis or sealed aluminium enclosures. It is a
wire on the ground. But it is the component that most determines whether
the antenna system is a known, controllable, measurable thing — or a
mystery box whose behaviour depends on the house it is attached to.

Every other benefit of the remote installation — the noise separation
(Point 2), the pattern control (Point 3), the experimental freedom
(Point 1) — rests on this foundation. If the counterpoise is the house,
the noise separation is compromised because the house noise has a conducted
path into the antenna system. The pattern control is compromised because
the house metalwork is radiating. The experimental freedom is compromised
because you cannot change the counterpoise without changing the house.

Get the counterpoise right, and everything else follows. Get it wrong, and
nothing else matters.

This is why the counterpoise section is Point 4 but priority number one.

---

## EDITORIAL NOTES

### What this section covers
- What a counterpoise is and why end-fed antennas need one
- The three common house-mounting counterpoise options (all flawed)
- Why counterpoise corruption is worse than noise (structural vs additive)
- The remote advantage: controlled, known, measurable counterpoise
- Two antennas' different counterpoise requirements (9:1 vs 1:64 UNUN)
- Five planned counterpoise experiments
- Closing argument: counterpoise is the foundation everything else rests on

### Tone check
- Opens with textbook theory but immediately grounds it in "things get
  uncomfortable" — not lecturing
- "Try doing any of that on a chimney" — punchy, earned after the setup
- "This is why I called counterpoise integrity the killer argument" —
  delivers on the promise from the blog structure discussion
- The experimental section is energetic — "takes minutes", "seconds to
  measure", "single afternoon" — counters any impression this is laborious
- Final paragraph explicitly connects back to all three previous Points

### Key editorial points
1. Counterpoise is half the antenna, not an accessory
2. House-mounted counterpoises are always compromised (three options, all bad)
3. This is structural corruption, not just interference — worse than noise
4. Remote deployment transforms the counterpoise from unknown to controllable
5. The two antennas respond differently — the comparison is informative
6. Five simple experiments yield a rich dataset

### Curriculum tags
- **Lesson 6 — Impedance** (feedpoint impedance, counterpoise impedance)
- **Lesson 15 — Impedance Matching** (UNUN operation, transformation ratio)
- Potential new: **Counterpoise theory and design**
- Potential new: **Ground systems for end-fed antennas**
- Potential new: **Common-mode current — causes and mitigations**
- Links to Understanding S11 blog (measurement interpretation)

### Photo/media placeholders
- [ ] Close-up of LWHF-160 UNUN showing ground terminal
- [ ] Close-up of BH7JYR UNUN for comparison
- [ ] Photo of counterpoise wire laid out from mast base
- [ ] Photo of earth rod being driven in at mast location
- [ ] NanoVNA S11 screenshot: baseline (no counterpoise)
- [ ] NanoVNA S11 screenshot: with quarter-wave counterpoise
- [ ] NanoVNA S11 screenshot: with earth rod added
- [ ] Series of S11 overlays showing counterpoise length comparison
- [ ] Photo from chimney showing guttering, metalwork (the "bad" counterpoise)

### RF-Hub interactive visualisation opportunities
1. **Counterpoise current diagram** — animated SVG showing RF current flow
   in an end-fed system: where does the return current go? Toggle between
   "house-mounted" (current spreads into metalwork) and "remote" (current
   stays in counterpoise wire).
2. **S11 comparison tool** — upload NanoVNA CSV exports and overlay them.
   Label each trace (no counterpoise, 10m wire, 20m wire, with earth rod).
   This could be a general-purpose RF-Hub tool, not just for this blog.

### Cross-references
- Back-references Point 1 (the engineering reason — counterpoise, as promised)
- Back-references Point 2 (conducted noise path — counterpoise is the mechanism)
- Back-references Point 3 (pattern control undermined by uncontrolled counterpoise)
- Forward-references Phase 2 practical measurements (the experiments described)
- Forward-references Blog 2.0 (counterpoise behaviour with rotated wire)
- Links to Understanding S11 blog (interpreting NanoVNA results)

### Open questions
- [ ] Soil type at mast location — clay, loam, peat? (affects earth rod)
- [ ] Depth to bedrock at mast location (affects earth rod length)
- [ ] Optimal counterpoise wire gauge (use antenna wire or separate?)
- [ ] Whether to use a common-mode choke at feedpoint in addition to the
      deliberate counterpoise (belt and braces, or unnecessary with good
      counterpoise?)
