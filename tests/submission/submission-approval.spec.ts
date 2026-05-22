import { test } from '../fixtures/auth.fixture';
import { getTestCasesByModule } from '../utils/test-case-loader';
import { SubmissionApprovalPage } from '../..//pages/submission-approval.page';

const testCases = getTestCasesByModule('Submission & Approval');

test.describe('Submission & Approval', () => {
  for (const testCase of testCases) {
    test(`TC ${testCase.id} - ${testCase.testCaseDescription}`, async ({ authenticatedPage }) => {
      const modulePage = new SubmissionApprovalPage(authenticatedPage);
      await modulePage.executeTestCase(testCase);
    });
  }
});
