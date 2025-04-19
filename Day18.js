//Polymorphism , Overriding

class animal{
    speak(){
        console.log("animal makes sound")
    }

}
class dog extends animal{
    speak(){
        console.log("dog barks")
    }
}
const animal1=new animal()
const dog1=new dog()
animal1.speak()
dog1.speak()