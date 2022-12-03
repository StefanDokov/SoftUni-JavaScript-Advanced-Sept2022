function test(n, m){
 let sum = 0;
 for (let g = Number(n); g <= Number(m);g++){
    sum += g;
 }
 console.log(sum)

}
test('1', '5' );
console.log(`-------`);
test('-8', '20');