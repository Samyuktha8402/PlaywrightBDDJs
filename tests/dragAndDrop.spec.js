import {test,expect} from '@playwright/test'
test('drag and drop',async({page})=>{
     // 1. Open Selenium Playground
  await page.goto('https://www.testmuai.com/selenium-playground/');

  // 2. Click "Drag & Drop Sliders"
  await page.getByText('Drag & Drop Sliders', { exact: true }).click();

  // 3. Locate the slider
  const slider = page.locator('//*/input[@value=15]');

  // 4. Set slider value to 95
  await slider.evaluate((element) => {
    element.value = '95';
    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));
  });

  // 5. Validate that slider value is 95
  await expect(slider).toHaveValue('95');

  // 6. Validate the displayed range value
  //await expect(page.locator('//*/output[text()="95"]')).toHaveText('95');
});