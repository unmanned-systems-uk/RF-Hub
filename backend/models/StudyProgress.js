const pool = require('../config/database');

const StudyProgress = {
  async markRead({ user_id, page_url, section, syllabus_refs, time_on_page_seconds }) {
    const result = await pool.query(
      `INSERT INTO study_progress (user_id, page_url, section, syllabus_refs, total_time_seconds)
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (user_id, page_url) DO UPDATE SET
         last_visited_at = NOW(),
         section = COALESCE(EXCLUDED.section, study_progress.section),
         syllabus_refs = COALESCE(EXCLUDED.syllabus_refs, study_progress.syllabus_refs),
         total_time_seconds = study_progress.total_time_seconds + EXCLUDED.total_time_seconds
       RETURNING *`,
      [
        user_id,
        page_url,
        section || null,
        syllabus_refs ? JSON.stringify(syllabus_refs) : null,
        time_on_page_seconds || 0
      ]
    );
    return result.rows[0];
  },

  async getUserSummary(user_id) {
    const result = await pool.query(
      `SELECT page_url, section, syllabus_refs, first_visited_at, last_visited_at, total_time_seconds
       FROM study_progress
       WHERE user_id = $1
       ORDER BY last_visited_at DESC`,
      [user_id]
    );

    const rows = result.rows;
    const totalTimeSeconds = rows.reduce((sum, r) => sum + (r.total_time_seconds || 0), 0);
    const lastRow = rows[0] || null;

    const syllabusProgress = {};
    const sections = {};
    for (const row of rows) {
      if (row.syllabus_refs && Array.isArray(row.syllabus_refs)) {
        for (const ref of row.syllabus_refs) {
          syllabusProgress[ref] = { read: true, last_visited_at: row.last_visited_at };
        }
      }
      if (row.section) {
        if (!sections[row.section]) {
          sections[row.section] = { pages_visited: 0, total_time_seconds: 0 };
        }
        sections[row.section].pages_visited += 1;
        sections[row.section].total_time_seconds += row.total_time_seconds || 0;
      }
    }

    return {
      total_pages_visited: rows.length,
      sections_started: Object.keys(sections).length,
      total_study_time_seconds: totalTimeSeconds,
      last_visited_page: lastRow ? lastRow.page_url : null,
      last_visited_at: lastRow ? lastRow.last_visited_at : null,
      sections,
      syllabus_progress: syllabusProgress,
      progress: rows.map(r => ({
        page_url: r.page_url,
        section: r.section,
        syllabus_refs: r.syllabus_refs,
        first_visited_at: r.first_visited_at,
        last_visited_at: r.last_visited_at,
        total_time_seconds: r.total_time_seconds
      }))
    };
  },

  async getRecommendations(user_id) {
    const progressResult = await pool.query(
      `SELECT section, COUNT(*) AS pages_read, SUM(total_time_seconds) AS section_time
       FROM study_progress
       WHERE user_id = $1 AND section IS NOT NULL
       GROUP BY section`,
      [user_id]
    );
    const studiedSections = new Set(progressResult.rows.map(r => r.section));

    const examResult = await pool.query(
      `SELECT section_scores, score_percent, passed, created_at
       FROM exam_attempts
       WHERE user_id = $1 AND level = 'intermediate' AND mode = 'mock'
       ORDER BY created_at DESC
       LIMIT 10`,
      [user_id]
    );

    // Latest section score per section code across recent attempts
    const latestSectionScores = {};
    for (const attempt of examResult.rows) {
      if (!attempt.section_scores) continue;
      for (const [sec, data] of Object.entries(attempt.section_scores)) {
        if (!latestSectionScores[sec] && data.total > 0) {
          latestSectionScores[sec] = {
            correct: data.correct,
            total: data.total,
            percent: Math.round((data.correct / data.total) * 100)
          };
        }
      }
    }

    const SECTIONS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const SECTION_NAMES = {
      '1': 'Licensing & Operating',
      '2': 'Electronics & Electrical',
      '3': 'Transmitters & Receivers',
      '4': 'Feeders & Antennas',
      '5': 'Propagation',
      '6': 'EMC',
      '7': 'Operating Practices',
      '8': 'Safety',
      '9': 'Measurements & Construction'
    };

    const recommendations = [];
    for (const sec of SECTIONS) {
      const hasStudied = studiedSections.has(sec);
      const examScore = latestSectionScores[sec];

      if (examScore && examScore.percent < 65) {
        recommendations.push({
          type: 'revise',
          section: sec,
          section_name: SECTION_NAMES[sec],
          score_percent: examScore.percent,
          message: `Your last §${sec} mock scored ${examScore.percent}% — recommend re-reading §${sec} (${SECTION_NAMES[sec]}) or trying more §${sec} questions.`
        });
      } else if (hasStudied && !examScore) {
        recommendations.push({
          type: 'suggest_exam',
          section: sec,
          section_name: SECTION_NAMES[sec],
          message: `You've read §${sec} (${SECTION_NAMES[sec]}) but haven't done the §${sec} mock exam yet — try a topic quiz to test yourself.`
        });
      } else if (!hasStudied) {
        recommendations.push({
          type: 'start_section',
          section: sec,
          section_name: SECTION_NAMES[sec],
          message: `Section ${sec} (${SECTION_NAMES[sec]}) is available and you haven't started it — recommend starting.`
        });
      }
    }

    const resumeResult = await pool.query(
      `SELECT page_url, section, syllabus_refs, last_visited_at
       FROM study_progress
       WHERE user_id = $1
       ORDER BY last_visited_at DESC
       LIMIT 1`,
      [user_id]
    );
    const resume = resumeResult.rows[0] || null;

    return { recommendations: recommendations.slice(0, 5), resume };
  }
};

module.exports = StudyProgress;
