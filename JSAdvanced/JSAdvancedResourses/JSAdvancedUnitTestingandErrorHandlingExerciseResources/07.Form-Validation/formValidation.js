function validate() {
    document.querySelector("#submit").type = "button";
    let submito = document.getElementById(`submit`);

    submito.addEventListener(`click`, checkAll);
    document.querySelectorAll(`div input`)[4].addEventListener(`change`, (e) => {
        console.log(e.target);
        if (document.querySelector("#company").checked) {
            document.querySelector("#companyInfo").style.display = "block";
        } else {
            document.querySelector("#companyInfo").style.display = "none";
        }
    });
    
    function checkAll(e) {
        let wright = [];
        

        let usernamo = document.querySelectorAll(`div input`)[0].value;
        let emailo = document.querySelectorAll(`div input`)[1].value;
        let passone = document.querySelectorAll(`div input`)[2].value;
        let passtwo = document.querySelectorAll(`div input`)[3].value;
        let company = document.querySelectorAll(`div input`)[4];
        let userreg = /\w+/;
        let emailreg = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')

        

        if (usernamo.length < 3 || usernamo.length > 20 || !userreg.test(usernamo)) {
            document.getElementById(`username`).style.borderColor = `red`;
            wright.push(false);
        } else {
            wright.push(true);
            document.getElementById(`username`).style.borderColor = '';
        }

        if (emailreg.test(emailo) == false) {
            wright.push(false);
            document.getElementById(`email`).style.borderColor = `red`;
        } else {
            wright.push(true);
            document.getElementById(`email`).style.borderColor = ``;
        }

        if (passone.length < 5 || passone.length > 15 || !userreg.test(passone) || passone != passtwo) {
            wright.push(false);
            document.querySelectorAll(`div input`)[2].style.borderColor = `red`;
            document.querySelectorAll(`div input`)[3].style.borderColor = `red`;
        } else {
            wright.push(true);
            document.querySelectorAll(`div input`)[2].style.borderColor = ``;
            document.querySelectorAll(`div input`)[3].style.borderColor = ``;
        }


        if (company.checked) {
            companyfill = document.getElementById(`companyNumber`).value;

            if (typeof companyfill != `number` || companyfill < 1000 || companyfill > 9999) {
                wright.push(false);
                document.getElementById(`companyNumber`).style.borderColor = `red`;
            } else {
                wright.push(true);
                document.getElementById(`companyNumber`).style.borderColor = ``;

            }


            if (wright.includes(false)) {
                document.getElementById(`valid`).style.display = ``;
            } else {
                document.getElementById(`valid`).style.display = "";
            }

        }
    }
}