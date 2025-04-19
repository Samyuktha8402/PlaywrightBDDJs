//INheritance
class PersonData{
    constructor(name,age)
    {
        this.name=name
        this.age=age
    }
    greet(){
        console.log(`my name is ${this.name} age ${this.age}`)
    }
}
class employee extends PersonData{
    constructor(name,age,jobtitle){
        super(name,age)
        this.jobtitle=jobtitle
    }
    work(){
        console.log(`${this.name} is working as ${this.jobtitle}`)
    }

}
const emp1= new employee("sam" ,25,"tester")
emp1.work()
emp1.greet()