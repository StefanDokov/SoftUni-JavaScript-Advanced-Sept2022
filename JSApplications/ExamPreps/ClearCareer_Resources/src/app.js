import { html, render} from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
import { homeRend } from './home.js'
import { regRender, registero } from './register.js'
import { logRender, logino } from './login.js'
import { logouting } from './logout.js'
import { dashbordRend } from './dashboard.js'
import { createRender} from './newoffer.js'
import { defailF } from './offerdetails.js'
import {deleteOf, editOf} from './edit.js'
import {postApplication} from './application.js'
document.querySelectorAll(`section`).forEach(el => el.remove());

export function navi(){
if (!sessionStorage.getItem(`usera`)) {
    document.getElementsByClassName(`user`)[0].style.display = `none`;
} else if (sessionStorage.getItem(`usera`)){
    document.getElementsByClassName(`guest`)[0].style.display = `none`;
}
}

page('/index.html', '/');
page('/', homeRend);
page('/login', logRender);
page('/register', regRender);
page('/logout', logouting);
page('/createoffer', createRender);
page('/dashboard', dashbordRend);
page('/dashboard/edit/:id', editOf);
page('/dashboard/delete/:id', deleteOf);
page('/dashboard/application/:id', postApplication);
page('/dashboard/:id', defailF);
page('*', homeRend);
page.start();




