function solution() {
    let mainspace = document.getElementById(`main`);
    
    geterino();

    async function geterino(){
       try {
        let res = await fetch(`http://localhost:3030/jsonstore/advanced/articles/list`);


        let resdata = await res.json();
        if (resdata.length < 1){
            return;
        }

        for (let el of resdata){
            let gg = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${el._id}`);
            if (gg.ok == false){
                throw new Error(`Error`);
            }
            let ggdata = await gg.json();
            let divaccor = document.createElement(`div`);
            divaccor.classList.add(`accordion`);
            let divhead = document.createElement(`div`);
            divhead.classList.add(`head`);
            let divextra = document.createElement(`div`);
            divextra.classList.add(`extra`);
            let pel = document.createElement(`p`);
            pel.innerText = ggdata.content;
            let spantitle = document.createElement(`span`);
            spantitle.innerText = el.title;
            let btnz = document.createElement(`button`);
            btnz.classList.add(`button`);
            btnz.textContent = `More`;
            btnz.setAttribute(`id`,el._id);
            btnz.addEventListener(`click`, showme);
            divhead.appendChild(spantitle);
            divhead.appendChild(btnz);
            divextra.appendChild(pel);
            divaccor.appendChild(divhead);
            divaccor.appendChild(divextra);
            mainspace.appendChild(divaccor);
            

            function showme(){
                if (btnz.textContent == `More`){
                    btnz.textContent = "Less";
                    divextra.style.display = `block`;
                    

                } else if (btnz.textContent == `Less`){
                    btnz.textContent = `More`;
                    divextra.style.display = `none`;
                    
                }
            }
        }
       
    } catch (err) {
        console.log(err);
    }
}
   
}
solution();