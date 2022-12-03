import { post } from "../api/api.js";
import { getAll } from "../api/data.js";
import { html, page } from "../lib.js";

const dashTemplate = (postove) => html `<section id="dashboard">
<h2>Albums</h2>
${postove.length > 0 ? html`<ul class="card-wrapper">${postove.map(dashPostTemplate)}</ul>`: html`<h2>There are no albums added yet.</h2>` }
</section>`;

const dashPostTemplate = (post) => html`<li class="card">
<img src="${post.imageUrl}" alt="travis" />
<p>
  <strong>Singer/Band: </strong><span class="singer">${post.singer}</span>
</p>
<p>
  <strong>Album name: </strong><span class="album">${post.album}</span>
</p>
<p><strong>Sales:</strong><span class="sales">${post.sales}</span></p>
<a class="details-btn" href="/post/${post._id}">Details</a>
</li>`;

export async function dashRend(ctx){
    const postove = await getAll();
    ctx.render(dashTemplate(postove));
}