const {test,expect} = require('@playwright/test');
class alertpageweb{
    constructor(alertpage){
        this.alertpage = alertpage
        //this.alert = alertpage.locator("//button[text()='Alert']")
        this.frame = this.alertpage.frameLocator("(//iframe[@src='new-tab-sample.php'])[1]")
        this.locator1 = this.frame.locator("(//a[@title='back to Selenium Tutorial'])")
}
async clickalert(){
    await this.alert.click()    
}
async acceptalert(){
    this.alertpage.once('dialog',async dialog =>{
        console.log(dialog.message())
        expect(dialog.message()).toBe("Hello world!")
        await dialog.accept()
    })

}
async selectframe(){
    await this.locator1.click()
      
}
}
module.exports = { alertpageweb };
