function create(words) {
   let maino = document.getElementById(`content`);
   for (let el of words) {
      let str = document.createTextNode(el);
      let p = document.createElement(`p`);
      let divo = document.createElement(`div`);
      p.appendChild(str);
      p.style.display = `none`;
      divo.appendChild(p);
      
      divo.addEventListener(`click`, (event) => {
         event.target.children[0].style.display  = 'block';
      });
      maino.appendChild(divo);
   }
}