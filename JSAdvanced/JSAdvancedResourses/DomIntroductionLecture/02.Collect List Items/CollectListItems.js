function extractText() {
    let listItems = document.querySelectorAll(`ul li`);
    let textarea = document.getElementById(`result`);
    for (let listItem of listItems){
        textarea.value += listItem.textContent + '\n';
    }
}