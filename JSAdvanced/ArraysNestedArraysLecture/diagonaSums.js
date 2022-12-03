function test(power) {
    let firside = 0;
    let secside = 0;
    let sumo = [];
    for (let i = 0; i < power.length; i++) {
        let s = power[i][i];
        let b = power[i].length - 1;
        let g = power[i][b - i];
        firside += s;
        secside += g;
    }
    sumo.push(firside);
    sumo.push(secside);
    console.log(sumo.join(" "));

}
test([[20, 40], [10, 60]]);
console.log(`--------`);
test([[3, 5, 17], [-1, 7, 14],
[1, -8, 89]]
);