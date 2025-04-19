//Hybrid Inheritance
class Parent{
    greet(){
        console.log("hello from parent")
    }
}
const obj ={ //object literal
    hello(){
        console.log("hello from obj")
    }
}
class child extends Parent{}
    Object.assign(child.prototype,obj)
    const cj= new child
    cj.hello()
    cj.greet()
