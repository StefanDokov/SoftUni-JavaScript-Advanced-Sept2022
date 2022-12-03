(function go() {
let formElement = document.getElementById(`form`);
formElement.addEventListener(`submit`, getter);

lisem();
async function lisem(){
   let tbod = document.querySelector('#results tbody');
   let result = await fetch(`http://localhost:3030/jsonstore/collections/students`);
   let resultdata = await result.json();
   let gresult = Object.values(resultdata);
   
   for (let el of gresult) {
      let troww = document.createElement(`tr`);
      let fdow = document.createElement(`td`);
      fdow.textContent = el.firstName;
      let ldow = document.createElement(`td`);
      ldow.textContent = el.lastName;
      let numbow = document.createElement(`td`);
      numbow.textContent = el.facultyNumber;
      let grabow = document.createElement(`td`);
      grabow.textContent = el.grade;
      troww.appendChild(fdow);
      troww.appendChild(ldow);
      troww.appendChild(numbow);
      troww.appendChild(grabow);
      tbod.appendChild(troww);

   }
   
  }

 async function getter(e) {
     e.preventDefault();
     
     let inputite = document.querySelectorAll(`input[type="text"]`);
     
     let formData = new FormData(formElement);
     
     let {firstName, lastName, facultyNumber, grade} = (Object.fromEntries(formData.entries()));
     
     if (!firstName || !lastName || !facultyNumber || !grade || isNaN(grade) || isNaN(facultyNumber) || !isNaN(firstName) || !isNaN(lastName)) {
       
        return;
     }
     let b = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        facultyNumber: facultyNumber.trim(),
        grade: grade.trim()

     }
     
     document.querySelector('#results tbody').innerHTML = "";
     let resul = await fetch(`http://localhost:3030/jsonstore/collections/students`, {
        method: `post`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(b)
     });
     if (resul.status != 200){
        throw new Error(`Error`);
     }
     
     for (let r of inputite) {
        r.value = "";
     }
     let resuldata = await resul.json();

     lisem();

    }
     
   }());
   
