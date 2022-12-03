function test(orm){
    let mro = orm.toString().split("");
    let s = true;
    let h = Number(mro[0]);
    let sum = h;
    for (let i = 1;i < mro.length;i++){
        let g = Number(mro[i]);
        if (g != h){
            s = false;
        }
        sum += g;
       
    }
     console.log (s);
     console.log(sum)

}


test(2222222);
console.log(`---------`);
test(1234);