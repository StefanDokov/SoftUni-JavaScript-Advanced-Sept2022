import { login, register } from "../api/user.js";
import { html } from "../lib.js"
import { createSubmitHandler } from "../util.js";


const registerTemp = (onRegister) => html`<section id="register-page" class="auth">
<form id="register" @submit=${onRegister}>
    <h1 class="title">Register</h1>

    <article class="input-group">
        <label for="register-email">Email: </label>
        <input type="email" id="register-email" name="email">
    </article>

    <article class="input-group">
        <label for="register-password">Password: </label>
        <input type="password" id="register-password" name="password">
    </article>

    <article class="input-group">
        <label for="repeat-password">Repeat Password: </label>
        <input type="password" id="repeat-password" name="repeatPassword">
    </article>

    <input type="submit" class="btn submit-btn" value="Register">
</form>
</section>`;

export function showRegister(ctx) {
  ctx.render(registerTemp(createSubmitHandler(onRegister)));

  async function onRegister({email, password, repeatPassword}) {

    if (!email || !password) {
        return alert('All fields are required!');
    }
    if (password != repeatPassword){
        return alert('Password don\'t match');
    }

      await register(email, password);
      ctx.page.redirect('/');

  }
}