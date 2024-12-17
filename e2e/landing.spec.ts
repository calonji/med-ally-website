import { test, expect } from '@playwright/test';

test('landing page', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  
  // Test hero section
  await expect(page.getByRole('heading', { 
    name: /Spend More Time with Patients/i 
  })).toBeVisible({ timeout: 3000 });
  
  // Test navigation
  const nav = page.getByRole('navigation');
  await expect(nav).toBeVisible();
  
  // Test CTA button
  const ctaButton = page.getByRole('button', { name: /Get Started Free/i });
  await expect(ctaButton).toBeVisible();
}); 