import { Page } from '@playwright/test';
import { BaseModulePage } from './base-module.page';

export class AccessibilityPage extends BaseModulePage {
  constructor(page: Page) {
    super(page, 'Accessibility');
  }
}
