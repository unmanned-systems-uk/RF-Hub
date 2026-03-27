# Lessons Learned — SDR-Agent Sessions

**Format:** For import into CCPM Lessons Learned system
**Created:** 2026-02-17
**Session:** Initial Pi5 setup, USB architecture investigation, Unsquelched content creation

---

## LESSON-001 — Agent Runs Locally on Pi5, Not Remotely

**Category:** anti_pattern
**Severity:** high
**Tags:** environment, ssh, setup

**Description:**
Claude Code runs directly on the Pi5 (`sdr@10.0.1.155`). The CLAUDE.md was written
assuming the agent operated remotely and SSH'd into the Pi5. First session wasted
time attempting `ssh sdr@10.0.1.155` from the Pi5 to itself.

BAD:
```bash
ssh sdr@10.0.1.155 'lsusb'   # SSH to yourself — permission denied
```

GOOD:
```bash
lsusb   # Run directly — we ARE on the Pi5
```

**Fix applied:** Updated CLAUDE.md and MEMORY.md to document local execution.
Never use SSH for local hardware commands.

---

## LESSON-002 — lsusb Cannot Distinguish HackRF One from HackRF Pro

**Category:** best_practice
**Severity:** high
**Tags:** hackrf, udev, usb, identification

**Description:**
HackRF One and HackRF Pro share USB PID `1d50:6089`. lsusb labels both as
`"Great Scott Gadgets HackRF One SDR"` regardless of actual model.
`hackrf_info` is the only reliable identification tool — it queries Board ID:
- Board ID `2` = HackRF One
- Board ID `5` = HackRF Pro

BAD:
```
$ lsusb | grep 6089
Bus 002 Device 003: ID 1d50:6089 ... HackRF One SDR   ← could be either model
```

GOOD:
```bash
hackrf_info   # Reports Board ID, serial, firmware, hardware revision
```

**Always use `hackrf_info` for device identification. Never rely on lsusb descriptions.**

---

## LESSON-003 — sudo-rs Does Not Support -S (Stdin Password)

**Category:** anti_pattern
**Severity:** medium
**Tags:** sudo, permissions, sudo-rs

**Description:**
Ubuntu 25.10 ships `sudo-rs 0.2.8` which does not support reading the password
from stdin via the `-S` flag (unlike traditional sudo). Attempting `echo password | sudo -S command`
fails silently or with auth errors.

BAD:
```bash
echo '053210' | sudo -S tee /etc/udev/rules.d/90-sdr-stable.rules   # Fails
```

GOOD:
```bash
# Set up passwordless sudo once, then all sudo calls work directly:
# /etc/sudoers.d/sdr-nopasswd: sdr ALL=(ALL) NOPASSWD: ALL
sudo tee /etc/udev/rules.d/90-sdr-stable.rules << 'EOF'
...
EOF
```

**Resolution:** Configure passwordless sudo for the sdr user. Validated and working.

---

## LESSON-004 — SDR++ Server Must Be Restarted After USB Changes or Boot

**Category:** best_practice
**Severity:** medium
**Tags:** sdrpp, systemd, usb, boot

**Description:**
`sdrpp-server.service` starts at boot via systemd. If it starts before USB devices
fully enumerate (common after reboot or after udev rule changes), it initialises
without detecting devices. No error is thrown — it just silently has no sources.

Symptoms: client connects but source dropdown is empty or devices missing.

BAD: Assume service restart is not needed after changes.

GOOD:
```bash
sudo systemctl restart sdrpp-server.service
journalctl -u sdrpp-server.service -n 20 --no-pager
# Confirm: "Found Rafael Micro R820T tuner" in log = RTL-SDR detected
# HackRF devices enumerate on client connection, no startup log entry
```

**Consider adding `ExecStartPre=/bin/sleep 5` to service unit for boot delay.**

---

## LESSON-005 — USB Hub Contention Is Measurable with rtl_test + hackrf_transfer

**Category:** best_practice
**Severity:** high
**Tags:** usb, bandwidth, testing, hackrf, rtlsdr, measurement

**Description:**
USB bus contention between devices on a shared hub can be quantified precisely.
Use `rtl_test` (counts lost samples) alongside `hackrf_transfer -r /dev/null`
(reports MB/s throughput) to get hard numbers.

Three-test protocol (run sequentially, 15 seconds each):

```bash
# Test 1 — Baseline
rtl_test -s 2048000

# Test 2 — Medium load
hackrf_transfer -d <serial> -r /dev/null -s 8000000 &
sleep 1 && rtl_test -s 2048000

# Test 3 — Full bandwidth
hackrf_transfer -d <serial> -r /dev/null -s 20000000 &
sleep 1 && rtl_test -s 2048000
```

**Results on Pi5 Bus 004 hub (RTL-SDR + HackRF One):**

| Scenario | RTL-SDR drops | HackRF throughput |
|----------|-------------|------------------|
| RTL-SDR alone | 0 | — |
| + HackRF 8 MSPS | 2/million, 132 bytes | 16.0 MB/s (stable) |
| + HackRF 20 MSPS | 56 bytes | 39.8 → 35.7 MB/s (-10.3%) |

**Key insight:** At 20 MSPS the HackRF itself loses 10.3% throughput — the bus is
saturated and both devices pay. This is rarely documented.

---

## LESSON-006 — Kill Background Processes Explicitly by PID After Subshell

**Category:** anti_pattern
**Severity:** medium
**Tags:** bash, testing, process-management

**Description:**
When running background processes in a Bash command via the Bash tool, `$!` captures
the PID of the subshell wrapper, not necessarily the actual process. Processes may
survive after the command block ends if kill fails silently.

BAD:
```bash
rtl_test -s 2048000 &
RTL_PID=$!
sleep 10
kill $RTL_PID   # May not kill the actual rtl_test process
```

GOOD:
```bash
# Verify process is dead before proceeding
fuser /dev/bus/usb/004/004   # Shows what holds the device
kill $(pgrep rtl_test) 2>/dev/null
```

**Always verify device is released before starting the next test in a series.**

---

## LESSON-007 — mkdir on CIFS/SMB Mounts Reports Permission Error but Succeeds

**Category:** best_practice
**Severity:** low
**Tags:** smb, cifs, nas, filesystem

**Description:**
Creating directories on the NAS GVFS SMB mount (`/home/sdr/cc-share/`) via `mkdir -p`
reports `cannot set permissions: Operation not supported` but the directories ARE created.
This is a CIFS limitation — it cannot set Unix permissions on SMB shares.

BAD: Assume directory creation failed and retry.

GOOD:
```bash
mkdir -p /home/sdr/cc-share/SDR-PI-Dev/reference/unsquelched/{journal,topics,episodes}
# Ignore "cannot set permissions" — verify with ls
ls /home/sdr/cc-share/SDR-PI-Dev/reference/unsquelched/
```

---

## LESSON-008 — cc-share NAS Mount May Not Be Active at Session Start

**Category:** best_practice
**Severity:** medium
**Tags:** nas, smb, gvfs, workflow

**Description:**
`/home/sdr/cc-share` is a symlink to a GVFS SMB mount (`ccpm-nas.local/cc-share`).
The mount requires an active desktop/GVFS session and is not always present.

Always test access at session start:
```bash
ls /home/sdr/cc-share/SDR-PI-Dev/ 2>&1
```

If not mounted, work locally in `/home/sdr/reference/` and sync when available:
```bash
cp /home/sdr/reference/HARDWARE-SURVEY.md /home/sdr/cc-share/SDR-PI-Dev/
```

**Primary working location for all Unsquelched content:** `/home/sdr/cc-share/SDR-PI-Dev/`

---

## LESSON-009 — NotebookLM Produces Accurate Technical Content from Structured Markdown

**Category:** best_practice
**Severity:** low
**Tags:** notebooklm, content, unsquelched, ai-tools

**Description:**
Google NotebookLM (Feb 2026) accurately preserved technical numbers and conclusions
from our structured markdown research documents. SIMD widths, USB bandwidth maths,
and platform comparisons were all reproduced correctly in generated content.

Key factors for accuracy:
- Clear H1/H2/H3 structure in source documents
- Specific numbers with units (not vague descriptions)
- Steering prompt must specify "Expert" expertise level
- Upload UNSQUELCHED-VISION.md as a source for tone/audience context

**sudo-rs does not support -S flag** — this was the biggest surprise.
**NotebookLM Video Overviews produce narrated slides, not full video.**

---

## LESSON-010 — Unsquelched Content Directory Structure

**Category:** best_practice
**Severity:** low
**Tags:** unsquelched, content, workflow, documentation

**Description:**
All Unsquelched content lives in `/home/sdr/cc-share/SDR-PI-Dev/reference/unsquelched/`:

```
unsquelched/
├── README.md          ← explains the system
├── journal/           ← Noise layer: raw session notes, naming: YYYY-MM-DD-topic.md
├── topics/            ← organised reference by subject (distilled from journal)
└── episodes/          ← Signal layer: planned video/article outlines
```

Journal entries are the most important layer — capture immediately after experiments
while observations are fresh. Topics and episodes can be written later from journal.

---

## LESSON-011 — USB Hub Penalises Weaker Device, Not Dominant Device

**Category:** best_practice
**Severity:** high
**Tags:** usb, hub, bandwidth, hackrf, rtlsdr

**Description:**
When two devices share a USB hub, the device with the most pending transfers (highest
bandwidth) dominates. The lower-bandwidth device pays the penalty in lost samples.

At 8 MSPS: HackRF holds 16.0 MB/s perfectly. RTL-SDR loses 2 samples/million.
At 20 MSPS: Bus saturates. HackRF loses 10.3% throughput. RTL-SDR loses 56 bytes.

**The hub does not share fairly.** Priority goes to the dominant device.
At saturation, BOTH devices lose data — the dominant device loses throughput,
the weaker device loses sample integrity.

**Practical impact at 20 MSPS on shared hub:**
- ~246 MB of corrupt/missing HackRF IQ data per hour of recording
- ~528 bytes of RTL-SDR data lost per minute (ADS-B/ISM decoder silent data loss)

---

*End of lessons — import into CCPM Lessons Learned system in next session.*
