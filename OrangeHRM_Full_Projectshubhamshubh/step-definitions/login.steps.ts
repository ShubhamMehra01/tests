// import { Given, When, Then } from '@cucumber/cucumber';
// import { LoginPage } from '../pages/loginPage';
// import { DashboardPage } from '../pages/dashboardPage';
// import { expect } from '@playwright/test';
// let loginPage: LoginPage;
// let dashboardPage: DashboardPage;
// Given('I am on the login page', async function () { loginPage = new LoginPage(this.page); await loginPage.goto(); });
// When('I enter valid username and password', async function () { await loginPage.login('Admin','admin123'); });
// Then('I should see the dashboard', async function () { dashboardPage = new DashboardPage(this.page); await expect(dashboardPage.header).toBeVisible(); });

import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/loginPage';
import { CustomWorld } from '../support/world';

Given('I am on the login page', {timeout: 60000}, async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page!);
  await loginPage.goto();
});

When('I enter valid username and password', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page!);
  await loginPage.login('Admin', 'admin123');
});

Then('I should see the dashboard', async function (this: CustomWorld) {
  await this.page?.waitForSelector('h6:has-text("Dashboard")');

});

