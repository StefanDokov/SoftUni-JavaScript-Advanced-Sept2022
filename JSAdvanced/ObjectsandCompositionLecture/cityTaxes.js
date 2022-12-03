function test(raw) {

    const city =
        cityTaxes('Tortuga',
            7000,
            15000);
    city.collectTaxes();
    console.log(city.treasury);
    city.applyGrowth(5);
    console.log(city.population);



    function cityTaxes(...powa) {
        let rec = {
            name: powa[0],
            population: powa[1],
            treasury: powa[2],
            taxRate: 10,
            collectTaxes: function () {
                return this.treasury += this.population * this.taxRate;
            },
            applyGrowth: function (perc) {
                return this.population += this.population * perc / 100;
            },
            applyRecession(perca) {
                return this.treasury -= this.treasury * perca / 100;
            }
        }

        return rec;
    }

}
test();
