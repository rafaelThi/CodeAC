// const book1 = {
//     title: "Clean Code",
//     author: "Robert C. Martin"
// };
// const book2 = {
//     title: "Clean Code",
//     author: "Robert C. Martin"
// };
// console.log(book1 == book2);
// console.log(book1 === book2);




const book1 = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,

};
const book2 = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
};
let equal = true;
for (let key in book1) {
    if (book1[key] !== book2[key]) equal = false;
}
for (let key in book2) {
    if (book2[key] !== book1[key]) equal = false;
}
console.log(equal);
//para dar true, os objetos tem que ser 100% iguais