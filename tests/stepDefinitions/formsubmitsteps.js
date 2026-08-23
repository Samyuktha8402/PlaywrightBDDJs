const { FormSubmitPage } =  require('../pages/formsubmitpage');
const { defineParameterType, When, Given,Then, And } = require("@cucumber/cucumber")
const path = require("path") 
const testdataPath = path.join(__dirname,'../../testdatajson.json')
const testdata= require (testdataPath);

When ('clicking formsubmit' ,{timeout: 100 * 1000}, async function (){
    this.FormSubmitPage = new FormSubmitPage(this.page); 
    await this.FormSubmitPage.details();

});
Then ('enter the {string}' ,{timeout: 100 * 1000},async function(name){
    await this.FormSubmitPage.details1(testdata.Name);
});

Then ('entering {string}' ,{timeout: 100 * 1000},async function(message){
    await this.FormSubmitPage.details2(testdata.Message);
});
Then ('click on submit',{timeout:100*1000},async function(){
    await this.FormSubmitPage.details3();
}

)

