// const circle = {
//     radius: 5,
//     calcuArea (){
//         return Math.PI * Math.pow(this.radius, 2)
//     }
// }
// console.log (circle.calcuArea())



// const calcuArea = function(){
//     return Math.PI * Math.pow(this.radius, 2)
// }

// const circle = {
//     radius: 5,
//     calcuArea
// }
// console.log (circle.calcuArea())


// const calcuArea = function(){
//     return Math.PI * Math.pow(this.radius, 2)
// }

// const circle = {
//     radius: 1,
//     //calcuArea //não precisa dessa parte com eles(call ou apply)
// }
// console.log (calcuArea.apply(circle))


// const calcuArea = function(fn) {
//     return fn(Math.PI * Math.pow(this.radius, 2));
// };
// const circle = {
//     radius: 10,
//     calcuArea
// };
// console.log(calcuArea.call(circle, Math.round));
// console.log(calcuArea.apply(circle, [Math.ceil]));


const calculateArea = function(fn) {
    return fn(Math.PI * Math.pow(this.radius, 2));
};
const circle = {
    radius: 10,
    calculateArea
};
const calculateAreaForCircle = calculateArea.bind(circle);
console.log(calculateAreaForCircle(Math.round));
console.log(calculateAreaForCircle(Math.ceil));

