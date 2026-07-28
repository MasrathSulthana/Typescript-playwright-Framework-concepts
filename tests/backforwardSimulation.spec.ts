import { test, Page, chromium, Browser } from '@playwright/test';

test ('Backward and forward simulation',async({page})=>{
await page.goto('https://www.shutterfly.com');
console.log(await page.title());

await page.goto('https://www.google.com');
console.log(await page.title());

console.log('________')
await page.goBack();
console.log(await page.title());

console.log('________')
await page.goForward();
console.log(await page.title());

await page.reload();

}
)