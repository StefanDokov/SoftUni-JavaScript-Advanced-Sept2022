function test(arr, str, end){

    if (!Array.isArray(arr)){
        return NaN;
    }
    if (str < 0) {
        str = 0;
    }
    if (end > arr.length - 1){
        end = arr.length - 1;

    }
    
    let g = arr.slice(str, end + 1);

    return g.map(Number).reduce((a,b) => a + b,0);


}
test([10, 20, 30, 40, 50, 60], 3, 300);
console.log(`---------`);
test([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
test([], 1, 2)