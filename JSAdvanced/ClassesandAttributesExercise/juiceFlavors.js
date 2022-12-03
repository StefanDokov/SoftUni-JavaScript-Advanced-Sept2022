function test(arr) {

    class Bottles {
        constructor() {
            this.juices = {};
            this.bottle = {};
        }
        addAmount(name, amou) {
            if (!this.juices.hasOwnProperty(name)) {
                this.juices[name] = Number(amou);
            } else {
                this.juices[name] += Number(amou);
            }

            if (this.juices[name] >= 1000) {
                
                let me = Math.trunc(this.juices[name] / 1000);
                
                if (!this.bottle.hasOwnProperty(name)) {
                    this.bottle[name] = me;
                    
                } else {
                    this.bottle[name] += me;
                     
                }
                this.juices[name] -= me * 1000;
                
            
            }
        }
        print(){
            let buff = "";
            for (let i in this.bottle) {
               buff += `${i} => ${this.bottle[i]}\n`;
            }
            
            return buff.trim();
        }

    }




let c = new Bottles();

for (let i of arr) {

    let [vid, amount] = i.split(` => `);

    c.addAmount(vid, amount);


}

return c.print();



}
test(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);
test(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)