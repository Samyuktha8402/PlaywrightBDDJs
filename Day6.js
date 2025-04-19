// let fruits=["apple","grapes","banana"]
// console.log(fruits[0])

//create a variable having 5 variable names and access using for each and without foreach - 2 programs
// let colors=["white","black","yellow","orrange","pink"] // using foreach
// for (let color of colors)
//     console.log(color)

// let colors=["white","black","yellow","orrange","pink"] // without foreach 
// console.log(colors)

// let colors={1:"white",2:"black",3:"yellow",4:"orrange",5:"pink"}
// for(let k in colors)
//     //console.log(k)
//     //console.log(colors)
//     console.log(colors[k])

// for(let i=1;i<=10;i++){
//     console.log(`${11} x ${i} = ${11*i}`)
// }

function reversearray(array){
    let reversearray=[]
    for(let i=array.length-1;i>=0;i--){
        reversearray.push(array[i])
    }
    return reversearray
}
console.log(reversearray([2,3,4,5,9]))



