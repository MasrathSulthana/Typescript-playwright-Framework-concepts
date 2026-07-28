import { Browser, chromium, Page } from "playwright";

(async()=>{
    let browser:Browser=await chromium.launch({channel:'chrome',headless:false});
    let page:Page = await browser.newPage();
    await page.goto('https://accounts.shutterfly.com/?redirectUri=https%3A%2F%2Fwww.shutterfly.com%2F');
    await page.getByRole('textbox', {name:'EMail address'}).fill('testaccountprod350@yopmail.com');
    await page.getByRole('textbox', {name:'Password'}).fill('Sfqatest@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.waitForURL('https://www.shutterfly.com/?loginType=SignIn', { timeout: 55000 });
    console.log('✅ Login successful, saving storage state...');
    
    await page.context().storageState({ path: 'storageState.json' });
    console.log('✅ storageState.json saved!');
    await browser.close();
})();