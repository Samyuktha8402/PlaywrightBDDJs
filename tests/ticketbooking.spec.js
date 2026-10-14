import{test,expect} from "@playwright/test";
test("booking",async({page})=>{
    await page.goto("https://www.emirates.com/in/english/");
    await page.getByLabel("Departure airport").click();
    await page.getByLabel("Departure airport").pressSequentially("hyder");
    await page.getByLabel("Hyderabad, India Rajiv Gandhi Airport HYD Operated by Emirates").click();
    await page.getByLabel("Arrival airport").click();
    await page.getByLabel("Arrival airport").pressSequentially("mum");
    await page.getByLabel("Mumbai (Bombay), India Chhatrapati Shivaji International BOM Operated by Emirates").click();
    await page.getByRole('button',{name:'Continue'}).click()





})

