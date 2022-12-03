function test(dumb) {
    let g = dumb.length - 1;
    let firs = Number(dumb[0]);
    let last = Number(dumb[g]);
    let sum = firs + last;
    console.log(sum);

}
test(['20', '30', '40']);
console.log(`--------`);
test(['5', '10']);