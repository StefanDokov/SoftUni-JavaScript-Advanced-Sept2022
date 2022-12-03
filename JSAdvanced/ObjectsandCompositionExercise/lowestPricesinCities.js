function test(raw){
    let products = {};
    
  for (let els of raw){
     let [town, prod, price] = els.split(" | ");
     price = Number(price);
     if (!products.hasOwnProperty(prod)){
        
            products[prod] = {price, town};
         
     } else {
        if (products[prod].price > price){
            products[prod].price = price;
            products[prod].town = town;
        }
     }

  }
  
  for(let all in products){
    console.log(`${all} -> ${products[all].price} (${products[all].town})`);
  }



}
test(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);
console.log(`---------`);
