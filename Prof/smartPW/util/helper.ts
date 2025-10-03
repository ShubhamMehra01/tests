import { Page } from '@playwright/test';

export async function login(page: Page, username: string, password: string) {
  await page.goto('/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' })
  await page.getByRole('button', { name: 'Login' }).click();
}