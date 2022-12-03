function filta(data, cryteria) {

    let listEmp = JSON.parse(data);

    let [caling, inp] = cryteria.split("-");


    let g = [];

    for (let el of listEmp) {
        
        if (el[caling] === inp) {
            g.push(`${el.first_name} ${el.last_name} - ${el.email}`);
        }

    }

    consoling(g);

    function consoling(sup) {
        for (let s = 0; s < sup.length; s++) {
            console.log(`${s}. ${sup[s]}`);
        }
    }



}
filta(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
);
console.log(`---------`);
filta(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {"id": "2",
  "first_name": "Kizzee",
  "last_name": "Johnson",
  "email": "kjost1@forbes.com",
  "gender": "Female"
}, {
  "id": "3",
  "first_name": "Evanne",
  "last_name": "Maldin",
  "email": "emaldin2@hostgator.com",
  "gender": "Male"
}, {
  "id": "4",
  "first_name": "Evanne",
  "last_name": "Johnson",
  "email": "ev2@hostgator.com",
  "gender": "Male"
}]`,
    'last_name-Johnson'

);