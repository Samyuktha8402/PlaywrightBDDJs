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
var car12 = /** @class */ (function () {
    function car12(brand, model) {
        this.brand = brand, this.model = model;
    }
    car12.prototype.getbrand = function () { return this.brand; };
    return car12;
}());
var brand123 = new car12("TATA", "01.01");
console.log(brand123.getbrand());
console.log(brand123.model);
var electriccar1 = /** @class */ (function (_super) {
    __extends(electriccar1, _super);
    function electriccar1(battery, brand, model) {
        var _this = _super.call(this, brand, model) || this;
        _this.battery = battery;
        return _this;
    }
    return electriccar1;
}(car12));
var testcar1 = new electriccar1(80, "advanced", "testmodel12");
console.log(testcar1.battery);
console.log(testcar1.getbrand());
