class Adder {
    constructor(private a: number){

    }
    add= (b:number) : number =>  this.a+b;
}   

class child extends Adder {
    callAdd(num): number{
        return this.add(num);
    }
}

var ch = new child(10);
console.log(ch.callAdd(20));
