const {test, expect,request} = require('@playwright/test');
const loginpayload = {userEmail: "test1@gmail.com", userPassword: "Work@12345"};
let token;


test.beforeAll(async()=>{
    const Acontext = await request.newContext();
    const loginresponse = await Acontext.post(('https://rahulshettyacademy.com/api/ecom/auth/login'),
    {
      data : loginpayload,
    })
    expect(loginresponse.ok()).toBeTruthy();
    const loginresponseJson = await loginresponse.json();
    token = loginresponseJson.token;
    console.log(token);
});
test.skip('Demo for login',async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.waitForLoadState('networkidle');
    await page.locator('#userEmail').fill('test1@gmail.com');
    await page.locator('#userPassword').fill('Work@12345');
    await page.locator("[type='submit']").click();
});

test.skip('registration', async ({browser})=>{
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

//Child window
test.skip('Demo Child new window', async({browser})=>{
    const context=await browser.newContext();
    const page= await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const documentLink= await page.locator('.blinkingText');
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        await documentLink.click(),
    ])
    const validation = await newPage.locator('.red').textContent();
    const arrayText= await validation.split('@');
    arrayText[1]
    console.log(arrayText);
});

test.skip('product purchase', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    // await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    // await page.waitForLoadState('networkidle');
    // await page.locator('#userEmail').fill('test1@gmail.com');
    // await page.locator('#userPassword').fill('Work@12345');
    // await page.locator("[type='submit']").click();
    await page.locator('.card-body').first().waitFor();
    const product= page.locator('.card-body');
    const prodcount = await product.count();
    console.log(prodcount);
    const title = await page.locator('.card-body b').allTextContents();
    console.log(title);
});

test('DatePicker', async ({browser})=>{
    const context =await browser.newContext();
    const page = await context.newPage();
    const month = 8;
    const date = 18;    
    const year = 2029;

    const expectedlist = [month/date/year];
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
   await page.waitForLoadState('networkidle');
   const calendar = page.locator('.react-date-picker__inputGroup__day');
   await calendar.waitFor();
   await calendar.click();
   await page.locator('.react-calendar__navigation__label').click();
   await page.locator('.react-calendar__navigation__label').click();
   //await page.waitFor();
   await page.getByText(year).click();
   await page.waitForLoadState('networkidle');
   await page.locator('.react-calendar__year-view__months__month').nth(Number(month)-1).click();
   await page.waitForLoadState('networkidle');
   const dated = page.locator('.react-calendar__month-view__days__day').nth(Number(date));
   await dated.click();
   await page.waitForLoadState('networkidle');
   console.log(date);
});
