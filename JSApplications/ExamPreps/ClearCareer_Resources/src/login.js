import {html, render} from '../node_modules/lit-html/lit-html.js'
import {navi} from './app.js'
let mainbod = document.querySelector(`main`);

let logRend = () => html`<section id="login">
<div class="form">
  <h2>Login</h2>
  <form class="login-form">
    <input type="text" name="email" id="email" placeholder="email" />
    <input
      type="password"
      name="password"
      id="password"
      placeholder="password"
    />
    <button type="submit" @click=${logino}>login</button>
    <p class="message">
      Not registered? <a href="/register">Create an account</a>
    </p>
  </form>
</div>
</section>`;

export function logRender() {
    render(logRend(), mainbod);
    
}

export async function logino(e){
  e.preventDefault();

  let email = document.getElementById(`email`).value;

  let password = document.getElementById(`password`).value;
  try{
    if (!password || !email) {
      return alert("All fields are required!");
    }
  let resp = await fetch(`http://localhost:3030/users/login`, {
      method: `post`,
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
  })
  if (resp.status != 200) {
      throw new Error();
  } else {

      let respdata = await resp.json();
      sessionStorage.clear();
      sessionStorage.setItem(`usera`, respdata._id);
      sessionStorage.setItem(`accessToken`, respdata.accessToken);
      window.location = '/';
      navi();
  }
} catch(err) {
  window.alert(err);
}

}
