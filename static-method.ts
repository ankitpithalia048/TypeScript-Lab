class Circle {
    static pi:number = 3.14;

    static calculateArea(radius:number){
        return this.pi*radius*radius;
    }
    static calculateCircum(radius:number){
        return this.pi*2*radius;
    }
}
console.log(Circle.calculateCircum(5));
console.log(Circle.calculateArea(5));
