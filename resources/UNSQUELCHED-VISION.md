# Unsquelched — Project Vision

**Format:** YouTube Channel + Website
**Community:** Amateur (Ham) Radio & Software Defined Radio
**Created:** 2026-02-17

---

## The Name

In radio, **squelch** silences the receiver when there's no strong signal — it cuts out the noise, the static, the weak transmissions. Everything messy gets suppressed. You only hear what's clean.

**Unsquelched** is the opposite. Turn the squelch off and you hear everything — the signal *and* the noise. The static, the interference, the faint signals hiding in the background. The full picture.

That's exactly what this project is.

---

## The Mission

Most SDR and ham radio content online shows you the polished result. A 10-minute video where everything works first time. A blog post with clean screenshots and tidy commands. The impression that it's straightforward — if you just follow the steps.

It isn't. And everyone who's tried knows it.

**Unsquelched exists to share the full journey** — not just where we ended up, but every wrong turn, failed experiment, confusing error message, and late-night debugging session that got us there. The knowledge that usually gets lost.

This is a learning journal, shared openly with the ham and SDR community.

---

## The Two-Layer Approach

Every piece of Unsquelched content has two layers, always linked:

### Layer 1 — The Signal
*Polished. Concise. Practical.*

A clean, well-produced video or article that answers the question directly.

- "How to set up SDR on a Raspberry Pi 5"
- "Decoding ADS-B aircraft with an RTL-SDR"
- "Understanding USB bandwidth limits for HackRF"

Watch it, follow the steps, it works. 5–15 minutes. Professional quality. Useful on its own.

### Layer 2 — The Noise
*Raw. Honest. Unfiltered.*

The backstory. Everything that happened before the polished version existed.

Every mistake made. Every assumption that turned out to be wrong. Every forum post read at midnight. Every time something broke and had to be figured out from first principles.

30, 60, sometimes 120 minutes. Not always pretty. But real — and far more educational than the highlight reel.

> The Signal tells you what to do.
> The Noise teaches you how to think.

Both layers matter. The link between them is what makes Unsquelched different.

---

## The Learning Journey

Unsquelched is not a finished expert sharing knowledge from the top of the mountain. It is an **active learning journey**, documented in real time.

**Starting point:** A Raspberry Pi 5 CM5, a HackRF Pro, a HackRF One, and an RTL-SDR. A valley with challenging RF propagation. A curiosity about radio.

**Near-term goal:** Earn an amateur (ham) radio licence.

**Longer-term goal:** Design and build a satellite tracking antenna system.

Everything in between — every experiment, every discovery, every failure — is content. The journey *is* the channel.

---

## Who It's For

- People curious about SDR who don't know where to start
- Licence candidates who want to understand the *why* behind the theory
- Licensed hams exploring software-defined radio
- Anyone who has followed a tutorial, hit a wall the tutorial didn't mention, and felt alone in that

---

## The Hardware Platform

The experiments, builds, and explorations on Unsquelched are built around:

| Device | Role |
|--------|------|
| Raspberry Pi 5 CM5 Lite (16 GB) | Primary SDR host — portable/field platform |
| HackRF Pro ("Praline") | High-bandwidth experiments, 100 kHz – 6 GHz |
| HackRF One + Opera Cake | Antenna switching, dual-band, TX/RX experiments |
| Nooelec RTL-SDR SMArt v5 | Always-on monitoring — ADS-B, ISM, weather |
| U-Blox GNSS | Precision timing, geolocation |

RF environment: a valley — challenging propagation, which drives creative antenna and receiver work.

---

## Content Themes

- **SDR fundamentals** — how software-defined radio works, from first principles
- **Antenna design and building** — theory, construction, testing, and the valley problem
- **Amateur radio licence preparation** — working toward the exam, in the open
- **Signal decoding** — ADS-B, ISM sensors, weather satellites, and more
- **Platform engineering** — the Pi5, USB architecture, udev, systemd services, the unglamorous infrastructure
- **Satellite tracking** — the long-term build goal, documented from the beginning
- **Experiments that fail** — because they always do, and that's where the learning is

---

## Tone and Values

- **Honest** — we show what didn't work, not just what did
- **Practical** — grounded in real hardware, real signals, real constraints
- **Accessible** — no assumed knowledge; jargon explained when used
- **Patient** — the Noise layer exists because some things take time to understand
- **Community-first** — sharing back to the ham and SDR community that produces so much freely

---

*Unsquelched. Turn the squelch off. Hear everything.*
