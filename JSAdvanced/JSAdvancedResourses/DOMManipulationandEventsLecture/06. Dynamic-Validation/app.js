function validate() {
    let inp = document.getElementById("email");
    inp.addEventListener(`change`, checker);
    function checker() {
        let tex = document.getElementById("email").value.trim();
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        let mach = tex.match(regex);
        if (mach == null) {
            inp.classList.add(`error`);
        } else {
            inp.classList.remove(`error`);
            document.getElementById("email").value = "";
        }
    }
}