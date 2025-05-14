const { AcademyWebpage } =  require('../pages/academypage');
const { defineParameterType, When, Given,Then, And } = require("@cucumber/cucumber")
const path = require("path") 
const playwright = require('@playwright/test');

When('I open URL check login page opened',{timeout: 100 * 1000} , async function(){
    this.AcademyWebpage = new AcademyWebpage(this.page)
    await this.AcademyWebpage.verify()
})
Then ('click on Register',{timeout: 100 * 1000} , async function(){
    await this.AcademyWebpage.Register1()
})
Then ('Enter {string} and {string} and {string} and {string}',{timeout: 100 * 1000} , async function(testfname,testlname,testemail,testnum){
    await this.AcademyWebpage.fillRegister(testfname,testlname,testemail,testnum)
})
Then ('click on occupation',{timeout: 100 * 1000} , async function(){
    await this.AcademyWebpage.occupation1()

})
Then ('enter {string} and {string}',{timeout: 100 * 1000} , async function(Testpassword,Testpassword){
    await this.AcademyWebpage.pass1(Testpassword)
    await this.AcademyWebpage.confirmpassword(Testpassword)

})
Then ('click on checkbox and Register',{timeout: 100 * 1000} , async function(){
    await this.AcademyWebpage.check1()
})
Then ('Enter {string} and {string}',{timeout: 100 * 1000} , async function(testemail,Testpassword){
    await this.AcademyWebpage.loginpage(testemail,Testpassword)
})
Then ('Click on Login',{timeout: 100 * 1000} , async function(){
    await this.AcademyWebpage.loginpage1()
})
Then ('click on Add to cart and click on cart',{timeout: 100 * 1000} , async function(){
    await this.AcademyWebpage.addtocart()
})
Then ('click on checkout',{timeout: 100 * 1000} , async function(){
    await this.AcademyWebpage.checkout1()
})
Then ('enter {string} and {string} and {string}',{timeout: 100 * 1000} , async function(I,n,d){
    await this.AcademyWebpage.filladdress(I,n,d)
})
Then ('select from dropdown and Click on place order',{timeout: 100 * 1000} , async function(){
    await this.AcademyWebpage.selectaddressandplace()
})


