
const {test, expect} = require('@playwright/test');
test('DatePicker', async ({browser})=>{
    const context =await browser.newContext();
    const page = await context.newPage();
    const month = 8;
    const date = 18;    
    const year = 2029;

   const expectedlist = `${month}/${date}/${year}`;
   await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
   await page.waitForLoadState('networkidle');
   const calendar = page.locator('.react-date-picker__inputGroup__day');
   await calendar.waitFor();
   await calendar.click();
   await page.locator('.react-calendar__navigation__label').click();
   await page.locator('.react-calendar__navigation__label').click();
   await page.getByText (year).click();
   await page.locator('.react-calendar__year-view__months__month').nth(Number(month)-1).click();
   const dated = page.locator('.react-calendar__month-view__days__day').nth(Number(date));
   await dated.click();
   console.log(expectedlist);
});