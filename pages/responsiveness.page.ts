import { Page } from '@playwright/test';
import { BaseModulePage } from './base-module.page';

export class ResponsivenessPage extends BaseModulePage {
  constructor(page: Page) {
    super(page, 'Responsiveness');
  }
}
