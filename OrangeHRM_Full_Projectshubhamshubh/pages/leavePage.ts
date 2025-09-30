// import { Page, Locator } from '@playwright/test'; export class LeavePage { readonly page: Page; readonly applyButton: Locator; readonly successMessage: Locator;open: any;
//  constructor(page: Page) { this.page = page; this.applyButton = page.locator('button:has-text("Apply")'); this.successMessage = page.locator('div:has-text("Successfully Submitted")'); } async goto() { await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList'); } async applyLeave(fromDate: string, toDate: string) { await this.applyButton.click(); } }


import { Page } from 'playwright';

export class LeavePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    // Navigate to Leave module
    await this.page.click('a:has-text("Leave")');
    await this.page.waitForSelector('h6:has-text("Leave")');
  }

  async applyLeave(fromDate: string, toDate: string) {
    const applybutton = await this.page.locator('button:has-text("Apply")');
    await applybutton.waitFor({state: 'visible' , timeout: 60000});
    await applybutton.click();
    await this.page.fill('input[placeholder="yyyy-mm-dd"]', fromDate);
    await this.page.waitForLoadState('networkidle');
    await this.page.keyboard.press('Tab');
    await this.page.fill('input[placeholder="yyyy-mm-dd"] >> nth=1', toDate);
    await this.page.waitForLoadState('networkidle');
    await this.page.click('button:has-text("Submit")');

  }}