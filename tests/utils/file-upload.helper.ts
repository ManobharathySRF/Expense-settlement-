import { expect, Locator, Page } from '@playwright/test';
import path from 'path';

export const uploadFiles = async (input: Locator, fileNames: string[]): Promise<void> => {
  const files = fileNames.map((fileName) => path.join(process.cwd(), 'tests', 'utils', 'fixtures', fileName));
  await input.setInputFiles(files);
};

export const assertUploadedFileCount = async (page: Page, count: number): Promise<void> => {
  await expect(page.locator('[data-testid="uploaded-count"]')).toHaveText(String(count));
};
