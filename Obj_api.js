const javascript = Object.create({});
Object.assign(javascript, {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
});
console.log(javascript);



const javascript = Object.create({});
Object.assign(javascript, {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
}, {
    author: "Brendan Eich",
    influencedBy: "Java, Scheme and Self"
});
console.log(javascript);



const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
console.log(Object.keys(javascript));




const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
console.log(Object.values(javascript));



const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
console.log(Object.entries(javascript));



const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
console.log(Object.is(javascript, javascript));



const javascript1 = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
const javascript2 = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
console.log(Object.is(javascript1, javascript2));



console.log(Object.is(NaN, NaN));



const javascript = {};
Object.defineProperty(javascript, "name", {
    value: "JavaScript"
});
console.log(javascript);
console.log(Object.keys(javascript));
console.log(Object.values(javascript));
console.log(Object.entries(javascript));



const javascript = {};
Object.defineProperty(javascript, "name", {
    enumerable: true,
    value: "JavaScript"
});
console.log(javascript);
console.log(Object.keys(javascript));
console.log(Object.values(javascript));
console.log(Object.entries(javascript));




const javascript = {};
Object.defineProperty(javascript, "name", {
    enumerable: true,
    value: "JavaScript"
});
javascript.name = "ECMAScript";
console.log(javascript);
console.log(Object.keys(javascript));
console.log(Object.values(javascript));
console.log(Object.entries(javascript));



const javascript = {};
Object.defineProperty(javascript, "name", {
    enumerable: true,
    value: "JavaScript",
    writable: true
});
javascript.name = "ECMAScript";
console.log(javascript);
console.log(Object.keys(javascript));
console.log(Object.values(javascript));
console.log(Object.entries(javascript));




const javascript = {};
Object.defineProperty(javascript, "name", {
    enumerable: true,
    value: "JavaScript",
    writable: true
});
javascript.name = "ECMAScript";
delete javascript.name;
console.log(javascript);
console.log(Object.keys(javascript));
console.log(Object.values(javascript));
console.log(Object.entries(javascript));




const javascript = {};
Object.defineProperty(javascript, "name", {
    configurable: true,
    enumerable: true,
    value: "JavaScript",
    writable: true
});
javascript.name = "ECMAScript";
delete javascript.name;
console.log(javascript);
console.log(Object.keys(javascript));
console.log(Object.values(javascript));
console.log(Object.entries(javascript));




const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
Object.preventExtensions(javascript);
javascript.name = "ECMAScript";
javascript.author = "Brendan Eich";
delete javascript.year;
console.log(javascript);
console.log(Object.isExtensible(javascript));





const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
Object.seal(javascript);
javascript.name = "ECMAScript";
javascript.author = "Brendan Eich";
delete javascript.year;
console.log(javascript);
console.log(Object.isExtensible(javascript));
console.log(Object.isSealed(javascript));











const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
Object.freeze(javascript);
javascript.name = "ECMAScript";
javascript.author = "Brendan Eich";
delete javascript.year;
console.log(javascript);
console.log(Object.isExtensible(javascript));
console.log(Object.isSealed(javascript));
console.log(Object.isFrozen(javascript));



const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
Object.freeze(javascript);
javascript.name = "ECMAScript";
javascript.author = "Brendan Eich";
delete javascript.year;
console.log(javascript);
console.log(Object.isExtensible(javascript));
console.log(Object.isSealed(javascript));
console.log(Object.isFrozen(javascript));
Object.setPrototypeOf(javascript, {});
