const { Bookswebpage } =  require('../pages/bookswebpage');
const { defineParameterType, When, Given,Then, And } = require("@cucumber/cucumber")
const path = require("path") 
const playwright = require('@playwright/test');

When('I enter the {string} {string} {string}' ,{timeout: 100 * 1000}, async function (firstname1,lastname1,email12){
    this.Bookswebpage = new Bookswebpage(this.page); 
    await this.Bookswebpage.enterDetails1(firstname1,lastname1,email12);
})

Then('I enter {string} {string} {string}',{timeout: 100 * 1000} , async function(Gender1,mobile,dob){
    await this.Bookswebpage.enterDetails2(Gender1,mobile,dob);
})
Then('enter {string}', {timeout: 100 * 1000} , async function(subjects){
    await this.Bookswebpage.enterDetails3(subjects);
}
)
Then('click hobbies', {timeout: 100 * 1000} , async function(){
    await this.Bookswebpage.enterDetails();
}
)
Then('I upload the picture',{timeout: 100 * 1000} , async function(){
    await this.Bookswebpage.pictureupload();
}

)
Then('I enter the {string}',{timeout: 100 * 1000} , async function(curraddress){
    await this.Bookswebpage.enterDetails4(curraddress);
}
)
Then('I select state and city',{timeout: 100 * 1000} , async function(){
    await this.Bookswebpage.enterdetails5(state,city);
}
)


// Then('I should see user registered',{timeout: 100 * 1000} , async function(){
//     await this.Bookswebpage.verifyHomePage()
// } )