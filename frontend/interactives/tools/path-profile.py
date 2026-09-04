#!/usr/bin/env python3
"""
path-profile.py — Point-to-point terrain profile from Copernicus GLO-30 DSM.

Extracts ground elevation along a great-circle path and writes a JSON file
suitable for embedding in the signal-path-profile.html interactive.

Earth-curvature geometry (same as horizon.py):
  The effective earth bulge at range d from observer is d² / (2 * Re_eff)
  where Re_eff = k * 6371 km and k = 4/3 (standard radio refraction).
  This is stored as the 'bulge_m' field in each profile sample so the
  browser can draw a curved effective earth without redoing the maths.

Usage:
  python3 path-profile.py [options]
  python3 path-profile.py --from-lat 55.9222 --from-lon -3.1863 \\
                           --to-lat 55.6244 --to-lon -3.0162 \\
                           --out .../edinburgh-io85lo.json

Run from /mnt/cc-share/RF-Hub/WSPR_Analysis/ (where dem/ lives).
"""

import argparse, glob, json, math
import numpy as np
import rasterio
from rasterio.merge import merge

R_EARTH_M = 6_371_008.8
K_REFRACT  = 4.0 / 3.0
RE_EFF     = K_REFRACT * R_EARTH_M


# ── great-circle helpers ──────────────────────────────────────────────────────

def haversine_m(lat1, lon1, lat2, lon2):
    """Great-circle distance in metres."""
    lat1, lon1, lat2, lon2 = map(math.radians, [lat1, lon1, lat2, lon2])
    dlat = lat2 - lat1
    dlon = lon2 - lon1
    a = math.sin(dlat/2)**2 + math.cos(lat1)*math.cos(lat2)*math.sin(dlon/2)**2
    return 2 * R_EARTH_M * math.asin(math.sqrt(max(0.0, a)))


def initial_bearing(lat1, lon1, lat2, lon2):
    """Initial bearing (degrees, 0=N) from (lat1,lon1) to (lat2,lon2)."""
    lat1, lon1, lat2, lon2 = map(math.radians, [lat1, lon1, lat2, lon2])
    dlon = lon2 - lon1
    x = math.sin(dlon) * math.cos(lat2)
    y = math.cos(lat1)*math.sin(lat2) - math.sin(lat1)*math.cos(lat2)*math.cos(dlon)
    return (math.degrees(math.atan2(x, y)) + 360) % 360


def dest_point(lat1, lon1, bearing_deg, dist_m):
    """Great-circle destination. Scalar or numpy-array dist_m."""
    d  = dist_m / R_EARTH_M
    br = math.radians(bearing_deg)
    p1 = math.radians(lat1)
    l1 = math.radians(lon1)
    sp, cp = math.sin(p1), math.cos(p1)
    p2 = np.arcsin(sp * np.cos(d) + cp * np.sin(d) * math.cos(br))
    l2 = l1 + np.arctan2(math.sin(br) * np.sin(d) * cp,
                         np.cos(d) - sp * np.sin(p2))
    return np.degrees(p2), np.degrees(l2)


# ── DEM sampling ──────────────────────────────────────────────────────────────

def build_mosaic(dem_glob, bbox):
    """Merge DEM tiles clipped to bbox (minlon, minlat, maxlon, maxlat)."""
    paths = sorted(glob.glob(dem_glob))
    if not paths:
        raise SystemExit(f"No DEM tiles matched: {dem_glob}")
    srcs = [rasterio.open(p) for p in paths]
    arr, transform = merge(srcs, bounds=bbox)
    nodata = srcs[0].nodata
    dem = arr[0].astype("float32")
    if nodata is not None:
        dem[dem == nodata] = np.nan
    for s in srcs:
        s.close()
    return dem, transform


def make_sampler(dem, transform):
    inv = ~transform
    nrow, ncol = dem.shape
    def sample(lats, lons):
        cols, rows = inv * (np.asarray(lons), np.asarray(lats))
        r = np.rint(rows).astype(int)
        c = np.rint(cols).astype(int)
        ok = (r >= 0) & (r < nrow) & (c >= 0) & (c < ncol)
        out = np.full(len(r), np.nan, dtype="float32")
        out[ok] = dem[r[ok], c[ok]]
        return out
    return sample


# ── main ──────────────────────────────────────────────────────────────────────

def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--from-lat",  type=float, default=55.9222,
                    help="TX latitude  (default: Blackford Hill, Edinburgh)")
    ap.add_argument("--from-lon",  type=float, default=-3.1863,
                    help="TX longitude (default: Blackford Hill, Edinburgh)")
    ap.add_argument("--from-name", default="Blackford Hill, Edinburgh")
    ap.add_argument("--to-lat",    type=float, default=55.6244,
                    help="RX latitude  (default: IO85LO)")
    ap.add_argument("--to-lon",    type=float, default=-3.0162,
                    help="RX longitude (default: IO85LO)")
    ap.add_argument("--to-name",   default="IO85LO")
    ap.add_argument("--dem-glob",  default="dem/*.tif")
    ap.add_argument("--step-m",    type=float, default=30.0,
                    help="Profile sample interval in metres (default 30)")
    ap.add_argument("--out",       required=True, help="Output JSON path")
    a = ap.parse_args()

    dist_m   = haversine_m(a.from_lat, a.from_lon, a.to_lat, a.to_lon)
    bearing  = initial_bearing(a.from_lat, a.from_lon, a.to_lat, a.to_lon)
    dist_km  = dist_m / 1000.0

    print(f"Path: {a.from_name} → {a.to_name}")
    print(f"  Distance: {dist_km:.2f} km   Bearing: {bearing:.1f}°")

    # Bounding box with 0.05° margin
    lat_min = min(a.from_lat, a.to_lat) - 0.05
    lat_max = max(a.from_lat, a.to_lat) + 0.05
    lon_min = min(a.from_lon, a.to_lon) - 0.05
    lon_max = max(a.from_lon, a.to_lon) + 0.05
    bbox = (lon_min, lat_min, lon_max, lat_max)

    print(f"  Loading DEM from {a.dem_glob} …")
    dem, transform = build_mosaic(a.dem_glob, bbox)
    nrow, ncol = dem.shape
    px_lon = abs(transform.a) * 3600
    px_lat = abs(transform.e) * 3600
    print(f"  Mosaic {nrow}×{ncol}, px {px_lon:.1f}\" lon × {px_lat:.1f}\" lat")

    sample = make_sampler(dem, transform)

    # Sample distances along the path (include endpoints)
    distances = np.arange(0.0, dist_m + a.step_m, a.step_m)
    distances[-1] = min(distances[-1], dist_m)   # clamp last point exactly to end
    distances = np.unique(distances)

    lats, lons = dest_point(a.from_lat, a.from_lon, bearing, distances)
    elevations = sample(lats, lons)

    # Earth bulge at each point: d * (D - d) / (2 * Re_eff)
    # where D = total path length, d = distance from TX
    # (mid-path bulge is greatest; endpoints are 0)
    D = dist_m
    bulge = distances * (D - distances) / (2 * RE_EFF)

    # Ground elevations at endpoints
    from_elev = float(sample(np.array([a.from_lat]), np.array([a.from_lon]))[0])
    to_elev   = float(sample(np.array([a.to_lat]),   np.array([a.to_lon]))[0])

    print(f"  TX ground: {from_elev:.1f} m AMSL")
    print(f"  RX ground: {to_elev:.1f} m AMSL")
    print(f"  Samples:   {len(distances)}")
    print(f"  Profile elevation range: {float(np.nanmin(elevations)):.0f}–{float(np.nanmax(elevations)):.0f} m")

    # Find highest point
    peak_idx = int(np.nanargmax(elevations))
    peak_dist_km = float(distances[peak_idx]) / 1000.0
    peak_elev    = float(elevations[peak_idx])
    print(f"  Peak: {peak_elev:.0f} m AMSL at {peak_dist_km:.1f} km from TX")

    # Build profile array: [[dist_m, elev_m, bulge_m], ...]
    # Round to 1 decimal place for compact output
    profile = []
    for d, e, b in zip(distances, elevations, bulge):
        el = round(float(e), 1) if not np.isnan(e) else None
        profile.append([round(float(d), 1), el, round(float(b), 2)])

    out = {
        "from": {
            "lat":      a.from_lat,
            "lon":      a.from_lon,
            "name":     a.from_name,
            "ground_m": round(from_elev, 1),
        },
        "to": {
            "lat":      a.to_lat,
            "lon":      a.to_lon,
            "name":     a.to_name,
            "ground_m": round(to_elev, 1),
        },
        "distance_km":  round(dist_km, 3),
        "bearing_deg":  round(bearing, 2),
        "k_refraction": K_REFRACT,
        "step_m":       a.step_m,
        "peak": {
            "dist_km":  round(peak_dist_km, 2),
            "elev_m":   round(peak_elev, 1),
        },
        "profile": profile,
    }

    import os
    os.makedirs(os.path.dirname(os.path.abspath(a.out)), exist_ok=True)
    with open(a.out, "w", encoding="utf-8") as fh:
        json.dump(out, fh, separators=(",", ":"))
    size = os.path.getsize(a.out)
    print(f"  Written → {a.out}  ({size//1024} KB)")


if __name__ == "__main__":
    main()
