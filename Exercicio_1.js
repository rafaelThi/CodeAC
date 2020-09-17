let command = "create table author (id number, name string, age number, city string, state string, country string)";

let regExp = /create table (\w)+ (\w+)/;

let busca = command.match("author")

let columns = command.match("(id number, name string, age number, city string, state string, country string)")

busca = busca[0]

columns = columns[1].split(",");

console.log(command)

console.log("tableName = ",busca);
console.log("columns = ",columns);
