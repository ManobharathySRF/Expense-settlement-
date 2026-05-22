import { Page } from '@playwright/test';

export const login = async (page: Page): Promise<void> => {
  const employeeId = process.env.E2E_EMPLOYEE_ID ?? 'EMP001';
  const authToken = process.env.E2E_AUTH_TOKEN ?? 'mock-token';

  await page.context().addInitScript(
    ([id, token]) => {
      window.localStorage.setItem('employeeId', id);
      window.localStorage.setItem('authToken', token);
    },
    [employeeId, authToken]
  );
};
