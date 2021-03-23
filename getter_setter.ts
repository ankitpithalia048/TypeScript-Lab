class Example {
    private _name: string;

    get name():string{
        return this._name;
    }
    set name(newName: string){
        if(newName.length>=3){
            this._name=newName;
        }
        else{
            console.log("Invalid name");
            
        }
    }
}

const exp = new Example();
exp.name = "Ankit";
console.log(exp.name);

const exp1 = new Example();
exp1.name = "Joe";
console.log(exp1.name);
