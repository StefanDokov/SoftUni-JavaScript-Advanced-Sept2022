function addItem() {
    let list = document.getElementById(`items`);
    let text = document.getElementById(`newItemText`).value;
    let create = document.createElement(`li`);
    create.textContent = text;
    list.appendChild(create);

    console.log();
}