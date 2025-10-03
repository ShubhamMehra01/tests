
const {test} = require('@playwright/test');
test('Demo for login',async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage({slowMo : 1000});
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.waitForLoadState('networkidle');
    await page.locator('#userEmail').fill('test1@gmail.com');
    await page.locator('#userPassword').fill('Work@12345');
    await page.locator("[type='submit']").click();
});

test('Demo for login1',async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage({slowMo : 1000});
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.waitForLoadState('networkidle');
    await page.locator('#userEmail').fill('test1@gmail.com');
    await page.locator('#userPassword').fill('Work@12345');
    await page.locator("[type='submit']").click();
});
