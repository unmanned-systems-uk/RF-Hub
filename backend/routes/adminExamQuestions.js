const express = require('express');
const router = express.Router();
const { requireAdmin } = require('../middleware/adminAuth');
const AdminExam = require('../models/AdminExam');

// All routes in this file require admin auth
router.use(requireAdmin);

/**
 * GET /api/v1/admin/exam-questions/stats
 * Aggregate counts by exam_type + orphan SVG detection.
 * Must be registered BEFORE /:id to avoid "stats" matching as a UUID.
 */
router.get('/stats', async (req, res, next) => {
  try {
    const stats = await AdminExam.getStats();
    res.json(stats);
  } catch (err) {
    next(err);
  }
});

/**
 * GET /api/v1/admin/exam-questions
 * Paginated question list with optional filters.
 * Query params: exam_type, section, has_diagram, needs_review, offset, limit
 */
router.get('/', async (req, res, next) => {
  try {
    const { exam_type, section, has_diagram, needs_review,
            offset = 0, limit = 50 } = req.query;

    const parsedLimit = Math.min(parseInt(limit) || 50, 200);
    const parsedOffset = Math.max(parseInt(offset) || 0, 0);

    const result = await AdminExam.getList({
      exam_type, section, has_diagram, needs_review,
      offset: parsedOffset, limit: parsedLimit
    });
    res.json(result);
  } catch (err) {
    next(err);
  }
});

/**
 * GET /api/v1/admin/exam-questions/:id
 * Single question — full row including correct_answer, explanation, admin fields.
 */
router.get('/:id', async (req, res, next) => {
  try {
    const question = await AdminExam.getById(req.params.id);
    if (!question) return res.status(404).json({ error: 'Question not found' });
    res.json(question);
  } catch (err) {
    next(err);
  }
});

/**
 * PATCH /api/v1/admin/exam-questions/:id
 * Update admin-writable fields: has_diagram, diagram_url, admin_notes, needs_review.
 */
router.patch('/:id', async (req, res, next) => {
  try {
    const { has_diagram, diagram_url, admin_notes, needs_review } = req.body;
    const updates = {};
    if (has_diagram !== undefined) updates.has_diagram = Boolean(has_diagram);
    if ('diagram_url' in req.body)  updates.diagram_url = diagram_url ?? null;
    if (admin_notes !== undefined)  updates.admin_notes = admin_notes;
    if (needs_review !== undefined) updates.needs_review = Boolean(needs_review);

    if (!Object.keys(updates).length) {
      return res.status(400).json({ error: 'No patchable fields supplied' });
    }

    const updated = await AdminExam.patch(req.params.id, updates);
    if (!updated) return res.status(404).json({ error: 'Question not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
