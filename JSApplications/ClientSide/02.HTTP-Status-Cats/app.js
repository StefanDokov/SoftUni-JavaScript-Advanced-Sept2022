import {html, render} from './node_modules/lit-html/lit-html.js';

import {cats} from './catSeeder.js';

let root = document.getElementById(`allCats`);

const catMake = (caterino) => html`<li>
<img src="./images/${caterino.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
<div class="info">
    <button class="showBtn" @click=${showMe}>Show status code</button>
    <div class="status" style="display: none" id="${caterino.id}">
        <h4>Status Code: ${caterino.statusCode}</h4>
        <p>${caterino.statusMessage}</p>
    </div>
</div>
</li>`;

function showMe(e){
   
    if (e.target.textContent == `Show status code`){
        console.log(e.target.textContent)
        e.target.parentElement.children[1].style.display = 'block';
        e.target.textContent = `Hide status code`;
    } else if (e.target.textContent == `Hide status code`){
        e.target.parentElement.children[1].style.display = 'none';
        e.target.textContent = `Show status code`;
    }

}

let uli = (obj) => html`<ul>
<li>${obj.map(catMake)}</li>
</ul>`;

render(uli(cats), root);


