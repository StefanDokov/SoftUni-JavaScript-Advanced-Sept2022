function attachEvents() {
    
   let inpname = document.querySelector(`input[name="author"]`);
   let inptext = document.querySelector(`input[name="content"]`);
   let textarrrea = document.getElementById(`messages`);

   document.getElementById(`refresh`).addEventListener(`click`, fresh);
   document.getElementById(`submit`).addEventListener(`click`,poster);

   async function fresh() {
     let res = await fetch(`http://localhost:3030/jsonstore/messenger`);
     let resdata = await res.json();
     
     let g = Object.values(resdata);
     textarrrea.textContent = "";
     for (let el of g) {
        textarrrea.textContent += `${el.author}: ${el.content}\n`;
     }
     return textarrrea.textContent = textarrrea.textContent.trim();
   }

   async function poster(){
     if (!inpname.value || !inptext.value) {
        return;
     }
    let data = await fetch(`http://localhost:3030/jsonstore/messenger`, {
        method: `post`,
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ author: inpname.value, content: inptext.value})
    })
    let dataxdata = await data.json();
    inpname.value = "";
    inptext.value = "";

   }


}

attachEvents();