function attachEventsListeners() {
    let vsichki = document.querySelectorAll("input[type=button]");
    for (let el of vsichki){
    el.addEventListener(`click`, buto);
    }

    function buto(e){
        let item = e.target;
        let inp = Number(item.parentElement.querySelector("input[type=text]").value);
        let which = item.id;
        let off = document.querySelectorAll(`input[type=text]`);
        
        switch(which) {
            case "daysBtn":
                off[1].value = inp * 24;
                off[2].value = inp * 1440;
                off[3].value = inp * 86400;
                break;
                case "hoursBtn":
                off[0].value = inp / 24;
                off[2].value = inp * 60;
                off[3].value = inp * 3600;
                break;
                case "minutesBtn":
                off[0].value = inp /1440;
                off[1].value = inp / 60;
                off[3].value = inp * 60;
                break;
                case "secondsBtn":
                off[0].value = inp / 86400;
                off[1].value = inp / 3600;
                off[2].value = inp / 60;
                break;
        }
    }
}