import test, { Frame, FrameLocator } from "@playwright/test";

test('Iframe test',async({page})=>{
    await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/');
    await page.getByTitle('Vehicle-Registration-Forms-and-Examples').click();
    let framelocator:FrameLocator=  page.frameLocator('#frame-one748593425');
    await framelocator.locator('#RESULT_TextField-1').fill('Masrath');
    await framelocator.getByRole('textbox',{name:'Location'}).fill('nwew');
    await page.pause();
    
})

test('Frame testing',async({page})=>{
    await page.goto('https://www.londonfreelance.org/courses/frames/index.html');
    let heading = await page.frameLocator('[name="main"]').getByRole('heading',{level:2}).innerText();
    console.log(heading);

    let footer = await page.frameLocator('[name="bot"]').getByRole('heading',{level:2}).innerText();
    console.log(footer);
})

test('Count Frames', async({page})=>{
    await page.goto('https://www.londonfreelance.org/courses/frames/index.html');
    let framecount = page.frames().length;
    console.log(framecount);

})

test('Frame name and url', async({page})=>{
    await page.goto('https://www.londonfreelance.org/courses/frames/index.html');
    let allframes:Frame[] =page.frames();
    let framecount= page.frames().length;
    for(let fr of allframes){
        let frameName =fr.name();
        let frameURL =fr.url();
        console.log(frameName +':' + frameURL);
    }

}) 

test('Nested Ifram',async({page})=>{
    await page.goto('https://www.dezlearn.com/nested-iframes-example/');
     let parentFrame = page.frameLocator('#parent_iframe');
     await parentFrame.getByRole('button',{name:'Click Here'}).click();
     let parenttext = await parentFrame.locator('#processing').innerText();
     parentFrame.frameLocator('#iframe1').getByRole('button',{name:'Click Here'}).click();
    let childtext=  await parentFrame.frameLocator('#iframe1').locator('#processing').innerText();
    console.log(parenttext,+'    _______         '+ childtext);
     
     await page.pause();
    
})