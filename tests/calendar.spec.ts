import test from "@playwright/test";


test('Calendar selection',async({page})=>{
    await page.goto('https://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html');
    await page.locator('#datepicker').click();
    let month =await page.locator('.ui-datepicker-month').innerText();
    let year= await page.locator('.ui-datepicker-year').innerText();
    let currentMonthYear = `${month} ${year}`;
    console.log(currentMonthYear);
    let expectMonthYear = 'December 2026';
    while(true){
    if(currentMonthYear===expectMonthYear){
       await page.getByRole('link',{name:'30', exact:true }).click();
       break;
    }
    else{
        await page.getByTitle('Next').click();
        await page.waitForTimeout(500);
           month =await page.locator('.ui-datepicker-month').textContent();
          year= await page.locator('.ui-datepicker-year').textContent();

          currentMonthYear= `${month} ${year}`;
          console.log(currentMonthYear);

    }
    }

    
})