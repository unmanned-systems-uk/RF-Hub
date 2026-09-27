const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://rf-hub.info';
const TIMESTAMP = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
const OUT_DIR = path.join(__dirname, '..', 'out', TIMESTAMP);

// Ensure output directory exists
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

// Test results tracking
const results = {
  login: {},
  studyGate: {},
  mobileNav: {},
  layouts: [],
};

// Helper to capture network and console
async function setupCapture(page, deviceType) {
  const capture = {
    requests: [],
    responses: [],
    console: [],
    errors: [],
  };

  page.on('request', (req) => {
    capture.requests.push({
      method: req.method(),
      url: req.url(),
      headers: req.headers(),
    });
  });

  page.on('response', (res) => {
    capture.responses.push({
      status: res.status(),
      url: res.url(),
    });
  });

  page.on('console', (msg) => {
    capture.console.push({
      type: msg.type(),
      text: msg.text(),
    });
  });

  page.on('pageerror', (err) => {
    capture.errors.push(err.message);
  });

  return capture;
}

// Helper to take screenshot
async function takeScreenshot(page, name, deviceType) {
  const filename = `${deviceType}_${name.replace(/\//g, '_')}.png`;
  const filepath = path.join(OUT_DIR, filename);
  await page.screenshot({ path: filepath, fullPage: true });
  return filename;
}

// Helper to check for horizontal scroll and broken images
async function checkLayoutIssues(page, deviceType) {
  const issues = [];

  // Wait a bit for images to load
  await page.waitForTimeout(1000);

  // Check for horizontal scroll
  const documentWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  const viewportWidth = await page.evaluate(() => window.innerWidth);
  if (documentWidth > viewportWidth) {
    issues.push(`Horizontal scroll detected: ${documentWidth}px > ${viewportWidth}px`);
  }

  // Check for broken images (only those in viewport or important)
  const images = await page.locator('img').all();
  let brokenCount = 0;
  for (const img of images) {
    // Only check images that are in the viewport or visible
    const isVisible = await img.isVisible().catch(() => false);
    if (isVisible) {
      const naturalWidth = await img.evaluate((el) => el.naturalWidth).catch(() => -1);
      if (naturalWidth === 0) {
        const src = await img.getAttribute('src');
        brokenCount++;
        // Only report first few broken images to avoid clutter
        if (brokenCount <= 3) {
          issues.push(`Broken image: ${src}`);
        }
      }
    }
  }
  if (brokenCount > 3) {
    issues.push(`... and ${brokenCount - 3} more broken images`);
  }

  // Check for clipped iframes
  const iframes = await page.locator('iframe').all();
  for (const iframe of iframes) {
    const box = await iframe.boundingBox();
    if (box && (box.width === 0 || box.height === 0)) {
      const src = await iframe.getAttribute('src');
      issues.push(`Clipped iframe: ${src}`);
    }
  }

  return issues;
}

test.describe('RF-Hub Smoke Tests', () => {
  test.describe('Login Flow', () => {
    test('should load login page', async ({ page }, testInfo) => {
      const deviceType = testInfo.project.name; // Use project name (phone/desktop)
      const capture = await setupCapture(page, deviceType);

      // Navigate directly to login page
      await page.goto('/pages/login.html', { waitUntil: 'networkidle' });

      // Check for form elements
      const emailInput = page.locator('input[name="identifier"], input[type="email"]').first();
      const passwordInput = page.locator('input[name="password"], input[type="password"]').first();

      await expect(emailInput).toBeVisible({ timeout: 5000 });
      await expect(passwordInput).toBeVisible();

      await takeScreenshot(page, 'login_page', testInfo.project.name);
      results.login[testInfo.project.name] = { ...results.login[testInfo.project.name], pageLoad: 'PASS' };
    });

    test('should show invalid credentials error on wrong password', async ({ page }, testInfo) => {
      const capture = await setupCapture(page, testInfo.project.name);

      // Navigate directly to login page
      await page.goto('/pages/login.html', { waitUntil: 'networkidle' });

      // Fill form with wrong credentials
      await page.fill('input[name="identifier"]', 'test@example.com');
      await page.fill('input[name="password"]', 'wrongpassword123');
      await page.click('button[type="submit"], button:has-text("Log in")');

      // Wait for error response
      await page.waitForTimeout(2000);

      // Check for error message
      const errorElement = page.locator('#formError, [class*="error"], text=/invalid|incorrect|failed/i').first();
      const errorText = await errorElement.textContent({ timeout: 3000 }).catch(() => null);

      const hasErrorMsg = errorText && errorText.length > 0 && !errorText.includes('Failed to fetch');
      results.login[testInfo.project.name] = {
        ...results.login[testInfo.project.name],
        invalidPassword: hasErrorMsg ? 'PASS' : 'FAIL',
        errorMessage: errorText || 'No error message shown',
        failedFetches: capture.responses.filter((r) => r.status >= 500).length,
      };

      await takeScreenshot(page, 'login_error', testInfo.project.name);
    });
  });

  test.describe('RSGB Study Gate', () => {
    test('should show coming soon panel when logged out', async ({ page }, testInfo) => {
      await page.goto('/pages/study/');

      const comingSoonPanel = page.locator('text=/coming soon/i, [class*="coming"], [class*="gate"]').first();
      const isVisible = await comingSoonPanel.isVisible().catch(() => false);

      // Check content is hidden
      const studyContent = page.locator('[class*="content"], main > *').first();
      const contentVisible = await studyContent.isVisible().catch(() => true);

      results.studyGate[testInfo.project.name] = {
        comingSoonVisible: isVisible ? 'PASS' : 'FAIL',
        contentHidden: !contentVisible ? 'PASS' : 'FAIL',
      };

      await takeScreenshot(page, 'study_gate_logged_out', testInfo.project.name);
    });

    test('should show coming soon on exam practice page', async ({ page }, testInfo) => {
      await page.goto('/pages/exam-practice/');

      const comingSoonPanel = page.locator('text=/coming soon/i').first();
      const isVisible = await comingSoonPanel.isVisible().catch(() => false);

      results.studyGate[testInfo.project.name] = {
        ...results.studyGate[testInfo.project.name],
        examGateVisible: isVisible ? 'PASS' : 'FAIL',
      };

      await takeScreenshot(page, 'exam_gate_logged_out', testInfo.project.name);
    });
  });

  test.describe('Mobile Navigation', () => {
    test('should have functional hamburger menu', async ({ page }, testInfo) => {
      // Skip if not phone profile
      test.skip(testInfo.project.name !== 'phone', 'Mobile nav only on phone');
      await page.goto('/');

      // Look for hamburger menu
      const hamburger = page.locator('button[aria-label*="menu" i], button[class*="menu"], [class*="hamburger"]').first();
      const exists = await hamburger.isVisible().catch(() => false);

      if (exists) {
        await hamburger.click();
        await page.waitForTimeout(300);

        // Check for nav panel
        const navPanel = page.locator('nav, [role="navigation"], [class*="panel"]').first();
        const panelVisible = await navPanel.isVisible().catch(() => false);

        // Look for menu items
        const hasStudy = await page.locator('text=/study/i').isVisible().catch(() => false);
        const hasExams = await page.locator('text=/exam/i').isVisible().catch(() => false);

        // Find close button
        const closeBtn = page.locator('button[aria-label*="close" i], button:has-text("×")').first();
        const hasClose = await closeBtn.isVisible().catch(() => false);

        results.mobileNav[testInfo.project.name] = {
          hamburgerExists: exists ? 'PASS' : 'FAIL',
          panelOpens: panelVisible ? 'PASS' : 'FAIL',
          hasStudyLink: hasStudy ? 'PASS' : 'FAIL',
          hasExamsLink: hasExams ? 'PASS' : 'FAIL',
          hasCloseBtn: hasClose ? 'PASS' : 'FAIL',
        };

        if (hasClose) {
          await closeBtn.click();
        }
      } else {
        results.mobileNav[testInfo.project.name] = { hamburgerExists: 'FAIL', error: 'Hamburger not found' };
      }

      await takeScreenshot(page, 'mobile_nav', testInfo.project.name);
    });
  });

  test.describe('Layout Screenshots', () => {
    const pagesToCapture = [
      { path: '/', name: 'home' },
      { path: '/pages/interactives.html', name: 'interactives' },
      { path: '/pages/sidebands/understanding-filters.html', name: 'sideband_filters' },
      { path: '/interactives/filter-signal.html?input=whistle&filter=notch', name: 'interactive_filter_signal' },
    ];

    for (const { path: pagePath, name } of pagesToCapture) {
      test(`should capture ${name} layout`, async ({ page }, testInfo) => {
        await page.goto(pagePath);
        await page.waitForLoadState('networkidle');

        const issues = await checkLayoutIssues(page, testInfo.project.name);
        const screenshot = await takeScreenshot(page, name, testInfo.project.name);

        results.layouts.push({
          page: pagePath,
          device: testInfo.project.name,
          screenshot,
          issues,
          pass: issues.length === 0,
        });
      });
    }
  });
});

// Export results for report generation
process.on('exit', () => {
  fs.writeFileSync(path.join(OUT_DIR, 'results.json'), JSON.stringify(results, null, 2));
});
