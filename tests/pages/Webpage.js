const {test, expect} = require('@playwright/test');
class WebPage {
  constructor(page) {
    this.page = page;
    this.Login = page.locator("button[type='submit']");      // ✅ Use correct selectors
    this.name = page.locator("input[name='username']");
    this.password = page.locator("input[name='password']");
    this.home = page.locator("//p[text()='Time at Work']");
  }

  async openLoginPage() {
    await this.page.goto('/');
  }

  async enterCredentials(username, password) {
    await this.name.fill(username);
    await this.password.fill(password);
  }

  async clickLogin() {
    await this.Login.click();
  }

  async verifyHomePage() {
    await this.home.waitFor();
  }
}

module.exports = { WebPage };