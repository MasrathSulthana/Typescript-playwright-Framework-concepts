import test, { Locator } from "@playwright/test";

test('Total links and href',async({page})=>{
    await page.goto('https://www.flipkart.com/');
    let allLinks : Locator[] = await page.locator('a').all();
    let totalLinks = allLinks.length;
    console.log('total no of links in home page:', totalLinks);
    for(let e of allLinks){
       let textoflink= await e.innerText();
       let hreflink =await e.getAttribute('href');
       console.log('text of the links:', textoflink , ':', hreflink);
    }
    
})

test('Total Images',async({page})=>{
    await page.goto('https://www.flipkart.com/');
    let allImages:Locator[]= await page.locator('img').all();
    let totalimages = allImages.length;
    console.log('Total no of images in homepage', totalimages);
    for(let e of allImages){
        let alttext = await e.getAttribute('alt');
        let hreflinksnew= await e.getAttribute('src');
        console.log('alttext is:',alttext,':',hreflinksnew);
    }
})