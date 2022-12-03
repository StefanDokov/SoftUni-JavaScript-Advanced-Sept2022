document.getElementById(`user`).style.display = `none`;
document.getElementById(`home`).classList.remove(`active`);
document.getElementById(`register`).classList.add(`active`);

document.getElementById(`register-form`).addEventListener(`submit`, reging);

async function reging(e) {
    e.preventDefault();

    let dataForm = new FormData(e.target);
    let { email, password, rePass } = Object.fromEntries(dataForm.entries());
    
    if (password != rePass || email == undefined || !password) {
        
        document.getElementsByClassName(`notification`)[0].textContent = `Error`;
        setTimeout(() => {
            document.getElementsByClassName(`notification`)[0].textContent = ``;
        }, 2000);
    } else {
       
        let r = await fetch(`http://localhost:3030/users/register`, {
            method: `post`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        let rdata = await r.json();

            sessionStorage.clear();
            sessionStorage.setItem(`usera`, rdata._id);
            sessionStorage.setItem(`accessToken`, rdata.accessToken);
            sessionStorage.setItem(`usero`, email);
        
        window.location = `./index.html`;
    

    }

}
