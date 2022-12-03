function test(year, month, day){
    let g = new Date(year, month - 1, day);
    g.setDate(g.getDate() - 1);
    let y = g.getFullYear();
    let m = g.getMonth();
    let d = g.getDate();
    console.log(`${y}-${m + 1}-${d}`);
    
}

test(2016, 9, 30);
console.log(`---------`);
test(2016, 10, 1);