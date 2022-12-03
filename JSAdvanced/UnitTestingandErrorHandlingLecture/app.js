async function getInfo() {
    let stopInp = document.getElementById(`stopId`).value;
    let ulist = document.getElementById(`buses`);
    try {
        let response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopInp}`);

        if (response.ok == false) {
            ulist.innerHTML = "";
            throw new Error(`Error`);
            
        }
        let data = await response.json();
        document.getElementById(`stopName`).innerText = data.name;
        console.log(data)
        ulist.innerHTML = "";
        for (let bus in data.buses) {
            let li = document.createElement(`li`);

            li.innerText = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;
            ulist.appendChild(li);

        }

    } catch(err){
        document.getElementById(`stopName`).innerText = `Error`;
        ulist.innerHTML = "";
    }
}