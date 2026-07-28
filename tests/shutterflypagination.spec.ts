import test from "@playwright/test";

//test.use({storageState:'storageState.json'});
test('pagination on SFLY',async({browser})=>{
  test.setTimeout(300000); 

  let context= await browser.newContext();
  let page = await context.newPage();
  
await page.goto('https://www.shutterfly.com/');
await page.locator('#category-menu-item-2').hover();
await page.getByText('Holiday Cards',{exact:true}).click();
while(true){
    let designlink= page.getByText('Gilded Gift',{exact:true}).first();
    let design= await designlink.isVisible();
    if(design){

       let [childwindow] =await Promise.all([ context.waitForEvent('page'),designlink.click()]);
        await childwindow.waitForLoadState();
        await childwindow.bringToFront();
        console.log(await childwindow.title());
        //await page.pause();
        break;
     }
     else{
       let nextElement= page.getByRole('img',{name:'Next page'});
       let disablestate = await nextElement.isDisabled();
       if(disablestate){
        console.log('pagination is over but design  not found');
        break;
       }
       await nextElement.click();
       await  page.waitForTimeout(3000);


     }
}


})


test('Corosel block', async({page})=>{
  await page.goto('https://www.shutterfly.com/');
  while(true){
  let designname= page.locator('[data-testid="scroll-container"]').getByText('Calendars');
  let design= await designname.isVisible;
  if(design){
  await designname.click();
  await page.pause();
  break;
  }
/*else
  {
 let nextEl= page.getByTestId('scroll-right-arrow-button');
 let disablenextbu =await nextEl.isDisabled();
if(disablenextbu){
  console.log('deisgn is not found in the corosel');
  break;
}
nextEl.click();
await page.waitForTimeout(3000);




}*/}})