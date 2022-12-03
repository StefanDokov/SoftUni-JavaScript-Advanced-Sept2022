import { html, render} from './node_modules/lit-html/lit-html.js'

document.getElementsByClassName(`content`)[0].addEventListener(`submit`, findText);

let roots = document.getElementById(`root`);

const showLi = (name) => html`<li>${name}</li>`;


function findText(e) {
   e.preventDefault();
    let r = new FormData(e.target);
    
    let g = Object.fromEntries(r.entries());

    if (!g.towns) {
        return;
    }
    let townArr = g.towns.split(`, `);

   let ele = (arr) => html`<ul>
   ${arr.map(showLi)}
   </ul>`;

   render(ele(townArr), roots);
   document.getElementById(`towns`).value = ""

}