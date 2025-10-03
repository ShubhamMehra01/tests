"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
exports.default = (0, test_1.defineConfig)({
    use: {
        baseURL: 'https://opensource-demo.orangehrmlive.com',
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    }
});
//# sourceMappingURL=playwright.config.js.map