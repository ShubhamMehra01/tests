import { When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

When('I navigate to time page', async function (this: CustomWorld) {
  await this.page?.click('a:has-text("Time")');
});

Then('I should see the timesheet', async function (this: CustomWorld) {
  await this.page?.waitForSelector('h6:has-text("Timesheets")')
});