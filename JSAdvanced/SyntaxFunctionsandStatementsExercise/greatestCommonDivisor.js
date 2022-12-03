function test(a, b){
    for (let i = 9;i > 0;i--){
        if (a % i == 0 && b % i == 0){
            return console.log(i);
        }
    }

}

test(15, 5);
console.log(`---------`);
test(2154, 458);