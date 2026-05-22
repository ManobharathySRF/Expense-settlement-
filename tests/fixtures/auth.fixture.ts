import { test as base, expect, Page } from '@playwright/test';
import { login } from '../utils/login.helper';
import { navigateToModule } from '../utils/navigation.helper';

type AppFixtures = {
  authenticatedPage: Page;
};

export const test = base.extend<AppFixtures>({
  authenticatedPage: async ({ page }, use) => {
    await login(page);
    await navigateToModule(page, 'Auth & Profile');
    await use(page);
  }
});

export { expect };
