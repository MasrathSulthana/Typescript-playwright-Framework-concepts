import { Browser, chromium, Page } from "playwright";

(async()=>{
   let browser: Browser = await chromium.launch({channel:'chrome',headless:false});
    let page:Page =await browser.newPage();
    await page.goto('https://www.amazon.com/');
    let title:string = await page.title();
    console.log('title is :' + title);
    let url:string=page.url();
    console.log('url si ' + url);
    browser.close();


})();