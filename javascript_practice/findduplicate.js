function findduplicate(arr){
    let seen = new Set();
    let duplicates = new Set();
    for (num of arr){
        if (seen.has(num)){
            duplicates.add(num);
        }
        else{
            seen.add(num);
        }
    }
    return [...duplicates];
    
}
console.log(findduplicate([1,2,2,2,3,3,4]))