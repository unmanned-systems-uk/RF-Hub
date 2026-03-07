# Lesson 4 — Antenna Types Tour

**Unit 1: How Antennas Work**
**Prerequisite:** Lessons 1, 2, and 3
**Reading time:** approximately 20–25 minutes

---

## What This Lesson Covers

You have spent three lessons building a single analytical tool: the idea that an antenna's current distribution determines its radiation pattern, and that the pattern is a 3D map of energy coupling efficiency.

In this lesson you will use that tool. You will meet six antenna families — the most important categories you will encounter in real RF work — and for each one you will ask the same two questions:

1. What does the current distribution look like on this antenna?
2. What pattern shape does that current distribution produce?

The six families are arranged from most omnidirectional to most directional. By the end of the lesson you will have a mental map of the antenna landscape — not a complete design reference, but a working understanding of what each type is doing physically and why you would choose one over another.

**What this lesson does not cover:** impedance values, element lengths, design equations, or absolute gain numbers. Those belong to later units. This lesson is a conceptual tour, not a design guide.

---

## Section 1 — The Analytical Lens

In Lesson 2 you learned that a half-wave dipole carries maximum current at its centre and zero current at its tips. In Lesson 3 you learned that this current distribution is the direct cause of the dipole's radiation pattern: maximum energy couples broadside, and exact nulls appear along the wire axis where the current is zero.

That relationship — current distribution drives pattern shape — is the lens you will use throughout this lesson.

Every antenna family you meet will have a different current distribution. Some are open conductors like the dipole, some are closed loops, some use multiple elements working together, some are flat surfaces. Each produces a different current geometry, and each current geometry produces a different pattern shape.

The progression through the lesson follows directivity. You will start with antennas that radiate energy equally in all horizontal directions. You will end with an antenna that concentrates almost all of its energy into a single narrow beam. The physics that drives that progression is the same throughout: redistribute the current, and you reshape the pattern.

One more thing before you begin. You will encounter the word **polarisation** several times in this lesson. Polarisation is a property that sits alongside the radiation pattern — it describes the orientation of the E field in the wave the antenna produces. You will see why it matters and where it comes from. The full explanation is in Lesson 5. For now, pay attention to where the word appears and what it is connected to. Lesson 5 will give you the complete picture.

---

## Section 2 — The Vertical Antenna and Monopole

### Half a dipole, with a mirror

The half-wave dipole from Lesson 2 is a complete, balanced antenna: two equal arms extending in opposite directions from the feedpoint, current at maximum in the middle and zero at each tip.

A **monopole** is half of that dipole, mounted vertically above a conductive surface called a ground plane. The ground plane does not just sit there passively — it acts as an electrical mirror. The image of the single element reflected in the ground plane completes the missing half of the dipole. From the perspective of the electromagnetic fields above the ground plane, a quarter-wave monopole above an infinite ground plane behaves identically to a half-wave dipole in free space.

The most common version is the **quarter-wave monopole**: one element, one quarter wavelength long, mounted vertically. You will find this geometry everywhere — mobile radio antenna masts, vehicle-mounted antennas, the rubber ducks on handheld radios.

### Current distribution and pattern

The current distribution on a quarter-wave monopole follows the same principle as the dipole: maximum at the base (the feedpoint), zero at the tip. The ground plane carries the return current. The pattern above the ground plane is the upper half of the dipole's toroid.

If you imagine taking the dipole's donut-shaped radiation pattern and slicing it exactly at the equator, then discarding the lower half — what remains is the monopole's pattern. A hemisphere of energy, strongest at the horizon, weaker at higher elevation angles, and zero directly above the tip.

<!-- VISUAL: Side-by-side diagram. Left: full half-wave dipole in free space with its complete toroid pattern, current distribution overlaid (sinusoidal curve, peak at centre, zero at tips). Right: quarter-wave monopole above a ground plane with its half-toroid pattern, current distribution overlaid (peak at base, zero at tip). Ground plane shown as a flat reflective surface with image element sketched below it in dashed lines. Label the image element "electrical mirror image." Both antennas shown at the same scale. -->

### Why low radiation angle matters

On the monopole, a significant portion of the energy radiates at low elevation angles — close to the horizon. This is useful for ground-to-ground communication: radio signals travelling horizontally stay near the earth's surface where the people and vehicles you want to reach actually are. Energy wasted pointing at the sky or into the ground is energy that cannot be used.

This is directivity from Lesson 3 at work. The ground plane has not created new energy. It has redirected the energy that would have gone downward (into the ground) into the hemisphere above. The result is that the monopole delivers somewhat more energy toward the horizon than a dipole in the same position, because it has fewer directions to spread its energy across.

<!-- VISUAL: Elevation plot (E-plane polar plot) comparing the dipole (full figure-of-eight, symmetric above and below) vs the quarter-wave monopole (only the upper lobe, truncated at the horizon line). Annotate: "energy from the lower hemisphere is redirected upward and toward the horizon." Show the horizon as a dashed horizontal line. -->


### A first look at polarisation

Notice that the monopole element is vertical. The current in the element flows up and down — vertically. The E field in the wave it produces oscillates in the same plane as the current: vertically.

This is **polarisation**. The orientation of the conductor determines the orientation of the E field in the radiated wave.

A vertical antenna produces a vertically polarised wave. A horizontal antenna produces a horizontally polarised wave. The full explanation of what this means — and why it matters when two antennas try to couple energy — is in Lesson 5. For now, notice the connection: the wire's orientation and the wave's E field orientation are the same thing.

---

## Section 3 — The Collinear Array

### Stacking elements on a single axis

A **collinear array** takes the quarter-wave monopole and extends it: multiple half-wave radiating elements are stacked end-to-end along the same vertical axis, with short phasing sections between them to keep all the elements in phase.

Each element radiates exactly as a single dipole element would. But because all the elements are in phase and stacked vertically, their radiation patterns add together in the horizontal plane. The overall pattern is the result of multiple sources combining.

To picture what happens, think about the dipole's donut from Lesson 3. Now imagine pressing that donut from above and below simultaneously — flattening it. The total volume of the donut stays the same (the energy budget is unchanged), but the shape changes. It spreads wider at the equator and thinner toward the poles.

That is what a collinear does. It squashes the toroid toward the horizon.

<!-- VISUAL: E-plane (elevation) polar plot comparison — three overlaid patterns on the same axes. (1) Single vertical dipole: standard figure-of-eight, relatively wide lobe. (2) 2-element collinear: slightly flatter and wider lobe. (3) 4-element collinear: noticeably flatter, more energy concentrated near the horizon. All three H-plane patterns are circles — show this in a small inset to the side: three concentric circles labelled "H-plane: all three are circles." Annotate the E-plane plot: "same total energy — different shape." -->

### Azimuthal symmetry is preserved

The H-plane pattern of a collinear — the top-down view — remains a perfect circle. The stacking happens along the vertical axis. Nothing about the geometry favours any horizontal direction over any other. The collinear is still omnidirectional in azimuth.

This is exactly the use case for base station antennas. A repeater on a hilltop, a cellular tower, a marine VHF station — all of these need to serve stations in every horizontal direction equally. The collinear delivers more energy to all of those directions simultaneously, without pointing at any particular one.

This is the same principle you met in Lesson 3: directivity is about reshaping the pattern, not creating energy. The collinear steals energy from the elevation angles (sky and ground) and redirects it to the horizon, where the users are.

**Polarisation note:** A collinear built from vertical elements produces vertically polarised radiation. Because the stacking happens along the vertical axis and every element is vertical, the overall polarisation is unchanged from the single vertical element. When we reach Lesson 5, this will matter: a receiving antenna with a different polarisation orientation would not couple efficiently with this signal.

---

## Section 4 — The Loop Antenna

### A closed conductor

Everything you have seen so far has been an open conductor — a wire with two ends. The loop is different. It is a closed conductor: a continuous path that returns to its starting point.

This changes the current distribution fundamentally. On a small loop (where the total circumference is much smaller than one wavelength), the current flows continuously around the loop in the same direction at any instant. There are no ends, no tips, and no obvious point of maximum current in the way the dipole has a centre peak.

Instead, think of the loop as a magnetic moment: a circulating current that behaves like a tiny bar magnet, with a magnetic axis perpendicular to the plane of the loop.

<!-- VISUAL: Small loop diagram. Top view showing loop with current arrows circulating around it (all pointing the same direction at one instant). Side view showing the same loop with a double-headed arrow labelling the magnetic axis — perpendicular to the loop face. Label: "current circulates around the loop" and "magnetic axis perpendicular to loop plane." -->

### The null is broadside — the opposite of a dipole

The small loop's radiation pattern has a figure-of-eight shape, just like the dipole's E-plane pattern. But the null orientation is exactly reversed: the nulls are **broadside to the loop** (perpendicular to the loop face), and maximum radiation is **edge-on** (in the plane of the loop).

Compare this to the dipole: the dipole's nulls are at the wire tips (along the wire axis), and maximum radiation is broadside. The loop's nulls are where the dipole is strongest, and the loop is strongest where the dipole has its nulls.

<!-- VISUAL: Two-panel comparison. Left: dipole with its figure-of-eight E-plane pattern — maximum broadside, nulls at tips. Right: small loop with its figure-of-eight pattern — maximum edge-on, nulls broadside to the loop face. Colour the null directions red and the maximum directions green on both panels. Label clearly: "dipole null = loop maximum" and "dipole maximum = loop null." -->

### Direction finding — the sharp null

The sharpness of the loop's broadside null is what makes it valuable for **direction finding (DF)**.

When a DF operator wants to locate the direction of a signal source, they mount a small loop on a rotatable mast and turn it until the signal drops to minimum — until the null points at the source. The loop face is then perpendicular to the incoming wave. The null is sharp and easy to detect, which gives a precise bearing.

This technique has been used since the earliest days of radio. Ship and aircraft navigation once depended entirely on loop DF. It remains a fundamental tool in amateur radio fox hunting (transmitter hunting events), search and rescue, and spectrum enforcement.

<!-- VISUAL: DF diagram. A signal source on the left. A small loop on a rotatable mount in the centre. Two positions shown: (1) loop face aimed at the source — maximum coupling, signal bar graph shown high; (2) loop rotated 90°, face now perpendicular to the incoming wave — null pointing at source, signal bar graph near zero. Annotate: "rotate to find the null — that direction points at the source." -->


---

## Section 5 — The Yagi-Uda Antenna

### A driven element with company

Everything so far has been a single radiating element or a stack of identical elements. The Yagi-Uda antenna — almost always shortened to just Yagi — is different. It uses one driven element (the one connected to the transmitter or receiver) and a set of additional elements that are not connected to anything. These are called **parasitic elements**, and they are the key to understanding how the Yagi works.

A typical Yagi has three parts arranged along a boom:

- **One reflector** — positioned behind the driven element, slightly longer than the driven element
- **The driven element** — the half-wave dipole at the feedpoint
- **One or more directors** — positioned in front of the driven element, each slightly shorter than the driven element

<!-- VISUAL: Yagi diagram with labelled parts. Horizontal boom. Elements shown as horizontal rods crossing the boom. From back to front: reflector (longest, labelled), driven element (feedpoint shown, medium length, labelled), three directors (progressively shorter toward the front, labelled "director 1, 2, 3"). An arrow labelled "forward direction" points from the boom toward the directors. Show approximate relative element lengths as proportional rod lengths — no specific numbers. -->

### How the parasitic elements work

The reflector and directors are not powered directly. They are driven by the near-field radiated by the driven element — the oscillating electromagnetic field that exists immediately around the antenna before it fully detaches into a propagating wave. The near-field induces a current in each parasitic element, and each parasitic element then radiates its own field.

The key is phase. Because each parasitic element has a different length from the driven element, the current induced in it has a different phase relationship. The reflector, being slightly longer, induces a current that re-radiates in a way that adds to the forward direction and partially cancels the backward direction. The directors, being shorter, are phased to further reinforce the forward lobe and pull energy in that direction.

The result is that energy which would have been distributed around the full toroid of a single dipole is now being steered: more energy forward, less energy backward.

This is directivity — exactly the concept from Lesson 3. The total energy budget is unchanged. The pattern shape has been redistributed. The forward direction receives more energy than it would from a dipole in free space, at the cost of the other directions receiving less.

<!-- VISUAL: Two-panel comparison. Left: single half-wave dipole with its toroid pattern (top view / H-plane), energy radiating equally in all directions. Right: 3-element Yagi (same top view / H-plane), forward lobe clearly visible, back lobe suppressed. Annotate: "total energy unchanged — redistributed." Show boom direction as a dotted line on the right panel. Mark the F/B ratio with a dashed arc — label "front-to-back ratio." -->

### Front-to-back ratio in a real antenna

In Lesson 3 you saw front-to-back ratio introduced via a generic asymmetric polar plot, with no specific antenna attached to it. The Yagi is where that concept earns its name in practice.

The front-to-back ratio of a Yagi tells you how much stronger the forward lobe is compared to the rearward lobe, in decibels. A Yagi with a 20 dB F/B ratio is coupling twenty times less energy from a rearward signal source than from a forward one (20 dB is a factor of 100 in power, but only a factor of 10 in terms of the voltage induced). A 25 dB F/B ratio means that a station behind you produces a signal a hundred times weaker than an equally powerful station in front.

This is not an academic property. When you are trying to work a distant station in a specific direction while a strong local station is sitting behind you, the F/B ratio of your antenna is the only thing standing between you and interference.

More elements generally means more forward gain and a better F/B ratio — but also a narrower beamwidth and a longer boom. Every additional director sharpens and deepens the forward lobe, at the expense of versatility. A 15-element long-boom Yagi is an excellent antenna for pointing at a fixed target, and a mediocre choice for anything else.

<!-- VISUAL: Yagi E-plane and H-plane polar plots side by side. H-plane: clear forward lobe, suppressed back lobe, side lobes if present. E-plane: main lobe forward, smaller back lobe. Both annotated: main lobe, back lobe, F/B ratio marked on H-plane with a dashed line from peak forward to peak rearward. Include a small inset showing the Yagi orientation in 3D — driven element horizontal, boom pointing forward. -->

### Polarisation seed — element orientation, not boom direction

Look at the Yagi in the diagram above. The elements — the rods crossing the boom — are horizontal. The driven element is horizontal. The E field in the wave this Yagi produces oscillates horizontally. This Yagi produces **horizontally polarised** radiation.

Now imagine taking the entire Yagi and rotating it 90° around the boom axis. The boom still points in the same direction. The elements are now vertical. The driven element is vertical. The E field in the radiated wave now oscillates vertically. The Yagi now produces **vertically polarised** radiation.

The radiation pattern — its gain, its beamwidth, its F/B ratio — is identical in both orientations. The polarisation is completely different.

This is an important observation: polarisation is set by the orientation of the driven element, not by the direction the antenna points. Two Yagis on the same tower pointing at the same distant station will not couple efficiently to each other if one is mounted with horizontal elements and the other with vertical elements. Lesson 5 will explain exactly why — and when this is deliberately exploited.

---

## Section 6 — The Patch Antenna

### Current on a flat surface

Everything so far has been made from wire. A **patch antenna** (also called a microstrip antenna) is different in form, though the underlying physics is the same.

A patch antenna consists of a flat rectangular (or circular) conductor — the patch — separated from a conductive ground plane below it by a thin layer of insulating material called the dielectric. The whole assembly is typically a few millimetres thick. The patch is fed by a transmission line connected to one edge, or by a probe that passes through the dielectric from the ground plane below.

The current distribution on the patch surface is more complex than on a wire, but the key feature is this: the dominant current flows across the patch from one edge to the opposite edge. At the two edges where the current arrives and departs — called the **radiating edges** — the E field fringes outward at the boundary between the patch and the surrounding space. This fringing field is what radiates.

<!-- VISUAL: Patch antenna cross-section and top view. Cross-section (side view): ground plane at bottom, dielectric layer above it (labelled with substrate), patch conductor on top. Curved fringing E field lines shown at both left and right edges of the patch — arcing outward from the gap between patch edge and ground plane. Label: "fringing E field at radiating edges." Top view: rectangular patch with current flow arrows crossing from one edge to the other. Radiating edges labelled on left and right. Non-radiating edges labelled on top and bottom. Feed probe shown as a dot through the substrate. -->

### The pattern is broadside

A dipole or monopole radiates in the plane perpendicular to the wire. A patch antenna radiates in the direction perpendicular to its flat surface — **broadside** to the patch.

If the patch is lying flat, the main lobe points straight up. If the patch is mounted on the back of a phone, the main lobe points away from the back of the phone. This broadside radiation is a natural consequence of the fringing field geometry: the field fringes outward from both radiating edges and the two contributions combine to produce a wave propagating away from the patch surface.

The beamwidth is fairly wide in both planes — a patch is not a high-gain directional antenna in the same way a Yagi is. But it is compact, flat, and easily integrated into a printed circuit board or the surface of a vehicle. These are significant practical advantages.

<!-- VISUAL: 3D pattern diagram showing a flat patch antenna lying horizontal, with a broad main lobe pointing vertically upward (broadside). The lobe is hemisphere-shaped, noticeably wider than a Yagi's lobe, but clearly directional (not an omnidirectional sphere). Annotate: "main lobe broadside to patch surface." Show the patch as a flat rectangle below the lobe. -->

### Real-world use — and a polarisation hook

Patch antennas are everywhere, mostly invisible. The WiFi antenna inside your laptop is a patch (or derived from one). The Bluetooth antenna in your phone. The GPS receiver in your car's navigation unit. Embedded radar in modern vehicles uses patch arrays. Satellite phone terminals use patch arrays.

GPS is worth pausing on. GPS satellites transmit from orbit at around 1575 MHz. A standard patch antenna at that frequency would be a few centimetres on a side — small enough to embed in a dashboard or a handheld device. GPS patches work regardless of how you tilt the receiver: face up, held sideways, tilted at an angle. A normal linearly polarised antenna would lose signal dramatically if you tilted it by 90°. The GPS patch does not.

The reason is that GPS satellite signals are **circularly polarised**. Instead of oscillating in a fixed plane, the E field vector rotates as the wave travels — it traces a helix through space. A receiving antenna designed to match this circular polarisation works across all orientations of the receiver, which is exactly what you need for a device that gets tilted in every direction.

This is a deliberate design choice, not an accident. And the patch antenna geometry lends itself to producing circular polarisation with a small modification — details in Lesson 5.

For now, the point is this: polarisation is not just an orientation property of a wire. It is a property that can be engineered deliberately to suit the application.


---

## Section 7 — The Parabolic Dish

### Not an antenna — a reflector

Everything in this lesson so far has been described as an antenna: a structure that converts between electrical current and electromagnetic waves. The parabolic dish is not an antenna in that strict sense. It is a **reflector**. It works in combination with a small antenna — called the **feed** — positioned at a specific point in front of the dish.

The feed antenna is often a simple dipole, a short horn (a flared waveguide opening), or a small patch. The feed radiates in the usual way — in all forward directions, like a rough hemisphere. The dish then redirects all of that radiation.

### The geometry of the parabola

A parabola has a special geometric property: any ray that originates from the **focal point** of the parabola and travels toward the dish will reflect off the dish surface in a direction exactly parallel to the parabola's axis.

If the feed antenna is placed exactly at the focal point, every ray it emits toward the dish reflects outward in the same direction. The result is a flat wavefront — a plane wave — emerging from the front of the dish, all the radiated energy travelling in the same direction in parallel.

<!-- VISUAL: Parabolic dish cross-section with ray diagram. The dish is a bowl-shaped curve. A feed antenna is shown at the focal point (marked with an F). Multiple rays are drawn from F to different points on the dish surface. Each ray reflects off the surface and continues as a horizontal line parallel to the dish axis — all parallel to each other. Annotate: "focal point F," "incoming ray from feed," "reflected ray parallel to axis." The outgoing parallel rays represent the plane wave. Show the axis as a dashed centreline. -->

A flat wavefront is the signature of a very directional, very well-organised beam. Every part of the emerging wavefront is in phase. The result is constructive interference in the forward direction and very rapid cancellation in all other directions.

The **beamwidth** of a dish antenna is determined by the ratio of the dish diameter to the wavelength. A larger dish — relative to the wavelength — produces a narrower beam. A dish with a diameter of 100 wavelengths produces a very narrow pencil beam. A dish with a diameter of 10 wavelengths produces a wider beam. This relationship is fundamental to all aperture antennas — it appears again in Unit 4 when we look at phased arrays, which are essentially electronic dishes.

<!-- VISUAL: Two dishes side by side on the same scale. Left: smaller dish (diameter ~10λ), wider beam shown emerging from front. Right: larger dish (diameter ~30λ), narrow pencil beam emerging. Same total energy shown for both — the wider beam has lower peak intensity. Label: "larger aperture = narrower beam." -->

### Real-world scale

The same parabolic geometry operates across an enormous range of scales:

A **satellite TV dish** (60–90 cm diameter) working at 10–12 GHz (wavelength ~25–30 mm) has a diameter of roughly 25–35 wavelengths — enough to produce a beam narrow enough to distinguish satellites that are only 2–3° apart in the geostationary arc.

A **microwave backhaul link** — the kind that connects mobile cell towers to the core network — uses dishes typically 30–60 cm in diameter at 18–80 GHz, with beams narrow enough for point-to-point links across distances of several kilometres.

A **radio telescope** like the one at Jodrell Bank (76 metres diameter, operating at wavelengths down to a few centimetres) has a diameter of thousands of wavelengths. Its beamwidth is measured in arcseconds. It can distinguish sources separated by less than one thousandth of a degree.

The same geometry, the same physics, across six orders of magnitude in scale.

### The feed sets the polarisation

Earlier in this lesson you saw that the polarisation of a Yagi is set by the orientation of the driven element. For a dish antenna, the same principle applies — but the driven element is the feed antenna at the focal point.

The dish itself is polarisation-neutral. It is a reflector. It reflects whatever the feed sends at it, preserving the polarisation in the process. A horizontally polarised feed produces a horizontally polarised beam from the dish. A vertically polarised feed produces a vertically polarised beam. A circularly polarised feed produces a circularly polarised beam.

This matters in practice. Satellite operators choose the polarisation of their downlink signals deliberately. Some satellites use dual-polarisation systems — transmitting two separate data streams, one on vertical and one on horizontal polarisation — on the same frequency, relying on the fact that well-separated polarisations do not couple efficiently to each other. The dish is large enough to capture sufficient energy; the feed antenna design determines which polarisation the receiver can use.

As with everything else in this lesson: the details of polarisation are in Lesson 5. The point here is that polarisation is a property of the feed, not the reflector.

---

## Section 8 — The Directivity Spectrum

### A map of the landscape

You have now seen six antenna families. Before you move on, it is worth stepping back and looking at where they sit relative to each other.

The organising principle of this lesson has been directivity — how concentrated the radiation pattern is. Arranged along that axis:

**Vertical monopole** sits at one end. Omnidirectional in azimuth, low elevation angle, simple to build and install. No preferred horizontal direction. Used when you need to serve all compass directions equally.

**Collinear array** is the natural extension of the vertical: still omnidirectional in azimuth, but with more energy concentrated toward the horizon. Used for the same base-station role when more range in every direction is needed.

**Loop** sits apart from the others in one respect: it is not defined by directivity in the conventional sense, but by a fundamentally different null orientation. The loop's value is its sharp broadside null, which makes it indispensable for direction finding. It is not more or less directional than the monopole — it is different in kind.

**Yagi-Uda** is the step into genuine directional territory. Energy is concentrated into a forward lobe. The F/B ratio makes rearward rejection measurable and useful. The more elements, the more concentrated the forward lobe. Used when you know where the target is.

**Patch antenna** is directional in the sense that it radiates broadside and not in other directions, but it is not a high-gain pencil-beam antenna. Its value is compactness and integration — it fits where a Yagi cannot. Used in embedded systems, mobile devices, phased arrays.

**Dish** is the extreme end. Extremely high gain, extremely narrow beam, extremely high F/B ratio. Requires precise pointing. Used when you need to communicate over very long distances or distinguish targets separated by very small angles.

<!-- VISUAL: Horizontal "directivity spectrum" diagram. Left to right: monopole (circle icon, label "omnidirectional"), collinear (flattened circle icon, label "omnidirectional, low-angle"), loop (figure-of-eight with sideways nulls, label "DF null"), Yagi (forward lobe icon, label "moderate directional"), patch (broadside lobe icon, label "broadside, compact"), dish (pencil lobe icon, label "high gain, narrow beam"). Arrange as a left-to-right progression with increasing directivity. A simple axis labelled "increasing directivity" runs underneath. -->

### The same question, six times over

In every section of this lesson the answer followed from the same question: what does the current distribution look like? The shape of the pattern was never arbitrary. It was the direct consequence of where the current flows.

The monopole's current peaks at the base — the pattern is strongest at the horizon. The loop's current circulates continuously — the pattern has a broadside null. The Yagi's parasitic elements redirect current-induced re-radiation into a forward lobe. The patch's fringing current at the radiating edges produces a broadside beam. The dish's feed current at the focal point produces a parallel wavefront through reflection geometry.

Different current geometries. Different patterns. Same underlying physics.

### Coming next — polarisation

You have encountered the word **polarisation** five times in this lesson: at the vertical monopole, at the collinear, at the Yagi, at the patch/GPS, and at the dish feed. Each time it appeared in a different context and pointed to a different consequence.

Lesson 5 will build the complete picture. You will see what polarisation actually is, why the E field orientation matters for energy coupling, what happens when two antennas have different polarisations, and how circular polarisation works. Every seed planted in this lesson will be harvested there.


---

## Interactive Exercises

### Using radiation-3d-v5.html

This exercise is available in the interactive tool linked below. The tool currently shows the half-wave dipole pattern in three dimensions.

**→ Open radiation-3d-v5.html**

**Exercise: From dipole to monopole — reason it through**

The tool shows the dipole's complete toroid pattern. A quarter-wave monopole above a ground plane does not have a separate pattern to look at in this tool — but you have enough information to work out what it looks like.

Work through these questions before reading the answer:

1. Load the dipole 3D pattern and rotate it so you are looking at it from the side. Identify the equator of the toroid — the plane of maximum radiation.
2. Now imagine a conductive ground plane sits exactly at that equator. The ground plane is a perfect mirror electrically. What does the mirror image of the upper half look like?
3. What happens to the lower half of the toroid? The ground plane prevents real radiation from going into the ground — so where does that energy go?
4. If you could see the monopole's pattern in this tool, how would it differ in shape from the dipole's? Would it be more or less directional than the dipole? Why?

**After you have written your answers:**
The monopole's pattern is the upper half of the toroid, compressed slightly toward the horizon because the ground plane redirects lower-hemisphere energy upward. The monopole is slightly more directional than the dipole in the sense that it concentrates energy into a hemisphere rather than a full sphere — but it remains omnidirectional in azimuth. The H-plane pattern is still a circle.

---

*Note: The interactive `radiation-3d-v5.html` currently shows the dipole pattern only. Future updates will add selectable antenna types, allowing direct pattern comparison between the families in this lesson. When that update is available, the exercises above will be extended with side-by-side comparisons.*


---

## Self-Check

### Part A — Pattern Matching

Six radiation patterns are described below. Match each description to the correct antenna family from this lesson. Write one sentence of justification for each.

The antenna families are: **vertical monopole, collinear array, small loop, Yagi-Uda, patch, dish.**

1. H-plane: a circle. E-plane: a compressed figure-of-eight, very flat toward the horizon, almost no radiation above 30° elevation.
2. H-plane: a circle. E-plane: a figure-of-eight where the maximum is at the horizon and the null is directly above and below.
3. H-plane: a clear forward lobe, suppressed back lobe. E-plane: forward lobe with smaller back lobe.
4. H-plane: a figure-of-eight with the maximum pointing toward you (edge-on to the loop) and nulls at 90° to either side.
5. H-plane: a broad lobe pointing away from a flat surface. E-plane: similar broad lobe.
6. H-plane: a very narrow pencil beam. E-plane: equally narrow pencil beam.

---

### Part B — Directivity Ranking

Rank the six antenna families from most omnidirectional to most directional. For each step in the ranking, write one sentence explaining what physical change drives the increase in directivity.

Your answer should follow this structure:
*"[Antenna A] is more omnidirectional than [Antenna B] because..."*

Do not use any gain figures or decibel numbers. Reason from current distribution and pattern shape only.

---

### Part C — Concept Questions

Answer each question in one or two complete sentences. Do not look back at the lesson.

1. A collinear array has more gain toward the horizon than a single vertical monopole, but its H-plane pattern is still a perfect circle. How is this possible? What does it tell you about directivity?

2. A small loop and a half-wave dipole are placed side by side, both oriented vertically. A signal arrives from directly in front of them — broadside to the dipole, edge-on to the loop. Which antenna couples more energy from this signal? Now the signal source moves 90° to the side — now broadside to the loop, alongside the dipole's wire. Which couples more energy now?

3. A Yagi's directors are slightly shorter than the driven element. Describe qualitatively what effect this length difference produces on the induced current in each director, and how this contributes to the forward gain of the antenna. (No calculations — reason from the phase principle.)

4. The parabolic dish is described as "polarisation-neutral." What does this mean? Give a concrete example of how you would change the polarisation of a dish antenna's output without modifying the dish itself.

---

### Part D — Antenna Selection Scenario

For each of the following communication requirements, choose one antenna family from this lesson and write a short paragraph (3–5 sentences) justifying your choice. Reference the radiation pattern and the energy coupling concept in your justification.

1. **Mobile repeater base station.** The repeater is on a hilltop and needs to serve vehicles travelling in all directions on the roads below. It does not know where any particular vehicle is at any given time.

2. **Point-to-point microwave link.** Two fixed buildings are 15 km apart. The link needs to carry high-capacity data reliably. Both ends are fixed and known in advance.

3. **Direction-finding receiver.** A search-and-rescue team is trying to locate the source of an emergency radio beacon. They need to determine which direction the signal is coming from.

4. **GPS receiver in a handheld device.** The device will be used outdoors in various orientations — held flat, tilted, rotated. It must maintain GPS lock regardless of how the user holds it. The GPS satellite signals are circularly polarised.


---

## Lesson Summary

- **The current distribution determines the pattern.** This lesson applied that principle six times. Different current geometries — open wire, closed loop, multiple phased elements, fringing surface current, fed focal point — produce different pattern shapes. The relationship is always the same.

- **The vertical monopole is half a dipole over a ground plane.** The ground plane acts as an electrical mirror, supplying the missing half of the current distribution. The pattern is the upper half of the dipole's toroid, with some additional concentration toward the horizon. Omnidirectional in azimuth.

- **A collinear array squashes the donut.** Stacking in-phase vertical elements compresses energy toward the horizon without breaking azimuthal symmetry. The H-plane pattern remains a circle. The gain toward the horizon increases because the total energy is redistributed — not because new energy is created.

- **The small loop's null is broadside — the opposite of the dipole.** This makes the loop the opposite of the dipole in null orientation, and invaluable for direction finding. The sharp broadside null provides a precise bearing to a signal source when the loop is rotated.

- **The Yagi uses parasitic elements to steer energy.** The reflector and directors are not connected to anything — they are driven by the near-field and re-radiate with a phase relationship that adds energy forward and subtracts it backward. Front-to-back ratio, introduced in Lesson 3, is applied here for the first time to a real antenna.

- **The patch radiates broadside to its surface.** Current flows across the flat conductor and fringes at the radiating edges. The main lobe is perpendicular to the patch. Compact, flat, and embeddable. GPS patches can be made circularly polarised to work regardless of receiver orientation.

- **The dish is a reflector, not an antenna.** The parabolic geometry converts a rough hemispheric radiation from the feed into a plane wave — a narrow, parallel beam. Gain increases with dish size relative to wavelength. The feed antenna at the focal point sets the polarisation; the dish is polarisation-neutral.

- **Polarisation is the property of the wave that the antenna creates.** It is set by the orientation of the driven element (or the feed). You have seen it mentioned five times in this lesson in five different contexts. Lesson 5 explains what it is, why it matters for energy coupling, and what circular polarisation achieves.

---

## What's Next

Lesson 5 is about **polarisation** — the last major property of antenna behaviour in Unit 1 that you have not yet fully examined.

You have seen the pattern: a 3D map of energy coupling efficiency. You have seen six antenna families and the current distributions that produce their patterns. Throughout this lesson, polarisation appeared repeatedly as a companion property — something that sits alongside the pattern and matters just as much for whether two antennas actually couple energy efficiently.

In Lesson 5 you will get the complete picture: what the E field orientation of a wave actually means, what happens when transmit and receive antennas have different polarisations, how circular polarisation works and why GPS uses it, and how the Yagi example from this lesson — where rotating the elements by 90° changes the polarisation without changing the pattern — is a direct consequence of fundamental E field geometry.

Unit 1 closes after Lesson 5. You will then have a complete conceptual foundation for everything in Units 2, 3, and 4.

---

*Lesson 4 of 20 — Unit 1: How Antennas Work*
