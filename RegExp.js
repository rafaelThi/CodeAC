// console.log(/john@gmail.com/)//object
 // pode ser usado tbmconsole.log (new RegExp("john@gmail.com") 
//  )

// new RegExp("john@gmail.com");


// let regExp = /john@gmail.com/;
// let result = regExp.test("john@gmail.com");
// console.log(result);



// let regExp = /john@gmail.com/;
// let result = regExp.exec("john@gmail.com");
// console.log(result);



// let regExp = /john@gmail.com/;
// let result = regExp.exec("E-mail: john@gmail.com");
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);



// let regExp = /john@gmail.com/;
// let result = regExp.exec("E-Mail: john@gmailxcom");
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);



// let regExp = /john@gmail\.com/;
// let result = regExp.exec("E-Mail: john@gmailxcom");
// console.log(result);



// let regExp = /^john@gmail\.com$/;
// let result1 = regExp.exec("E-Mail: john@gmail.com");
// console.log(result1);
// let result2 = regExp.exec("john@gmail.com");
// console.log(result2);



// let regExp = /^[a-z][a-z][a-z][a-z]@gmail\.com$/;
// let result = regExp.exec("abcd@gmail.com");
// console.log(result[0]);
// console.log(result.index);
// console.log(result);



// let regExp = /^[a-z]+@[a-z]+\.[a-z]+.[a-z]+$/;
// let result = regExp.exec("a@hotmail.com.br");
// console.log(result[0]);
// console.log(result.index);
// console.log(result);


// let regExp = /^[a-z]+@[a-z]+\.[a-z]{3}$/;
// let result = regExp.exec("jane@hotmail.com");
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);



// let regExp = /^[a-z]+@[a-z]+(\.[a-z]{2,3})+$/;
// let result = regExp.exec("mary@hotmail.com.br");
// console.log(result[0]);
// console.log(result[1]);
// console.log(result.index);
// console.log(result.input);



// let regExp = /^\w+@\w+(\.\w{2,3})+$/;//funciona o .com.br, pois tem o tamanho de {2,3}
// let result = regExp.exec("mary@hotmail.com.br");
// console.log(result[0]);
// console.log(result[1]);
// console.log(result.index);
// console.log(result.input);


// let regExp = /^(\w+)@(\w+(\.\w{2,3})+)$/;//funciona o .com.br, pois tem o tamanho de {2,3}
// let result = regExp.exec("mary@hotmail.com.br");
// console.log(result[0]);
// console.log(result[1]);
// console.log(result[2]);
// console.log(result.index);
// console.log(result.input);




// let regExp = /([a-z]+)@([\.a-z]+)/;
// let result = regExp.exec("mary@hotmail.com");
// console.log(result[0]);
// console.log(result[1]);
// console.log(result[2]);
// console.log(result.index);
// console.log(result.input);



let regExp = /\w+@[\.\w]+/g;
let result1 = regExp.exec("mary@hotmail.com;john@gmail.com");
console.log(result1[0]);
console.log(result1.index);

let result2 = regExp.exec("mary@hotmail.com;teste_de_tamnaho@te.alguma.coisa.outra.coisa.por.exeplo");
console.log(result2[0]);
console.log(result2.index);
// esse permite que coloque qualquer tamanha de palavra antes do @, e qualquer tamanho de nome do provedor, e depois permite que eu utilize varios ".alguma.coisa.outra.coisa.por.exeplo" 

