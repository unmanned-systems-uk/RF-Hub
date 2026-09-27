const fs = require('fs');
const path = require('path');

// Find most recent results.json from Playwright
const outDir = path.join(__dirname, 'out');
let resultsFile = path.join(outDir, 'results.json');
let resultsDir = outDir;

if (!fs.existsSync(resultsFile)) {
  const timestamps = fs.readdirSync(outDir)
    .filter((f) => fs.statSync(path.join(outDir, f)).isDirectory())
    .sort()
    .reverse();
  for (const ts of timestamps) {
    const file = path.join(outDir, ts, 'results.json');
    if (fs.existsSync(file)) {
      resultsFile = file;
      resultsDir = path.join(outDir, ts);
      break;
    }
  }
}

if (!fs.existsSync(resultsFile)) {
  console.log('No Playwright results.json found. Run tests with: npm test');
  process.exit(1);
}

const jsonReport = JSON.parse(fs.readFileSync(resultsFile, 'utf8'));

// Extract all specs from nested suites, finding projectName
const allSpecs = [];
function extractSpecs(suite, ancestors = [], currentProject = 'unknown') {
  // Try to find projectName in nested structure
  let projectName = currentProject;
  if (suite.projectName) {
    projectName = suite.projectName;
  }

  if (suite.specs && suite.specs.length > 0) {
    for (const spec of suite.specs) {
      // Try to find projectName in the spec itself
      let specProject = projectName;
      if (spec.projectName) {
        specProject = spec.projectName;
      }

      allSpecs.push({
        ...spec,
        projectName: specProject,
        suitePath: [...ancestors, suite.title].filter(t => t && t !== 'smoke.spec.js').join(' > '),
      });
    }
  }

  if (suite.suites) {
    for (const subsuite of suite.suites) {
      extractSpecs(subsuite, [...ancestors, suite.title], projectName);
    }
  }
}

if (jsonReport.suites) {
  for (const suite of jsonReport.suites) {
    extractSpecs(suite);
  }
}

// Separate by project - extract from spec data if available
const projectTests = {};
for (const spec of allSpecs) {
  let projectName = spec.projectName || 'unknown';

  // If still unknown, try to find it from nested test data
  if (projectName === 'unknown' && spec.tests) {
    for (const test of spec.tests) {
      if (test.projectName) {
        projectName = test.projectName;
        break;
      }
    }
  }

  if (!projectTests[projectName]) {
    projectTests[projectName] = [];
  }
  projectTests[projectName].push(spec);
}

// Count results
let totalTests = allSpecs.length;
let totalPassed = allSpecs.filter(s => s.ok).length;
let totalFailed = allSpecs.filter(s => !s.ok).length;

// Generate markdown report
let report = `# RF-Hub Smoke Test Report\n\n`;
report += `**Playwright JSON Report:** \`${path.basename(resultsFile)}\`\n\n`;

// Summary table
report += `## Test Summary\n\n`;
report += `| Project | Tests | Passed | Failed | Status |\n`;
report += `|---------|-------|--------|--------|--------|\n`;

for (const [project, tests] of Object.entries(projectTests)) {
  const passed = tests.filter(t => t.ok).length;
  const failed = tests.filter(t => !t.ok).length;
  const status = failed === 0 ? '✅' : '❌';
  report += `| ${project} | ${tests.length} | ${passed} | ${failed} | ${status} |\n`;
}

report += `| **Total** | **${totalTests}** | **${totalPassed}** | **${totalFailed}** | ${totalFailed === 0 ? '✅' : '❌'} |\n\n`;

// Detailed results
report += `## Detailed Results\n\n`;
for (const [project, tests] of Object.entries(projectTests)) {
  report += `### ${project.charAt(0).toUpperCase() + project.slice(1)}\n\n`;
  report += `| Test | Status |\n`;
  report += `|------|--------|\n`;

  for (const test of tests) {
    const status = test.ok ? '✅ PASS' : '❌ FAIL';
    const title = test.title || 'unknown';
    report += `| ${title} | ${status} |\n`;
    if (!test.ok && test.error) {
      const errorMsg = test.error.message ? test.error.message.substring(0, 80) : 'Unknown error';
      report += `| *${errorMsg}...* | |\n`;
    }
  }
  report += `\n`;
}

// Summary
report += `## Overall Summary\n\n`;
report += `- **Total Tests:** ${totalTests}\n`;
report += `- **Passed:** ${totalPassed} (${totalTests > 0 ? Math.round(totalPassed / totalTests * 100) : 0}%)\n`;
report += `- **Failed:** ${totalFailed}\n`;
report += `- **Result:** ${totalFailed === 0 ? '✅ All tests passed' : '❌ Some tests failed'}\n\n`;

// Re-run command
report += `## Re-Run Tests\n\n`;
report += `\`\`\`bash\n`;
report += `cd /home/rfhub/rf-hub/tests/smoke && npm install && npm test\n`;
report += `\`\`\`\n`;

// Write report
const reportPath = path.join(resultsDir, 'REPORT.md');
fs.writeFileSync(reportPath, report);

console.log(`✅ Report generated: ${reportPath}\n`);
console.log(report);

// Exit with appropriate code
process.exit(totalFailed === 0 ? 0 : 1);
