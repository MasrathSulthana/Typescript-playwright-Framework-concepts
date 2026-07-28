import { Browser, chromium, Page } from "playwright";

(async()=>{
    let browser: Browser = await chromium.launch({channel:'chrome',headless:false});
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    //label
    //await page.getByLabel('First Name').fill('user');
    //await page.pause();
    //text
   await page.getByText('Forgotten Password', { exact: true }).click();
   await page.getByRole('link', { name: 'Register' }).first().click();
   await page.locator(`//input[@id='input-firstname']`).first().fill('md');
   await page.pause();
   

})();