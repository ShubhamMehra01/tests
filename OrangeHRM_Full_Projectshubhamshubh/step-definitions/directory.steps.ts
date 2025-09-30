import { When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

When('I navigate to directory page', async function (this: CustomWorld) {
  await this.page?.click('a:has-text("Directory")');
});

Then('I should see employee directory', async function (this: CustomWorld) {
  await this.page?.waitForSelector('h6:has-text("Directory")');
});