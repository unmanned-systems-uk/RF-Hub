#!/usr/bin/env python3
"""
wspr_parse.py -- turn WSJT-X ALL_WSPR.TXT into a geocoded CSV.

Parses every decode line, decodes the Maidenhead locator to lat/lon,
computes great-circle distance and initial bearing from your own square,
tags the band, and writes wspr_spots.csv.

Also reads WSPR_history.txt (same folder) if present, to count how many
2-minute RX slots were actually spent on each band -- essential for
normalising decode counts when band-hopping.

Since 2026-09: supports MULTIPLE tagged instances (e.g. two WSJT-X copies
listening on two different antennas at once). Each instance's decodes are
tagged with an 'antenna' + 'antenna_label' column (appended at the END of
wspr_spots.csv / wspr_band_slots.csv so existing readers keep working).
When exactly two instances are given, a derived wspr_pairs.csv and
wspr_pairs_summary.json are also written -- see build_pairs() docstring
for the "both running" rule.

Usage (legacy, single instance -- unchanged, now tags antenna=longwire):
    python wspr_parse.py ALL_WSPR.TXT --mygrid IO85LO

Usage (multi-instance, repeat --instance once per antenna):
    python wspr_parse.py --mygrid IO85LO \\
        --instance "raw/ALL_WSPR.TXT|longwire|40 m long wire (ANT1)" \\
        --instance "raw/hf360/ALL_WSPR.TXT|hf360|Sigma HF-360 XP (ANT2)"

Each instance's WSPR_history.txt is expected next to its ALL_WSPR.TXT.
Instance specs use '|' as the delimiter because it is a reserved character
in Windows paths, so it can never collide with a real file path.
"""
import argparse
import json
import math
import os
import re
import sys
import pandas as pd

# --------------------------------------------------------------------------
# Maidenhead
# --------------------------------------------------------------------------
GRID_RE = re.compile(r'^[A-R]{2}[0-9]{2}([A-X]{2})?$', re.I)


def grid_to_latlon(grid):
    """Maidenhead locator -> (lat, lon) of the CENTRE of the square.

    Handles 4-char (field+square) and 6-char (+subsquare) locators.
    Field   = 20 deg lon x 10 deg lat
    Square  =  2 deg lon x  1 deg lat
    Subsq   =  5 min lon x 2.5 min lat  (2/24 deg lon x 1/24 deg lat)
    """
    g = grid.strip().upper()
    if not GRID_RE.match(g):
        return (None, None)

    lon = -180.0 + (ord(g[0]) - ord('A')) * 20.0
    lat = -90.0 + (ord(g[1]) - ord('A')) * 10.0

    lon += int(g[2]) * 2.0
    lat += int(g[3]) * 1.0

    if len(g) >= 6:
        lon += (ord(g[4]) - ord('A')) * (2.0 / 24.0)
        lat += (ord(g[5]) - ord('A')) * (1.0 / 24.0)
        lon += (2.0 / 24.0) / 2.0          # centre of subsquare
        lat += (1.0 / 24.0) / 2.0
    else:
        lon += 1.0                          # centre of square
        lat += 0.5

    return (round(lat, 6), round(lon, 6))


# --------------------------------------------------------------------------
# Geodesy (spherical, R = 6371.0088 km -- ~0.5% worst case vs WGS84, fine here)
# --------------------------------------------------------------------------
R_EARTH_KM = 6371.0088


def haversine_km(lat1, lon1, lat2, lon2):
    p1, p2 = math.radians(lat1), math.radians(lat2)
    dp = p2 - p1
    dl = math.radians(lon2 - lon1)
    a = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * R_EARTH_KM * math.asin(min(1.0, math.sqrt(a)))


def initial_bearing_deg(lat1, lon1, lat2, lon2):
    """Great-circle bearing FROM point 1 TO point 2, degrees true, 0-360."""
    p1, p2 = math.radians(lat1), math.radians(lat2)
    dl = math.radians(lon2 - lon1)
    y = math.sin(dl) * math.cos(p2)
    x = math.cos(p1) * math.sin(p2) - math.sin(p1) * math.cos(p2) * math.cos(dl)
    return (math.degrees(math.atan2(y, x)) + 360.0) % 360.0


# --------------------------------------------------------------------------
# Band plan (WSPR dial frequencies, MHz)
# --------------------------------------------------------------------------
BANDS = [
    (0.135, 0.138, "2200m"), (0.472, 0.480, "630m"), (1.836, 1.840, "160m"),
    (3.567, 3.573, "80m"),   (5.287, 5.290, "60m"),  (7.038, 7.042, "40m"),
    (10.138, 10.142, "30m"), (14.095, 14.098, "20m"), (18.104, 18.107, "17m"),
    (21.094, 21.098, "15m"), (24.924, 24.928, "12m"), (28.124, 28.128, "10m"),
    (50.293, 50.296, "6m"),  (70.091, 70.093, "4m"),  (144.489, 144.492, "2m"),
]


def band_of(mhz):
    for lo, hi, name in BANDS:
        if lo <= mhz <= hi:
            return name
    return f"{mhz:.4f}MHz"


# --------------------------------------------------------------------------
# ALL_WSPR.TXT
# --------------------------------------------------------------------------
# Trailing numeric block written by WSJT-X after the message:
#   drift sync ipass blocksize jitter decodetype nhardmin cycles metric
N_TRAILING = 9


def parse_all_wspr(path, my_lat, my_lon):
    rows, skipped = [], 0
    with open(path, "r", errors="replace") as fh:
        for line in fh:
            t = line.split()
            if len(t) < 5 + 1 + N_TRAILING:
                if line.strip():
                    skipped += 1
                continue
            try:
                ymd, hm = t[0], t[1]
                snr = int(t[2])
                dt = float(t[3])
                freq = float(t[4])
            except ValueError:
                skipped += 1
                continue

            msg = t[5:-N_TRAILING]
            tail = t[-N_TRAILING:]
            try:
                drift = int(tail[0])
                sync = float(tail[1])
            except ValueError:
                drift, sync = None, None

            call, grid, pwr_dbm, mtype = None, None, None, None
            if len(msg) == 3 and GRID_RE.match(msg[1]):
                # Type 1: CALL GRID4 PWR   |  Type 3: <CALL> GRID6 PWR
                call, grid = msg[0], msg[1].upper()
                pwr_dbm = int(msg[2]) if msg[2].lstrip('-').isdigit() else None
                mtype = 3 if call.startswith('<') else 1
            elif len(msg) == 2:
                # Type 2: compound callsign, no grid transmitted
                call = msg[0]
                pwr_dbm = int(msg[1]) if msg[1].lstrip('-').isdigit() else None
                mtype = 2
            else:
                call = " ".join(msg)
                mtype = 0

            lat, lon = grid_to_latlon(grid) if grid else (None, None)
            dist = bear = None
            if lat is not None:
                dist = round(haversine_km(my_lat, my_lon, lat, lon), 1)
                bear = round(initial_bearing_deg(my_lat, my_lon, lat, lon), 1)

            rows.append(dict(
                timestamp=pd.to_datetime(f"20{ymd} {hm}", format="%Y%m%d %H%M", utc=True),
                band=band_of(freq), freq_mhz=freq, callsign=call, grid=grid,
                lat=lat, lon=lon, dist_km=dist, bearing_deg=bear,
                snr_db=snr, dt_s=dt, drift_hz=drift, sync=sync,
                tx_pwr_dbm=pwr_dbm, tx_pwr_w=(round(10 ** (pwr_dbm / 10.0) / 1000.0, 4)
                                              if pwr_dbm is not None else None),
                msg_type=mtype,
            ))

    df = pd.DataFrame(rows).sort_values("timestamp").reset_index(drop=True)
    # SNR per watt of TX power -- crude but lets you compare a 200 mW beacon
    # against a 5 W station on something closer to equal terms.
    if not df.empty:
        df["snr_norm_db"] = df["snr_db"] - df["tx_pwr_dbm"] + 30  # ref 1 W = 30 dBm
    else:
        df["snr_norm_db"] = pd.Series(dtype=float)
    return df, skipped


def parse_history(path):
    """WSPR_history.txt: YYMMDD HHMM freq_MHz R|T ndecodes -> slots per band."""
    rows = []
    with open(path, "r", errors="replace") as fh:
        for line in fh:
            t = line.split()
            if len(t) < 5:
                continue
            try:
                rows.append(dict(
                    timestamp=pd.to_datetime(f"20{t[0]} {t[1]}", format="%Y%m%d %H%M", utc=True),
                    band=band_of(float(t[2])), mode=t[3], n_decodes=int(t[4])))
            except ValueError:
                continue
    return pd.DataFrame(rows, columns=["timestamp", "band", "mode", "n_decodes"])


# --------------------------------------------------------------------------
# Multi-instance orchestration
# --------------------------------------------------------------------------
def band_slots_from_history(hist, antenna, antenna_label):
    """Per-band RX slot census for ONE instance's history, tagged with its antenna."""
    if hist.empty:
        return pd.DataFrame(columns=["band", "rx_slots", "decodes", "decodes_per_slot",
                                      "rx_minutes", "antenna", "antenna_label"])
    slots = (hist[hist["mode"] == "R"].groupby("band")
             .agg(rx_slots=("band", "size"), decodes=("n_decodes", "sum")))
    if slots.empty:
        return pd.DataFrame(columns=["band", "rx_slots", "decodes", "decodes_per_slot",
                                      "rx_minutes", "antenna", "antenna_label"])
    slots["decodes_per_slot"] = (slots["decodes"] / slots["rx_slots"]).round(2)
    slots["rx_minutes"] = slots["rx_slots"] * 2
    slots = slots.reset_index()
    slots["antenna"] = antenna
    slots["antenna_label"] = antenna_label
    return slots


def build_pairs(spots_by_antenna, hist_by_antenna):
    """Compare exactly two antennas' decodes slot-by-slot.

    "Both running" rule: a (timestamp, band) slot counts as both-running when
    BOTH instances logged a mode='R' row for it in their own WSPR_history.txt
    -- i.e. both WSJT-X copies were actively RXing that band on that 2-minute
    cycle, regardless of whether either one decoded anything. This is the
    "ALL_WSPR slot marker" per instance, not a merge of decodes, so a slot
    where one antenna was on a different band (or WSJT-X wasn't running)
    correctly does not count.

    Within each both-running slot, a callsign decoded by both antennas
    becomes one "pairs" row (with the SNR each antenna measured); a callsign
    decoded by only one becomes an "only_<antenna>" count in the summary.

    Returns (pairs_df, summary_dict), or (None, None) if not exactly two
    antennas have data.
    """
    ids = list(spots_by_antenna.keys())
    if len(ids) != 2:
        return None, None
    a1, a2 = ids  # a1 = first-configured instance (baseline), a2 = second

    def slot_set(hist):
        if hist is None or hist.empty:
            return set()
        r = hist[hist["mode"] == "R"]
        return set(zip(r["timestamp"], r["band"]))

    both_running = slot_set(hist_by_antenna.get(a1)) & slot_set(hist_by_antenna.get(a2))

    def slot_callsigns(df):
        if df.empty:
            return pd.Series(dtype=object)
        return df.groupby(["timestamp", "band"])["callsign"].apply(set)

    cs1 = slot_callsigns(spots_by_antenna[a1])
    cs2 = slot_callsigns(spots_by_antenna[a2])

    def lookup(df):
        if df.empty:
            return {}
        d = df.drop_duplicates(subset=["timestamp", "band", "callsign"], keep="first")
        d = d.set_index(["timestamp", "band", "callsign"])
        return d[["grid", "dist_km", "bearing_deg", "snr_db"]].to_dict("index")

    lk1, lk2 = lookup(spots_by_antenna[a1]), lookup(spots_by_antenna[a2])

    def new_stat():
        return {"both_running_slots": 0, "pairs": 0, f"only_{a1}": 0, f"only_{a2}": 0, "_diffs": []}

    overall = new_stat()
    by_band = {}
    pair_rows = []

    for ts, band in sorted(both_running):
        overall["both_running_slots"] += 1
        bstat = by_band.setdefault(band, new_stat())
        bstat["both_running_slots"] += 1

        set1 = cs1.get((ts, band), set())
        set2 = cs2.get((ts, band), set())
        common = set1 & set2
        only1, only2 = set1 - set2, set2 - set1

        overall[f"only_{a1}"] += len(only1)
        overall[f"only_{a2}"] += len(only2)
        bstat[f"only_{a1}"] += len(only1)
        bstat[f"only_{a2}"] += len(only2)

        for call in common:
            r1 = lk1.get((ts, band, call))
            r2 = lk2.get((ts, band, call))
            if r1 is None or r2 is None:
                continue  # shouldn't happen (dupe collapse edge case) -- be defensive
            diff = round(r2["snr_db"] - r1["snr_db"], 1)
            pair_rows.append({
                "timestamp": ts, "band": band, "callsign": call,
                "grid": r1["grid"] if r1["grid"] else r2["grid"],
                "dist_km": r1["dist_km"] if r1["dist_km"] is not None else r2["dist_km"],
                "bearing_deg": r1["bearing_deg"] if r1["bearing_deg"] is not None else r2["bearing_deg"],
                f"snr_{a1}": r1["snr_db"], f"snr_{a2}": r2["snr_db"],
                "snr_diff": diff,
            })
            overall["pairs"] += 1
            overall["_diffs"].append(diff)
            bstat["pairs"] += 1
            bstat["_diffs"].append(diff)

    def finalize(stat):
        diffs = stat.pop("_diffs")
        s = pd.Series(diffs, dtype=float)
        stat["snr_diff_mean"] = round(float(s.mean()), 2) if len(s) else None
        stat["snr_diff_median"] = round(float(s.median()), 2) if len(s) else None
        return stat

    summary = {
        "generated_utc": pd.Timestamp.now("UTC").strftime("%Y-%m-%dT%H:%M:%SZ"),
        "antennas": [a1, a2],
        "rule": ("A (timestamp, band) slot counts as 'both running' when both antennas "
                 "logged a mode=R row for it in their own WSPR_history.txt, i.e. both "
                 "WSJT-X instances were actively RXing that band on that 2-minute cycle "
                 "-- independent of whether either one decoded anything. snr_diff = "
                 f"snr_{a2} - snr_{a1}."),
        "overall": finalize(overall),
        "by_band": {b: finalize(s) for b, s in sorted(by_band.items())},
    }

    cols = ["timestamp", "band", "callsign", "grid", "dist_km", "bearing_deg",
            f"snr_{a1}", f"snr_{a2}", "snr_diff"]
    pairs_df = (pd.DataFrame(pair_rows, columns=cols).sort_values("timestamp").reset_index(drop=True)
                if pair_rows else pd.DataFrame(columns=cols))
    return pairs_df, summary


def parse_instance_spec(spec):
    """'PATH|ID|LABEL' -> (path, id, label). '|' is illegal in Windows paths,
    so it can never collide with a real file path."""
    parts = spec.split("|", 2)
    if len(parts) != 3:
        sys.exit(f"bad --instance spec (need PATH|ID|LABEL): {spec}")
    return parts[0], parts[1], parts[2]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("allwspr", nargs="?",
                     help="Single ALL_WSPR.TXT (legacy mode; ignored if --instance given)")
    ap.add_argument("--mygrid", required=True)
    ap.add_argument("--outdir", default=".")
    ap.add_argument("--antenna", default="longwire",
                     help="Antenna id for legacy single-file mode (default: longwire, "
                          "since the long wire is normally the sole/first antenna on the IC-7610)")
    ap.add_argument("--antenna-label", default="40 m long wire (ANT1)",
                     help="Antenna label for legacy single-file mode")
    ap.add_argument("--instance", action="append", default=[],
                     help="Repeatable 'PATH|ID|LABEL' for multi-instance mode. "
                          "Each instance's WSPR_history.txt is expected next to its ALL_WSPR.TXT. "
                          "Overrides the positional argument.")
    a = ap.parse_args()

    my_lat, my_lon = grid_to_latlon(a.mygrid)
    if my_lat is None:
        sys.exit(f"bad --mygrid: {a.mygrid}")
    print(f"RX site {a.mygrid.upper()} -> {my_lat:.4f} N, {my_lon:.4f} E")

    if a.instance:
        instances = [parse_instance_spec(s) for s in a.instance]
    else:
        if not a.allwspr:
            sys.exit("need either a positional ALL_WSPR.TXT path or one/more --instance")
        instances = [(a.allwspr, a.antenna, a.antenna_label)]

    spot_frames, slot_frames = [], []
    spots_by_antenna, hist_by_antenna = {}, {}
    total_skipped = 0

    for path, aid, alabel in instances:
        if not os.path.exists(path):
            print(f"  [skip] {aid}: {path} not found")
            continue
        df, skipped = parse_all_wspr(path, my_lat, my_lon)
        df["antenna"], df["antenna_label"] = aid, alabel
        total_skipped += skipped
        spot_frames.append(df)
        spots_by_antenna[aid] = df
        print(f"  {aid:>12}: {len(df)} decodes from {path} ({skipped} unparsed)")

        hist_path = os.path.join(os.path.dirname(path) or ".", "WSPR_history.txt")
        hist = parse_history(hist_path) if os.path.exists(hist_path) else pd.DataFrame(
            columns=["timestamp", "band", "mode", "n_decodes"])
        hist_by_antenna[aid] = hist
        bslots = band_slots_from_history(hist, aid, alabel)
        if not bslots.empty:
            slot_frames.append(bslots)

    if not spot_frames:
        sys.exit("no instance produced any data - nothing to write")

    combined = pd.concat(spot_frames, ignore_index=True).sort_values("timestamp").reset_index(drop=True)
    out = os.path.join(a.outdir, "wspr_spots.csv")
    combined.to_csv(out, index=False)
    print(f"{len(combined)} decodes total -> {out} ({total_skipped} unparsed lines)")
    print(f"  with grid/position: {combined['lat'].notna().sum()}")
    print(f"  no grid (type 2)  : {combined['lat'].isna().sum()}")

    if slot_frames:
        slots_all = pd.concat(slot_frames, ignore_index=True)
        o2 = os.path.join(a.outdir, "wspr_band_slots.csv")
        slots_all.to_csv(o2, index=False)
        print(f"band-hop slot census ({len(instances)} instance(s)) -> {o2}")

    if len(spots_by_antenna) == 2:
        pairs_df, summary = build_pairs(spots_by_antenna, hist_by_antenna)
        p_out = os.path.join(a.outdir, "wspr_pairs.csv")
        pairs_df.to_csv(p_out, index=False)
        s_out = os.path.join(a.outdir, "wspr_pairs_summary.json")
        with open(s_out, "w") as fh:
            json.dump(summary, fh, indent=2)
        print(f"{len(pairs_df)} paired decodes -> {p_out}")
        print(f"pair summary ({summary['overall']['both_running_slots']} both-running slots) -> {s_out}")
    elif len(instances) > 1:
        print(f"pairs file needs exactly 2 antennas with data; found {len(spots_by_antenna)}, skipping")


if __name__ == "__main__":
    main()
