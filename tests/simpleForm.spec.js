import {test,expect} from '@playwright/test';
test('simple form demo test', async ({page}) => {
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
    await page.goto('https://www.testmuai.com/selenium-playground/'); //Open TestMu AI’s Selenium Playground
    await page.getByText('Simple Form Demo',{exact: true}).click(); //click on “Simple Form Demo”.
    await expect(page).toHaveURL(/simple-form-demo/); //validate URL
    const message = 'Welcome to TestMu AI'; //create variable
    await page.getByPlaceholder('Please enter your Message').fill(message);//enter the message
    await page.getByRole('button',{name:'Get Checked Value'}).click();//Click “Get Checked Value”
    await expect(page.locator('#message')).toHaveText(message);//Validate whether the same text message is displayed

});