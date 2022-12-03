function test(arrO, act){

    if (act == "asc") {

        let me = arrO.sort((a,b) => a - b);
         return me;
    } 
    if (act == "desc") {
        
        let you = arrO.sort((a,b) => b - a);
        return you;
    } 


}
test([14, 7, 17, 6, 8], 'asc');
console.log(`-----------`);
test([14, 7, 17, 6, 8], 'desc');