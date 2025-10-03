import { When, Then, AfterAll } from '@cucumber/cucumber';
import { Browser, expect, Page } from '@playwright/test';
import { CustomWorld } from '../support/world';

// browser: Browser;
let page: Page;
When('I navigate to directory page', async function (this: CustomWorld) {
  await this.page?.click('a:has-text("Directory")');
  await this.page?.click('a:has-text("Directory")');
  // Click Search to load results
  await this.page?.click('button:has-text("Search")');
  // Wait for at least one employee card
  await this.page?.waitForSelector('div.orangehrm-directory-card>>nth=0', {timeout: 20000});
});

Then('I should see employee directory', async function (this: CustomWorld) {  
const entries = this.page!.locator('div.orangehrm-directory-card');
await this.page!.waitForLoadState('networkidle');
  const count = await entries.count();
  console.log(count);
});

Then ('I fetch all the employee details', async function(this: CustomWorld) {
const entries = this.page!.locator('div.orangehrm-directory-card');
await this.page!.waitForLoadState('networkidle');
  const count = await entries.count();

  for (let i = 0; i < count; i++) {
    const entry = entries.nth(i);

    // You need to inspect the HTML to see correct selectors
    const name = (await entry.locator('h5.orangehrm-directory-card-heading').textContent())?.trim() || '';
    await this.page?.waitForLoadState('networkidle');
    const jobTitle = (await entry.locator('p.orangehrm-directory-card-paragraph').textContent())?.trim() || '';
    await this.page?.waitForLoadState('networkidle');
    const location = (await entry.locator('div.orangehrm-directory-card-text').textContent())?.trim() || '';
    await this.page?.waitForLoadState('networkidle');

    console.log(`Employee ${i + 1}:`);
    console.log(`Name     : ${name}`);
    console.log(`Job Title: ${jobTitle}`);
    console.log(`Location : ${location}`);
    console.log('........................................................................');

    }});

    Then('I click on first employee', async function (this: CustomWorld) {
  const entries = this.page!.locator('div.orangehrm-directory-card');
  const count = await entries.count();
  if (count > 0) {
    await entries.nth(0).click();
    console.log('Clicked on first employee record');
  } else {
    throw new Error('No directory entries found');
      
    }
    AfterAll(async function (this: CustomWorld) {
    let browser: Browser;
  
    }
  );

});