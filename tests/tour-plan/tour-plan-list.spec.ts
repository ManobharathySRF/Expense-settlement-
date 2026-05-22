import { test } from '../fixtures/auth.fixture';
import { getTestCasesByModule } from '../utils/test-case-loader';
import { TourPlanListPage } from '../../pages/tour-plan-list.page';

const testCases = getTestCasesByModule('Tour Plan List');

test.describe('Tour Plan List', () => {
  for (const testCase of testCases) {
    test(`TC ${testCase.id} - ${testCase.testCaseDescription}`, async ({ authenticatedPage }) => {
      const modulePage = new TourPlanListPage(authenticatedPage);
      await modulePage.executeTestCase(testCase);
    });
  }
});
