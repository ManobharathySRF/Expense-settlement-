import { Page } from '@playwright/test';
import { BaseModulePage } from './base-module.page';

export class EditDeletePage extends BaseModulePage {
  constructor(page: Page) {
    super(page, 'Edit/Delete Entry');
  }
}
