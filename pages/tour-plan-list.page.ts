import { Page } from '@playwright/test';
import { BaseModulePage } from './base-module.page';

export class TourPlanListPage extends BaseModulePage {
  constructor(page: Page) {
    super(page, 'Tour Plan List');
  }
}
