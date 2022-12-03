function encodeAndDecodeMessages() {
    let enc = document.getElementById(`main`);
    let buts = enc.querySelectorAll(`div button`);
    let secarea = enc.querySelectorAll(`div textarea`);
    
    buts[0].addEventListener(`click`, encode);
    buts[1].addEventListener(`click`,deecode);

    function encode(e){
       let text = e.target.parentElement.querySelector(`textarea`).value;
       let diff = "";
       for (let i of text) {
        let b = i.charCodeAt(0) + 1;
        diff += String.fromCharCode(b);
       }
       
       secarea[1].value = diff;
       secarea[0].value = ``;
    }

    function deecode(e) {
       let deftex = secarea[1].value;
       let g = "";
       for (let i of deftex) {
        let b = i.charCodeAt(0) - 1;
        g += String.fromCharCode(b);
       }
       secarea[1].value = g;


    }
}