const { test, expect } = require('@playwright/test')
test ('First playwright test 1', async ({browser})=> 
{
 const context = await browser.newContext();
 const page = await context.newPage();
 await page.goto("https://www.youtube.com/search?q=youtube+playwright+with+vs+code&gs_lcrp=EgRlZGdlKgcIABBFGMIDMgcIABBFGMIDMgcIARBFGMIDMgcIAhBFGMIDMgcIAxBFGMIDMgcIBBBFGMIDMgcIBRBFGMIDMgcIBhBFGMIDMgcIBxBFGMIDMgsICBDpBxj2Bxj6VTILCAkQ6QcY9gcY-lUyCAgKEOkHGPIHMgsICxDpBxj2Bxj6VdIBCzU2MDc1ODJqMGoxqAIIsAIB&FORM=ANNAB1&PC=U531");
});

test ('playwright test number 5', async ({page})=> 
{
 //const context = await browser.newContext();
 //const page = await context.newPage();
 await page.goto("https://www.google.com");
});

// test ('playwright test number', async ({page})=> 
// {
//  await page.goto("https://google.com");
//  console.log(await page.title());
//  await expect(page).toHaveTitle(/Google/);
//  //expect (page).toHaveTitle("Google");
// });
