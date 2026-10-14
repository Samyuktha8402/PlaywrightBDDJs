import { test, expect } from '@playwright/test';

test.describe('test', async ({ page }) => {
  await page.goto('https://www.flydubai.com/en-in/');
  await page.getByRole('combobox', { name: 'From' }).click();
  await page.getByText('Nnamdi Azikiwe International').click();
  await page.getByText('Ahmedabad, IndiaAhmedabad AirportAMD').click();
  await page.getByText('25').first().click();
  await page.getByText('12').nth(1).click();
  await page.locator('div').filter({ hasText: /^Passengers$/ }).click();
  await page.getByTestId('AddIcon').nth(1).click();
  await page.getByRole('button', { name: 'SEARCH', exact: true }).click();
});

// const { test } = require('@playwright/test');

// const {
//   selectDate
// } = require('./utils/calendarutils');

// test('select travel date', async ({ page }) => {
//   await page.goto('/booking');

//   await page.locator('#travelDate').click();

//   await selectDate(
//     page,
//     20,
//     'November',
//     2026
//   );
// });