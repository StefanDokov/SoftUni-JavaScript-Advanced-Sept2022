function test(x, y){
    let g = [];
    g.length = x;
    let all = x * y;
    
    for (let i = 0;i < x;i++){
        g[i] = [];
        g[i].length = y;
        g[i].fill(0);
    }
    let s = 1;
    let m = 0;
    let n = x - 1;
    let o = 0;
    let p = y - 1;
    while (s <= all){
       if (m <= n){
        for (let r = o;r <= p;r++){
            g[m][r] = s;
            s++;
        }
        m++;
       }
       if (o <= p){
        for(let k = m;k <= n;k++){
            g[k][p] = s;
            s++;
        }
        p--;
       }
       if (m <= n) {
        for (let e = p;e >= o;e--){
            g[n][e] = s;
            s++;
        }
        n--;
       }
       if (o <= p){
        for (let v = n;v >= m;v--){
            g[v][o] = s;
            s++;
        }
        o++;
       }


    }

  g.forEach(el => console.log(el.join(" ")));




}
test(5, 5);
console.log(`-------------`);
test(3, 3);