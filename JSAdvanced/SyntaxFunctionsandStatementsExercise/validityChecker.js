function test(...obj) {
    let xone = Number(obj[0]);
    let yone = Number(obj[1]);
    let xtwo = Number(obj[2]);
    let ytwo = Number(obj[3]);

    let firstg = Math.sqrt((0 - xone) * (0 - xone) + (0 - yone) * (0 - yone));
    let secg = Math.sqrt((0 - xtwo) * (0 - xtwo) + (0 - ytwo) * (0 - ytwo));
    let topg = Math.sqrt((xtwo - xone) * (xtwo - xone) + (ytwo - yone) * (ytwo - yone));
    let firsb = Number.isInteger(firstg);
    let secb = Number.isInteger(secg);
    let topb = Number.isInteger(topg);
    let firstc = "invalid";
    if (firsb) {
        firstc = "valid";
    }
    let secc = "invalid";
    if (secb) {
        secc = "valid";
    }
    let topc = "invalid";
    if (topb) {
        topc = "valid";
    }
    console.log(`{${xone}, ${yone}} to {0, 0} is ${firstc}`);
    console.log(`{${xtwo}, ${ytwo}} to {0, 0} is ${secc}`);
    console.log(`{${xone}, ${yone}} to {${xtwo}, ${ytwo}} is ${topc}`);


}
test(3, 0, 0, 4);
console.log(`-----------`);
test(2, 1, 1, 1);