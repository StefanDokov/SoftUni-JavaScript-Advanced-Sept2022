function solution() {

    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            
                console.log(this.tasks[0]);
                this.tasks.push(this.tasks.shift());


        }
        collectSalary() {
            let currentSal = this.dividend ? this.salary + this.dividend : this.salary
            console.log(`${this.name} received ${currentSal} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            let taskList = [`${this.name} is working on a simple task.`]

            super.tasks = taskList;
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            let taskList = [`${this.name} is working on a complicated task.`, 
            `${this.name} is taking time off work.`,
            `${this.name} is supervising junior workers.`
        ];

            super.tasks = taskList;
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            let taskList = [`${this.name} scheduled a meeting.`, 
            `${this.name} is preparing a quarterly report.`
        ];
            this.dividend = 0;
            super.tasks = taskList;
        }
       
    }


    return {
        Employee,
        Junior,
        Senior,
        Manager
    }




}
solve();