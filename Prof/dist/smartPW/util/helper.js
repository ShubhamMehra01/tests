"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = login;
async function login(page, username, password) {
    await page.goto('/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill(username);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: 'Login' });
    await page.getByRole('button', { name: 'Login' }).click();
}
//# sourceMappingURL=helper.js.map