import { test } from '../fixtures/auth.fixture';
import { getTestCasesByModule } from '../utils/test-case-loader';
import { ResponsivenessPage } from '../../pages/responsiveness.page';

const testCases = getTestCasesByModule('Responsiveness');

test.describe('Responsiveness', () => {
  for (const testCase of testCases) {
    test(`TC ${testCase.id} - ${testCase.testCaseDescription}`, async ({ authenticatedPage }) => {
      const modulePage = new ResponsivenessPage(authenticatedPage);
      await modulePage.executeTestCase(testCase);
    });
  }
});
