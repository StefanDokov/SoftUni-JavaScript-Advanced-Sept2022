function attachGradientEvents() {
   let but = document.getElementById(`gradient`);
   but.addEventListener(`mousemove`, function (event) {
      let pos = event.offsetX;
      let gradWidth = event.target.clientWidth - 1;

      let res = Math.trunc(pos / gradWidth * 100);
      document.getElementById(`result`).textContent = `${res}%`;
   });
   but.addEventListener(`mouseout`, function (event) {
    document.getElementById(`result`).textContent = "";
   });
}