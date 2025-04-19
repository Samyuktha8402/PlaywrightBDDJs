//prototype base inheritance
function parent(){
    this.name="Parent" //directly intializing value
}
// parent.prototype.greet=function(){
//     console.log("Hello from Parent")
// }
function child(){
    this.age=10
}
child.prototype=new parent()
const object=new child()
console.log(object.name)
console.log(object.age)
// object.greet()