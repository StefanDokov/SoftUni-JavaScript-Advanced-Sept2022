function attachEventsListeners() {
    let convNum = document.getElementById(`inputDistance`);
    let g = document.getElementById(`convert`);
    g.addEventListener(`click`, convert);
    let res = document.getElementById(`outputDistance`);

    function convert() {
        let idva = document.getElementById(`inputUnits`).value;
        let otiva = document.getElementById(`outputUnits`).value;
        let helper = 0;
        let final = 0;
        
        switch(idva) {
            case "km":
                helper = Number(convNum.value) * 1000;
                break;
            case "m":
                helper = Number(convNum.value) * 1;
                break;
            case "cm":
                helper = Number(convNum.value) * 0.01;
                break;
            case "mm":
                helper = Number(convNum.value) * 0.001;
                break;
            case "mi":
                helper = Number(convNum.value) * 1609.34;
                break;
            case "yrd":
                helper = Number(convNum.value) * 0.9144;
                break;
            case "ft":
                helper = Number(convNum.value) * 0.3048;
                break;
            case "in":
                helper = Number(convNum.value) * 0.0254;
                break;
        }
        
        switch(otiva) {
            case "km":
                final = helper / 1000;
                break;
            case "m":
                final = helper * 1;
                break;
            case "cm":
                final = helper * 100;
                break;
            case "mm":
                final = helper * 1000;
                break;
            case "mi":
                final = helper / 1609.34;
                break;
            case "yrd":
                final = helper / 0.9144;
                break;
            case "ft":
                final = helper / 0.3048;
                break;
            case "in":
                final = helper / 0.0254;
                break;
        }
        return res.value = final.toFixed(5);



    }



}