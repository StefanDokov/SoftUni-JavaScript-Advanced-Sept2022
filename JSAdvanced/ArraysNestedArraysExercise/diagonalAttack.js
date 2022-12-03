function test(rawr) {
    let supa = []
    let g = 0;
    let m = 0;
    for (let i = 0; i < rawr.length; i++) {
        supa.push(rawr[i].split(" ").map(Number));

    }
    let h = supa.length - 1;
    for (let o = 0; o < supa.length; o++) {
        g += Number(supa[o][o]);
        supa[o][o] = supa[o][o] + "";
        m += Number(supa[o][h]);
        supa[o][h] = supa[o][h] + "";
        h--;

    }

    if (g == m) {
        for (let u = 0; u < supa.length; u++) {
            for (let f = 0; f < supa.length; f++) {
                if (typeof supa[u][f] == "number") {
                    supa[u][f] = g;
                }
            }
        }
    }
    supa.forEach(el => console.log(el.join(" ")));


}
test(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);
console.log(`--------`);
test(['1 1 1',
    '1 1 1',
    '1 1 0']
);