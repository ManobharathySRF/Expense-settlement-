import { Page } from '@playwright/test';
import { BaseModulePage } from './base-module.page';

export class TicketEntryPage extends BaseModulePage {
  constructor(page: Page) {
    super(page, 'Ticket (TKT) Entry');
  }
}
