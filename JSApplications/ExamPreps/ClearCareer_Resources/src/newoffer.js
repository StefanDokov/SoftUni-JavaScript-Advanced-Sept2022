import {html, render} from '../node_modules/lit-html/lit-html.js'
import {navi} from './app.js'
let mainbod = document.querySelector(`main`);


let createRend = () => html`<section id="create">
<div class="form">
  <h2>Create Offer</h2>
  <form class="create-form" @submit=${crateOffer}>
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

export function createRender() {
    render(createRend(),mainbod);
    
    document.getElementsByClassName(`guest`)[0].style.display = `none`;
    
}
async function crateOffer(e){
  e.preventDefault()
 
  let fData = new FormData(e.target);
  
  let token = sessionStorage.getItem('accessToken');
  let { title, imageUrl, category, description, requirements, salary} = Object.fromEntries(fData.entries());
try{
    if (!title || !imageUrl || !category || !description || !requirements || !salary){
      throw new Error();
    }
   
    let res = await fetch(`http://localhost:3030/data/offers`, {
      method: `post`,
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': token
      },
      body: JSON.stringify({title, imageUrl, category, description, requirements, salary})
    });
    window.location = '/';
    navi();


  } catch(err){
    window.alert(err);
  }
}