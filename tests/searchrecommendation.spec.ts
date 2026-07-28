import test from "@playwright/test";

test('SearchBox recommendation',async({page})=>{
   
    await page.goto('https://www.amazon.com/');
    await page.getByRole('searchbox',{name:'Search Amazon'}).fill('MacBook pro');
    await page.getByRole('button',{name:'macbook pro 16 inch'}).click();
    await page.pause();
})


//-----------

test('Shutterfly Search recommendatiions',async({page})=>{
    await page.goto('https://www.shutterfly.com/');
    await page.getByRole('combobox',{name:'Search for an item'}).fill('Mugs');
    await page.getByRole('option').filter({hasText:'Mugs For Dad'}).click();
    await page.waitForTimeout(1000);
    let title= await page.title();
    console.log('page tile : '+ title);
    })