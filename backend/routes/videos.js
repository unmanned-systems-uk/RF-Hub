const express = require('express');
const router = express.Router();
const Video = require('../models/Video');

/**
 * GET /api/videos
 * List all videos, ordered by sort_order ASC, added_date DESC
 * Optional query param: ?tag=antennas
 */
router.get('/', async (req, res, next) => {
  try {
    const { tag } = req.query;
    const videos = await Video.getAll({ tag });
    res.json({ count: videos.length, videos });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/videos/:id
 * Get single video by UUID (includes transcript)
 */
router.get('/:id', async (req, res, next) => {
  try {
    const video = await Video.getById(req.params.id);
    if (!video) {
      return res.status(404).json({ error: 'Video not found' });
    }
    res.json({ video });
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/videos
 * Add a new video
 * Required: { title, url }
 */
router.post('/', async (req, res, next) => {
  try {
    const { title, url } = req.body;

    if (!title || !url) {
      return res.status(400).json({ error: 'title and url are required' });
    }

    try {
      new URL(url);
    } catch {
      return res.status(400).json({ error: 'url must be a valid URL' });
    }

    const video = await Video.create(req.body);
    res.status(201).json({ video });
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/videos/:id
 * Update a video (partial update)
 */
router.put('/:id', async (req, res, next) => {
  try {
    if (req.body.url) {
      try {
        new URL(req.body.url);
      } catch {
        return res.status(400).json({ error: 'url must be a valid URL' });
      }
    }

    const video = await Video.update(req.params.id, req.body);
    if (!video) {
      return res.status(404).json({ error: 'Video not found or no valid fields provided' });
    }
    res.json({ video });
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/videos/:id
 * Delete a video
 */
router.delete('/:id', async (req, res, next) => {
  try {
    const deleted = await Video.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Video not found' });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
