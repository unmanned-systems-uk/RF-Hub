# Point 1 — Feedpoint Location: The Obvious Question (v2)

## DRAFT — Blog 1.0 Section (editorial tone-setter)

---

### Why Is the Feedpoint 100 Metres Away?

Let me address the obvious question first, because anyone with experience
in amateur radio is already thinking it.

The antenna feedpoint does not need to be 100 metres from the shack. I could
mount the UNUN on the chimney, run 20 metres of coax down the wall and into
the window, and be receiving HF signals within an afternoon. The coax loss at
HF over that distance would be trivial — well under a dB on 40 metres. It
would work. It would be perfectly adequate. And this blog post would be three
paragraphs long.

I am not doing that.

The feedpoint is going on a Moonraker LMA-L telescopic mast at the far end of
the garden, roughly 40 metres line-of-sight from the house. By the time the
cable route accounts for the 10-metre mast height, fence lines, and building
entry, the actual run is closer to 100 metres. This is a deliberate choice,
and there are two reasons for it — one honest, one engineering.

### The honest reason

This hobby is about learning. I am working towards my Foundation licence. I
have a spectrum analyser, two NanoVNAs, several SDR dongles, and a growing
collection of antennas — but I have never built a remote SDR installation. I
have never dealt with thermal management in a sealed enclosure. I have never
run PoE over a 100-metre outdoor Ethernet cable. I have never had to think
about what happens to a counterpoise when it is 40 metres from the nearest
building.

Mounting an antenna on the chimney teaches me how to mount an antenna on a
chimney. Putting the SDR at the antenna, powered over Ethernet, streaming
I/Q data back to the shack — that teaches me networking, thermal design,
remote system management, antenna theory, and RF noise mitigation all at once.

The interesting problems only appear when you push the distance out. At 20
metres, coax is the obvious answer and there is nothing to solve. At 100
metres, you have to actually think — and thinking is where the learning
happens.

### The engineering reason

There are genuine technical reasons for keeping the feedpoint away from the
house, and they have nothing to do with coax loss. The two big ones —
household RF noise and counterpoise integrity — each get their own section
later in this post (Points 2 and 4). But the short version is this:

An end-fed antenna needs a return path for RF current. If the feedpoint is
on the house, that return path includes the coax shield, the house wiring,
the plumbing, and every piece of metalwork within coupling distance. The
antenna system becomes entangled with the house, and every switch-mode power
supply and LED driver in the building gets a direct path to inject noise into
the receiver.

At 40 metres from the house, the counterpoise is a wire I chose, at a length
I calculated, routed in a direction I decided. It is not the gutter. It is
not the central heating pipes. It is a known, controlled part of the antenna
system.

That matters far more than saving a few dB of cable loss.

### The setup: what actually goes where

The location is a valley in the Scottish Borders, sitting between the
Moorfoot Hills to the north and the Southern Uplands to the south, with the
River Tweed running through the valley floor. The house is old — stone-built
with walls two to four metres thick and a high granite content. More on what
that means for RF in Point 2.

The site geometry has an unusual feature that turns out to be an advantage:
the house ground floor is one storey below the garden level. The garden sits
above the house. This means the mast, positioned at garden level at the far
end, already has a significant height advantage over the house before a single
section is extended.

**The mast** is a Moonraker LMA-L — a 6-section aluminium telescopic mast
that extends to approximately 10 metres (33 feet) and collapses to 2.2 metres
for storage. It tapers from 2 inches at the base to 1 inch at the top, weighs
about 6 kg, and is designed for lightweight VHF/UHF antennas. For a wire
antenna feedpoint (UNUN box, SMA bulkhead, SDR enclosure), the loading is
well within its capability.

**The feedpoint** (UNUN + SDR enclosure) mounts at or near the top of the
mast. The antenna wire runs from the feedpoint towards the house, where
the non-feed end terminates. This means:

- The **feedpoint** is at the mast — remote, elevated, clean counterpoise
- The **non-feed end** (null end) is near the house — and this is adjustable

### Why the non-feed end matters

This is where the setup gets interesting for experimentation.

The non-feed end of an end-fed wire is where the **voltage is at maximum and
the current is at minimum** (on the EFHW, at the fundamental frequency). It
is also the direction of the **radiation pattern null** — the direction of
minimum sensitivity. By pointing the null end at the house, the antenna
naturally attenuates signals (and noise) arriving from the house direction.

But more importantly, the non-feed end is the part that is easy to move.
The feedpoint is fixed at the mast — it has the UNUN, the SDR, the Ethernet
cable, and the counterpoise. Moving the feedpoint means moving all of that.
The non-feed end is just the end of a wire. It can attach to:

- **The chimney base** — low termination, steep slope angle
- **The top of a chimney mast** — high termination, gentler slope angle
- **A different point on the house** — rotated orientation

Each of these changes the antenna geometry: the slope angle, the height
profile, the radiation pattern, and the orientation of the null. With a fixed
feedpoint and a moveable endpoint, this setup becomes a controllable antenna
experiment.

I will be using a drone to measure the actual heights — mast top, chimney
base, chimney top with mast extension — so the slope angles and elevation
differences are documented precisely rather than estimated.

### The terrain question

Living in a valley raises an obvious question: how do the surrounding hills
affect what the antenna can hear?

The Tweed valley at this location runs roughly east–west, with the Moorfoot
Hills rising to the north and the Southern Uplands to the south. The valley
floor is significantly lower than the hilltops on either side. This geometry
has three effects on HF propagation:

**Terrain shielding.** The hills block low-angle signals from the north and
south. For DX reception — which relies on signals arriving at low angles
after long-distance skywave propagation — this means some directions are
partially or completely blocked by terrain. The east–west valley axis is more
open, so signals arriving from those directions face less obstruction.

**NVIS enhancement.** Near-Vertical Incidence Skywave (NVIS) is a propagation
mode where signals travel nearly straight up and bounce back down from the
ionosphere. It works best on 40m and 80m and provides coverage out to about
500 km — ideal for regional contacts within Scotland and northern England. A
horizontal wire antenna is well-suited to NVIS, and a valley location does
not penalise high-angle propagation the way it does low-angle. For NVIS, the
valley is neutral or even beneficial.

**Hill reflections.** This is the speculative one, and it is something I want
to investigate. The hill behind the house could, in principle, act as a
passive reflector — RF energy hitting the hillside scatters and reflects,
with some of it arriving at the antenna from what appears to be a different
direction than the original transmission. At HF wavelengths (10–40 metres),
a hill several hundred metres high is electrically many wavelengths tall, so
the scattering is complex and frequency-dependent.

Whether this effect is measurable in practice — let alone useful — is an open
question. But by capturing the terrain profile (Google Earth elevation data,
drone survey) and correlating it with receive patterns across different bands
and antenna orientations, there is at least the possibility of seeing
terrain-influenced propagation effects in the data.

This is exactly the kind of investigation that a remote, adjustable antenna
setup enables and a chimney-mounted antenna does not.

### What this blog is — and is not

This is not a guide to building the simplest possible HF receive antenna. If
that is what you need, mount a long wire off any high point, connect a 9:1
UNUN, and run coax to your receiver. It will work. There are hundreds of
YouTube videos showing exactly that.

This is a documentation of a deliberate experiment: remote SDR deployment with
end-fed antennas, designed to create the conditions where real engineering
problems arise and have to be solved. Every decision — the distance, the
antenna type, the counterpoise arrangement, the enclosure, the endpoint
height — is chosen to maximise what can be learned and documented.

Some of it will go wrong. That is the point. The curriculum pages on RF-Hub
teach the theory. This blog shows what happens when the theory meets a valley
in the Scottish Borders with 100 metres of Ethernet cable and a Raspberry Pi
in a sealed aluminium box.

---

## EDITORIAL NOTES

### What changed from v1
- Added Moonraker LMA-L mast specs (10m, 6 sections, 6kg)
- Added split-level house geometry (garden above house = free height)
- Added Scottish Borders / Tweed valley location (no village name)
- Added non-feed-end mobility as experimental advantage
- Added terrain discussion: shielding, NVIS, hill reflection hypothesis
- Added drone measurement plan for precise heights
- Strengthened the "this is an experiment" framing

### Tone check
- Still first person, still honest
- Terrain section is more speculative — flagged as such ("the speculative one")
- Avoids overclaiming on hill reflections (open question, not proven)
- The "what this blog is" section is unchanged — still works

### Photo/media placeholders needed
- [ ] Wide shot from house looking towards mast location
- [ ] Wide shot from mast location looking back at house (showing elevation drop)
- [ ] The mast collapsed and extended (product shots)
- [ ] Drone photo: overhead view showing wire route, mast, house
- [ ] Drone photo: mast top height vs chimney height (with measurements overlaid)
- [ ] Google Earth / terrain profile of the valley cross-section (N-S)
- [ ] Panoramic from mast location showing hills on both sides

### Curriculum tags
- Lesson 3 — Radiation Patterns (null placement, broadside vs endfire)
- Lesson 5 — Polarisation (brief mention, more in Blog 2.0)
- Lesson 6 — Impedance (feedpoint vs non-feed-end impedance)
- Lesson 9 — Gain, Directivity, Efficiency (terrain gain / loss)
- Potential new: Terrain effects on HF propagation
- Potential new: NVIS propagation fundamentals

### Cross-references
- Points forward to Point 2 (noise environment — granite walls)
- Points forward to Point 4 (counterpoise)
- Points forward to Blog 2.0 (90° reorientation, polarisation)
- Points forward to terrain analysis (Google Earth elevation data)

### Open questions
- [x] Foundation licence status — still working towards it
- [ ] Chimney height roughly? (Will be measured by drone, but useful to have estimate)
- [x] Which direction does the garden/mast face relative to the house? — North (Moorfoot)
- [x] Is the hill behind the house to the north (Moorfoot) or south (Southern Uplands)? — Moorfoot to north
- [x] Wire route: mast (feedpoint) → house (non-feed end) — confirmed
