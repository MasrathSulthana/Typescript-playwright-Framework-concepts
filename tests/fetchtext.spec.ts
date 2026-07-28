import test from "@playwright/test";


test('fetch text placeholder',async({page})=>{
    await page.goto('https://accounts.shutterfly.com/?redirectUri=https%3A%2F%2Fwww.shutterfly.com%2F');
    let placeholderval=await page.getByRole('textbox',{name:'Email address'}).getAttribute('aria-label');
    console.log(placeholderval);
    let hrefvalue = await page.getByRole('link',{name:'Forgot password?'}).getAttribute('href');
    console.log(hrefvalue);
})