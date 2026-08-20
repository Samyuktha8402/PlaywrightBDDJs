// function evennum(arr){
//     let even=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0)
//             even.push(arr[i]);
//     }
//     return even

// }
// console.log(evennum([2,4,5,6]))

function evennums(arr){
    return arr.filter(num=> num%2===0)
}
console.log(evennums([2,4,6,7,9]))

