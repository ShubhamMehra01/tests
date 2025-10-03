"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const test_1 = require("@playwright/test");
(0, cucumber_1.Given)('I open the login page', async function () {
    await this.launchBrowser();
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});
(0, cucumber_1.Then)('I see the login form', async function () {
    const title = await this.page.title();
    (0, test_1.expect)(title).toContain('OrangeHRM');
    await this.closeBrowser();
});
//# sourceMappingURL=loginsteps.js.map