# Point 3 — Antenna Orientation: Nulls, Valleys, and the 90° Experiment

## DRAFT — Blog 1.0 Section

---

### Where the antenna listens — and where it doesn't

A wire antenna is not omnidirectional. It does not hear equally well in all
directions. The radiation pattern — the three-dimensional map of where the
antenna is most and least sensitive — depends on the wire length (measured
in wavelengths), the height above ground, the slope angle, and the
surrounding terrain.

For a half-wave wire (the EFHW at its fundamental frequency), the pattern
is the familiar figure-of-eight: maximum sensitivity broadside to the wire
(perpendicular to it), and deep nulls off the ends. As the operating
frequency increases and the wire becomes multiple wavelengths long, the
pattern breaks up into multiple lobes with narrower beamwidths and shallower
nulls — but the broad principle holds: **the ends of the wire are the quiet
directions**.

On receive, this matters. The null is not just a direction of reduced signal
pickup — it is a direction of reduced **noise** pickup. By choosing the
antenna orientation carefully, you can point a null towards a known noise
source and reduce its impact on your receive performance.

### Configuration A: the default setup (Blog 1.0)

The wire runs roughly **north–south**. The feedpoint is at the mast to the
north (towards the Moorfoot Hills), and the non-feed end terminates at the
house chimney to the south.

```
         N
         ↑
  [Moorfoot Hills]
         |
    [MAST / feedpoint]
         |
    ~~~~ wire ~~~~
         |
    [HOUSE / non-feed end]
         |
  [Southern Uplands]
         ↓
         S

  Broadside (max sensitivity): ← EAST — WEST →
  Nulls: ↑ NORTH ↓ SOUTH
```

In this configuration:

**The null points at the house.** Whatever residual noise escapes the granite
walls and radiates into free space arrives at the antenna from the south —
the direction of minimum sensitivity. The antenna is partially turning its
back on the house. This is the best orientation for rejecting household
noise.

**The null also points north, into the Moorfoot Hills.** Any signals
arriving from due north face both the antenna null and the terrain
obstruction of the hills. This is a direction of very low sensitivity in
this configuration.

**The broadside points east–west, along the Tweed valley.** The valley runs
roughly east–west at this location, which means the antenna's maximum
sensitivity aligns with the most open direction for signal propagation. Low-
angle signals arriving along the valley axis — from Edinburgh and the east
coast, or from Glasgow and the west — face the least terrain obstruction
and arrive at the antenna's point of maximum gain.

This is, to be frank, a fortunate alignment. The geography and the noise
rejection requirements happen to point in the same direction. If the house
were to the east or west, I would have to choose between rejecting house
noise and maximising valley propagation.

### A note on what "null" really means

The null off the end of a half-wave wire is deep — typically 20 to 30 dB
below the broadside maximum at the fundamental frequency. But this only
applies at the frequency where the wire is exactly one half-wavelength long.

On the Moonraker LWHF-160 (41.7 metres of wire), the half-wavelength
resonance falls around 3.4 MHz. At 7 MHz, the wire is approximately one
full wavelength; at 14 MHz, two wavelengths; at 28 MHz, four wavelengths.
As the wire becomes longer in electrical terms, the radiation pattern
breaks into multiple lobes. The endfire nulls become shallower, additional
nulls appear at other angles, and the pattern becomes frequency-dependent.

On the BH7JYR EFHW (approximately 20 metres of wire), the half-wave
resonance is at 7 MHz. The clean figure-of-eight pattern with deep endfire
nulls applies on 40m. On 20m (14 MHz), the wire is one full wavelength and
the pattern has four lobes with nulls at roughly 45° to the wire axis. On
15m and 10m, the pattern is progressively more complex.

**The practical takeaway:** the null-towards-the-house strategy works best on
the lowest frequency bands. At higher frequencies, the noise rejection from
antenna orientation alone is less reliable. This is where the physical
distance from the house (Point 1) and the clean counterpoise (Point 4)
become the primary noise defences.

### Configuration B: the 90° rotation (Blog 2.0)

In a future experiment — documented in the second blog post in this series —
the non-feed end of the wire will be repositioned so the wire runs roughly
**east–west** instead of north–south.

```
         N
         ↑
  [Moorfoot Hills]
         |
    [MAST / feedpoint]
         |
  W ← ~~ wire ~~ → E
         .
         .
    [HOUSE]
         |
  [Southern Uplands]
         ↓
         S

  Broadside (max sensitivity): ↑ NORTH ↓ SOUTH
  Nulls: ← EAST — WEST →
```

This changes everything:

**The broadside now points at the house.** Maximum sensitivity aims due south,
directly at the building. Any household noise that escapes the granite walls
arrives at the antenna's point of peak gain. This is the worst-case
orientation for noise from the house.

**The broadside also points north, into the Moorfoot Hills.** Signals from
the north — and reflections off the hillside — are now received at maximum
sensitivity. This creates an opportunity to test the hill-reflection
hypothesis raised in Point 1: if the hills behind the house scatter or
reflect any useful RF energy, this orientation is the one that would reveal
it.

**The nulls point east–west, along the valley.** Signals that previously
arrived at maximum gain (along the valley axis) are now in the antenna's
null directions. Reception along the valley should drop noticeably.

### What the comparison tests

Same antenna. Same feedpoint location. Same SDR. Same time of day (ideally
the same day, swapping between configurations). The only variable is the
wire orientation.

The expected results:

**Noise floor:** Configuration A (null at house) should show a lower noise
floor than Configuration B (broadside at house). The magnitude of the
difference tells us how much house noise is reaching the antenna through
free space — which in turn tells us how effective the granite walls are as
shielding.

**Signal strength from the valley (east–west):** Configuration A (broadside
along valley) should show stronger signals from east and west than
Configuration B (null along valley). The magnitude tells us how much the
valley axis matters for propagation at this location.

**Signal strength from the hills (north–south):** Configuration B (broadside
at hills) should show whether there is any detectable signal enhancement from
reflections or scattering off the Moorfoot Hills. This is the speculative
measurement — it may show nothing, or it may show something interesting on
certain bands.

**Band-dependent pattern changes:** The null depth and direction vary with
frequency. Comparing the two configurations across 40m, 20m, 15m, and 10m
reveals how the radiation pattern evolves as the wire becomes electrically
longer.

### Does polarisation matter?

This question will come up, so it is worth addressing directly.

At HF, most long-distance signals arrive via **skywave propagation** — the
signal bounces off the ionosphere one or more times on its way from
transmitter to receiver. Each ionospheric reflection scrambles the
polarisation. A signal that left the transmitting antenna as horizontally
polarised arrives at the receive end with essentially random polarisation.

For skywave HF reception, **the orientation of the antenna matters for its
radiation pattern, not for polarisation matching**. Whether the wire runs
north–south or east–west changes which directions are in the nulls and which
are in the lobes. It does not meaningfully change the polarisation match to
incoming skywave signals, because there is no consistent polarisation to match
to.

Polarisation does matter for:
- **Ground wave** propagation (short range, line of sight, <50 km at HF) —
  vertical polarisation is generally better for ground wave
- **Direct wave** signals (very short range, VHF/UHF) — polarisation
  alignment between TX and RX antennas is important
- **NVIS** propagation (near-vertical skywave, 40m/80m, regional) — some
  studies suggest a slight preference for horizontal polarisation, but the
  effect is small compared to radiation pattern differences

For the purposes of the A/B orientation experiment, polarisation is a
secondary factor. The primary variable being tested is the radiation pattern:
where the nulls and lobes point relative to the noise sources, the terrain,
and the propagation paths.

We will revisit polarisation more carefully in Blog 2.0, where the
experimental data may reveal whether there is a detectable polarisation effect
at this location — particularly on 40m NVIS paths.

### The valley as an antenna environment

The Tweed valley geometry influences the antenna in ways that go beyond
simple line-of-sight obstruction.

**Terrain shielding is directional.** The hills to the north (Moorfoot) and
south (Southern Uplands) block low-angle signals from those directions. The
valley opens to the east and west, providing a relatively clear path for
signals arriving along the valley axis. This means the antenna's effective
coverage is not a symmetric radiation pattern — it is the radiation pattern
modified by the terrain. The valley acts as a natural angular filter,
attenuating signals from the hill directions and passing signals from the
valley directions.

**NVIS propagation is unaffected by valley terrain.** Near-Vertical Incidence
Skywave travels almost straight up and comes almost straight back down. The
hills do not block high-angle radiation. On 40m and 80m, where NVIS is the
dominant propagation mode for regional contacts (up to ~500 km), the valley
location is not a disadvantage — and a horizontal wire antenna is well-suited
to NVIS in any case.

**Terrain-enhanced multipath is possible.** RF energy that would otherwise
pass the antenna can scatter off the hillsides and arrive from unexpected
directions. At HF wavelengths (10–40 metres), a hill several hundred metres
tall is electrically many wavelengths in height, so the scattering is complex
and frequency-dependent. This could manifest as:
- Enhanced signals from directions that should be in the antenna null
- Fading or signal variation as the ionosphere changes and the multipath
  geometry shifts
- Direction-dependent differences between the two antenna configurations
  that cannot be explained by the simple radiation pattern alone

Whether any of this is detectable above the noise floor is an open question.
It is one of the things the orientation experiment is designed to explore.

### The terrain profile: an opportunity for analysis

With elevation data from Google Earth and a drone survey of the site, it is
possible to generate a terrain profile — a cross-section showing the height
of the hills relative to the antenna location. Overlaying the antenna
radiation pattern (from modelling software or the curriculum's interactive
tools) on the terrain profile gives a visual representation of which
directions are open and which are blocked.

This is a piece of analysis I want to do before the practical build, because
it will generate predictions that the measurements can then confirm or
contradict. If the terrain profile suggests the Moorfoot Hills block
everything below 10° elevation to the north, and the measurement data shows
signals arriving from that direction anyway, that tells us something
interesting about scattering, diffraction, or propagation modes we had not
considered.

The terrain analysis will be published as a separate piece of content on
RF-Hub — either as a curriculum supplement or as part of this blog series.

---

## EDITORIAL NOTES

### What this section covers
- Radiation pattern basics (broadside vs endfire, null depth)
- Configuration A geometry (N–S wire, broadside along valley)
- Configuration B geometry (E–W wire, broadside at hills) — Blog 2.0 teaser
- What the A/B comparison actually tests (noise, signal, reflections, band variation)
- Polarisation: why it's secondary at HF for skywave
- Valley terrain effects: shielding, NVIS, multipath hypothesis
- Terrain profile analysis opportunity

### Tone check
- "To be frank, a fortunate alignment" — honest, not trying to claim it was
  planned
- Speculative content flagged clearly ("open question", "may show nothing")
- Polarisation section pre-empts the inevitable question without over-explaining
- Valley discussion grounded in physical reasoning, not hand-waving

### Curriculum tags
- **Lesson 3 — Radiation Patterns** (the core theory behind this entire section)
- **Lesson 5 — Polarisation** (why it's less important than people think at HF)
- **Lesson 9 — Gain, Directivity, Efficiency** (effective gain modified by terrain)
- Potential new: **Terrain effects on HF propagation**
- Potential new: **NVIS propagation fundamentals**
- Potential new: **Valley vs hilltop antenna performance**

### Photo/media placeholders
- [ ] Annotated map/satellite view showing wire orientation (Config A)
- [ ] Same map showing Config B orientation
- [ ] Panoramic from mast location: north (Moorfoot) and south (house/Uplands)
- [ ] Terrain profile cross-section (Google Earth elevation data)
- [ ] Radiation pattern diagram overlaid on terrain profile
- [ ] SDR waterfall comparisons: Config A vs Config B (Phase 2/Blog 2.0 data)

### RF-Hub interactive visualisation opportunities
1. **Radiation pattern + terrain overlay** — drag a slider to rotate the antenna
   and see how the pattern interacts with the valley walls.
2. **Null depth vs frequency** — show how the endfire null changes as the wire
   becomes electrically longer (half-wave → full-wave → 2λ → 4λ)
3. **NVIS vs low-angle comparison** — show why valley terrain blocks DX but
   not regional NVIS

### Cross-references
- Back-references Point 1 (feedpoint location, non-feed-end mobility)
- Back-references Point 2 (house noise, granite shielding effectiveness)
- Forward-references Point 4 (counterpoise — pattern is only half the story)
- Forward-references Blog 2.0 (the actual rotation experiment and data)
- Forward-references terrain analysis content (separate RF-Hub piece)
- Links to Lessons 3, 5, 9 in the antenna curriculum

### Questions resolved
- Wire runs N–S (mast north, house south) — confirmed
- Broadside along E–W valley axis — confirmed by geometry
- Mast faces north towards Moorfoot Hills — confirmed
- Garden above house by one storey — factors into slope angle not orientation
