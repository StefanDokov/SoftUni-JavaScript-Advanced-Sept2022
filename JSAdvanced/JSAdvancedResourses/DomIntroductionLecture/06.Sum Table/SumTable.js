function sumTable() {
  let prods = document.querySelectorAll(`table tr`);
  let g = 0
  for (let i = 1;i < prods.length - 1;i++){

       let colms = prods[i].children;
        g += Number(colms[1].textContent);
       
       document.getElementById(`sum`).innerText = g;
  }
}