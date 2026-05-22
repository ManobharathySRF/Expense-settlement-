import { test } from '../fixtures/auth.fixture';
import { getTestCasesByModule } from '../utils/test-case-loader';
import { DaCalculationPage } from '../..//pages/da-calculation.page';

const testCases = getTestCasesByModule('DA Calculation');

test.describe('DA Calculation', () => {
  for (const testCase of testCases) {
    test(`TC ${testCase.id} - ${testCase.testCaseDescription}`, async ({ authenticatedPage }) => {
      const modulePage = new DaCalculationPage(authenticatedPage);
      await modulePage.executeTestCase(testCase);
    });
  }
});
