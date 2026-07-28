import test from "@playwright/test";

test('ShadowDomelement',async({page})=>{
   await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html');
    await page.locator('#shadow-btn').click();
    await page.locator('[data-testid="username-input"]').fill('Masrath');
    await page.pause();
})