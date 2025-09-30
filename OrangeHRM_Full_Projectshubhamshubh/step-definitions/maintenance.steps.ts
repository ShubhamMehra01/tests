import { When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

When('I navigate to maintenance page', async function (this: CustomWorld) {
  await this.page?.click('a:has-text("Maintenance")');
});

Then('I should see maintenance options', async function (this: CustomWorld) {
  //const maintenance = await this.page?.locator('h6:has-text("Maintenance")');
  //maintenance?.waitFor({state: 'visible', timeout: 60000});
  
});
