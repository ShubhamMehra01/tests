const {test, expect} = require('@playwright/test');
//const { text } = require('stream/consumers');
test ('Registration', async ({browser}) =>{
    const context = await browser.newContext();
    const page = await context.newPage();
   //await page.goto("https://google.com");
//console.log (await page.title());
//await expect(page).toHaveTitle("Google");
});

test ('Registration1', async ({page})=>{
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator('.btn1').click(); 
await page.locator("#firstName").fill("centric");
await page.locator("#lastName").fill("consulting");
await page.locator("#userEmail").fill("polope5486@discrip.com");
await page.locator("#userMobile").fill("1234567890");
await page.locator('[formcontrolname="occupation"]').selectOption("Scientist");
// //await expect (page.locator("[value='Male']")).isChecked();
// //console.log (await page.locator("[value='Male']").last().isChecked());
await expect (page.locator("[value='Male']")).not.toBeChecked();
//await expect (page.locator("[type='radio']").first()).toBeChecked();
await page.locator("[value='Male']").click();
console.log(await expect (page.locator("[value='Male']")).toBeChecked());
await page.locator("#userPassword").fill("80012345");
await page.locator("#confirmPassword").fill("80012345");
await page.locator("[type='checkbox']").click();
await page.locator("#login").click();
});
test.only ('Window child new page', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = await page.locator('.blinkingText');
    
   const [newPage] = await Promise.all ([
    context.waitForEvent('page'),
    documentLink.click(),
    ])
    const text = await newPage.locator(".red").textContent()
    const arrayText = text.split("@")
    arrayText[1]
    console.log(text);
} );