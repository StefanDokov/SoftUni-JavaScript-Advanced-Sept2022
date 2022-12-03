function test(first, second, operation) {
    let b = 0;
    switch (operation) {
        case "+":
            b = first + second;
            break;
        case "-":
            b = first - second;
            break;
        case "/":
            b = first / second;
            break;
        case "*":
            b = first * second;
            break;
            case "%":
            b = first % second;
            break;
            case "**":
            b = first ** second;
            break;

    }
    console.log(b);

}
test(5, 6, '+');
console.log(`-------`);
test(3, 5.5, '**');