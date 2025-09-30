import { When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

When('I navigate to My Info page', async function (this: CustomWorld) {
  await this.page?.click('a:has-text("My Info")');
});

Then('I should see personal details', async function (this: CustomWorld) {
  await this.page?.waitForSelector('h6:has-text("Personal Details")')
});