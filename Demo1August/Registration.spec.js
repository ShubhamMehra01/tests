
const {test, expect,request} = require('@playwright/test');
test('registration', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator('.btn1').click();
    await page.locator('#firstName').fill('test');
    await page.locator('#lastName').fill('test');
    await page.locator('#userEmail').fill('test@gmail.com');
    await page.locator('#userMobile').fill('2121222677');
    
    await page.locator('[formcontrolname="occupation"]').selectOption("Engineer");
    await expect (page.locator("[value='Male']")).not.toBeChecked();
    await page.locator("[value='Male']").click();
    console.log(await expect (page.locator("[value='Male']")).toBeChecked());
    await page.locator('#userPassword').fill('test12345');
    await page.locator('#confirmPassword').fill('test12345');
    await page.getByText(" I am 18 year or Older ").click();
    await page.locator('#login').click();
});