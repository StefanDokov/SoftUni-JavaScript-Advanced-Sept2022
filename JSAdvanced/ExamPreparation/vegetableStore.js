
class VegetableStore {
   constructor(owner, location){
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];

   }
   loadingVegetables(vegis){
      for (let i of vegis){
        let isin = false;
        let [type, quantity, price] = i.split(" ");
        for (let g of this.availableProducts){
            if (g.type == type){
                g.quantity += Number(quantity);
                if (g.price < Number(price)){
                    g.price = Number(price);
                }
                isin = true;
            }

        }
        if (!isin){
            this.availableProducts.push({type, quantity: Number(quantity), price: Number(price)});
        }
        
      }
      this.addedvegies = [];
      this.availableProducts.forEach(el => {
        this.addedvegies.push(el.type);
      });
      return `Successfully added ${this.addedvegies.join(", ")}`;

   }
   buyingVegetables(veges){

    let totalCost = 0;
      for (let k of veges) {
        let [type, quantity] = k.split(" ");
        if (!this.addedvegies.includes(type)){
            throw new Error(`${type} is not available in the store, your current bill is $${totalCost.toFixed(2)}.`)
        } else {
            for (let p of this.availableProducts){
                if (p.type == type){
                    if (p.quantity < Number(quantity)){
                        throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalCost.toFixed(2)}.`)
                    } else {
                        totalCost += Number(quantity) * p.price;
                        p.quantity -= Number(quantity);
                        

                    }
                }
            }
        }
      }
      return `Great choice! You must pay the following amount $${totalCost.toFixed(2)}.`


   }

   rottingVegetable(type, quantity){

        if (!this.addedvegies.includes(type)){
            throw new Error (`${type} is not available in the store.`);
        }
        for(let r of this.availableProducts){
            if (r.type == type){
                if (r.quantity <= Number(quantity)){
                    r.quantity = 0;
                    return `The entire quantity of the ${type} has been removed.`;
                } else {
                    r.quantity -= Number(quantity);
                    return `Some quantity of the ${type} has been removed.`;
                }
            }
        }



   }
   revision (){
    let buff = `Available vegetables:\n`;
    this.availableProducts.sort((a,b) => a.price - b.price)
    .forEach(el => {
        buff += `${el.type}-${el.quantity}-$${el.price}\n`;
    });
    buff += `The owner of the store is ${this.owner}, and the location is ${this.location}.`


      return buff;

   }




}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

