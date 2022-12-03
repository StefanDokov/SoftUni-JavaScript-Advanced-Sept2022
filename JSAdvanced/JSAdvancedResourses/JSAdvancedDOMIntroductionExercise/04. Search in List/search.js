function search() {
   let search = document.getElementById(`searchText`).value;
   let lister = Array.from(document.querySelectorAll(`ul li`));
   let count = 0;
   for (let item of lister){
      let text = item.textContent;
      if(text.includes(search)){
         item.style.textDecoration = "underline";
         item.style.fontWeight = "bold";
         count++;
      } else {
         item.style.textDecoration = "none";
         item.style.fontWeight = "normal";
      }
   }
   if (count > 0){
      document.getElementById(`result`).innerText = `${count} matches found`;
   }

}
