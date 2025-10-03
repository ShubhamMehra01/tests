import { setWorldConstructor, World } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "playwright";

export class CustomWorld extends World {
  browser: Browser | null = null;
  context: BrowserContext | null = null;
  page: Page | null = null;

  async openBrowser(headless: boolean) {
    this.browser = await chromium.launch({ headless });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async closeBrowser() {
    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
  }
}
setWorldConstructor(CustomWorld);