var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var bike = /** @class */ (function () {
    function bike(brand1, price) {
        this.brand1 = brand1, this.price = price;
    }
    bike.prototype.getbrand1 = function () { return this.brand1; };
    return bike;
}());
var result = new bike("testmodel", 40);
console.log(result.getbrand1());
console.log(result.price);
var latestbike = /** @class */ (function (_super) {
    __extends(latestbike, _super);
    function latestbike(model, brand1, price) {
        var _this = _super.call(this, brand1, price) || this;
        _this.model = model;
        return _this;
    }
    return latestbike;
}(bike));
var result1 = new latestbike(20, "testmode", 4.1);
console.log(result1.getbrand1());
console.log(result1.price);
console.log(result1.model);
