import test from "@playwright/test";

test('Page load states', async({page})=>{
    //await page.goto('https://www.shutterfly.com/photo-books/',{waitUntil:'load'});
    //await page.goto('https://www.shutterfly.com/t/photo-book-styles/?dimensions=8x8',{waitUntil:'domcontentloaded'});
    await page.goto('https://www.shutterfly.com/t/photo-book-styles/?dimensions=8x8',{waitUntil:'commit'});
    await page.pause();
})