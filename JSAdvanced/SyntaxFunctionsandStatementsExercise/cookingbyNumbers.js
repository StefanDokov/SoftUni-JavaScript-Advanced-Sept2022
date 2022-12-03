function test(...params) {

    let g = Number(params[0]);
    for (let i = 1; i < params.length; i++) {
        let oper = params[i];
        switch (oper) {
            case "chop":
                g /= 2;
                break;
            case "dice":
                g = Math.sqrt(g);
                break;
            case "spice":
                g += 1;
                break;
            case "bake":
                g *= 3;
                break;
                case "fillet":
                g -= g * 20 / 100;
                break;

        }


      console.log(g)
    }
    

}
test('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log(`---------`);
test('9', 'dice', 'spice', 'chop', 'bake', 'fillet');