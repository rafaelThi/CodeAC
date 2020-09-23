// const v1 = 10;
// const fn1 = function() {
//     console.log(v1);
// };
// fn1();


// const v1 = 10;
// const fn1 = function() {
//     const fn2 = function() {
//         console.log(v1);
//     }
//     fn2();
// };
// fn1();


// const v1 = 10;
// const fn1 = function() {
//     const v1 = 100;
//     const fn2 = function() {
//         console.log(v1);
//     }
//     fn2();
// };
// fn1();


// const v1 = 10;
// const fn1 = function() {
//     const v1 = 100;
//     const fn2 = function() {
//         const v1 = 1000;
//         console.log(v1);
//     }
//     fn2();
// };
// fn1();




// const v1 = 10;
// const fn1 = function() {
//     const v1 = 100;
//     const fn2 = function() {
//         const v1 = 1000;
//         console.log(v1);
//         const v2 = 10000;
//         console.log(v2);
//     }
//     fn2();
// };
// fn1();
// console.log(v2);




// const obj1 = {
//     p1: 10,
//     getP1: function() {
//         return this.p1;
//     }
// };
// console.log(obj1.getP1());




// const obj1 = {
//     p1: 10,
//     getP1: function() {
//         function fn1() {
//             return this.p1;
//         }
//         return fn1();
//     }
// };
// console.log(obj1.getP1());




// const obj1 = {
//     p1: 10,
//     getP1: function() {
//         const that = this;
//         function fn1() {
//             return that.p1;
//         }
//         return fn1();
//     }
// };
// console.log(obj1.getP1());




const obj1 = {
    p1: 10,
    getP1: function() {
        const fn1 = () => {
            return this.p1;
        }
        return fn1();
    }
};
console.log(obj1.getP1());
