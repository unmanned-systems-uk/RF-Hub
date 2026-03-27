const pool = require('../config/database');

class Video {
  /**
   * Get all videos with optional tag filter
   */
  static async getAll(filters = {}) {
    const { tag } = filters;
    const params = [];
    let paramCount = 1;

    let query = `
      SELECT id, title, url, platform, description, thumbnail_url,
             curriculum_refs, tags, timestamps, sort_order, added_date,
             created_at, updated_at
      FROM must_watch_videos
    `;

    if (tag) {
      query += ` WHERE tags @> $${paramCount++}::jsonb`;
      params.push(JSON.stringify([tag]));
    }

    query += ' ORDER BY sort_order ASC, added_date DESC';

    const result = await pool.query(query, params);
    return result.rows;
  }

  /**
   * Get single video by UUID (includes transcript)
   */
  static async getById(id) {
    const result = await pool.query(
      `SELECT * FROM must_watch_videos WHERE id = $1`,
      [id]
    );
    return result.rows[0];
  }

  /**
   * Create a new video
   */
  static async create(data) {
    const {
      title, url, platform = 'youtube', description = null,
      thumbnail_url = null, transcript = null,
      curriculum_refs = [], tags = [], timestamps = [],
      sort_order = 0
    } = data;

    // Auto-extract YouTube thumbnail if not provided
    let resolvedThumbnail = thumbnail_url;
    if (!resolvedThumbnail) {
      const videoId = extractYouTubeId(url);
      if (videoId) {
        resolvedThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      }
    }

    const result = await pool.query(
      `INSERT INTO must_watch_videos
         (title, url, platform, description, thumbnail_url, transcript,
          curriculum_refs, tags, timestamps, sort_order)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
       RETURNING *`,
      [
        title, url, platform, description, resolvedThumbnail, transcript,
        JSON.stringify(curriculum_refs), JSON.stringify(tags),
        JSON.stringify(timestamps), sort_order
      ]
    );
    return result.rows[0];
  }

  /**
   * Update a video by UUID
   */
  static async update(id, data) {
    const allowed = [
      'title', 'url', 'platform', 'description', 'thumbnail_url',
      'transcript', 'curriculum_refs', 'tags', 'timestamps', 'sort_order'
    ];

    const jsonbFields = new Set(['curriculum_refs', 'tags', 'timestamps']);
    const fields = [];
    const params = [];
    let paramCount = 1;

    for (const key of allowed) {
      if (key in data) {
        fields.push(`${key} = $${paramCount++}`);
        params.push(jsonbFields.has(key) ? JSON.stringify(data[key]) : data[key]);
      }
    }

    if (fields.length === 0) return null;

    params.push(id);
    const result = await pool.query(
      `UPDATE must_watch_videos SET ${fields.join(', ')} WHERE id = $${paramCount} RETURNING *`,
      params
    );
    return result.rows[0];
  }

  /**
   * Delete a video by UUID
   */
  static async delete(id) {
    const result = await pool.query(
      `DELETE FROM must_watch_videos WHERE id = $1 RETURNING id`,
      [id]
    );
    return result.rowCount > 0;
  }
}

/**
 * Extract YouTube video ID from various URL formats
 */
function extractYouTubeId(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === 'youtu.be') {
      return parsed.pathname.slice(1);
    }
    if (parsed.hostname.includes('youtube.com')) {
      return parsed.searchParams.get('v');
    }
  } catch {
    // invalid URL
  }
  return null;
}

module.exports = Video;
