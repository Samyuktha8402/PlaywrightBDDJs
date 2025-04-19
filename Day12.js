//Example of object literals
const product={
    name1:"tshirt",
    price1:25,
    greet:function() {
        console.log(`my name is ${this.name1} ${this.price1}`)
    }
}
product.greet()