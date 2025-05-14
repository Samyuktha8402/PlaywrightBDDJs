
const{ faker } = require('@faker-js/faker');

const user = {
        // this.var = this.cartWeb.getByLabel("Register to sign in with your personal account")
        // this.Register = this.cartWeb.getByText('Register here')
        fname:faker.person.firstName(),
        lname:faker.person.lastName(),
        email:faker.internet.email(),
        mobile:faker.phone.number('##########'),
        pass:faker.internet.password(8,true),
    }

module.exports =  user ; 