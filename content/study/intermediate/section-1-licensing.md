# Section 1: Licensing & Operating

<!-- Exam weight: 6/46 questions (~13%) -->
<!-- Sub-sections: 1A, 1B, 1C, 1D, 1E, 1F, 1G, 1H -->
<!-- Syllabus refs: 1A2, 1B1, 1C1-2, 1D1-2, 1E1, 1F1, 1G1, 1H1 -->

This section covers the rules — what you are allowed to do, where, and with what power.
It is fact-based rather than calculation-based. The best approach is to read through,
understand the logic behind each rule, and then test yourself.

---

## 1A: Licence Conditions

### 1A Theory — Purpose of Amateur Radio (1A2)

The UK Amateur Radio Licence defines the **primary purpose of amateur radio** as:

> **Self-training in radio communications.**

This matters legally. It means the licence is not a commercial telecommunications licence.
You cannot use it to run a business radio service.

> [INFO] **1A2:** The main purpose of amateur radio, as stated in the licence, is
> **self-training in radio communications.** This is not a commercial activity.

> [WARNING] **1A (D2F-M2-Q12):** A haulage company using amateur radio to communicate
> with their fleet is **not permitted.** Amateur radio is for personal self-training,
> not for business communications. This would breach the terms of the licence.

### 1A Theory — Address Changes and Licence Administration

Your licence is tied to your recorded address. If you move house, you **must notify Ofcom.**

Failure to do so means your licence details are wrong, which can lead to enforcement action,
including licence revocation.

> [INFO] **1A (D2F-M1-Q03):** If you move house without notifying Ofcom, you **risk having
> your licence revoked.**

**Who may inspect your equipment?**

> [INFO] **1A (D2F-M1-Q07):** A Full licensee must allow inspection of their radio equipment
> by **any person authorised by Ofcom.** This includes Ofcom enforcement officers and anyone
> acting on Ofcom's behalf.

### 1A Theory — EMF Compliance (1A2, 1G1)

The licence requires that exposure to electromagnetic fields (EMF) from your station must
comply with **ICNIRP guidelines** in areas accessible to the general public.

**ICNIRP** = International Commission on Non-Ionizing Radiation Protection.
This body determined the safe exposure limits that the licence references.

> [INFO] **1A (D2F-M1-Q12):** EMF exposure must be within ICNIRP guidelines in **areas
> accessible to the general public.** Your own garden and shack are generally not covered,
> but a neighbour's garden or a public footpath adjacent to your antenna would be.

**EMF compliance assessment:**
When you set up a new station or make significant changes, you must check whether your
setup meets the EMF limits. This is usually done using the RSGB/Ofcom online calculator.

> [INFO] **1G1 (1G1-2025-Int'd-979):** You must repeat the EMF compliance assessment
> whenever the **antenna is replaced with a different type.** A different antenna changes
> the radiation pattern and EIRP — the previous assessment no longer applies.

**EIRP limits (Intermediate licence):**

> [INFO] **1G (RF-Hub Q24):** The EMF compliance limit for **Intermediate** licence
> holders is **10 W average EIRP.** Below this, no assessment is required.

#### The two EMF trigger thresholds (1G1)

EMF compliance rules apply when your transmit power exceeds **either** of two thresholds —
whichever you hit first:

- **10 W EIRP averaged over any 6-minute period.** This catches high-duty-cycle modes like FM
  (transmitter on the whole time you're keying) — ten watts averaged over six minutes is a very
  modest continuous emission.
- **100 W EIRP instantaneous (peak) value** even for a very short time. This catches SSB voice
  peaks and short-duration digital-mode bursts — the instantaneous peak can be much higher than
  the six-minute average.

**Why two thresholds:** RF exposure risk depends on both the sustained energy the body absorbs
(six-minute average, related to tissue heating) and the peak field strength (instantaneous,
related to induced-current effects). The average threshold protects against long-term heating;
the peak threshold catches short bursts that might not push the average up much but still
represent a significant peak exposure.

> [INFO] **1G1:** Two thresholds — **10 W EIRP average over 6 min** OR **100 W EIRP
> instantaneous peak**. Exceed either and EMF compliance rules apply. Reassessment is required
> whenever your antenna, power, or location changes.

### 1A Theory — Key Organisations

| Abbreviation | Full name | Role |
|---|---|---|
| **Ofcom** | Office of Communications | UK regulator — issues licences, enforces rules |
| **RSGB** | Radio Society of Great Britain | National amateur radio society |
| **IARU** | International Amateur Radio Union | Worldwide federation of national societies |
| **ITU** | International Telecommunication Union | UN agency — sets global frequency allocations |
| **ICNIRP** | Int'l Commission on Non-Ionizing Radiation Protection | Sets RF exposure safety limits |
| **CEPT** | Conference of European Posts and Telecommunications | European licensing coordination |

> [INFO] **1A (D2F-NEW-011):** IARU stands for **International Amateur Radio Union.**
> It coordinates amateur radio internationally and represents national societies at the ITU.

### 1A Self-Check Questions

**Q1.** What is the stated purpose of amateur radio in the UK licence?
<details><summary>Answer</summary>

**Self-training in radio communications.** The licence is not for commercial use.
</details>

**Q2.** Can you use amateur radio to pass messages for a business?
<details><summary>Answer</summary>

**No.** Business communications are not permitted under the amateur licence. This would
breach licence conditions.
</details>

**Q3.** You move to a new QTH and don't inform Ofcom. What risk do you face?
<details><summary>Answer</summary>

Your licence may be **revoked.** Always update your Ofcom records when you move.
</details>

**Q4.** Who determines the EMF safety limits that UK amateur licences reference?
<details><summary>Answer</summary>

**ICNIRP** — the International Commission on Non-Ionizing Radiation Protection.
</details>

**Q5.** When must you redo your EMF compliance assessment?
<details><summary>Answer</summary>

Whenever you replace your antenna with a different type, or make other significant
changes to your station (power level, location, etc.).
</details>

---

## 1B: Licensing Structure

### 1B Theory — UK Licence Classes

The UK Amateur Radio Licence has three tiers:

| Licence class | Power limit | Key features |
|---|---|---|
| **Foundation** | 25 W PEP | Entry level. Some band restrictions. |
| **Intermediate** | 100 W PEP | Most HF/VHF/UHF bands available. |
| **Full** | 1000 W (30 dBW) on most HF bands | Full access. Some bands permit more. |

> [INFO] **1B (RF-Hub Q4):** The maximum power output permitted for an **Intermediate
> licence** holder is **100 W PEP** (peak envelope power).

**Moving between classes:** Each class requires passing the corresponding exam (Foundation,
Intermediate, Full). There is no time restriction between exams — you can take them
as quickly as you wish.

### 1B Theory — UK Callsign Structure

UK amateur callsigns have this structure:

```
[Prefix] [Number] [Suffix]

Examples:
  G4ABC      (Full — England)
  2E1XYZ     (Intermediate — England)
  M7DEF      (Foundation — England)
  GM0GHI     (Full — Scotland)
  2M1JKL     (Intermediate — Scotland)
  MM7MNO     (Foundation — Scotland)
```

**Regional prefix letters:**

| Region | Full prefix | Intermediate prefix | Foundation prefix |
|--------|------------|--------------------|--------------------|
| England | G / M0–M6 | 2E0 / 2E1 | M7 |
| Scotland | GM / MM0–MM6 | 2M0 / 2M1 | MM7 |
| Wales | GW / MW0–MW6 | 2W0 / 2W1 | MW7 |
| Northern Ireland | GI / MI0–MI6 | 2I0 / 2I1 | MI7 |
| Isle of Man | MD / MD0–MD6 | — | MD7 |
| Jersey | MJ / MJ0–MJ6 | — | MJ7 |
| Guernsey | GU / MU0–MU6 | — | GU7 |

> [INFO] **1A (RF-Hub Q1):** An **English Intermediate** licence holder uses the
> prefix **2E1** (or 2E0). Example: 2E1XYZ.

> [INFO] **1A (RF-Hub Q2):** A **Welsh Intermediate** licence holder uses the
> prefix **2W1** (or 2W0). Example: 2W1XYZ.

> [INFO] **1B (D2F-M1-Q02):** A callsign like **MM7ABC/M** indicates a **Foundation
> licence holder walking (mobile) in Scotland.** MM7 = Foundation Scotland; /M = mobile.

> **See also:** <a href="../../sidebands/uk-callsigns-and-rsls.html" target="_blank">Sideband — UK Callsigns & Regional Secondary Locators</a> — complete prefix table (M-series and legacy G-series), RSL reference, operating suffixes, and worked examples.

**Mobile and portable suffixes:**

| Suffix | Meaning |
|--------|---------|
| /M | Mobile (operating from a moving vehicle) |
| /P | Portable (temporary fixed location, not home address) |
| /MM | Maritime mobile (at sea) |
| /AM | Aeronautical mobile |

> [INFO] **1B (D2F-NEW-004):** The suffix **/P** after a UK callsign indicates the station
> is operating at a **portable location** — away from the licensed address.

**Invalid callsigns:**

> [INFO] **1B (D2F-M2-Q07):** **GZ2FTR/P** is NOT a valid UK callsign. GZ is not a
> recognised UK regional prefix. Always check that prefix, number, and suffix follow
> the standard structure.

### 1B Theory — International Callsign Prefixes

You must recognise callsigns from major countries:

| Prefix | Country |
|--------|---------|
| VK | Australia |
| ZL | New Zealand |
| W (single digit suffix) | United States |
| JA | Japan |
| PA | Netherlands |
| DL | Germany |
| F | France |
| SP | Poland |
| OZ | Denmark |
| SM | Sweden |
| OH | Finland |
| LA | Norway |

> [INFO] Common exam prefixes: **VK = Australia, ZL = New Zealand, W = USA, JA = Japan.**

### 1B Theory — Operating Under Supervision

An Intermediate or Full licensee can supervise an unlicensed or lower-class operator.

**Key rules:**
- The supervising licensee must be present in the room.
- The operator must use their **own callsign** (or the supervising licensee's if operating
  under their authority).
- The operator must comply with the terms of **the supervising licensee's licence.**

**Example:** An Intermediate (2E1CYL) is in your shack. Your friend GW1ZTZ (Full Welsh)
is visiting. GW1ZTZ can operate at Full power in England using their callsign without the
regional prefix → **G1ZTZ** (Full licence, England, using the home nation call without prefix
correction — actually: operating from England, they would use GW1ZTZ if calling from Scotland/
Wales, or may announce their callsign normally. The exam answer shows using G1ZTZ when
operating from England under the Full licence call without regional indicator).

> [INFO] **1B1 (1B1-2025-Int'd-2121):** When a Full licensee from another region is
> supervising and you wish to operate at Full power under their guidance, use their
> callsign in the format appropriate for the operating country.

**Foundation holder visiting your shack:**

> [WARNING] **1C (D2F-M2-Q04):** If M7ABC (Foundation) is visiting and you need to
> leave the room, **M7ABC must use their own callsign** and operate at **no more than
> their licensed power** (25 W) if they continue to operate. They cannot use your
> callsign or your power level in your absence.

**Power limit when supervised:**

> [INFO] **1C (D2F-M2-Q06):** If a scout is supervised by a 2E0 Intermediate operator,
> the scout must operate at no greater than **100 W.** Intermediate licence power is
> 100 W PEP — which applies here since the supervising operator holds a Full licence allowing
> higher power. The limit is set by the supervising licensee's licence terms.

#### Amateur radio nets (1B1)

An **amateur radio net** is a group of amateurs who meet on a specific frequency at a
scheduled time to enjoy QSOs with each other — typically for club discussion, regional
round-tables, DX contests, emergency-service training, or interest-group chat (e.g. a
homebrew-equipment net, a QRP net, a Foundation-holder net).

**Under supervision:** once your supervising licensee has made initial contact with a member
of the net using their callsign, you (as the supervisee) are then free to participate in that
net using the supervisor's callsign under their responsibility, exactly as with any other
supervised operation.

> [INFO] **1B1:** A "net" is a scheduled multi-station on-air gathering. Recognise that
> participation as a supervisee is permitted once the initial contact has been established
> by the supervisor, subject to the usual supervision rules.

### 1B Self-Check Questions

**Q1.** What is the maximum transmit power for an Intermediate licence holder?
<details><summary>Answer</summary>

**100 W PEP** (peak envelope power).
</details>

**Q2.** A station uses the callsign 2W1XYZ. Where is it located and what class of licence
does the operator hold?
<details><summary>Answer</summary>

**Wales**, **Intermediate** licence. 2W = Intermediate Wales, 1 = number digit.
</details>

**Q3.** You see the callsign VK2ABC on a DX cluster. Where is that station?
<details><summary>Answer</summary>

**Australia.** VK is the ITU prefix for Australia.
</details>

**Q4.** A Foundation (M7) operator visits your shack and you need to step out briefly.
Can they continue operating?
<details><summary>Answer</summary>

Yes, but only using **their own callsign** (M7xxx) and at no more than **25 W PEP**
(their Foundation power limit).
</details>

**Q5.** What does the suffix /P mean after a callsign?
<details><summary>Answer</summary>

The station is operating at a **portable location** — away from its registered address.
</details>

---

## 1C: Supervision and Third-Party Operation

### 1C Theory — Who May Operate Your Station (1C1, 1C2)

Under your licence, **you are responsible** for everything transmitted from your station.
Only certain people may operate your equipment:

**Without licence — if you are present and supervising:**
- Anyone you are training or supervising may operate, provided you remain in the room

**Unlicensed people — what they may and may not do:**
- They may transmit under your supervision and using your callsign
- They may NOT operate alone
- They may NOT exceed your licence power limits

**User Services (1C2):**
A "User Service" is defined in the licence as services such as the police, fire brigade,
coastguard, mountain rescue, RNLI, etc.

> [INFO] **1C2:** A member of a User Service **may use your Radio Equipment to send messages**
> in the course of their employment — for example, during an emergency. This is one of the
> permitted third-party message uses.

> [WARNING] A User Service **must specifically ask** you to send or receive a message.
> You cannot decide to send messages on their behalf without being asked.

### 1C Theory — Messages with Obscured Meaning (1D2)

The licence permits transmitting messages with obscured meaning (coded messages) only:
- When a member of a User Service specifically requests it

> [INFO] **1D (D2F-M1-Q06):** Sending messages with obscured meaning is only permitted
> when a **member of a User Service specifically asks you to.** General coded messages
> (e.g. to obscure content from others) are not permitted.

### 1C Self-Check Questions

**Q1.** Who can use your amateur radio equipment to send a message in the course of their employment?
<details><summary>Answer</summary>

A member of a **User Service** (police, coastguard, fire service, mountain rescue, RNLI, etc.).
</details>

**Q2.** You are supervising a trainee at your station and you step out to make a cup of tea.
What must the trainee do?
<details><summary>Answer</summary>

**Stop transmitting** immediately. They may only operate while you are present in the room.
</details>

**Q3.** Can you transmit a coded message to obscure its meaning to other listeners?
<details><summary>Answer</summary>

Only if a **member of a User Service specifically asks you to.** You cannot do it for
general privacy purposes.
</details>

---

## 1D: Band Plans and Interference

### 1D Theory — Licence Obligations (1D1)

All amateur operators must ensure their station **does not cause undue interference**
to other radio users. This is a fundamental licence condition.

> [INFO] **1D1:** An Intermediate (or any) licence holder must ensure their station does
> **NOT cause undue interference to other radio equipment.** Interference complaints can
> result in licence action.

**What "undue interference" means:**
- Some co-channel interference is unavoidable on shared bands
- "Undue" means interference that is avoidable with reasonable care
- Causes include: harmonics, overdriven amplifiers, poor filtering, illegal frequencies

#### When Ofcom can modify or restrict your equipment (1D1)

Ofcom has the authority to temporarily or permanently modify or restrict the use of your
amateur radio equipment. RSGB lists **four specific circumstances** under which this applies:

1. **If you breach the licence conditions** — e.g. exceeding power limits, operating outside
   your permitted bands, or using amateur radio for non-amateur purposes (business, illegal messages).
2. **If your equipment causes or contributes to undue interference** to other authorised radio services.
3. **In the event of a local or national emergency** — Ofcom can require you to reduce power,
   change frequency, or cease operating.
4. **If an Ofcom investigation identifies your equipment as the cause** of an interference
   complaint — you may be required to change operating (reduce power, change frequency, install
   additional filtering), or to stop operating temporarily.

You are required to **keep your licence available for inspection** by anyone authorised by Ofcom.

> [INFO] **1D1 (D2F):** Know the four scenarios in which Ofcom can restrict or modify your
> equipment: licence breach, undue interference, national/local emergency, or Ofcom investigation.
> Any of the four is sufficient grounds.

### 1D Theory — Broadcasting Prohibition (1D2)

Amateur radio is a two-way communication service. Broadcasting — transmitting to anyone
who happens to be listening — is prohibited.

The one-exception: calling CQ is permitted. This is a general call to establish contact.

> [INFO] **1D (D2F-M2-Q03):** Apart from a CQ call, the amateur licence does **not permit
> transmitting to anybody who happens to be listening.** Broadcasting is not an amateur
> radio activity.

### 1D Theory — Primary and Secondary Status (1H1)

Amateur radio allocations can be:
- **Primary:** amateurs are the main user. Other services must not cause harmful interference.
- **Secondary:** amateurs share with a primary user and must not cause interference to them.
  Amateurs must accept interference from the primary user.

> [INFO] **1H1 (1H1-2025-Int'd-1203):** The 10.100–10.150 MHz band (30 m) is given
> **secondary status** to Intermediate licensees. The primary user is fixed services.

| Band | Status for amateurs in UK |
|------|--------------------------|
| Most HF bands | Primary |
| 30 m (10.100–10.150 MHz) | Secondary |
| Some microwave allocations | Secondary or shared |

### 1D Self-Check Questions

**Q1.** Your neighbour complains that your transmission is affecting their TV.
What is your obligation under the licence?
<details><summary>Answer</summary>

You must investigate and resolve the interference. The licence requires you not to cause
**undue interference** to other radio equipment.
</details>

**Q2.** Is it permitted to transmit on a secondary band if you cause interference to
the primary user?
<details><summary>Answer</summary>

**No.** On a secondary allocation, you must not cause harmful interference to primary
users and must accept interference from them.
</details>

**Q3.** You want to talk to all amateurs who might be listening on 80 m.
What type of call is permitted?
<details><summary>Answer</summary>

A **CQ call** — a general call to any station. This is permitted. Broadcasting without
intent to make a two-way contact is not.
</details>

---

## 1E: Operating Procedures and Remote Control

### 1E Theory — Remote Control (1E1)

You may control your transmitter remotely (e.g. from another location over the internet).

Rules for remote control:
- The **control link must operate above 30 MHz** (cannot use HF for control)
- The control link must **not be encrypted**
- The **licence number** must be displayed adjacent to the remote transmitter

> [INFO] **1E1 (1E1-2025-Int'd-8105):** A transceiver controlled remotely at a place
> other than the licensee's recorded address must have the **licensee's licence number
> displayed adjacent to it.**

> [INFO] **1E1 (D2F-M1-Q08):** The link between a home transceiver and a main transmitter
> at another location must **operate above 30 MHz** and must **not be encrypted.**

### 1E Theory — Logging

The Intermediate licence does not mandate a logbook, but keeping one is strongly recommended.
A log provides a record of contacts, dates, times, frequencies, and callsigns.

It is useful for:
- Confirming contacts for awards
- Providing evidence in case of interference disputes
- Tracking your operating patterns

### 1E Self-Check Questions

**Q1.** You set up a remote HF station at your holiday cottage.
What must be displayed next to the transmitter?
<details><summary>Answer</summary>

Your **licence number**, displayed adjacent to the remote transmitter.
</details>

**Q2.** You want to control the remote transmitter using a link on 7 MHz.
Is this permitted?
<details><summary>Answer</summary>

**No.** The control link must operate **above 30 MHz.** 7 MHz is not permitted for this.
</details>

**Q3.** Can the remote control link use encrypted communications?
<details><summary>Answer</summary>

**No.** The licence requires the control link to be **unencrypted.**
</details>

---

## 1F: Special Conditions

### 1F Theory — Notable Licence Special Conditions (1F1)

The licence contains provisions for certain special operating situations:

**Third-party traffic:**
You may pass messages for non-amateur third parties in certain circumstances — primarily
for User Services (see 1C). Casual passing of messages for friends or family on behalf
of a third party is generally not permitted on amateur frequencies.

**Emergency communications:**
In a genuine emergency, you may use any frequency, any power, and any means necessary
to obtain assistance. The licence permits this as an emergency override. Note this is
for genuine emergencies, not practice exercises.

**Operation from vehicles:**
Using /M suffix. Mobile operation is permitted. All normal licence conditions apply —
power limits, legal frequencies, etc.

**Club stations:**
A club callsign may be used by members under supervision of a Full or Intermediate
licensee (depending on band and power). The supervising licensee remains responsible.

> [INFO] **1F1:** Special conditions in the licence cover emergency operations, third-party
> traffic via User Services, mobile operation, and club station use. The fundamental rules
> of power limits, interference prevention, and identification always apply.

---

## 1G: International Regulations

### 1G Theory — ITU and the Radio Regulations (1G1)

The **International Telecommunication Union (ITU)** is a United Nations agency.
It publishes the **ITU Radio Regulations** — the global treaty that governs all
radio frequency use worldwide.

The ITU Radio Regulations:
- Allocate frequency bands to different services (amateur, broadcasting, maritime, etc.)
- Define three ITU regions (see below)
- Are updated at World Radiocommunication Conferences (WRC) held every 3–4 years

> [INFO] **1G (D2F-M2-Q02):** The ITU Regulations **contain the frequencies allocated to
> amateur radio in different parts of the world.**

**ITU Regions:**

| Region | Coverage |
|--------|---------|
| Region 1 | Europe, Africa, Middle East, former USSR, Mongolia |
| Region 2 | Americas |
| Region 3 | Asia-Pacific |

The UK is in **Region 1.**

> [INFO] **1G (D2F-M1-Q10):** When operating in international waters, refer to the
> **ITU Radio Regulations for the ITU region that the vessel is currently located in.**

### 1G Theory — CEPT and T/R 61-01

**CEPT** = Conference of European Posts and Telecommunications.

**CEPT Recommendation T/R 61-01** allows licensed amateurs from CEPT member countries
to operate in other CEPT countries using their home callsign (plus the country prefix
if required), without needing a separate local licence.

> [WARNING] **CEPT applies to Full licence (HAREC) holders only.** UK Foundation and
> Intermediate licences are **not recognised** under CEPT T/R 61-01. A UK Foundation
> or Intermediate licensee cannot operate in another CEPT country using this provision —
> they would need to obtain a local licence. Only Full (HAREC) holders benefit from
> CEPT reciprocal operating rights.

**Key rules (Full licence holders only):**
- You must carry a copy of your home licence
- You use your home callsign
- You must comply with the **band plans and power limits of the country you are in**
  (which may differ from the UK)
- You operate at the level matching your home licence class in that country

> [INFO] **1G (D2F-M1-Q09) and (D2F-M2-Q01):** If an amateur (MM0ABC) **permanently
> moves** to a CEPT country (e.g. Spain), they **cannot operate as MM0ABC under CEPT.**
> CEPT applies to visits, not permanent residence. They must apply for a Spanish licence.

> [WARNING] **1G (D2F-M1-Q15):** When operating abroad, **the band plan in that country
> may be different** from the UK. Some frequencies permitted in the UK may not be available
> — check the local band plan before transmitting.

> [INFO] **1G (D2F-NEW-012):** CEPT stands for **Conference of European Posts and
> Telecommunications.**

### 1G Theory — Maritime Mobile (/MM)

The rules depend on **where** you are and **what ship** you are on.

| Location | Ship registration | Permitted? |
|----------|------------------|-----------|
| UK/Crown Dependency territorial seas (within 12 nm) | Any ship | Yes |
| International waters | UK, Channel Islands, or Isle of Man registered | Yes |
| International waters | Foreign-registered | **No** |
| Foreign territorial waters | Any ship | **No** |

**Key rules:**
- **Within 12 nautical miles** of UK or Crown Dependency coastline (territorial seas):
  you may operate from **any ship**, regardless of where it is registered.
- **In international waters:** you may only operate from a ship registered in the
  **UK, Channel Islands, or Isle of Man.**
- **In foreign territorial waters** or on a **foreign-registered vessel**: you
  **cannot** operate. Foundation and Intermediate licences have no CEPT reciprocal
  privileges — this restriction is absolute.
- You must have the **explicit permission of the ship's Master/Captain** before
  transmitting. If they ask you to stop, you must comply immediately.
- Add **/MM** to your callsign: e.g. 2E1XYZ/MM.

> [INFO] **1G (1A2-2025-Int'd-8098):** Maritime mobile operation is permitted in UK
> territorial seas (any ship) and international waters (UK/CI/IoM-registered ships only).
> You cannot operate in foreign waters or on foreign-registered vessels.

> [WARNING] **1G:** Unlike Full licence holders, **Intermediate and Foundation licence
> holders have NO CEPT reciprocal privileges.** You cannot operate your radio in foreign
> territorial waters under any circumstances — not even in CEPT member countries.

> [INFO] **1G (D2F-M2-Q10):** Your licence states you **must comply** with an instruction
> from the Master of a vessel to stop transmitting.

### 1G Theory — Aeronautical Mobile (/AM)

Operating from an aircraft is tightly restricted:

| Rule | Detail |
|------|--------|
| Maximum power | **500 mW (0.5 W) EIRP** — 200× less than the normal 100 W Intermediate limit |
| Frequency bands | **Primary allocation bands only** — secondary allocations are not permitted |
| Aircraft registration | **UK or Crown Dependency registered aircraft only** |
| Airspace | UK or international airspace only — **foreign airspace prohibited** |
| Authority | **Explicit permission of the pilot-in-command** required before transmitting |
| Callsign | Append **/AM**: e.g. 2E1XYZ/AM |

> [INFO] **1G:** Aeronautical mobile: 500 mW max EIRP, primary-allocation bands only,
> UK-registered aircraft only, permission of pilot required.

> [WARNING] **1G:** 500 mW is **200 times less** than your normal 100 W Intermediate
> limit. This applies to **all transmissions** from an aircraft — there are no exceptions.
> Operating in foreign airspace or from a foreign-registered aircraft is completely prohibited.

### 1G Self-Check Questions

**Q1.** What does CEPT T/R 61-01 allow you to do?
<details><summary>Answer</summary>

Operate as a licensed amateur in other CEPT member countries using your UK callsign,
without needing a separate local licence — for visits (not permanent residence).
(Full licence / HAREC holders only — Foundation and Intermediate are not covered.)
</details>

**Q2.** MM0ABC has permanently moved from Scotland to France (a CEPT country).
Can they operate as MM0ABC under CEPT?
<details><summary>Answer</summary>

**No.** CEPT applies to temporary visits. Having permanently moved, MM0ABC must apply for
a French amateur licence.
</details>

**Q3.** You are on a cruise ship in the Pacific (ITU Region 3). Which regulations
govern what frequencies you can use?
<details><summary>Answer</summary>

The **ITU Radio Regulations for Region 3** — the region the vessel is currently in.
</details>

**Q4.** You are operating from a yacht in the English Channel and the skipper asks you
to stop transmitting. What does your licence say?
<details><summary>Answer</summary>

You **must comply.** The Master of the vessel has authority over all radio operations.
</details>

**Q5.** What is the difference between Band Plan and Licence conditions regarding frequency use?
<details><summary>Answer</summary>

The **licence** sets the legal limits (which bands, maximum power, permitted modes).
The **band plan** is a voluntary agreement (set by IARU and national societies) on how to
use the band — e.g. which frequencies are for CW only, SSB only, digital, etc.
You are legally required to follow the licence; the band plan is recommended practice.
</details>

**Q6.** You are on a ferry in international waters. The ferry is registered in Panama.
Can you operate /MM under your UK Intermediate licence?
<details><summary>Answer</summary>

**No.** In international waters you may only operate on a ship registered in the UK,
Channel Islands, or Isle of Man. A Panamanian-registered vessel is not permitted.
</details>

**Q7.** What is the maximum power you may use when operating /AM from an aircraft?
<details><summary>Answer</summary>

**500 mW (0.5 W) EIRP** — regardless of your licence class.
</details>

**Q8.** On which frequency bands may you transmit from an aircraft?
<details><summary>Answer</summary>

Only bands where amateur radio has **Primary allocation** in the UK.
Secondary allocations are not permitted for airborne operation.
</details>

---

## 1H: Power Limits and EMF (Electromagnetic Fields)

### 1H Theory — UK Power Limits by Licence Class

**Foundation:** 25 W PEP on most bands.

**Intermediate:** 100 W PEP on most bands.

**Full:** 1000 W (30 dBW) on most HF bands.

Some specific bands have different limits:

| Band | Full licence max | Notes |
|------|-----------------|-------|
| Most HF, VHF and UHF primary bands | 30 dBW (1 000 W) | Post-1-September-2024 Ofcom framework standard |
| 60 m (5 MHz) | 15 W EIRP | Channelised, specific conditions |
| 472 kHz (630 m) | 1 W EIRP | Full-only band, tight power limit |
| 135.7 kHz (2200 m) | 1 W EIRP | Full-only band, tight power limit |
| Specialist / shared / secondary bands | Varies | Check current Ofcom Amateur Radio Licence Schedule 1 Table A for band-by-band limits |

> [INFO] **1H (D2F-M1-Q11) — historical:** Under the pre-2024 framework, the 1.810–1.830 MHz narrow CW segment had a 30 dBW allowance whilst the rest of 160 m was capped at 26 dBW (400 W). Post-2024, the general Full-licence primary-band limit is 30 dBW (1 000 W), so the 1.810–1.830 MHz distinction has been folded into the general rule. Kept here for reference in case older exam papers or study materials cite the old figure.

> [INFO] **1H (D2F-NEW-013):** The maximum power for a Full licence holder on the
> **60 m (5 MHz) band** is **15 W EIRP.**

> [INFO] **1H (D2F-NEW-014):** The maximum power a Full licence holder may use on
> **most primary HF bands** is **30 dBW (1 000 W)** under the post-2024 framework.
> Specialist / secondary / band-specific exceptions still exist (60 m: 15 W EIRP; 472 kHz: 1 W EIRP; 135.7 kHz: 1 W EIRP).

**Converting dBW to watts:**
```
Power (W) = 10^(dBW / 10)

30 dBW = 10^3   = 1 000 W   ← current Full HF limit
26 dBW = 10^2.6 = 400 W     ← pre-2024 Full HF limit (still a useful conversion to recognise)
20 dBW = 10^2   = 100 W     ← Intermediate HF limit
14 dBW = 10^1.4 = 25 W      ← Foundation HF limit
15 dBW = 10^1.5 = 32 W      ← Intermediate upper 1.8 MHz limit
```

> [INFO] Know the standard conversions: **30 dBW = 1 000 W, 26 dBW = 400 W, 20 dBW = 100 W, 14 dBW = 25 W, 15 dBW = 32 W.** Exam questions may ask you to convert either way.

### 1H Theory — ISM Bands and Interference (1H1)

**ISM** = Industrial, Scientific and Medical. These are bands set aside for industrial
equipment (microwave ovens, welding equipment, medical devices, etc.).

Amateurs **must accept interference** from ISM users on shared frequencies.

| ISM frequency | Overlapping amateur band |
|--------------|------------------------|
| 2.4 GHz | 13 cm (2.4 GHz amateur band) |
| 5.8 GHz | 5840 MHz — on this frequency amateurs must accept ISM interference |
| 433 MHz | 70 cm (Europe) — some ISM overlap |

> [INFO] **1H (RF-Hub Q5):** The **2.4 GHz ISM band** overlaps with the amateur
> **13 cm band.** Amateurs share this spectrum with Wi-Fi, Bluetooth, and microwave ovens.

> [INFO] **1H (1H1-2025-Int'd-1742):** At **5840 MHz**, amateurs must **accept interference
> from ISM users.** ISM has primary status at this frequency.

### 1H Theory — EMF Assessment in Practice

Your EMF compliance check considers:
- Transmit power (and typical duty cycle for the mode)
- Antenna gain and directivity
- Distance to areas accessible to the public
- Frequency (higher frequencies generally have stricter limits)

**Key trigger for reassessment:**
- You change to a **different antenna type** → must reassess
- You significantly increase power → reassess
- You change operating location → reassess

The RSGB provides an online EMF calculator that works through the assessment for common
antenna types and power levels.

> [WARNING] **1G1:** You cannot rely on a previous EMF assessment if you have changed
> your antenna. The pattern, gain, and EIRP will be different.

### 1H Self-Check Questions

**Q1.** What is 30 dBW in watts, and what does this figure represent?
<details><summary>Answer</summary>

30 dBW = 10^(30/10) = 10^3 = **1 000 W.** This is the standard Full licence limit on most primary HF, VHF and UHF bands under the post-2024 framework.
</details>

**Q1b.** What is 26 dBW in watts?
<details><summary>Answer</summary>

26 dBW = 10^(26/10) = 10^2.6 ≈ **400 W.** This was the pre-2024 Full HF limit — you'll still see it in older RSGB papers and it's worth recognising as a dBW conversion practice.
</details>

**Q2.** Which ISM band overlaps with the amateur 13 cm allocation?
<details><summary>Answer</summary>

The **2.4 GHz** ISM band.
</details>

**Q3.** An Intermediate operator has an EIRP of 8 W average. Do they need to complete
a formal EMF compliance assessment?
<details><summary>Answer</summary>

**No.** The Intermediate compliance limit is 10 W average EIRP. At 8 W they are below
the threshold and no formal assessment is required.
</details>

**Q4.** You are operating on 5.840 GHz and your signal is causing problems with nearby
ISM equipment. What must you do?
<details><summary>Answer</summary>

You must **accept the situation.** At 5840 MHz, amateurs have secondary status and must
accept interference from ISM primary users. You may need to cease operating on that
frequency if the ISM user's equipment is causing you interference — not the other way round.
</details>

**Q5.** What is the maximum power for a Full licence holder on the 60 m band?
<details><summary>Answer</summary>

**15 W EIRP.** The 60 m allocation has special conditions including a low power limit.
</details>

---

## Section 1 — Key Facts Table

| Fact | Detail |
|------|--------|
| Purpose of amateur radio | Self-training in radio communications |
| Foundation power limit | 25 W PEP |
| Intermediate power limit | **100 W PEP** |
| Full power limit (most HF) | **30 dBW = 1000 W** |
| 60 m (5 MHz) Full power | 15 W EIRP |
| 1.810–1.830 MHz max | 30 dBW |
| 26 dBW in watts | 400 W |
| 30 dBW in watts | 1 000 W |
| England Intermediate prefix | 2E0 / 2E1 |
| Scotland Intermediate prefix | 2M0 / 2M1 |
| Wales Intermediate prefix | 2W0 / 2W1 |
| England Foundation prefix | M7 |
| Scotland Foundation prefix | MM7 |
| /P suffix | Portable location |
| /M suffix | Mobile (moving vehicle) |
| VK | Australia |
| ZL | New Zealand |
| W | USA |
| JA | Japan |
| Remote control link | Must be above 30 MHz, unencrypted |
| Remote station display | Licence number adjacent to equipment |
| CEPT T/R 61-01 | Visit other CEPT countries with home callsign |
| CEPT permanent move | Must apply for local licence |
| Address change | Must notify Ofcom — or risk revocation |
| EMF limit (Intermediate) | 10 W average EIRP (below = no assessment needed) |
| EMF reassessment trigger | New antenna type |
| 30 m (10.1 MHz) status | Secondary for amateurs |
| User Service | May use your equipment to send messages |
| Inspect equipment | Any person authorised by Ofcom |
| IARU | International Amateur Radio Union |
| ICNIRP | International Commission on Non-Ionizing Radiation Protection |
| ITU | International Telecommunication Union |
| 2.4 GHz ISM overlap | 13 cm amateur band |
| 5840 MHz | Amateurs must accept ISM interference |
| Broadcasting prohibition | Only CQ calls permitted; no general broadcasting |
| Business use | Not permitted under amateur licence |

---

*Section 1 is the most fact-dependent section. Use the Key Facts Table above as a
final check list before the exam. The callsign prefixes and power limits are tested
most frequently.*
