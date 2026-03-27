# RF-Hub Terrain-Aware Propagation Analyser — Concept Document

## The Idea

A web-based tool on RF-Hub that takes a location, ingests terrain elevation
data, overlays antenna radiation patterns, and correlates with real-world
propagation data to predict and explain what you can hear — and why.

This is the intersection of three things that don't currently exist together:
1. **Terrain analysis** (what the hills block)
2. **Antenna modelling** (where the antenna listens)
3. **Live propagation data** (what's actually getting through)

Existing tools do pieces of this — VOACAP does ionospheric prediction, Radio
Mobile does terrain profiles, WSPRnet has live data — but nobody combines
them into an interactive, educational tool that explains the *why* alongside
the *what*.

**The AI angle:** Claude (via API or Claude Code) can ingest the terrain data,
the antenna parameters, and the propagation data, then generate natural-
language analysis: "Your terrain blocks signals below 8° elevation from the
north. However, WSPR spots from GM stations to the north are being received,
which suggests diffraction over the Moorfoot ridge or NVIS propagation rather
than low-angle skywave."

That's the kind of insight that takes an experienced amateur years to develop
intuitively. An AI tool that does it from data would be genuinely useful to
learners.

---

## Data Sources

### 1. Terrain Elevation — SRTM / Google Elevation API

**SRTM (Shuttle Radar Topography Mission)** data provides ~30m resolution
elevation data globally. Available free from NASA/USGS.

- Format: GeoTIFF or HGT files, tiled by 1° x 1° lat/lon
- Resolution: 1 arc-second (~30m) for most of the world
- Coverage: 60°N to 56°S (Scottish Borders at ~55.6°N is at the edge)
- Source: https://earthexplorer.usgs.gov/ or OpenTopography

**Google Elevation API** provides spot elevation queries and path profiles.
- Up to 512 points per request
- Returns elevation in metres for any lat/lon
- Can generate terrain cross-sections along any bearing
- Requires API key, has usage limits (free tier: ~28k requests/month)

**What we build:** For a given antenna location, generate 360° terrain
profiles computing the horizon angle at each bearing. This gives us a
"terrain mask" — the minimum elevation angle from which signals can arrive.

### 2. Antenna Radiation Pattern

**For simple wire antennas** (dipole, EFHW, long wire), the radiation pattern
can be computed analytically or from NEC2 modelling data.

- Pattern depends on: wire length (in wavelengths), height, ground
  conductivity, slope angle
- For the LWHF-160 and BH7JYR EFHW, we know the wire lengths
- Patterns can be pre-computed and stored as gain-vs-angle lookup tables

**What we build:** A pattern library for common wire antenna types. User
enters wire length, height, orientation → tool generates the 3D pattern
and overlays it on the terrain mask.

### 3. NCDXF/IARU Beacon Network

18 beacons worldwide on 14.100, 18.110, 21.150, 24.930, 28.200 MHz in a
known 3-minute rotation. Each transmits at 100W, 10W, 1W, 0.1W.
GPS-synchronised timing. Bearing from Scottish Borders computable.

**What we build:** SDR monitors beacon frequencies continuously. Log which
beacons received and at what SNR. Build directional propagation map over
time and correlate with terrain mask.

### 4. WSPRnet — Crowdsourced Propagation Data

**wspr.live** provides an open SQL-queryable database:
- ~8.6 billion historical spots since 2008
- ~280,000 new spots per hour
- Columns: time, band, TX/RX call, TX/RX grid, SNR, distance, azimuth
- ClickHouse backend — fast aggregate queries
- Free API access, read-only, rate-limited

**What we build:** Query wspr.live for spots received in the grid square
(IO85 or IO75). Filter by band, time, azimuth. Build heatmap: received SNR
vs azimuth vs time-of-day → overlay on terrain mask.

### 5. PSK Reporter / Reverse Beacon Network

Additional data sources: FT8, FT4, CW spots. Denser coverage than WSPR.
- **PSK Reporter:** https://pskreporter.info/
- **Reverse Beacon Network:** https://www.reversebeacon.net/
Both queryable by grid square and time.

### 6. Solar/Ionospheric Data

- **NOAA Space Weather:** Solar flux (SFI), A-index, K-index, sunspot number
- **IPS Radio and Space Services:** foF2 (critical frequency) data
- **VOACAP / ITURHFPROP:** Ionospheric propagation prediction engines

These feed the prediction side: given current solar conditions, what
*should* propagation look like? Compare with what the SDR actually receives.

---

## Architecture — What Gets Built

### Phase A: Static Terrain Analysis (buildable now)

**Input:** Lat/lon of antenna location, antenna height, wire orientation
**Process:**
1. Fetch elevation data (Google Elevation API or cached SRTM tiles)
2. Compute 360° terrain profiles (terrain mask)
3. Compute antenna radiation pattern for specified wire type
4. Overlay pattern on terrain mask
5. Generate "effective coverage" map

**Output:** Terrain mask visualisation, antenna pattern overlay, blocked
directions summary, natural-language AI analysis.

**Technology:** Node.js backend, HTML5 Canvas / Three.js, Claude API.

### Phase B: Historical Propagation Correlation

**Input:** Grid square, date range, bands of interest
**Process:** Query wspr.live, aggregate by azimuth/band/time, compare
actual vs terrain mask predictions, identify anomalies.

**Output:** Azimuth-resolved propagation heatmap, expected vs actual
comparison, time-of-day variation, AI analysis explaining anomalies.

### Phase C: Live Monitoring Dashboard

**Input:** SDR I/Q stream from remote Pi, beacon schedule, wspr.live feed
**Output:** Live RF-Hub dashboard showing current band conditions by
direction, beacon reception status, WSPR spot feed overlaid on terrain,
AI-generated propagation summary.

### Phase D: Prediction Engine

**Input:** Current solar indices, time of day, antenna parameters, terrain
**Process:** Run VOACAP/ITURHFPROP predictions, modify with terrain mask
and antenna pattern, compare prediction with live data (feedback loop).

**Output:** "What should I hear right now?" prediction, forecast, accuracy
tracking over time.

---

## Why This Matters for RF-Hub

### Educational value
Every piece teaches something: terrain profiles → propagation, antenna
patterns → radiation theory (Lesson 3), WSPR data → propagation modes,
beacon monitoring → measurement methodology, prediction engines →
ionospheric physics, AI analysis → interpreting data.

### AI-transparent development
Concrete example of AI as genuine collaborator in amateur radio. AI doesn't
replace the hobby — it makes the hobby more accessible to learners who don't
have 30 years of propagation intuition.

### Unsquelched content
The development of this tool is itself a story: building the analysis,
first correlations, "the AI thinks the hills should block this but I'm
receiving it anyway — what's going on?"

---

## Build Priority

| Phase | Effort | Value | Dependencies |
|-------|--------|-------|-------------|
| A: Static terrain analysis | Medium | High | Google Elevation API key |
| B: Historical WSPR correlation | Medium | Very High | wspr.live API (free) |
| C: Live monitoring | High | High | Remote SDR operational |
| D: Prediction engine | Very High | Medium | VOACAP integration, Phase C |

**Recommended start:** Phase A + B in parallel. Neither requires the remote
SDR to be operational.

---

## Technical Notes

- **SRTM coverage at 55.6°N:** Within coverage (60°N limit). Verify tile.
- **Grid square:** IO85 (possibly IO75). Determines WSPR query filter.
- **wspr.live query example:**
```sql
SELECT tx_sign, tx_loc, rx_sign, rx_loc, snr, distance, azimuth, band
FROM wspr
WHERE rx_loc LIKE 'IO85%'
  AND band = 7
  AND time > '2026-03-01'
ORDER BY time DESC
LIMIT 1000
```
- **PoE at 100m:** At 802.3af/at spec limit. Consider 802.3bt if needed.

---

## Open Questions

- [ ] Confirm exact lat/lon for antenna location
- [ ] Confirm Maidenhead grid square
- [ ] Google Elevation API key — does RF-Hub have one?
- [ ] SRTM tile availability at this latitude
- [ ] Antenna pattern computation: NEC2 or analytical approximation?
- [ ] Run WSPR receive as part of SDR deployment? (site-specific data)
