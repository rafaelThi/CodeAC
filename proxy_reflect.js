// function createArray(){
//     return {};
// }

// const langs =  createArray();
// console.log(langs)



// function createArray(){
//     return {};
// }

// const langs =  createArray();
// langs[0]="C++"
// langs[1]="Ruby"
// langs[2]="JS"
// console.log(langs)





// function createArray(){
//     return {};
// }

// const langs =  createArray();
// langs[0]="C++"
// langs[1]="Ruby"
// langs[2]="JS"
// console.log(langs)
// console.log(langs.length)




// function createArray(){
//     return new Proxy({}, {

//     });
// }

// const langs =  createArray();
// langs[0]="C++"
// langs[1]="Ruby"
// langs[2]="JS"
// console.log(langs)
// console.log(langs.length)




// function createArray(){
//     return new Proxy({}, {
//         set(target){
//             console.log(target)

//         }
//     });
// }

// const langs =  createArray();
// langs[0]="C++"
// langs[1]="Ruby"
// langs[2]="JS"
// console.log(langs)
// console.log(langs.length)




// function createArray(){
//     return new Proxy({}, {
//         set(t, k, v){
//             console.log(t, k, v)

//         }
//     });
// }

// const langs =  createArray();
// langs[0]="C++"
// langs[1]="Ruby"
// langs[2]="JS"
// console.log(langs)
// console.log(langs.length)





// function createArray(){
//     return new Proxy({}, {
//         set(t, k, v){
//             t[k] = v

//         }
//     });
// }

// const langs =  createArray();
// langs[0]="C++"
// langs[1]="Ruby"
// langs[2]="JS"
// console.log(langs)
// console.log(langs.length)




// function createArray(){
//     return new Proxy({}, {
//         set(t, k, v){
//             t.length = t.length||0
//             t.length++
//             t[k] = v

//         }
//     });
// }

// const langs =  createArray();
// langs[0]="C++"
// langs[1]="Ruby"
// langs[2]="JS"
// console.log(langs)
// console.log(langs.length)




// function createArray(){
//     return new Proxy({}, {
//         set(t, k, v){
//             t.length = t.length||0
//             t.length++
//             t[k] = v

//         }
//     });
// }

// const langs =  createArray();
// langs[0]="C++"
// langs[1]="Ruby"
// langs[2]="JS"
// console.log(langs)
// console.log(langs.length)
// delete langs[1]
// delete langs[2]
// delete langs[3]
// console.log(langs)
// console.log(langs.length)





// function createArray(){
//     return new Proxy({}, {
//         set(t, k, v){
//             t.length = t.length||0
//             t.length++
//             t[k] = v

//         },
//         deleteProperty(t, k){
//             if (k in t){
//             t.length--;
//             delete t[k]
//         }}
//     });
// }

// const langs =  createArray();
// langs[0]="C++"
// langs[1]="Ruby"
// langs[2]="JS"
// console.log(langs)
// console.log(langs.length)
// delete langs[1]
// delete langs[2]
// delete langs[3]
// console.log(langs)
// console.log(langs.length)





// function createArray(){
//     return new Proxy({}, {
//         set(t, k, v){
//             t.length = t.length||0
//             t.length++
//             t[k] = v

//         },
//         get(t,k){
//             return t[k]
//         },
//         deleteProperty(t, k){
//             if (k in t){
//             t.length--;
//             delete t[k]
//         }}
//     });
// }

// const langs =  createArray();
// langs[0]="C++"
// langs[1]="Ruby"
// langs[2]="JS"
// console.log(langs)
// console.log(langs.length)
// delete langs[1]
// delete langs[2]
// delete langs[3]
// console.log(langs)
// console.log(langs.length)
// console.log(langs[0])
// console.log(langs[3])






// function createArray(){
//     return new Proxy({}, {
//         set(t, k, v){
//             t.length = t.length||0
//             t.length++
//             t[k] = v

//         },
//         get(t,k){
//             if (typeof k=== "string" && k.match(/\d+/)){
//                 if(!(k in t)){
//                     throw`Property ${k} not found`;
//                 }
//                 console.log(k)
//             }
//             return t[k]
//         },
//         deleteProperty(t, k){
//             if (k in t){
//             t.length--;
//             delete t[k]
//         }}
//     });
// }

// const langs =  createArray();
// langs[0]="C++"
// langs[1]="Ruby"
// langs[2]="JS"
// console.log(langs)
// console.log(langs.length)
// delete langs[1]
// delete langs[2]
// delete langs[3]
// console.log(langs)
// console.log(langs.length)
// console.log(langs[0])
// console.log(langs[3])








function createArray(){
    return new Proxy({}, {
        set(t, k, v){
            t.length = t.length||0
            t.length++
            Reflect.set(t,k,v)

        },
        get(t,k){
            if (typeof k=== "string" && k.match(/\d+/)){
                if(!(Reflect.has(t,k))){
                    throw`Property ${k} not found`;
                }
                
            }
            return Reflect.get(t, k)
        },
        deleteProperty(t, k){
            if (Reflect.has(t,k)){
            t.length--;
            Reflect.deleteProperty(t,k)
        }}
    });
}

const langs =  createArray();
langs[0]="C++"
langs[1]="Ruby"
langs[2]="JS"
console.log(langs)
console.log(langs.length)
delete langs[1]
delete langs[2]
delete langs[3]
console.log(langs)
console.log(langs.length)
console.log(langs[0])
console.log(langs[3])
