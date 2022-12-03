function test(powa){
    let g = powa
            .sort((c,d) => c.localeCompare(d))
            .sort((a,b) => a.length - b.length);

    for (let el of g){         
    console.log(el);
    }


}
test(['alpha', 
'beta', 
'gamma']);
console.log(`--------`);
test(['Isacc', 
'Theodor',
'Jack', 
'Harrison', 
'George']
);