window.addEventListener("load", solve);

function solve() {
  let firstNameInp = document.getElementById(`first-name`);
  let lastNameInp = document.getElementById(`last-name`);
  let ageInp = document.getElementById(`age`);
  let storyTitInp = document.getElementById(`story-title`);
  let genreInp = document.getElementById(`genre`);
  let storyInp = document.getElementById(`story`);
  let previewLister = document.getElementById(`preview-list`);
  let divMain = document.getElementById(`main`);

 document.getElementById(`form-btn`).addEventListener(`click`, public);



  function createElement(type, value, className) {
    const element =  document.createElement(type);
    element.textContent = value;
    if (className){
        element.classList.add(className);
    }
    return element
}

function public(e){
 e.preventDefault;

 if (!firstNameInp.value || !lastNameInp.value || !ageInp.value || !storyTitInp.value || !genreInp.value || !storyInp.value){
  return;
 }

 let listArticle = document.createElement(`li`);
 listArticle.classList.add(`story-info`);
 let article = document.createElement(`article`);
 article.appendChild(createElement(`h4`, `Name: ${firstNameInp.value} ${lastNameInp.value}`));
 article.appendChild(createElement(`p`, `Age: ${ageInp.value}`));
 article.appendChild(createElement(`p`, `Title: ${storyTitInp.value}`));
 article.appendChild(createElement(`p`, `Genre: ${genreInp.value}`));
 article.appendChild(createElement(`p`, storyInp.value));
 listArticle.appendChild(article);
 

 let saveBtn = document.createElement(`button`);
 saveBtn.classList.add(`save-btn`);
 saveBtn.textContent = `Save Story`;
 saveBtn.addEventListener(`click`, savo);

 let editBtn = document.createElement(`button`);
 editBtn.classList.add(`edit-btn`);
 editBtn.textContent = `Edit Story`;
 editBtn.addEventListener(`click`, edito);

 let delBtn = document.createElement(`button`);
 delBtn.classList.add(`delete-btn`);
 delBtn.textContent = `Delete Story`;
 delBtn.addEventListener(`click`, delo);

 listArticle.appendChild(saveBtn);
 listArticle.appendChild(editBtn);
 listArticle.appendChild(delBtn);

 previewLister.appendChild(listArticle);

 
  firstNameInp.value = "";
  lastNameInp.value = "";
  ageInp.value = "";
  storyTitInp.value = "";
  genreInp.value = "";
  storyInp.value = "";
  
  document.getElementById(`form-btn`).disabled = true;
  


 function savo(){
    divMain.innerHTML = "";
    divMain.appendChild(createElement(`h1`, `Your scary story is saved!`));

 }

 function edito(e) {
  

  let [x, fname, secname] = listArticle.children[0].children[0].textContent.split(` `);
  console.log(fname)
  console.log(secname)
  let [r, age] = listArticle.children[0].children[1].textContent.split(`Age: `);
  console.log(age);
  let [i, stitle] = listArticle.children[0].children[2].textContent.split(`Title: `);
  console.log(stitle)
  let [b, genren] = listArticle.children[0].children[3].textContent.split(`Genre: `);
  console.log(genren)
  firstNameInp.value = fname;
  lastNameInp.value = secname;
  ageInp.value = age;
  storyTitInp.value = stitle;
  genreInp.value = genren;
  storyInp.value = listArticle.children[0].children[4].textContent;

  document.getElementById(`form-btn`).disabled = false;
  listArticle.remove();


 }
 function delo(){
  listArticle.remove();
  document.getElementById(`form-btn`).disabled = false;

 }





}





}
