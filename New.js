// const person = {
//     name: "Linus Torvald",
//     city: "Helsinki",
//     year: 1969,
//     getAge() {
//         return ((new Date()).getFullYear() - this.year);
//     }
// };

// console.log(person);
// console.log(person.getAge());



// const person1 = {
//     name: "Linus Torvald",
//     city: "Helsinki",
//     year: 1969,
//     getAge() {
//         return ((new Date()).getFullYear() - this.year);
//     }
// };
// const person2 = {
//     name: "Bill Gates",
//     city: "Seattle",
//     year: 1955,
//     getAge() {
//         return ((new Date()).getFullYear() - this.year);
//     }
// };
// console.log(person1);
// console.log(person1.getAge());
// console.log(person2);
// console.log(person2.getAge());


// const createPerson = function(name, city, year) {
//     return {
//         name,
//         city,
//         year,
//         getAge() {
//             return ((new Date()).getFullYear() - this.year);
//         }
//     }
// };
// const person1 = createPerson("Linus Torvald", "Helsinki", 1969);
// const person2 = createPerson("Bill Gates", "Seattle", 1955);
// console.log(person1);
// console.log(person1.getAge());
// console.log(person2);
// console.log(person2.getAge());





// const personPrototype = {
//     getAge() {
//         return ((new Date()).getFullYear() - this.year);//gera uma função que pode ser usada, sem precisar repetir o codigo
//     }
// };
// const createPerson = function(name, city, year) {
//     const person = {
//         name,
//         city,
//         year
//     };//criou um obj que usa os dados das 'person's para criar o objeto
//     Object.setPrototypeOf(person, personPrototype);
//     return person;
// };
// const person1 = createPerson("Linus Torvald", "Helsinki", 1969);
// const person2 = createPerson("Bill Gates", "Seattle", 1955);
// console.log(person1);
// console.log(person1.getAge());
// console.log(person2);
// console.log(person2.getAge());





// const personPrototype = {
//     getAge() {
//         return ((new Date()).getFullYear() - this.year);
//     }
// };
// const createPerson = function(name, city, year) {
//     const person = {
//         name,
//         city,
//         year
//     };
//     Object.setPrototypeOf(person, personPrototype);
//     return person;
// };
// const person1 = createPerson("Linus Torvald", "Helsinki", 1969);
// const person2 = createPerson("Bill Gates", "Seattle", 1955);
// console.log(person1);
// console.log(person1.__proto__);
// console.log(person1.getAge());
// console.log(person2);
// console.log(person2.__proto__);
// console.log(person2.getAge());
// console.log(person1.__proto__ === person2.__proto__);



// const Person = function(name, city, year) {
//     this.name = name,
//     this.city = city,
//     this.year = year,
//     this.getAge = function() {
//         return ((new Date()).getFullYear() - this.year);
//     }
// };
// const person1 = new Person("Linus Torvald", "Helsinki", 1969);
// const person2 = new Person("Bill Gates", "Seattle", 1955);
// console.log(person1);
// console.log(person1.__proto__);
// console.log(person1.getAge());
// console.log(person2);
// console.log(person2.__proto__);
// console.log(person2.getAge());
// console.log(person1.__proto__ === person2.__proto__);





// const Person = function(name, city, year) {
//     this.name = name,
//     this.city = city,
//     this.year = year
// };
// Person.prototype.getAge = function() {
//     return ((new Date()).getFullYear() - this.year);
// };
// const person1 = new Person("Linus Torvald", "Helsinki", 1969);
// const person2 = new Person("Bill Gates", "Seattle", 1955);
// console.log(person1);
// console.log(person1.__proto__);
// console.log(person1.getAge());
// console.log(person2);
// console.log(person2.__proto__);
// console.log(person2.getAge());
// console.log(person1.__proto__ === person2.__proto__);



const _new = function(fn, ...params) {
    const obj = {};
    Object.setPrototypeOf(obj, fn.prototype);
    fn.apply(obj, params);
    return obj;
};//isso seria o new
const Person = function(name, city, year) {
    this.name = name,
    this.city = city,
    this.year = year
};
Person.prototype.getAge = function() {
    return ((new Date()).getFullYear() - this.year);
};
const person1 = _new(Person, "Linus Torvald", "Helsinki", 1969);
const person2 = _new(Person, "Bill Gates", "Seattle", 1955);
console.log(person1);
console.log(person1.__proto__);
console.log(person1.getAge());
console.log(person2);
console.log(person2.__proto__);
console.log(person2.getAge());
console.log(person1.__proto__ === person2.__proto__);
