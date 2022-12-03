function attachEvents() {

    document.getElementById(`btnLoad`).addEventListener(`click`, loading);
    let listnums = document.getElementById(`phonebook`);
    document.getElementById(`btnCreate`).addEventListener(`click`, createbe);

    async function loading() {
        listnums.innerHTML = "";
        let res = await fetch(`http://localhost:3030/jsonstore/phonebook`);
        if (res.status != 200) {
            return;
        }
        let resdata = await res.json();

        let g = Object.values(resdata);
        for (let el of g) {
            let liph = document.createElement(`li`);
            liph.textContent = `${el.person}: ${el.phone}`;
            liph.setAttribute(`id`, el._id);
            let btnde = document.createElement(`button`);
            btnde.innerText = `Delete`;
            btnde.addEventListener(`click`, delo);
            liph.appendChild(btnde);
            listnums.appendChild(liph);

        }

    }

    async function delo(e) {
        let movee = e.target.parentElement.id;
        let godel = await fetch(`http://localhost:3030/jsonstore/phonebook/${movee}`, {
            method: `delete`
        });
        if (godel.status != 200) {
            return;
        }
        let godeldata = await godel.json();
        loading();

    }

    async function createbe() {
        let perinp = document.getElementById(`person`);
        let phinp = document.getElementById(`phone`);

        if (!perinp.value || !phinp) {
            return;
        }

        let result = await fetch(`http://localhost:3030/jsonstore/phonebook`, {
            method: `post`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ person: perinp.value, phone: phinp.value })
        });

        let resultdata = await result.json();
        loading();
        perinp.value = "";
        phinp.value = "";
    }



}

attachEvents();