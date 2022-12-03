function test(raw){

let prods = {};

for (let g of raw){
    let [prod, cost] = g.split(" : ");
    prods[prod] = cost;
}
let sorted = Object.keys(prods).sort((a,b) => a.localeCompare(b));
let y = "";
for (let g of sorted){
    
    let s = g[0];
    if (s != y){
        console.log(s);
        y = s;
    }
    console.log(`  ${g}: ${prods[g]}`);

    }
}


test(['Appricot : 20.4','Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);
console.log(`-------`);
test(['Banana : 2', 'Rubic\'s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
);