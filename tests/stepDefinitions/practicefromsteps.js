const { Registration } =  require('../pages/Registration');
const { defineParameterType, When, Given,Then, And } = require("@cucumber/cucumber")
const path = require("path") 
const playwright = require('@playwright/test');

When  ('I enter {string} and {string} and {string}',{timeout: 100 * 1000}, async function (sfn1,sln1,testemail){
    this.Registration = new Registration(this.page);
    await this.Registration.filldetails(sfn1,sln1,testemail)
})

Then ('I select Gender',{timeout: 100 * 1000} , async function(){
    await this.Registration.Gender()
})
Then ('I enter {string} and {string} and {string}',{timeout: 100 * 1000}, async function (num,dob,subjects){
    await this.Registration.mobilenum(num,dob,subjects)
})
Then ('I click hobbies',{timeout: 100 * 1000}, async function (){
    await this.Registration.hobbies()

})
Then ('I upload picture',{timeout:100*1000},async function(){
    await this.Registartion.uploadfile()
})
Then ('I enter {string}',{timeout: 100*1000}, async function(testaddress){
    await this.Registration.address(testaddress)
})
Then ('I select state and dropdown and city',{timeout: 100*1000},async function(){
    await this.Registration.stateandsubmit()
})
