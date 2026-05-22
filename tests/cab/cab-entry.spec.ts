import { test } from '../fixtures/auth.fixture';
import { getTestCasesByModule } from '../utils/test-case-loader';
import { CabEntryPage } from '../../pages/cab-entry.page';

const testCases = getTestCasesByModule('Cab (CAB) Entry');

test.describe('Cab (CAB) Entry', () => {
  for (const testCase of testCases) {
    test(`TC ${testCase.id} - ${testCase.testCaseDescription}`, async ({ authenticatedPage }) => {
      const modulePage = new CabEntryPage(authenticatedPage);
      await modulePage.executeTestCase(testCase);
    });
  }
});
