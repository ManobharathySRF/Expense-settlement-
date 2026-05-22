import { test } from '../fixtures/auth.fixture';
import { getTestCasesByModule } from '../utils/test-case-loader';
import { AccommodationEntryPage } from '../../pages/accommodation-entry.page';

const testCases = getTestCasesByModule('Accommodation (STY) Entry');

test.describe('Accommodation (STY) Entry', () => {
  for (const testCase of testCases) {
    test(`TC ${testCase.id} - ${testCase.testCaseDescription}`, async ({ authenticatedPage }) => {
      const modulePage = new AccommodationEntryPage(authenticatedPage);
      await modulePage.executeTestCase(testCase);
    });
  }
});
