function lockedProfile() {

    let maindiv = document.getElementById(`main`);
    let divove = document.getElementsByClassName(`profile`)[0];

    listing();
    async function listing() {

        let resulto = await fetch(`http://localhost:3030/jsonstore/advanced/profiles`);

        if (resulto.status == 204) {
            return;
        }
        let resdata = await resulto.json();

        if (Object.keys(resdata).length < 1) {
            return;
        }
        if (Object.keys(resdata).length >= 1) {

            let i = 0;
            for (let y in resdata) {
                let userinp = document.getElementsByName(`user1Username`);
                let emailinp = document.getElementsByName(`user1Email`);
                let ageinp = document.getElementsByName(`user1Age`);
                if (i == 0) {
                    userinp[i].setAttribute(`value`, `${resdata[y].username}`);
                    emailinp[i].setAttribute(`value`, `${resdata[y].email}`);
                    ageinp[i].setAttribute(`value`, `${resdata[y].age}`);
                    i++;
                    let s = document.getElementsByClassName(`user1Username`);
                    for (let k of s) {
                        k.style.display = `none`;
                    }
                } else {
                    let g = divove.cloneNode(true);
                    maindiv.appendChild(g);
                    userinp[i].setAttribute(`value`, `${resdata[y].username}`);
                    emailinp[i].setAttribute(`value`, `${resdata[y].email}`);
                    ageinp[i].setAttribute(`value`, `${resdata[y].age}`);
                    i++;
                    let s = document.getElementsByClassName(`user1Username`);
                    for (let k of s) {
                        k.style.display = `none`;
                    }
                }
            }
        }



        let o = document.querySelectorAll(`input[type=radio]`);
        let r = 1;
        for (let t = 0; t < o.length; t += 2) {
            o[t].setAttribute(`name`, `user${r}Locked`);
            o[t + 1].setAttribute(`name`, `user${r}Locked`);
            r++;
        }
        let x = document.querySelectorAll(`input[type=text]`);
        let z = 1;
        for (let w = 0; w < x.length; w += 2) {
            x[w].setAttribute(`name`, `user${z}Username`);
            x[w + 1].setAttribute(`name`, `user${z}Age`);
            x[w + 1].setAttribute(`type`, `email`);
            z++;
        }
        let l = document.querySelectorAll(`input[type=email]`);
        let m = 1;
        for (let vo of l) {
            vo.setAttribute(`name`, `user${m}Email`);
            m++;
        }


        let but = document.getElementsByTagName(`button`);
        for (let el of but) {
            el.addEventListener(`click`, show);
        }


        function show(e) {


            let lok = e.target.parentElement.querySelectorAll(`input[type=radio]`);
            if (lok[1].checked && e.target.textContent == "Show more") {
                e.target.parentElement.querySelector(`div`).style.display = `block`;
                e.target.textContent = `Hide it`;


            } else if (lok[1].checked && e.target.textContent == "Hide it") {
                e.target.parentElement.querySelector(`div`).style.display = `none`;
                e.target.textContent = `Show more`;

            }

        }

    }


}