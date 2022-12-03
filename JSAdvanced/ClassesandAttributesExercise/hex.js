function test(){


    class Hex {
   
        constructor(value){
            this.value = Number(value);
        }
    
        valueOf(){
            return this.value;
        }
    
        toString(){
            return `0x${(this.value.toString(16)).toUpperCase()}`;
        }
    
        plus(num){
            let result = (this.value + Number(num.valueOf()));
            return new Hex(result);
        }
    
        minus(num){
            let result = (this.value - Number(num.valueOf()));
            return new Hex(result);
        }
    
        parse(text){
            return parseInt(text, 16);
        }
    }
    



}
test();