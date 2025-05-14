const {test,expect} = require('@playwright/test');
const{ faker } = require('@faker-js/faker');

class AcademyWebpage{
    constructor(academypage){
        this.academypage = academypage
        this.var = this.academypage.getByLabel("Register to sign in with your personal account")
        this.Register = this.academypage.getByText('Register here')
        this.Fname = this.academypage.locator('#firstName')
        this.Lname = this.academypage.locator('#lastName')
        this.uemail = this.academypage.locator('#userEmail')
        this.umobile = this.academypage.locator('#userMobile')
        this.occupation = this.academypage.selectOption("//select[@formcontrolname='occupation']","1: Doctor")
        this.gender = this.academypage.locator("//input[@value='Male']")
        this.pass = this.academypage.locator("#userPassword")
        this.confirmpass = this.academypage.locator("#confirmPassword")
        this.check = this.academypage.locator('//input[@type="checkbox"]')
        this.RegLogin = this.academypage.locator('#login')
        this.success = this.academypage.locator('//h1[text()="Account Created Successfully"]')
        this.login = this.academypage.locator('//button[text()="Login"]')
        this.uname = this.academypage.locator('#userEmail')
        this.upass = this.academypage.locator('#userPassword')
        this.log = this.academypage.locator('#login')
        this.cart = this.academypage.locator("(//button[text()=' Add To Cart'])[1]")
        this.cartadded = this.academypage.locator("//button[contains(text(),' Cart ')]")
        this.checkout = this.academypage.getByText('Checkout')
        this.country = this.academypage.locator("//input[@placeholder='Select Country']")
        this.selectcountry = this.academypage.locator("//span[text()=' India']")
        this.place = this.academypage.locator("//a[contains(text(),'Place')]")

    }
    async verify (){
        //await expect(this.var).toBeVisible()

    }
    async Register1(){
        await this.Register.click()
    
    }
    async fillRegister(testfname,testlname,testemail,testnum){
        await this.Fname.fill(testfname)
        await this.Lname.fill(testlname)
        await this.uemail.fill(testemail)
        await this.umobile.fill(testnum)
    }
    async occupation1(){
        await this.occupation
        await this.gender.click()
    }
    // async pass1(){
    //     faker = faker()
    //     password = faker.password(length=12, special_chars=True, digits=True, upper_case=True, lower_case=True)
    //     print("Generated Password:", password)
    //     await this.pass.fill(password)

    // }
    async pass1(Testpassword){
        await this.pass.fill(Testpassword)
    }
    async confirmpassword(Testpassword){
        await this.confirmpass.fill(Testpassword)

    }
    async check1(){
        await this.check.click()
        await this.RegLogin.click()
        await this.login.click()
    }
    async loginpage(testemail,Testpassword){
        await this.uname.fill(testemail)
        await this.upass.fill(Testpassword)
    }
    async loginpage1(){
        await this.log.click()
    }
    async addtocart(){
        await this.cart.click()
        await this.cartadded.click()
    }
    async checkout1(){
        await this.checkout.click()
    }
    async filladdress(I,n,d){
        await this.country.press(I)
        await this.country.press(n)
        await this.country.press(d)
    }
    async selectaddressandplace(){
        await this.selectcountry.click()
        await this.place.click()
    }

}
module.exports = { AcademyWebpage };