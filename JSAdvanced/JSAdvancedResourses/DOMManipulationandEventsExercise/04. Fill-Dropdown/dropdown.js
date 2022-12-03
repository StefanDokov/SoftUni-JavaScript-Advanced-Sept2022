function addItem() {
    let menuu = document.getElementById(`menu`);
    let inpone = document.getElementById(`newItemText`).value;
    let inptwo = document.getElementById(`newItemValue`).value;
    let op = document.createElement(`option`);
    op.value = inptwo;
    op.textContent = inpone;
    menuu.appendChild(op);
    document.getElementById(`newItemText`).value = "";
    document.getElementById(`newItemValue`).value = "";
}