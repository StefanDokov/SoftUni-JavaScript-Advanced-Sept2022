import { editPost, getById } from "../api/data.js";
import { html } from "../lib.js"
import { createSubmitHandler } from "../util.js";

const editTemp = (info, onEdit) => html `<section id="edit-page" class="auth">
<form id="edit" @submit=${onEdit}>
    <h1 class="title">Edit Post</h1>

    <article class="input-group">
        <label for="title">Post Title</label>
        <input type="title" name="title" id="title" .value="${info.title}">
    </article>

    <article class="input-group">
        <label for="description">Description of the needs </label>
        <input type="text" name="description" id="description" .value="${info.description}">
    </article>

    <article class="input-group">
        <label for="imageUrl"> Needed materials image </label>
        <input type="text" name="imageUrl" id="imageUrl" .value="${info.imageUrl}">
    </article>

    <article class="input-group">
        <label for="address">Address of the orphanage</label>
        <input type="text" name="address" id="address" .value="${info.address}">
    </article>

    <article class="input-group">
        <label for="phone">Phone number of orphanage employee</label>
        <input type="text" name="phone" id="phone" .value="${info.phone}">
    </article>

    <input type="submit" class="btn submit" value="Edit Post">
</form>
</section>`;

export async function editShow(ctx) {
   let id = ctx.params.id;

   let res = await getById(id);

   ctx.render(editTemp(res, createSubmitHandler(onEdit)));

async function onEdit({ title, description, imageUrl, address, phone}){

   if (!title || !description || !imageUrl || !address || !phone) {
      return alert('All fields are required!');
   }

    await editPost(id, {
        title,
        description,
        imageUrl,
        address,
        phone

    });
    
    ctx.page.redirect('/post/' + id);

}

} 