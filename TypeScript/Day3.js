function greet(name, greeting) {
    if (greeting === void 0) { greeting = 'hello'; }
    return "".concat(greeting, ",").concat(name);
}
console.log(greet("jhon"));
