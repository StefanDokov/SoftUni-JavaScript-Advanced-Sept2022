import { logout } from './api/user.js';
import {page , render} from './lib.js'
import { getUserData } from './util.js';
import { showCreate } from './views/create.js';
import { dashRend } from './views/dashboard.js';
import { editShow } from './views/edit.js';
import { homeRend } from './views/home.js';
import { showLogin } from './views/login.js';
import { showDetail } from './views/postDetail.js';
import { showRegister } from './views/register.js';
import { searchRend } from './views/search.js';

document.getElementById('logOutBtn').addEventListener(`click`, onLogout);
let root = document.querySelector(`main`);

page(decorateContext); 
page('/index.html', '/');
page('/', updateNav, homeRend);
page('/dashboard', updateNav, dashRend);
page('/post/:id', updateNav, showDetail);
page('/edit/:id', updateNav, editShow);
page('/search', updateNav, searchRend);
page('/myposts/:id', () => console.log('myposts'));
page('/create', updateNav, showCreate);
page('/login',updateNav, showLogin);
page('/register',updateNav, showRegister);

page.start()

function decorateContext(ctx, next){
    ctx.render = renderRoot;
    ctx.updateNav = updateNav;
    next();
}

function renderRoot(content){
    render(content, root);
}

function updateNav(ctx, next){
   let user = getUserData();
   if (!user) {
    document.querySelector(`.user`).style.display = 'none';
    document.querySelector(`.guest`).style.display = 'inline-block';
   } else {
    document.querySelector(`.user`).style.display = 'inline-block';
    document.querySelector(`.guest`).style.display = 'none';
   }
   next();
}

function onLogout(){
    logout();
    page.redirect('/dashboard');
}

