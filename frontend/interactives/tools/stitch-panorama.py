#!/usr/bin/env python3
"""
stitch-panorama.py — Cylindrical panorama stitch from 8 DJI frames.
Uses known gimbal yaw angles for exact projection (no feature matching).

Usage:
    python3 stitch-panorama.py [output_path] [pano_width]
    Default output: /home/rfhub/rf-hub/frontend/assets/images/blog/
                    station-surveys/survey-01/panorama-360.jpg
    Default width:  8000 px

Output: JPEG cylindrical panorama, bearing 0° (North) at left edge.
"""

import sys, math, os
import numpy as np
from PIL import Image

# ── Camera parameters (Hasselblad L2D-20c / DJI Mini 4 Pro) ─────────────────
HFOV_DEG  = 73.0
W_FRAME   = 5280
H_FRAME   = 2970
CX        = W_FRAME / 2.0
FOCAL_PX  = CX / math.tan(math.radians(HFOV_DEG / 2))   # ~3568 px

# ── Source frames: (filename, yaw_deg) ─────────────────────────────────────
# Yaw in DJI convention: 0°=North, positive=clockwise
PHOTO_DIR = '/mnt/cc-share/RF-Hub/WSPR_Analysis/Photos/'
FRAMES = [
    ('dji_fly_20260831_150946_152_1788189560229_photo.jpg', +76.8),
    ('dji_fly_20260831_150954_153_1788189559929_photo.jpg', +138.5),
    ('dji_fly_20260831_150958_154_1788189559694_photo.jpg', -174.5),
    ('dji_fly_20260831_151000_155_1788189559552_photo.jpg', -123.9),
    ('dji_fly_20260831_151004_156_1788189559546_photo.jpg', -71.8),
    ('dji_fly_20260831_151008_157_1788189559058_photo.jpg', -30.5),
    ('dji_fly_20260831_151014_158_1788189558945_photo.jpg', +9.9),
    ('dji_fly_20260831_151018_159_1788189558940_photo.jpg', +47.5),
]

# ── Output parameters ────────────────────────────────────────────────────────
PANO_W      = int(sys.argv[2]) if len(sys.argv) > 2 else 8000
OUT_PATH    = sys.argv[1] if len(sys.argv) > 1 else (
    '/home/rfhub/rf-hub/frontend/assets/images/blog/'
    'station-surveys/survey-01/panorama-360.jpg')
JPEG_QUAL   = 85

# Scaled focal length so panorama width == 360° at this focal length
FOCAL_S  = PANO_W / (2 * math.pi)       # px per radian in output
SCALE    = FOCAL_S / FOCAL_PX            # resize factor for each frame
SCALE_W  = round(SCALE * W_FRAME)       # 1884 at PANO_W=8000
SCALE_H  = round(SCALE * H_FRAME)       # 1060
CX_S     = SCALE_W / 2.0

# Crop the tallest panorama to a 700px strip centred slightly above mid-frame
# (gimbal at -8° means horizon is ~1/3 from top in each frame)
CROP_TOP = max(0, int(SCALE_H * 0.03))
CROP_BOT = min(SCALE_H, CROP_TOP + 700)
PANO_H   = CROP_BOT - CROP_TOP

print(f"Camera: HFOV={HFOV_DEG}° focal={FOCAL_PX:.0f}px")
print(f"Scale factor: {SCALE:.4f}  →  frame {SCALE_W}×{SCALE_H}")
print(f"Panorama: {PANO_W}×{PANO_H} (cropped rows {CROP_TOP}:{CROP_BOT})")
print(f"Output: {OUT_PATH}")

# ── Output canvas ─────────────────────────────────────────────────────────────
pano_acc = np.zeros((PANO_H, PANO_W, 3), dtype=np.float32)
wt_sum   = np.zeros((PANO_H, PANO_W),    dtype=np.float32)

# Bearing for each output column (0–360°, North at x=0)
out_bearings = np.arange(PANO_W, dtype=np.float32) / PANO_W * 360.0

# ── Process each frame ────────────────────────────────────────────────────────
os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)

for fname, yaw_raw in FRAMES:
    yaw = (yaw_raw + 360) % 360          # normalise to 0–360
    path = os.path.join(PHOTO_DIR, fname)
    print(f"  Loading yaw={yaw:.1f}° — {fname[-30:]}", flush=True)

    img = Image.open(path).resize((SCALE_W, SCALE_H), Image.LANCZOS)
    img_arr = np.array(img, dtype=np.float32)          # (SCALE_H, SCALE_W, 3)

    # Crop to panorama height
    img_crop = img_arr[CROP_TOP:CROP_BOT]              # (PANO_H, SCALE_W, 3)

    # Angle from frame centre for each output column
    frame_angle = ((out_bearings - yaw) + 180) % 360 - 180   # –180..+180

    # Which output columns fall within this frame's FOV?
    in_fov = np.abs(frame_angle) <= (HFOV_DEG / 2)

    # Source column (float → int, clamped)
    src_x_f  = CX_S + FOCAL_S * np.tan(np.radians(frame_angle))
    src_x    = np.clip(np.round(src_x_f).astype(np.int32), 0, SCALE_W - 1)

    # Cosine-squared weight: peaks at frame centre, zero at edges
    weight   = np.where(in_fov,
                        np.cos(frame_angle / HFOV_DEG * np.pi) ** 2,
                        0.0).astype(np.float32)

    # Gather columns from this frame: (PANO_H, PANO_W, 3)
    gathered = img_crop[:, src_x, :]                   # numpy fancy indexing

    # Accumulate
    pano_acc += gathered * weight[np.newaxis, :, np.newaxis]
    wt_sum   += weight

    del img, img_arr, img_crop, gathered

# ── Normalise and save ────────────────────────────────────────────────────────
print("Normalising…", flush=True)
safe_wt     = np.maximum(wt_sum, 1e-6)[:, :, np.newaxis]
pano_uint8  = np.clip(pano_acc / safe_wt, 0, 255).astype(np.uint8)

pano_img = Image.fromarray(pano_uint8)
pano_img.save(OUT_PATH, 'JPEG', quality=JPEG_QUAL, optimize=True)
sz = os.path.getsize(OUT_PATH)
print(f"Saved {PANO_W}×{PANO_H} panorama → {OUT_PATH}  ({sz//1024} KB)")
