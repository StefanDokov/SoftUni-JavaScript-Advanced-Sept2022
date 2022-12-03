function test() {

function getFibonator() {
    let i = 0;
    let s = 1;
    
    function turn() {
        let b = i + s;
        i = s;
        s = b;
        return i;
    }
    return turn;
    
}

let fib = getFibonator();
console.log(fib()); 
console.log(fib()); 
console.log(fib());
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 


}
test();