function reversearray1(array) {
    var reversearray1 = [];
    for (var i = array.length - 1; i >= 0; i--) {
        reversearray1.push(array[i]);
    }
    return reversearray1;
}
console.log(reversearray1([1, 2, 3, 4]));
// function reversearray1<T>(array:T[]):T[]{
//     let reversearray1:T[]=[]
//     for (let i=array.length-1;i>=0;i--){
//         reversearray1.push(array[i])
//     }
//     return reversearray1
// }
// const numbers12 =[1,2,3,4,5,6]
// console.log(reversearray1(numbers12))
