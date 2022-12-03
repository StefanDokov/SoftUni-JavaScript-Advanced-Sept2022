import { post } from "../api/api.js";
import { getAll } from "../api/data.js";
import { html, page } from "../lib.js";

const homeTemplate = (postove) => html `<section id="dashboard-page">
<h1 class="title">All Posts</h1>
${postove.length > 0 ? html`<div class="all-posts">${postove.map(homePostTemplate)}</div>`: html`<h1 class="title no-posts-title">No posts yet!</h1>` }
</section>`;

const homePostTemplate = (post) => html`<div class="post">
<h2 class="post-title">${post.title}</h2>
<img class="post-image" src="${post.imageUrl}" alt="Kids clothes">
<div class="btn-wrapper">
    <a href="/post/${post._id}" class="details-btn btn">Details</a>
</div>
</div>`;

export async function homeRend(ctx){
    const postove = await getAll();
    ctx.render(homeTemplate(postove));
}