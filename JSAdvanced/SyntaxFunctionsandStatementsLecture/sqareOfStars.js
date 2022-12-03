function test(input){
    if (input == undefined){
        input = 5;
    }
    for (let i = 0;i < Number(input);i++){
    let g = '* '.repeat(Number(input));
    console.log(g)
    }


}

test(3);
console.log(`-------`);
test(4);