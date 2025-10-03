import { Page } from '@playwright/test'; export class BuzzPage { constructor(public page: Page) {} async goto() { await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz'); await this.page.waitForLoadState('networkidle');

  //await page.waitForSelector('div.buzz-post');
  // const posts = await this.page.$$('div.buzz-post');
  // console.log(`Found ${posts.length} posts.`);
  // if (posts.length > 0) {
  //   await posts[0].click();
  //   console.log('Clicked on the first post.');
  // }
  // await this.page.waitForTimeout(5000);
  // await this.page.close();
} 
    }