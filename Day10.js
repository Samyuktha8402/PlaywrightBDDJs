function reversearray(array){
    let reversearray=[]
    for (let i=array.length-1;i>=0;i--){
        reversearray.push(array[i])
    }
    return reversearray
}
console.log(reversearray([1,2,3,4,5]))