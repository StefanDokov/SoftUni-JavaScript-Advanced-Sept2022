function test(){



class Stringer {
    constructor(str, num){
        this.innerString = str;
        this.innerLength = num;
    }
    get innerLength(){
        return this._innerLength;
    }
    set innerLength(value){
         this._innerLength = value;
         if (this.innerLength < 0){
            this.innerLength = 0;
         }
    }
    increase(ind){
        this.innerLength += ind;
    }
    decrease(inp){
        this.innerLength -= inp;
    }
    toString(){
        if(this.innerLength == 0){
            return `...`;
        }else if (this.innerString.length <= this.innerLength){
            return this.innerString;
        } else if (this.innerString.length > this.innerLength){
            return this.innerString.substring(0,this.innerLength) + `...`;
        }
    }
}


let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); 









}
test();