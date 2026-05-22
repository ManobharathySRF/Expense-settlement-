import { test } from '../fixtures/auth.fixture';
import { getTestCasesByModule } from '../utils/test-case-loader';
import { EditDeletePage } from '../..//pages/edit-delete.page';

const testCases = getTestCasesByModule('Edit/Delete Entry');

test.describe('Edit/Delete Entry', () => {
  for (const testCase of testCases) {
    test(`TC ${testCase.id} - ${testCase.testCaseDescription}`, async ({ authenticatedPage }) => {
      const modulePage = new EditDeletePage(authenticatedPage);
      await modulePage.executeTestCase(testCase);
    });
  }
});
