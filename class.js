// class Square{

// }

// console.log(Square)


// const Square = class{

// }

// console.log(Square)



// const Square = class{

// }
// const square = new Square();
// console.log(square)


// const square = new Square();
// const Square = class{

// }
// console.log(square)



// const square = new Square();
// class Square{

// }
// console.log(square)




// class Square{
//     constructor(side){
//         this.side = side
//     }
// }

// const square = new Square(4);

// console.log(square)



// class Square{
//     constructor(side){
//         this.side = side
//     }
//     string(){
//         return `side: ${this.side}`
//     }
// }

// const square = new Square(4);

// console.log(square)



// class Square{
//     constructor(side){
//         this.side = side
//     }
//     string(){
//         return `Side: ${this.side}`
//     }
// }

// const square = new Square(4);

// console.log(square.string())



// class Square{
//     constructor(side){
//         this.side = side
//     }
//    calcArea(){
            
//             return (
//                 `Area: ${Math.pow(this.side, 2)}`
//             ) 
//    }

//    string(){
//             return `Side: ${this.side}`
//         }
// }

// const square = new Square(4);

// console.log(square.string())
// console.log(square.calcArea())


////


// class Square{
//     constructor(side){
//         this.side = side
//     }
//    calcArea(){
            
//             return (
//                 `Area: ${Math.pow(this.side, 2)}`
//             ) 
//    }

//    string(){
//             return `Side: ${this.side}`
//         }
// }

// const square = new Square(4);

// console.log(square.string())
// console.log(square.calcArea())

// //





// class Square{
//     constructor(side){
//         this.side = side
//     }
//    calcArea(){
            
//             return (
//                 `Area: ${Math.pow(this.side, 2)}`
//             ) 
//    }

//    string(){
//             return `Side: ${this.side}`
//         }

//         static fromArea(area){
//             return new Square(Math.sqrt(area))
//         }
// }

// const square = Square.fromArea(16);

// console.log(square.string())
// console.log(square.calcArea())






// function Square(side){
//     this.side = side
// }
// Square.prototype.calcArea = function (){
//     return Math.pow(this.side, 2)
// }



// Square.prototype.string = function (){
//     return `Side: ${this.side} Area: ${this.calcArea()}`
// }

// Square.fromArea = (area)=>{
//     return new Square(Math.sqrt(area))
// }

// const square = Square.fromArea(16);
// console.log(square.string())
// console.log(square.calcArea())







// function Square(side){
//     this.side = side
// }
// Square.prototype.calcArea = function (){
//     return Math.pow(this.side, 2)
// }



// Square.prototype.string = function (){
//     return `Side: ${this.side} Area: ${this.calcArea()}`
// }

// Square.fromArea = (area)=>{
//     return new Square(Math.sqrt(area))
// }

// const square = Square.fromArea(16);
// console.log(square.string())
// console.log(square.calcArea())


// class Circle{
//     constructor(radius){
//         this.radius = radius;
//     }
//     calcArea(){
//         return Math.PI * Math.pow(this.radius, 2);
//     }
//     string(){
//         return `radius: ${this.radius}`
//     }
// }

// const circle = new Circle(10);
// console.log(circle)
// console.log(circle.string())
// console.log(circle.calcArea())



// function Square(side){
//     this.side = side
// }
// Square.prototype.calcArea = function (){
//     return Math.pow(this.side, 2)
// }



// Square.prototype.string = function (){
//     return `Side: ${this.side} Area: ${this.calcArea()}`
// }

// Square.fromArea = (area)=>{
//     return new Square(Math.sqrt(area))
// }

// const square = Square.fromArea(16);
// console.log(square.string())
// console.log(square.calcArea())


// class Circle{
//     constructor(radius){
//         this.radius = radius;
//     }
//     calcArea(){
//         return Math.PI * Math.pow(this.radius, 2);
//     }
//     string(){
//         return `radius: ${this.radius}`
//     }
//     static fromArea(area){
//         return new Circle(Math.sqrt(area/ Math.PI))
//     }
// }

// const circle = Circle.fromArea(3.141592653589793);
// console.log(circle)
// console.log(circle.string())
// console.log(circle.calcArea())



// class Shape{

// }


// class Square extends Shape {
//     constructor (side){
//         super()
//         this.side = side
//     }
// }
// Square.prototype.calcArea = function (){
//     return Math.pow(this.side, 2)
// }



// Square.prototype.string = function (){
//     return `Side: ${this.side} Area: ${this.calcArea()}`
// }

// Square.fromArea = (area)=>{
//     return new Square(Math.sqrt(area))
// }

// const square = Square.fromArea(16);
// console.log(square.string())
// console.log(square.calcArea())


// class Circle extends Shape{
//     constructor(radius){
//         super()
//         this.radius = radius;
//     }
//     calcArea(){
//         return Math.PI * Math.pow(this.radius, 2);
//     }
//     string(){
//         return `radius: ${this.radius}`
//     }
//     static fromArea(area){
//         return new Circle(Math.sqrt(area/ Math.PI))
//     }
// }

// const circle = Circle.fromArea(3.141592653589793);
// console.log(circle)
// console.log(circle.string())
// console.log(circle.calcArea())





class Shape{

    string(){
        return `Area: ${this.calcArea()}`;
    }

}

class Square extends Shape {
    constructor (side){
        super()
        this.side = side
    }

calcArea (){
    return Math.pow(this.side, 2)
}

string (){
    return `Side: ${this.side} ${super.string()}`
}

static fromArea  (area){
    return new Square(Math.sqrt(area))
}
}
const square = Square.fromArea(16);
console.log(square.string())
console.log(square.calcArea())


class Circle extends Shape{
    constructor(radius){
        super()
        this.radius = radius;
    }
    calcArea(){
        return Math.PI * Math.pow(this.radius, 2);
    }
    string(){
        return `radius: ${this.radius} ${super.string()}`
    }
    static fromArea(area){
        return new Circle(Math.sqrt(area/ Math.PI))
    }
}

const circle = Circle.fromArea(3.141592653589793);
console.log(circle)
console.log(circle.string())
console.log(circle.calcArea())

