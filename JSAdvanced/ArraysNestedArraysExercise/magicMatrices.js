function test(powa) {

    let sum = powa[0].reduce((r, t) => r + t);
    let isit = true;
    let g = powa.length;

    for (let i = 0; i < g; i++) {
        let h = powa[i].reduce((x, y) => x + y);
        if (h != sum) {
            isit = false;
            break;
            
        }
        let m = [];
        for (let k = 0; k < g; k++) {

            m.push(powa[k][i]);

        }
        let p = m.reduce((f, l) => f + l);
        if (p != sum) {
            isit = false;
            break;
            
        }

    }
    console.log(isit);


}
test([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
);
console.log(`----------`);
test([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
);
test([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   );