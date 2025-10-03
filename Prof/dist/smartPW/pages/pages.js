"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
class LoginPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async goto() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await this.page.waitForLoadState('domcontentloaded');
    }
    async login(username, password) {
        await this.page.locator("input[placeholder='Username']");
        await this.page.locator("input[placeholder='Password']");
        await this.page.locator('button[type="submit"]').click();
        await this.page.waitForLoadState('networkidle');
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=pages.js.map