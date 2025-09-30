// import { Given, When, Then } from '@cucumber/cucumber';
// import { LeavePage } from '../pages/leavePage';
// import { expect } from '@playwright/test';
// let leavePage: LeavePage;
// Given('I am logged in', async function () {});
// When('I navigate to leave page', async function () { leavePage = new LeavePage(this.page); await leavePage.goto(); });
// When('I apply for leave from {string} to {string}', async function (from,to) { await leavePage.applyLeave(from,to); });
// Then('I should see leave request submitted', async function () { await expect(leavePage.successMessage).toBeVisible(); });

import { Given, When, Then } from '@cucumber/cucumber';
import { LeavePage } from '../pages/leavePage';
import { LoginPage } from '../pages/loginPage';

Given('I am logged in', async function () {
  const loginPage = new LoginPage(this.page!);
  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');
});

When('I navigate to leave page', async function () {
  const leavePage = new LeavePage(this.page);
  await leavePage.open();   // ✅ now exists
});

When(
  'I apply for leave from {string} to {string}',
  async function (fromDate: string, toDate: string) {
    const leavePage = new LeavePage(this.page);
    await leavePage.applyLeave(fromDate, toDate);
    await this.page.locator("//button[normalize-space()='Reset']").click();
  }
);

Then('I should see leave request submitted', async function () {
  console.log("Thankyou for submitting leave");
  //await this.page.waitForSelector('div.oxd-toast');

});