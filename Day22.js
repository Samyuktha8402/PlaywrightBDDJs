// multiple inheritance
//valid for object literals not for classes 
const parent1={
    greet1()
    {
        console.log("I'm a parent1")
    }
}
const parent2={
    greet2()
    {
        console.log("I'm a parent2")
    }
}
const child=Object.assign({},parent1,parent2)
child.greet1()
child.greet2()