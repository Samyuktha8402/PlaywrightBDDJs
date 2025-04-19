// let array1 = new Array(5) // considered as size of the array
// let array2 = new Array(1,2,3) // considered the values in the array 
// console.log(array1)
// console.log(array2)
let a =[1,2,3]
let b =[5,6,7]
let fruits = ["apple","banana","orrange","grapes"]
a.push(4) // add element at end 
console.log(a)
a.pop() // removes last element
console.log(a)
a.unshift(5) // add element at start 
console.log(a)
a.shift()
console.log(a)//delete element at start 
let merge =a.concat(b)
console.log(merge)
console.log(fruits.slice(1,3)) // it will not take last index 
fruits.splice(1,2,"guava","kiwi") // replaces values (1- start the value , 2-no.of position to delete)
console.log(fruits)
console.log(fruits.indexOf("kiwi"))



