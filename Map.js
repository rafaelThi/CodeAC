// const TU = new Map([["second", 1], ["minute", 60], ["hour", 3600]]);

// console.log(TU)

// const TU = new Map([["second", 1], ["minute", 60], ["hour", 3600]]);

// console.log(Array.from(TU))


// const TU = new Map([["second", 1], ["minute", 60], ["hour", 3600]]);

// console.log(TU)
// console.log(TU.size)


// const TU = new Map([]);

// TU.set("second", 1)
// TU.set("minute", 60)
// TU.set("hour", 3600)

// console.log(TU)
// console.log(TU.size)



// const TU = new Map([]);

// TU.set("second", 1)
// TU.set("minute", 60)
// TU.set("hour", 3600)

// TU.forEach((value, key)=>{
//     console.log(key, value)
// })


// const TU = new Map([]);

// TU.set("second", 1)
// TU.set("minute", 60)
// TU.set("hour", 3600)

// console.log(TU.has('hour'))
// console.log(TU.has('teste'))


// const TU = new Map([]);

// TU.set("second", 1)
// TU.set("minute", 60)
// TU.set("hour", 3600)

// console.log(TU.get('hour'))
// console.log(TU.get('second'))
// console.log(TU.get('minute'))




// const TU = new Map([]);

// TU.set("second", 1)
// TU.set("minute", 60)
// TU.set("hour", 3600)
// // TU.delete("hour")

// console.log(TU.delete("hour"))

// console.log(TU.get('hour'))
// console.log(TU.get('second'))
// console.log(TU.get('minute'))



// const TU = new Map([]);

// TU.set("second", 1)
// TU.set("minute", 60)
// TU.set("hour", 3600)

// console.log(TU)
// console.log(TU.size)

// TU.clear();

// console.log(TU)
// // console.log(TU.size)



// const obj = {}
// obj[10] = "Number"
// // obj["10"] = "String"// esse sobrescreve  o de cima
// obj[true] = "Boolean"
// // obj["true"] = "String"// esse sobrescreve  o de cima

// console.log(obj[10])
// // console.log(obj["10"])
// console.log(obj[true])
// // console.log(obj["true"])
// //sai tudo string pq as chaves no obj ou é string ou symbol, sefor algo diferente são convertidas

// console.log(obj)




// const map = new Map();
// map.set(10, "Number")
// map.set("10", "String")
// map.set(true, "Boolean")
// map.set("true", "String")

// console.log(map.get(10))
// console.log(map.get("10"))
// console.log(map.get(true))
// console.log(map.get("true"))




// const obj = Object.create(null);

// console.log("toString" in obj)
// console.log("valueOf" in obj)


const map = new Map();

console.log(map.get("toString"))
console.log(map.get("valueOf"))