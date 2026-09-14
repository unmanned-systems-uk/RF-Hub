# Section 2: Operating Techniques (Full)

<!-- Exam weight: ~6–8% (~3–4/46 questions) -->
<!-- Sub-sections: 2A–2D -->
<!-- Syllabus refs: 2A1, 2B1, 2C1, 2D1 (all [VERIFY] — not yet confirmed from PDF; TBD in SYLLABUS-REFS.md) -->
<!-- RSGB source: Full Licence Manual 3rd Ed, Chapter 2 (pp 11–12) -->
<!-- New at Full vs Intermediate: 472 kHz and 5 MHz specific conditions; split/pileup mechanics; band plans in other countries; tiered licence access constraints; /AM suffix (Feb 2024); supervising unlicensed operators; special event stations (NoV/GB0) -->

Chapter 2 of the RSGB Full Licence Manual is deliberately short — one and a half pages — because most everyday operating practice was covered at Foundation and Intermediate level. For the exam, the new material falls into four areas: **operating on the 472 kHz and 5 MHz bands** (both have specific restrictions not applicable elsewhere); **working split frequency in a pileup**; **band plans when operating abroad or contacting overseas stations**; and **callsign suffixes, special event stations, and supervising unlicensed operators**.

The study page is divided into those four areas, each as a lettered section. Because the RSGB chapter is thin, each required section is followed by a **Going Deeper** block covering practical operating skills that are not directly examinable but make the content immediately useful on air.

---

## 2A — 472 kHz and 5 MHz Operating Conditions

### 2A.1 — The 472–479 kHz Band ("630 metres")

The 472–479 kHz band is allocated to amateur radio on a **secondary basis**, with maritime mobile as the primary user. The amateur allocation at this frequency is unusual in several ways:

- **Power limit: 5 W EIRP** as the general maximum
- **Reduced limit: 1 W EIRP** when your station is within 800 km of certain neighbouring countries that operate specific radio services on these frequencies [VERIFY current list against Ofcom schedule]
- The wavelength at 472 kHz is approximately **630 metres** — a half-wave antenna would need to be over 300 m long, and a quarter-wave vertical 157 m. A typical amateur antenna operating on this band will be drastically shorter than a resonant length and will be very inefficient. You **must calculate your actual EIRP** (transmitter power × feed efficiency × antenna gain) rather than assuming your EIRP equals your transmitter output power; the antenna's efficiency losses may reduce EIRP considerably, keeping you within the limit even at moderate transmitter output
- The 1 W EIRP condition within 800 km of specified countries is **geographic**, not reciprocal — it applies regardless of whether that country's stations are actually active on the frequency

> [INFO] **2A1 [VERIFY]:** 472–479 kHz — secondary allocation; maritime mobile primary. 5 W EIRP maximum; 1 W EIRP within 800 km of specified countries. Wavelength ~630 m — typical amateur antennas will be highly inefficient; calculate EIRP from actual antenna system, do not assume it equals transmitter output.

### 2A.2 — The 5 MHz Band ("60 metres") in Detail

The 5 MHz allocation is unlike any other amateur band. Rather than a continuous block, it consists of **individual narrow channel slots** spread across the range 5.2585–5.4065 MHz, with the Ministry of Defence (MoD) as the **primary user** and amateur radio on a strict **secondary non-interference basis**. The MoD will notice if you transmit outside your allocated slot — the edges of slots matter.

**Frequency slots and mode guidance (Band Plan — see Reference Booklet EX309) [VERIFY]:**
- Lower end of the slots: CW recommended, maximum bandwidth 200 Hz; also used for QRSS (very slow-speed telegraphy, used for long-distance propagation experiments at very low power)
- Upper end of the slots: digital modes permitted, bandwidth up to 500 Hz; all transmitted carriers or tones for a digital mode must lie wholly within the slot
- AM and standard CW are explicitly permitted
- SSB voice is the most common mode used in the slots (slot widths of 3–12.5 kHz accommodate SSB comfortably)

**Power and antenna limits [VERIFY against current schedule]:**
- Maximum **200 W EIRP** (see also <a href="section-1-licence-conditions.html#1h--schedule-1-callsigns-and-operating-conditions-1h1" target="_blank">§1H — Schedule 1 conditions</a>, which covers the 5 MHz EIRP and antenna height limits in the licence context)
- Maximum transmitter output: **100 W PEP**
- Antenna: **≤20 m above ground level**

**Contact with military personnel:**
The MoD's position as primary user on 5 MHz means there is a practical exception to the normal restriction on communicating with non-amateur stations: **contact with military personnel and military cadets is permitted on the 5 MHz band**. Military stations use their own callsigns and procedures. The exception recognises that 5 MHz is a military band on which amateurs are guests, and military users legitimately operating there may want to exchange communications with amateur stations.

**Band Plan stability:**
The 5 MHz band plan is subject to change as the MoD's use of the band evolves. The Reference Booklet (EX309) contains the current version. **Do not memorise specific slot frequencies for the exam — know that slots exist, know the mode and bandwidth guidance, and look up the actual slot list from EX309 or the RSGB website before operating.**

> [WARNING] 5 MHz is not a conventional HF band. Transmitting outside your allocated slot — even by a small amount — may interfere with a primary MoD user. Stay within the slot boundaries. Check the current band plan before each session if you are new to the band. [VERIFY] all slot frequencies and conditions against the current Ofcom schedule and Reference Booklet before operating.

> [INFO] **2A1 [VERIFY]:** 5 MHz slots: 5.2585–5.4065 MHz range; MoD primary, amateurs secondary; 200 W EIRP / 100 W PEP; antenna ≤20 m; CW max 200 Hz / digital max 500 Hz — all tones must be within the slot; AM and CW permitted; contact with military and military cadets allowed; band plan in EX309, subject to change.

<details>
<summary><strong>Going Deeper — Operating on 472 kHz and 5 MHz in Practice</strong></summary>

**630 m (472 kHz) in practice:**
The 630 m band attracts operators interested in MF propagation, including transatlantic paths using low-power digital modes (particularly WSPR and JT9). At 5 W EIRP the band is quiet enough that digital modes can decode signals far below the noise floor. A typical setup uses an ATU with a shortened vertical (with loading coil) or an end-fed wire run as low as roof height. The antenna efficiency may be as low as 1–5%, so even 5 W EIRP may require 100 W or more into the antenna system. Calculate carefully.

**5 MHz in practice:**
5 MHz behaves like classic 60 m HF: it is particularly useful for reliable medium-distance communication (300–2000 km) and often provides a path when 40 m and 80 m are congested or affected by poor conditions. It is popular with RAYNET and emergency communication groups for regional coverage. Key operating tips:

- Identify the slot centre frequency and set your rig's carrier to place your SSB signal entirely within the slot
- Modern rigs with narrow DSP filters make it easy to display your signal's bandwidth on a panadapter — use this to verify you are within the slot
- QRSS stations transmit at very low speed (3-second dots and longer) to achieve propagation over paths where normal CW would be inaudible; they use software (Argo, WSPR) to decode visually on a spectrogram display

</details>

---

## 2B — Pileups and Operating Split

### What a Pileup Is

When a rare DX station (operating from a seldom-activated country or island) comes on the air, large numbers of operators want to make contact. The result is a **pileup**: dozens or hundreds of stations calling simultaneously. The DX station cannot pick individual calls from a solid wall of signals all on the same frequency, so it uses **split frequency operation**.

### How Split Operation Works

The DX station **transmits on its published (advertised) frequency** and **listens 5–10 kHz higher in the band** (sometimes lower on bands where band plans require it, but upward is the convention on most HF bands). The DX station announces this by saying, for example, "Listening 5 to 10" or "Up 5", meaning callers should transmit somewhere between 5 and 10 kHz above the DX transmit frequency.

**For the caller, the procedure is:**
1. Note the DX station's transmit frequency — this is where you listen to the DX
2. Set your **transmit VFO (VFO-B or "split" mode)** to a frequency in the listening range — e.g. 5–10 kHz above the DX transmit
3. Listen to the DX to work out exactly where it is picking up callers — if it replies to a station, can you tell roughly where in the listening range that station was? Adjust accordingly
4. Call briefly and precisely when the DX invites calls — not continuously, not over the DX transmit frequency
5. If the DX does not hear you and keeps working stations you cannot hear, you may be outside the portion of the listening range it is currently favouring — move your transmit frequency up or down within the range

**What not to do:**
- Do **not** transmit on the DX station's transmit frequency — you will be calling where nobody is listening, and you will annoy every other operator who is trying to listen to the DX
- Do not transmit repeatedly without pausing to listen
- Do not call if the DX is mid-QSO with someone else

> [INFO] **2B1 [VERIFY]:** Pileup split operation: DX transmits on published frequency, listens 5–10 kHz up (or as announced). Caller sets transmit VFO into the listening range. Do not call on DX transmit frequency. Listen to identify where DX is picking up callers, then position transmit frequency accordingly.

**The two-rig split:**
If you have two transceivers and want to transmit on one while monitoring the DX on the other, be aware that transmitting on one rig while the other is connected to the same antenna (or an adjacent antenna) may couple significant RF into the second rig's front end. In most cases you will need to ensure the antennas are separated, or that one rig is **remotely operated** and its antenna is at a different location. The RSGB manual notes this as a practical consideration — not an exam point, but worth knowing before you try it.

> [INFO] **2B1 [VERIFY]:** Two-rig split: transmitting on one rig with the other listening on a nearby frequency can damage or desensitise the second rig's receiver unless the antennas are adequately separated or one station is remotely operated.

<details>
<summary><strong>Going Deeper — Pileup Discipline and Technique</strong></summary>

Working a DX pileup efficiently is a skill developed through patient listening. Here are the practical principles:

**Before calling:**
- Spend at least five minutes listening. How fast is the DX working? Is it working stations by partial call suffix (e.g. "only stations ending in 3")? Is it moving systematically across the listening range, or staying in a fixed spot? Are the stations it is replying to audible to you, or is there a path advantage you can't overcome?

**When to call:**
- Call at the beginning of the DX's listening period (immediately after it sends a call or "QRZ"), not in the middle of an exchange already in progress
- Give your callsign once — not twice, not phonetically unless specifically requested, not prefixed with the DX callsign. Simply send your callsign clearly, once
- CW pileups: send at the DX station's speed, or slightly slower; much faster or slower stands out badly

**Reading the pileup:**
- If you hear the DX reply "M0 — " it is looking for a UK Full-class M0 station. This tells you something about who is getting through
- If you cannot hear any of the responding stations and the DX keeps replying to calls you don't copy, your antenna or propagation to the DX is marginal — patience is required
- Some DX stations use a **keyer split search**: they methodically move across the listening range 1 kHz at a time. Wait until they are in your portion of the range before calling

**After the QSO:**
- Log immediately: UTC time, frequency, callsign, mode, and the exchange you sent and received
- Do not call again after completing a contact — it is unsportsmanlike and wastes other operators' time
- Post the DX spot on a DX cluster (e.g. DX Summit, DX Watch) if it has not already been spotted — this helps other operators find it

</details>

---

## 2C — Band Plans in Other Countries

### IARU and Regional Constraints

The **IARU** (International Amateur Radio Union) attempts to harmonise amateur band plans across its three regions (which align with the ITU regions covered in <a href="section-1-licence-conditions.html#1f--itu-radio-regions-1f2" target="_blank">§1F — ITU Radio Regions</a>). However, IARU's band plans are **recommendations** — individual national administrations make the final allocation decisions within the framework of the ITU Radio Regulations. This means band plans differ between countries, and activity that is standard in the UK may not be permitted elsewhere.

> [INFO] **2C1 [VERIFY]:** IARU harmonises band plans across regions 1–3 but national administrations and ITU regional allocations constrain what is actually permitted in each country. When operating abroad, the host country's band plan and licence conditions take precedence — they may also be a licence requirement under the terms of the permission you are using to operate there (e.g. T/R 61-01: see <a href="section-1-licence-conditions.html#1e--international-operation-cept-tr-61-01-and-harec-1f1" target="_blank">§1E — CEPT T/R 61-01</a>).

### Tiered Licence Structures and Frequency Access

Many countries operate a tiered licence system similar to the UK (Foundation → Intermediate → Full). A lower-tier licensee in another country may not have access to all bands or modes. This creates a practical situation: you may be able to hear a station on a particular frequency, but they may not be permitted to reply on that same frequency under their licence tier.

The key principle: **just because you can speak to someone on a frequency does not mean they can legally reply to you on the same frequency**. If an overseas station with restricted access wants to contact a UK station, they will know their own frequency restrictions and will either indicate where they are listening (at a frequency within their permitted range) or will initiate the contact from a frequency that suits both parties.

### Listening Outside the UK Schedule

You may hear amateur transmissions from overseas stations on frequencies that fall outside the UK licence schedule — either because those frequencies are allocated to amateur radio in their ITU region but not in Region 1, or because their national allocation differs from the UK's.

It is **perfectly legitimate to listen** to such transmissions — the licence imposes no restriction on reception. You may **reply** to such a station, but you must **reply on a frequency within the UK schedule**. If the overseas station wants to make contact with you specifically (e.g. they are running a special event or are a rare DX entity), they will be aware of the UK frequency schedule and will indicate a frequency where they can be heard — within your permitted range.

> [INFO] **2C1 [VERIFY]:** You may listen to amateur transmissions on any frequency. You may only transmit on frequencies within your UK licence schedule. When an overseas station wishes to contact UK stations, they will choose a frequency within the UK schedule or indicate their listening frequency. Tiered licences in other countries limit some operators' reply frequencies — be aware of this when running a net or contest.

<details>
<summary><strong>Going Deeper — Net Procedures</strong></summary>

A **net** is a scheduled on-air meeting of a group of stations, usually on a fixed frequency at a fixed time. Nets use a **net control station (NCS)** to manage traffic and ensure orderly communication.

**Checking into a net:**
- Listen before transmitting — if the net is already in progress, wait for the NCS to invite check-ins
- When invited, give your callsign (phonetically on voice nets) clearly and once
- Wait to be acknowledged by the NCS before transmitting further
- If you have traffic (a message to pass or information to share), indicate this when checking in: e.g. "M0ABC with one item of traffic"

**What net control does:**
- Opens the net at the scheduled time with a brief statement of purpose and frequency
- Takes check-ins from all stations, acknowledging each in turn
- Manages the traffic flow — allocating time slots for stations with messages
- Maintains a list of all stations checked in
- Closes the net cleanly when business is complete

**HF nets and propagation:**
HF nets require all participants to be able to hear each other AND net control. On a long-distance HF net this can be difficult — you may hear the NCS perfectly but not hear other check-ins. If you can't hear everyone, you can still participate but should be cautious about doubling (transmitting at the same time as another station you can't hear). Reporting that you "cannot copy the other stations" helps the NCS understand the situation.

**RAYNET and emergency nets:**
RAYNET (Radio Amateurs' Emergency Network) nets practice more formal message-passing procedures, including PROFORMA message handling. Knowing net procedure is useful background for Full licence candidates interested in emergency communication. Cross-reference: supervising unlicensed operators (§2D) is directly relevant here — a RAYNET incident may involve supervised unlicensed operators.

</details>

---

## 2D — Callsign Suffixes, Special Event Stations, and Supervising Unlicensed Operators

### 2D.1 — Callsign Suffixes

The following suffixes may be appended to your callsign to indicate operating status [VERIFY — note that these suffixes are not formally defined in the current licence text itself, though they remain in use by convention and are referenced in RSGB operating guidance]:

| Suffix | Meaning | Notes |
|--------|---------|-------|
| **/A** | Alternative address | Operating from registered alternative premises (e.g. a second home registered on your licence) |
| **/M** | Mobile | Moving vehicle, or on foot (updated post-2024 licence revision to include pedestrian mobile) |
| **/P** | Portable | Fixed temporary site not being the main or alternative address (e.g. a hilltop, field day site, contest location) |
| **/MM** | Maritime mobile | Operating at sea — particularly relevant in international waters where the flag-state callsign rules apply |
| **/AM** | Aeronautical mobile | Operating from an aircraft — introduced in the February 2024 licence revision [VERIFY] |

**Format examples:** `M0ABC/P`, `G4XYZ/M`, `M8DEF/A`

The suffix follows the callsign. On CW, the separator is typically sent as a fraction bar (DN, "stroke"). On voice, you say "M zero ABC stroke portable" or "M zero ABC portable".

> [INFO] **2D1 [VERIFY]:** Callsign suffixes: /A = alternative premises, /M = mobile (incl. on foot post-2024), /P = portable (fixed temporary site), /MM = maritime mobile, /AM = aeronautical mobile (Feb 2024). Suffixes are operational convention — [VERIFY] precise definitions against current licence text and RSGB operating guidance, as the licence document itself may not formally list them.

### 2D.2 — Special Event Stations

A **special event station** is a temporary amateur station set up to mark a specific occasion — a heritage railway event, a historical anniversary, a public demonstration of amateur radio, or an RSGB contest activation. Special event stations are issued **short, memorable callsigns** (often in the `GB0`, `GB2`, `GB4`, `GB6`, or `GB75` series, depending on the nature of the event) by Ofcom through a **Notice of Variation (NoV)** attached to the organising amateur's licence.

**Key points:**
- The special event callsign is **signed on air** as the station's callsign during the event
- The operating licensee (Full licence holder) remains **legally responsible** for all transmissions under the special event callsign at all times
- The Full licence holder does not abandon their own callsign — they are operating under the NoV which temporarily authorises the use of the event callsign
- A special event station is not itself a separate licence — it is a variation of an existing Full licence

> [INFO] **2D1 [VERIFY]:** Special event stations: issued via NoV from Ofcom, typically GB0/GB2 series callsigns. The Full licensee operating the station is legally responsible for all transmissions. The NoV is a variation of an existing Full licence, not a separate licence.

### 2D.3 — Supervising Unlicensed Operators

A **Full licence holder** may allow an unlicensed person to operate their station under direct supervision. This applies to trainees, family members, visitors, or anyone else who does not hold an amateur licence.

**The rules:**

- The unlicensed operator uses the **Full licensee's callsign** — not a special trainee callsign, and not any other designator
- The Full licensee must be **present and in direct supervision** of the transmission (or be in remote control with the ability to stop transmissions immediately — cross-ref: <a href="section-1-licence-conditions.html#1d--remote-control-operation-1e1" target="_blank">§1D — Remote Control</a>)
- The Full licensee is **legally responsible for every transmission** made by the unlicensed person — it is the Full licensee's licence at risk
- "Supervision" means active oversight — not simply being in the same building while the trainee operates unmonitored
- The exam treats this as a **licensing matter** (the Full licensee's obligations, not the trainee's rights): the question in an exam context is always "what are the Full licensee's responsibilities?"

> [WARNING] The Full licence holder is personally and legally responsible for all transmissions made by a supervised unlicensed operator, exactly as if they had made those transmissions themselves. The licence is the Full licensee's — if a breach occurs during supervised operation, the Full licensee faces the regulatory consequences.

> [INFO] **2D1 [VERIFY]:** Supervising unlicensed operators: Full licensee may permit unlicensed persons to operate; unlicensed person uses Full licensee's callsign; Full licensee is legally responsible for all transmissions; direct supervision required (or remote-stop capability); this is a licensing obligation of the Full licensee.

<details>
<summary><strong>Going Deeper — Digital Mode Waterfall Discipline</strong></summary>

Modern digital modes (FT8, FT4, WSPR, JS8Call, PSK31, RTTY) are operated by selecting a **dial frequency** and then choosing a sub-frequency (audio tone offset) within the audio passband. The **waterfall display** shows the full audio passband as a spectrum — you can see which frequencies within the passband are in use and choose a clear one.

**Key principles:**

- **Do not transmit over another station.** If a frequency on the waterfall is occupied, choose another. FT8 uses 50 Hz tone spacing — even moving 50 Hz away from an active signal is sufficient
- **Respect the band plan sub-band.** FT8 on 40 m has a gentlemen's agreement around 7.074 MHz. Transmitting RTTY in the FT8 sub-band (and vice versa) causes interference and frustration. Check the IARU Region 1 band plan for the agreed sub-band allocations
- **WSPR:** Set power to the minimum needed. WSPR transmitters that run at maximum power crowd out weaker stations that could otherwise be decoded. The point of WSPR is to test propagation with very low power
- **5 MHz digital modes:** As noted in §2A, all tones must be within the licensed slot. On a typical SSB radio, the slot appears in your audio passband starting at the carrier frequency plus the lower audio tone frequency. Ensure the upper tone of a multi-tone mode does not extend outside the slot. Use a panadapter or waterfall to verify

**FT8 operating practice:**
FT8 sequences are 15 seconds long. You must transmit in synchronisation with the UTC clock (even seconds for one side, odd seconds for the other). WSJT-X software handles this automatically. Never transmit when your software shows you are in the wrong half of the sequence — you will collide with other stations.

</details>

<details>
<summary><strong>Going Deeper — Contest Exchange Mechanics</strong></summary>

Amateur radio contests exchange brief, structured information to verify and count contacts. Understanding the exchange format is essential for efficient contesting.

**Typical exchange elements:**

| Element | Example | Used in |
|---------|---------|---------|
| Signal report (RST) | 59 (voice) / 599 (CW) | Almost all contests |
| Serial number | 001, 002… | Most HF contests (CQ WW, RSGB HF) |
| CQ zone | 14 (UK = zone 14) | CQ World Wide |
| ITU zone | 27 (UK = zone 27) | IARU HF Championship |
| DXCC entity / country | ENG, G | Some national contests |
| Grid square | IO91 | VHF/UHF contests |
| Postcode district | SW1, M60 | RSGB club championship |

**A typical SSB contest exchange (CQ WW):**
- DX station: "CQ Contest, X2YZ"
- You: "M0ABC"
- DX: "M0ABC, 59, 14" (report, zone)
- You: "59, 14, thanks, 73"
- Total air time: under 10 seconds

**CW is faster:** CW exchanges are abbreviated further — "TU M0ABC 599 14" and you reply "599 14 TU". Many operators use computer-keyed macros that send pre-set messages at the press of a function key.

**Logging during a contest:**
All contacts go in the contest log with UTC time, band, mode, callsign, and the sent and received exchange. Contest logging software (N1MM+, YFKLOG, MSHV) handles duplicate checking (ensuring you do not work the same station twice in the same band/mode) and calculates your score in real time.

**Cross-reference:** Contest exchanges at Full level extend beyond Intermediate — you are expected to understand score multipliers (DXCC entities, zones, or districts) and the difference between contest-valid modes (CW, SSB, digital per the rules) and non-valid modes. Full licence holders will typically have a wider band access for contesting than Intermediate or Foundation licence holders.

</details>

<details>
<summary><strong>Going Deeper — QSL Cards, LoTW, and Award Confirmation</strong></summary>

A **QSL card** is a written confirmation of a contact, traditionally sent by post. The name comes from the Q-code QSL ("I acknowledge receipt"). For award applications, confirmed contacts are the currency — whether you need 100 countries (DXCC), a clean sweep of US states (WAS), or UK counties (RSGB Counties Award), you need proof that each contact happened.

**Paper QSL:**
The traditional route is to send a QSL card (via the RSGB bureau for overseas contacts, or direct) and receive one in return. Bureau cards are collected and distributed by national societies — cheap but slow (weeks to months). Direct QSL (stamped addressed envelope or return postage) is faster but costs money.

**LoTW (Logbook of The World):**
ARRL's LoTW system digitally signs log uploads using a cryptographic certificate tied to your callsign. When two stations both upload a contact and it matches, the confirmation is automatically awarded. LoTW is the primary confirmation method for DXCC and most major ARRL awards. It is free for basic use. Registering requires sending a copy of your licence to ARRL, who issue the signing certificate.

**eQSL:**
eQSL.cc provides a simpler electronic QSL system (no cryptographic signing, but "Authenticity Guaranteed" tier adds validation). Accepted by some awards but not DXCC. Useful for casual confirmation and collecting attractive digital cards.

**For Full licence candidates:** Knowing the difference between LoTW and eQSL is useful general knowledge rather than an exam topic. The exam is more likely to ask about the **log-keeping obligations** in the licence and what must be recorded, rather than the specific QSL confirmation systems.

</details>

---

## 2E — Self-Check Questions

<details>
<summary><strong>Q1: You are operating on 472 kHz with 10 W into an antenna that has an efficiency of 10%. What is your EIRP, and is this within the band limit?</strong></summary>

10 W × 10% efficiency = **1 W radiated power**. If the antenna has no gain over an isotropic reference, EIRP = 1 W. This is within the general 5 W EIRP limit — but if your station is within 800 km of a specified neighbouring country, the limit is 1 W EIRP, which means 1 W is exactly at (or at) the limit. [VERIFY] the current country list against Ofcom schedule. The key lesson: at 472 kHz you must calculate actual EIRP from the antenna system efficiency, not assume EIRP equals transmitter output.

</details>

<details>
<summary><strong>Q2: A DX station announces it is listening "5 to 10 up". You set your transmit VFO to 5 kHz above the DX transmit frequency and call repeatedly but get no reply. What should you consider?</strong></summary>

The DX station is listening across a 5–10 kHz range, not fixed at 5 kHz above. If you are not getting through, try moving your transmit frequency toward the upper part of the range (e.g. 7–10 kHz up). Also: listen to where the DX stations it *does* reply to are calling from — this tells you which part of the listening range is working. You could also be experiencing a path disadvantage (propagation, power) rather than a frequency issue. Be patient, adjust, and listen more than you transmit.

</details>

<details>
<summary><strong>Q3: You hear an overseas amateur transmitting on a frequency that is not in the UK licence schedule. Can you reply to them, and if so, on which frequency?</strong></summary>

Yes, you may listen to any amateur transmission. You may **reply only on a frequency within your UK licence schedule**. You cannot transmit outside the UK schedule to match their frequency. If the overseas station wants to make contact with UK stations, they will either indicate a frequency where they are listening that falls within the UK schedule, or they will choose a frequency that accommodates both parties.

</details>

<details>
<summary><strong>Q4: A digital mode you want to use on 5 MHz has two tones, 400 Hz apart, with the lower tone at 500 Hz audio. The slot you are operating in is 3 kHz wide. Your USB carrier frequency is set to the lower edge of the slot. Are all your tones within the slot?</strong></summary>

Lower tone: carrier + 500 Hz. Upper tone: carrier + 500 Hz + 400 Hz = carrier + 900 Hz. Both tones are within 900 Hz above the carrier. Since the slot is 3 kHz wide, both tones are comfortably within the slot. However, check that your **carrier frequency is set correctly** to the slot's reference — USB dial frequency must be such that the audio-offset tones fall within the slot boundaries, not merely that the audio offsets are internally consistent. [VERIFY] slot boundaries and carrier reference convention against current band plan and your rig's documentation.

</details>

<details>
<summary><strong>Q5: An unlicensed friend is operating your Full licence station under your supervision. They make a transmission that accidentally contains inappropriate language. Who is responsible, and what are the consequences?</strong></summary>

**You, the Full licence holder**, are legally responsible. The unlicensed operator used your callsign under your licence and under your supervision. You bear full responsibility for every transmission made from your station during supervised operation, as if you had made those transmissions yourself. The consequences could include a formal warning, licence variation, or in serious cases, licence revocation — all applied to **your** licence, not the unlicensed operator's (who has no licence to lose).

</details>

<details>
<summary><strong>Q6: You want to operate your station from a hilltop for a weekend activation. Which suffix should you use, and where should you use it?</strong></summary>

Use **/P** (portable) — you are at a fixed temporary site that is neither your main station address nor a registered alternative address. Append it to your callsign when identifying: e.g. "M0ABC stroke portable" or "M0ABC/P" on CW. If you were in a moving vehicle, you would use **/M**. If at a registered second address, **/A**. [VERIFY] current licence wording for the precise definition of when /P applies vs /A.

</details>

<details>
<summary><strong>Q7: What is a Notice of Variation (NoV) in the context of special event stations, and who issues it?</strong></summary>

A **Notice of Variation (NoV)** is a document issued by **Ofcom** that modifies the terms of an existing Full amateur licence to permit specific additional activity — in this case, the use of a special event callsign (e.g. GB0XXX) during a defined period and for a defined purpose. It is attached to the organising Full licence holder's licence. The Full licence holder operating under the NoV remains legally responsible for all transmissions under the special event callsign.

</details>

<details>
<summary><strong>Q8: On the 5 MHz band, you want to make contact with a military cadet who is using a 5 MHz military station. Is this permitted?</strong></summary>

Yes. Contact with military personnel and military cadets is explicitly permitted on the 5 MHz band, recognising that the MoD is the primary user of the band and military stations legitimately operate there. The military station will use its own military callsigns and procedures. You must still operate within your licensed slot and comply with all other 5 MHz conditions. [VERIFY] against current Ofcom schedule and Reference Booklet EX309.

</details>

---

## 2F — Dive Deeper: Beacons, Mode Selection, and Repeater Etiquette

*Non-examinable at Full licence level. This section covers practical operating knowledge that makes the required content immediately useful on air.*

<details>
<summary><strong>Expand — Beacon networks, mode and band-plan choice, repeater operating discipline</strong></summary>

### Beacon Operation

**What amateur beacons are:**
Amateur beacons are automatically-operated transmitting stations that send a continuous or repeated signal on a known frequency for the purpose of propagation research and monitoring. Unlike DX contacts, there is no two-way exchange — you listen to a beacon and use what you hear to infer the state of the propagation path.

**The NCDXF/IARU International Beacon Project:**
The most widely-used HF beacon network is operated jointly by the Northern California DX Foundation (NCDXF) and the IARU. It consists of 18 beacons sited around the world, each transmitting in rotation on five frequencies:

| Frequency | Band | Notes |
|---|---|---|
| 14.100 MHz | 20 m | Most reliable path; heaviest usage |
| 18.110 MHz | 17 m | |
| 21.150 MHz | 15 m | |
| 24.930 MHz | 12 m | |
| 28.200 MHz | 10 m | Best for short-skip/Es; worst for long-path |

Each beacon transmits for **10 seconds on each band**, cycling through all five bands in 50 seconds. The 18 beacons are staggered so that only one transmits on each frequency at any time — the complete sequence repeats every **3 minutes**. The transmission pattern within those 10 seconds is: callsign at full power (100 W), then carrier at **10 W**, **1 W**, and **100 mW** in successive steps.

**Interpreting what you hear:**
- You hear **100 mW** step: the path is excellent — signals much weaker than contest stations would get through
- You hear the **1 W** step but not the 100 mW: the path is good — comfortable DX operation likely
- You hear **10 W** but not 1 W: the path is marginal — big stations will make it, QRP will struggle
- You hear only the **100 W** step or nothing: the band is effectively closed to that beacon's region
- You hear the callsign but the steps are inaudible: deep in the noise — check again in 15 minutes

A software schedule tool (beaconspot.eu, or built into logging software such as DX4Win) shows which beacon is on which frequency at any given UTC second, so you know exactly which country and path you are evaluating.

**VHF/UHF beacons:**
UK VHF/UHF beacons (e.g. GB3VHF on 144.430 MHz, GB3SCO on 50.420 MHz) transmit continuously and are used to check whether short-path tropospheric ducting or Sporadic-E openings exist between locations. Unlike the HF NCDXF network, VHF beacons are individual stations; the RSGB website lists active UK beacons and their locations.

**WSPR as a propagation beacon network:**
WSPR (Weak Signal Propagation Reporter) is a digital mode designed for very low power propagation testing. Stations transmit a WSPR signal at low power (typically 200 mW to 5 W), and other stations receiving the signal upload decode reports to wsprnet.org. The result is a real-time map of propagation paths across the world. WSPR essentially turns every amateur station running WSPR software into a distributed beacon network. Before a contest, checking wsprnet.org for your band of interest shows you which regions are connected to the UK at that moment.

---

### Modulation Types — Operating Perspective

Choosing the right mode for a given band, path, and contact type significantly affects success. The choice is partly governed by band plans (which sub-bands are designated for which modes) and partly by practical propagation physics.

**SSB (Single Sideband):**
SSB is the default voice mode on all HF amateur bands. Key operating-perspective points:
- **LSB (Lower Sideband) is conventional below 10 MHz** — 160 m, 80 m, 40 m. USB on these bands is incorrect practice
- **USB (Upper Sideband) is conventional above 10 MHz** — 20 m, 17 m, 15 m, 12 m, 10 m
- **VHF/UHF SSB** (weak-signal work on 2 m, 70 cm) uses USB by convention for EME, meteor scatter, and tropospheric DX
- SSB is not appropriate for local VHF/UHF contacts where repeaters or FM simplex are available — the lower power efficiency of a linear PA is wasteful over short distances
- The occupied bandwidth (~2.4 kHz) means SSB is only suited to the voice sub-bands of each HF band; operating SSB in a CW sub-band is a band-plan violation

**CW (Morse code):**
- Occupies approximately 200 Hz of bandwidth — a 500 Hz CW filter admits one-twelfth the noise of a 2.4 kHz SSB filter, improving SNR by ~7 dB
- The narrow bandwidth is why QRP (low power) CW contacts across oceans are routine: effective SNR improvement means less power is needed
- CW sub-bands are at the lower edge of each HF band allocation; avoid calling CQ in SSB sub-bands in CW
- The IARU Region 1 band plan specifies a CW-exclusive segment and a CW/data segment on most bands

**FM:**
- FM has a wider bandwidth (11 kHz for NBFM) than SSB and is therefore suitable only for local contacts where the path loss is low
- FM is not viable on HF for voice (too wide, too much noise on long paths, no advantage) — with one exception: the 10 m band (28–29.7 MHz) has a recognised FM sub-band above 29.0 MHz, and commercial-style FM repeaters operate on 10 m during band openings
- FM on 2 m and 70 cm is the standard access mode for repeaters and local simplex
- FM's capture effect means only the strongest signal is demodulated — useful in a local QSO, but means FM is not useful for weak-signal DX work where multiple signals arrive at similar strengths

**Digital modes — choosing the right one:**

| Mode | Bandwidth | Use case | Notes |
|---|---|---|---|
| FT8 | ~50 Hz | Long-distance DX at low power | 15 s cycles; 12.5 dB SNR gain over CW; automated sequence |
| FT4 | ~90 Hz | Contest digital exchanges | Faster than FT8 (7.5 s cycles); good for pile-ups |
| WSPR | ~6 Hz | Propagation beaconing | Not a contact mode; one-way beacon; ultra-low power |
| PSK31 | 31 Hz | Keyboard-to-keyboard chat | Excellent for ragchewing at low bandwidth |
| RTTY | ~300 Hz | HF contests | Traditional, widely accepted in major contests |
| JS8Call | ~50 Hz | Store-and-forward messaging | Designed for resilient comms without internet |
| Olivia 8/500 | 500 Hz | Difficult paths | Very robust; readable well below noise floor |

**Band plan positions — check before transmitting:**
- FT8 on 20 m: 14.074 MHz dial; on 40 m: 7.074 MHz
- RTTY on 20 m: 14.080–14.099 MHz
- PSK31 on 20 m: around 14.070 MHz
- SSTV on 20 m: 14.230 MHz
- CW-exclusive on 20 m: 14.000–14.025 MHz

Operating SSB in the FT8 segment, or RTTY in the PSK segment, causes interference. Check the current IARU Region 1 band plan (available from the RSGB and IARU websites) before operating any mode outside the main SSB voice segments.

---

### Repeater Etiquette

UK VHF/UHF FM repeaters are shared community resources, typically operated by local radio clubs and amateur groups. Unlike HF where you can QSY freely, a repeater owner invests in infrastructure and site access — and that infrastructure serves many users simultaneously.

**CTCSS (Continuous Tone-Coded Squelch System):**
Most UK repeaters require a sub-audible CTCSS tone to open the repeater's squelch. This prevents the repeater from being triggered by interference, distant co-channel signals, or noise on the input frequency.
- CTCSS tones are below the voice audio range (typically 67.0–254.1 Hz from a standard set)
- The repeater's tone is listed in the RSGB repeater directory at rsgb.org
- Your radio must be programmed with the correct CTCSS encode tone on the transmit channel
- If your radio is not transmitting CTCSS (or has the wrong tone), the repeater will not open — you transmit but receive nothing in reply. Check CTCSS programming first if a repeater is not responding
- RSGB allocates CTCSS tones to UK repeaters systematically by region to reduce adjacent-channel interference from distant repeaters

**Timeout timers:**
Repeaters enforce a maximum transmission time (typically 2–5 minutes, often 3 minutes for a UK machine). If your transmission exceeds this limit:
- The repeater stops relaying your audio and may send a warning tone or drop carrier
- You must key up again after a short pause to re-access the repeater
- Timeout timers exist to prevent a single user from monopolising the repeater and to detect a stuck microphone (PTT jammed on)
- A best practice is to limit each transmission to 60–90 seconds maximum in normal conversation — much shorter than the timeout, allowing the other station to reply and confirming you have not forgotten to release PTT

**Calling procedure on a repeater:**
1. Listen for at least 30 seconds before transmitting — the repeater may already be in use even if it sounds quiet (users may be in a pause between transmissions)
2. Key up and give **your callsign only**: "M0ABC listening" or just "M0ABC" — not "CQ CQ CQ M0ABC calling CQ on the two-six-two repeater"
3. Wait 10–15 seconds for a response
4. If no response, try once more before concluding the repeater is clear of other users and you may call CQ
5. When you hear the **courtesy tone** (a brief beep emitted by the repeater after each transmission drops), that is your signal to transmit — it confirms the previous transmission has ended and the repeater's timer has reset

**DTMF discipline:**
Many modern repeaters respond to DTMF (Dual-Tone Multi-Frequency, i.e. telephone-style push-button tones) for control functions:
- EchoLink node connection: enter the EchoLink node number to link to a remote station or conference
- IRLP node access: similar to EchoLink but a different protocol
- Autopatch (where fitted): dials a telephone number through the repeater
- Repeater link enable/disable commands: may activate a link to another repeater

Never transmit DTMF tones on a repeater unless you intend the specific action those tones trigger. Some radios can accidentally send DTMF tones if the channel scan function or memory navigation is operated during transmission. Know your radio. If you inadvertently trigger an EchoLink connection, send the disconnect DTMF command (usually `#` or a specific disconnect code listed in the repeater's documentation) to restore normal operation.

**Scheduled nets and tests:**
Many UK repeaters host weekly club nets, RAYNET coordination nets, or other scheduled activities at fixed times. These are listed in local repeater group newsletters, the club's website, or the RSGB repeater directory.

- If you hear a net in progress, either **join the net** through the net control station or **wait** until the net closes before making unrelated calls
- Do not call CQ over an ongoing net — this is poor operating practice and will not endear you to the local repeater community
- Repeater monthly tests (where the repeater keeper tests the machine's output power, CTCSS, and other parameters) often happen at a publicised time — check before booking the repeater for a lengthy contact

**Finding UK repeaters:**
The RSGB repeater directory (rsgb.org/repeaters) is the authoritative source for UK repeater details. For each repeater you will find:
- Output frequency (what you listen on)
- Input offset (+600 kHz for 2 m, −1.6 MHz for 70 cm)
- CTCSS access tone
- Keeper callsign and contact details
- Any special features (EchoLink, IRLP, internet-linked)
- Operational status (active, suspended, under repair)

Always programme the **output** frequency into your radio's memory — your radio receives on the output and transmits on the input (which it calculates automatically from the offset). Getting input and output reversed is a common programming error and will result in your radio transmitting on the frequency everyone else is listening on.

</details>

---

## Suggested Interactives for RFH-Interactives

1. **Split VFO pileup simulator** — User is presented with a waterfall showing a DX station on a fixed frequency plus simulated callers in the 5–10 kHz listening range. Task: identify where the DX is picking up callers and call in the correct range. Randomised listening range and caller positions. Directly maps to 2B1 pileup discipline content.

2. **5 MHz slot checker** — User enters a dial frequency and mode (SSB, CW, digital); interactive verifies whether the resulting signal fits within a licensed 5 MHz slot, showing the slot boundary and signal bandwidth overlaid. Prevents real-world operating errors and reinforces 2A1 slot discipline.

3. **Callsign suffix quiz** — Random scenario (hilltop activation, mobile in a car, on a boat at sea, flying in an aircraft); user selects the correct suffix. Includes a /MM vs /M vs /P disambiguation drill. Covers 2D1 suffix content cleanly.

4. **Contest exchange practice** — User set up as a CW or SSB contest station; bot calls CQ and user must respond with the correct exchange format (RST + serial or zone). Scores speed and accuracy. Covers Intermediate §7 contest operating and extends to Full-level exchange completeness.
