class PlaywrightHomePage {
  constructor(page) {
    this.page = page;
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    this.installationHeading = page.getByRole('heading', { name: 'Installation' });
  }

  async open() {
    await this.page.goto('/');
  }

  async openGettingStarted() {
    await this.getStartedLink.click();
  }
}

module.exports = { PlaywrightHomePage };