// const wm1 = new WeakMap();

// console.log(wm1)


// const wm1 = new WeakMap();
// const obj1 = {}
// const obj2 = {}
// wm1.set(obj1, "obj1")
// wm1.set(obj2, "obj2")

// console.log(wm1)

// const wm1 = new WeakMap();
// const obj1 = {}
// const obj2 = {}
// wm1.set(obj1, "obj1")
// wm1.set(obj2, "obj2")

// console.log(wm1)
// console.log(wm1.has(obj1))
// console.log(wm1.has(obj2))



// const wm1 = new WeakMap();
// const obj1 = "string1"
// const obj2 = "string2"
// wm1.set(obj1, "obj1")
// wm1.set(obj2, "obj2")

// console.log(wm1)
// console.log(wm1.get(obj1))
// console.log(wm1.get(obj2))


// const wm1 = new WeakMap();
// const obj1 = {}
// const obj2 = {}
// wm1.set(obj1, "obj1")
// wm1.set(obj2, "obj2")
// console.log(wm1.delete(obj1))
// console.log(wm1.delete(obj2))
// console.log(wm1)
// console.log(wm1.get(obj1))
// console.log(wm1.get(obj2))






// const rect1 = {
//     x:10,
//     y:5
// };

// const rect2 = {
//     x:5,
//     y:2
// }

// function calArea(rect) {
//         const area = rect.x * rect.y
//         return area;
// }

// console.log(calArea(rect1))
// console.log(calArea(rect2))




// const areas = new WeakMap();
// const rect1 = {
//     x:10,
//     y:5
// };

// const rect2 = {
//     x:5,
//     y:2
// }

// function calArea(rect) {
//     if (areas.has(rect)){
//        console.log("Using cache...")
//        return areas.get(rect)
// }

// const area = rect.x * rect.y
// areas.set(rect, area)
// return area;

// }
// console.log(calArea(rect1))
// console.log(calArea(rect2))
// console.log(calArea(rect2))
// console.log(calArea(rect2))






const areas = new WeakMap();
const rect1 = {
    x:10,
    y:5
};

const rect2 = {
    x:5,
    y:2
}

function calArea(rect) {
    if (areas.has(rect)){
       console.log("Using cache...")
       return areas.get(rect)
}

const area = rect.x * rect.y
areas.set(rect, area)
return area;

}
console.log(calArea(rect1))
console.log(calArea(rect2))
console.log(calArea(rect2))
console.log(calArea(rect2))
rect1 = null;
rect2 = null