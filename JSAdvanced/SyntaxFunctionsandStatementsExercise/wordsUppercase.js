function test(orm){
    let red = /\w+/gm;
    let g = orm.match(red);
    console.log(g.join(", ").toUpperCase());

}
test('Hi, how are you?');
console.log(`------------`);
test('hello');