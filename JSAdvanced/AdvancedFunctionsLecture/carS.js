function test(arrO) {
    
    let of = {
        inherit:{},
        create(str) {
            of[str] = {};

            return of;
        },
        createInh(strone, strtwo) {
            of.inherit[strtwo] = [];
            of.inherit[strtwo].push(strone);
            return of[strone] = Object.assign({},of[strtwo]);

        },
        setting(strone, strtwo, strtri) {
            
            of[strone][strtwo] = strtri;
            if (of.inherit.hasOwnProperty(strone)){
                for(let elk of of.inherit[strone]) {
                    of[elk] = Object.assign(of[elk],of[strone]);
                    of[elk][strtwo] = strtri;
                }
            }
            
            return of;

        },
        print(str) {
            let m = [];
            for (let elo in of[str]) {
                m.unshift(`${elo}:${of[str][elo]}`)
            }
            console.log(m.join(","));


        }
        


    };

    for (let el of arrO) {
        let [one, two, three, four] = el.split(" ");
        

        if (one == 'create' && three == undefined) {
            of.create(two);
        }
        if (one == `print`) {
            of.print(two);
        }

        if (three != undefined && three == 'inherit') {
            of.createInh(two, four);
        }
        if (three != undefined && three != 'inherit') {
            of.setting(two, three, four);
        }

    }


}
test(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);
console.log(`--------`);
test(['create pesho',
'set pesho rank number1','create gosho inherit pesho','set gosho nick goshko','print gosho'])
