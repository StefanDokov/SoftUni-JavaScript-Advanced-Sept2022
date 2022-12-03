function test(sup){
    let g = "";
    for (let i = 0;i < sup.length;i++){
        if (i % 2 == 0){
           g += `${sup[i]} `;
        }
    }
    console.log(g)


}
test(['20', '30', '40', '50', '60']);
console.log(`-----------`);
test(['5', '10']);