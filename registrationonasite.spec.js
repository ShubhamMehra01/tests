const {test} = require ('@playwright/test');

test ('regflow', async ({browser}) =>{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator(".btn1").click(); 

await page.locator("#firstName").fill("centric");
await page.locator("#lastName").fill("consulting");
await page.locator("#firstName").fill("polope5486@discrip.com");
await page.locator("#userMobile").fill("1234567890");
await page.locator("[formcontrolname='occupation']").selectOption("Scientist");
await page.locator("[value='Male']").click();
await page.locator("#userPassword").fill("test12345");
await page.locator("#confirmPassword").fill("test12345");
await page.locator("[type='checkbox']").click();
await page.locator("#login").click();
})