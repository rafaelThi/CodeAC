let command = "create table author (id number, name string, age number, city string, state string, country string)";//comando que vem

let regExp = /create table (\w)+ (\w+)/;//trasforma esse comando em uma regExp, para trabalhae ele

let busca = command.match("author")//buscando o autor

let columns = command.match("(id number, name string, age number, city string, state string, country string)")//buscando colunas

busca = busca[0]//pegando do array

columns = columns[1].split(",");//pegando do array e separando

//mostrando
console.log(command)

console.log("tableName = ",busca);
console.log("columns = ",columns);



//outra solução;
// const statement = "create table author (id number, name string, age number, city string, state string, country string)";
// const regexp = /create table ([a-z]+) \((.+)\)/;
// const parsedStatement = statement.match(regexp);
// const tableName = parsedStatement[1];


// let columns = parsedStatement[2];
// columns = columns.split(", ");


// console.log(tableName);
// console.log(columns);