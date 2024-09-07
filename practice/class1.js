//class getter and setter
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this._width = width;
        this._height = height;
        this._area = 0;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (newValue) {
            this._height = newValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "area", {
        get: function () {
            return this._height * this._width;
        },
        enumerable: false,
        configurable: true
    });
    return Rectangle;
}());
var rect = new Rectangle(10, 5);
console.log("Height ::" + rect.height);
console.log("Width ::" + rect.width);
rect.width = 20;
rect.height = 25;
console.log("Height ::" + rect.height);
console.log("Width ::" + rect.width);
console.log(rect.area);
