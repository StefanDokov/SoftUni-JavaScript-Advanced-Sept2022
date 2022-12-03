import { deleteById, doesHelike, getById, getLikes, postLike } from '../api/data.js';
import {page, html, nothing} from '../lib.js'
import { getUserData } from '../util.js';

const detailTemp = (info, user, post, likes, isHe, showBtns, onDelete, onLike) => html`<section id="details">
<div id="details-wrapper">
  <p id="details-title">Album Details</p>
  <div id="img-wrapper">
    <img src="${info.imageUrl}" alt="example1" />
  </div>
  <div id="info-wrapper">
    <p><strong>Band:</strong><span id="details-singer">${info.singer}</span></p>
    <p>
      <strong>Album name:</strong><span id="details-album">${info.album}</span>
    </p>
    <p><strong>Release date:</strong><span id="details-release">${info.release}</span></p>
    <p><strong>Label:</strong><span id="details-label">${info.label}</span></p>
    <p><strong>Sales:</strong><span id="details-sales">${info.sales}</span></p>
  </div>
  <div id="likes">Likes: <span id="likes-count">${likes}</span></div>
  ${showBtns(user, post, isHe, onDelete, onLike)}
  </div>
      </section>`;

export async function showDetail(ctx){
    const id = ctx.params.id;
    let user = getUserData();
    const requests = [
        getById(id),
        getLikes(id),
    ]

    if (user) {
        requests.push(doesHelike(id, user._id));
    }
    const [post, likes, isHe] = await Promise.all(requests);
    ctx.render(detailTemp(post, user, post, likes, isHe, showBtns, onDelete, onLike));

    function showBtns(user, post, isHe, onDelete, onLike){
        if (!user || isHe > 0) {
            return nothing;
        } else if (user._id == post._ownerId){
            return html`<div id="action-buttons">
            <a href="/edit/${post._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
          </div>`
        } else if (user) {
            return html `<div id="action-buttons">
            <a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>
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

    async function onLike(){
        await postLike(id);
        ctx.page.redirect('/post/' + id);
    }

}