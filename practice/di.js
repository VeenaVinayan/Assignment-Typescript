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
var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.prototype.start = function () {
        console.log("Engine started");
    };
    return Engine;
}());
var ElectricEngine = /** @class */ (function (_super) {
    __extends(ElectricEngine, _super);
    function ElectricEngine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElectricEngine.prototype.start = function () {
        console.log("Electric engine started");
    };
    return ElectricEngine;
}(Engine));
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        this.engine.start();
    };
    return Car;
}());
// Dependencies are injected externally
var engine = new Engine();
var electricEngine = new ElectricEngine();
var car1 = new Car(engine);
var car2 = new Car(electricEngine);
car1.start(); // Engine started
car2.start(); // Electric engine started
