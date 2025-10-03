import { Page } from '@playwright/test'; export class PerformancePage { constructor(public page: Page) {} async goto() { await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/performance/viewPerformanceDashboard'); 

    await this.page.waitForLoadState('networkidle');
} }