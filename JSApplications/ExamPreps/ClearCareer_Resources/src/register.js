import { html, render } from '../node_modules/lit-html/lit-html.js'
import {navi} from './app.js'
let mainbod = document.querySelector(`main`);

let regRend = () => html`<section id="register">
<div class="form">
  <h2>Register</h2>
  <form class="login-form">
    <input
      type="text"
      name="email"
      id="register-email"
      placeholder="email"
    />
    <input
      type="password"
      name="password"
      id="register-password"
      placeholder="password"
    />
    <input
      type="password"
      name="repassword"
      id="repeat-password"
      placeholder="repeat password"
    />
    <button type="submit" @click=${registero}>register</button>
    <p class="message">Already registered? <a href="/login">Login</a></p>
  </form>
</div>
</section>`;

export function regRender() {
  render(regRend(), mainbod);
  
}

export async function registero() {

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    let email = document.getElementById(`register-email`).value;
    let password = document.getElementById(`register-password`).value;
    let repassword = document.getElementById(`repeat-password`).value;
   
try {
  if (!email.match(validRegex)){
    return alert("Wrong email credentials");
  } else if (!password || !email) {
    return alert("All fields are required!");
  } else if (password != repassword) {
    return alert("Password don't match");
  } else {
    let resp = await fetch('http://localhost:3030/users/register', {
      method: 'post',
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
}
  } catch(err) {
    window.alert(err);
    
  }
  }
