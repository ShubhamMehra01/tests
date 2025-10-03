
// const {test, expect} = require('@playwright/test');
// test('DatePicker', async ({browser})=>{
//     const context =await browser.newContext();
//     const page = await context.newPage();
//     const month = 8;
//     const date = 18;    
//     const year = 2022;

//    const expectedlist = `${month}/${date}/${year}`;
//    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
//    await page.waitForLoadState('networkidle');
//    const calendar = page.locator('.react-date-picker__inputGroup__day');
//    await calendar.waitFor();
//    await calendar.click();
//    await page.locator('.react-calendar__navigation__label').click();
//    await page.locator('.react-calendar__navigation__label').click();
//    await page.getByText (String(year)).click();
//    await page.locator('.react-calendar__year-view__months__month').nth(Number(month)-1).click();
//    const dated = page.locator('.react-calendar__month-view__days__day').nth(Number(date));
//    await dated.click();
//    console.log(expectedlist);

// });

// const { test } = require('@playwright/test');
// const prompt = require('prompt-sync')();   // import prompt-sync

// test('DatePicker with user input', async ({ browser }) => {
//   const context = await browser.newContext();
//   const page = await context.newPage();

//   //Take user input
//   const month = Number(prompt('Enter month (1-12): '));
//   const date = Number(prompt('Enter date (1-31): '));
//   const year = Number(prompt('Enter year (2000-3000): '));

//   const expectedlist = `${month}/${date}/${year}`;

//   await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
//   await page.waitForLoadState('networkidle');

//   const calendar = page.locator('.react-date-picker__inputGroup__day');
//   await calendar.waitFor();
//   await calendar.click();

//   await page.locator('.react-calendar__navigation__label').click();
//   await page.locator('.react-calendar__navigation__label').click();
//   await page.getByText(year).click();
//   await page.locator('.react-calendar__year-view__months__month').nth(month - 1).click();
//   const dated = page.locator('.react-calendar__month-view__days__day').nth(date);
//   await dated.click();

//   console.log("Selected Date:", expectedlist);
// });

// const { test } = require('@playwright/test');

// function getArgValue(key, defaultValue) {
//   const arg = process.argv.find(a => a.startsWith(`--${key}=`));
//   return arg ? arg.split('=')[1] : defaultValue;
// }

// test('DatePicker with CLI input', async ({ browser }) => {
//   const context = await browser.newContext();
//   const page = await context.newPage();

//   // 📌 Take values from CLI args or fallback to default
//   const month = Number(getArgValue("month", 8));
//   const date = Number(getArgValue("date", 18));
//   const year = Number(getArgValue("year", 2030));

//   const expectedlist = `${month}/${date}/${year}`;

//   await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
//   await page.waitForLoadState('networkidle');

//   const calendar = page.locator('.react-date-picker__inputGroup__day');
//   await calendar.waitFor();
//   await calendar.click();

//   await page.locator('.react-calendar__navigation__label').click();
//   await page.locator('.react-calendar__navigation__label').click();
//   await page.getByText(String(year)).click();
//   await page.locator('.react-calendar__year-view__months__month').nth(month - 1).click();
//   const dated = page.locator('.react-calendar__month-view__days__day').nth(date);
//   await dated.click();

//   console.log("Selected Date:", expectedlist)});

// const { test } = require('@playwright/test');
// test('Dynamic Date Picker', async ({ browser }) => {
//   const context = await browser.newContext();
//   const page = await context.newPage();

//   // Desired date
//   const month = 2;   // July
//   const date = 31;   // 15th
//   const year = 2081; // Year

//   const expectedDate = `${month}/${date}/${year}`;
//   await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
//   await page.waitForLoadState('networkidle');

//   // Open calendar
//   await page.locator('.react-date-picker__inputGroup__day').click();

//   // Switch to decade view
//   await page.locator('.react-calendar__navigation__label').click();
//   await page.locator('.react-calendar__navigation__label').click();

//   //  Select correct year (navigate if needed)
//   while (!(await page.getByText(String(year), { exact: true }).isVisible())) {
//   const years = page.locator('.react-calendar__decade-view__years__year');

//   const startYear = Number(await years.first().textContent());
//   const endYear = Number(await years.last().textContent());

//   if (year < startYear) {
//     await page.locator('.react-calendar__navigation__prev-button').click();
//   } else if (year > endYear) {
//     await page.locator('.react-calendar__navigation__next-button').click();
//   }
// }
//   await page.getByText(String(year), { exact: true }).click();

//   //  Select correct month (January=1, December=12)
//   const monthNames = [
//     "January","February","March","April","May","June",
//     "July","August","September","October","November","December"
//   ];
//   await page.getByText(monthNames[month - 1], { exact: true }).click();

//   // Select correct date
//   await page.locator('.react-calendar__month-view__days__day')
//           .filter({ hasText: String(date) }).click();
//   //await page.waitForLoadState('networkidle');
//   console.log(expectedDate);
// });

// const { test } = require('@playwright/test');
// const { error } = require('console');

// function getDateArg(defaultValue = "22/07/2015") {
//   const arg = process.argv.find(a => a.startsWith("--date="));
//   return arg ? arg.split("=")[1] : defaultValue;
// }

// function parseDate(input) {
//   const [day, month, year] = input.split("/").map(Number);
//   return { day, month, year };
// }

// test('Smart Date Picker (single input)', async ({ browser }) => {
//   const context = await browser.newContext();
//   const page = await context.newPage();

//   // 📌 Get date from CLI or fallback
//   const inputDate = getDateArg("31/02/1990"); 
//   const { day, month, year } = parseDate(inputDate);

//  if(year<1900 || year>1990||day<1||day>31||month<1||month>12)
//      {
//         console.log('not valid');
//      }
// else {
//   console.log("hey sahi h");
// }
//   const expectedDate = `${day}/${month}/${year}`;
//   await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
//   await page.waitForLoadState('networkidle');

//   // Open calendar
//   await page.locator('.react-date-picker__inputGroup__day').click();

//   // Switch to decade view
//   await page.locator('.react-calendar__navigation__label').click();
//   await page.locator('.react-calendar__navigation__label').click();

//   // 📌 Select correct year
//   while (true) {
//   const yearCells = page.locator('.react-calendar__decade-view__years__year');
//   const targetYear = 1900;
//   const startYear = Number(await yearCells.first().textContent());
//   const endYear = Number(await yearCells.last().textContent());

//   if (targetYear < startYear) {
//     await page.locator('.react-calendar__navigation__prev-button').click();
//   } else if (targetYear > endYear) {
//     await page.locator('.react-calendar__navigation__next-button').click();
//   } else {
//     // ✅ Year is within current decade view
//     //console.log(targetYear);
//     await yearCells.filter({hasText: String(targetYear)}).click();
//     break;
//   }}
//   // 📌 Select correct month
//   const monthNames = [
//     "January","February","March","April","May","June",
//     "July","August","September","October","November","December"
//   ];
//   await page.getByText(monthNames[month - 1], { exact: true }).click();

//   // 📌 Select correct day
//   await page.locator('.react-calendar__month-view__days__day')
//           .filter({ hasText: String(day) }).first().click();

//           console.log(expectedDate);
//   });

const { test, expect } = require('@playwright/test');
const { error } = require('console');
const { waitForDebugger } = require('inspector');

   function getDateArg(defaultValue = "22/07/2015") {
   const arg = process.argv.find(a => a.startsWith("--date="));
   return arg ? arg.split("=")[1] : defaultValue;
 }
 function parseDate(input) {
  const [day, month, year] = input.split("/").map(Number);
  return { day, month, year };
}

function isleapYear(y) {
  return (y % 4 ===0 && y % 100 !== 0)||(y % 400 === 0);
}
test('Smart Date Picker (single input)', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  // Get date from CLI or fallback
  const inputDate = getDateArg("29/02/1908"); 
  const { day, month, year } = parseDate(inputDate);

  const Days = {
  1: 31, 
  2: isleapYear(year) ? 29: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
}
  expect(month, {inputDate}).toBeGreaterThan(1);
  expect(month, {inputDate}).toBeLessThanOrEqual(12);
  //console.log({inputDate});
  
  expect(day, {inputDate}).toBeGreaterThanOrEqual(Days[month]);
  expect(day, {inputDate}).toBeLessThanOrEqual(Days[month]);
  //console.log({inputDate});
  
  expect(year,{inputDate}).toBeGreaterThanOrEqual(1900);
  expect(year, {inputDate}).toBeLessThanOrEqual(1990);
  //console.log('invalid year');

  const expectedDate = `${day}/${month}/${year}`;
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
  await page.screenshot({path : 'Screenshot/screenshot-1.png'});
  
  // Open calendar
  await page.locator('.react-date-picker__inputGroup')
  .click();
  await page.waitForLoadState('networkidle');
  // Switch to decade view
  await page.locator('button.react-calendar__navigation__label').click();
  await page.waitForLoadState('networkidle');
  await page.locator('button.react-calendar__navigation__label').click();
  await page.waitForLoadState('networkidle');
  await page.screenshot();
  // Select correct year
  while (true) {
  const yearCells = page.locator('.react-calendar__decade-view__years__year');
  await yearCells.first().waitFor();
  const startYear = Number(await yearCells.first().textContent()); 
  const allYear = await yearCells.allTextContents();
  const endYear = Number(allYear[allYear.length-1]);
  
  if (year>=startYear && year <= endYear){
    await page.getByText(String(year), {exact : true}).click();
    break;
  }
  
  else if  (year < startYear) {
     await page.locator('.react-calendar__navigation__prev-button').click();
  } 
  else if(year > endYear) 
  {
    await page.locator('.react-calendar__navigation__next-button').click();
  }
  }
    const monthIndex = month-1;
     await page.waitForSelector('.react-calendar__year-view__months__month',{ state: 'visible'});
    await page.locator('.react-calendar__year-view__months__month')
    .nth(monthIndex)
    .click();

  // Select correct day
  await page.locator('.react-calendar__month-view__days__day')
  .filter({hasText: String(day) })
  .first()
  .click();
  console.log(expectedDate);
});