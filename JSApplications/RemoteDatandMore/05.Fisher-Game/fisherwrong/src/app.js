let dataUser = null;
let onandon = false;
dataUser = sessionStorage.getItem(`usero`);
if (dataUser != null && dataUser != `guest`) {
    document.querySelectorAll(`p span`)[0].textContent = dataUser;
    document.getElementsByClassName(`add`)[0].disabled = false;
    document.getElementById(`addForm`).addEventListener(`submit`, creating);
    document.getElementById(`user`).style.display = `inline-block`;
    document.getElementById(`guest`).style.display = `none`;
    document.getElementById(`logout`).addEventListener(`click`,logouting);
    onandon = true;
}
if (!onandon) {
    document.getElementById(`user`).style.display = `none`;
    document.getElementById(`guest`).style.display = `inline-block`;
    
}

let sectionCatches = document.getElementById(`main`);
let pintro = document.createElement(`p`);
pintro.textContent = `Click to load catches`;

document.getElementById(`main`).style.display = `none`;
document.getElementsByTagName(`main`)[0].prepend(pintro);
document.getElementsByClassName(`load`)[0].addEventListener(`click`, loadingbe);
if (onandon){
    loadingbe();
}
async function loadingbe() {
    pintro.remove();
    
    document.getElementById(`catches`).innerHTML = "";
    let r = await fetch(`http://localhost:3030/data/catches`);
    let datar = await r.json();
    
    for (let el of datar) {
        
        let sect = document.createElement(`div`);
        sect.classList.add(`catch`);
        sect.innerHTML = `<label>Angler</label>
        <input type="text" class="angler" value=${el.angler}>
        <label>Weight</label>
        <input type="text" class="weight" value=${el.weight}>
        <label>Species</label>
        <input type="text" class="species" value=${el.species}>
        <label>Location</label>
        <input type="text" class="location" value=${el.location}>
        <label>Bait</label>
        <input type="text" class="bait" value=${el.bait}>
        <label>Capture Time</label>
        <input type="number" class="captureTime" value=${el.captureTime}>
        <button class="update" data-id='${el._ownerId}' id=${el._id}>Update</button>
        <button class="delete" data-id='${el._ownerId}' id=${el._id}>Delete</button>
    `;
    document.getElementById(`catches`).appendChild(sect);
    }
    
    document.getElementById(`main`).style.display = `inline-block`;
    let delbtnz = document.getElementsByClassName(`delete`);
    for (let el of delbtnz) {
        el.addEventListener(`click`, delition);
        if (el.dataset.id != sessionStorage.getItem(`usera`)){
            el.disabled = true;
        } 
    }
    let updatebtnz = document.getElementsByClassName(`update`);
    for (let ro of updatebtnz){
        ro.addEventListener(`click`, updatino)
        if (ro.dataset.id != sessionStorage.getItem(`usera`)){
            ro.disabled = true;
        }
    }
    
    }
    async function delition(e) {
        let token = sessionStorage.getItem('accessToken');
        let res = await fetch(`http://localhost:3030/data/catches/${e.target.id}`,{
            method: `delete`,
            headers: {
                'X-Authorization': token
            }
        })
        
        if (res.status != 200){
            return;
        } 
        e.target.parentElement.remove();
        
        loadingbe();
    }
    async function updatino(e) {
        let token = sessionStorage.getItem('accessToken');
        let angler = e.target.parentElement.children[1].value;
        let weight = e.target.parentElement.children[3].value;
        let species = e.target.parentElement.children[5].value;
        let location = e.target.parentElement.children[7].value;
        let bait = e.target.parentElement.children[9].value;
        let captureTime = e.target.parentElement.children[11].value;
        if (!angler || !weight || !species || !location || !bait || !captureTime){
            return;
        }
        let res = await fetch(`http://localhost:3030/data/catches/${e.target.id}`, {
            method: `put`,
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify({ angler, weight, species, location, bait, captureTime})
        })
        if (res.status != 200){
            return;
        } 
            loadingbe();
        
    }
    async function creating(e){
        e.preventDefault();
        let token = sessionStorage.getItem(`accessToken`);
        let rawinfo = new FormData(e.target);
        
        let {angler, weight, species, location, bait, captureTime} = Object.fromEntries(rawinfo.entries());
        if (!angler || !weight || !species || !location || !bait || !captureTime){
            return;
        }
        let resp = await fetch(`http://localhost:3030/data/catches`, {
            method: `post`,
            headers: {
              'Content-Type': 'application/json',
              'X-Authorization': token
        
            },
            body: JSON.stringify({angler, weight, species, location, bait, captureTime})
        })
          let gigi = document.querySelectorAll(`form fieldset input`);
          for (let el of gigi) {
            el.value = "";
          }
          loadingbe();
        
        }

        async function logouting(){
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
            document.getElementById(`main`).style.display = `none`;
            document.getElementsByTagName(`main`)[0].prepend(pintro);
        }
    