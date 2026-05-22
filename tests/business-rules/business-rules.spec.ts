import { test } from '../fixtures/auth.fixture';
import { getTestCasesByModule } from '../utils/test-case-loader';
import { BusinessRulesPage } from '../..//pages/business-rules.page';

const testCases = getTestCasesByModule('Business Rules');

test.describe('Business Rules', () => {
  for (const testCase of testCases) {
    test(`TC ${testCase.id} - ${testCase.testCaseDescription}`, async ({ authenticatedPage }) => {
      const modulePage = new BusinessRulesPage(authenticatedPage);
      await modulePage.executeTestCase(testCase);
    });
  }
});
