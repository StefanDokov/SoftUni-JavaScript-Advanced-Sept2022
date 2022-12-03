function test(gom, d){

     let sup = [];
     for (let i = 0;i < gom.length;i += d){
        sup.push(gom[i]);
     }
     return sup;

}
test(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);
console.log(`---------`);
test(['dsa',
'asd', 
'test', 
'tset'], 
2
);