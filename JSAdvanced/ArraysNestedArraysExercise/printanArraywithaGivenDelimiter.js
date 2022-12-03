function test(powa,coma){
   
    let gom = [];
    for (let i = 0;i < powa.length;i++){
         gom.push(powa[i]);

    }
    console.log(gom.join(coma))


}
test(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-'
);
console.log(`-----------`);
test(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'
);