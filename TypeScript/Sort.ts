let numbers123=[5,3,4,6,7]
numbers123.sort((a,b)=>{
    console.log(`${a},${b}`)
    return b-a //returning descending
})
console.log(numbers123)