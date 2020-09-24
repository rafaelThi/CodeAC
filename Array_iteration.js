// const frameworks = ["Angular.js", "Ember.js", "Vue.js"];
// frameworks.forEach(framework => console.log(framework));


// const frameworks = [
//     {
//         name: "Angular.js",
//         contributors: 1598
//     }, 
//     {
//         name: "Ember.js",
//         contributors: 746
//     },
//     {
//         name: "Vue.js",
//         contributors: 240
//     }
// ];
// const result = frameworks.filter(function (framework) {
//     return framework.contributors < 1000;
// });
// console.log(result);




// const frameworks = [
//     {
//         name: "Angular.js",
//         contributors: 1598
//     }, 
//     {
//         name: "Ember.js",
//         contributors: 746
//     },
//     {
//         name: "Vue.js",
//         contributors: 240
//     }
// ];
// const result = frameworks.find(function (framework) {
//     return framework.name === "Angular.js";
// });
// console.log(result);//retorna o 1° elementro true na função



// const frameworks = [
//         {
//             name: "Angular.js",
//             contributors: 1598
//         }, 
//         {
//             name: "Ember.js",
//             contributors: 746
//         },
//         {
//             name: "Vue.js",
//             contributors: 240
//         }
//     ];
//     const result = frameworks.every(function (framework) {
//         return framework.name.includes ("js");
//     });
//     console.log(result);
    

    
// const frameworks = [
//     {
//         name: "Angular.js",
//         contributors: 1598
//     }, 
//     {
//         name: "Ember.js",
//         contributors: 746
//     },
//     {
//         name: "Vue.js",
//         contributors: 240
//     }
// ];
// const result = frameworks.map( (framework) => framework.name);
// console.log(result);




const frameworks = [
    {
        name: "Angular.js",
        contributors: 1548
    }, 
    {
        name: "Ember.js",
        contributors: 746
    },
    {
        name: "Vue.js",
        contributors: 240
    }
];
const result = frameworks.reduce(function (total, framework) {
    return total + framework.contributors;
}, 0);
console.log(result);