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
        //this.studentsubjects = page.locator('(//div[@id="subjectsContainer"]//div)[1]')
        this.studenthobbies = page.locator("//label[text()='Sports']")
        this.uploadfile = page.locator("#uploadPicture")
        this.currentaddress =page.locator("#currentAddress")
        this.selectstate = page.locator("//div[text()='Select State']")
        this.dropdownstate  = page.locator("//div[text()='NCR']")
        this.submit = page.locator("#submit")
    }
    async filldetails(studentfirstname,studentlastname,studentemail){
        await this.studentfirstname.fill(studentfirstname)
        await this.studentlastname.fill(studentlastname)
        await this.studentemail.fill(studentemail)
    }
    async Gender(){
        await this.studentGender.click()
    }
    async mobilenum(studentmobile,studentDOB){
        await this.studentmobile.fill(studentmobile)
        await this.studentDOB.fill(studentDOB)}
    // async subject(studentsubjects){
    //     await this.studentsubjects.click()
    //     await this.studentsubjects.fill(studentsubjects)
    //}
    async hobbies(){
        await this.studenthobbies.click()
    }
    async uploadfile1(pathname){
        // await expect(uploadfile).toBeVisible()
        await this.uploadfile.setInputFiles(pathname)
    }
    async address(currentaddress){
        await this.currentaddress.fill(currentaddress)
    }
    async stateandsubmit(){
        await this.selectstate.click()
        await this.dropdownstate.click()
        await this.submit.click();
    }
    
}
module.exports = { Registration };