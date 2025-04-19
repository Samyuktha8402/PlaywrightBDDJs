class car1{
    private brand:string
    model:string
    constructor(brand:string , model:string){this.brand=brand,this.model=model}
    getbrand():string{return this.brand}
}
const brand12 = new car1("TATA","01.01")
console.log(brand12.getbrand())
console.log(brand12.model)
