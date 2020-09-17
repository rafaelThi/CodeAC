// console.log({},
// new Object(),
// Object.create(null),
// )

// const book = {
//     title: "Clean Code",
//     author: "Robert C. Martin",
//     pages: 464,
//     language: "English",
//     available: true
// };
// console.log(book);


// const title = "Clean Code";
// const author = "Robert C. Martin";
// const pages = 464;
// const language = "English";
// const available = true;
// const book = {
//     title,
//     author,
//     pages,
//     language,
//     available
// };
// console.log(book);


// const book = {
//     title: "Clean Code",
//     author: "Robert C. Martin",
//     "number-of-pages": 464,
//     language: "English",
//     available: true
// };
// console.log(book);


// const key1 = "title";
// const key2 = "author";
// const key3 = "pages";
// const key4 = "language";
// const key5 = "available";
// const book = {
//     [key1]: "Clean Code",
//     [key2]: "Robert C. Martin",
//     [key3]: 464,
//     [key4]: "English",
//     [key5]: true
// };
// console.log(book);


// const book = {};
// book.title = "Clean Code";
// book.author = "Robert C. Martin";
// book.pages = 464;
// book.language = "English";
// book.available = true;
// console.log(book);


// const key1 = "title";
// const key2 = "author";
// const key3 = "pages";
// const key4 = "language";
// const key5 = "available";
// const book = {};
// book[key1] = "Clean Code",
// book[key2] = "Robert C. Martin",
// book[key3] = 464,
// book[key4] = "English",
// book[key5] = true
// console.log(book);



// const book = {
//     title: "Clean Code",
//     author: "Robert C. Martin",
//     pages: 464,
//     language: "English",
//     available: true
// };
// console.log(book.title);
// console.log(book.author);
// console.log(book.pages);
// console.log(book.language);
// console.log(book.available);



// const book = {
//     title: "Clean Code",
//     author: "Robert C. Martin",
//     pages: 464,
//     language: "English",
//     available: true
// };
// for (let key in book) {
//     console.log(book[key]);
// }




const book1 = {
    title: "1280",
    author: "Robert dvdveveve. Martin",
    pages: 4645454,
    language: "Englicececesh",
    available: false
};
const book2 = {};
for (const parametro in book1) {
    book2[parametro] = book1[parametro];
}
console.log(book2);
