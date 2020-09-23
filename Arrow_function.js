// const sum = function(a, b) {
//     return a + b;
// };
// const subtract = function(a, b) {
//     return a - b;
// };
// const calculator = function(fn) {
//     return function(a, b) {
//         return fn(a, b);
//     };
// };
// console.log(calculator(sum)(2, 2));
// console.log(calculator(subtract)(2, 2));




// const sum = (a, b) => {
//     return a + b;
// };
// const subtract = (a, b) => {
//     return a - b;
// };
// const calculator = (fn) => {
//     return (a, b) => {
//         return fn(a, b);
//     };
// };
// console.log(calculator(sum)(2, 2));
// console.log(calculator(subtract)(2, 2));




// const sum = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const calculator = (fn) => (a, b) => fn(a, b);
// console.log(calculator(sum)(2, 2));
// console.log(calculator(subtract)(2, 2));



// const sum = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const calculator = fn => (a, b) => fn(a, b);
// console.log(calculator(sum)(2, 2));
// console.log(calculator(subtract)(2, 2));




// const person = {
//     name: "James Gosling",
//     city: "Alberta",
//     year: 1955,
//     getAge: function() {
//         return (new Date()).getFullYear() - this.year;
//     }
// };
// console.log(person);
// console.log(person.getAge());




// const person = {
//     name: "James Gosling",
//     city: "Alberta",
//     year: 1955,
//     getAge: () => {
//         return (new Date()).getFullYear() - this.year;
//     }
// };
// console.log(person);
// console.log(person.getAge());





// const sum = function() {
//     let total = 0;
//     for(let argument in arguments) {
//         total += arguments[argument];
//     }
//     return total;
// };
// console.log(sum(1,2,3,4,5,6,7,8,9));





// const sum = () => {
//     let total = 0;
//     for(let argument in arguments) {
//         total += arguments[argument];
//     }
//     return total;
// };
// console.log(sum(1,2,3,4,5,6,7,8,9));





// const createPerson = function(name, city, year) {
//     return {
//         name,
//         city,
//         year
//     };
// };
// const person = createPerson("Alan Kay", "Springfield", 1940);
// console.log(person);




// const createPerson = (name, city, year) => {name, city, year};
// const person = createPerson("Alan Kay", "Springfield", 1940);
// console.log(person);




const createPerson = (name, city, year) => ({name, city, year});
const person = createPerson("Alan Kay", "Springfield", 1940);
console.log(person);
