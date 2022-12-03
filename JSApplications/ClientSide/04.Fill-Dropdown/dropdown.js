import {html, render} from './node_modules/lit-html/lit-html.js';

let listOpts = (el) => html`<option value="${el._id}">${el.text}</option>`;

let selDiv = document.querySelector(`body div`);

document.getElementById(`menu`).remove();

document.querySelector(`body form`).addEventListener(`submit`, addMore);

optiS();
async function optiS() {

     let res = await fetch(`http://localhost:3030/jsonstore/advanced/dropdown`);
     let resdata = await res.json();
     let g = Object.values(resdata);
     
     let selIn = (arr) => html`<select id="menu">
     ${arr.map(listOpts)}
     </select>`;
     
     render(selIn(g), selDiv);
      
}

async function addMore(e){
    e.preventDefault();

    let text = document.getElementById(`itemText`).value;
   if (!text) {
    return;
   }
   
   let p = await fetch(`http://localhost:3030/jsonstore/advanced/dropdown`, {
    method: `post`,
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({text})
   });
   document.getElementById(`itemText`).value = "";
   optiS();

}
