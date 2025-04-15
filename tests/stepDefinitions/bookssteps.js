const { Bookswebpage } =  require('../pages/bookswebpage');
const { defineParameterType, When, Given,Then, And } = require("@cucumber/cucumber")
const path = require("path") 
const playwright = require('@playwright/test');

When('I enter {string} and {string} and {string} and {string}' ,{timeout: 100 * 1000}, async function (firstname,lastname,username12,password12){
    this.Bookswebpage = new Bookswebpage(this.page); 
    await this.Bookswebpage.enterDetails(firstname,lastname,username12,password12);
})

Then('I click on Register',{timeout: 100 * 1000} , async function(){
    await this.Bookswebpage.Register()
}

)
Then('I should see user registered',{timeout: 100 * 1000} , async function(){
    await this.Bookswebpage.verifyHomePage()
} )