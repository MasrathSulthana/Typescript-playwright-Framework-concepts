import test from "@playwright/test";


test('Mutiple options selections', async({page})=>{
    await page.goto('https://www.magupdate.co.uk/magazine-subscription/phrr');
    await page.locator('.radiobutton-container').last().click();
    await page.getByRole('textbox',{name:'Title'}).first().fill('masrath');
    await page.getByRole('textbox',{name:'initials'}).fill('s');
    await page.getByRole('textbox',{name:'Forename'}).fill('MK');
    await page.getByRole('textbox',{name:'Surname'}).fill('MD');
    await page.getByRole('textbox',{name:'Internal Routing Code'}).fill('123');
    await page.getByRole('textbox', { name: 'Direct Email' }).fill('new@gmail.com');
    await page.getByRole('textbox', { name: 'Direct Telephone' }).fill('1231212123');
    await page.getByRole('textbox',{name:'Job Title '}).fill('QA');
    await page.getByRole('textbox',{name:'Company Name'}).fill('MAD');
    await page.getByRole('textbox',{name:'Address Line 1'}).fill('Lane1')
    await page.getByRole('textbox',{name:'Town / City'}).fill('KZP');
    await page.locator('#Contact_CountryCode').selectOption({ label:'India'});
    await page.getByRole('textbox', { name: 'Postcode / Zipcode' }).fill('21321');
    await page.getByRole('textbox', { name: 'Company Website' }).fill('www.checkmark.com');
    await page.locator('#Question-100034').selectOption({label:'Paper'});
    await page.locator('[name="Question-758"]').selectOption({ value: 'HRJF-D' });
    await page.locator('[name="Question-759"]').selectOption({ value: 'HRIND-F' });
    await page.locator('#Question-760-HRDM-L').click();
    await page.locator("//input[@id='Question-874']").fill('233');
    await page.locator('#Question-762').selectOption({value:'HRHRE-E'});
    await page.locator('#Question-763').selectOption({value:'HRBUD-D'});
    await page.locator("//input[@id='Question-639']").fill('MA');
    //await page.waitForTimeout(30000);
    await page.getByRole('button',{name:'Submit Request'}).click();
    await page.pause();
})