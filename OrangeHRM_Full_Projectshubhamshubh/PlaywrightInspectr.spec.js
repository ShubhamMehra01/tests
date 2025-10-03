const {test, expect} = require('@playwright/test');
test ('Inspector', async ({browser}) =>{
    const context = await browser.newContext();
    const page = await context.newPage();
});

test ('Inspector1', async ({page})=>{
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator('.btn1').click(); 
await page.locator("#firstName").fill("centric");
await page.locator("#lastName").fill("consulting");
await page.locator("#userEmail").fill("polope5486@discrip.com");
await page.locator("#userMobile").fill("1234567890");
await page.locator("[formcontrolname='occupation']").selectOption("Scientist");
//await expect (page.locator("[value='Male']").not.toBeChecked());
await page.locator("[value='Male']").click();
console.log(await expect (page.locator("[value='Male']")).toBeChecked());
await page.locator("#userPassword").fill("80012345");
await page.locator("#confirmPassword").fill("80012345");
await page.locator("[type='checkbox']").click();
await page.locator("#login").click();
});
