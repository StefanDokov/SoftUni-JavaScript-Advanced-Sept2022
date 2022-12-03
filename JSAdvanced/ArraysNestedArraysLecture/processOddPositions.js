function test(supa){
    
    function horr(op){
        let g = [];
       for (let i = 0;i < op.length;i++){
         if (i % 2 != 0){
            g.push(Number(op[i]) * 2);

         }

       }

       let s = g.reverse();
       return s;

    }
    return horr(supa);



}
test([10, 15, 20, 25]);
console.log(`------------`);
test([3, 0, 10, 4, 7, 3]);