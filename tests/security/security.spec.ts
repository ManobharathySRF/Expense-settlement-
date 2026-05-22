import { test } from '../fixtures/auth.fixture';
import { getTestCasesByModule } from '../utils/test-case-loader';
import { SecurityPage } from '../../pages/security.page';

const testCases = getTestCasesByModule('Security');

test.describe('Security', () => {
  for (const testCase of testCases) {
    test(`TC ${testCase.id} - ${testCase.testCaseDescription}`, async ({ authenticatedPage }) => {
      const modulePage = new SecurityPage(authenticatedPage);
      await modulePage.executeTestCase(testCase);
    });
  }
});
