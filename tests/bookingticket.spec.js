import{test,expect} from '@playwright/test'
test('booking',async({page})=>{
    await page.goto("https://www.flydubai.com/en-in/")
    await page.getByLocator("#from-airportsList").click();
    
    await page.getByTestId("destinationId").pressSequentially('Delhi',{delay: 100});
    await page.getByText("New Delhi").click();

})