function palindrome(str){
    const rev = str.split('').reverse('').join('');
    return rev === str;
    
}
console.log(palindrome('hooh'))