#!/usr/bin/env python3
"""
horizon.py -- terrain horizon profile for an HF station.

Ray-casts from the QTH across 360 degrees of azimuth out to a chosen radius,
sampling a Copernicus GLO-30 DSM mosaic, and reports the maximum blocking
elevation angle in each direction.

Geometry notes
--------------
* Elevation angle of a terrain point at slant range d and height h, seen from
  an antenna at height h0, corrected for the curvature of the earth:

      theta = atan2( (h - h0) - d^2 / (2 * Re) , d )

  Re is the EFFECTIVE earth radius, k * 6371 km. k = 4/3 is the standard
  radio refraction factor: the atmosphere's vertical refractivity gradient
  bends rays downward, which is equivalent to a flatter earth. Using k = 1
  (optical horizon) would overstate blockage.

* The DSM includes vegetation and buildings, which is what actually blocks
  RF, so no bare-earth correction is applied to the terrain. For the
  OBSERVER cell we take a local minimum as a proxy for ground level, then
  add the antenna height, since the DSM there may be sitting on a roof or
  a tree.
"""
import argparse
import glob
import json
import math
import numpy as np
import rasterio
from rasterio.merge import merge

R_EARTH_M = 6371008.8
K_REFRACT = 4.0 / 3.0
RE_EFF = K_REFRACT * R_EARTH_M


def dest_point(lat1, lon1, bearing_deg, dist_m):
    """Great-circle destination point. Arrays in, arrays out."""
    d = dist_m / R_EARTH_M
    br = np.radians(bearing_deg)
    p1 = math.radians(lat1)
    l1 = math.radians(lon1)
    sp = math.sin(p1)
    cp = math.cos(p1)
    p2 = np.arcsin(sp * np.cos(d) + cp * np.sin(d) * np.cos(br))
    l2 = l1 + np.arctan2(np.sin(br) * np.sin(d) * cp,
                         np.cos(d) - sp * np.sin(p2))
    return np.degrees(p2), np.degrees(l2)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--lat", type=float, required=True)
    ap.add_argument("--lon", type=float, required=True)
    ap.add_argument("--ant-height", type=float, default=10.0,
                    help="antenna height above local ground, metres")
    ap.add_argument("--radius-km", type=float, default=50.0)
    ap.add_argument("--min-range-m", type=float, default=200.0,
                    help="start of the ray. Must exceed a few DEM cells: at "
                         "30 m posting, samples closer than ~150 m fall in the "
                         "observer's own cell or its neighbours and just "
                         "re-report the observer's own rooftop/treetop as a "
                         "20-degree obstruction.")
    ap.add_argument("--step-m", type=float, default=25.0)
    ap.add_argument("--az-step", type=float, default=1.0)
    ap.add_argument("--dem-glob", default="dem/*.tif")
    ap.add_argument("--out", default="horizon_profile.csv")
    a = ap.parse_args()

    # --- mosaic just the window we need -----------------------------------
    dlat = a.radius_km / 111.32
    dlon = a.radius_km / (111.32 * math.cos(math.radians(a.lat)))
    bbox = (a.lon - dlon, a.lat - dlat, a.lon + dlon, a.lat + dlat)
    srcs = [rasterio.open(f) for f in sorted(glob.glob(a.dem_glob))]
    if not srcs:
        raise SystemExit(f"no DEM tiles matched {a.dem_glob}")
    arr, transform = merge(srcs, bounds=bbox)
    dem = arr[0].astype("float32")
    nodata = srcs[0].nodata
    if nodata is not None:
        dem[dem == nodata] = np.nan
    inv = ~transform
    nrow, ncol = dem.shape
    print(f"mosaic {nrow} x {ncol} from {len(srcs)} tiles, "
          f"px = {abs(transform.a)*3600:.2f}\" lon x {abs(transform.e)*3600:.2f}\" lat")

    def sample(lat, lon):
        col, row = inv * (lon, lat)
        r = np.rint(row).astype(int)
        c = np.rint(col).astype(int)
        ok = (r >= 0) & (r < nrow) & (c >= 0) & (c < ncol)
        out = np.full(np.shape(lat), np.nan, dtype="float32")
        out[ok] = dem[r[ok], c[ok]]
        return out

    # --- observer height ---------------------------------------------------
    col0, row0 = inv * (a.lon, a.lat)
    r0, c0 = int(round(row0)), int(round(col0))
    patch = dem[max(0, r0-2):r0+3, max(0, c0-2):c0+3]
    ground = float(dem[r0, c0])
    h0 = ground + a.ant_height
    print(f"QTH DSM cell {ground:.1f} m AMSL "
          f"(5x5 neighbourhood {np.nanmin(patch):.0f}-{np.nanmax(patch):.0f} m), "
          f"antenna at {h0:.1f} m AMSL ({a.ant_height:.0f} m AGL)")

    # --- ray cast ----------------------------------------------------------
    rngs = np.arange(a.min_range_m, a.radius_km * 1000 + 1, a.step_m)
    curve = rngs ** 2 / (2 * RE_EFF)          # earth drop at each range
    az_list = np.arange(0, 360, a.az_step)

    rows = []
    for az in az_list:
        lats, lons = dest_point(a.lat, a.lon, az, rngs)
        h = sample(lats, lons)
        theta = np.degrees(np.arctan2((h - h0) - curve, rngs))
        theta[np.isnan(h)] = -90.0
        i = int(np.nanargmax(theta))
        rows.append(dict(
            azimuth_deg=float(az),
            horizon_deg=round(float(theta[i]), 3),
            range_km=round(float(rngs[i]) / 1000.0, 2),
            peak_m=round(float(h[i]), 1),
            lat=round(float(lats[i]), 5),
            lon=round(float(lons[i]), 5),
        ))

    import pandas as pd
    df = pd.DataFrame(rows)
    df.to_csv(a.out, index=False)

    meta = dict(lat=a.lat, lon=a.lon, ground_m=ground, ant_agl_m=a.ant_height,
                ant_amsl_m=h0, radius_km=a.radius_km, k_refraction=K_REFRACT,
                dem="Copernicus GLO-30 DSM")
    with open("horizon_meta.json", "w") as fh:
        json.dump(meta, fh, indent=2)

    # --- console summary ---------------------------------------------------
    print(f"\nwrote {a.out}")
    print(f"median horizon {df.horizon_deg.median():.2f} deg   "
          f"min {df.horizon_deg.min():.2f}   max {df.horizon_deg.max():.2f}")
    print("\nby 45-degree sector:")
    names = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]
    d = df.copy()
    d["sec"] = (((d.azimuth_deg + 22.5) % 360) // 45).astype(int)
    g = d.groupby("sec").agg(mean_deg=("horizon_deg", "mean"),
                             max_deg=("horizon_deg", "max"),
                             median_deg=("horizon_deg", "median"))
    for i, n in enumerate(names):
        if i in g.index:
            r = g.loc[i]
            print(f"  {n:>2}  mean {r.mean_deg:5.2f}   median {r.median_deg:5.2f}"
                  f"   worst {r.max_deg:5.2f}")


if __name__ == "__main__":
    main()
