function test(raw){
    let calories = {};

    for (let i = 0;i < raw.length;i += 2){
        let name = raw[i];
        let value = Number(raw[i + 1]);

        calories[name] = value;


    }
  console.log(calories);



}
test(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
console.log(`----------`);
test(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);