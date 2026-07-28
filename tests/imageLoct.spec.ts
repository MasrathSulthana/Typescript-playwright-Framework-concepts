import test, { expect } from "@playwright/test";
test.use({storageState:'storageState.json'});
test('GotoPIPpage',async({page})=>{
    
    await page.goto('https://www.shutterfly.com/',{waitUntil:'domcontentloaded'});
    
    
    await page.getByLabel('Primary Navigation').getByRole('link', { name: 'Photo Books', exact: true }).click();
    await page.waitForLoadState('load');
   await page.getByTestId('nav-marquee-buttons-list').getByRole('link', { name: 'Travel',exact:true }).click();
  
   await page.pause();

//await page.getByRole('link', { name: 'Go to the Shutterfly home' }).click();

})