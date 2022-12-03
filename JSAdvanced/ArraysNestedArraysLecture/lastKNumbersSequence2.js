function test(...orn) {
    function sun(dum) {
        let o = Number(dum[0]);
        let p = Number(dum[1]);
        let g = [1];
        while (g.length < o) {
            let h = 0;
            if (g.length <= p) {
                for (let i = 0; i < g.length; i++) {
                    h += g[i];

                }
                g.push(h);
            } else {
                for (let i = g.length - p; i <= g.length - 1; i++) {
                    h += g[i];
                }
                g.push(h);
            }

        }
        return g;
    }
    return sun(orn);
}
console.log(test(6, 3));
console.log(`----------`);
console.log(test(8, 2));