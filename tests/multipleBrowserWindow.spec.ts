import {test, expect, Page, Locator} from "@playwright/test";


test('Two Window Handlingtest',async({browser})=>{
   let context= await browser.newContext();
   let page = await context.newPage();
   await page.goto('https://orangehrm.com/contact-sales');
  let [childWindowpage]=await Promise.all([context.waitForEvent('page'),
     page.getByRole('link',{name: 'About Us'}).
     click()
    ]);

    await childWindowpage.waitForLoadState();
    let allPages= context.pages();
    console.log('Total no of page:',allPages.length);
    await childWindowpage.bringToFront();
    console.log(await childWindowpage.title());
    await childWindowpage.close();
    
    await page.bringToFront();
    console.log(await page.title());
    await page.pause();
 
})
 

test('Multiple window test',async({browser})=>{


    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto('https://orangehrm.com/contact-sales');
    let links:Locator[]=[
        page.getByRole('link',{name: 'About Us'}),
        page.getByRole('link',{name: 'Contact Us'}),
        page.getByRole('link',{name: 'Become a Partner'}),
        page.getByRole('link',{name: 'Press Releases'})
    ];
  let childWindowpages:Page[]=[];
    for(let link of links){
      let [childwindow]=  await Promise.all([context.waitForEvent('page'),
            link.click()
      ]);
     await childwindow.waitForLoadState();
     childWindowpages.push(childwindow);
};
console.log('total no of page:',context.pages().length);

for (let i=0;i<childWindowpages.length; i++){
    let child= childWindowpages[i];
    await child.bringToFront();
    console.log(await child.title());
    await child.waitForTimeout(1000);
    await child.close();
}
await page.bringToFront();
console.log('Parent window title:', await page.title());
console.log('Remaining Pages:',context.pages().length);
await page.pause();


})