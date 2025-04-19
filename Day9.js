function average(array){
    return array.reduce((sum,num)=>sum+num,0)/array.length
}
console.log(average([1,2,3,4,5,6]))

// function average(array){
//     let sum=0 
//     for(let i=0;i<array.length;i++){
//         sum=sum+array[i]
//     }
//     return sum/array.length
// }
// console.log(average([1,2,3,3,4,4]))
