import { When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

When('I navigate to recruitment page', async function (this: CustomWorld) {
  await this.page?.click('a:has-text("Recruitment")');
});

Then('I should see the candidate list', async function (this: CustomWorld) {
 // const candidate = await this.page?.locator('h6:has-text("Candidates")');
  //await candidate?.waitFor({state: 'visible', timeout: 60000});
  
});