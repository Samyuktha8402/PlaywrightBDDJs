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
    async enterDetails(firstname,lastname,username12,password12) {
        await this.firstname.fill(firstname)
        await this.lastname.fill(lastname)
        await this.username12.fill(username12);
        await this.password12.fill(password12);
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