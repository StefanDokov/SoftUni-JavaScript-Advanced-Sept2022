function test(rawr) {
    let matrix = [];
    let rows = rawr[0];
    let cols = rawr[1];
    matrix.length = cols;
    
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        matrix[i].length = cols;
        matrix[i].fill(0);

    }
    let pointone = rawr[2];
    let pointwo = rawr[3];
    let g = 1;
    matrix[pointone][pointwo] = g;
    let xone = pointone;
    let xtwo = pointone;
    let yone = pointwo;
    let ytwo = pointwo;
    
    while (xone > 0 || xtwo < rows - 1 || yone > 0 || ytwo < cols - 1){
    g++;
    xone--;
    xtwo++;
    yone--;
    ytwo++;
    if (xone < 0){
        xone = 0;
    }
    if (xtwo > rows - 1){
        xtwo = rows - 1;
    }
    if (yone < 0){
        yone = 0;
    }
    if (ytwo > cols - 1){
        ytwo = cols - 1;
    }
    
    for (let k = xone;k <= xtwo;k++){
        for (let r = yone;r <= ytwo;r++){
           if (matrix[k][r] == 0){
             matrix[k][r] = g;
           }


        }
    }
    
    
}
 matrix.forEach(el => console.log(el.join(" ")));


}
test([4, 4, 0, 0]);
console.log(`---------`);
test([5, 5, 2, 2]);
console.log(`----------`);
test([3, 3, 2, 2]);