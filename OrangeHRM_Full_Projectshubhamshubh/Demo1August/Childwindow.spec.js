const {test, expect,request} = require('@playwright/test');
test('Demo Child new window', async({browser})=>{
    const context=await browser.newContext();
    const page= await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const documentLink= await page.locator('.blinkingText');
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        await documentLink.click(),
    ])
    const validation = await newPage.locator('.red').textContent();
    const arrayText= validation.split('@');
    arrayText[1]
    console.log(arrayText);
});
