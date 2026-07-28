import test, { Locator } from "@playwright/test";

test('All Elements in thepage', async({page})=>{
    await page.goto('https://www.flipkart.com/');
    let allLinks:String[]=await page.locator('//a[@href]').allInnerTexts();
    for(let e of allLinks){
        console.log(e);
    }
}
)

test('Total Count', async({page})=>{
    await page.goto('https://www.flipkart.com/');
    let countofLinks:number=await page.locator('//a[@href]').count();
    console.log('Total Count of Links in homepage: ', countofLinks);
})


test('lterate links with break',async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let allLinks: Locator[] = await page.locator('a.list-group-item').all();
     for(let e of allLinks){
        await e.highlight();
        let linktext = (await  e.innerText()).trim();
         await page.waitForTimeout(2000);

         if(linktext==='Downloads'){
            await e.click();
            break;
         }

     }
})

test('Runs',async({page})=>{
    await page.goto('https://www.bing.com/sportsdetails?q=ipl%20indian%20premier%20league&sport=Cricket&scenario=League&TimezoneId=India%20Standard%20Time&IANATimezoneId=Asia/Kolkata&ISOTimezoneKey=IST&league=Cricket_IPL&gender=man&categoryformat=t20&intent=Standings&seasonyear=2026&segment=sports&isl2=true&form=QBRE&');
    
    let score:string[]=await page.locator('.b_scard.b_scardf')
    .locator(`//tr[@class='bsp_row_item']`)
    .filter({ hasText: 'RCB' }).
    locator('.colVal').allInnerTexts();
    console.log(score);
})