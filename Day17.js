//Encapsulation
class Bankaccount{
    #balance
    constructor(owner,balance){
        this.owner=owner
        this.#balance=balance
    }
    deposit(amount){
        this.#balance += amount
        console.log(`deposit ${amount} new balance ${this.#balance}`)
    }
    getbalance(){
        return this.#balance
    }

}
const bank=new Bankaccount("test",500)
bank.deposit(1000)
console.log(bank.getbalance())
//console.log(bank.#balance) # defines private feild , cant be accessed directly 
