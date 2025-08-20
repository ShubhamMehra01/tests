
const {test, expect} = require('@playwright/test');
test('product purchase', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.waitForLoadState('networkidle');
    await page.locator('#userEmail').fill('test1@gmail.com');
    await page.locator('#userPassword').fill('Work@12345');
    await page.locator("[type='submit']").click();

    await expect(page.locator('.card-body').first()).toBeVisible();
    const product= page.locator('.card-body');
    const prodcount = await product.count();
    console.log(prodcount);
    const title = await page.locator('.card-body b').allTextContents();
    console.log(title);
});
