import { Page } from '@playwright/test'; export class TimePage { constructor(public page: Page) {} async goto() { await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet'); 
    await this.page.waitForLoadState('networkidle');
} }