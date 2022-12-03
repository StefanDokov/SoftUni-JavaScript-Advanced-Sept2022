function test(first, second, third) {
    let count = first.length + second.length + third.length;
    let all = count / 3;
    console.log(count);
    console.log(Math.trunc(all)); 
    

}
test('chocolate', 'ice cream', 'cake');
console.log(`----------`);
test('pasta', '5', '22.3');