import { Page } from '@playwright/test'; export class RecruitmentPage { constructor(public page: Page) {} async goto() { await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates'); 
    await this.page.waitForLoadState('networkidle');
} }