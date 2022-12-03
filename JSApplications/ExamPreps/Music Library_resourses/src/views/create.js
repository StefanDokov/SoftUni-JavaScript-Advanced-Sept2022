import { createPost } from "../api/data.js";
import { login } from "../api/user.js";
import { html } from "../lib.js"
import { createSubmitHandler } from "../util.js";


const createTemp = (onCreate) => html`<section id="create">
<div class="form">
  <h2>Add Album</h2>
  <form class="create-form" @submit=${onCreate}>
    <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
    <input type="text" name="album" id="album-album" placeholder="Album" />
    <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
    <input type="text" name="release" id="album-release" placeholder="Release date" />
    <input type="text" name="label" id="album-label" placeholder="Label" />
    <input type="text" name="sales" id="album-sales" placeholder="Sales" />

    <button type="submit">post</button>
  </form>
</div>
</section>`;

export function showCreate(ctx) {
  ctx.render(createTemp(createSubmitHandler(onCreate)));

  async function onCreate({singer, album, imageUrl, release, label, sales}) {

    if (!singer || !album || !imageUrl || !release || !label || !sales) {
        return alert('All fields are required!');
    }
      await createPost({
        singer,
        album,
        imageUrl,
        release,
        label,
        sales
      });
      
      ctx.page.redirect('/');

  }
}