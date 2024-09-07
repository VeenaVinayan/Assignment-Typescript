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
//Implementation of oops
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Vehicle.prototype.start = function () {
        console.log("".concat(this.make, " ").concat(this.model, " ").concat(this.year, " is starting... "));
    };
    Vehicle.prototype.stop = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is stopping...."));
    };
    return Vehicle;
}());
// Inheritance
var Cars = /** @class */ (function (_super) {
    __extends(Cars, _super);
    function Cars(make, model, year, door, type) {
        var _this = _super.call(this, make, model, year) || this; //call parent constructor
        _this.door = door;
        _this.type = type;
        return _this;
    }
    Cars.prototype.openTrunk = function () {
        console.log("".concat(this.make, " ").concat(this.model, " 's trunk is open !!"));
    };
    Cars.prototype.start = function () {
        console.log("".concat(this.model, " has ").concat(this.door, "  doors and starting...."));
    };
    return Cars;
}(Vehicle));
var Bikes = /** @class */ (function (_super) {
    __extends(Bikes, _super);
    function Bikes(make, model, year, hasHelmet) {
        var _this = _super.call(this, make, model, year) || this;
        _this.hasHelmet = hasHelmet;
        return _this;
    }
    Bikes.prototype.checkHelmet = function () {
        console.log(this.hasHelmet ? "Has Helmet " : "No Helmet !");
    };
    Bikes.prototype.start = function () {
        console.log("".concat(this.make, " ").concat(this.model, " (Bike) is starting..."));
        this.checkHelmet();
    };
    return Bikes;
}(Vehicle));
var myCar = new Cars('VV', 'Taigun', 2023, 4, "SUV");
var myBike = new Bikes('Honda', 'DIo', 2014, true);
myCar.start();
myBike.start();
myCar.openTrunk();
myBike.checkHelmet();
