# Point 2 — The RF Environment: Granite Walls and Household Noise

## DRAFT — Blog 1.0 Section

---

### The noise you cannot see

Every house is a radio transmitter. Not deliberately, and not powerfully, but
continuously and across a surprisingly wide range of frequencies.

Switch-mode power supplies — the compact chargers and adapters that power
phones, laptops, LED lighting, and almost every piece of modern electronics —
work by switching current on and off at high frequency. That switching
generates harmonics that extend well into the HF bands. An individual charger
might produce emissions so low they pass EMI compliance testing. But a house
has dozens of them, running simultaneously, and their combined effect raises
the noise floor across the HF spectrum.

Add to that:
- **LED drivers** — particularly cheap ones — generate broadband noise
  from their switching regulators
- **Smart home devices** — WiFi routers, Zigbee hubs, 433 MHz and 868 MHz
  sensors — are intentional RF emitters that can desensitise nearby receivers
  through intermodulation and spurious products
- **Solar inverters** — notorious in the amateur radio community for
  generating HF interference, sometimes severe enough to render entire bands
  unusable
- **Ethernet-over-powerline adapters** — inject broadband RF directly onto
  the house mains wiring, which then radiates as an unintentional antenna
- **USB hubs, monitors, HDMI cables** — all potential sources of wideband
  RF noise

These devices are required to meet CE (now UKCA) electromagnetic compatibility
standards. But compliance testing is conducted under controlled conditions —
a single device, at a defined distance, measured against a threshold. In a real
house, with 30 or 40 such devices operating simultaneously, the aggregate
noise floor is significantly higher than any individual device would suggest.

### How noise couples to the antenna

This is the critical point, and it is widely misunderstood. Most people think
of household RF noise as signals radiating through the air from the device to
the antenna. That happens, but it is usually the lesser path. The dominant
coupling mechanism — the one that actually ruins your receive performance — is
**conducted noise through shared metalwork**.

When the antenna feedpoint is on or near the house:
- The **coax shield** connects to the UNUN ground terminal, which connects to
  the counterpoise or earth. If the earth is the house mains earth, the coax
  shield is now galvanically connected to every piece of house wiring.
- The **house metalwork** — guttering, plumbing, central heating pipes,
  structural steel — is within near-field coupling distance of the antenna
  wire and the feedline.
- The **coax run** passes along walls, through rooms, past switch-mode
  chargers and LED lighting. Common-mode current on the shield picks up
  noise from every device along the route.

The result is that the antenna does not just receive signals from the air. It
receives noise that has been injected into the antenna system via conducted
paths that bypass the antenna's radiation pattern entirely. No amount of
antenna directivity helps when the noise is arriving on the feedline, not
through free space.

### My house: a useful exception

My house is built from stone with walls two to four metres thick and a high
granite content. It sits in a valley in the Scottish Borders and dates back
well over a century. In RF terms, these walls do something remarkable: they
substantially attenuate radio signals.

WiFi does not pass reliably from one room to the next. The 433 MHz and 868 MHz
signals from the home automation system — door sensors, temperature monitors —
cannot penetrate the walls. In practical terms, the house behaves more like a
partially shielded enclosure than a typical modern building.

This is unusual. A standard modern UK house — timber frame, brick cavity wall,
plasterboard partitions, UPVC windows — is largely transparent to RF at HF
and VHF frequencies. The walls might attenuate signals by a few dB, but they
do not meaningfully block them. Household noise radiates freely through the
structure and into any antenna mounted on or near the building.

My granite walls provide genuine attenuation of airborne noise from inside
the house. But — and this is the important nuance — **the conducted paths
still exist**. The mains wiring still enters and exits the house. The coax
shield still connects to a common earth. Metalwork still couples magnetically.
The walls block the radiated noise, but they do not block the conducted noise.

### What this means for feedpoint location

Even with granite walls that block most airborne RF:
- A feedpoint on the chimney still shares its earth with the house
- Coax running down the wall still picks up common-mode noise
- The counterpoise, if connected to the house earth, still couples to the
  mains wiring

The walls buy me some advantage over a typical modern house, but they do not
eliminate the coupling problem. The only thing that eliminates it is
**distance** — physical separation between the antenna system and the house
electrical environment.

For most readers, whose houses are modern and RF-transparent, the argument is
even stronger. Your walls are not blocking the airborne noise. Your coax is
coupling to the conducted noise. And your counterpoise is probably the house
itself. The case for getting the antenna away from the building is not about
cable loss. It is about noise.

### The remote SDR advantage

When the feedpoint is at the mast, 40 metres from the house, and the
connection back is Ethernet rather than coax:

- **No coax shield to carry common-mode noise.** The Ethernet cable carries
  digital data. Common-mode current on the Ethernet cable does not inject
  noise into the SDR input. (A shielded Cat6 cable with proper grounding at
  the enclosure further reduces any residual coupling.)
- **No shared earth with the house.** The counterpoise at the mast connects
  to its own earth rod, driven into garden soil. The house mains earth is
  40 metres away and electrically separate.
- **No near-field coupling to house metalwork.** The antenna wire, the UNUN,
  and the counterpoise are all physically distant from guttering, plumbing,
  and wiring.
- **The house noise still exists** — but it has to propagate 40 metres
  through free space (attenuated by path loss) to reach the antenna, rather
  than being conducted directly into the system via shared metalwork.

This is not a theoretical benefit. Anyone who has compared an antenna mounted
on a house with the same antenna mounted in a garden, well clear of the
building, will tell you the noise floor drops. The remote SDR approach takes
this further by eliminating the coax path entirely.

### A note for readers with modern houses

If your house has standard brick or timber-frame walls, the airborne path
that my granite blocks is wide open for you. Household noise radiates through
the walls and directly into the antenna. The case for distance is even more
compelling than it is for my unusual build.

The minimum useful separation depends on frequency and the severity of your
noise sources. As a rough guide:
- **10–15 metres** — enough to reduce near-field coupling to metalwork
- **20–30 metres** — airborne noise from the house starts to fall below the
  ambient HF noise floor in most environments
- **40+ metres** — the house is essentially irrelevant as a noise source

These are not hard numbers. They depend on your specific noise sources, the
terrain, and the ambient noise floor at your location. But the principle is
clear: more distance means less house noise.

---

## EDITORIAL NOTES

### Tone check
- First person for the specific house details
- Shifts to second person ("your house") for the general advice
- Technical but not academic — no equations, no EMC standards citations
- The "useful exception" framing avoids bragging about granite walls

### Key editorial points
1. Conducted noise > radiated noise (the widely misunderstood bit)
2. Granite walls are interesting but don't solve the conducted path problem
3. The Ethernet link breaks the conducted noise path that coax preserves
4. Most readers have worse RF environments — the argument is stronger for them

### Curriculum tags
- Potential new content: **Household RF noise sources and their spectra**
- Potential new content: **Common-mode current — what it is and why it matters**
- Lesson 6 — Impedance (common-mode vs differential-mode on feedlines)
- Lesson 15 — Impedance Matching (common-mode choke / current balun role)

### Photo/media placeholders
- [ ] Close-up of the stone wall showing thickness (doorway or window reveal)
- [ ] Photo of typical household noise sources (chargers, LED drivers, etc.)
- [ ] SDR waterfall: noise floor comparison near house vs away from house
      (this is Phase 2 practical content — placeholder for now)
- [ ] WiFi signal strength map showing drop-off through granite walls
      (optional but would be compelling visual evidence)

### RF-Hub interactive visualisation opportunity
- A diagram showing the two noise coupling paths: radiated (through walls)
  and conducted (via metalwork/coax). This would work well as an SVG or
  simple Canvas interactive — click to toggle between "modern house" and
  "granite house" to show which paths are attenuated and which remain.

### Cross-references
- Back-references Point 1 (feedpoint distance)
- Forward-references Point 4 (counterpoise — the conducted path in detail)
- Forward-references the practical Phase 2 noise floor measurements
- Links to the Understanding S11 blog (measurement techniques)

### Confirmed details
- No solar panels
- No SDR noise observation yet — will do during Phase 2
