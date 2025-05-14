const { cartWeb } =  require('../pages/cartpage');
const { defineParameterType, When, Given,Then, And } = require("@cucumber/cucumber")
// const path = require("path") 
// const playwright = require('@playwright/test');
const user = require('../utils/userData')

When('I opened URL check login page opened',{timeout: 100 * 1000} , async function(){
    this.cartWeb = new cartWeb(this.page)
    await this.cartWeb.verify()
})
Then ('I clicked on Register page',{timeout: 100 * 1000} , async function(){
    await this.cartWeb.Register1()
})
Then ('I Enter Details',{timeout: 100 * 1000} , async function(){
    await this.cartWeb.fillRegister12(user.fname,user.lname,user.email,'9908767654')
    console.log(user.mobile)
})
Then ('I clicked on occupation',{timeout: 100 * 1000} , async function(){
        await this.cartWeb.occupation1()
    
})
Then ('I entered password',{timeout: 100 * 1000} , async function(){
        await this.cartWeb.pass1(user.pass)
        await this.cartWeb.confirmpassword(user.pass)
    
})
Then ('I clicked on checkbox and Register',{timeout: 100 * 1000} , async function(){
    await this.cartWeb.check1()
})
Then ('Enter credentials',{timeout: 100 * 1000} , async function(){
    await this.cartWeb.loginpage(user.email,user.pass)
})
Then ('I Clicked on Login',{timeout: 100 * 1000} , async function(){
    await this.cartWeb.loginpage1()
})

////div[@class='card-body']//b//following::button/*[@class="fa fa-shopping-cart"]