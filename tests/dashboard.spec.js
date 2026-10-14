import { test, expect } from './fixtures';

test('verify dashboard', async ({
  loggedInPage
}) => {
  await expect(
    loggedInPage.locator('#dashboard')
  ).toBeVisible();
});