// for (let i=0;i<100;i++){
//     console.log("iteration",i)
// }

// even and odd till 200 using for loop 
// for (let i=0;i<=200;i++){
//     if (i%2==0){
//         console.log("even",i)
//     }
//     else{
//         console.log("odd",i)
//     }
// }
// let count=0
// while (count<=3){
//     console.log(count)
//     count++
// }
//let fruits=["apple","grapes","banana"] // for each loop
// for(let fruit of fruits){
//     console.log(fruit)
// }

let person={name:"nisha",age:26} // like dictionary 
for(let k in person)
{
    console.log(k) //prints keys
    console.log(person) //prints whole data along with key and value
    console.log(person[k])//prints value of the key 
}