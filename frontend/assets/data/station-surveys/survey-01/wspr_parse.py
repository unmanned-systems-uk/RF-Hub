#!/usr/bin/env python3
"""
wspr_parse.py -- turn WSJT-X ALL_WSPR.TXT into a geocoded CSV.

Parses every decode line, decodes the Maidenhead locator to lat/lon,
computes great-circle distance and initial bearing from your own square,
tags the band, and writes wspr_spots.csv.

Also reads WSPR_history.txt (same folder) if present, to count how many
2-minute RX slots were actually spent on each band -- essential for
normalising decode counts when band-hopping.

Usage:
    python wspr_parse.py ALL_WSPR.TXT --mygrid IO85LO
"""
import argparse
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
    df["snr_norm_db"] = df["snr_db"] - df["tx_pwr_dbm"] + 30  # ref 1 W = 30 dBm
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
    return pd.DataFrame(rows)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("allwspr")
    ap.add_argument("--mygrid", required=True)
    ap.add_argument("--outdir", default=".")
    a = ap.parse_args()

    my_lat, my_lon = grid_to_latlon(a.mygrid)
    if my_lat is None:
        sys.exit(f"bad --mygrid: {a.mygrid}")
    print(f"RX site {a.mygrid.upper()} -> {my_lat:.4f} N, {my_lon:.4f} E")

    df, skipped = parse_all_wspr(a.allwspr, my_lat, my_lon)
    out = os.path.join(a.outdir, "wspr_spots.csv")
    df.to_csv(out, index=False)
    print(f"{len(df)} decodes -> {out}  ({skipped} unparsed lines)")
    print(f"  with grid/position: {df['lat'].notna().sum()}")
    print(f"  no grid (type 2)  : {df['lat'].isna().sum()}")

    hist = os.path.join(os.path.dirname(a.allwspr) or ".", "WSPR_history.txt")
    if os.path.exists(hist):
        h = parse_history(hist)
        slots = (h[h["mode"] == "R"].groupby("band")
                 .agg(rx_slots=("band", "size"), decodes=("n_decodes", "sum")))
        slots["decodes_per_slot"] = (slots["decodes"] / slots["rx_slots"]).round(2)
        slots["rx_minutes"] = slots["rx_slots"] * 2
        o2 = os.path.join(a.outdir, "wspr_band_slots.csv")
        slots.to_csv(o2)
        print(f"band-hop slot census -> {o2}")


if __name__ == "__main__":
    main()
