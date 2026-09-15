# Section 7: Operating Practices & Procedures

<!-- Exam weight: ~6% (~2–3/46 questions) -->
<!-- Sub-sections: 7A, 7B, 7C, 7D, 7E, 7F, 7G, 7H -->
<!-- Syllabus refs: 7A3, 7A4, 7B1 -->
<!-- RSGB source: Chapter 2 Operating Techniques (pp.4–6) + Chapter 8 Good Radio Housekeeping (pp.45–47, non-EMC elements only) -->

Operating practices are the social contract of amateur radio. The licence gives you the legal right to transmit; band plans, Q-codes, and etiquette conventions give you the tools to do so without annoying everyone else. This section covers how to share the bands properly — which frequencies to use, how to make and end a contact, how to behave around DX pileups and contests, and how to keep a station that runs well and causes the least interference.

The technical load here is lighter than in §4 or §5, but several exam questions probe specific rules: no SSB on 10 MHz, WARC bands and contests, the Q-code list, and international callsign prefixes all appear regularly.

---

## 7A — Band Plans and Frequency Etiquette

### Why Band Plans Exist (7A3)

Amateur radio operates on frequencies allocated by the ITU (International Telecommunication Union). Within those allocations, nothing in law specifies which modes go where. Without coordination, every band would quickly descend into chaos — CW operators buried under SSB sidebands, digital modes parking on top of beacon frequencies, contest stations calling CQ on the DX calling frequency.

**Band plans** are a voluntary coordination system. They are published by **IARU** (the International Amateur Radio Union) and adopted by national societies. The RSGB publishes the UK band plans in *RadCom* annually. They carry no legal force — you cannot be prosecuted for operating outside them — but violating them makes you a bad neighbour on the bands and undermines the hobby's ability to self-regulate.

The UK is in **IARU Region 1**, which covers Europe, Africa, the Middle East, and part of Asia. When the RSGB says "band plan", it means the IARU Region 1 plan as locally adapted.

> [INFO] **7A3:** Band plans are voluntary IARU agreements on how amateurs share the spectrum within each allocated band. They are not legally binding but are widely followed. The UK is IARU Region 1.

### What a Band Plan Shows (7A3, 7A4)

A band plan divides each amateur band into sub-band segments, each assigned to specific modes and uses:

| Segment type | What goes here |
|---|---|
| **CW only** | Morse code — narrowest signals, lowest in the band |
| **Narrow-band/digital** | PSK31, RTTY, FT8/FT4, other narrow-band digital modes |
| **SSB** | Single-sideband voice — the widest common signal type |
| **Beacons** | Automated unattended beacon transmitters — never transmit here |
| **Satellite** | Uplink/downlink frequencies for amateur satellites |
| **FM/repeaters** | On VHF/UHF: simplex FM calling, repeater inputs/outputs |
| **Calling frequencies** | Agreed spots to make first contact, then move (QSY) |

> [WARNING] Never call CQ on a beacon frequency, an emergency calling channel, or a repeater output frequency. These are not general-use frequencies.

### Exam Scope — Which Bands Appear in the Exam?

The RSGB Intermediate exam draws band plan questions from **two bands only**: **14 MHz (20 m)** and **144 MHz (2 m)**. Satellite sub-band questions are also limited to these two bands. Memorise these two plans; others are not tested at Intermediate level.

### The 2 m Band Plan (144–146 MHz)

| Sub-band | Frequencies | Use |
|---|---|---|
| EME/CW | 144.000–144.110 | Moonbounce (EME) and CW only |
| CW | 144.110–144.160 | CW |
| SSB | 144.160–144.400 | SSB voice; **144.300 MHz is the SSB calling frequency** |
| Beacons | 144.400–144.500 | Propagation beacons — receive only |
| All modes | 144.500–144.794 | Mixed: APRS at 144.800, digital modes |
| FM simplex | 145.000–145.1875 | FM simplex channels |
| Repeater outputs | 145.200–145.5875 | Repeater transmit frequencies — listen here |
| Repeater inputs | 145.600–145.7875 | You transmit here to reach repeater |
| **Satellites** | **145.800–146.000** | **Amateur satellite uplink — reserved** |

> [INFO] **7A4:** On 2 m, FM calling is **145.500 MHz**. SSB calling is **144.300 MHz**. Satellites use the segment **145.800–146.000 MHz** on 2 m.

### The 20 m Band Plan (14.000–14.350 MHz)

| Sub-band | Frequencies | Use |
|---|---|---|
| CW | 14.000–14.060 | CW only; **14.050 MHz CW calling** |
| Narrow-band/digital | 14.060–14.099 | PSK31, RTTY, FT8 (14.074 MHz) |
| Beacons | 14.099–14.101 | International beacon network — receive only |
| All modes / SSB | 14.101–14.350 | SSB voice; **14.225 MHz SSB calling** |

### WARC Bands — No Contests

Three amateur HF bands were gained at the 1979 World Administrative Radio Conference: **10 MHz (30 m), 18 MHz (17 m), and 24 MHz (12 m)**. As a condition of the amateur community's use of these bands, **no contest activity is permitted on WARC bands**. This applies globally, not just in the UK.

The **5 MHz (60 m)** band, gained later, carries the same convention.

> [WARNING] **No contests on 5 MHz, 10 MHz, 18 MHz, or 24 MHz.** These bands are WARC/post-WARC allocations and are kept contest-free by international agreement.

An important consequence: **no SSB on 10 MHz**. The 30 m band plan allocates 10 MHz to CW and narrow-band digital modes only — no SSB segment exists at 10 MHz. This appears regularly in Intermediate exam questions.

> [INFO] **7A4 exam point:** SSB is **not permitted** in the 10 MHz (30 m) band plan. CW and narrow-band digital modes only.

### Listen First

Before transmitting on any frequency:

1. **Listen for at least a minute** — if the band seems quiet, that does not mean the frequency is clear. A station may be off-air briefly, or propagation may be opening.
2. **Ask "Is this frequency in use?"** — say this once on the frequency and pause. If someone replies, find another frequency.
3. **QSY to a clear spot** — avoid setting up right on top of another QSO even if you cannot hear the other station (asymmetric propagation means they may hear you clearly).

---

## 7B — Making Contact

### 7B1a — Pre-CQ Checklist

> **Prerequisite:** Foundation and Intermediate courses cover the basics of making a call. The following is a reminder of the full procedure, with the nuance expected at Full licence level. If any step is unclear, review §7A (Band Plans and Frequency Etiquette) for calling-frequency conventions.

Before you press PTT, run through these steps in order. Skipping them is how amateurs cause the kind of interference they complain about in others.

**Step 1 — Listen first**

Even if the frequency sounds completely clear, do not assume it is free. You may be hearing only one side of a long-distance contact: the station nearby is listening to a distant DX station whose signal is too weak for your location. If you transmit, you will crash their contact without ever knowing it.

Listen for at least 30–60 seconds. If nothing heard, proceed.

**Step 2 — Check the band plan**

Confirm the frequency is in the correct segment for your mode. Calling CQ on a beacon segment or a repeater output is unacceptable regardless of how clear it sounds.

Key calling frequencies you should know:

| Band | Freq | Mode | Note |
|---|---|---|---|
| 20 m (14 MHz) | 14.225 MHz | SSB | SSB calling frequency |
| 20 m (14 MHz) | 14.070 MHz | PSK31 | Digital calling/activity centre |
| 20 m (14 MHz) | 14.074 MHz | FT8 | FT8 dial frequency |
| 6 m (50 MHz) | 50.125 MHz | SSB | SSB calling frequency (Region 1) |
| 2 m (144 MHz) | 144.300 MHz | SSB | SSB calling frequency |
| 2 m (144 MHz) | 145.500 MHz | FM | FM simplex calling channel |

> **Cross-reference:** §7A has the full 2 m and 20 m band plan tables. The convention is to **call CQ on the calling frequency, then QSY** to a nearby working frequency for any QSO longer than a brief exchange — this leaves the calling frequency clear for others.

**Step 3 — Ask QRL?**

Transmit "QRL?" (or, if you prefer plain language: "Is this frequency in use?") and pause for 2–3 seconds. QRL? means "is this frequency busy?" If someone replies "QRL" or "yes" or gives their callsign — the frequency is in use. Find another.

If you hear nothing after two asks separated by a few seconds, the frequency is likely clear. Some stations may be briefly off-air between transmissions; a second ask protects against that.

**Step 4 — Optional: send a brief test transmission**

Before a CQ run, some operators send their callsign once followed by "listening" or "testing". This checks:
- Your transmitter is actually on air (you can hear the sidetone, but is it transmitting?)
- Your audio/keying path is working
- Any local stations monitoring that frequency know someone is about to call CQ

This is especially useful when setting up on a new band or after changing antennas.

Only after all four steps do you proceed to the CQ call.

### The CQ Call (7B1)

A CQ call is an open invitation for any station to reply. The standard form:

```
CQ CQ CQ, this is [callsign] [callsign] [callsign], calling CQ and standing by.
```

On SSB, give your callsign in phonetics each time. On CW, send it in Morse. After the call, release the PTT and listen. If no reply, wait 10–15 seconds and try again. After three or four calls with no reply, try a different frequency or time.

A shorter version used when already established on a frequency:

```
CQ, this is [callsign], standing by.
```

### NATO Phonetic Alphabet

Phonetics exist because letters that sound similar — B/D/E/G/P/T/V — become indistinguishable over a weak or noisy signal. The **NATO/ICAO phonetic alphabet** is the standard in amateur radio (and aviation, emergency services, and the military). The RSGB and the UK amateur licence both reference it.

| Letter | Word | Letter | Word |
|---|---|---|---|
| A | Alpha | N | November |
| B | Bravo | O | Oscar |
| C | Charlie | P | Papa |
| D | Delta | Q | Quebec |
| E | Echo | R | Romeo |
| F | Foxtrot | S | Sierra |
| G | Golf | T | Tango |
| H | Hotel | U | Uniform |
| I | India | V | Victor |
| J | Juliet | W | Whiskey |
| K | Kilo | X | X-ray |
| L | Lima | Y | Yankee |
| M | Mike | Z | Zulu |

> [INFO] When giving your callsign — especially in a pileup or on a weak path — always use NATO phonetics. "Golf" is unambiguous; "G" is not.

### RST Signal Reports

Every QSO conventionally exchanges signal reports using the **RST system**:

| Component | Scale | Meaning |
|---|---|---|
| **R** — Readability | 1–5 | 1 = unreadable, 5 = perfectly readable |
| **S** — Signal strength | 1–9 | 1 = faint, 9 = extremely strong |
| **T** — Tone (CW only) | 1–9 | 1 = very rough/broad, 9 = pure tone |

On SSB, only R and S are used: "Five-nine" or "59". On CW, all three: "Five-nine-nine" or "599".

> [INFO] In contest and DX operating, 599 is conventionally exchanged even when the signal is not that strong — it is an accepted shorthand meaning "received and logged". This is normal practice.

### QSO Structure

A typical casual SSB contact follows this loose structure:

1. **First exchange:** callsigns, signal reports
2. **Introductions:** name, location (often given as Maidenhead locator or county/town)
3. **Chat:** antenna, rig, weather — whatever the operators want to discuss
4. **Closing:** thanks, 73, clear

The closing convention is **"73 and clear"** or just **"73"**. The word 73 comes from the old Landline Morse code book (Phillips Code) and means "best regards" — it is already a plural. Saying "73's" is therefore redundant and marks you as a newcomer.

> [INFO] "73" = best regards. It is not a number requiring a plural suffix. Say "73" not "73s".

### Joining an Existing QSO

If you want to join a QSO already in progress, wait for a pause then transmit your callsign once: "M0XYZ". The operators will acknowledge you and invite you in. Do not transmit your call repeatedly or talk over the current operators.

### 7B1b — Post-Response: Move to a Working Frequency

When a station replies to your CQ, the exchange on the calling frequency should be brief. If you intend to have a longer QSO, move off the calling frequency so it remains available for others to make first contact.

**Acknowledge and exchange essentials**

Reply with the caller's callsign, your callsign, and a signal report:

```
[Their callsign], this is [your callsign], you are 59, over.
```

They will confirm your report and give theirs. At this point you have enough information to QSY.

**Request a QSY**

Propose a nearby clear frequency:

```
Thank you for the report — can we QSY to 14.205? I'll call you there.
```

Move to that frequency (having checked it is clear with a brief QRL? first), call the other station, and continue the QSO there. The calling frequency is now free again.

**Agreeing the QSY frequency**

- Choose a frequency **in the correct mode segment** — do not QSY an SSB contact into the digital sub-band
- Stay close to the calling frequency (within 30–100 kHz on HF) so propagation conditions are likely to be similar
- If the other station cannot hear your suggested frequency, they will say so — try another

**Repeater contacts and the break to simplex**

On an FM repeater, if a longer conversation is expected, consider announcing a move to a simplex channel:

```
M0XYZ, this is M0ABC — shall we try simplex on S20 (145.500)?
```

This frees the repeater for other users and removes the dependency on the repeater's availability and coverage. Not always appropriate (some contacts benefit from repeater range), but good practice when both stations are clearly close enough to work simplex.

> [INFO] **7B1 summary:** Listen → QRL? → CQ → respond briefly on calling frequency → QSY to a working frequency for the actual QSO. The calling frequency is a rendezvous point, not a QSO frequency.

---

## 7C — DX Operating and Pileups

### DX Conventions

**DX** (distance — long-range contacts) operating has its own etiquette, particularly when a rare station (an island, an expedition, or an entity with few operators) is on the air. A well-run DX operation is quick and efficient — the rarer the entity, the larger the pileup.

Key conventions:
- The **DX station** controls the QSO. Wait for it to call.
- Exchanges are brief: callsign, signal report, callsign confirmed, 73 and done. Not a conversation.
- **Never transmit your callsign when the DX has just finished a QSO and not yet sent "QRZ?"** — wait until the DX station invites calls.

### Split Operation

A DX station working a large pileup will often operate **split** — transmitting on one frequency and listening on a different one. This prevents the pileup from wiping out the DX signal for everyone.

The DX station announces this at the end of each contact:

```
QSL. QRZ? DX up 5.
```

This means: the DX station is **transmitting on its published frequency** and **listening 5 kHz above that**. All calling stations transmit on the "up" frequency (or range, e.g., "up 1 to 5").

```
Operating split:  DX transmits 14.225 → you transmit on 14.230 (up 5)
```

> [WARNING] **Never transmit on the DX station's published frequency when split is in use.** Doing so blocks the DX signal for every other station and is one of the most reliably annoying things you can do in amateur radio.

### Pileup Behaviour — What Not To Do

- Do not call over the top of another station who is already in QSO with the DX
- Do not transmit your callsign repeatedly without pausing to listen
- Do not call on the DX's transmit frequency in a split operation
- Do not use excessive power to "punch through" — it does not help and is inconsiderate
- Do not transmit after the DX has said "QSL" to someone else and has not yet called "QRZ"

### QSL Cards and Award Confirmation

A **QSL card** is a written confirmation of a radio contact, sent after the event. Methods:

| Method | How it works |
|---|---|
| **Direct** | Post your card directly to the other station, with a **SASE** (self-addressed stamped envelope) or IRC (International Reply Coupon) for the reply |
| **Bureau** | The RSGB QSL Bureau handles bulk forwarding within the UK and internationally via IARU bureaux — cheaper but slower |
| **LoTW** | Logbook of the World (ARRL electronic system) — digital QSL, accepted by most major awards programmes |

---

## 7D — Digital Modes Etiquette

### The Main Modes

| Mode | Bandwidth | Character | Typical use |
|---|---|---|---|
| **FT8** | ~50 Hz | Fully automated, 15 s cycles, JT65 successor | Weak-signal DX on HF |
| **FT4** | ~90 Hz | Faster FT8 variant, 7.5 s cycles | Contests, slightly less weak than FT8 |
| **PSK31** | ~31 Hz | Keyboard-to-keyboard chat | HF ragchew, very narrow |
| **RTTY** | ~250 Hz (typical shift) | Teleprinter code, older, higher power needed | HF DX, contests |
| **MSK144** | ~2.5 kHz | Fast burst mode for meteor scatter | 144 MHz meteor scatter |

Each mode has its designated sub-band within the digital segment of the band plan. For example on 20 m:
- FT8: **14.074 MHz**
- PSK31: **14.070–14.075 MHz**
- RTTY: **14.080–14.099 MHz**

### FT8 Etiquette

FT8 operates on fixed 15-second transmission intervals. The software decodes and logs automatically, but operating conventions still apply:

- Do not call a station that has already exchanged callsigns and signal reports with another station — they are mid-contact
- Do not "hound" a DX station by calling repeatedly on every cycle regardless of whether they are calling you
- If you decode a station and choose not to call them back, do not leave an unanswered QSO hanging — the other station is waiting
- Keep your FT8 signal within the assigned sub-band window; drifting outside it causes interference to SSB and CW operators

> [WARNING] **Never transmit digital modes outside the designated digital sub-bands.** FT8 appearing in the SSB portion of a band will sound like a buzzing tone to SSB operators — it is disruptive and inconsiderate.

### Digital Interfaces and Computer Audio

When running digital modes, audio goes between the computer and the transceiver via a sound card interface (e.g., SignaLink USB, Digirig). Important discipline:

- **Set ALC correctly** — if the audio level into the TX is too high, the ALC (automatic level control) clamps the signal and creates splatter outside your intended bandwidth. Watch the ALC meter: it should barely move.
- **Mute computer system sounds** — Windows notification sounds, startup chimes, and media player audio will all be transmitted if you forget to mute them
- Use USB computer control (CAT) to let the logging software handle PTT switching — cleaner than VOX

---

## 7E — Nets and Group Operations

### Cross-Reference to §1

The definition of a net, the supervision rules, and the legal framework for group operating are covered in **Section 1 (Licensing & Operating)**. The notes here are practical etiquette only.

### Checking Into a Net

A **net** is a scheduled on-air meeting of a group of stations, usually on a fixed frequency and time, coordinated by a **net control station** (NCS). To join:

1. Listen to the net for a full cycle before transmitting — understand the format in use
2. When net control invites check-ins, transmit your callsign once, clearly with phonetics
3. Wait for net control to acknowledge you before speaking further
4. Keep transmissions brief unless the net format expects ragchew
5. Follow net control's instructions — if told to QSY, move

### Emergency and Traffic Nets (RAYNET)

**RAYNET** (Radio Amateurs' Emergency Network) provides amateur radio communication support for emergency services and public events. RAYNET nets have a more disciplined format:

- Use approved call signs and procedures — do not improvise
- Pass traffic accurately; if in doubt, ask for a repeat rather than guessing
- Use pro-forma message formats where provided (standard traffic forms)
- Priority traffic takes absolute precedence over check-ins and routine traffic
- Do not transmit when you have nothing to contribute — keep the net clear

> [INFO] RAYNET is a legitimate and important use of the amateur licence. Intermediate operators can participate under guidance. The net discipline is stricter than casual operating — think of it as a useful training environment.

> [INFO] **7E1:** A net is a scheduled on-air group meeting controlled by a net control station (NCS). To join: listen first, then check in with your callsign when invited. Priority traffic and NCS instructions take precedence over all else.

---

## 7F — Contest Operating

### What Contests Are

Amateur radio contests are scheduled competitions where operators try to work as many stations as possible in a given time window, accumulating points. They are a legitimate and popular use of the amateur bands. Major examples include the RSGB BERU, CQ WW, CQ WPX, and RSGB National Field Day.

During a contest, the bands will be busy with stations calling CQ rapidly. This is normal behaviour, not interference.

### The Contest Exchange

Contest contacts are deliberately short. The typical exchange is:

```
Calling station: CQ Contest, M0XYZ M0XYZ
Answering station: G4ABC
Calling station: G4ABC, 59 001
Answering station: 59 043
Calling station: QSL, 73
```

The "serial number" (001, 043 above) is unique to each contact. Some contests substitute the serial number with a grid locator, ITU zone, US state, DXCC entity prefix, or other multiplier. Contest rules define the exchange — check the RSGB website or the contest's own page for the exact format.

### WARC Band Restriction (Repeated from 7A)

**No contests on 5 MHz, 10 MHz, 18 MHz, or 24 MHz.** These bands are kept clear of contest activity by international agreement. If you hear someone calling "CQ Contest" on 10 MHz, they are operating outside the convention.

> [INFO] **7F2:** Contest operation is **not permitted** on WARC bands (10 MHz / 18 MHz / 24 MHz) or on 5 MHz. These bands are contest-free by international agreement. The 10 MHz (30 m) band also has no SSB allocation.

### Working Contests as a Non-Participant

You do not need to enter a contest to work contest stations. However:

- Keep exchanges brief — contest stations are looking for quick contacts, not conversation
- Give your callsign clearly once and wait — do not repeat it multiple times
- Accept that if a calling station asks for only certain regions ("Europe only") you may be passed over
- Do not slow down a pileup by asking for a signal report beyond the standard contest exchange

### International Callsign Prefixes

The RSGB Intermediate syllabus includes a short list of country prefixes you are expected to know:

| Prefix | Country |
|---|---|
| EI | Eire (Republic of Ireland) |
| F | France |
| I | Italy |
| JA | Japan |
| PA | Netherlands |
| VE | Canada |
| VK | Australia |
| W | United States of America |
| ZL | New Zealand |

These appear in both contest and DX operating — knowing whether a callsign is from Japan or Canada helps you assess propagation and whether a contact adds a new entity to your log.

---

## 7G — Log-keeping

### Legal Position (Cross-Reference to §1)

**Log-keeping is no longer a condition of the UK amateur licence** as of the 2024 licence update. Previously, operators were required to keep a log of transmissions. That requirement has been removed.

> [INFO] **7G1, 7G2, 7G3, 7G4:** Log-keeping is no longer legally required under the 2024 UK amateur licence. However, it remains strongly recommended: a log provides evidence in interference disputes (7G1), supports QSL card matching (7G2), enables award applications (7G3), and is required for contest submission (7G4). Use UTC throughout.

### Why You Should Still Keep a Log

The RSGB Ch. 8 manual puts it clearly: a logbook is very useful when an interference problem arises. If a neighbour complains that their TV was disrupted at 7 pm on a Saturday, your log can immediately show whether you were transmitting at that time — and if so, on what frequency and mode. Without a log, you cannot prove you were not the cause.

Logs are also used for:

| Use | Detail |
|---|---|
| **QSL matching** | Confirm the date/time/band of a contact to issue or verify a QSL card |
| **Awards** | DXCC, IOTA, RSGB Counties Award, WAE — all require log evidence of contacts with qualifying entities |
| **Contest submission** | Your log is uploaded as proof of your contacts after the contest |
| **Interference disputes** | If a formal complaint reaches Ofcom, both parties may be asked to produce logs; comparable logs can prove or disprove cause |

### What to Log

A minimal useful log entry:

```
Date  | UTC   | Band  | Mode | My callsign | Other callsign | RST sent | RST rcvd | Notes
2026-09-12 | 14:23 | 14 MHz | SSB | M0XYZ | G4ABC | 59 | 57 | QSB on path
```

Minimum fields: **date, time (UTC), frequency or band, mode, other station's callsign, RST exchanged**.

Always use **UTC** (Coordinated Universal Time), not local time. Amateur radio log times are universal — confusion about whether a time was BST or UTC has invalidated QSL card claims.

### Logging Tools

| Type | Examples |
|---|---|
| Paper log | Standard exercise book; RSGB log books; FT-log pads |
| PC logging | Log4OM, CQRLOG (Linux), N1MM+ (contests), DXKeeper |
| Transceiver logging | Many modern rigs log contacts internally; export to ADIF |

All these tools export to **ADIF** (Amateur Data Interchange Format), the standard interchange format for log files — used by Logbook of the World, RSGB Bureau, and contest submission systems.

---

## 7H — Good Radio Housekeeping

*This section covers station layout, ergonomics, and equipment care. EMC-related housekeeping (ferrite chokes, mains filters, low-pass filters, harmonic checking) is fully covered in §6 and cross-referenced here rather than repeated.*

### Station Layout

A well-laid-out shack runs better and causes less interference. The RSGB Fig 8.2 diagram shows the recommended signal path:

```
Mains → Power supply → Transmitter/receiver → SWR meter → ATU → Feeder → Antenna
                ↑                    ↑
         Ferrite ring          Screened microphone cable
         on mains lead         Screened audio cable
```

Key principles:
- Keep RF cables (coax) away from audio cables (microphone, headphone, speaker leads). Running them parallel for long distances creates coupling that puts RF into the audio chain.
- Use good quality coaxial cable with correctly fitted connectors — a poor PL-259 joint is a source of intermittent high SWR and RF leakage.
- Label every cable. When something goes wrong at an awkward time, you will thank yourself.
- Keep the SWR meter accessible — checking SWR on each band before a session takes two minutes and catches antenna problems before they escalate.

### Antenna Placement

> [WARNING] **Do not install antennas in the loft.** Wiring a loft antenna means running RF feed cable throughout the house. RF from the antenna couples into the house mains wiring and data cables throughout the building. The main TV reception antenna is typically also in the loft — you will have direct coupling into it. There are also safety concerns from operating an antenna at close quarters. Loft antennas should be used as a last resort and at low power only.

The RSGB guidance (Ch. 8): keep antennas as far from the house as possible. Balanced antennas (dipoles) are less likely to cause interference than vertical antennas used without a good earth. If you must use a vertical, it needs a solid RF earth connection — radials driven into the ground or laid on the surface.

### Earthing — Two Earths

Your shack needs **two separate earth connections** for different purposes:

| Earth type | Purpose | Notes |
|---|---|---|
| **Mains safety earth** | Protect against electric shock if a fault develops in equipment | Part of the 3-pin mains plug. **Never remove it.** All shack equipment must be earthed this way unless double-insulated. |
| **RF earth** | Divert RF current to ground, reducing RF on metalwork and mains leads | Earth rods (copper-clad steel, ~2 m long) driven into the ground near the shack, connected directly to the transmitter and ATU with a heavy-gauge cable |

The double-insulated symbol (a small square inside a larger square) indicates equipment with no exposed metalwork that does not require an RF earth for safety, but still takes its mains safety earth through the mains plug.

> [WARNING] Confusing the two earths can cause problems: using only an RF earth without a proper mains safety earth is a safety hazard. Using only a mains safety earth without an RF earth can result in RF on the mains cabling. You need both.

*See §6D for the full detail on RF earths and their role in reducing interference.*

### Ergonomics

A station you are comfortable in is a station you will spend more time in:
- **Seated operating position** — a proper chair at desk height for the rig; avoid hunching over a low table
- **Microphone placement** — at a natural speaking distance; too close causes distortion and popping, too far drops your audio level
- **CW paddle/key** — at a height where your forearm rests level, wrist relaxed. A tense wrist causes fatigue and poor keying within an hour.
- **Monitor angle** — logging software and digital mode displays should be readable without craning your neck

### Regular Equipment Checks

Brief pre-session checks:

- **SWR on each band you plan to use** — a change from last time signals a connector failure, water ingress, or antenna damage
- **Connector cleanliness** — SO-239 and BNC sockets accumulate oxidation; a corroded joint shows as intermittent high SWR and increased noise floor
- **ALC level** — if running digital modes, check the ALC is not being driven hard (barely-moving is correct)
- **PTT function** — confirm you are breaking squelch / that the TX is actually transmitting before sending a long CQ

---

## 7I — Self-Check

Test yourself before moving on. Each question has one correct answer.

<details>
<summary><strong>Q1: The IARU band plan for the UK falls under which ITU region?</strong></summary>

**Region 1.** IARU Region 1 covers Europe, Africa, the Middle East, and Northern Asia. The UK follows the IARU Region 1 band plan, published annually in the RSGB's *RadCom*.

</details>

<details>
<summary><strong>Q2: What is the FM calling frequency on the 2 m band?</strong></summary>

**145.500 MHz.** After establishing contact, operators move off the calling frequency (QSY) to a working frequency so the calling channel stays clear for others.

</details>

<details>
<summary><strong>Q3: What does "DX up 5" mean?</strong></summary>

**The DX station is transmitting on its published frequency and listening 5 kHz above it.** All calling stations should transmit 5 kHz higher than the DX station's transmit frequency. Never transmit on the DX station's frequency when split is in use.

</details>

<details>
<summary><strong>Q4: Why are contests not permitted on 10 MHz?</strong></summary>

**10 MHz (30 m) is a WARC band.** The WARC bands (10 MHz, 18 MHz, 24 MHz) were allocated to amateurs in 1979 on the condition that they remain free from contest activity. The 5 MHz band carries the same convention. Additionally, 10 MHz has no SSB segment in its band plan — CW and narrow-band digital modes only.

</details>

<details>
<summary><strong>Q5: Which Q-code means "I am experiencing fading"?</strong></summary>

**QSB** — QSB means fading (the signal is varying in strength). Other common Q-codes: QRM (man-made interference), QRN (natural noise), QRO (high power), QRP (low power), QRT (closing down), QSL (I confirm), QSO (a contact), QSY (change frequency), QTH (location/home station).

</details>

<details>
<summary><strong>Q6: Is log-keeping required under the 2024 UK amateur licence?</strong></summary>

**No.** Log-keeping was removed as a licence condition in the 2024 update. However, keeping a log is strongly recommended for interference dispute evidence, QSL matching, and award applications.

</details>

<details>
<summary><strong>Q7: Your shack requires two earth connections. What are they and what does each do?</strong></summary>

**Mains safety earth** — part of the 3-pin mains connection on all shack equipment. Protects against electric shock if a fault develops. Never remove it.

**RF earth** — copper earth rods (~2 m long) driven into the ground near the shack, connected to the transmitter and ATU with heavy-gauge cable. Diverts RF current away from the mains cabling and metalwork, reducing interference.

</details>

<details>
<summary><strong>Q8: A DX station is transmitting on 14.195 MHz and announces "QRZ, up 3 to 5". Where should you transmit your callsign?</strong></summary>

**Somewhere between 14.198 MHz and 14.200 MHz.** "Up 3 to 5" means the DX station is listening 3 to 5 kHz above its transmit frequency. Spreading calls across a range helps the DX operator pick out individual callsigns in a large pileup.

</details>

---

## Interactive Suggestions (for INTERACTIVES batch)

1. **Interactive band-plan viewer** — HF/VHF/UHF UK amateur band plan with colour-coded mode segments. Filter by band; hover a segment to see what modes are permitted and any special restrictions (beacon, satellite, contest-free). The `station-monitor.html` interactive listed in the cross-reference map may serve a related purpose.

2. **CQ call generator** — Enter your callsign; the tool generates a formatted CQ call with NATO phonetics and station information. Doubles as a phonetics trainer.

3. **QSO pro-forma trainer** — Step through a typical SSB contact exchange from CQ to 73, with optional DX and contest variants. Learner types or selects each step; trainer confirms correct phrasing.

---

*Section 7 complete. Handoff to LessonsBuilder (Frontend) for HTML build.*
