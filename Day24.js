// let numbers=new Set([1,2,3,4,5,6,6,4,2]) // set holds unique variables in unordered form 
// console.log(numbers)

// let numbers=new Set(["apple","Apple"]) // set holds unique variables in unordered form 
// console.log(numbers)

const parent1={
    greet1(){
        console.log("parent1")

    }

}
const parent2={
    greet2(){
        console.log("parent2")

    }
}
const child=Object.assign({},parent1,parent2)
child.greet1()
child.greet2()

