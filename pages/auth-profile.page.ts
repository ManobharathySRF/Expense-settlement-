import { Page } from '@playwright/test';
import { BaseModulePage } from './base-module.page';

export class AuthProfilePage extends BaseModulePage {
  constructor(page: Page) {
    super(page, 'Auth & Profile');
  }
}
