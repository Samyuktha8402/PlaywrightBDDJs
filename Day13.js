function person(name,age){
    this.name=name
    this.age=age
    this.greet=function(){
        console.log(`my name is ${this.name} age ${this.age} `)
    }
}
const person1=new person("testname",45)
person1.greet()