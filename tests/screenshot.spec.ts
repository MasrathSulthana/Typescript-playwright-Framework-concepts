import test from "@playwright/test";



test('ScreenShot', async({page})=>{
    await page.goto('https://www.shutterfly.com/t/holiday-cards/');
    await page.screenshot({
        path:'Custom.png',
        fullPage:true,
        type:"png",
        clip:{x:0,y:0,width :500,height:300}


    })
})