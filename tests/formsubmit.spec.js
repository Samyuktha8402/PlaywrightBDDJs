import {test,expect} from '@playwright/test'
test('form submission', async({page})=>{
    //network logs
    page.on('request',request=>{
        console.log(`REQUEST: ${request.method()} ${request.url()}`);
    });
    page.on('response',response=>{
        console.log(`RESPONSE: ${response.status()} ${response.url()}`);
    });
    //Browser console logs
    page.on('console',msg=>{
        console.log(`CONSOLE: ${msg.type()} ${msg.text()}`);
    })
    await page.goto('https://www.testmuai.com/selenium-playground/');
    await page.getByText('Input Form Submit').click();
    await page.getByRole('button',{name:'submit'}).click();
    // const inputField = page.locator('input[placeholder="Name"]');
    // const message = inputField.evaluate(element => element.validationMessage);
    // expect(message).toBe('Please fill in this field.');
    await page.locator('//*/input[@placeholder="Name"]').fill('testname');
    await page.locator('//*/input[@placeholder="Email"]').fill('testname@yopmail.com');
    await page.locator('//*/input[@placeholder="Password"]').fill('Password123');
    await page.locator('//*/input[@placeholder="Company"]').fill('Testcompany');
    await page.locator('//*/input[@placeholder="Website"]').fill('www.testwebsite.com');
    await page.locator('//*/select[@name="country"]').selectOption('United States');
    await page.locator('#inputCity').fill('testcity');
    await page.locator('#inputAddress1').fill('testaddress1');
    await page.locator('#inputAddress2').fill('testaddress2');
    await page.locator('#inputState').fill('teststate');
    await page.locator('#inputZip').fill('5087837');
    await page.getByRole('button',{name:'submit'}).click();
    const msg = 'Thanks for contacting us, we will get back to you shortly.';
    await expect(page.locator('//*/p[text()="Thanks for contacting us, we will get back to you shortly."]')).toHaveText(msg);

})