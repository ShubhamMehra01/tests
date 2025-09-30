import { Page } from 'playwright';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/');
    await this.page.waitForSelector('input[name="username"]', { timeout: 20000})  
  }


  async login(username: string, password: string) {
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button[type="submit"]');
    await this.page.waitForSelector('h6:has-text("Dashboard")', {timeout: 20000});

  }
}