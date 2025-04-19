class bike{
    private brand1:string
    price:number
    constructor(brand1:string,price:number){
        this.brand1=brand1,this.price=price
    }
    getbrand1():string{return this.brand1}
}
const result = new bike("testmodel",40)
console.log(result.getbrand1())
console.log(result.price)

class latestbike extends bike{
    model:number
    constructor(model:number,brand1:string,price:number){
        super(brand1,price)
        this.model=model    
    }
}
const result1= new latestbike(20,"testmode",4.1)
console.log(result1.getbrand1())
console.log(result1.price)
console.log(result1.model)