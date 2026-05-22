import { test } from '../fixtures/auth.fixture';
import { getTestCasesByModule } from '../utils/test-case-loader';
import { PerformancePage } from '../..//pages/performance.page';

const testCases = getTestCasesByModule('Performance');

test.describe('Performance', () => {
  for (const testCase of testCases) {
    test(`TC ${testCase.id} - ${testCase.testCaseDescription}`, async ({ authenticatedPage }) => {
      const modulePage = new PerformancePage(authenticatedPage);
      await modulePage.executeTestCase(testCase);
    });
  }
});
