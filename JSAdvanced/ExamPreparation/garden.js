class Garden {
constructor(spaceAvailable){
    this.spaceAvailable = Number(spaceAvailable);
    this.plants = [];
    this.storage = [];
}

addPlant(plantName, spaceRequired){

    if (this.spaceAvailable < Number(spaceRequired)){
        throw new Error(`Not enough space in the garden.`);
    } else {
        this.plants.push({plantName, spaceRequired, ripe: false, quantity: 0})
        this.spaceAvailable -= Number(spaceRequired);
        return`The ${plantName} has been successfully planted in the garden.`;
    }
}
ripenPlant(plantName, quantity) {
    if (Number(quantity) <= 0) {
        throw new Error(`The quantity cannot be zero or negative.`);
    }
    for (let g of this.plants){
        if (g.plantName == plantName){
            if (g.ripe == true){
                throw new Error(`The ${g.plantName} is already ripe.`);
            } else {
               g.ripe = true;
               g.quantity += Number(quantity);
               if (g.quantity == 1){
                return `${g.quantity} ${g.plantName} has successfully ripened.`;
               } if (g.quantity > 1){
                return `${g.quantity} ${g.plantName}s have successfully ripened.`;
               }
            }
        }
        
    }
    throw new Error(`There is no ${plantName} in the garden.`)
}
harvestPlant(plantName){
    for (let p of this.plants){
        if (p.plantName == plantName){
            if (p.ripe == false){
                throw new Error(`The ${p.plantName} cannot be harvested before it is ripe.`)
            } else {
                this.spaceAvailable += p.spaceRequired;
                this.storage.push(`${p.plantName} (${p.quantity})`);
                let t = this.plants.splice(this.plants.indexOf(p),1);
               
                return `The ${plantName} has been successfully harvested.`;
            }
        }
    }
    throw new Error(`There is no ${plantName} in the garden.`);
}
generateReport(){
    let allplants = [];
    let buff = ""
    for(let m of this.plants) {
        allplants.push(m.plantName);
    }
    
    buff += `The garden has ${this.spaceAvailable} free space left.\n`;
    buff += `Plants in the garden: ${allplants.sort((a,b) => a.localeCompare(b)).join(`, `)}\n`;
    if (this.storage.length == 0){
        buff += `Plants in storage: The storage is empty.`;
    } else {
        buff += `Plants in storage: ${this.storage.join(`, `)}`;
    }
    return buff;
}



}


const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());







