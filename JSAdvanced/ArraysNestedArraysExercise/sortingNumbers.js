function test(powa){
    let g = powa.sort((a,b) => a - b);
    let k = g.length / 2;
    let razor = [];
    for (let i = 0;i < k;i++){
        razor.push(g.shift());
        razor.push(g.pop());
        
    }
   return razor;


}
test([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
console.log(`----------`);
test();