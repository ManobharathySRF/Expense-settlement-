import { Page } from '@playwright/test';
import { BaseModulePage } from './base-module.page';

export class SettlementFormPage extends BaseModulePage {
  constructor(page: Page) {
    super(page, 'Settlement Form');
  }
}
