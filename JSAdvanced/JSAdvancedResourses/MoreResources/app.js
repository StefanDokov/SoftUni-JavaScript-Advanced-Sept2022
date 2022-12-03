window.addEventListener("load", solve);

function solve() {
  let makeInp = document.getElementById(`make`);
  let modelInp = document.getElementById(`model`);
  let yearInp = document.getElementById(`year`);
  let fuelInp = document.getElementById(`fuel`);
  let oldPriceInp = document.getElementById(`original-cost`);
  let newPriceInp = document.getElementById(`selling-price`);
  let firstListing = document.getElementById(`table-body`);
  let sellingListing = document.getElementById(`cars-list`);
  let profitBox = document.getElementById(`profit`);
  document.getElementById(`publish`).addEventListener(`click`, public);

  function createElement(type, value, className) {
    const element = document.createElement(type);
    element.textContent = value;
    if (className) {
      element.classList.add(className);
    }
    return element
  }

  function public(e) {
    e.preventDefault();
    if (!makeInp.value || !modelInp.value || !yearInp.value || !fuelInp.value || !oldPriceInp.value || !newPriceInp.value || (Number(oldPriceInp.value) >= Number(newPriceInp.value))) {
      return;
    }
    let info = document.createElement(`tr`);
    info.classList.add(`row`);
    info.appendChild(createElement(`td`, makeInp.value));
    info.appendChild(createElement(`td`, modelInp.value));
    info.appendChild(createElement(`td`, yearInp.value));
    info.appendChild(createElement(`td`, fuelInp.value));
    info.appendChild(createElement(`td`, oldPriceInp.value));
    info.appendChild(createElement(`td`, newPriceInp.value));
    let butonz = document.createElement(`td`);
    let editBtn = document.createElement(`button`);
    editBtn.classList.add(`action-btn`);
    editBtn.classList.add(`edit`);
    editBtn.textContent = `Edit`;
    editBtn.addEventListener(`click`, edito);
    let sellBtn = document.createElement(`button`);
    sellBtn.classList.add(`action-btn`);
    sellBtn.classList.add(`sell`);
    sellBtn.textContent = `Sell`;
    sellBtn.addEventListener(`click`, sello);
    butonz.appendChild(editBtn);
    butonz.appendChild(sellBtn);
    info.appendChild(butonz);

    firstListing.appendChild(info);


    makeInp.value = "";
    modelInp.value = "";
    yearInp.value = "";
    fuelInp.value = "";
    oldPriceInp.value = "";
    newPriceInp.value = "";

    function edito() {
      makeInp.value = info.children[0].textContent;
      modelInp.value = info.children[1].textContent;
      yearInp.value = info.children[2].textContent;
      fuelInp.value = info.children[3].textContent;
      oldPriceInp.value = info.children[4].textContent;
      newPriceInp.value = info.children[5].textContent;

      info.remove();

    }
    function sello() {
      let liSell = document.createElement(`li`);
      liSell.classList.add(`each-list`);
      liSell.appendChild(createElement(`span`, `${info.children[0].textContent} ${info.children[1].textContent}`));
      liSell.appendChild(createElement(`span`, info.children[2].textContent));
      liSell.appendChild(createElement(`span`, Number(info.children[5].textContent) - Number(info.children[4].textContent)));
      profitBox.textContent = (Number(profitBox.textContent) + (Number(info.children[5].textContent) - Number(info.children[4].textContent))).toFixed(2);
      info.remove();
      sellingListing.appendChild(liSell);

    }



  }
}
