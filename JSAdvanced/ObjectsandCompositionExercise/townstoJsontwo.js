function test(raw){
    let cities = [];
    let g = raw.shift();
    let [no, one, two, three] = g.split(/\s*\|\s*/);
    for (let el of raw){
        let [nope, first, sec, third] = el.split(/\s*\|\s*/);
        
        sec = JSON.parse(Number(sec).toFixed(2));
        
        third = JSON.parse(Number(third).toFixed(2));
        cities.push({[one]:first,[two]:sec,[three]:third});
    }
   console.log(JSON.stringify(cities));


}
test(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);
console.log(`----------`);
test(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
);