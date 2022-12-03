function lockedProfile() {
    let but = document.getElementsByTagName(`button`);
    for (let el of but) {
        el.addEventListener(`click`, show);
    }

    function show(e){
        
       let lok = e.target.parentElement.querySelectorAll(`input[type=radio]`);
       if (lok[1].checked && e.target.textContent == "Show more") {
        e.target.parentElement.querySelector(`div`).style.display = `block`;
        e.target.textContent = `Hide it`;
        
       } else if (lok[1].checked && e.target.textContent == "Hide it"){
        e.target.parentElement.querySelector(`div`).style.display = `none`;
        e.target.textContent = `Show more`;
       }
       
    }
}