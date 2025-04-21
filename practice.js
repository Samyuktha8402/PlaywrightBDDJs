//Remove duplicates
console.log("duplicate")
function duplicate(arr){
    return [...new Set(arr)];
}
console.log(duplicate([1,2,4,4,6,6]));


//find index of element
console.log("find index of element")
function findIndex(array,target){
    return array.indexOf(target);
}
console.log(findIndex([1,2,3,4],2))

//Binary search ,sorting array ,finding an element in an array 
console.log("Binary search ,sorting array ,finding an element in an array ")
function binarySearch(aray,target){
    let left =0 ,right = aray.length-1;
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if (aray[mid] === target) return mid;
        if (aray[mid] < target) left= mid+1;
        else right = mid-1;

    }
    return -1;
}
console.log(binarySearch([1,2,3,5,6,7,8,9],7));

//find Kth largest number 
console.log("find Kth largest number")
function kthlargest(ary , k){
    return ary.sort((a,b)=>b-a)[k-1]
}
console.log(kthlargest([1,2,3,4,5,6,7],3))

//Rotate an array Leftshift by K places
console.log("Rotate an array Leftshift by K places")
function leftshift(data , k){
    k%=data.length //handles the cases if K > length ,example k is 11 length is 6 remainder 5 .so shifts by 5 places 
    return [...data.slice(k), ...data.slice(0,k)];
}
console.log(leftshift([1,2,3,4,5,6],2));

//Merge two sorted arrays
console.log("Merge two sorted arrays")
function merge(arr1,arr2){
    return[...arr1, ...arr2].sort((a,b)=>a-b);
}
console.log(merge([1,2,3],[4,5,6]))

//move zeros at the end 
console.log("move zeros at the end ")
function zeroes(arr){
    return [...arr.filter(x => x!==0), ...arr.filter(x=>x===0)] 
}
console.log(zeroes([0,8,7,0,6,0,4]))

//Missing number in an array
console.log("Missing number in an array")
function missing (arr){
    let n=arr.length+1;
    let sum = (n/2)*(arr[0]+arr[arr.length-1])
    return sum-(arr.reduce((a,b)=>a+b,0));
}
console.log(missing([11,12,14,15]))

// intersection of two arrays 
console.log("intersection of two arrays ")
function arrayintersection(arr1,arr2){
    return arr1.filter(x=> arr2.includes(x));
}
console.log(arrayintersection([1,2,2,1],[2,2]))

//find union
console.log("find union")
function union(arr1,arr2){
    return [...new Set([...arr1,...arr2])];
}
console.log(union([1,2,3],[1,2,3,4]))

//Kadane's algorithm -subarray with maximum sum
console.log("Kadane's algorithm -subarray with maximum sum")
function maxsum(arr){
    let maxsum1=arr[0],currsum=arr[0]
    for(i=1;i<arr.length-1;i++){
        currsum=Math.max(arr[i],currsum+arr[i])
        maxsum1=Math.max(maxsum1,currsum)
    }
    return maxsum1;
}
console.log(maxsum([-1,-1,-2,0]))

//find pairs that sums to target 
console.log("find pairs that sums to target ")
function pairtotarget(arr,target){
    let seen=new Set(),result=[]
    for(num of arr){
        if (seen.has(target-num)) result.push([num,target-num])
        seen.add(num)
    }
    return result
}
console.log(pairtotarget([2,4,5,3,6],8))

//find the first non-repeating element 
console.log("find the first non-repeating element ")
function nonrepeating(arr){
    const count={}; // initializing an empty count
    for(num of arr){ // for loop to go through eah item in an array
        if (count[num]){ //checks if the key is already a number in count // number is key and repeated times is value
            count[num]+=1  //increments the count value for the key 
        }
        else 
        {
            count[num] = 1 //if the number is not before in count 
        }
    }
    for (num of arr){
        if(count[num]===1){  //for each number checks the count is exactly 1 
            return num; 
            

        }
    }
    return null;
}
console.log(nonrepeating([2,2,3,4,5,5,4,7]))

//Find the Majority Element (Element Occurring More than n/2 Times) 
console.log("Find the Majority Element (Element Occurring More than n/2 Times) ")
function majorityelement(arr){
    let count={},n=arr.length/2;
    for (num of arr){
        count[num]=(count[num] || 0 )+1;
        if (count[num]>n) return num;
        
    }
    return null;
}
console.log(majorityelement([3,3,3,3,5,5,5,5,3,5,5]))

//Find the Longest Consecutive Sequence
console.log("Find the Longest Consecutive Sequence")
function consecutivelength(arr){
    let set = new Set(arr) , maxLen= 0 ;
    for (let num of arr){
        if(!set.has(num-1)){
            let length = 1;
            while (set.has(num+length)) length++;
            maxLen = Math.max(maxLen , length);

        }
    }
    return maxLen;
}
console.log(consecutivelength([2,3,4,5,6,7,89,90]));
