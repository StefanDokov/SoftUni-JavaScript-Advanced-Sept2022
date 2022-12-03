function test(arr){

class Cars {
    constructor(){
      
        this.cars = {};

    }
    addCar(marka, model, amont){
        let kolko = Number(amont);
        if (!this.cars.hasOwnProperty(marka)){
            this.cars[marka] = {};
            this.cars[marka][model] = kolko;
        } else {
            if (!this.cars[marka].hasOwnProperty(model)) {
                this.cars[marka][model] = kolko;
            } else {
                this.cars[marka][model] += kolko;
            }
        }
    }
    listAll(){
        let buff = "";
        for(let i in this.cars){
            buff += `${i}\n`;
            for (let b in this.cars[i]){
                buff += `###${b} -> ${this.cars[i][b]}\n`
            }
        }
        return buff.trim();
    }
}

let g = new Cars();

for (let i of arr) {

    let [marka, vid, amount] = i.split(` | `);

    g.addCar(marka, vid, amount);


}

console.log(g.listAll())



}
test(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);