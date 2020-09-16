console.log(Symbol("a"),
Symbol("b"),
Symbol("c"),)




console.log(Symbol("a") == Symbol("a"),
Symbol("b") == Symbol("b"),
Symbol("c") == Symbol("c"),
)

//operaçoes que são reconhecidas
console.log(
Symbol.hasInstance,           
Symbol.isConcatSpreadable,
Symbol.iterator,
Symbol.match,
Symbol.replace,
Symbol.search,
Symbol.species,
Symbol.split,
Symbol.toPrimitive,
Symbol.toStringTag,
Symbol.unscopables,

)


let regexp = /JavaScript/;
regexp[Symbol.match] = false;
console.log("/JavaScript/".startsWith(regexp));
