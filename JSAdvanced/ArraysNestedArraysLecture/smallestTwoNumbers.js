function test(zyr) {
    let lowone = Number(zyr[0]);
    let lowtwo = undefined;
    for (let i = 1;i < zyr.length;i++){
        let h = Number(zyr[i]);
        if (h <= lowone){
            lowtwo = lowone
            lowone = h;
        } else {
            if (lowtwo == undefined) {
                lowtwo = h;
            }
            if (h <= lowtwo) {
                lowtwo = h;
            }
        }
        
    }
console.log(`${lowone} ${lowtwo}`);

}
test([30, 15, 50, 5]);
console.log(`-----------`);
test([3, 0, 10, 4, 7, 3]);