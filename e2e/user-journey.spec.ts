import { test, expect } from '@playwright/test';

test('signup flow', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Get Started Free' }).click();
  await page.getByLabel('Email').fill('test@example.com');
  await page.getByLabel('Password').fill('Test123!');
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await expect(page.getByText('Welcome!')).toBeVisible();
});

test('calculator interaction', async ({ page }) => {
  await page.goto('/#roi-calculator');
  await expect(page.getByTestId('roi-calculator')).toBeVisible();
  await page.getByLabel('Patients per day').fill('30');
  await page.getByLabel('Minutes per note').fill('20');
  const savings = await page.getByTestId('savings-amount').textContent();
  expect(parseInt(savings || '0')).toBeGreaterThan(0);
});