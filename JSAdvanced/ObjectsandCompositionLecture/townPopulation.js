function test(raw){
    let towns = {};

    for (let el of raw){
        let [name,popu] = el.split(" <-> ");
        if (!towns.hasOwnProperty(name)){
            towns[name] = Number(popu);
        } else {
            towns[name] += Number(popu);
        }
    }
   for (let el in towns){
    console.log(`${el} : ${towns[el]}`);
   }

}
test(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);
console.log(`------------`);
test(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);