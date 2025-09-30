import { Page } from '@playwright/test'; export class MaintenancePage { constructor(public page: Page) {} async goto() { await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/maintenance'); 
 await this.page.waitForLoadState('networkidle');   
} }