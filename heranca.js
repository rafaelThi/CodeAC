// const scheme = {
//     name: "Scheme",
//     year: 1975,
//     paradigm: "Functional"    
// };
// const javascript = {
//     name: "JavaScript",
//     year: 1995,
//     paradigm: "Functional"
// };
// console.log(scheme);
// console.log(javascript);

////

// const functionalLanguage = {
//     paradigm: "Functional"
// };
// const scheme = {
//     name: "Scheme",
//     year: 1975,
//     paradigm: "Functional"    
// };
// const javascript = {
//     name: "JavaScript",
//     year: 1995,
//     paradigm: "Functional"
// };
// console.log(functionalLanguage);
// console.log(scheme);
// console.log(javascript);

// //

// const functionalLanguage = {
//     paradigm: "Functional"
// };
// const scheme = {
//     name: "Scheme",
//     year: 1975,
//     __proto__: functionalLanguage
// };
// const javascript = {
//     name: "JavaScript",
//     year: 1995,
//     __proto__: functionalLanguage
// };
// console.log(functionalLanguage);
// console.log(scheme);
// console.log(javascript);

// //

// const functionalLanguage = {
//     paradigm: "Functional"
// };
// const scheme = {
//     name: "Scheme",
//     year: 1975,
//     __proto__: functionalLanguage
// };
// const javascript = {
//     name: "JavaScript",
//     year: 1995,
//     __proto__: functionalLanguage
// };
// console.log(functionalLanguage);
// console.log(scheme.paradigm);
// console.log(javascript.paradigm);

// //

// const functionalLanguage = {
//     paradigm: "Functional"
// };
// const scheme = {
//     name: "Scheme",
//     year: 1975,
//     __proto__: functionalLanguage
// };
// const javascript = {
//     name: "JavaScript",
//     year: 1995,
//     __proto__: functionalLanguage
// };
// for (let key in scheme) {
//     console.log(key, scheme.hasOwnProperty(key));
// }

// //

// const functionalLanguage = {
//     paradigm: "Functional"
// };
// const scheme = {
//     name: "Scheme",
//     year: 1975
// };
// Object.setPrototypeOf(scheme, functionalLanguage);
// const javascript = {
//     name: "JavaScript",
//     year: 1995
// };
// Object.setPrototypeOf(javascript, functionalLanguage);
// for (let key in scheme) {
//     console.log(key, scheme.hasOwnProperty(key));
// }


// //

// const functionalLanguage = {
//     paradigm: "Functional"
// };
// const scheme = Object.create(functionalLanguage);
// scheme.name = "Scheme";
// scheme.year = 1975;
// const javascript = Object.create(functionalLanguage);
// javascript.name = "JavaScript";
// javascript.year = 1995;
// for (let key in scheme) {
//     console.log(key, scheme.hasOwnProperty(key));
// }


// //

// const functionalLanguage = Object.create(null);
// functionalLanguage.paradigm = "Functional";
// const scheme = Object.create(functionalLanguage);
// scheme.name = "Scheme";
// scheme.year = 1975;
// const javascript = Object.create(functionalLanguage);
// javascript.name = "JavaScript";
// javascript.year = 1995;
// for (let key in scheme) {
//     console.log(key, scheme.hasOwnProperty(key));
// }


// //


const functionalLanguage = Object.create({});
functionalLanguage.paradigm = "Functional";
const scheme = Object.create(functionalLanguage);
scheme.name = "Scheme";
scheme.year = 1975;
const javascript = Object.create(functionalLanguage);
javascript.name = "JavaScript";
javascript.year = 1995;
javascript.paradigm = "OO";
for (let key in javascript) {
    console.log(key, javascript[key]);
}


// //


// const functionalLanguage = Object.create({});
// functionalLanguage.paradigm = "Functional";
// const scheme = Object.create(functionalLanguage);
// scheme.name = "Scheme";
// scheme.year = 1975;
// const javascript = Object.create(functionalLanguage);
// javascript.name = "JavaScript";
// javascript.year = 1995;
// javascript.paradigm = "OO";
// console.log(javascript.paradigm);
// console.log(javascript.__proto__.paradigm);
// console.log(Object.getPrototypeOf(javascript).paradigm);


// //