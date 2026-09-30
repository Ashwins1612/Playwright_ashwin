// @ts-check
const { test, expect } = require('../fixtures/test.fixture');

test.describe('Playwright documentation', () => {
  test('has the expected title', async ({ homePage, page }) => {
    await homePage.open();

    await expect(page).toHaveTitle(/Playwright/);
  });

  test('opens the getting started guide', async ({ homePage }) => {
    await homePage.open();
    await homePage.openGettingStarted();

    await expect(homePage.installationHeading).toBeVisible();
  });
});
//