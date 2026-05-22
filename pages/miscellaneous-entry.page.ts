import { Page } from '@playwright/test';
import { BaseModulePage } from './base-module.page';

export class MiscellaneousEntryPage extends BaseModulePage {
  constructor(page: Page) {
    super(page, 'Miscellaneous (MSC) Entry');
  }
}
