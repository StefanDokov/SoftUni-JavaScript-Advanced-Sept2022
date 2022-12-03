function test(orm){
    let s = undefined;
    for (let i = 0;i < orm.length;i++){
        zum(orm[i]);
    }
 
    function zum(pasta){
         pasta = pasta.map(Number);
         pasta.map(x => {
            if (x >= s || s == undefined){
                s = x;
            }
         });
        return s;
    }
    return s;

}
test([[20, 50, 10],
    [8, 33, 145]]
   );
console.log(`-----------`);
test([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   );