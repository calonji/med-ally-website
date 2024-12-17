import { test, expect } from '@playwright/test';

test('performance metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const metrics = await page.evaluate(() => ({
    ttfb: performance.timing.responseStart - performance.timing.navigationStart,
    fcp: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
    loadTime: performance.timing.loadEventEnd - performance.timing.navigationStart
  }));

  expect(metrics.ttfb).toBeLessThan(800);
  expect(metrics.fcp).toBeLessThan(2000);
  expect(metrics.loadTime).toBeLessThan(3000);
}); 