const {test, expect,request} = require('@playwright/test');
const loginpayload = {userEmail: "test1@gmail.com", userPassword: "Work@12345"};
let token;

test.beforeAll(async()=>{
    const Acontext = await request.newContext();
    const loginresponse = await Acontext.post(('https://rahulshettyacademy.com/api/ecom/auth/login'),
    {
      data : loginpayload
    })
    expect(loginresponse.ok()).toBeTruthy();
    const loginresponseJson = await loginresponse.json();
    token = loginresponseJson.token;
    console.log(token);
})
test('product purchase', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.addInitScript(value=>{
    window.localStorage.setItem('token',value);
    },token);
    await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");
    await page.waitForLoadState('networkidle');
    const product= page.locator('.card-body');
    await expect(product.first()).toBeVisible({timeout:50000});
    await page.waitForLoadState('networkidle');
    //const product= page.locator('.card-body');
    const prodcount = await product.count();
    console.log(prodcount);
    const title = await page.locator('.card-body b').allTextContents();
    console.log(title);
});
