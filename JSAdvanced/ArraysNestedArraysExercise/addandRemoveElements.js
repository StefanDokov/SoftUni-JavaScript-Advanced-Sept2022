function test(gom){
    let powa = [];
    let point = 0;
   for (let i = 0;i < gom.length;i++){
     let g = gom[i];
     switch(g){
        case "add":
            point++;
            powa.push(point);
            break;
            case "remove":
                point++;
                powa.pop();
                break;
         
     }
   }
   if (powa.length > 0){
    powa.forEach(el => console.log(el));
   } else {
    console.log('Empty');
   }

}
test(['add', 
'add', 
'add', 
'add']
);
console.log(`-----------`);
test(['add', 
'add', 
'remove', 
'add', 
'add']
);
console.log(`-------`);
test(['remove', 
'remove', 
'remove']
);