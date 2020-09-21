// console.log(JSON.stringify(10),
// JSON.stringify("JavaScript"),
// JSON.stringify(true),
// JSON.stringify(false),
// JSON.stringify({name: "Self", paradigm: "OO"}),
// JSON.stringify([1,2,3,4,5,6,7,8,9]),
// JSON.stringify(null),
// )

// console.log(JSON.parse('10'),
// JSON.parse('"JavaScript"'),
// JSON.parse('true'),
// JSON.parse('false'),
// JSON.parse('{"name": "Self","paradigm": "OO"}'),
// JSON.parse('[1,2,3,4,5,6,7,8,9]'),
// JSON.parse('null'),
// )



// const book1 = {
//     name: "Refactoring",
//     author: "Martin Fowler"
// };
// const book2 = {
//     name: "Refactoring",
//     author: "Martin Fowler"
// };
// console.log(book1 === book2);
// console.log(JSON.stringify(book1) === JSON.stringify(book2));//isso ira comparar os dois objetos




const book1 = {
    name: "Refactoring",
    author: "Martin Fowler"
};
const book2 = {
    name: "Refactoring",
    author: "Martin Fowler"
};
const book3 = JSON.parse(JSON.stringify(book2));
console.log(book2 === book3);
