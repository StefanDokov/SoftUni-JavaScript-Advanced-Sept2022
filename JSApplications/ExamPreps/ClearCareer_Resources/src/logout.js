import {navi} from './app.js'
export async function logouting() {
    let token = sessionStorage.getItem(`accessToken`);
    let res = await fetch(`http://localhost:3030/users/logout`, {
        method: `get`,
        headers: {
            'X-Authorization': token
        }
    })
    sessionStorage.clear();
    window.location = '/';
    navi();
}