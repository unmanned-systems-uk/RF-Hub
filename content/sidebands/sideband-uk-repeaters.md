# Sideband: UK Repeaters — Location, Frequency, and How to Use Them

**Tags:** `[F]` `[I]` `[FL]`
**Cross-refs:** Band Plan, QSO Scripts, Digital Modes, Q-Codes
**Series:** Sideband — Topic Snippets for RF-Hub

---

A repeater is a radio station that listens on one frequency and simultaneously retransmits what it hears on another. Placed on hilltops, tall buildings, or masts, repeaters dramatically extend the range of low-power and handheld radios. Two operators who can't hear each other directly can both reach the repeater — and the repeater links them together.

Understanding how repeaters work, how to find them, and how to use them properly is essential for every new licence holder. For many Foundation operators, a local repeater is where you'll make your first contact.

<!-- INTERACTIVE: uk-repeater-map
Google Maps embedded map showing all UK amateur radio repeaters.

Data source: ukrepeater.net (initial load from a JSON file, manually updated periodically)

Map features:
- Centre: UK (54.5, -2.5), zoom level 6
- Markers for each repeater, colour-coded by type:
  - Blue: 2m FM analogue (GB3)
  - Orange: 70cm FM analogue (GB3)
  - Green: D-STAR (GB7)
  - Red: DMR (GB7)
  - Purple: Fusion (GB7)
  - Grey: Other (6m, 4m, 23cm, ATV)
- Marker click shows info window with:
  - Callsign (e.g., GB3DA)
  - Output frequency
  - Input frequency / offset
  - CTCSS tone (letter and Hz)
  - Mode (FM/D-STAR/DMR/Fusion)
  - Location name
  - Keeper callsign (if available)
  - Status (on air / off air)
- Filter panel (top-right):
  - Checkboxes: 2m, 70cm, 6m, 4m, 23cm
  - Checkboxes: FM, D-STAR, DMR, Fusion
  - Text search: filter by callsign or location
- "Near me" button: uses browser geolocation to centre map and highlight nearest repeaters
- Cluster markers when zoomed out (too many pins to display individually)

Technical:
- Google Maps JavaScript API (key required — stored in site config, NOT in source code)
- Repeater data loaded from /assets/data/uk-repeaters.json
- Vanilla JS only
- Responsive: fills container width, 500px height desktop, 350px mobile
- Dark map style to match RF-Hub theme (use Google Maps styling JSON)

REQUIRES: Google Maps API key to be configured before this feature works.
-->

---

## How Repeaters Work

### The Basic Principle

A repeater operates on two frequencies simultaneously:

- **Input frequency** — the frequency the repeater *listens* on. This is where **you transmit**.
- **Output frequency** — the frequency the repeater *transmits* on. This is where **you listen**.

The difference between these two frequencies is called the **offset** (or shift). Your radio handles this automatically — you programme the output frequency as your dial frequency, set the offset, and when you press PTT your radio shifts to the input frequency.

> **Think of it like a phone call through a switchboard.** You speak into the switchboard on one line (input), and the switchboard sends your voice out on another line (output) to everyone listening. When you release PTT, the switchboard goes quiet until someone else speaks.

### Simplex vs Duplex

| Mode | What It Means | Example |
|------|--------------|---------|
| **Simplex** | Both stations use the same frequency, taking turns | Direct contact on 145.500 MHz |
| **Half-duplex** | Transmit on one frequency, receive on another, but not at the same time | How YOUR radio works through a repeater |
| **Full duplex** | Transmit and receive simultaneously on different frequencies | How the REPEATER itself works internally |

---

## UK Repeater Frequency Offsets

The offset varies by band. Getting this wrong is the most common beginner mistake — your radio will transmit on the wrong frequency and the repeater won't hear you.

### Standard UK Offsets

| Band | Standard Offset | Direction | Notes |
|------|----------------|-----------|-------|
| **2m** (144 MHz) | 600 kHz | **Negative** (−600 kHz) | Almost universal — transmit 600 kHz below output |
| **70cm** (430 MHz) | Varies! | See below | Three different channel series with different offsets |
| **6m** (50 MHz) | 500 kHz | **Negative** (−500 kHz) | Few repeaters on this band |
| **4m** (70 MHz) | Varies | — | Very few repeaters |
| **23cm** (1296 MHz) | 6 MHz | **Negative** (−6 MHz) | Specialist band |

### 70cm — Three Different Offset Systems

This catches out beginners. The 70cm band has three channel series, each with a different offset:

| Series | Channels | Output Range | Offset | Use |
|--------|----------|-------------|--------|-----|
| **RB** | RB0–RB15 | 433.000–433.375 MHz | **+1.6 MHz** | FM analogue |
| **RU** | RU65–RU79 | 430.813–430.988 MHz | **+7.6 MHz** | FM analogue |
| **DVU** | DVU1–DVU51 | 439.125–439.775 MHz | **−9.0 MHz** | Digital (D-STAR/DMR/Fusion) |

> **Always check the repeater listing.** Never assume a 70cm offset — look it up on ukrepeater.net for the specific repeater you want to use.

### 2m Repeater Channels (RV Series)

All 2m repeaters use a −600 kHz offset with 12.5 kHz channel spacing:

| Channel | Output (MHz) | Input (MHz) |
|---------|-------------|-------------|
| RV48 | 145.600 | 145.000 |
| RV50 | 145.625 | 145.025 |
| RV52 | 145.650 | 145.050 |
| RV54 | 145.675 | 145.075 |
| RV56 | 145.700 | 145.100 |
| RV58 | 145.725 | 145.125 |
| RV60 | 145.750 | 145.150 |
| RV62 | 145.775 | 145.175 |
| RV63 | 145.788 | 145.188 |

---

## CTCSS — Continuous Tone-Coded Squelch System

### What Is CTCSS?

CTCSS is a sub-audible tone that your radio transmits continuously alongside your voice. The tone frequency is between 67 Hz and 254 Hz — below what the human ear can normally detect. The repeater checks for this tone before opening. If the wrong tone (or no tone) is received, the repeater ignores the signal.

### Why Repeaters Need CTCSS

Without CTCSS, a repeater would open every time any RF signal appeared on its input frequency — interference, electrical noise, distant stations on the same frequency, or even another repeater hundreds of miles away during unusual propagation conditions (like summer tropospheric ducting). CTCSS ensures only stations with the correct tone can activate the repeater.

### How to Set CTCSS on Your Radio

**Set CTCSS on transmit (TX encode) ONLY.**

If you set your radio to encode AND decode (sometimes labelled "T/R" or "ENC/DEC"), your radio will mute itself when receiving the repeater's output — because the repeater does NOT send a CTCSS tone back to you. This is the second most common beginner mistake after wrong offsets.

**Setup checklist:**
1. Set CTCSS mode to **TX only** (encode only, sometimes labelled "ENC" or "T")
2. Select the correct tone frequency for your repeater
3. Do NOT set to "T/R" or "ENC/DEC" — you will hear nothing back

### The UK CTCSS Tone Block System

The UK is divided into **9 geographic tone blocks**, each assigned a specific CTCSS tone letter. This ensures neighbouring repeaters on the same frequency use different tones, preventing them from triggering each other.

<!-- INTERACTIVE: ctcss-tone-block-map
Map of the UK showing the 9 CTCSS tone blocks as coloured regions.

Display:
- Simplified UK outline map (SVG or canvas)
- 9 regions, each filled with a distinct colour and labelled with the tone letter and frequency
- Click/tap a region to highlight it and show the tone details in a panel below the map

Tone blocks (approximate geographic regions):
- Block A (67.0 Hz) — Channel Islands
- Block B (71.9 Hz) — South West England
- Block C (74.4 Hz) — South East England / London South
- Block D (77.0 Hz) — East Anglia / London North
- Block E (79.7 Hz) — Midlands
- Block F (82.5 Hz) — North West England / North Wales
- Block G (85.4 Hz) — North East England / Yorkshire
- Block H (88.5 Hz) — Scotland (South) / Northern Ireland
- Block J (110.9 Hz) — Scotland (North)

Note: Letter I is skipped to avoid confusion with the number 1.

Panel below map shows:
- Selected block letter, frequency, and geographic description
- List of repeaters in that block (from repeater data JSON)
- "Copy tone to clipboard" button

Styling: Dark background, RF-Hub theme. Region colours should be distinct but not garish. Labels in IBM Plex Mono. Responsive — map scales to container width.
-->

### UK CTCSS Tone Letters

| Letter | Frequency | Geographic Block |
|--------|-----------|-----------------|
| **A** | 67.0 Hz | Channel Islands |
| **B** | 71.9 Hz | South West England |
| **C** | 74.4 Hz | South East England / London South |
| **D** | 77.0 Hz | East Anglia / London North |
| **E** | 79.7 Hz | Midlands |
| **F** | 82.5 Hz | North West England / North Wales |
| **G** | 85.4 Hz | North East England / Yorkshire |
| **H** | 88.5 Hz | Scotland (South) / Northern Ireland |
| **J** | 110.9 Hz | Scotland (North) |

> **Why no letter I?** The letter I is skipped because it's too easily confused with the number 1, especially in Morse code identification. The sequence goes A, B, C, D, E, F, G, H, J.

### 1750 Hz Tone Burst (Legacy Access)

Before CTCSS became standard, UK repeaters used a **1750 Hz audible tone burst** — a brief beep sent at the start of a transmission to open the repeater. Some older repeaters still accept this, and many accept both methods.

The tone burst lasts about half a second and only needs to be sent on your first transmission. Most modern radios have a dedicated TONE or CALL button for this. Some radios can send it automatically when you first press PTT.

---

## How to Find UK Repeaters

### ukrepeater.net — The Definitive Directory

The primary UK repeater database, maintained on behalf of the RSGB Emerging Technology Co-ordination Committee (ETCC). Contains approximately **837 voice/data repeaters**, plus internet gateways, packet stations, ATV repeaters, and beacons.

**Website:** [ukrepeater.net](https://ukrepeater.net)

**How to search:**
1. Select your band (2m, 70cm, etc.)
2. Filter by mode (FM, D-STAR, DMR, Fusion)
3. Browse the list — shows output frequency, offset, CTCSS tone, location, keeper
4. CSV downloads available for programming your radio

### RepeaterBook

An alternative directory with Google Maps integration and proximity search:

**Website:** [repeaterbook.com](https://www.repeaterbook.com/row_repeaters/Display_SS.php?state_id=GB)

### How UK Repeater Callsigns Work

| Prefix | Type | Example |
|--------|------|---------|
| **GB3xx** | Analogue FM repeater | GB3DA (Essex) |
| **GB7xx** | Digital repeater / internet gateway | GB7IC (D-STAR), GB7BS (DMR) |
| **MB7Ixx** | Internet gateway (simplex, non-repeater) | MB7ICL (EchoLink) |

The two-letter suffix is allocated by the ETCC and often (but not always) relates to the location.

---

## How to Programme Your Radio

Before you can use a repeater, you need to enter five pieces of information:

| Setting | What to Enter | Where to Find It |
|---------|--------------|-----------------|
| **Receive frequency** | Repeater's OUTPUT frequency | ukrepeater.net |
| **Offset direction** | + or − (depends on band/series) | Band table above |
| **Offset amount** | 600 kHz, 1.6 MHz, etc. | Band table above |
| **CTCSS tone** | Tone frequency in Hz (TX encode only) | ukrepeater.net |
| **Bandwidth** | Narrow (12.5 kHz / NFM) | Always narrow in UK |

### Step by Step

1. **Enter the output frequency** as your receive/dial frequency
2. **Set the offset** direction and amount for the band
3. **Set CTCSS** to TX encode only — enter the correct tone frequency
4. **Set bandwidth** to Narrow (12.5 kHz). UK repeaters use narrow spacing — wide (25 kHz) causes distortion and splatter onto adjacent channels
5. **Disable busy channel lockout** (BCLO/TXI) — if enabled, your radio refuses to transmit while hearing the repeater, which means you can never talk through it
6. **Save to a memory channel** once confirmed working

### Testing Access

To test if you can reach the repeater, transmit briefly **with your callsign**:

> "**[Your callsign]** testing through **[repeater callsign]**."

You should hear your own transmission retransmitted through the repeater output a fraction of a second later. If you hear nothing, check your offset, CTCSS tone, and that you're in range.

> **Never kerchunk.** Pressing PTT briefly without identifying yourself is an unidentified transmission — it's illegal under UK licence conditions. Always give your callsign, even for a test.

---

## How to Make a Contact Through a Repeater

### Calling

**Do not call CQ on a repeater.** CQ is a convention for HF and simplex. On a repeater, simply announce yourself:

> "**[Your callsign]** listening through **[repeater callsign]**."

Or simply:

> "**[Your callsign]** listening."

Wait 10–15 seconds. If no response, try again. If still nothing, the repeater is working but nobody is monitoring right now.

### Responding to Someone

Wait for the **courtesy tone** (the beep after they release PTT), then:

> "**[Their callsign]**, this is **[your callsign]**. Good evening."

### Joining an Ongoing Conversation

Wait for a gap between transmissions and say your callsign only:

> "**[Your callsign]**."

This signals you'd like to join without being rude. The other stations will acknowledge you.

### During the Contact

- Give your callsign at the start and end, and every 15 minutes during long contacts
- Keep transmissions short — most repeaters timeout after 2–4 minutes
- Leave a **2-second pause** after releasing PTT before the next station transmits — this allows the courtesy tone to sound and lets anyone with an emergency break in
- Say the other station's callsign before speaking so they know you're responding to them

### Closing

> "**[Their callsign]**, this is **[your callsign]**. Thanks for the chat. 73. **[Your callsign]** clear."

---

## Repeater Timeout Timer

Every repeater has a timeout timer (TOT) — typically **2 to 4 minutes** in the UK (some as short as 90 seconds).

**Why it exists:**
- Prevents one station monopolising the repeater
- Protects the repeater transmitter from overheating
- Catches stuck PTT buttons or interference holding the repeater open

**What happens:** If you exceed the time limit, the repeater drops — it stops retransmitting. You hear sudden silence.

**What to do:**
1. Release PTT immediately
2. Wait a few seconds for the timer to reset
3. Rekey and continue: "Sorry, timed out — **[your callsign]** continuing..."

**The courtesy tone:** Most repeaters emit a short beep (or Morse letter "K") a few seconds after you release PTT. This confirms the timeout timer has reset. Waiting for the courtesy tone before responding is good practice.

---

## Repeater Etiquette

| Rule | Why |
|------|-----|
| **Always identify with your callsign** | Legal requirement — even for a brief test |
| **Never kerchunk** | Unidentified transmission = illegal |
| **Prioritise mobile stations** | They can't always wait for a gap |
| **Keep it brief during busy periods** | Others are waiting to use the repeater |
| **Use "break" for emergencies** | If you hear "break break", stop and listen immediately |
| **Don't use excessive power** | If 5 W reaches the repeater, use 5 W — high power can desensitise the receiver |
| **Leave a gap between overs** | Allows the courtesy tone and lets others break in |
| **Keep content appropriate** | Repeaters are on licensed frequencies audible to anyone with a scanner |

---

## Digital Repeaters

### D-STAR (Digital Smart Technologies for Amateur Radio)

Developed by Icom. The oldest major amateur digital voice mode (early 2000s).

| Feature | Detail |
|---------|--------|
| Callsign prefix | GB7xx |
| Modules | A (23cm), B (70cm), C (2m), G (gateway) |
| Linking | Reflectors (e.g., REF001C, XLX456A) |
| Key feature | Callsign routing — network tracks where you were last heard |
| Registration | Via your local D-STAR gateway administrator |
| Radios | Icom (IC-705, IC-9700, IC-7100, etc.) |

### DMR (Digital Mobile Radio)

Originally a commercial radio standard, adopted by amateurs due to affordable handhelds.

| Feature | Detail |
|---------|--------|
| Callsign prefix | GB7xx |
| Access method | Colour Code (like CTCSS for DMR) + Talkgroup + Time Slot |
| Time Slots | TS1 (wide-area/national), TS2 (local/regional) |
| Registration | Get a DMR ID at [radioid.net](https://radioid.net) — required before transmitting |
| UK network | BrandMeister (largest), Phoenix, regional clusters |
| Radios | Motorola, Hytera, Anytone, TYT, Retevis, Baofeng DM series |

**Key UK DMR Talkgroups (BrandMeister):**

| Talkgroup | Purpose |
|-----------|---------|
| TG 9 | Local only — stays on that repeater, no internet |
| TG 235 | UK calling — national |
| TG 2350 | UK BrandMeister centre of activity |
| TG 2351–2353 | UK chat channels |
| TG 4000 | Disconnect from dynamic talkgroup |
| TG 98 | Test (two-way parrot) |

> **Codeplug:** DMR radios need a "codeplug" — a configuration file with all your channels, talkgroups, and contacts. Most local clubs provide ready-made codeplugs for your area. Programming a codeplug from scratch is time-consuming but educational.

### System Fusion (Yaesu C4FM)

Yaesu's digital voice system. Key feature: **Automatic Mode Select (AMS)** — the radio automatically detects whether the incoming signal is digital or analogue FM and switches accordingly. This makes Fusion repeaters backwards-compatible with analogue radios.

| Feature | Detail |
|---------|--------|
| Callsign prefix | GB7xx |
| Linking | WIRES-X rooms (internet-linked conference channels) |
| Key feature | AMS — works with analogue FM radios too |
| Radios | Yaesu (FT-70D, FTM-300D, FTM-500D, etc.) |

### Hotspots — Your Personal Repeater

A hotspot is a low-power (typically 10 mW) personal gateway that connects your digital radio to internet networks via Wi-Fi. It gives you worldwide digital access from anywhere with an internet connection.

**Hardware:** Raspberry Pi + MMDVM HAT (Multi-Mode Digital Voice Modem)
**Software:** Pi-Star or WPSD (W0CHP fork)
**Supported modes:** DMR, D-STAR, Fusion, P25, NXDN
**Licence note:** You need a valid amateur licence to operate a hotspot — it's a radio station

---

## Internet-Linked Repeaters

Many UK repeaters connect to wider networks via the internet:

### EchoLink

- Links repeaters and individual stations worldwide via VoIP
- Accessible from radio, PC, or smartphone app
- Requires callsign validation at [echolink.org](https://www.echolink.org)
- Connect via DTMF: key in the node number through the repeater
- Disconnect: send `#` via DTMF

### IRLP (Internet Radio Linking Project)

- Links repeaters over the internet using VoIP
- Each node has a unique 4-digit number
- Connect by sending the 4-digit DTMF code through the repeater
- Disconnect with a DTMF disconnect command (varies by system)

> **When a repeater is linked:** Everything you say may be heard by stations worldwide on the connected conference server or reflector. Keep this in mind — you're not just talking to your local area.

---

## UK Repeater Infrastructure

### Who Runs Repeaters?

Every UK repeater has a **repeater keeper** — a Full licence holder who holds a **Notice of Variation (NoV)** from Ofcom authorising operation of that specific repeater on specific frequencies at a specific location.

The keeper is personally responsible for:
- Ensuring the repeater operates correctly and within its NoV parameters
- Monitoring for misuse
- Maintaining the equipment
- Complying with Ofcom licence conditions

### How Repeaters Are Funded

UK repeaters receive **no central funding**. They're supported by local repeater groups — informal associations of local amateurs who typically contribute £10–£15 per year to cover:
- Site rental (mast or building access)
- Electricity
- Equipment maintenance and replacement

### The ETCC

The **Emerging Technology Co-ordination Committee** (part of the RSGB) coordinates all UK repeater frequency assignments. They:
- Assess new repeater applications
- Allocate channels to avoid interference
- Process approvals to Ofcom
- Maintain the ukrepeater.net database

---

## Quick Reference

### Key Numbers

| Fact | Value |
|------|-------|
| 2m repeater offset | −600 kHz |
| 70cm RB offset | +1.6 MHz |
| 70cm RU offset | +7.6 MHz |
| 70cm DVU offset | −9.0 MHz |
| 6m repeater offset | −500 kHz |
| 23cm repeater offset | −6 MHz |
| Legacy tone burst | 1750 Hz |
| CTCSS range | 67.0–254.1 Hz |
| UK tone letters | A through J (skipping I) |
| Typical timeout | 2–4 minutes |
| 2m FM calling (simplex) | 145.500 MHz |
| 70cm FM calling (simplex) | 433.500 MHz |
| Analogue repeater prefix | GB3xx |
| Digital repeater prefix | GB7xx |
| UK DMR calling talkgroup | TG 235 |
| DMR local-only talkgroup | TG 9 |

### Essential Links

- **[ukrepeater.net](https://ukrepeater.net)** — UK repeater directory (the definitive source)
- **[repeaterbook.com](https://www.repeaterbook.com)** — Alternative directory with map search
- **[radioid.net](https://radioid.net)** — DMR ID registration (required for DMR)
- **[echolink.org](https://www.echolink.org)** — EchoLink registration and software

---

*Sideband snippets are short-form RF-Hub reference topics. They appear in lessons, blog posts, and the knowledge base.*
