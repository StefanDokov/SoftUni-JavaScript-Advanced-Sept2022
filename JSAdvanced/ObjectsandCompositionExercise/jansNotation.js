function test(raw) {

    let g = [];
    for (let coun of raw) {
        if (typeof coun == "number") {
            g.push(coun);
        }
        if (typeof coun == "string") {
            if (g.length < 2) {
                return console.log(`Error: not enough operands!`);
            }
            let s = g.pop();
            let f = g.pop();
            switch (coun) {
                case "*":
                    g.push(f * s);
                    break;
                case "+":
                    g.push(f + s);
                    break;
                case "-":
                    g.push(f - s);
                    break;
                case "/":
                    g.push(f / s);
                    break;

            }
        }
    }
    if (g.length > 1){
        return console.log(`Error: too many operands!`);
    } else {
        return console.log(g[0]);
    }

}
test([3,
    4,
    '+']
);
console.log(`-----------`);
test([5,
    3,
    4,
    '*',
    '-']
);
