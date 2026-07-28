import test from "@playwright/test";


test('Mouse click',async({page})=>{
   await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
   await page.getByText('right click me',{exact:true}).click({button:'right'});
   await page.getByText('Copy',{exact:true}).click();
   await page.pause();
    
})

test('Menuoptions',async({page})=>{
   await page.goto('https://www.shutterfly.com/');
   await page.getByText('Photo Books',{exact:true}).nth(1).hover();
   await page.getByText('8x8 Photo Books',{exact:true}).click();
   await page.pause();
})

test('Multiple select Menu',async({page})=>{
   await page.goto('https://www.bigbasket.com/');
   await page.getByText('Shop by',{exact:true}).nth(1).click();
   await page.locator('[id="headlessui-menu-items-:R15d956:"]').getByRole('link',{name:'Food Court'}).hover();
   await page.locator('[id="headlessui-menu-items-:R15d956:"]').getByRole('link',{name:'Breakfast'}).hover();
   await page.locator('[id="headlessui-menu-items-:R15d956:"]').getByRole('link',{name:'Poha & Upma'}).click();
   await page.pause();
});

test('keyBoard ', async({page})=>{
   await page.goto('https://www.shutterfly.com/');
   let searchBox = await page.getByRole('combobox',{name:'Search for an item'});
   await searchBox.fill('Mugs');
   await searchBox.press('Enter');
   await page.pause();
})

test('Accessibilty form with using keyboard Tab',async({page})=>{
   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
   await page.getByRole('textbox',{name:'First Name'}).fill('Nas');
   await page.keyboard.press('Tab');
   await page.keyboard.type('sul');
   await page.keyboard.press('Tab');
   await page.keyboard.type('tab@yopmail.com');
   await page.keyboard.press('Tab');
   await page.keyboard.type('8989898989');
   await page.keyboard.press('Tab');
   await page.keyboard.type('Ayesha@123');
   await page.keyboard.press('Tab');
   await page.keyboard.type('Ayesha@123');
   await page.keyboard.press('Tab');
   await page.keyboard.press('ArrowRight');
   await page.keyboard.press('Tab');
   await page.keyboard.press('Tab');
   await page.keyboard.press('Space'); //for Checkbox
   await page.keyboard.press('Enter')
   await page.pause();

   
})
