function focused() {
    let dif = document.getElementsByTagName(`input`);
    for (let inp of dif) {
        inp.addEventListener(`focus`, focusInp);
        inp.addEventListener(`blur`, blurInp);
    }

    function focusInp(event){
        event.target.parentElement.classList.add(`focused`);

    }

    function blurInp(event){
       event.target.parentElement.classList.remove(`focused`);
    }
}