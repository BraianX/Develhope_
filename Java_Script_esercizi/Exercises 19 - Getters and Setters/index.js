/*  class Person {
  // ...
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);  */

class Person {
    #firstName = '';
    #lastName = '';
    #age = 0;

    constructor(firstName, lastName, age) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#age = age;
    }

    get firstName() {
        return this.#firstName;
    }
    set firstName(x) {
        this.#firstName = x;
    }

    get lastName() {
        return this.#lastName;
    }
    set lastName(x) {
        this.#lastName = x;
    }

    get age() {
        return this.#age;
    }
    set age(x) {
        this.#age = x;
    }

    get fullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }
}
const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);