const {test,expect} = require('@playwright/test');
class Bookswebpage{
    constructor(bookpage){
        this.bookpage = bookpage
        this.firstname1 = bookpage.locator("#firstName")
        this.lastname1 = bookpage.locator("#lastName")
        this.email12 = bookpage.locator("#userEmail")
        this.Gender1 = bookpage.locator("#gender-radio-2")
        this.mobile = bookpage.locator('#userNumber')
        this.dob = bookpage.locator("#dateOfBirthInput")
        this.inputdob=bookpage.locator("//div[@role='gridcell' and @aria-label='Choose Wednesday,March 4th,2026']")
        this.subjects=bookpage.locator("#subjectsInput")
        this.hobbies=bookpage.locator("#hobbies-checkbox-1")
        this.picture=bookpage.locator("#uploadPicture")
        this.curraddress=bookpage.locator("#currentAddress")
        this.state=bookpage.locator("#react-select-3-placeholder")
        this.statedropdown=bookpage.locator("//*[text()='Uttar Pradesh']")
        this.city=bookpage.locator()
        this.citydropdown=bookpage.locator("//*[text()='Agra']")

    }
    async enterDetails1(Samyuktha,Chada,yopmail) {
        await this.firstname1.fill(Samyuktha)
        await this.lastname1.fill(Chada)
        await this.email12.fill(yopmail)
      }
      async enterDetails2(Gender1,num,dob){
        await this.Gender1.click()
        await this.mobile.fill(num)
        await this.dob.fill(dob)

        
      }
      async enterDetails3(english) {
        await this.subjects.fill(english)
        
      }
      async enterDetails(hobbies) {
        
        await this.hobbies.click()
      }

      async pictureupload() {
        await this.picture.setInputFiles('c:\Users\Sai\Downloads/sdr pic.jpg')
      }
      async enterDetails4(bengaluru){
        await this.curraddress.fill(bengaluru)
      }
      async enterdetails5(state,statedropdown,city,citydropdown){
        await this.state.click()
        await this.statedropdown.click()
        await this.city.click()
        await this.citydropdown.click()
      }

      

}
module.exports = { Bookswebpage };