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
const person1=new PersonData("testname",65)
person1.greet()

// //mathematical operations using class 
// class mathe{
//     constructor(a,b)
//     {
//         this.a=a
//         this.b=b
//     }
//     greet(){
//         console.log(this.a*this.b)
//     }
// }
// const math1=new mathe(2,3)
// math1.greet()
