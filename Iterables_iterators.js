// const lang = ["C", "JS", "COBOL "]

// for (let i = 0; i<lang.length; i++){
//     console.log(lang[i])
// }


// const lang = ["C", "JS", "COBOL "]

// for (let i in lang){
//     console.log(lang[i])
// }


// const langs = ["C", "JS", "COBOL "]
// langs.forEach((lang)=>{
//     console.log(lang)
// })


// const langs = ["C", "JS", "COBOL "]

// for (let lang of langs){
//     console.log(lang)
// }


// const langs = ["C", "JS", "COBOL "]
// const newLangs = ["C++", "Java", "Ruby"]

// const fullLang = langs.concat(newLangs)

// console.log(fullLang)




// const langs = ["C", "JS", "COBOL "]
// const newLangs = ["C++", "Java", "Ruby"]

// const fullLang = [...newLangs, ...langs]

// console.log(fullLang)





// const langs = new Map ([["C", 1234], ["JS", 4567], ["COBOL ", 8520]])

// for (let lang of langs){
// console.log(lang)
// }




// const langs = new Map ([["C", 1234], ["JS", 4567], ["COBOL ", 8520]])

// for (let [lang, number] of langs){
// console.log(lang)
// console.log(number)
// }




// const langs = new Set (["C", "JS", "COBOL "])

// for (let lang of langs){
// console.log(lang)
// }





// const langs = new Set (["C", "JS", "COBOL "])

// console.log([...langs])




// const langs = "COBOL"

// for (let char of langs){
//     console.log(char)
// }



// const langs = "COBOL"

// console.log([...langs])




// const langs =  ["C", "JS", "COBOL"]
// const iterator = langs[Symbol.iterator]();

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())




// const langs =  "COBOL"
// const iterator = langs[Symbol.iterator]();

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())




// function createIterator(...array){
//     let i=0;''
//     return{
//         next(){
//             if( i < array.length){
//                 return{
//                     value: array[i++],
//                     done: false
//                 }
//             }else{
//                 return{
//                     value: undefined,
//                     done: true
//                 }
//             }
//         }
//     }
// }

// const iterator = createIterator("C ++", "Ruby", "COBOL")
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())




// function createIterable(...array) {
//     return {
//         [Symbol.iterator]() {
//             let i = 0;
//             return {
//                 next() {
//                     if (i < array.length) {
//                         return {
//                             value: array[i++],
//                             done: false
//                         }
//                     } else {
//                         return {
//                             value: undefined,
//                             done: true
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// const iterable = createIterable("Fortran", "Lisp", "COBOL");
// for (let language of iterable) {
//     console.log(language);
// }






// function createIterable(...array) {
//     return {
//         [Symbol.iterator]() {
//             let i = 0;
//             return {
//                 next() {
//                     if (i < array.length) {
//                         return {
//                             value: array[i++],
//                             done: false
//                         }
//                     } else {
//                         return {
//                             value: undefined,
//                             done: true
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// const iterable = createIterable("Fortran", "Lisp", "COBOL");
// console.log([...iterable]);
