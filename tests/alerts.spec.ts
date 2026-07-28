import test from "@playwright/test";

test('Test alerts', async({page})=>{
   page.on('dialog',async(popup)=>{
    if(popup.type()==='prompt'){
        console.log(popup.message());
        await popup.accept('Msadsad');

    }});

     page.on('dialog',async(popup)=>{
    if(popup.type()==='confirm'){
       await popup.accept();

    }});


   await page.goto('https://the-internet.herokuapp.com/javascript_alerts',{waitUntil:'domcontentloaded', timeout: 15000 });
   await page.getByRole('button', {name:'Click for JS Confirm'}).click();
   await page.waitForTimeout(3000);
   await page.pause();
});