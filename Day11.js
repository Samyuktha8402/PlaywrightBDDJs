let fruits=["mango","orrange","kiwi","banana"]
fruits.push("lemon")
console.log(fruits)
fruits.unshift("watermelon")
console.log(fruits)
let UppercaseFruits=fruits.map(f=>f.toUpperCase()) //map iterates on each element and give a new output
console.log(UppercaseFruits)

// Write a variable array with vegetable name and make them capital using map function
let veggis=["brinjal","tomato","potato","bottleguard"]
let Uppercaseveggis=veggis.map(veg=>veg.toUpperCase()) //map iterates on each element and give a new output
console.log(Uppercaseveggis)