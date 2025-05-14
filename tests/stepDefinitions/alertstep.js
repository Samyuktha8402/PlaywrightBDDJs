const { alertpageweb } =  require('../pages/alertpage');
const { defineParameterType, When, Given,Then, And } = require("@cucumber/cucumber")
const path = require("path") 
const playwright = require('@playwright/test');

When('I click on alert',{timeout: 100 * 1000} , async function(){
    this.alertpageweb = new alertpageweb(this.page)
    await this.alertpageweb.clickalert()
})
Then ('accept it',{timeout: 100 * 1000} , async function(){
    await this.alertpageweb.acceptalert()
} )

When ('I select on Frame',{timeout: 100 * 1000} , async function(){
    this.alertpageweb = new alertpageweb(this.page)

})
Then ('I click on locator inside the frame',{timeout: 100 * 1000} , async function(){
    this.alertpageweb = new alertpageweb(this.page)
    this.alertpageweb.selectframe()

})