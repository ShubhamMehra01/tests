import { When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

When('I navigate to performance page', async function (this: CustomWorld) {
  await this.page?.click('a:has-text("Performance")');
});

Then('I should see performance dashboard', async function (this: CustomWorld) {
  await this.page?.waitForSelector('h6:has-text("Performance")')
});