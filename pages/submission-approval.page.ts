import { Page } from '@playwright/test';
import { BaseModulePage } from './base-module.page';

export class SubmissionApprovalPage extends BaseModulePage {
  constructor(page: Page) {
    super(page, 'Submission & Approval');
  }
}
