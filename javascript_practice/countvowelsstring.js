// function countvowels(str){
//     const vowels = 'aeiou';
//     let total = 0;
//     for(const char of str.toLowerCase()){
//         if(vowels.includes(char)){
//             total++
//         }

        
//     }
//     return total;

// }
// console.log(countvowels('AAAA'))


function countvowels(str){
    const vowels='aeiou';
    let count = 0;
    for(const char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++;
        }
            
    }
    return count;
}
console.log(countvowels('appple'))