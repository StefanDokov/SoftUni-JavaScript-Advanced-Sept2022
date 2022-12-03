document.getElementById(`user`).style.display = `none`;
let secinf = document.getElementById(`home-view`);
document.getElementById(`views`).remove();
let loadonn = false;
let loadbtnn = false;
document.getElementById(`logout`).addEventListener(`click`, logouting);

document.getElementsByTagName(`main`)[0].appendChild(secinf);
document.getElementById(`catches`).innerHTML = "";
document.getElementsByClassName(`load`)[0].addEventListener(`click`, loadingbe);

async function loadingbe() {
    if (sessionStorage.getItem(`usera`)){
        document.getElementById(`guest`).style.display = `none`;
    } else {
        document.getElementById(`user`).style.display = `none`;
    }
    loadonn = true;
    if (!loadbtnn) {
        loadbtnn = true;
        document.getElementsByClassName(`load`)[0].disabled = true;
        
    }

    document.getElementById(`catches`).innerHTML = "";

    let r = await fetch(`http://localhost:3030/data/catches`);
    let datar = await r.json();

    for (let el of datar) {
        
        let sect = document.createElement(`div`);
        sect.classList.add(`catch`);
        sect.innerHTML = `<label>Angler</label>
    <input type="text" class="angler" value="${el.angler}">
    <label>Weight</label>
    <input type="text" class="weight" value="${el.weight}">
    <label>Species</label>
    <input type="text" class="species" value="${el.species}">
    <label>Location</label>
    <input type="text" class="location" value="${el.location}">
    <label>Bait</label>
    <input type="text" class="bait" value="${el.bait}">
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${el.captureTime}">
    <button class="update" data-id='${el._ownerId}' id='${el._id}'>Update</button>
    <button class="delete" data-id='${el._ownerId}' id='${el._id}'>Delete</button>
`;
        document.getElementById(`catches`).appendChild(sect);
    }

    document.getElementById(`main`).style.display = `inline-block`;
    let delbtnz = document.getElementsByClassName(`delete`);
    for (let el of delbtnz) {
        el.addEventListener(`click`, delition);
        if (el.dataset.id != sessionStorage.getItem(`usera`)) {
            el.disabled = true;
        }
    }
    let updatebtnz = document.getElementsByClassName(`update`);
    for (let ro of updatebtnz) {
        ro.addEventListener(`click`, updatino)
        if (ro.dataset.id != sessionStorage.getItem(`usera`)) {
            ro.disabled = true;
            for (let i = 1;i <= 11; i += 2){
                ro.parentElement.children[i].disabled = true;
            }
            
        }
    }
    

}

document.getElementById(`register`).addEventListener(`click`, reglist);
function reglist() {

    document.getElementsByTagName(`main`)[0].innerHTML = "";
    document.getElementsByTagName(`main`)[0].innerHTML = `<section id="register-view">
        <h2>Register</h2>
        <form id="register-form">
            <label>Email: <input type="text" name="email"></label>
            <label>Password: <input type="password" name="password"></label>
            <label>Repeat: <input type="password" name="rePass"></label>
            <p class="notification"></p>
            <button>Register</button>
        </form>
    </section>`;

    document.getElementById(`register-form`).addEventListener(`submit`, reging);

    async function reging(ev) {
        ev.preventDefault();

        let dataForm = new FormData(ev.target);
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
            document.querySelector(`p span`).textContent = email;
            document.getElementsByTagName(`main`)[0].innerHTML = "";
            
            document.getElementsByTagName(`main`)[0].appendChild(secinf);
            
            
            document.getElementsByClassName(`add`)[0].disabled = false;
            loadingbe();
            homecoming();

        }

    }
}
document.getElementById(`login`).addEventListener(`click`, loglist);

function loglist() {
    

    document.getElementsByTagName(`main`)[0].innerHTML = "";
    document.getElementsByTagName(`main`)[0].innerHTML = `<section id="login-view">
    <h2>Login</h2>
    <form id="login-form">
        <label>Email: <input type="text" name="email"></label>
        <label>Password: <input type="password" name="password"></label>
        <p class="notification"></p>
        <button>Login</button>
    </form>
</section>`;
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
            document.querySelector(`p span`).textContent = email;
            document.getElementsByTagName(`main`)[0].innerHTML = "";
            document.getElementsByTagName(`main`)[0].appendChild(secinf);
            
            
            document.getElementsByClassName(`add`)[0].disabled = false;
            loadingbe();
            homecoming();
        }

    }

}

document.querySelector(`a[id=home]`).addEventListener(`click`, homecoming);

function homecoming() {

    document.getElementsByTagName(`main`)[0].innerHTML = "";
    document.getElementsByTagName(`main`)[0].appendChild(secinf);
    let b = document.querySelectorAll(`a`);
    for (let el of b) {
        el.classList.remove(`active`);
    }
    b[0].classList.add(`active`);
    

}

document.getElementById(`addForm`).addEventListener(`submit`, creating);

async function creating(e) {
    e.preventDefault();
    let token = sessionStorage.getItem(`accessToken`);
    let rawinfo = new FormData(e.target);

    let { angler, weight, species, location, bait, captureTime } = Object.fromEntries(rawinfo.entries());
    if (!angler || !weight || !species || !location || !bait || !captureTime) {
        return;
    }
    let resp = await fetch(`http://localhost:3030/data/catches`, {
        method: `post`,
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token

        },
        body: JSON.stringify({ angler, weight, species, location, bait, captureTime })
    })
    let gigi = document.querySelectorAll(`form fieldset input`);
    for (let el of gigi) {
        el.value = "";
    }
    loadingbe();

}

async function delition(e) {
    let token = sessionStorage.getItem('accessToken');
    let res = await fetch(`http://localhost:3030/data/catches/${e.target.id}`, {
        method: `delete`,
        headers: {
            'X-Authorization': token
        }
    })

    if (res.status != 200) {
        return;
    }
    e.target.parentElement.remove();


}

async function updatino(e) {
    let token = sessionStorage.getItem('accessToken');
    let angler = e.target.parentElement.children[1].value;
    let weight = e.target.parentElement.children[3].value;
    let species = e.target.parentElement.children[5].value;
    let location = e.target.parentElement.children[7].value;
    let bait = e.target.parentElement.children[9].value;
    let captureTime = e.target.parentElement.children[11].value;
    if (!angler || !weight || !species || !location || !bait || !captureTime) {
        return;
    }
    let res = await fetch(`http://localhost:3030/data/catches/${e.target.id}`, {
        method: `put`,
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ angler, weight, species, location, bait, captureTime })
    })
    if (res.status != 200) {
        return;
    }
    loadingbe();

}

async function logouting() {
    let token = sessionStorage.getItem(`accessToken`);
    let res = await fetch(`http://localhost:3030/users/logout`, {
        method: `get`,
        headers: {
            'X-Authorization': token
        }
    })
    sessionStorage.clear();
    sessionStorage.setItem(`usera`, `guest`);
    document.querySelector(`p span`).textContent = `guest`;
    document.getElementById(`user`).style.display = `none`;
    document.getElementById(`guest`).style.display = `inline-block`;
    document.getElementsByClassName(`add`)[0].disabled = true;
    loadonn = false;
    document.getElementById(`main`).style.display = `none`;
    homecoming();
}
