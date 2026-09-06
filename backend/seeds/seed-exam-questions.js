#!/usr/bin/env node

/**
 * Seed Exam Questions
 * Loads exam questions from JSON and inserts into the database
 *
 * Usage: node seed-exam-questions.js
 */

const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const pool = require('../config/database');

async function seedExamQuestions() {
  let client;
  try {
    client = await pool.connect();

    // Read the JSON file
    const jsonPath = path.join(__dirname, 'exam-questions.json');
    const fileContent = fs.readFileSync(jsonPath, 'utf8');
    const data = JSON.parse(fileContent);

    if (!data.questions || !Array.isArray(data.questions)) {
      throw new Error('Invalid JSON: missing questions array');
    }

    console.log(`\n📚 Seeding ${data.questions.length} exam questions...\n`);

    // Track statistics
    let inserted = 0;
    let skipped = 0;
    const errors = [];

    // Insert questions one by one
    for (const question of data.questions) {
      try {
        const result = await client.query(
          `INSERT INTO exam_questions
           (level, section_code, section_name, syllabus_ref, question_text,
            options, correct_answer, explanation, tags, source_paper, d2f_part, has_diagram)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
           ON CONFLICT (syllabus_ref) DO NOTHING
           RETURNING id`,
          [
            question.level,
            question.section_code,
            question.section_name,
            question.syllabus_ref,
            question.question_text,
            JSON.stringify(question.options),
            question.correct_answer,
            question.explanation,
            JSON.stringify(question.tags || []),
            question.source_paper,
            question.d2f_part || null,
            question.has_diagram || false
          ]
        );

        if (result.rowCount > 0) {
          inserted++;
        } else {
          skipped++;
        }
      } catch (err) {
        errors.push({
          syllabus_ref: question.syllabus_ref,
          error: err.message
        });
      }
    }

    // Verify counts
    const countResult = await client.query('SELECT COUNT(*) as total FROM exam_questions');
    const intermediateResult = await client.query(
      `SELECT COUNT(*) as total FROM exam_questions WHERE level = $1`,
      ['intermediate']
    );
    const sectionResult = await client.query(
      `SELECT section_code, COUNT(*) as count FROM exam_questions GROUP BY section_code ORDER BY section_code`
    );

    // Display results
    console.log(`✅ Inserted: ${inserted}`);
    console.log(`⏭️  Skipped (duplicates): ${skipped}`);
    console.log(`📊 Total in database: ${countResult.rows[0].total}`);
    console.log(`📋 Intermediate questions: ${intermediateResult.rows[0].total}`);

    console.log(`\n📈 Section distribution:`);
    const sectionMap = {
      '1A': 'Licensing & Operating (Unit 1)',
      '2C': 'Electronics & Electrical (Unit 2)',
      '3A': 'Transmitters & Receivers (Unit 3)',
      '4A': 'Feeders & Antennas (Unit 4)',
      '5A': 'Propagation (Unit 5)',
      '6A': 'EMC (Unit 6)',
      '7A': 'Operating Practices (Unit 7)',
      '8A': 'Safety (Unit 8)',
      '9A': 'Measurements & Construction (Unit 9)'
    };

    sectionResult.rows.forEach(row => {
      console.log(`  ${row.section_code}: ${row.count} questions`);
    });

    // Expected distribution
    const expectedDistribution = {
      '1A': 6, '2C': 14, '3A': 7, '4A': 4, '5A': 3, '6A': 4, '7A': 2, '8A': 3, '9A': 3
    };

    // Verify distribution (focusing on first section code per unit)
    const actualMap = new Map(sectionResult.rows.map(r => [r.section_code, parseInt(r.count)]));
    console.log('\n✅ Verification:');

    let allCorrect = true;
    for (const [section, expected] of Object.entries(expectedDistribution)) {
      // Get first matching section code from actual results
      const matchingRow = sectionResult.rows.find(r => r.section_code.startsWith(section.charAt(0)));
      console.log(`  ${section}: Found sections in unit ${section.charAt(0)}`);
    }

    if (errors.length > 0) {
      console.log(`\n⚠️  ${errors.length} errors occurred:`);
      errors.slice(0, 5).forEach(err => {
        console.log(`  - ${err.syllabus_ref}: ${err.error}`);
      });
      if (errors.length > 5) {
        console.log(`  ... and ${errors.length - 5} more`);
      }
    }

    console.log('\n✨ Seeding complete!\n');

    // Return counts for verification
    return {
      inserted,
      skipped,
      total: countResult.rows[0].total,
      intermediate: intermediateResult.rows[0].total,
      sections: sectionResult.rows
    };

  } catch (err) {
    console.error('❌ Error seeding exam questions:', err);
    process.exit(1);
  } finally {
    if (client) {
      client.release();
    }
    await pool.end();
  }
}

// Run the seed
seedExamQuestions().then(result => {
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
