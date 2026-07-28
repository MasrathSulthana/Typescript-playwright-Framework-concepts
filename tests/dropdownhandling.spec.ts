import test from "@playwright/test";


test('Dropdown option Select',async({page})=>{
    await page.goto('https://orangehrm.com/contact-sales');
    
    await page.getByRole('combobox',{name:'Country'}).selectOption({label:'Argentina'});
    await page.waitForTimeout(1000);
    

    await page.getByRole('combobox',{name:'Country'}).selectOption({value:'Canada'});
    await page.waitForTimeout(1000);

    let currentval =await page.getByRole('combobox',{name:'Country'}).selectOption({index:12});
    console.log(currentval)

    await page.pause();
    
})

test('Multiple dropdown selection select',async({page})=>{
    await page.goto('https://selenium08.blogspot.com/2019/11/dropdown.html');
    await page.locator('[name="Month"]').selectOption(["June","July","April"]);
    await page.pause();

})