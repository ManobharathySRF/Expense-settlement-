import { Page } from '@playwright/test';
import { BaseModulePage } from './base-module.page';

export class CabEntryPage extends BaseModulePage {
  constructor(page: Page) {
    super(page, 'Cab (CAB) Entry');
  }
}
