import { deleteById, getById } from '../api/data.js';
import {page, html, nothing} from '../lib.js'
import { getUserData } from '../util.js';

const detailTemp = ( user, post, showBtns, onDelete) => html`<section id="details">
<div id="details-wrapper">
  <p id="details-title">Shoe Details</p>
  <div id="img-wrapper">
    <img src="${post.imageUrl}" alt="example1" />
  </div>
  <div id="info-wrapper">
    <p>Brand: <span id="details-brand">${post.brand}</span></p>
    <p>
      Model: <span id="details-model">${post.model}</span>
    </p>
    <p>Release date: <span id="details-release">${post.release}</span></p>
    <p>Designer: <span id="details-designer">${post.designer}</span></p>
    <p>Value: <span id="details-value">${post.value}</span></p>
  </div>
  ${showBtns(user, post, onDelete)}
</div>
</section>`;
export async function showDetail(ctx){
    const id = ctx.params.id;
    const post = await getById(id);
    let user = getUserData();
    ctx.render(detailTemp( user, post, showBtns, onDelete));

    function showBtns(user, post, onDelete){
        if (!user) {
            return nothing;
        } else if (user._id == post._ownerId){
            return html`<div id="action-buttons">
            <a href="/edit/${post._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
          </div>`
        } 
    }

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this post?');

        if (choice) {
            await deleteById(id);
            ctx.page.redirect('/dashboard');
        }
    }

}