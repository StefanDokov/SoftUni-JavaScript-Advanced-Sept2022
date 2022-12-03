import { html, render} from './node_modules/lit-html/lit-html.js';
import {towns} from './towns.js';

let root = document.getElementById(`towns`);
const result = document.getElementById('result');
const searchInp = document.getElementById('searchText');

let listConts = (el) => html`<li>${el}</li>`;

let uli = (arr) => html`<ul>
${arr.map(listConts)}
</ul>`;

render(uli(towns), root);
document.querySelector(`button`).addEventListener(`click`, srch);

function srch() {
   let allcities = document.querySelectorAll(`ul li`);
   let cont = 0;
   for(let g of allcities) {
      g.classList.remove(`active`);
   }
   if (!searchInp.value) {
      render(html`<p>${cont} matches found</p>`, result);
      return;
   }
   
   for (let el of allcities) {
      if (el.textContent.includes(searchInp.value)){
         el.classList.toggle(`active`);
         cont += 1;
      }
   }
   render(html`<p>${cont} matches found</p>`, result);
   
}

