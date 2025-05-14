const { Registration } =  require('../pages/practiceformpage');
const { defineParameterType, When, Given,Then, And } = require("@cucumber/cucumber")
const { excelread } =  require('../pages/excelReader');
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
Then ('I upload file',{timeout:100*1000},async function(){
    // this.Registration = new Registration(this.page);
    await this.Registration.uploadfile1('testdata/XPATH.pdf')
})
Then ('I enter {string}',{timeout: 100*1000}, async function(currentaddress){
    await this.Registration.address(currentaddress)
})
Then ('I select state and dropdown and submit',{timeout: 100*1000},async function(){
    await this.Registration.stateandsubmit()
})

When ('I login with credentials from excel file {string}',{timeout: 100*1000},async function(filepath){
    console.log("print me")
    this.excelread = new excelread(this.page);
    const data = await this.excelread.excelreaddata(filepath)
    this.exceldata = data
    console.log(data)
})
