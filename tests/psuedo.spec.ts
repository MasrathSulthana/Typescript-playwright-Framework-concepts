import test from "@playwright/test";

test('psuedo Element',async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let content = await page.evaluate(()=>{return window.getComputedStyle(
    document.querySelector('label[for="input-firstname"]')!,
    '::before').getPropertyValue('content');
 });
 console.log(content);
 await page.pause();


})

test('Alert Element',async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let title = await page.evaluate(()=>{alert('hi this is me');
        return document.title;
});
console.log(title);
await page.pause();

})
