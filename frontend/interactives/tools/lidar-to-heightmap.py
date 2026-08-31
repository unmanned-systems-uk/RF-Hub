#!/usr/bin/env python3
"""
lidar-to-heightmap.py
Converts LiDAR GeoTIFF files (DTM, DSM, CHM) to browser-friendly
uint16 base64-encoded heightmap JSON for terrain-3d.html.

Usage:
    python3 lidar-to-heightmap.py [grid_size]
    Default grid_size is 200. Use 400 for higher resolution (larger output).

Output: JSON to stdout, redirect to a file or embed in HTML.
"""
import sys, json, base64
import rasterio
import numpy as np

LIDAR_DIR = "/mnt/cc-share/RF-Hub/WSPR_Analysis/lidar/"
N = int(sys.argv[1]) if len(sys.argv) > 1 else 200

def read_downsample(path, N):
    with rasterio.open(path) as src:
        data = src.read(1).astype(np.float32)
        nodata = src.nodata
        tf = src.transform
    if nodata is not None:
        data[data == nodata] = np.nan
    h, w = data.shape
    bh, bw = h // N, w // N
    cropped = data[:bh*N, :bw*N]
    result = cropped.reshape(N, bh, N, bw).mean(axis=(1,3))
    mean_val = float(np.nanmean(result))
    result = np.where(np.isnan(result), mean_val, result)
    return result.astype(np.float32), tf

def encode_u16(arr, vmin, vmax):
    norm = np.clip((arr - vmin) / (vmax - vmin), 0, 1)
    u16 = (norm * 65535).astype(np.uint16)
    return base64.b64encode(u16.tobytes()).decode()

dtm, tf = read_downsample(LIDAR_DIR + "crop_DTM.tif", N)
dsm, _  = read_downsample(LIDAR_DIR + "crop_DSM.tif", N)
chm, _  = read_downsample(LIDAR_DIR + "crop_CHM.tif", N)
chm = np.clip(chm, 0, None)  # no negative canopy

cell = abs(tf.a) * (2400 // N)  # metres per output pixel

out = {
    "width": N, "height": N,
    "cellSize": round(cell, 2),
    "origin": [round(tf.c, 2), round(tf.f, 2)],
    "dtm": {"data": encode_u16(dtm, float(dtm.min()), float(dtm.max())),
            "min": round(float(dtm.min()), 3), "max": round(float(dtm.max()), 3)},
    "dsm": {"data": encode_u16(dsm, float(dsm.min()), float(dsm.max())),
            "min": round(float(dsm.min()), 3), "max": round(float(dsm.max()), 3)},
    "chm": {"data": encode_u16(chm, 0.0, round(float(chm.max()), 3)),
            "min": 0.0, "max": round(float(chm.max()), 3)},
}
print(json.dumps(out))
