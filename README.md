# Expense Settlement Playwright Framework

This repository contains a Playwright + TypeScript automation framework that maps directly to all **133** test cases listed in `Expense_Settlement_Test_Cases.csv`.

## Coverage

Tests are organized by module:

- `tests/auth/`
- `tests/tour-plan/`
- `tests/ticket/`
- `tests/accommodation/`
- `tests/cab/`
- `tests/miscellaneous/`
- `tests/document-upload/`
- `tests/da-calculation/`
- `tests/settlement-form/`
- `tests/submission/`
- `tests/security/`
- `tests/performance/`
- `tests/accessibility/`
- `tests/responsiveness/`
- `tests/edit-delete/`
- `tests/business-rules/`

## Framework Design

- **Playwright Test runner** with TypeScript
- **Page Object Model (POM)** classes in `pages/`
- **Auth fixture** in `tests/fixtures/auth.fixture.ts`
- **Helper utilities** in `tests/utils/`
- **CSV-mapped test data** in `tests/utils/test-cases.data.ts`

## Setup

```bash
npm install
npx playwright install
```

## Run tests

```bash
npm test
```

Run a specific module:

```bash
npx playwright test tests/security
```

## Configuration

Set environment variables as needed:

- `BASE_URL` (default placeholder: `https://example.com`)
- `E2E_EMPLOYEE_ID`
- `E2E_AUTH_TOKEN`

Configuration is defined in `playwright.config.ts` with Chromium/Firefox/WebKit projects and CI retries enabled.
