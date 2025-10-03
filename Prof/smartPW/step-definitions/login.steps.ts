import { Given, When, Then, Before, After } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../world.js"; // <-- IMPORTANT: .js extension

Before(async function (this: CustomWorld) {
  await this.openBrowser(false); // false = headed
});

After(async function (this: CustomWorld) {
  await this.closeBrowser();
});

Given("I open the login page", async function (this: CustomWorld) {
  await this.page!.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});

When("I enter valid credentials", async function (this: CustomWorld) {
  await this.page!.fill('input[name="username"]', "Admin");
  await this.page!.fill('input[name="password"]', "admin123");
  await this.page!.click('button[type="submit"]');
});

Then("I redirected to dashboard page", async function (this: CustomWorld) {
  await this.page!.waitForURL("**/dashboard");
  expect(this.page!.url()).toContain("/dashboard");
});