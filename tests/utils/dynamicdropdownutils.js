// utils/dropdownUtils.js
const { expect } = require('@playwright/test');

/**
 * Types in an autocomplete input and
 * waits for the dynamic options to load.
 */
async function typeAndWaitForOptions(
  input,
  options,
  searchText,
) {
  await input.click();
  if (searchText) {
    await input.pressSequentially(searchText, {
      delay: 100,
    });
  }
  await expect(options.first()).toBeVisible({
    timeout: 10000,
  });
}

/**
 * Returns text of all visible options.
 */
async function getAllOptionTexts(options) {
  await expect(options.first()).toBeVisible();
  const texts = await options.allInnerTexts();
  return texts.map((t) => t.replace(/\s+/g, ' ').trim());
}

/**
 * Selects an option by (partial) visible text.
 */
async function selectByText(options, optionText) {
  const match = options
    .filter({ hasText: optionText })
    .first();
  await expect(
    match,
    `Option "${optionText}" not found,`
  ).toBeVisible();
  await match.click();
}

/**
 * Selects an option by its index.
 */
async function selectByIndex(options, index) {
  const count = await options.count();
  if (index >= count) {
    throw new Error(
      `Index ${index} out of range (${count})`,
    );
  }
  await options.nth(index).click();
}

/**
 * One-shot: open, type, pick option by text.
 */
async function selectFromDynamicDropdown({
  input,
  options,
  searchText = '',
  optionText,
}) {
  await typeAndWaitForOptions(
    input,
    options,
    searchText,
  );
  await selectByText(options, optionText || searchText);
}

module.exports = {
  typeAndWaitForOptions,
  getAllOptionTexts,
  selectByText,
  selectByIndex,
  selectFromDynamicDropdown,
};