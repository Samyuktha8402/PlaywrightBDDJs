//FIFO
class Queue {
    constructor(){
        this.item=[]
    }
    enqueue(element){
        this.item.push(element)
    }
    dequeue(){
        return this.item.shift()
    }
    front(){
        return this.item[0]
    }
}
const que = new Queue()
que.enqueue(1)
que.enqueue(2)
que.enqueue(3) // adds element to the array 
console.log(que.dequeue()) //prints deleted value 
console.log(que.item)
console.log(que.front()) // prints the first value in array
