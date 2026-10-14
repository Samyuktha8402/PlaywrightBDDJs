import { test as base, expect } from '@playwright/test';

export const test = base.extend({
  loggedInPage: async ({ page }, use) => {
    await page.goto('/login');

    await page.fill(
      '#username',
      'testuser'
    );

    await page.fill(
      '#password',
      'password123'
    );

    await page.click('#login');

    await expect(
      page.locator('#dashboard')
    ).toBeVisible();

    await use(page);
  },
});

const _expect = expect;
export { _expect as expect };