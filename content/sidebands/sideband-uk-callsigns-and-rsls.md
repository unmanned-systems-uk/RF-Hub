# Sideband: UK Callsigns & Regional Secondary Locators

**Tags:** `[F]` `[I]` `[FL]`
**Cross-refs:** <a href="../study/full/section-1-licence-conditions.html#1h--schedule-1-callsigns-and-operating-conditions-1h1" target="_blank">Full §1H — Callsigns & Schedule 1</a> · <a href="../study/intermediate/section-1-licensing.html#1b-theory--uk-callsign-structure" target="_blank">Intermediate §1B — Callsign Structure</a> · <a href="phonetic-alphabet.html" target="_blank">NATO Phonetic Alphabet</a>
**Series:** Sideband — Topic Snippets for RF-Hub

---

A UK amateur radio callsign tells you three things at a glance: **which licence class** the holder holds, **which region** of the UK they are in (or the legacy region their callsign was issued for), and **how they are currently operating** (via a suffix). Once you can decode the pattern, every callsign on the band tells a story.

This sideband is a complete reference for the current UK callsign system, including the post-2024 Ofcom licence update. An interactive parser — enter any UK callsign to decode it — is embedded below.

---

<iframe src='/interactives/uk-callsign-parser.html' style='width:100%; height:750px; border:1px solid #1e293b; border-radius:8px; display:block;' loading='lazy' title='UK Callsign Parser'></iframe>

---

## Callsign Structure

All UK amateur callsigns follow the same pattern:

```
[PREFIX] [DIGIT] [LETTERS] / [OP-SUFFIX]
  │        │        │            │
  │        │        │            └─ /M /P /A /MM /AM /T (optional)
  │        │        └─ 2–3 personal letters
  │        └─ encodes licence class (see table)
  └─ encodes region (M=England, MM=Scotland, MW=Wales, etc.)
```

**Example:** `MM7ABC/P`
- `MM` = Scotland (modern M-series, Scottish prefix)
- `7` = Foundation licence
- `ABC` = personal suffix
- `/P` = operating portable (e.g. SOTA summit)

---

## Prefix and Digit — Licence Class

The digit in the callsign encodes the licence class. Per Ofcom's *Amateur Radio Guidance* (updated 14 October 2025), Table 1 "Amateur Radio Call sign formats":

| Digit | Class | Prefix examples |
|-------|-------|----------------|
| **0** | Full | M0, MM0, MW0, MI0, MD0, MJ0, MU0 |
| **1** | Full | M1, MM1, MW1, MI1, MD1, MJ1, MU1 |
| **5** | Full | M5, MM5, MW5, MI5, MD5, MJ5, MU5 |
| **3** | Foundation | M3, MM3, MW3, MI3, MD3, MJ3, MU3 |
| **6** | Foundation | M6, MM6, MW6, MI6, MD6, MJ6, MU6 |
| **7** | Foundation | M7, MM7, MW7, MI7, MD7, MJ7, MU7 |
| **8** | Intermediate | M8, MM8, MW8, MI8, MD8, MJ8, MU8 — replaced the legacy 2-series from 2025 |
| **9** | Intermediate | M9, MM9, MW9, MI9, MD9, MJ9, MU9 — replaced the legacy 2-series from 2025 |

M8/M9 are issued UK-wide like any other digit, not England-only — they take the normal optional RSL (MM8, MW8, etc.) the same as every other M-series digit.

> **Note:** Digits 2 and 4 are not used in the **M-series**. (G2 and G4 do exist as separate legacy G-series formats — see below.)

**Legacy G-series (still valid — these callsigns were issued before the M-series):**

Unlike the M-series, the digit in a legacy G-series callsign does **not** encode a licence sub-class — Ofcom's Table 1 lists G0 through G8 (G1–G8, plus G0) all under **Full**, regardless of digit. The digit mainly reflects when the callsign was originally issued.

| Legacy prefix | Class | Notes |
|--------------|-------|-------|
| G0–G8 (any single digit) | Full — England | G2-format callsigns are only issued to someone who previously held one; the rest are open |
| GM0–GM8 | Full — Scotland | Legacy G-series, Scottish prefix |
| GW0–GW8 | Full — Wales | Legacy G-series, Welsh prefix |
| GI0–GI8 | Full — N. Ireland | Legacy G-series |
| GD0–GD8 | Full — Isle of Man | Legacy G-series |
| GJ0–GJ8 | Full — Jersey | Legacy G-series |
| GU0–GU8 | Full — Guernsey | Legacy G-series |
| 2E0, 2E1 | Intermediate — England | Legacy intermediate series, still in widespread use |
| 2M0, 2M1 | Intermediate — Scotland | Legacy 2-series |
| 2W0, 2W1 | Intermediate — Wales | Legacy 2-series |
| 2I0, 2I1 | Intermediate — N. Ireland | Legacy 2-series |
| 2D0 | Intermediate — Isle of Man | Legacy 2-series |
| 2J0 | Intermediate — Jersey | Legacy 2-series |
| 2U0 | Intermediate — Guernsey | Legacy 2-series |

> **Historical note:** G6 (issued 1981–83) and G7 (issued 1989–96) were originally **Class B licences — VHF/UHF only, no HF privileges**. When the Class A/B distinction was abolished in 2003, Class B holders gained full HF privileges, so today every G-series holder (whatever the digit) is classed as Full. The digit is a historical marker of issue batch, not a current privilege level.

---

## Regional Secondary Locators (RSLs)

The **Regional Secondary Locator** is the letter (or letters) in the prefix that identifies the region. In the modern M-series the RSL is built into the prefix letter:

| Region | Modern prefix | Legacy RSL (G-series) | Official RSL letter |
|--------|--------------|----------------------|----------------------|
| **England** | M | G | E |
| **Scotland** | MM | GM | M |
| **Wales** | MW | GW | W |
| **Northern Ireland** | MI | GI | I |
| **Isle of Man** | MD | GD | D |
| **Jersey** | MJ | GJ | J |
| **Guernsey** | MU | GU | U |

The RSL indicates where the **operator is licensed**. Per the Ofcom Amateur Radio Wireless Telegraphy Licence Conditions Booklet (OFW611, 21 Feb 2024, Condition 6, clauses 22 and 24), inserting the RSL as a second character is **optional** for everyone except legacy 2-series Intermediate callsigns (clause 23), where it is **mandatory**. England's official RSL letter is "E", but since England needs no regional disambiguation from the base M-series, English operators conventionally omit it — you'll see plain "M0ABC", not "ME0ABC". Operators in Scotland, Wales, and the other regions typically do insert theirs, which is why the region letter appears built into the everyday MM/MW/MI/MD/MJ/MU prefixes.

> **RSL accuracy is a licence condition.** When the RSL is used, it must be correct for the location of the transmission (licence clause 6-23). Using an incorrect RSL (e.g. claiming MM when you are actually in England) is a breach of licence conditions.

### RSL Reference Table

| RSL | Region | Modern equivalent | Example (legacy) | Example (modern) |
|-----|--------|------------------|-----------------|-----------------|
| G | England | M | G4ABC | M0ABC |
| GM | Scotland | MM | GM0XYZ | MM0XYZ |
| GW | Wales | MW | GW4DEF | MW0DEF |
| GI | Northern Ireland | MI | GI4JKL | MI0JKL |
| GD | Isle of Man | MD | GD3MNO | MD3MNO |
| GJ | Jersey | MJ | GJ3PQR | MJ3PQR |
| GU | Guernsey | MU | GU3STU | MU3STU |

---

## Callsign Suffixes — Operating Location Modifiers

A suffix after a forward-slash indicates **how or where** you are currently operating. The current Ofcom licence (OFW611, 21 Feb 2024, Condition 6 clause 26) only says that "any suffix" may be added after the slash — it no longer defines what each one means. The meanings below are established amateur radio convention, not licence text, but they remain in universal use:

| Suffix | Spoken as | Meaning | When to use |
|--------|-----------|---------|-------------|
| **/M** | "stroke Mobile" | Mobile — operating from a moving or stopped vehicle, or on foot | Car, motorcycle, walking with a handheld |
| **/P** | "stroke Portable" | Portable — temporary location with a postal/physical address | SOTA summit, POTA park, contest field, hilltop with a postcode |
| **/A** | "stroke Alpha" or "stroke Alternative" | Alternative premises — a different fixed address from your licence address | Friend's house, hotel room, holiday cottage, club shack |
| **/MM** | "stroke Maritime Mobile" | Maritime mobile — on a vessel at sea | Yacht, cargo vessel, ferry in open water |
| **/AM** | "stroke Aeronautical Mobile" | Aeronautical mobile — airborne | Aircraft; **max 500 mW EIRP, and only on the primary bands where the licence states an airborne power limit** (OFW611 Schedule 1: airborne use is not permitted at all on a band unless an airborne limit is given for it) |
| **/T** | "stroke Temporary" | Temporary location, by convention | Historically: temporary fixed operation — same customary status as the other suffixes above, none are formally defined in the current licence |

### Situation Guide

| Where you are operating | Suffix |
|------------------------|--------|
| Your licence address (home) | None |
| Garden or shed at same address | None |
| Parked car | /M |
| Car in motion | /M |
| Walking with a handheld | /M |
| SOTA or POTA activation (named summit/park) | /P |
| Contest from a field with a postcode | /P |
| Friend's house or holiday cottage | /A |
| Hotel or temporary accommodation | /A |
| Canal boat (inland waterway) | /M |
| Yacht in open sea (international waters) | /MM |
| Commercial aircraft | /AM |

> **On CW:** The "/" is sent as **−··−·** (dah-dit-dit-dah-dit), the internationally recognised fraction bar prosign. Spoken on voice as "stroke" (UK convention) or "slash" (informal).

> **2024 update note:** The 2024 Ofcom licence revision removed formal suffix definitions from the licence document itself (OFW611 Condition 6 clause 26 just permits "any suffix"). The standard suffixes above remain in universal practical use by convention.

---

## Worked Examples — Decoding Real Callsigns

### G0HIQ

| Element | Decoded |
|---------|---------|
| **G** | England (legacy G-series, no RSL letter inserted) |
| **0** | Full licence |
| **HIQ** | Personal suffix |
| **Full read:** | Full-licence holder in England; callsign issued in the pre-M-series era |

---

### 2E0ABC

| Element | Decoded |
|---------|---------|
| **2** | Intermediate licence (legacy 2-series) |
| **E** | England (RSL) |
| **0** | Issued from the first Intermediate block |
| **ABC** | Personal suffix |
| **Full read:** | Intermediate-licence holder in England; callsign predates the M8/M9 series introduced in 2025 |

---

### MM7XYZ/P

| Element | Decoded |
|---------|---------|
| **MM** | Scotland (modern M-series) |
| **7** | Foundation licence |
| **XYZ** | Personal suffix |
| **/P** | Currently operating portable |
| **Full read:** | Scotland-licensed Foundation holder, on a portable activation (e.g. SOTA Munro summit) |

---

### M6ABC/MM

| Element | Decoded |
|---------|---------|
| **M** | England (modern M-series) |
| **6** | Foundation licence |
| **ABC** | Personal suffix |
| **/MM** | Currently at sea (maritime mobile) |
| **Full read:** | England-licensed Foundation holder operating from a vessel in open sea; must comply with maritime operating conditions |

---

### GB100RSGB

| Element | Decoded |
|---------|---------|
| **GB** | Special event / commemorative prefix |
| **100** | Numeric element (centenary indicator) |
| **RSGB** | Event identifier |
| **Full read:** | Commemorative special event callsign marking the RSGB centenary; issued via NoV; operated by a licensed amateur who retains their own callsign for normal operation |

---

## Special and Club Callsigns

### GB — Special Event and Commemorative Callsigns

The **GB prefix** is reserved for special event stations and commemorative operations, issued by Ofcom via a **Notice of Variation (NoV)**. Examples:

- `GB0xxx` — special event station (e.g. airshow, heritage railway, museum)
- `GB2xxx`, `GB4xxx` — club or commemorative
- `GB100RSGB` — RSGB centenary (extended numeric element permitted for commemorative calls)

The Full licence holder who applies for the NoV is legally responsible for the station. They continue to use their own callsign for normal operation — the GB callsign is used only during the special event.

### Club Callsigns

A Full (Club) Licence callsign is built differently from a personal one: it's "G" or "M" followed by three letters, with no digit at all. Community convention (not a formal Ofcom-defined category) commonly uses **X** as the first of those three letters to signal a club station — e.g. a callsign starting GX or MX. There isn't a confirmed, current Ofcom source for a specific meaning behind **GZ** or **MZ** specifically, so no claim is made about those here.

### Callsign of the Year

The RSGB occasionally designates a specific callsign for use by member clubs or at major events (e.g. `GB4GB` for Jamboree on the Air). These are issued via the normal NoV process.

### Licence Class Progression

Per Ofcom's *Amateur Radio Guidance* (updated 14 October 2025): each callsign format (the digit, per the table above) is meant to show the licence level of the station, and Ofcom only ever issues one personal amateur callsign to a given person at a time. Upgrading revokes your lower-class licence and you retain the higher one. Beyond that, ask Ofcom directly (or check the current guidance document) if you need to know exactly what happens to the callsign format itself on upgrade — this sideband doesn't have a confirmed, current source for that specific detail, so it isn't stated here as fact.

---

## Quick Reference

```
LICENCE CLASS (modern M-series):
  Full:         M0, M1, M5  (England)
                MM0 (Scotland), MW0 (Wales), MI0 (N.Ire),
                MD0 (IoM), MJ0 (Jersey), MU0 (Guernsey)
  Intermediate: M8, M9      (UK-wide, from 2025 — replaces the 2-series below)
                2E0, 2E1    (England, legacy)
                2M0 (Scot), 2W0 (Wales), 2I0 (N.Ire)
  Foundation:   M3, M6, M7  (England)
                MM3/6/7 (Scot), MW3/6/7 (Wales), MI3/6/7 (N.Ire)

LEGACY G-SERIES (still valid):
  England:      G + digit (G0, G3, G4, G6, G7...)
  Scotland:     GM + digit
  Wales:        GW + digit
  N. Ireland:   GI + digit
  Isle of Man:  GD + digit
  Jersey:       GJ + digit
  Guernsey:     GU + digit

REGIONAL SECONDARY LOCATORS:
  G=England  GM=Scotland  GW=Wales  GI=N.Ireland
  GD=Isle of Man  GJ=Jersey  GU=Guernsey

OPERATING SUFFIXES:
  /M   Mobile (vehicle, on foot)
  /P   Portable (temporary location)
  /A   Alternative address
  /MM  Maritime mobile (at sea)
  /AM  Aeronautical mobile (500 mW EIRP, primary bands with an airborne limit only)
  /T   Temporary (customary use, not formally defined in the current licence)
```

---

*Sideband snippets are short-form RF-Hub reference topics. They appear in lessons, blog posts, and the knowledge base.*
