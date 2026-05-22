import { test } from '../fixtures/auth.fixture';
import { getTestCasesByModule } from '../utils/test-case-loader';
import { AccessibilityPage } from '../../pages/accessibility.page';

const testCases = getTestCasesByModule('Accessibility');

test.describe('Accessibility', () => {
  for (const testCase of testCases) {
    test(`TC ${testCase.id} - ${testCase.testCaseDescription}`, async ({ authenticatedPage }) => {
      const modulePage = new AccessibilityPage(authenticatedPage);
      await modulePage.executeTestCase(testCase);
    });
  }
});
