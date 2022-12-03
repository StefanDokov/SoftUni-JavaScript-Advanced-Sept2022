window.addEventListener('load', solve);

function solve(e) {
    
    let producType = document.getElementById(`type-product`);
    let subBtn = document.querySelectorAll(`button[type=submit]`)[0];
    let descrip = document.getElementById(`description`);
    let clientName = document.getElementById(`client-name`);
    let clientPhone = document.getElementById(`client-phone`);
    let receiveSec = document.getElementById(`received-orders`);
    let completeSec = document.getElementById(`completed-orders`);
    let clearBtn = document.getElementsByClassName(`clear-btn`)[0];
    clearBtn.addEventListener(`click`, deleto);

    subBtn.addEventListener(`click`, go);

    function deleto() {
        let divsfordel = document.querySelectorAll(`section[id=completed-orders] div[class=container]`);
        for (let el of divsfordel) {
            el.remove();
        }

    }

    function createElement(type, value, className) {
        const element =  document.createElement(type);
        element.textContent = value;
        if (className){
            element.classList.add(className);
        }
        return element
    }

    function go(e){
        
        e.preventDefault();
        if (!descrip.value || !clientName.value || !clientPhone.value){
            return;
        }
        let textEr = document.createElement(`div`);
        textEr.classList.add(`container`);
        textEr.appendChild(createElement("h2",`Product type for repair: ${producType.value}`));
        textEr.appendChild(createElement("h3",`Client information: ${clientName.value}, ${clientPhone.value}`));
        textEr.appendChild(createElement(`h4`,`Description of the problem: ${descrip.value}`));

        let startBtn = document.createElement(`button`);
        startBtn.classList.add(`start-btn`);
        startBtn.textContent = "Start repair"
        let finishBtn = document.createElement(`button`);
        finishBtn.classList.add(`finish-btn`);
        finishBtn.textContent = `Finish repair`
        finishBtn.disabled = true;

        startBtn.addEventListener(`click`, proces);
        finishBtn.addEventListener(`click`, finishing);

        textEr.appendChild(startBtn);
        textEr.appendChild(finishBtn);

        receiveSec.appendChild(textEr);
        descrip.value = "";
        clientName.value = "";
        clientPhone.value = "";
        producType.value = `Computer`;


        function proces(){
            startBtn.disabled = true;
            finishBtn.disabled = false;

        }
        function finishing(){
            startBtn.remove();
            finishBtn.remove();
            completeSec.appendChild(textEr);
            

        }
    }
}