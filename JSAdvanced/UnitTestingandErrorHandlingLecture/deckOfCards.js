function printDeckOfCards(cards) {
  let suit = "";
  let face = "";
  let op = [];
  let isin = false;
  for (let i of cards) {
      let g = i.split("");
      suit = g.pop();
      face = g.join("");
      createCard(face, suit);
      function createCard(face, suit) {

          const validface = [`2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `J`, `Q`, `K`, `A`];
          const validsiots = ["S", `H`, `D`, `C`];

          if (!validface.includes(face)) {
              op = [];
              let or = `Invalid card: ${face + suit}`;
              op.push(or);
              return op;
          }
          if (!validsiots.includes(suit)) {
              op = [];
              let or = `Invalid card: ${face + suit}`;
              op.push(or);
              return op;
          }

          switch (suit) {
              case "S": suit = `\u2660`;
                  break;
              case "H": suit = `\u2665`;
                  break;
              case "D": suit = `\u2666`;
                  break;
              case "C": suit = `\u2663`;
                  break;
          }

          let facee = face;
          let suite = suit;
          

          op.push(facee + suite);


      }
      
     
  }
  console.log(op.join(" "));
  
}
printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);