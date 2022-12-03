function test(...raw){
    let rec = {
        name: raw[0],
        population: raw[1],
        treasury: raw[2]
    }
 
    return rec;


}
test('Tortuga',
7000,
15000
);
console.log(`------------`);
test('Santo Domingo',
12000,
23500
);