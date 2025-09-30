import { When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { Page } from '@playwright/test';
let page: Page; 
let totalcount = null;

When('I navigate to buzz page', async function (this: CustomWorld) {
  await this.page?.click('a:has-text("Buzz")');
});

Then('I should see the list of posts', async function (this: CustomWorld) {
  //let page: Page;
const posts = this.page?.locator("//div[@class='oxd-grid-item oxd-grid-item--gutters']");
await this.page?.waitForLoadState('networkidle');

  const totalCount: number = await posts!.count();

  console.log(`Total posts found: ${totalCount}`);

  for (let i = 0; i < totalCount; i++) {
    const post = posts?.nth(i);

    // Author
    const author = (await post?.locator("p.oxd-text.oxd-text--p.orangehrm-buzz-post-body-text").first().textContent({ timeout: 20000 }))?.trim() || '';
    await this.page?.waitForLoadState('networkidle');

    // Timestamp / date
    const timestamp = (await post?.locator("p.oxd-text.oxd-text--p.orangehrm-buzz-post-time").textContent({ timeout: 20000 }))?.trim() || '';
    await this.page?.waitForLoadState('networkidle');
    // Content (actual post text)
    const content = (await post?.locator("div.orangehrm-buzz-post-body").textContent({ timeout: 20000 }))?.trim() || '';
    await this.page?.waitForLoadState('networkidle');
    console.log(`Post ${i + 1}:`);
    console.log(`Author   : ${author}`);
    console.log(`Date     : ${timestamp}`);
    console.log(`Content  : ${content}`);
    console.log('-----------------------------------');
  }
});

Then('I click on the first post', async function (this: CustomWorld) {

const totallikes = this.page?.locator('//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[3]/div[2]/div[1]/p[1]');
await this.page?.waitForLoadState('networkidle');
const totallikescount = await totallikes?.count();
console.log(totallikescount);

});