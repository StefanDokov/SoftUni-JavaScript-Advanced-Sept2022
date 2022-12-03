function test(face, suit){
  const validface = [`2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `J`, `Q`, `K`, `A`];
  const validsiots = ["S", `H`, `D`, `C`];
  
  if (!validface.includes(face)){
    throw new Error(`Error`);
  }
  if (!validsiots.includes(suit)){
    throw new Error(`Error`);
  }
  switch(suit){
    case "S": suit = `\u2660`;
    break;
    case "H": suit = `\u2665`;
    break;
    case "D": suit = `\u2666`;
    break;
    case "C": suit = `\u2663`;
    break;
  }

    return {
        face: face,
        suit: suit,
        toString(){
            return this.face + this.suit;
        }
    }




}
test();
console.log(`------------`);
test();