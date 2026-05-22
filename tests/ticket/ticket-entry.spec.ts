import { test } from '../fixtures/auth.fixture';
import { getTestCasesByModule } from '../utils/test-case-loader';
import { TicketEntryPage } from '../..//pages/ticket-entry.page';

const testCases = getTestCasesByModule('Ticket (TKT) Entry');

test.describe('Ticket (TKT) Entry', () => {
  for (const testCase of testCases) {
    test(`TC ${testCase.id} - ${testCase.testCaseDescription}`, async ({ authenticatedPage }) => {
      const modulePage = new TicketEntryPage(authenticatedPage);
      await modulePage.executeTestCase(testCase);
    });
  }
});
