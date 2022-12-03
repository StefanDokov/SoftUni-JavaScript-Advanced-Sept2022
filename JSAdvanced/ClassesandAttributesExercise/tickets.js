function test(a, b){

    class Ticket {
        constructor(d, p, s){
            this.destination = d;
            this.price = Number(p);
            this.status = s;
        }
    }
  let g = [];
    for (let i of a) {
        let [dest, price, stat] = i.split("|");
        let y = new Ticket(dest, price, stat);
        g.push(y);
    }
let me  = b;
let t = [`destination`, `price`, `status`];

if (!t.includes(me)){
    return s;
}

if (me == `destination` || me == `status`){
g = g.sort((a, b) => a[me].localeCompare(b[me]));
} else if (me == `price`){
g = g.sort((a, b) => a[me] - (b[me]));
}
return g;


}
test(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
);