
let loadbookBtn = document.getElementById(`loadBooks`);

loadbookBtn.addEventListener(`click`, booklist);

let tbod = document.getElementsByTagName(`tbody`)[0];
tbod.innerHTML = "";
booklist();
document.getElementsByTagName(`form`)[0].addEventListener(`submit`, natiskane);

async function booklist(){

 let res = await fetch(`http://localhost:3030/jsonstore/collections/books`);
 let resdata = await res.json();
 
 tbod.innerHTML = "";

 for (let el in resdata){
    let trz = document.createElement(`tr`);
    trz.setAttribute(`id`, el);
    trz.innerHTML = `<td>${resdata[el].title}</td>
    <td>${resdata[el].author}</td>
    <td>
        <button>Edit</button>
        <button>Delete</button>
    </td>`;
    tbod.appendChild(trz);
 }
 let btns = document.querySelectorAll(`td button`);

 for (let btno of btns) {
    btno.addEventListener(`click`, butoni);
 }


}

async function butoni(e){
   if (e.target.innerText == `Edit`){
    document.getElementsByTagName(`h3`)[0].innerText = `Edit FORM`;
    document.querySelector(`form button`).innerText = `Save`;
    document.getElementsByName(`title`)[0].value = e.target.parentElement.parentElement.children[0].textContent;
    document.getElementsByName(`author`)[0].value = e.target.parentElement.parentElement.children[1].textContent;
    document.querySelector(`form button`).setAttribute(`id`, e.target.parentElement.parentElement.id);
    booklist();

   }
   if (e.target.innerText == "Delete"){
    let delid = e.target.parentElement.parentElement;
    let resu = await fetch(`http://localhost:3030/jsonstore/collections/books/${delid.id}`,{
        method: `delete`
    });
    booklist();
   }

}

async function natiskane(e){
    e.preventDefault();
    
    if (document.querySelector(`form button`).innerText == `Save`){
        let dataU = new FormData(e.target);
        let datatwo = Object.fromEntries(dataU.entries());
        if (!datatwo.title || !datatwo.author) {
            return;
        }
        console.log(document.querySelector(`form button`).id)
        let g = await fetch(`http://localhost:3030/jsonstore/collections/books/${document.querySelector(`form button`).id}`, {
            method: `put`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: datatwo.title, author: datatwo.author})
        })
        document.getElementsByTagName(`h3`)[0].innerText = `FORM`;
        document.querySelector(`form button`).innerText = `Submit`;
        document.getElementsByName(`title`)[0].value = "";
        document.getElementsByName(`author`)[0].value = "";
        booklist();
    }
    if (document.querySelector(`form button`).innerText == `Submit`){
        let dataF = new FormData(e.target);
        let data = Object.fromEntries(dataF.entries());

        if (!data.title || !data.author) {
            return;
        }
        let g = await fetch(`http://localhost:3030/jsonstore/collections/books`, {
            method: `post`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: data.title, author: data.author})
        })
        document.getElementsByName(`title`)[0].value = "";
        document.getElementsByName(`author`)[0].value = "";
       booklist();
    }
}

