import { test } from '../fixtures/auth.fixture';
import { getTestCasesByModule } from '../utils/test-case-loader';
import { MiscellaneousEntryPage } from '../../pages/miscellaneous-entry.page';

const testCases = getTestCasesByModule('Miscellaneous (MSC) Entry');

test.describe('Miscellaneous (MSC) Entry', () => {
  for (const testCase of testCases) {
    test(`TC ${testCase.id} - ${testCase.testCaseDescription}`, async ({ authenticatedPage }) => {
      const modulePage = new MiscellaneousEntryPage(authenticatedPage);
      await modulePage.executeTestCase(testCase);
    });
  }
});
