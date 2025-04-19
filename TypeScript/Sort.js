var numbers123 = [5, 3, 4, 6, 7];
numbers123.sort(function (a, b) {
    console.log("".concat(a, ",").concat(b));
    return b - a;
});
console.log(numbers123);
