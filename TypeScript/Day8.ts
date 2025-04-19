function mergesorrtedarray(array1,array2){
    return [...array1,...array2].sort((a,b)=>a-b)
}
console.log(mergesorrtedarray([1,2,3],[4,5,3]))