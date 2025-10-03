import { Page } from '@playwright/test';

export class LoginPage {
  constructor(public page: Page) { }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await this.page.waitForLoadState('domcontentloaded');

  }
  async login(username: "Admin", password: "admin123") {
    await this.page.locator("input[placeholder='Username']");

    await this.page.locator("input[placeholder='Password']");
    await this.page.locator('button[type="submit"]').click();
    await this.page.waitForLoadState('networkidle');
  }
}