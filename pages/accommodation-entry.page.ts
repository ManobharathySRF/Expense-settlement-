import { Page } from '@playwright/test';
import { BaseModulePage } from './base-module.page';

export class AccommodationEntryPage extends BaseModulePage {
  constructor(page: Page) {
    super(page, 'Accommodation (STY) Entry');
  }
}
