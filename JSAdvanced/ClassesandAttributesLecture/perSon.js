function test () {


class Person {
    constructor(name, familia, age, email){
        this.firstName = name;
        this.lastName = familia;
        this.age = age;
        this.email = email;
        this.toString = () => {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
}


let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());




}
test();