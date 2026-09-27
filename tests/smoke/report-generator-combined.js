const fs = require('fs');
const path = require('path');

// Find all recent results directories
const outDir = path.join(__dirname, 'out');
const allDirs = fs.readdirSync(outDir).filter((f) => fs.statSync(path.join(outDir, f)).isDirectory());
const timestampDirs = allDirs.sort().reverse();

// Load results from all recent directories
const deviceResults = {};
const allScreenshots = [];

for (const ts of timestampDirs.slice(0, 10)) {
  const resultsFile = path.join(outDir, ts, 'results.json');
  if (fs.existsSync(resultsFile)) {
    const data = JSON.parse(fs.readFileSync(resultsFile, 'utf8'));

    // Find which device(s) are in this result set
    const resultsDir = path.join(outDir, ts);
    const screenshots = fs.readdirSync(resultsDir).filter((f) => f.endsWith('.png'));

    if (screenshots.length > 0) {
      // Detect device from screenshot names
      const device = screenshots[0].split('_')[0]; // phone or desktop
      if (!deviceResults[device]) {
        deviceResults[device] = { data, dir: ts, screenshots };
        allScreenshots.push(...screenshots.map(s => ({device, name: s, ts})));
      }
    }
  }
}

if (Object.keys(deviceResults).length === 0) {
  console.log('No test results found. Run tests first with: npm test');
  process.exit(1);
}

// Generate combined report
let report = `# RF-Hub Smoke Test Report — Phone + Desktop\n\n`;
report += `**Test Runs:**\n`;
for (const [device, info] of Object.entries(deviceResults)) {
  report += `- **${device.charAt(0).toUpperCase() + device.slice(1)}**: ${info.dir}\n`;
}
report += `\n`;

// Login Results (per device)
report += `## 1. Login Flow\n\n`;
report += `| Device | Page Load | Invalid Password | Error Message |\n`;
report += `|--------|-----------|------------------|---------------|\n`;
for (const [device, info] of Object.entries(deviceResults)) {
  const data = info.data.login[device] || info.data.login.chromium || {};
  const pageLoad = data.pageLoad ? '✅' : '❌';
  const invalidPwd = data.invalidPassword ? '✅' : '❌';
  const errorMsg = data.errorMessage || 'N/A';
  report += `| ${device} | ${pageLoad} | ${invalidPwd} | ${errorMsg} |\n`;
}
report += `\n`;

// Study Gate Results
report += `## 2. RSGB Study Gate\n\n`;
report += `| Device | Coming Soon | Content Hidden | Exam Gate |\n`;
report += `|--------|-------------|----------------|----------|\n`;
for (const [device, info] of Object.entries(deviceResults)) {
  const data = info.data.studyGate[device] || info.data.studyGate.chromium || {};
  const comingSoon = data.comingSoonVisible === 'PASS' ? '✅' : '❌';
  const contentHidden = data.contentHidden === 'PASS' ? '✅' : '❌';
  const examGate = data.examGateVisible === 'PASS' ? '✅' : '❌';
  report += `| ${device} | ${comingSoon} | ${contentHidden} | ${examGate} |\n`;
}
report += `\n`;

// Mobile Nav Results
report += `## 3. Mobile Navigation\n\n`;
report += `| Device | Hamburger | Panel Opens | Study | Exams | Close |\n`;
report += `|--------|-----------|-------------|-------|-------|-------|\n`;
for (const [device, info] of Object.entries(deviceResults)) {
  const data = info.data.mobileNav[device] || info.data.mobileNav.chromium || {};
  const hamburger = data.hamburgerExists === 'PASS' ? '✅' : (data.hamburgerExists === 'FAIL' ? '❌' : 'N/A');
  const panelOpens = data.panelOpens === 'PASS' ? '✅' : (data.panelOpens === 'FAIL' ? '❌' : 'N/A');
  const study = data.hasStudyLink === 'PASS' ? '✅' : (data.hasStudyLink === 'FAIL' ? '❌' : 'N/A');
  const exams = data.hasExamsLink === 'PASS' ? '✅' : (data.hasExamsLink === 'FAIL' ? '❌' : 'N/A');
  const closeBtn = data.hasCloseBtn === 'PASS' ? '✅' : (data.hasCloseBtn === 'FAIL' ? '❌' : 'N/A');
  if (device === 'phone' || Object.keys(deviceResults).length === 1) {
    report += `| ${device} | ${hamburger} | ${panelOpens} | ${study} | ${exams} | ${closeBtn} |\n`;
  }
}
report += `\n`;

// Layout Screenshots
report += `## 4. Layout Screenshots\n\n`;
for (const [device, info] of Object.entries(deviceResults)) {
  const layouts = info.data.layouts || [];
  report += `### ${device.charAt(0).toUpperCase() + device.slice(1)} Layouts\n\n`;

  for (const layout of layouts) {
    const status = layout.pass ? '✅ PASS' : '⚠️ ISSUES';
    report += `**${layout.page}**: ${status}\n`;
    if (layout.issues.length > 0) {
      report += `- Issues: ${layout.issues.join(', ')}\n`;
    }
    report += `\n`;
  }
}

// Screenshot summary
report += `## 5. Screenshots Captured\n\n`;
const phoneSS = allScreenshots.filter(s => s.device === 'phone').map(s => s.name).sort();
const desktopSS = allScreenshots.filter(s => s.device === 'desktop').map(s => s.name).sort();

if (phoneSS.length > 0) {
  report += `**Phone (${phoneSS.length}):**\n`;
  for (const ss of phoneSS) {
    report += `- ${ss}\n`;
  }
  report += `\n`;
}

if (desktopSS.length > 0) {
  report += `**Desktop (${desktopSS.length}):**\n`;
  for (const ss of desktopSS) {
    report += `- ${ss}\n`;
  }
  report += `\n`;
}

// Summary
report += `## Summary\n\n`;
report += `- **Devices Tested:** ${Object.keys(deviceResults).join(', ')}\n`;
report += `- **Screenshots:** Phone ${phoneSS.length} + Desktop ${desktopSS.length} = ${allScreenshots.length} total\n`;
report += `- **Status:** ${Object.keys(deviceResults).length === 2 ? '✅ Both profiles tested' : '⚠️ Single profile'}\n\n`;

// Re-run command
report += `## Re-Run Tests\n\n`;
report += `\`\`\`bash\n`;
report += `cd /home/rfhub/rf-hub/tests/smoke && npm install && npm test\n`;
report += `\`\`\`\n`;

// Write report
const reportPath = path.join(outDir, 'COMBINED-REPORT.md');
fs.writeFileSync(reportPath, report);

console.log(`✅ Combined report generated: ${reportPath}`);
console.log(`\n${report}`);
