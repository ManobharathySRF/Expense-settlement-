import { test } from '../fixtures/auth.fixture';
import { getTestCasesByModule } from '../utils/test-case-loader';
import { DocumentUploadPage } from '../../pages/document-upload.page';

const testCases = getTestCasesByModule('Document Upload');

test.describe('Document Upload', () => {
  for (const testCase of testCases) {
    test(`TC ${testCase.id} - ${testCase.testCaseDescription}`, async ({ authenticatedPage }) => {
      const modulePage = new DocumentUploadPage(authenticatedPage);
      await modulePage.executeTestCase(testCase);
    });
  }
});
