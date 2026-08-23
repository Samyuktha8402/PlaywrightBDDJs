//dulpicate num

// function findduplicate(arr){
//     let seen = new Set();
//     let duplicates = new Set();
//     for (num of arr){
//         if (seen.has(num)){
//             duplicates.add(num);
//         }
//         else{
//             seen.add(num);
//         }
//     }
//     return [...duplicates];
    
// }
// console.log(findduplicate([1,2,2,2,3,3,4]))

//duplicate char

function duplicate(str){
    let seen= new Set();
    let duplicates = new Set();
    for(char of str){
        if(seen.has(char)){
            duplicates.add(char);

        }
        else{
            seen.add(char);
        }
    }
    return [...duplicates];
}
console.log(duplicate("mmmmyyyyyuo"))




