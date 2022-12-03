function solve() {
    let message = document.getElementsByClassName(`info`)[0];
    let resolve = `http://localhost:3030/jsonstore/bus/schedule/depot`;
    let stopid = "";
    let nextid = "";

    async function depart(e) {
        try {
        let g = await fetch(resolve);
        if (g.ok == false) {
            throw new Error(`Error`);
        }

        let gdata = await g.json();
        message.innerText = `Next stop ${gdata.name}`;
        document.getElementById(`depart`).disabled = true;
        document.getElementById(`arrive`).disabled = false;
        resolve = `http://localhost:3030/jsonstore/bus/schedule/${gdata.next}`;
        stopid = gdata.name;
        nextid = gdata.next;
        } catch(err) {
            message.innerText = `Error`;
            document.getElementById(`depart`).disabled = true;
            document.getElementById(`arrive`).disabled = true;

        }
    }

    function arrive() {
        message.innerText = `Arriving at ${stopid}`;
        document.getElementById(`depart`).disabled = false;
        document.getElementById(`arrive`).disabled = true;
        resolve = `http://localhost:3030/jsonstore/bus/schedule/${nextid}`;
        
        
    }

    return {
        depart,
        arrive
    };
}

let result = solve();