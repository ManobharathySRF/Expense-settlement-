import { Page } from '@playwright/test';
import { BaseModulePage } from './base-module.page';

export class PerformancePage extends BaseModulePage {
  constructor(page: Page) {
    super(page, 'Performance');
  }
}
