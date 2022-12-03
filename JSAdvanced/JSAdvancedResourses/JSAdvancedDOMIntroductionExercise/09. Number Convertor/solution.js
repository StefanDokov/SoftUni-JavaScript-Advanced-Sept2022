function solve() {
    let selmenu = document.getElementById(`selectMenuTo`);
    let p = document.createElement(`option`);
    selmenu.appendChild(p);

    selmenu.children[0].textContent = 'Binary';
    selmenu.children[0].value = 'Binary';
    selmenu.children[1].textContent = 'Hexadecimal';
    selmenu.children[1].value = 'hexadecimal';

    let buto = document.getElementsByTagName(`button`)[0];
    buto.addEventListener(`click`, convert);

    function convert() {
        let inp = document.getElementById(`input`).value;
        let res = document.getElementById(`result`);
        if (selmenu.value == "Binary") {
            let bin = 0;
            let rem, i = 1, step = 1;
            while (inp != 0) {
                rem = inp % 2;

                inp = parseInt(inp / 2);
                bin = bin + rem * i;
                i = i * 10;
            }
            return res.value = bin;

        } else if (selmenu.value = "Hexadecimal") {
            if (Number(inp) < 0) {
                inp = 0xFFFFFFFF + Number(inp) + 1;
            }

            return res.value = Number(inp).toString(16).toUpperCase();
        }


    }


}