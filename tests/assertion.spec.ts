import test, { expect } from "@playwright/test";
import { asyncWrapProviders } from "node:async_hooks";


test('Assertion testing', async({page})=>{

    await page.goto('https://www.shutterfly.com/p/cards-stationery/birth-announcements/our-miracle-birth-announcement');
    let heading =page.getByRole('heading',{name:'Our Miracle Birth Announcement'});
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Our Miracle Birth Announcement');
    await expect(page.locator(`span:has-text("80")`).nth(1)).toHaveText('80');
    let ro = page.getByText('Rounded',{exact:true});
    await expect(ro).toBeFocused();
   

});