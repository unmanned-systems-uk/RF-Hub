const fs = require('fs');
const path = require('path');

// Find most recent results
const outDir = path.join(__dirname, 'out');
const timestamps = fs.readdirSync(outDir).filter((f) => fs.statSync(path.join(outDir, f)).isDirectory());
const latestTimestamp = timestamps.sort().reverse()[0];

if (!latestTimestamp) {
  console.log('No test results found. Run tests first with: npm test');
  process.exit(1);
}

const resultsDir = path.join(outDir, latestTimestamp);
const resultsFile = path.join(resultsDir, 'results.json');

if (!fs.existsSync(resultsFile)) {
  console.log(`Results file not found: ${resultsFile}`);
  process.exit(1);
}

const results = JSON.parse(fs.readFileSync(resultsFile, 'utf8'));
const screenshots = fs
  .readdirSync(resultsDir)
  .filter((f) => f.endsWith('.png'))
  .sort();

// Generate markdown report
let report = `# RF-Hub Smoke Test Report\n\n`;
report += `**Timestamp:** ${latestTimestamp}\n\n`;
report += `**Results Directory:** \`${resultsDir}\`\n\n`;

// Login Results
report += `## 1. Login Flow\n\n`;
report += `| Device | Page Load | Invalid Password | Error Message |\n`;
report += `|--------|-----------|------------------|---------------|\n`;
for (const [device, data] of Object.entries(results.login)) {
  const pageLoad = data.pageLoad || '❌';
  const invalidPwd = data.invalidPassword || '❌';
  const errorMsg = data.errorMessage || 'N/A';
  report += `| ${device} | ${pageLoad === 'PASS' ? '✅' : '❌'} | ${invalidPwd === 'PASS' ? '✅' : '❌'} | ${errorMsg} |\n`;
}
report += `\n`;

// Study Gate Results
report += `## 2. RSGB Study Gate\n\n`;
report += `| Device | Coming Soon Panel | Content Hidden | Exam Gate |\n`;
report += `|--------|-------------------|----------------|----------|\n`;
for (const [device, data] of Object.entries(results.studyGate)) {
  const comingSoon = data.comingSoonVisible === 'PASS' ? '✅' : '❌';
  const contentHidden = data.contentHidden === 'PASS' ? '✅' : '❌';
  const examGate = data.examGateVisible === 'PASS' ? '✅' : '❌';
  report += `| ${device} | ${comingSoon} | ${contentHidden} | ${examGate} |\n`;
}
report += `\n`;

// Mobile Nav Results
report += `## 3. Mobile Navigation\n\n`;
report += `| Device | Hamburger | Panel Opens | Study Link | Exams Link | Close Button |\n`;
report += `|--------|-----------|-------------|------------|------------|-------------|\n`;
for (const [device, data] of Object.entries(results.mobileNav)) {
  const hamburger = data.hamburgerExists === 'PASS' ? '✅' : '❌';
  const panelOpens = data.panelOpens === 'PASS' ? '✅' : '❌';
  const study = data.hasStudyLink === 'PASS' ? '✅' : '❌';
  const exams = data.hasExamsLink === 'PASS' ? '✅' : '❌';
  const closeBtn = data.hasCloseBtn === 'PASS' ? '✅' : '❌';
  report += `| ${device} | ${hamburger} | ${panelOpens} | ${study} | ${exams} | ${closeBtn} |\n`;
}
report += `\n`;

// Layout Results
report += `## 4. Layout Screenshots & Issues\n\n`;
for (const layout of results.layouts) {
  const status = layout.pass ? '✅ PASS' : '⚠️ ISSUES';
  report += `### ${layout.page} (${layout.device})\n\n`;
  report += `**Status:** ${status}\n\n`;
  report += `**Screenshot:** \`${layout.screenshot}\`\n\n`;
  if (layout.issues.length > 0) {
    report += `**Issues Found:**\n`;
    for (const issue of layout.issues) {
      report += `- ${issue}\n`;
    }
  } else {
    report += `No layout issues detected.\n`;
  }
  report += `\n`;
}

// Summary
const totalLayouts = results.layouts.length;
const passedLayouts = results.layouts.filter((l) => l.pass).length;
report += `## Summary\n\n`;
report += `- **Layout Screenshots:** ${passedLayouts}/${totalLayouts} passed\n`;
report += `- **Screenshots Captured:** ${screenshots.length}\n`;
report += `- **Timestamp:** ${latestTimestamp}\n\n`;

// Re-run command
report += `## Re-Run Command\n\n`;
report += `\`\`\`bash\n`;
report += `cd /home/rfhub/agents/testing/smoke && npm test\n`;
report += `\`\`\`\n`;

// Write report
const reportPath = path.join(resultsDir, 'REPORT.md');
fs.writeFileSync(reportPath, report);

console.log(`✅ Report generated: ${reportPath}`);
console.log(`\n${report}`);

// Print screenshot list
console.log('\n## Screenshots Captured:\n');
for (const screenshot of screenshots) {
  console.log(`- ${screenshot}`);
}

console.log(`\n**Results directory:** ${resultsDir}`);
