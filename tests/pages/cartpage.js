const {test,expect} = require('@playwright/test');
const{ faker } = require('@faker-js/faker');

class cartWeb{
    constructor(cartWeb){
        this.cartWeb = cartWeb
        // this.var = this.cartWeb.getByLabel("Register to sign in with your personal account")
        // this.Register = this.cartWeb.getByText('Register here')
        // fname:faker.person.firstName();
        // lname:faker.person.lastName();
        // email:faker.internet.email();
        // mobile:faker.internet.mobile();
        // pass:faker.internet.password(8,true);
        this.var = this.cartWeb.getByLabel("Register to sign in with your personal account")
        this.Register = this.cartWeb.getByText('Register here')
        this.Fname = this.cartWeb.locator('#firstName')
        this.Lname = this.cartWeb.locator('#lastName')
        this.uemail = this.cartWeb.locator('#userEmail')
        this.umobile = this.cartWeb.locator('#userMobile')
        this.occupation = this.cartWeb.selectOption("//select[@formcontrolname='occupation']","1: Doctor")
        this.gender = this.cartWeb.locator("//input[@value='Male']")
        this.pass = this.cartWeb.locator("#userPassword")
        this.confirmpass = this.cartWeb.locator("#confirmPassword")
        this.check = this.cartWeb.locator('//input[@type="checkbox"]')
        this.RegLogin = this.cartWeb.locator('#login')
        this.success = this.cartWeb.locator('//h1[text()="Account Created Successfully"]')
        this.login = this.cartWeb.locator('//button[text()="Login"]')
        this.uname = this.cartWeb.locator('#userEmail')
        this.upass = this.cartWeb.locator('#userPassword')
        this.log = this.cartWeb.locator('#login')
        this.cart = this.cartWeb.locator("(//button[text()=' Add To Cart'])[1]")
        this.cartadded = this.cartWeb.locator("//button[contains(text(),' Cart ')]")
        this.checkout = this.cartWeb.getByText('Checkout')
        this.country = this.cartWeb.locator("//input[@placeholder='Select Country']")
        this.selectcountry = this.cartWeb.locator("//span[text()=' India']")
        this.place = this.cartWeb.locator("//a[contains(text(),'Place')]")
    }
    async verify (){
        //await expect(this.var).toBeVisible()

    }
    async Register1(){
        await this.Register.click()
    
    }
    async fillRegister12(testfname,testlname,testemail,testnum){
        await this.Fname.fill(testfname)
        await this.Lname.fill(testlname)
        await this.uemail.fill(testemail)
        await this.umobile.fill(testnum)
    }
    async occupation1(){
        await this.occupation
        await this.gender.click()
    }
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
}

module.exports = { cartWeb };    