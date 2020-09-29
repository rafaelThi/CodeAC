// const charSets = new Set(["ASCII", "ISO", "UTF"]);
// console.log(charSets)



// const charSets = new Set(["ASCII", "ISO", "UTF"]);

// console.log(Array.from(charSets))


// const charSets = new Set(["ASCII", "ISO", "UTF"]);

// console.log(charSets);
// console.log(charSets.size);



// const charSets = new Set();

// charSets.add("ASC")
// charSets.add("ISO")
// charSets.add("UTF")

// console.log(Array.from(charSets));




// const charSets = new Set();

// charSets.add("ASC")
// charSets.add("ISO")
// charSets.add("UTF")
// charSets.add("AFGH")
// charSets.add("FGTB")
// charSets.add("285185")

// charSets.forEach((charSet)=>{
//     console.log(charSet)
// });


// const charSets = new Set();

// charSets.add("ASC")
// charSets.add("ISO")
// charSets.add("UTF")

// console.log(charSets.has("ASC"));
// console.log(charSets.has("123"));





// const charSets = new Set();

// charSets.add("ASC")
// charSets.add("ISO")
// charSets.add("UTF")
// console.log(charSets.delete("ASC"));
// console.log(charSets);

// console.log(charSets.has("ASC"));
// console.log(charSets.has("123"));





// const charSets = new Set();

// charSets.add("ASC")
// charSets.add("ISO")
// charSets.add("UTF")

// console.log(charSets);
// console.log(charSets.size);

// charSets.clear()

// console.log(charSets);
// console.log(charSets.size);



// const array = [];
// array.push(10)
// array.push(10)
// array.push(10)

// console.log(array)
// console.log(array.length)

// const set = new Set();
//  set.add(10)
//  set.add(10)
//  set.add(10)

//  console.log(set);
//  console.log(set.size)



// let array = [10, 10, 10]

// console.log(array)
// console.log(array.length)

// let set = new Set(array);

// console.log(set);
// console.log(set.size)

// array = Array.from(set);

// console.log(array)
// console.log(array.length)




// let array = [10, 10, 10]
// const obj = {}
// array.forEach((element)=>{
//     obj[element] = undefined
// })
// console.log(obj)




// let array = [10, 10, 10]
// console.log(array)

// const obj = {}
// array.forEach((element)=>{
//     obj[element] = undefined
// })
// array = Object.keys(obj)
// console.log(array)




// let array = [10, 10, 10, 20]
// console.log(array)

// let set = []

// array.forEach((element)=>{
//     if (set.includes(element)) {return}else{
//     set.push(element)
//     }
// })

// console.log(set)

//////ou


let array = [10, 10, 10, 10, 10, 10, 20, 20, 20,]
console.log(array)

let set = []

array.forEach((element)=>{
    if (!set.includes(element)) {
    set.push(element)
    }
})

console.log(set)
