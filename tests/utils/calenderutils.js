const { expect } from '@playwright/test';

async function selectDate(
  page,
  date,
  month,
  year
) {
  const target = new Date(
    `${month} 1, ${year}`
  );

  const targetMonth = target.toLocaleString(
    'en-US',
    { month: 'long' }
  );

  const heading = page.locator(
    '.calendar-header'
  );

  const nextButton = page.getByRole(
    'button',
    { name: 'Next month' }
  );

  const previousButton = page.getByRole(
    'button',
    { name: 'Previous month' }
  );

  for (let i = 0; i < 24; i++) {
    const current = await heading.innerText();

    if (
      current.includes(targetMonth) &&
      current.includes(String(year))
    ) {
      break;
    }

    const currentDate = new Date(current);

    if (target > currentDate) {
      await nextButton.click();
    } else {
      await previousButton.click();
    }
  }

  const day = page.getByRole('gridcell', {
    name: String(date),
    exact: true
  });

  await expect(day).toBeVisible();
  await day.click();
}

module.exports = { selectDate };