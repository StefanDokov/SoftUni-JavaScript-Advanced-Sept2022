import { html, render } from '../node_modules/lit-html/lit-html.js'
import { navi } from './app.js';

let mainbod = document.querySelector(`main`);


let emptydashRend = () => html`<section id="dashboard">
<h2>Job Offers</h2>
<h2>No offers yet.</h2>
</section>`;

let dashelRend = (el) => html`<div class="offer">
<img src="${el.imageUrl}" alt="example1" />
<p>
  <strong>Title: </strong><span class="title">${el.title}</span>
</p>
<p><strong>Salary:</strong><span class="salary">${el.salary}</span></p>
<a class="details-btn" href="/dashboard/${el._id}">Details</a>
</div>`;

let dasharrRend = (arr) => html`<section id="dashboard">
<h2>Job Offers</h2>
${arr.map(dashelRend)}
</section>`;

export async function dashbordRend() {


    let res = await fetch(`http://localhost:3030/data/offers?sortBy=_createdOn%20desc`);
    let resdata = await res.json();
    
    if (resdata.length < 1) {
        render(emptydashRend(), mainbod);
        navi();
    } else {
        render(dasharrRend(resdata), mainbod);
        navi();
    }

}