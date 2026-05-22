import { test } from '../fixtures/auth.fixture';
import { getTestCasesByModule } from '../utils/test-case-loader';
import { SettlementFormPage } from '../../pages/settlement-form.page';

const testCases = getTestCasesByModule('Settlement Form');

test.describe('Settlement Form', () => {
  for (const testCase of testCases) {
    test(`TC ${testCase.id} - ${testCase.testCaseDescription}`, async ({ authenticatedPage }) => {
      const modulePage = new SettlementFormPage(authenticatedPage);
      await modulePage.executeTestCase(testCase);
    });
  }
});
