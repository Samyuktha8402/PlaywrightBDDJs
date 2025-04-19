//Multilevel inheritance
class grandparent{
    constructor(){
        this.grandname="grandparent"
        console.log("I'm a grandparent")
    }
}
class parent extends grandparent{
    constructor()
    {
        super()
        this.parentname="parent"
        console.log("I'm a parent")
    }
}
class child extends parent{
    constructor(){
        super()
        this.childname="child"
        console.log("I'm a child")
    }
}
const objchild = new child()
console.log(objchild.childname)
console.log(objchild.parentname)
console.log(objchild.grandname)
