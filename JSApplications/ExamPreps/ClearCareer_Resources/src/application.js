import {html, render} from '../node_modules/lit-html/lit-html.js'
import {defailF} from './offerdetails.js'
import page from '../node_modules/page/page.mjs'
import {navi} from './app.js'
let mainbod = document.querySelector(`main`);

export async function postApplication(ctx) {
    
    let offerId = ctx.params.id;
    let token = sessionStorage.getItem('accessToken');
    try{
    let res = await fetch(`http://localhost:3030/data/applications`, {
    method: `post`,
    headers: {
        'Content-Type': 'application/json',
        'X-Authorization': token
    },
    body: JSON.stringify({ offerId })
  });

    ctx.page.redirect('/dashboard/' + offerId);
    navi();
} catch(err){
    window.alert(err);
}
}

export async function countApps(el) {
    
    let res = await fetch(`http://localhost:3030/data/applications?where=offerId%3D%22${el}%22&distinct=_ownerId&count`)
    let resdata = await res.json();
    return resdata
}

export async function didUclick(ofer, el) {
  let res = await fetch(`http://localhost:3030/data/applications?where=offerId%3D%22${ofer}%22%20and%20_ownerId%3D%22${el}%22&count`);
  let resdata = await res.json();
  return resdata;
} 

