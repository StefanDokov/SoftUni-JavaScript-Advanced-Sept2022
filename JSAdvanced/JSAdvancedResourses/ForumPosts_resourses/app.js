window.addEventListener("load", solve);

function solve() {
  
  let puBtn = document.getElementById(`publish-btn`);
  puBtn.addEventListener(`click`, publish);
    let titleTxt = document.getElementById(`post-title`);
    let categoryTxt = document.getElementById(`post-category`);
    let contentTxt = document.getElementById(`post-content`);

  function publish(e) {
    e.preventDefault();
    
    if (!titleTxt.value && !categoryTxt.value && !contentTxt.value){
      return;
    } 
    let reviewPost = document.getElementById(`review-list`);
    let lili = document.createElement(`li`);
    lili.classList.add(`rpost`);
    let article = document.createElement(`article`);
    let hfour = document.createElement(`h4`);
    hfour.textContent = titleTxt.value;
    let pcategory = document.createElement(`p`);
    pcategory.textContent = `Category: ` + categoryTxt.value;
    let pcontent = document.createElement(`p`);
    pcontent.textContent = `Content: ` + contentTxt.value;
    let edtBtn = document.createElement(`button`);
    edtBtn.classList.add(`action-btn`);
    edtBtn.classList.add(`edit`);
    edtBtn.textContent = `edit`;
    let appBtn = document.createElement(`button`);
    appBtn.classList.add(`action-btn`);
    appBtn.classList.add(`approve`);
    appBtn.textContent = `Approve`;
    article.appendChild(hfour);
    article.appendChild(pcategory);
    article.appendChild(pcontent);
    lili.appendChild(article);
    lili.appendChild(edtBtn);
    lili.appendChild(appBtn);
    reviewPost.appendChild(lili);

    edtBtn.addEventListener(`click`, editing());
    
    document.getElementById(`post-title`).value = "";
    document.getElementById(`post-category`).value = "";
    document.getElementById(`post-content`).value = "";

    function editing(e) {
      document.getElementById(`post-title`).value = e.parentElement.children[0].children[0].textContent;
      document.getElementById(`post-category`).value = e.parentElement.children[0].children[1].textContent;
      document.getElementById(`post-content`).value = e.parentElement.children[0].children[2].textContent;
      
    }
    
   
  }
  
}
