import { editPost, getById } from "../api/data.js";
import { html } from "../lib.js"
import { createSubmitHandler } from "../util.js";

const editTemp = (info, onEdit) => html ` <section id="edit">
<div class="form">
  <h2>Edit Album</h2>
  <form class="edit-form" @submit=${onEdit}>
    <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value=${info.singer}/>
    <input type="text" name="album" id="album-album" placeholder="Album" .value=${info.album}/>
    <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value=${info.imageUrl}/>
    <input type="text" name="release" id="album-release" placeholder="Release date" .value=${info.release}/>
    <input type="text" name="label" id="album-label" placeholder="Label" .value=${info.label}/>
    <input type="text" name="sales" id="album-sales" placeholder="Sales" .value=${info.sales}/>

    <button type="submit">post</button>
  </form>
</div>
</section>`;

export async function editShow(ctx) {
   let id = ctx.params.id;

   let res = await getById(id);

   ctx.render(editTemp(res, createSubmitHandler(onEdit)));

async function onEdit({ singer, album, imageUrl, release, label, sales}){

   if (!singer || !album || !imageUrl || !release || !label || !sales) {
      return alert('All fields are required!');
   }

    await editPost(id, {
        singer,
        album,
        imageUrl,
        release,
        label,
        sales

    });
    
    ctx.page.redirect('/post/' + id);

}

} 