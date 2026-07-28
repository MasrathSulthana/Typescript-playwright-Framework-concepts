import test from "@playwright/test";

test('Parent child link', async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.locator('form').getByRole('textbox', {name:'First Name'}).fill('Masrath');
    await page.pause();
})

test('Webtable CheckBox select',async({page})=>{

   await page.goto('https://qavbox.github.io/demo/webtable/');
   await page.locator('#table01').locator('tr').filter({ hasText: 'Coded UI' }).getByRole('checkbox').click();
 await page.pause();

}
)

test('Webtabel Age from coloum',async({page})=>{
    await page.goto('https://qavbox.github.io/demo/webtable/');
    let age = await page.locator('#table02').locator('tr').filter({hasText:'Garrett Winters'}).locator('td').nth(3).innerText();
    console.log('Age  of the person' + age);

    
})

test('Webtable All Rows and Columns', async ({page})=>{
    await page.goto('https://www.w3schools.com/html/html_tables.asp');
    let allRco = await page.locator('#customers').locator('tr tdnp').allInnerTexts();
    for(let e of allRco){
    console.log(e);
    }
})

test('CheckBox selection',async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html');
    let checkbox =await page.locator('.table.hover').locator('tr td').getByRole('checkbox').all();
    for(let e of checkbox){
       await e.click();
       await page.waitForTimeout(1000);
    }
    await page.pause();
})