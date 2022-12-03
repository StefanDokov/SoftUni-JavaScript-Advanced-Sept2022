function test(powa){
    let g = powa.sort((a,b) => a.localeCompare(b));
    let s = 1;
    g.forEach(el => {
        console.log(`${s}.${el}`);
        s++;
    })

}
test(["John", "Bob", "Christina", "Ema"]);
console.log(`-------`);
test();