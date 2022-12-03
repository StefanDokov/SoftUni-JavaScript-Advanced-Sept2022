function solve() {
   let prods = document.getElementsByClassName(`shopping-cart`)[0];
   let res = document.getElementsByTagName(`textarea`)[0];
   prods.addEventListener(`click`, click);
   let sum = 0;
   let produ = [];
   let checkoutdone = false;

   function click(event){
      if (event.target.nodeName != 'BUTTON'){
         return
      }
      if (checkoutdone) {
         return;
      }
      let btn = event.target;
      if (Array.from(btn.classList).indexOf(`add-product`) >= 0){
        let productEl = event.target.parentElement.parentElement;
        let name = productEl.querySelectorAll(`.product-title`)[0].textContent;
        let price = productEl.querySelectorAll(`.product-line-price`)[0].textContent;
        sum += Number(price);
        if (!produ.includes(name)){
          produ.push(name);
        }
        
        res.textContent += `Added ${name} for ${Number(price).toFixed(2)} to the cart.\n`;
      } 
       else if (Array.from(btn.classList).indexOf(`checkout`) >= 0){
         res.textContent += `You bought ${produ.join(", ")} for ${sum.toFixed(2)}.`;
         checkoutdone = true;
       }

        
   };



}