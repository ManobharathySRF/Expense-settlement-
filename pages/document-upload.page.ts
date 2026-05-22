import { Page } from '@playwright/test';
import { BaseModulePage } from './base-module.page';

export class DocumentUploadPage extends BaseModulePage {
  constructor(page: Page) {
    super(page, 'Document Upload');
  }
}
