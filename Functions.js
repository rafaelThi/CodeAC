// const sum = function (a, b) {
//     return a + b;
// }
// const sub = function (a, b) {
//     return a-b;
// }
// console.log(sum(1,2)) 
// console.log(sub(1,2)) 



// const sum = function (a, b) {
//     return a + b;
// }
// const sub = function (a, b) {
//     return a-b;
// }

// const calculator = function (fn) {//usar fn para chamar uma function
//     return function(a,b){//aqui vão os parametros
//         return fn(a,b)//aqui vai a function + paramentros, sejameles qual for 
//     }
// }

// console.log (calculator(sum)(10,5));
// console.log (calculator(sub)(10,5))



// const sum = function(){
//   let total = 0;
//   for (let argument in arguments){
//       total += arguments[argument]
//   }
//   return total;
// }

// console.log(sum(1,2,3,4,5,6,7,8,9));




const sum = function(...numbers){
    let total = 0;
    for (let number of numbers){
        total += number
    }
    return total;
  }
  
  console.log(sum(1,2,3,4,5,6,7,8,9));


  