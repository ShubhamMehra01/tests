import { BeforeAll, AfterAll, Before, After } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { CustomWorld } from './world';
import { setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout (60*1000);

BeforeAll(async function () {
  // Runs once before all tests
});

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: false }); // 👈 set true for CI
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (this: CustomWorld) {
  await this.page?.close();
  await this.context?.close();
  await this.browser?.close();
});

AfterAll(async function () {

});