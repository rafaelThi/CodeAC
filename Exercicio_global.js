let command = "create table author (id number, name string, age number, city string, state string, country string)";
let regexp = /create table (\w+) \((.+)\)/;
let busca = command.match( regexp )
let tableName = busca[1]

let columns = command.match(regexp)
columns = columns[2].split(",");

const database = {
    "tables": {
        [tableName]:{
            columns
        },
        data: []
    }
}
console.log(JSON.stringify(database));