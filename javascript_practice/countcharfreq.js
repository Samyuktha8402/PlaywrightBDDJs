function countcharfreq(str){
    let freq={};
        for(let char of str){
            if(freq[char]){
                freq[char]++;
            }
            else{
                freq[char]=1;
            }


        }
        return freq;
    }
console.log(countcharfreq('apple'))