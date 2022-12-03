function test(zyr){
    function yop(input){
    let h = Math.ceil(input.length / 2);
    let g = input.sort((x,y)=> x - y).slice(-h);
    return g;
    }
    return yop(zyr);

}
test([4, 7, 2, 5]);
console.log(`------`);
test([3, 19, 14, 7, 2, 19, 6]);