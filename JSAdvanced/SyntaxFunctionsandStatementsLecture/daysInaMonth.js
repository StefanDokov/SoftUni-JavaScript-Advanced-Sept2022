function test(mont, year){
    let g = new Date(year, mont, 0).getDate();
    console.log(g)
   
}

test(1, 2012);
console.log(`-------`);
test(2, 2021);