const {test,expect} = require ('@playwright/test');
class Registration{
    constructor(page){
        this.page=page
        this.studentfirstname = page.locator("#firstName")
        this.studentlastname = page.locator("#lastName")
        this.studentemail = page.locator("#userEmail")
        this.studentGender = page.locator('//label[text()="Female"]')
        this.studentmobile = page.locator("#userNumber")
        this.studentDOB = page.locator("#dateOfBirthInput")
        this.studentsubjects = page.locator('//div[@id="subjectsContainer"]//div//div')
        this.studenthobbies = page.locator("//label[text()='Sports']")
        this.uploadfile = page.locator("#uploadPicture")
        this.currentaddress =page.locator("#currentAddress")
        this.selectstate = page.locator("//div[text()='Select State']")
        this.dropdownstate  = page.locator("//div[text()='NCR']")
        this.submit = page.locator("#submit")
    }
    async filldetails(sfn1,sln1,testemail){
        await this.studentfirstname.fill(sfn1)
        await this.studentlastname.fill(sln1)
        await this.studentemail.fill(testemail)
    }
    async Gender(){
        await this.studentGender.click()
    }
    async mobilenum(num,dob,subjects){
        await this.studentmobile.fill(num)
        await this.studentDOB.fill(dob)
        await this.studentsubjects.fill(subjects)
    }
    async hobbies(){
        await this.studenthobbies.click()
    }
    async uploadfile(){
        await this.uploadfile.setInputfiles('testdata\XPATH.pdf')
    }
    async address(testaddress){
        await this.currentaddress.fill(testaddress)
    }
    async stateandsubmit(){
        await this.selectstate.click()
        await this.dropdownstate.click()
        await this.submit.click();
    }
}
module.exports = { Registration };