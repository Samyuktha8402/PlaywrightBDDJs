function identity<T>(arg:T): T{ //<> it is to specify generic type 
    return arg
}
console.log(identity<number>(5))
console.log(identity<string>("testgen"))
