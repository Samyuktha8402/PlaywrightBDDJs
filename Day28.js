
function removeduplicate(array){
    return [...new Set(array)] // ... implies iteration
}
console.log(removeduplicate([2,5,2,2,4]))
