// function odd(str){
//     return str.filter(num=> num%2!==0);
// }
// console.log(odd([7,8,0,5,6,2]))

function oddnum(arr){
    const List=[];
    for(let num of arr){
        if (num%2!==0){
            List.push(num);
        }
        
    }
    return [...List];
}
console.log(oddnum([2,1,3,4,5]))