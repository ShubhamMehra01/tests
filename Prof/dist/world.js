"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomWorld = void 0;
const cucumber_1 = require("@cucumber/cucumber");
const playwright_1 = require("playwright");
class CustomWorld extends cucumber_1.World {
    browser;
    context;
    page;
    constructor(options) {
        super(options);
    }
    async launchBrowser() {
        this.browser = await playwright_1.chromium.launch({
            headless: process.env.HEADLESS !== 'false', // HEADLESS=false → headed
        });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }
    async closeBrowser() {
        if (this.browser) {
            await this.browser.close();
        }
    }
}
exports.CustomWorld = CustomWorld;
// Set Custom World for Cucumber
(0, cucumber_1.setWorldConstructor)(CustomWorld);
//# sourceMappingURL=world.js.map