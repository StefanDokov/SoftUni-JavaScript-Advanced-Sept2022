function test(){


let manager = solution (); 
console.log (manager ("restock flavour 50 ")); 
console.log (manager ("prepare lemonade 4 ")); 
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("restock flavour 10")); 
console.log (manager ("prepare apple 1")); 
console.log (manager ("restock fat 10")); 
console.log (manager ("prepare burger 1")); 
console.log (manager ("report")); 

function solution() {
  let kuhnq = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,

  }
 let items = {
  apple: {
    carbohydrate: 1,
    flavour: 2
  },
  lemonade: {
    carbohydrate: 10,
    flavour: 20
  },
  burger: {
    carbohydrate: 5,
    flavour: 3,
    fat: 7
  },
  eggs: {
    protein: 5,
    fat: 1,
    flavour: 1
  },
  turkey: {
    protein: 10,
    carbohydrate: 10,
    fat: 10,
    flavour: 10
  }
}
  
  return function (input) {
    let [action, item, amount] = input.split(" ");
     if (action == "restock") {
        kuhnq[item] += Number(amount);
        return `Success`;
     } else if (action == "prepare"){
        for (let el in items[item]) {
            
            if ((items[item][el] * Number(amount)) <= kuhnq[el]) {
                kuhnq[el] -= items[item][el] * Number(amount);
            } else {
                return `Error: not enough ${el} in stock`;
            }
        };
        return `Success`;
     } else if (action == `report`){
        let g = [];
        for (let ele in kuhnq){
            g.push(`${ele}=${kuhnq[ele]}`);
        };
        return g.join(" ");
     }
  }
  



}




}
test();