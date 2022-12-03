function deleteByEmail() {
    let text = document.getElementsByName(`email`)[0].value;
    let list = document.querySelectorAll(`tbody tr`);
    for (let el of list){
        if (el.children[1].textContent == text){
            el.remove();
            document.getElementById(`result`).textContent = "Deleted.";
            return document.getElementsByName(`email`)[0].value = "";
        }
    }
    document.getElementById(`result`).textContent = `Not found.`;
    
}