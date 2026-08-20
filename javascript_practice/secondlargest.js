function secondlarge(arr){
    const removeduplicates = [...new Set(arr)];
    let a=removeduplicates.sort((a,b)=>a-b);
    return a[1];
    
    
    
}
console.log(secondlarge([20,1,3,4,2,3,5,1,1]))