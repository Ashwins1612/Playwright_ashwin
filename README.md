# Playwright POM Framework

This project uses Playwright Test with page objects, a shared test fixture, and Allure reporting.

## Project layout

- `pages/` contains page objects and their locators.
- `fixtures/` provides reusable page objects to tests.
- `tests/` contains test specs.

## Run tests

Install dependencies and browser binaries:

```bash
npm install
npx playwright install
```

Run the full configured browser matrix, or only Chromium:

```bash
npm test
npm run test:chromium
```

The default base URL is `https://playwright.dev`. Override it for your application:

```powershell
$env:BASE_URL="http://localhost:3000"; npm run test:chromium
```

## Allure report

Test results are written to `allure-results/`. Generate and open the HTML report:

```bash
npm run allure:generate
npm run allure:open
```

The generated `allure-results/` and `allure-report/` directories are ignored by Git.