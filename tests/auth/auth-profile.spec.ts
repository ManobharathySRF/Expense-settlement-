import { test } from '../fixtures/auth.fixture';
import { getTestCasesByModule } from '../utils/test-case-loader';
import { AuthProfilePage } from '../../pages/auth-profile.page';

const testCases = getTestCasesByModule('Auth & Profile');

test.describe('Auth & Profile', () => {
  for (const testCase of testCases) {
    test(`TC ${testCase.id} - ${testCase.testCaseDescription}`, async ({ authenticatedPage }) => {
      const modulePage = new AuthProfilePage(authenticatedPage);
      await modulePage.executeTestCase(testCase);
    });
  }
});
