import { When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

When('I navigate to buzz page', async function (this: CustomWorld) {
  await this.page?.click('a:has-text("Buzz")');
});

Then('I should see buzz feed', async function (this: CustomWorld) {
  await this.page?.waitForSelector('h6:has-text("Buzz")')
});