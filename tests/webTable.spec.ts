import test from "@playwright/test";


test('Web tablet selection',async({page})=>{
   await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');
   while(true){
   let userData=await page.getByRole('cell', {name:'jane_smith'}).first().isVisible();
   if(userData){
    await page.locator('#dataTable tr').filter({hasText:'john_doe'}).first().locator('input[type="checkbox"]').click();
    await page.pause();
    break;
}
else{
    let nextele= page.getByRole('button', {name:'›'});
    await page.waitForTimeout(500);
    await nextele.click();
    let isDisabled = await nextele.isDisabled();
    if(isDisabled){
        console.log("pagination is over but element not there");
        break;
    }
}
}});

test('Multiple checkboxes selection in Webtable',async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');
    while(true){
       let allUserChecks = await page.locator('#dataTable tr').
       filter({hasText:'john_doe'}).locator('input[type="checkbox"]').all();
       if(allUserChecks.length>0){
        for(let e of allUserChecks){
           await e.click();
        }}

      let nextEle =await page.getByRole('button',{name:'›'});
     let disablednextB = await nextEle.isDisabled();
     if(disablednextB){
        console.log('pagination is over');
        let count=await page.locator('.selected-count').innerText();
        console.log('total no of user count selected in webtable    '+count);
        break;
     }
     await page.waitForTimeout(1000);
    await nextEle.click();   
 }
})