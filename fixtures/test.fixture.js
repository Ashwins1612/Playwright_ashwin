const { test: base, expect } = require('@playwright/test');
const { PlaywrightHomePage } = require('../pages/playwright-home.page');

const test = base.extend({
  homePage: async ({ page }, use) => {
    await use(new PlaywrightHomePage(page));
  },
});

module.exports = { test, expect };