function solve() {
  let firs = document.getElementById(`text`).value;
  let sec = document.getElementById(`naming-convention`).value;
  let g = firs.toLowerCase();
  if (sec == `Camel Case`){
    let me = g.split(" ");
    for(let i = 1;i < me.length;i++){
      let p = me[i][0].toUpperCase();
      me[i] = me[i].replace(me[i][0],me[i][0].toUpperCase());
    }
    document.getElementById(`result`).textContent = me.join("");
  } else if (sec == `Pascal Case`){
    let ne = g.split(" ");
    for(let i = 0;i < ne.length;i++){
      let s = ne[i][0].toUpperCase();
      ne[i] = ne[i].replace(ne[i][0],s);
    }
    document.getElementById(`result`).textContent = ne.join("");
  } else {
    document.getElementById(`result`).textContent = `Error!`;
  }
  
  

}