import { Page } from '@playwright/test';
import { BaseModulePage } from './base-module.page';

export class BusinessRulesPage extends BaseModulePage {
  constructor(page: Page) {
    super(page, 'Business Rules');
  }
}
