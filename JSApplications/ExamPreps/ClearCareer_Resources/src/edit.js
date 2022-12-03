import {html, render} from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
import {defailF} from './offerdetails.js'
let mainbod = document.querySelector(`main`);


let editRend = () => html`<section id="edit">
<div class="form">
  <h2>Edit Offer</h2>
  <form class="edit-form" @submit=${updatino}>
    <input
      type="text"
      name="title"
      id="job-title"
      placeholder="Title"
    />
    <input
      type="text"
      name="imageUrl"
      id="job-logo"
      placeholder="Company logo url"
    />
    <input
      type="text"
      name="category"
      id="job-category"
      placeholder="Category"
    />
    <textarea
      id="job-description"
      name="description"
      placeholder="Description"
      rows="4"
      cols="50"
    ></textarea>
    <textarea
      id="job-requirements"
      name="requirements"
      placeholder="Requirements"
      rows="4"
      cols="50"
    ></textarea>
    <input
      type="text"
      name="salary"
      id="job-salary"
      placeholder="Salary"
    />

    <button type="submit">post</button>
  </form>
</div>
</section>`;

export async function editOf(ctx){
    render(editRend(),mainbod);
    let g = ctx.params.id;
    
    sessionStorage.setItem('uru', g);
    let res = await fetch(`http://localhost:3030/data/offers/${g}`);
    let resdata = await res.json();

    document.getElementById('job-title').value = resdata.title;
    document.getElementById('job-logo').value = resdata.imageUrl;
    document.getElementById('job-category').value = resdata.category;
    document.getElementById('job-description').textContent = resdata.description;
    document.getElementById('job-requirements').textContent = resdata.requirements;
    document.getElementById('job-salary').value = resdata.salary;
  
    
}
async function updatino(e){
  e.preventDefault();
  let b = sessionStorage.getItem('uru');
  let token = sessionStorage.getItem('accessToken');
  let dat = new FormData(e.target);

  let { title, imageUrl, category, description, requirements, salary} = Object.fromEntries(dat.entries());

  try{
      if (!title || !imageUrl || !category || !description || !requirements || !salary){
        throw new Error();
      }
     
      let res = await fetch(`http://localhost:3030/data/offers/${b}`, {
        method: `put`,
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization': token
        },
        body: JSON.stringify({title, imageUrl, category, description, requirements, salary})
      });
      
      history.back(1);
      
      sessionStorage.removeItem('uru');
      
  
    } catch(err){
      window.alert(err);
    }
    
}

export async function deleteOf(ctx){
    let g = ctx.params.id;
    let token = sessionStorage.getItem('accessToken');
    let answer = window.confirm("Are you sure?");
    if (answer) {
  
    let res = await fetch(`http://localhost:3030/data/offers/${g}`, {
        method: `delete`,
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        }
    })
   let answer = window.confirm("Are you sure?");
   
    window.location = '/';
    
    } else {
      return;
    }

}