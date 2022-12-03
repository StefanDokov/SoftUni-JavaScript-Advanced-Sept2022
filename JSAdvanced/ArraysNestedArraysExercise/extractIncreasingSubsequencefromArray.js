function test(powa){
  let b = powa[0];
 
  let g = [];
  g.push(b);
  for (let i = 1;i < powa.length;i++){
    let s = powa[i];
    if (s >= b){
        g.push(s);
        b = s;
    }
  }
  
  return g;

}
test([1, 
    3, 
    8, 
    4, 
    10, 10,
12, 
3, 
2, 
24]
);
console.log(`--------`);
test([1, 
    2, 
    3,
    4]
    );