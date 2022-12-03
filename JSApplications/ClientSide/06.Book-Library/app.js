import { html, render } from "./node_modules/lit-html/lit-html.js";

let root = document.querySelector(`body`);

let startWin = () => html`<button id="loadBooks" @click=${loading}>LOAD ALL BOOKS</button>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>
<form id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>`;

    let editWin = () => html`<button id="loadBooks" @click=${loading}>LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    <form id="edit-form">
    <input type="hidden" name="id">
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Save">
</form>`;

render(startWin(), root);

document.getElementById(`add-form`).addEventListener(`submit`, creato);

let rowtemp = (obj) => html`<tr>
<td>${obj[1].title}</td>
<td>${obj[1].author}</td>
<td>
    <button @click=${edito} id="${obj[0]}">Edit</button>
    <button @click=${delito} id="${obj[0]}">Delete</button>
</td>
</tr>`

async function loading(e){
    let rootRow = document.querySelector(`tbody`);
    let res = await fetch(`http://localhost:3030/jsonstore/collections/books`);
    let resdata = await res.json();
    
    let arritemi = Object.entries(resdata);
    
    render(arritemi.map(rowtemp), rootRow);
    
}

function edito(e){
    
    render(editWin(), root);
    loading()
    document.getElementsByName(`title`)[0].value = e.target.parentElement.parentElement.children[0].textContent;
    document.getElementsByName(`author`)[0].value = e.target.parentElement.parentElement.children[1].textContent;
    let idto = e.target.id;
    document.getElementById(`edit-form`).addEventListener(`submit`, updito);

    async function updito(e) {
        e.preventDefault();
        
        let dataF = new FormData(e.target);

        let { title, author} = Object.fromEntries(dataF.entries());
        if (!title || !author){
            return;
        }
        
        let resu = await fetch(`http://localhost:3030/jsonstore/collections/books/${idto}`, {
            method: `put`,
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({ title, author})
        })
        render(startWin(),root);
        document.getElementById(`add-form`).addEventListener(`submit`, creato);
        loading()
        
    }
}

async function delito(e){
   
    let res = await fetch(`http://localhost:3030/jsonstore/collections/books/${e.target.id}`,{
        method: `delete`,
        headers: {
           'Content-Type': 'application/json'
        }
        
    })
    render(startWin(),root);
    document.getElementById(`add-form`).addEventListener(`submit`, creato);
    loading()
    
}

async function creato(e){
    e.preventDefault();
    
    let dataff = new FormData(e.target)

    let { title, author} = Object.fromEntries(dataff.entries());

    if (!title || !author) {
        return;
    }

    let res = await fetch(`http://localhost:3030/jsonstore/collections/books`, {
        method: `post`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, author})
    })
    document.getElementsByName(`title`)[0].value = "";
    document.getElementsByName(`author`)[0].value = "";

    render(startWin(), root);
    document.getElementById(`add-form`).addEventListener(`submit`, creato);
    loading()

}