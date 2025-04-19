class car12{
    private brand:string
    model:string
    constructor(brand:string , model:string){
        this.brand=brand,this.model=model
    }
    getbrand():string{return this.brand}
}
const brand123 = new car12("TATA","01.01")
console.log(brand123.getbrand())
console.log(brand123.model)

class electriccar1 extends car12{
    battery:number
    constructor(battery:number,brand:string,model:string){ // initializes variable with respect to class
        super(brand,model)
        this.battery=battery    
    }
        
}
let testcar1 = new electriccar1(80,"advanced","testmodel12")  // reference of the class or object creation 
console.log(testcar1.battery)
console.log(testcar1.getbrand())