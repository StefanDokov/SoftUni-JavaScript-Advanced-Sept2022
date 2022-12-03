function test(input){
    if (typeof input == 'number'){
        let a = Math.PI * (input * input);
        console.log(a.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }
    
}

test(5);
console.log(`-------`);
test('name');