# YouTube Publishing Workflow — Audio-First Podcast

Practical paths from a NotebookLM MP3 to a live YouTube video, ranked by effort vs polish.

---

## The core problem

YouTube needs a video file (MP4/MOV). Your podcast content is an audio file (MP3/WAV). You need to bridge that gap.

**Two axes to think about:**
- **Manual per-episode** (more control, cover art per episode, custom chapters) vs. **RSS auto-sync** (upload once to podcast host, appears on YouTube automatically as static-artwork video).
- **Static image** (fast) vs. **animated waveform** (more engaging) vs. **screen recording** (most work).

---

## Path 1 — Static image + audio (fastest, free)

**Time per episode:** 5-10 minutes.
**Polish:** Basic but professional.
**Best for:** First few episodes while you dial in the format.

### Assets you need
- **Cover art in 1920×1080 landscape** (YouTube's preferred aspect). Not a square 3000×3000 podcast cover — YouTube will letterbox it ugly. Use a landscape design with your square cover centered + branding on the sides.
- **The audio file** from NotebookLM (MP3).

### Tool options (pick one)

**a) Kapwing** (free, browser-based) — [kapwing.com](https://kapwing.com)
1. Upload cover art
2. Upload audio
3. Set duration to match audio
4. Export MP4 (1080p, free with watermark on free tier; $17/mo for no watermark)

**b) CapCut Desktop** (free, no watermark) — [capcut.com](https://capcut.com)
1. Import cover art and audio to timeline
2. Stretch cover art clip to match audio length
3. Export as MP4 1080p

**c) ffmpeg command-line** (free, no GUI)
```bash
ffmpeg -loop 1 -framerate 2 -i cover.jpg -i podcast.mp3 \
  -c:v libx264 -tune stillimage -c:a aac -b:a 192k \
  -pix_fmt yuv420p -shortest output.mp4
```
Fastest if you're comfortable in a terminal.

### Result
A 1080p MP4 with your cover art shown for the entire episode + your audio. Upload to YouTube manually.

---

## Path 2 — Static image + animated waveform (recommended for launch)

**Time per episode:** 15-20 minutes.
**Polish:** Podcast-standard. Waveform animation makes the video feel alive without needing to record video.

### Tool options

**a) Headliner** (free) — [headliner.app](https://headliner.app)
- Purpose-built for podcast audiograms
- Free tier: unlimited exports with a small "Headliner" watermark
- Templates for full-episode video (not just clips)
- Adds animated waveform + auto-captions over your cover art
- Export to MP4 for YouTube

**b) Descript** (free tier) — [descript.com](https://descript.com)
- Free tier: 1 hour of transcription + 3 exports per month at 720p
- Templates for podcast video with waveform + speaker names
- Also transcribes so you can add auto-captions to YouTube
- Paid tier ($15/mo) removes watermark + 1080p export

**c) Wavve** (audiogram specialist) — [wavve.co](https://wavve.co)
- Free tier: 10 mins/month (not enough for a full episode)
- Paid ($12/mo) for unlimited
- Better for short audiogram clips than full episodes

**Recommendation:** **Headliner free tier** — the watermark is small and acceptable for launch. Upgrade later if you want it gone.

### Result
1080p MP4 with your cover art, animated waveform reacting to the audio, and optionally auto-captions. Feels like a real podcast video.

---

## Path 3 — Podcast host with RSS auto-sync (best for scaling)

**Time per episode:** 5 minutes once set up.
**Polish:** Consistent but no per-episode customisation.
**Best for:** When you have 5+ episodes and want to distribute to Spotify/Apple/YouTube from one upload.

### How it works
1. You sign up with a podcast host (see options below)
2. Configure their YouTube RSS integration (link your YouTube channel)
3. Upload MP3 to the host — they auto-generate a static-image video and push it to YouTube
4. Same MP3 also distributes to Spotify, Apple Podcasts, Amazon Music, Google Podcasts, etc.

### Host options (free tiers)

| Host | Free tier | YouTube integration | Notes |
|------|-----------|---------------------|-------|
| **Buzzsprout** | 2 hours upload/month, 90-day episode retention | Yes — automatic RSS sync | Best free-tier YouTube support; upgrade $12/mo for unlimited + permanent hosting |
| **Podbean** | 5 hours storage, 100 GB bandwidth/month | Yes | Solid free tier |
| **Spotify for Podcasters** (was Anchor) | Unlimited free | Yes (recent addition) | Spotify-owned; auto-video sync to YouTube |
| **RSS.com** | 2 hours/month free | Yes | Newer platform |

### Downside
The auto-generated YouTube video is static cover art only (no waveform, no chapter markers per episode, no custom thumbnails). You get consistency but sacrifice per-episode polish.

**Compromise:** Use a host for RSS distribution to Spotify/Apple, and separately upload custom Headliner-style videos to YouTube manually. Best of both worlds.

---

## Path 4 — Screen recording with site walkthrough (most work, highest engagement)

**Time per episode:** 60+ minutes for editing.
**Polish:** Real "video podcast" style.
**Best for:** Deep-dive episodes covering specific tools where showing the site adds value.

### Tools
- **OBS Studio** (free) — record audio + screen simultaneously
- **DaVinci Resolve** (free) or **CapCut Desktop** (free) — edit
- Record NotebookLM audio in one track, browse rf-hub.info showing the tools/pages being discussed in another

### When to use this
For episodes where you're demoing an interactive tool or walking through a study page, showing the screen makes it much more engaging. Not worth it for pure conversational episodes.

---

## My recommended stack for RF-Hub Radio launch

1. **Episodes 1-3:** Path 2 — Headliner free tier. Static cover + waveform + captions. Manual YouTube upload with custom title/description/thumbnail per episode. Learn what your audience responds to.

2. **Episode 4 onward** (once you have a rhythm): Sign up for **Buzzsprout free tier**. Distribute to Spotify + Apple + YouTube via RSS. Also do a manual Headliner upload to YouTube per episode if you want per-episode chapter markers and thumbnails.

3. **Special episodes** (interactive-tool deep dives, site walkthroughs): Path 4 — screen recording with OBS + editing.

---

## Cover art you'll need

**Podcast square cover art:** 3000×3000 px, JPG or PNG, under 512 KB. This is what appears on Spotify/Apple/etc.

**YouTube landscape "cover"** (for Path 1/2 videos): 1920×1080 px. Design with the square cover art centered on a branded background. Use consistent colours from rf-hub.info (cyan, dark navy, orange accents).

**YouTube thumbnail** (per-episode): 1280×720 px. Should differ from the video background so viewers can tell episodes apart in feeds. Include episode number and a hook keyword.

These are 3 separate design assets — one podcast-standard square, one landscape base for the video, one per-episode thumbnail.

---

## Practical first step

**Today's action:**
1. Design the 3 art assets (or hire on Fiverr for ~£30 total — search "podcast cover art design")
2. Sign up for Headliner (free)
3. Take the NotebookLM MP3 for Episode 1, upload to Headliner with the landscape cover, export MP4
4. Upload to YouTube with the title/description already drafted in `episodes/E01-youtube-metadata.md`
5. Same MP3 (unmodified) uploaded separately to Buzzsprout free tier for RSS distribution to podcast platforms

That gets Episode 1 on YouTube + Spotify/Apple simultaneously with maybe 90 minutes of one-off setup.
