function solve() {
  let info = document.querySelectorAll(`div textarea`);
  let btns = document.querySelectorAll(`div button`);
  btns[0].addEventListener(`click`, gener);
  let tablle = document.getElementsByTagName(`tbody`)[0];
  let allfurn = [];
  function gener() {
    let res = JSON.parse(info[0].value);
    let img = document.createElement(`img`);
    let trdr = document.createElement(`tr`);
    let tdlr = document.createElement(`td`);
    let p = document.createElement(`p`);
    let checker = document.createElement(`input`);
    for (let el of res) {
      
      img = document.createElement(`img`);
      img.src = el.img;
      if (el.img == null){
        continue;
      }
      trdr = document.createElement(`tr`);
      tdlr = document.createElement(`td`);
      tdlr.appendChild(img);
      trdr.appendChild(tdlr);
      let namo = el.name;

      if (namo == null) {
        continue;
      }
      
      if (!allfurn.includes(namo)){
        allfurn.push(namo);
      } else {
        continue;
      }
      tdlr = document.createElement(`td`);
      p = document.createElement(`p`);
      p.textContent = namo;
      tdlr.appendChild(p)
      trdr.appendChild(tdlr);
      let cena = el.price;
      if (cena == null){
        continue;
      }
      tdlr = document.createElement(`td`);
      p = document.createElement(`p`);
      p.textContent = cena;
      tdlr.appendChild(p)
      trdr.appendChild(tdlr);
      let dec = el.decFactor;
      if (dec == null){
        continue;
      }
      tdlr = document.createElement(`td`);
      p = document.createElement(`p`);
      p.textContent = dec;
      tdlr.appendChild(p)
      trdr.appendChild(tdlr);
      checker = document.createElement(`input`);
      checker.type = `checkbox`;
      tdlr = document.createElement(`td`);
      tdlr.appendChild(checker)
      trdr.appendChild(tdlr);

      tablle.appendChild(trdr);
      info[0].value = "";
    }
  }
  btns[1].addEventListener(`click`, byu);
  function byu() {
    info[1].value = "";
    let itemi = [];
    let sum = 0;
    let proc = 0;
    let cont = 0;
    let clikeri = document.querySelectorAll(`input[type=checkbox]`);
    for (let elem of clikeri) {
      if (elem.checked) {
        cont++;
        itemi.push(elem.parentElement.parentElement.children[1].textContent);
        sum += Number(elem.parentElement.parentElement.children[2].textContent);
        proc += Number(elem.parentElement.parentElement.children[3].textContent);
      }
    }
    if (cont > 0) {
    proc = proc / cont;
    }
    info[1].value += `Bought furniture: ${itemi.join(`, `)}\n`;
    info[1].value += `Total price: ${sum.toFixed(2)}\n`
    info[1].value += `Average decoration factor: ${proc}`;


  }

}