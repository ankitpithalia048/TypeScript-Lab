class TypeDemo {
    myType: any;
    name: string;
    age:number;
    isStudent:boolean;
    mixed: number|string;


    print(){
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
        
        
        
        
        
    }
}

const type = new TypeDemo();
type.print();