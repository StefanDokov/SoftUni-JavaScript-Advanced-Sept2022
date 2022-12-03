function toggle() {
    let clik = document.getElementsByClassName(`button`)[0].textContent;
    if (clik == "More"){
        document.getElementById(`extra`).style.display = `block`;
        document.getElementsByClassName(`button`)[0].textContent = "Less";
    }
    if (clik == "Less"){
        document.getElementById(`extra`).style.display = `none`;
        document.getElementsByClassName(`button`)[0].textContent = "More";
    }
}