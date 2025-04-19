// stack 
class stack{
    constructor(){
        this.items=[]

    }
    push(element){
        this.items.push(element)
    }
    pop(){
        return this.items.pop()
    }


}
let stak=new stack()
stak.push(19)
stak.push(20)
console.log(stak.items)
console.log(stak.pop())
console.log(stak.items)
//console.log(stack)