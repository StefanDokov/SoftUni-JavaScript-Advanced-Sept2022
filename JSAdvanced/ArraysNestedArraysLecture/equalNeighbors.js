function test(orm) {
    let equalz = 0;

    for (let c = 0; c < orm.length; c++) {
        checkarr(orm[c]);
    }
    neigh(orm);


    function checkarr(sup) {
        for (let i = 0; i < sup.length - 1; i++) {
            let g = sup[i];
            let p = sup[i + 1];
            if (g == p) {
                equalz++;
            }

        }
        return equalz;
    }
    function neigh(supa) {
        for (let k = 0; k < supa.length - 1; k++) {
            let h = supa[k];
            let m = supa[k + 1];
            for (let f = 0; f < h.length; f++) {
                for (let r = 0; r < m.length; r++) {
                    let strt = h[f];
                    let endo = m[r];
                    if (strt == endo) {
                        if (f == r) {
                            equalz++;
                        }
                    }

                }
            }

        }
        return equalz

    }

   return equalz;
}
test([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
);
console.log(`---------`);
test([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
);