function test(){

    class Company {
        constructor(){
        this.departments = {};
        }
        addEmployee(name, salary, position, department){
            if ([name,salary,position,department].includes("") || [name,salary,position,department].includes(undefined)|| [name,salary,position,department].includes(null)){
                throw new Error(`Invalid input!`);
            }
            if (salary < 0){
                throw new Error(`Invalid input!`);
            }
            if (!this.departments.hasOwnProperty(department)){
                this.departments[department] = {};
            }
            if (!this.departments[department].hasOwnProperty(`avrg`)){
                this.departments[department].avrg = 0;
            }
            this.departments[department][name] = {salary, position};
            this.departments[department].avrg += salary;
            
            return `New employee is hired. Name: ${name}. Position: ${position}`;
        }
        bestDepartment(){
            let p = "";
           Object.entries(this.departments).map(el => {
            el[1].avrg = el[1].avrg / ((Object.keys(el[1]).length) - 1);
            
           });
           let g = Object.entries(this.departments).sort((a,b) => b[1].avrg - a[1].avrg);
           p += `Best Department is: ${g[0][0]}\n`;
           p +=`Average salary: ${(g[0][1].avrg).toFixed(2)}\n`;
           delete g[0][1].avrg;
           let me = Object.entries(g[0][1]).sort((a,b) => b[1].salary - a[1].salary || a[0].localeCompare(b[0]))
           .forEach(el => {
            p += `${el[0]} ${el[1].salary} ${el[1].position}` + `\n`;
           });

             return p.trim();
           
        }

    }
    

    let c = new Company();
    c.addEmployee("Stanimir", 2000, "engineer", "Construction");
    c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
    c.addEmployee("Slavi", 500, "dyer", "Construction");
    c.addEmployee("Stan", 2000, "architect", "Construction");
    c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
    c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
    c.addEmployee("Gosho", 1350, "HR", "Human resources");
    console.log(c.bestDepartment());
    





}
test();