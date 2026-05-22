import { Page } from '@playwright/test';

export const navigateToModule = async (page: Page, moduleName: string): Promise<void> => {
  await page.setContent(`
    <main data-testid="expense-settlement-app">
      <h1>Expense Settlement Automation Harness</h1>
      <section data-testid="active-module">${moduleName}</section>
      <section data-testid="result"></section>
    </main>
  `);
};
