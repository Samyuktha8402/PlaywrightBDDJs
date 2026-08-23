// function secondlarge(arr){
//     const removeduplicates = [...new Set(arr)];
//     let a=removeduplicates.sort((a,b)=>b-a);
//     return a[1];
    
    
    
// }
// console.log(secondlarge([20,1,3,4,2,3,5,1,1]))

function maxmin(arr){
    let removeduplicates = [...new Set(arr)];
    let descendingorder = removeduplicates.sort((a,b)=>b-a);
    return ["maxvalue:", descendingorder[0],"minvalue:", descendingorder[descendingorder.length-1]];
}
console.log(maxmin([22,3,44,55,7,22,4,44,22]))