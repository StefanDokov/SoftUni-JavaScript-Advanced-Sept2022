function test(raw) {
    let enginis = {
        smallEngi: { power: 90, volume: 1800 },
        normalEngi: { power: 120, volume: 2400 },
        monsterEngi: { power: 200, volume: 3500 },

    }
    let coupez = {
        hatchBack: { type: 'hatchback', color: raw.color },
        coup: { type: 'coupe', color: raw.color }


    }

    if (raw.power < 105) {
        raw.engine = enginis.smallEngi;
        delete raw.power;
    }
    if (raw.power >= 105 && raw.power < 160) {
        raw.engine = enginis.normalEngi;
        delete raw.power;
    }
    if (raw.power >= 160) {
        raw.engine = enginis.monsterEngi;
        delete raw.power;
    }

    switch (raw.carriage) {
        case "hatchback":
            delete raw.carriage;
            raw.carriage = coupez.hatchBack;
            delete raw.color;
            break;
        case "coupe":
            delete raw.carriage;
            raw.carriage = coupez.coup;
            delete raw.color;
            break;
    }

    if (raw.wheelsize % 2 == 0) {
        raw.wheelsize--;
    }
    if (raw.wheelsize % 2 != 0){
        let g = [];
        let h = 1;
        while (h <= 4) {
            g.push(raw.wheelsize);
            h++;
        }
        raw.wheels = g;
        delete raw.wheelsize;
    }
    return raw;

}
test({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
);
console.log(`---------`);
test({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
);