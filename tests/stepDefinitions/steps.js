const { WebPage } =  require('../pages/Webpage');
const { defineParameterType, When, Given,Then, And } = require("@cucumber/cucumber")
const path = require("path") 
const playwright = require('@playwright/test');

// Given('I navigate to the login page', async () => {
//     console.log("this.page is:", this.page); // ✅ Debug log
//     this.webPage = new WebPage(this.page); // at
//     await this.WebPage.openLoginPage();
// });

When('I enter {string} and {string}', {timeout: 100 * 1000}, async function (username, password) {
  this.webPage = new WebPage(this.page); // at
  await this.webPage.enterCredentials(username, password);
});

Then('I click on the login button', async function () {
  await this.webPage.clickLogin();
});

Then('I should see the homepage', {timeout: 100 * 1000}, async function () {
  await this.webPage.verifyHomePage();
});