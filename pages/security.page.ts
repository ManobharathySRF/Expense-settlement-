import { Page } from '@playwright/test';
import { BaseModulePage } from './base-module.page';

export class SecurityPage extends BaseModulePage {
  constructor(page: Page) {
    super(page, 'Security');
  }
}
