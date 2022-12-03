import {html, render} from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
import { countApps, didUclick, postApplication } from './application.js'
import {navi} from './app.js'
let mainbod = document.querySelector(`main`);

let detailguestRend = (el, emp) => html`<section id="details">
<div id="details-wrapper">
  <img id="details-img" src="${el.imageUrl}" alt="example" />
  <p id="details-title">${el.title}</p>
  <p id="details-category">
    Category: <span id="categories">${el.category}</span>
  </p>
  <p id="details-salary">
    Salary: <span id="salary-number">${el.salary}</span>
  </p>
  <div id="info-wrapper">
    <div id="details-description">
      <h4>Description</h4>
      <span>${el.description}</span>
    </div>
    <div id="details-requirements">
      <h4>Requirements</h4>
      <span>${el.requirements}</span>
    </div>
  </div>
  <p>Applications: <strong id="applications">${emp}</strong></p>
  <div id="action-buttons">
              
              </div>
  </div>
  </section>`;

  let detailRendowner = (el, emp) => html`<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src="${el.imageUrl}" alt="example" />
    <p id="details-title">${el.title}</p>
    <p id="details-category">
      Category: <span id="categories">${el.category}</span>
    </p>
    <p id="details-salary">
      Salary: <span id="salary-number">${el.salary}</span>
    </p>
    <div id="info-wrapper">
      <div id="details-description">
        <h4>Description</h4>
        <span>${el.description}</span>
      </div>
      <div id="details-requirements">
        <h4>Requirements</h4>
        <span>${el.requirements}</span>
      </div>
    </div>
    <p>Applications: <strong id="applications">${emp}</strong></p>
    <div id="action-buttons">
              <a href="/dashboard/edit/${el._id}" id="edit-btn">Edit</a>
              <a href="/dashboard/delete/${el._id}" id="delete-btn">Delete</a>
              </div>
          </div>
        </section>`;

        let detailRendloged = (el, emp) => html`<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src="${el.imageUrl}" alt="example" />
    <p id="details-title">${el.title}</p>
    <p id="details-category">
      Category: <span id="categories">${el.category}</span>
    </p>
    <p id="details-salary">
      Salary: <span id="salary-number">${el.salary}</span>
    </p>
    <div id="info-wrapper">
      <div id="details-description">
        <h4>Description</h4>
        <span>${el.description}</span>
      </div>
      <div id="details-requirements">
        <h4>Requirements</h4>
        <span>${el.requirements}</span>
      </div>
    </div>
    <p>Applications: <strong id="applications">${emp}</strong></p>
    <div id="action-buttons">
              <a href="/dashboard/application/${el._id}" id="apply-btn">Apply</a>
              </div>
          </div>
        </section>`;

        let detailapliedRend = (el, emp) => html`<section id="details">
<div id="details-wrapper">
  <img id="details-img" src="${el.imageUrl}" alt="example" />
  <p id="details-title">${el.title}</p>
  <p id="details-category">
    Category: <span id="categories">${el.category}</span>
  </p>
  <p id="details-salary">
    Salary: <span id="salary-number">${el.salary}</span>
  </p>
  <div id="info-wrapper">
    <div id="details-description">
      <h4>Description</h4>
      <span>${el.description}</span>
    </div>
    <div id="details-requirements">
      <h4>Requirements</h4>
      <span>${el.requirements}</span>
    </div>
  </div>
  <p>Applications: <strong id="applications">${emp}</strong></p>
  <div id="action-buttons">
             
              </div>
  </div>
  </section>`;


export async function defailF(ctx){

let g = ctx.params.id;
let owner = sessionStorage.getItem('usera');

let requests = [];

requests.push(countApps(g));
requests.push(didUclick(g, owner));

let [cont , usr] = await Promise.all(requests);

  let res = await fetch(`http://localhost:3030/data/offers/${g}`);
  let resdata = await res.json();
  
  if (!sessionStorage.getItem('usera')){
    render(detailguestRend(resdata, cont),mainbod);
    navi();
    
  } else if (usr > 0){

    render(detailapliedRend(resdata, cont),mainbod);
    navi();

  }else if (owner == resdata._ownerId){

    render(detailRendowner(resdata, cont), mainbod);

   navi();

  } else if (owner != resdata._ownerId){

    render(detailRendloged(resdata, cont),mainbod);

    navi();
  }


}


