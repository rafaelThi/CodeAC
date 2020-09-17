let command = "create table olamundo (id 12, 5,48,49,49,49,4,94,94,94,9, g)";

let regexp = /create table (\w+) \((.+)\)/;//trasforma esse comando em uma regExp, para trabalhae ele

let busca = command.match( regexp )//buscando o autor

let tableName = busca[1]

let columns = command.match(regexp)

columns = columns[2].split(",");


console.log("tableName = ",tableName);
console.log("columns = ",columns);
// console.log(busca);
