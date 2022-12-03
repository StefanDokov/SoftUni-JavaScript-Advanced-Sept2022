import {html, render} from '../node_modules/lit-html/lit-html.js'
import {navi} from './app.js'
let mainbod = document.querySelector(`main`);

let mainRend = () => html`<section id="home">
<img
  src="./images/pngkey.com-hunting-png-6697165-removebg-preview.png"
  alt="home"
/>
<h2>Searching for a job?</h2>
<h3>The right place for a new career start!</h3>
</section>`;

export function homeRend() {
    render(mainRend(), mainbod);
    navi();
}