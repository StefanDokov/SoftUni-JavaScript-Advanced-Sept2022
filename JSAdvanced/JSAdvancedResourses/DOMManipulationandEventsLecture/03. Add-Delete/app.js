function addItem() {
    let list = document.getElementById(`items`);
    let text = document.getElementById(`newItemText`).value;
    let create = document.createElement(`li`);
    let al = document.createElement('a');
    let lin = document.createTextNode(`[Delete]`);
    al.appendChild(lin);
    al.href = "#";
    al.addEventListener(`click`, function (event) {
        event.target.parentElement.remove();
    });
    create.innerText = text;
    create.appendChild(al);
    list.appendChild(create);
    document.getElementById(`newItemText`).value = "";

}
