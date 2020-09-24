// const language = "C;Dennis Ritchie;1972".split(";");
// const name = language[0];
// const author = language[1];
// const year = language[2];
// console.log(name, author, year);



// const language = "C;Dennis Ritchie;1972".split(";");
// const [name, author, year] = language;
// console.log(name, author, year);



// const [name, author, year] = "C;Dennis Ritchie;1972".split(";");
// console.log(name, author, year);




// const [, author, year] = "C;Dennis Ritchie;1972".split(";");
// console.log(author, year);



// const language = "C;Dennis Ritchie;1972".split(";");
// const [name = "-", author = "-", year = "-"] = language;
// console.log(name, author, year);



// const language = "C;Dennis Ritchie".split(";");
// const [name = "-", author = "-", year = "-"] = language;
// console.log(name, author, year);



// const language = {
//     name: "C",
//     author: "Dennis Ritchie",
//     year: 1972
// };
// const name = language.name;
// const author = language.author;
// const year = language.year;
// console.log(name, author, year);





// const language = {
//     name: "C",
//     author: "Dennis Ritchie",
//     year: 1972
// };
// const {name, author, year} = language;
// console.log(name, author, year);



// const language = {
//     name: "C",
//     author: "Dennis Ritchie",
//     year: 1972
// };
// const {name: n, author: a, year: y} = language;
// console.log(n, a, y);



// const language = {
//     name: "C",
//     author: "Dennis Ritchie",
//     year: 1972,
//     company: {
//         name: "Bell Labs"
//     }
// };
// const {name: n, author: a, year: y, company: {name: c}} = language;
// console.log(n, a, y, c);




// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(2, 2));




// function sum([a, b]) {
//     return a + b;
// }
// console.log(sum([2, 2]));




function sum({a, b}) {
    return a + b;
}
console.log(sum({a: 2, b: 2}));
