import { html, render } from './node_modules/lit-html/lit-html.js';

getInfo();

let root = document.querySelector('tbody');

document.querySelector('#searchBtn').addEventListener('click', onClick);

let rowz = (obj) => html`<tr><td>${obj.firstName} ${obj.lastName}</td>
   <td>${obj.email}</td>
   <td>${obj.course}</td></tr>`;


async function getInfo() {
   let res = await fetch(`http://localhost:3030/jsonstore/advanced/table`);
   let resdata = await res.json();

   let rowsi = Object.values(resdata);

   render(rowsi.map(rowz), root);
}

function onClick() {
   let srchInput = document.getElementById(`searchField`).value;
   let allRs = document.querySelectorAll(`tbody tr`);
   for (let g of allRs) {
      g.classList.remove(`select`);
   }
   if (!srchInput) {
      return;
   }
   let tabds = document.querySelectorAll(`tr td`);

   for (let el of tabds) {
      if (el.textContent.toLowerCase().includes(srchInput.toLowerCase())) {
         el.parentElement.classList.add(`select`);
      }
   }

   document.getElementById(`searchField`).value = "";

}

