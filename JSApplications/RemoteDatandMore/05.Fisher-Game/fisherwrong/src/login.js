document.getElementById(`user`).style.display = `none`;
document.getElementById(`home`).classList.remove(`active`);
document.getElementById(`login`).classList.add(`active`);

document.getElementById(`login-form`).addEventListener(`submit`, lognow);

    async function lognow(e) {
        e.preventDefault();

        let usero = new FormData(e.target);

        let { email, password } = Object.fromEntries(usero.entries());

        let resp = await fetch(`http://localhost:3030/users/login`, {
            method: `post`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        if (resp.status != 200) {
            document.getElementsByClassName(`notification`)[0].textContent = `Error`;
            setTimeout(() => {
                document.getElementsByClassName(`notification`)[0].textContent = ``;
            }, 2000);
        } else {

            let respdata = await resp.json();
            sessionStorage.clear();
            sessionStorage.setItem(`usera`, respdata._id);
            sessionStorage.setItem(`accessToken`, respdata.accessToken);
            sessionStorage.setItem(`usero`, email);
            window.location = `./index.html`;
            
        }

    }