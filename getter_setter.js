// const rec = {
//     x: 10,
//     y: 2,
//     calcuArea(){
//         return this.x *this.y;
//     }
// };
// console.log(rec.calcuArea())



// const rec = {
//     x: 10,
//     y: 2,
//     get calcuArea(){
//         return this.x *this.y;
//     }
// };
// console.log(rec.calcuArea)


// const rec = {
//    set x(x){
//     if (x > 0) {
//         this._x = x;
//     } else {
//         console.log("Invalid value for x");
//     }
//         this._x=x
//    },
//    set y(y){
//     if (y > 0) {
//         this._y = y;
//     } else {
//         console.log("Invalid value for y");
//     }
//     this._y=y
//    },
//     get calcuArea(){
//         return this._x *this._y;
//     }
// };

// rec.x=10
// rec.y=3
// console.log(rec.calcuArea)


const rec = {};
Object.defineProperty(rec, "x", {
    set (x) {
        if (x > 0) {
            this._x = x;
        } else {
            console.log("Invalid value for x");
        }
        this._x=x;
    }
});
Object.defineProperty(rec, "y", {
    set (y) {
        if (y > 0) {
            this._y = y;
        } else {
            console.log("Invalid value for y");
        }
        this._y=y;
    }
});

Object.defineProperty(rec, "area", {
    get () {
        return this._x*this._y
    }
});

rec.x=5
rec.y=3
console.log(rec.area)
