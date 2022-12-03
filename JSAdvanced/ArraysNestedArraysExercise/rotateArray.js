function test(powa, n){

for (let i = 1;i <= n;i++){
    let g = powa.pop();
    powa.unshift(g);
}
console.log(powa.join(" "));


}
test(['1', 
'2', 
'3', 
'4'], 
2
);
console.log(`------`);
test(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);