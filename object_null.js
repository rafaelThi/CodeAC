// const book = {
//     title: "Clean Code",
//     author: "Robert C. Martin",
//     pages: 464,
//     language: "English",
//     available: true
// };
// console.log(book.publisher);




// const book = {
//     title: "Clean Code",
//     author: "Robert C. Martin",
//     pages: 464,
//     language: "English",
//     available: true
// };
// console.log("title" in book);
// console.log("author" in book);
// console.log("pages" in book);
// console.log("language" in book);
// console.log("available" in book);
// console.log("publisher" in book);





// const book = {
//     title: "Clean Code",
//     author: "Robert C. Martin",
//     pages: 464,
//     language: "English",
//     available: true
// };
// console.log("title" in book);
// console.log("author" in book);
// console.log("pages" in book);
// console.log("language" in book);
// console.log("available" in book);
// console.log("publisher" in book);






// const book = {
//     title: "Clean Code",
//     author: "Robert C. Martin",
//     pages: 464,
//     language: "English",
//     available: true
// };
// book.available = null;
// console.log(book);
// console.log("available" in book);





const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
delete book.available;
console.log(book);
console.log("available" in book);
