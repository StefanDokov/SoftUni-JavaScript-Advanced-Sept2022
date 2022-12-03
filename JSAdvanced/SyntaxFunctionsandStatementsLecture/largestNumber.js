function test(numOne, numTwo, numThree){
    let bigest = numOne;
    if (numTwo > bigest){
        bigest = numTwo;
    } 
    if (numThree > bigest){
        bigest = numThree;
    }
    console.log(`The largest number is ${bigest}.`);
}
test(5, -3, 16);
console.log(`-------`);
test(-3, -5, -22.5);