function test(input){
    let sumAll = 0;
    let sumOneAll = 0;
    let sumString = "";
  for (let i = 0;i < input.length;i++){
    sumAll += Number(input[i]);
    sumOneAll += 1 / Number(input[i]);
    sumString += input[i];
   
  }
  console.log(sumAll);
  console.log(sumOneAll);
  console.log(sumString);


}

test([1, 2, 3]);
console.log(`-------`);
test([2, 4, 8, 16]);