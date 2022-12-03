function test(zyr){
    let yes = [];
    for (let i = 0;i < zyr.length;i++){
      let g = zyr[i];
      if (g < 0){
        yes.unshift(g);
      } else {
        yes.push(g);
      }

    }
    yes.map((x) => console.log(x));

}
test([7, -2, 8, 9]);
console.log(`--------`);
test([3, -2, 0, -1]);