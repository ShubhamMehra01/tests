const {test,expect,request} = require('@playwright/test');

test('Handle Pop up', async({browser})=>{
 
const context= await browser.newContext();
const page = await context.newPage();

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
// await page.goto("https://google.com");
// await page.goBack();

await page.locator("#alertbtn").click();
page.on('dialog', dialog=> dialog.accept());
await page.locator("#confirmbtn").click();
page.on('dialog', dialog =>dialog.dismiss());

await page.locator("#displayed-text").isVisible();
await page.locator("#hide-textbox").click();
await page.locator("displayed-text").isHidden();
await page.locator("#show-textbox").click();
await page.locator("#displayed-text").isVisible();

const framepages = page.frameLocator("#courses-iframe");
await framepages.locator("li a[href*='lifetime-access']:visible").click();
const textofline= await framepages.locator(".text h2").textContent();

console.log(textofline.split(" ")[1]);

});
// const loginpayload={};
//  test.beforeAll(async()=>{
//     const ApiContext = request.newContext();
//     const loginresponse = await ApiContext.post("api",
//         {
//         data: loginpayload
//     } )
//     expect(loginresponse.ok()).toBeTruthy();
//     const loginresponseJson= loginresponseJson.token;
//     console.log(token);
//  });

//  test ('API Request' , async({page})=>{
//     await page.addInitScript (value=>{
//         window.localStorage.setItem('token',value);
//     },token);
//  })