function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   
   function onClick() {
     let input = JSON.parse(document.querySelector(`#inputs textarea`).value);
     let bestRestaurant = document.querySelector(`#bestRestaurant p`);
     let bestWorkers = document.querySelector(`#workers p`);
     let list = [];
     let res = {};
     
     for(let el of input){
      let [name, data] = el.split(" - ");
        if (!list.find(e => e.name === name)){
         list.push({
            name,
            avgSalary: 0,
            bestSalary: 0,
            sumSalary: 0,
            workers: []
         });
      }
          let workersList = data && data.split(", ");
          for (let worker of workersList){
            let[workerName, salary] = worker.split(" ");
            let currentRestaurant = list.find(e => e.name === name);
            currentRestaurant.workers.push({workerName, salary});
            updateInfo(currentRestaurant,salary);
          }
        }
        let bestRes = list.sort((a,b) => b.avgSalary - a.avgSalary)[0];
        bestRestaurant.textContent = `Name: ${bestRes.name} Average Salary: ${bestRes.avgSalary.toFixed(2)} Best Salary: ${bestRes.bestSalary.toFixed(2)}`;
        
        let listWorkers = bestRes.workers.sort((a,b) => b.salary - a.salary);
        let buff = "";
        for (let worker of listWorkers){
           buff += `Name: ${worker.workerName} With Salary: ${worker.salary} `;
        }
        bestWorkers.textContent = buff;
      }

      function updateInfo(obj, salary) {
         obj.sumSalary += Number(salary);
         obj.avgSalary = obj.sumSalary / obj.workers.length;
         if (obj.bestSalary < Number(salary)){
            obj.bestSalary = Number(salary);
         }
         return obj;
      }
    
}