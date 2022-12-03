function attachEvents() {
    
  let loadbtn = document.getElementById(`btnLoadPosts`);
  loadbtn.addEventListener(`click`,addinglist);
  let droplist = document.getElementById(`posts`);
  let viewbtn = document.getElementById(`btnViewPost`);
  viewbtn.addEventListener(`click`, viewup);
  let postitle = document.getElementById(`post-title`);
  let postcom = document.getElementById(`post-comments`);
  
   let g = [];
   async function addinglist(){
     droplist.innerHTML = "";
     let lister = await fetch(`http://localhost:3030/jsonstore/blog/posts`);
     let listerdata = await lister.json();
    
     for(let el in listerdata) {
        g.push({id: el, text:listerdata[el].body});
        let opti = document.createElement(`option`);
        opti.value = el;
        opti.textContent = listerdata[el].title;
        droplist.appendChild(opti);
     }

   }
   
   async function viewup(){
    
    postitle.textContent = droplist.options[droplist.selectedIndex].textContent;
    
    for (let go of g) {
        if (go.id == droplist.value){
            document.getElementById(`post-body`).textContent = go.text;

        }
    }
    
     let comlist = await fetch(`http://localhost:3030/jsonstore/blog/comments`);
     let comlistdata = await comlist.json();
     postcom.innerHTML = "";
     for (let g in comlistdata) {
        
        if (comlistdata[g].postId == droplist.value) {
            let lister = document.createElement(`li`);
            lister.setAttribute(`id`,comlistdata[g].id);
            lister.textContent = comlistdata[g].text;
            postcom.appendChild(lister);
        }
     }
     
   }
}
attachEvents();