const fs = require('fs');
const path = require('path');
const pool = require('../config/database');

const SVG_ROOT = path.resolve(__dirname, '../../frontend/assets/images/quiz-diagrams');
const SVG_URL_PREFIX = '/assets/images/quiz-diagrams';

// Shape a DB row into the canonical admin question object.
// Maps DB column names to the API field names specified by the brief.
function formatQuestion(row) {
  const options = row.options || {};
  return {
    id: row.id,
    exam_type: row.level,
    section_number: row.section_code,
    section_name: row.section_name,
    syllabus_ref: row.syllabus_ref,
    stem: row.question_text,
    options: ['A', 'B', 'C', 'D'].map(k => ({ key: k, text: options[k] ?? null })),
    correct_answer: row.correct_answer ? row.correct_answer.trim() : null,
    explanation: row.explanation ?? null,
    has_diagram: row.has_diagram ?? false,
    diagram_url: row.diagram_url ?? null,
    admin_notes: row.admin_notes ?? null,
    needs_review: row.needs_review ?? false,
    tags: row.tags ?? [],
    source_paper: row.source_paper ?? null,
    times_seen: row.times_seen ?? 0,
    times_correct: row.times_correct ?? 0,
    created_at: row.created_at,
    updated_at: row.updated_at
  };
}

const ADMIN_FIELDS = `
  id, level, section_code, section_name, syllabus_ref,
  question_text, options, correct_answer, explanation,
  has_diagram, diagram_url, admin_notes, needs_review,
  tags, source_paper, times_seen, times_correct,
  created_at, updated_at`;

const AdminExam = {

  async getById(id) {
    const result = await pool.query(
      `SELECT ${ADMIN_FIELDS} FROM exam_questions WHERE id = $1`,
      [id]
    );
    return result.rows.length ? formatQuestion(result.rows[0]) : null;
  },

  async getList({ exam_type, section, has_diagram, needs_review, offset = 0, limit = 50 }) {
    const params = [];
    const conditions = [];

    if (exam_type) {
      params.push(exam_type);
      conditions.push(`level = $${params.length}`);
    }
    if (section) {
      params.push(section + '%');
      conditions.push(`section_code LIKE $${params.length}`);
    }
    if (has_diagram !== undefined && has_diagram !== '') {
      params.push(has_diagram === 'true' || has_diagram === true);
      conditions.push(`has_diagram = $${params.length}`);
    }
    if (needs_review === 'true' || needs_review === true) {
      conditions.push('needs_review = true');
    }

    const where = conditions.length ? 'WHERE ' + conditions.join(' AND ') : '';

    const countResult = await pool.query(
      `SELECT COUNT(*) FROM exam_questions ${where}`,
      params
    );
    const total = parseInt(countResult.rows[0].count);

    params.push(parseInt(limit));
    params.push(parseInt(offset));
    const dataResult = await pool.query(
      `SELECT ${ADMIN_FIELDS} FROM exam_questions ${where}
       ORDER BY level, section_code, id
       LIMIT $${params.length - 1} OFFSET $${params.length}`,
      params
    );

    return {
      questions: dataResult.rows.map(formatQuestion),
      meta: { total, offset: parseInt(offset), limit: parseInt(limit) }
    };
  },

  async patch(id, updates) {
    const ALLOWED = ['has_diagram', 'diagram_url', 'admin_notes', 'needs_review'];
    const keys = Object.keys(updates).filter(k => ALLOWED.includes(k));
    if (!keys.length) return null;

    const setClauses = keys.map((k, i) => `${k} = $${i + 2}`);
    const values = keys.map(k => updates[k]);

    const result = await pool.query(
      `UPDATE exam_questions
       SET ${setClauses.join(', ')}, updated_at = NOW()
       WHERE id = $1
       RETURNING ${ADMIN_FIELDS}`,
      [id, ...values]
    );
    return result.rows.length ? formatQuestion(result.rows[0]) : null;
  },

  async getStats() {
    const rows = await pool.query(`
      SELECT
        level AS exam_type,
        COUNT(*)                                          AS total,
        COUNT(*) FILTER (WHERE has_diagram = true)       AS tagged_with_diagram,
        COUNT(*) FILTER (WHERE diagram_url IS NOT NULL)  AS has_diagram_url,
        COUNT(*) FILTER (WHERE has_diagram = true
                           AND diagram_url IS NULL)      AS missing_url
      FROM exam_questions
      GROUP BY level
      ORDER BY level
    `);

    const by_exam_type = rows.rows.map(r => ({
      exam_type: r.exam_type,
      total: parseInt(r.total),
      tagged_with_diagram: parseInt(r.tagged_with_diagram),
      has_diagram_url: parseInt(r.has_diagram_url),
      missing_url: parseInt(r.missing_url)
    }));

    // Collect all diagram_urls from DB for cross-reference
    const dbUrls = await pool.query(
      'SELECT diagram_url FROM exam_questions WHERE diagram_url IS NOT NULL'
    );
    const dbUrlSet = new Set(dbUrls.rows.map(r => r.diagram_url));

    // Walk SVG directory, build URL strings, find orphans
    const orphan_svgs = [];
    if (fs.existsSync(SVG_ROOT)) {
      walkSvgs(SVG_ROOT, SVG_ROOT, SVG_URL_PREFIX, dbUrlSet, orphan_svgs);
    }

    return { by_exam_type, orphan_svgs };
  }
};

function walkSvgs(baseDir, dir, urlBase, dbUrlSet, orphans) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const newUrlBase = urlBase + '/' + entry.name;
      walkSvgs(baseDir, fullPath, newUrlBase, dbUrlSet, orphans);
    } else if (entry.isFile() && entry.name.endsWith('.svg')) {
      const url = urlBase + '/' + entry.name;
      if (!dbUrlSet.has(url)) {
        orphans.push(url);
      }
    }
  }
}

module.exports = AdminExam;
