const {test,expect} = require('@playwright/test');
class Bookswebpage{
    constructor(bookpage){
        this.bookpage = bookpage
        this.firstname = bookpage.locator("#firstname")
        this.lastname = bookpage.locator("#lastname")
        this.username12 = bookpage.locator("#userName")
        this.password12 = bookpage.locator("#password")
        this.captcha = bookpage.locator('#recaptcha-anchor')
        this.register12 = bookpage.locator("#register")

    }
    async enterDetails(firstname1,lastname1,username1,password1) {
        await this.firstname.fill(firstname1)
        await this.lastname.fill(lastname1)
        await this.username12.fill(username1);
        await this.password12.fill(password1);
        await this.captcha.click()
      }
    //   async clickcaptcha(){
    //     await this.captcha.waitFor()
    //   }
      async Register() {
        await this.register12.click();
      }
      async verifyHomePage() {
        await this.home.waitFor();
      }
}
module.exports = { Bookswebpage };