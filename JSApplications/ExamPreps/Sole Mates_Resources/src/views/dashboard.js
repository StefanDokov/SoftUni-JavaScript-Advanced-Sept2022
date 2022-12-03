import { post } from "../api/api.js";
import { getAll } from "../api/data.js";
import { html, page, nothing} from "../lib.js";
import { getUserData } from "../util.js";

const dashTemplate = (postove, user) => html `<section id="dashboard">
<h2>Collectibles</h2>
${postove.length > 0 ? html`<ul class="card-wrapper">${user? postove.map(dashPostTemplate) : postove.map(dashNoPostTemplate)}</ul>`: html`<h2>There are no items added yet.</h2>` }
</section>`;

const dashPostTemplate = (post) => html`<li class="card">
<img src="${post.imageUrl}" alt="travis" />
<p>
  <strong>Brand: </strong><span class="brand">${post.brand}</span>
</p>
<p>
  <strong>Model: </strong
  ><span class="model">${post.model}</span>
</p>
<p><strong>Value:</strong><span class="value">${post.value}</span>$</p>
<a class="details-btn" href="/post/${post._id}">Details</a>
</li>`;

const dashNoPostTemplate = (post) => html`<li class="card">
<img src="${post.imageUrl}" alt="travis" />
<p>
  <strong>Brand: </strong><span class="brand">${post.brand}</span>
</p>
<p>
  <strong>Model: </strong
  ><span class="model">${post.model}</span>
</p>
<p><strong>Value:</strong><span class="value">${post.value}</span>$</p>
</li>`;

export async function dashRend(ctx){
    const postove = await getAll();
    const user = getUserData();
    ctx.render(dashTemplate(postove, user));
}