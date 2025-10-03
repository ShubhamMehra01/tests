const { test, expect } = require('@playwright/test')
test ('First playwright test 1', async ({browser})=> 
{
 const context = await browser.newContext();
 const page = await context.newPage();
 await page.goto("https://google.com");
});

test ('playwright test number', async ({page})=> 
{
 await page.goto("https://google.com");
 console.log(await page.title());
 await expect(page).toHaveTitle(/Google/);
 //expect (page).toHaveTitle("Google");
});

test ('playwright test number 2', async ({page}) => {
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.locator('#username').fill("admin");
await page.locator('#password').fill("admin@12345");
await page.locator('#signInBtn').click();
console.log (await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block'")).toContainText("Incorrect");

})

test('playwright test number 4', async ({page}) => {
    const username = await page.locator('#username');
    const password = await page.locator('#password');
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await username.fill("admin");
await password.fill("admin@12345");
await page.locator('#signInBtn').click();
console.log (await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText("Incorrect");

})

test.only('playwright test number 5', async ({page}) => {
const username = await page.locator('#username');
const password = await page.locator('#password');
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await username.fill("rahulshettyacademy");
await password.fill("learning");
await page.locator('#signInBtn').click();
const cardTitles = await page.locator(".card-title a").nth(2).textContent(); 
//console.log (await cardTitles.first().textContent());
//console.log (await cardTitles.allTextContents());/
//const allTitles = await cardTitles.allTextContents();
console.log(cardTitles);
});
