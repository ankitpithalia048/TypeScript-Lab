var Example = /** @class */ (function () {
    function Example() {
    }
    Object.defineProperty(Example.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            if (newName.length >= 3) {
                this._name = newName;
            }
            else {
                console.log("Invalid name");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Example;
}());
var exp = new Example();
exp.name = "Ankit";
console.log(exp.name);
var exp1 = new Example();
exp1.name = "Joe";
console.log(exp1.name);
