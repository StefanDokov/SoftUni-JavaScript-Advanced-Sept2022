function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let data = Array.from(document.querySelectorAll(`tbody tr`));
      let searchText = document.getElementById(`searchField`);

      
         let regex = new RegExp(searchText.value, 'gim');
         data.map(e => {
             e.classList.remove('select');
             if (e.innerHTML.match(regex) !== null) {
                 e.className = 'select';
             }
         });
         searchText.value = '';
    

   }
}