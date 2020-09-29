// const ws1 = new WeakSet();
// const obj1 ={};
// const obj2 ={};

// console.log (ws1)



// const ws1 = new WeakSet();
// const obj1 ={};
// const obj2 ={};
// ws1.add(obj1)
// ws1.add(obj2)
// console.log(ws1)


// const ws1 = new WeakSet();
// const obj1 ={};
// const obj2 ={};
// ws1.add(obj1)
// ws1.add(obj2)
// console.log(ws1)
// console.log(ws1.has(obj1))
// console.log(ws1.has(obj2))


// const ws1 = new WeakSet();
// const obj1 = {};
// const obj2 ={};
// ws1.add(obj1)
// ws1.add(obj2)
// console.log(ws1)
// console.log(ws1.delete(obj2))
// console.log(ws1.has(obj1))
// console.log(ws1.has(obj2))







const circles = new WeakSet();
function Circle(radius) {
    circles.add(this)
    this.radius = radius
}
Circle.prototype.calcArea = function () {
    if (!circles.has(this)) throw "Invalid obj";
    return Math.PI * Math.pow(this.radius, 2)
}
let circle1 = new Circle(10);

const circle2= {
    radius: 5
}

console.log(circle1.calcArea())
console.log(circle1.calcArea.call(circle2))