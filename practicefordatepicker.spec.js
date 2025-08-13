const {test, expect} = require ("@playwright/test");

test("Practise date Picker", async ({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
await page.waitForLoadState('networkidle');
const month=8;
const date=18;
const year=2027;
const expectedlist = [month/date/year];
//clicking on calender
const datecalender= page.locator(".react-date-picker__inputGroup");
await datecalender.waitFor();
await datecalender.click();
//clicking two times on year selector
await page.locator(".react-calendar__navigation__label").click();
await page.locator(".react-calendar__navigation__label").click();
//year select
await page.getByText(year).click();
//month
await page.locator(".react-calendar__year-view__months__month").nth(Number(month)-1).click();
//date
const dated= page.locator(".react-calendar__month-view__days__day").nth(Number(date));
await dated.click();
console.log(date);
const Inputs = page.locator(".react-date-picker__inputGroup__input").count();
page.waitForLoadState("networkidle");
console.log(Inputs);
// for (let i=0; i<expectedlist.length; i++){
// const value = await Inputs.nth(i).inputValue();
// await expect(Inputs).toEqual(expectedlist);
// }

});