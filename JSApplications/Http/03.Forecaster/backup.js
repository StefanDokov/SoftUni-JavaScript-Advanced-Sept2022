function attachEvents() {
    document.getElementById(`submit`).addEventListener(`click`, doit);
    let inputo = document.getElementById(`location`);
    let divfore = document.getElementById(`current`);
    let divupcome = document.getElementById(`upcoming`);
     
    async function doit (){
    try{
        let supa = false;
    let res = await fetch(`http://localhost:3030/jsonstore/forecaster/locations`);
    console.log(res)
    if (res.ok == false) {
        
        throw new Error(`Error`);
    }
    let resdata = await res.json();
    
     
    for (let loc of resdata) {
        if (loc.name == inputo.value) {
            
            supa = true;
            dayforecast();
            triday();
            async function dayforecast(){
                let resfet = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${loc.code}`);
                let resfetdata = await resfet.json();
                
                let fore = resfetdata.forecast;
                let cond = fore.condition;
                let b = "";
                switch(cond){
                    case "Sunny": 
                    b = `&#x2600`;
                    break;
                    case "Partly sunny":
                        b = `&#x26C5`;
                        break;
                        case "Overcast":
                            b = `&#x2601`;
                            break;
                            case "Rain":
                                b = `&#x2614`;
                                break;
                }
                let divfo = document.createElement(`div`);
                divfo.classList.add(`forecasts`);
                let spansymb = document.createElement(`span`);
                spansymb.classList.add(`condition`);
                spansymb.classList.add(`symbol`);
                spansymb.innerHTML = b;
                let spancond = document.createElement(`span`);
                spancond.classList.add(`condition`);
                let spanloc = document.createElement(`span`);
                spanloc.classList.add(`forecast-data`);
                spanloc.innerText = resfetdata.name;
                let spantemp = document.createElement(`span`);
                spantemp.classList.add(`forecast-data`);
                spantemp.innerHTML = `${fore.low}&#176/${fore.high}&#176`;
                let spansunny = document.createElement(`span`);
                spansunny.classList.add(`forecast-data`);
                spansunny.innerText = cond;
                spancond.appendChild(spanloc);
                spancond.appendChild(spantemp);
                spancond.appendChild(spansunny);
                divfo.appendChild(spansymb);
                divfo.appendChild(spancond);
                divfore.appendChild(divfo);
                document.getElementById(`forecast`).style.display = `block`;
                

            }
            
            async function triday(){
              let restri = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${loc.code}`);
              let restridata = await restri.json();
              
              let divup = document.createElement(`div`);
                divup.classList.add(`forecast-info`);
             for (let k of restridata.forecast) {
              
                let upcond = k.condition;
                let a = "";
                switch(upcond){
                    case "Sunny": 
                    a = `&#x2600`;
                    break;
                    case "Partly sunny":
                        a = `&#x26C5`;
                        break;
                        case "Overcast":
                            a = `&#x2601`;
                            break;
                            case "Rain":
                                a = `&#x2614`;
                                break;
                }
                
                let spantri = document.createElement(`span`);
                spantri.classList.add(`upcoming`);
                let spantrisymb = document.createElement(`span`);
                spantrisymb.classList.add(`symbol`);
                spantrisymb.innerHTML = a;
                let spantritemp = document.createElement(`span`);
                spantritemp.classList.add(`forecast-data`);
                spantritemp.innerHTML = `${k.low}&#176/${k.high}&#176`;
                let spantricond = document.createElement(`span`);
                spantricond.classList.add(`forecast-data`);
                spantricond.innerText = upcond;
                spantri.appendChild(spantrisymb);
                spantri.appendChild(spantritemp);
                spantri.appendChild(spantricond);
                divup.appendChild(spantri);
                
                
            }
               divupcome.appendChild(divup);


            }
        }
    }
    if (supa == false) {
        throw new Error(`Error`);
    }
} catch(err){
    let endspan = document.createElement(`span`);
    endspan.classList.add(`forecast-data`);
    endspan.innerText = `Error`;
    
    divfore.appendChild(endspan);
    
    document.getElementById(`forecast`).style.display = `block`;
}
}
}

attachEvents();