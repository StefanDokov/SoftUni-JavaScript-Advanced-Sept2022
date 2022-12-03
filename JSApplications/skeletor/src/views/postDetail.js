import { deleteById, getById } from '../api/data.js';
import {page, html, nothing} from '../lib.js'
import { getUserData } from '../util.js';

const detailTemp = (info, user, post, showBtns, onDelete) => html` <section id="details-page">
<h1 class="title">Post Details</h1>

<div id="container">
    <div id="details">
        <div class="image-wrapper">
            <img src="${info.imageUrl}" alt="Material Image" class="post-image">
        </div>
        <div class="info">
            <h2 class="title post-title">${info.title}</h2>
            <p class="post-description">Description: ${info.description}</p>
            <p class="post-address">Address: ${info.address}</p>
            <p class="post-number">Phone number: ${info.phone}</p>
            <p class="donate-Item">Donate Materials: 0</p>
            ${showBtns(user, post, onDelete)}
        </div>
    </div>
</div>
</section>`;
export async function showDetail(ctx){
    const id = ctx.params.id;
    const post = await getById(id);
    let user = getUserData();
    ctx.render(detailTemp(post, user, post, showBtns, onDelete));

    function showBtns(user, post, onDelete){
        if (!user) {
            return nothing;
        } else if (user._id == post._ownerId){
            return html`<div class="btns">
            <a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>
        </div>`
        } else if (user) {
            return html `<div class="btns">
            <a href="#" class="donate-btn btn">Donate</a>
        </div>`
        }
    }

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this post?');

        if (choice) {
            await deleteById(id);
            ctx.page.redirect('/');
        }
    }

}