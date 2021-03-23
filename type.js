var TypeDemo = /** @class */ (function () {
    function TypeDemo() {
    }
    TypeDemo.prototype.print = function () {
        this.age = 20;
        console.log(this.age);
        this.name = "Ankit";
        console.log(this.name);
        this.isStudent = true;
        console.log(this.isStudent);
        this.mixed = 200;
        console.log(this.mixed);
        this.mixed = "This is a test";
        console.log(this.mixed);
    };
    return TypeDemo;
}());
var type = new TypeDemo();
type.print();
