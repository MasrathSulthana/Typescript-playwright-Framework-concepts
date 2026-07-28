import {test} from "@playwright/test";

test.use({storageState:'storageState.json'});
test('Open Accounts page',async({page})=>{
    await page.goto('https://accounts.shutterfly.com/account-settings');
    await page.waitForTimeout(10000);
});

test('Open Cart page',async({page})=>{
await page.goto('https://www.shutterfly.com/cart/shoppingcart');
//await page.waitForTimeout(10000);
await page.pause();
});

test('Add new Address', async ({ page }) => {
    await page.goto('https://www.shutterfly.com/cart/checkout',{ waitUntil: 'domcontentloaded' } );
    
    
    await page.getByRole('link', { name: 'Add Address' }).click({ force: true });
    await page.locator(`//input[@id='firstName']`).waitFor({ state: 'visible' });
   
    await page.getByRole('textbox',{name:'Apt., Suite, Building, etc. (optional)'}).fill('Hno 25-6-32  new statue full line');
    await page.pause();
});