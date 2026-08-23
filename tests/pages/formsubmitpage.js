const {test,expect} = require('@playwright/test');

class FormSubmitPage{
    constructor(submitpage){
        this.submitpage = submitpage
        this.formsubmit=submitpage.getByText('Ajax Form Submit')
        this.name = submitpage.locator("#title")
        this.message=submitpage.locator("#description")
        this.submit=submitpage.locator("#btn-submit")

    }
    async details(){
        await this.formsubmit.click()
    }
    async details1(name){
        await this.name.fill(name)

    }
    async details2(message){
        await this.message.fill(message)
    }
    async details3(){
        await this.submit.click()
    }

}
module.exports = { FormSubmitPage };
