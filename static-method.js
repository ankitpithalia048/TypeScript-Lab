var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.calculateArea = function (radius) {
        return this.pi * radius * radius;
    };
    Circle.calculateCircum = function (radius) {
        return this.pi * 2 * radius;
    };
    Circle.pi = 3.14;
    return Circle;
}());
console.log(Circle.calculateCircum(5));
console.log(Circle.calculateArea(5));
