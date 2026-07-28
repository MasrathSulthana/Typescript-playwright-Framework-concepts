import test from "@playwright/test";


test('SVG elements',async({page})=>{
await page.goto('https://www.shutterfly.com/');
await page.getByRole('combobox',{name:'Search for an item'}).fill('Mugs');
await page.locator('svg[fill="var(--br-cms-color-brand-raven)"]').first().click();
await page.pause();
    
})


test('SVG and mouseover on SVG',async({page})=>{
   await page.goto('https://petdiseasealerts.org/forecast-map#/*');
   let frame = page.frameLocator('//iframe[contains(@id,"map-instance")]');
   await frame.locator('g.region').first().waitFor({ state: 'visible', timeout: 30000 });

   let allregions = await frame.locator('g.region').all();
  console.log( allregions.length);

  for(let reg of allregions){

    let box = await reg.boundingBox();
    let centerX = box!.x+box!.width/2;
    let centerY = box!.y + box!.height/2;
     await page.mouse.move(centerX, centerY);

    let statename = await reg.getAttribute('id');
    console.log(statename);

    

  }
  await page.pause();
});


test('new svg graph',async({page})=>{
  await page.goto('https://www.iciciprulife.com/insurance-guide/Financial-planning-tools-Calculators/power-compounding-calculator.html');
  await page.waitForURL(/.*power-compounding-calculator.html/);
//await page.waitForTimeout(20000);


  let element = page.locator(".highcharts-markers.highcharts-point");
  let out = await element.all();
  let count =1;
  for(let c of out){
    await c.hover();
    let box=await c.boundingBox();
    let x= box!.x+box!.width/2;
    let y= box!.y+box!.height/2;

    await page.mouse.move(x,y);
    await page.waitForTimeout(200);   
    

   
    
    console.log(count, ':', await page.locator('.highcharts-tooltip').textContent());
     await page.waitForTimeout(500); 
     count++;
  }


})