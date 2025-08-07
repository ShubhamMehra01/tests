const {test} = require ('@playwright/test')

test ('regflow', async ({browser}) =>{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator(".btn1").click();
await page.locator("")

})