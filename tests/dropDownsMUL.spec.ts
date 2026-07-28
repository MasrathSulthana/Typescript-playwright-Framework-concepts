import test, { Locator, Page } from "@playwright/test";


test('Multiple select dropdown',async({page})=>{
    await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/');
    await page.locator('#justAnInputBox').click();
    await page.locator('span.comboTreeItemTitle').filter({hasText:'choice 3'}).first().click();
}
)
//================   



test('Mutiple selection using array',async({page})=>{
     await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/');
     await page.locator('#justAnInputBox').click();
     selectChoice(page,['choice 5','choice 2','choice 1']);
     await page.pause();
    })

    async function selectChoice(page:Page , choices:string[]):Promise<void> {
        for (let ch of choices){
            await page.locator('span.comboTreeItemTitle').filter({hasText:`${ch}`}).first().click();
        }
        
    }
//================   


    test('MuLTIP filters selection',async ({page}) => {
    await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/');
    await page.locator('#justAnInputBox').click();
    let dropdown = await page.locator('.comboTreeDropDownContainer').first();
    //await dropdown.waitFor({state: 'visible'});
    let checkBoxes:Locator[] = await dropdown.locator('.comboTreeItemTitle input[type="checkbox"]').all();
    for(let e of checkBoxes){
        await e.click({force:true});
    }
      await page.pause();  
    })