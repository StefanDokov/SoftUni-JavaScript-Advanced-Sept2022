function solve() {

    let btnadd = document.querySelector(`#add`);
    btnadd.addEventListener(`click`, making);
    const taksinp = document.getElementById('task');
    const descinp = document.getElementById('description');
    const dateinp = document.getElementById('date');

    const [s,colOpen, colInProgress, colComplete] =
        Array.from(document.querySelectorAll('section'))
            .map(s=>s.children[1]);

    function making(event) {
        event.preventDefault();
        
       
            let art = document.createElement(`article`);


            let htri = document.createElement(`h3`);
            htri.textContent = taksinp.value;
            
            let pone = document.createElement(`p`);
            pone.textContent = `Description: ${descinp.value}`;
            
            let ptwo = document.createElement(`p`);
            ptwo.textContent = `Due Date: ${dateinp.value}`;
            

            let divo = document.createElement(`div`);
            divo.classList.add(`flex`);

            let btngdiv = document.createElement(`button`);
            btngdiv.classList.add(`green`);
            btngdiv.textContent = `Start`;
            btngdiv.addEventListener(`click`, nexto);

            let btnrdiv = document.createElement(`button`);
            btnrdiv.classList.add(`red`);
            btnrdiv.textContent = `Delete`;
            btnrdiv.addEventListener(`click`, delo);

            divo.appendChild(btngdiv);
            divo.appendChild(btnrdiv);
            
            
            let btnodiv = document.createElement(`button`);
            btnodiv.classList.add(`orange`);
            btnodiv.textContent = `Finish`;
            btnodiv.addEventListener(`click`, finito);

            art.appendChild(htri);
            art.appendChild(pone);
            art.appendChild(ptwo);
            art.appendChild(divo);
            colOpen.appendChild(art);

            function delo() {
                
                art.remove();
            }
        
            function nexto() {
                
                
                btngdiv.remove();
                divo.appendChild(btnodiv);
                colInProgress.appendChild(art);
                
                
                
            }
        
            function finito() {
                
                divo.remove();
                colComplete.append(art);
        
            }

           

            
        }
}