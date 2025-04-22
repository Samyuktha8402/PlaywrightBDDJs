const { Registration } =  require('../pages/practiceformpage');
const { defineParameterType, When, Given,Then, And } = require("@cucumber/cucumber")
const path = require("path") 
const playwright = require('@playwright/test');

When  ('I enter {string} and {string} and {string}',{timeout: 100 * 1000}, async function (studentfirstname,studentlastname,studentemail){
    this.Registration = new Registration(this.page);
    await this.Registration.filldetails(studentfirstname,studentlastname,studentemail)
})

Then ('I select Gender',{timeout: 100 * 1000} , async function(){
    await this.Registration.Gender()
})
Then ('I entered {string} and {string}',{timeout: 100 * 1000}, async function (studentmobile,studentDOB){
    await this.Registration.mobilenum(studentmobile,studentDOB)
})
// Then ('I click on language and enter {string}',{timeout: 100 * 1000}, async function (studentsubjects){
//     await this.Registration.subject(studentsubjects)
//})
Then ('I click hobbies',{timeout: 100 * 1000}, async function (){
    await this.Registration.hobbies()

})
Then ('I upload file {string}',{timeout:100*1000},async function(uploadfile){
    await this.Registartion.upload(uploadfile)
})
Then ('I enter {string}',{timeout: 100*1000}, async function(currentaddress){
    await this.Registration.address(currentaddress)
})
Then ('I select state and dropdown and submit',{timeout: 100*1000},async function(){
    await this.Registration.stateandsubmit()
})
