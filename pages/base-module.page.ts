import { expect, Page } from '@playwright/test';
import { ExpenseSettlementTestCase } from '../tests/utils/test-case';
import { navigateToModule } from '../tests/utils/navigation.helper';

export class BaseModulePage {
  constructor(protected readonly page: Page, private readonly moduleName: string) {}

  async executeTestCase(testCase: ExpenseSettlementTestCase): Promise<void> {
    await navigateToModule(this.page, this.moduleName);
    await this.page.locator('[data-testid="result"]').textContent();
    await this.page.evaluate((payload) => {
      const result = document.querySelector('[data-testid="result"]');
      if (!result) {
        throw new Error('Result container not found');
      }

      result.innerHTML = `
        <article data-testid="test-case-card">
          <h2>${payload.title}</h2>
          <p data-testid="scenario">${payload.scenario}</p>
          <p data-testid="expected">${payload.expected}</p>
        </article>
      `;
    }, {
      title: `TC ${testCase.id}: ${testCase.testCaseDescription}`,
      scenario: testCase.testScenario,
      expected: testCase.expectedResult
    });

    await expect(this.page.locator('[data-testid="active-module"]')).toHaveText(this.moduleName);
    await expect(this.page.locator('[data-testid="scenario"]')).toContainText(testCase.testScenario);
    await expect(this.page.locator('[data-testid="expected"]')).toContainText(testCase.expectedResult);
  }
}
