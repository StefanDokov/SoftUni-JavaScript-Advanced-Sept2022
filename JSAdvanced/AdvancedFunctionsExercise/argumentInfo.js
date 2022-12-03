function test(...args) {
    
    let obj = [];
    let counts = {};
    
    for (let el of args) {
        let tip = typeof el;

           if (!counts.hasOwnProperty(tip)){
            counts[tip] = 1;
           } else {
            counts[tip]++;
           }
           obj.push(`${tip}: ${el}`);
    }
  
for(let g of obj) {
    console.log(g)
}
  
  let sorted = Object.entries(counts).sort((a,b) => b[1] - a[1]).forEach(el => {
    console.log(`${el[0]} = ${el[1]}`);
  })



}
test('cat', 42, function () { console.log('Hello world!'); })
