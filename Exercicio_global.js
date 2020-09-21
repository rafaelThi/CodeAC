let command = "create table author (id number, name string, age number, city string, state string, country string)";
let regexp = /create table (\w+) \((.+)\)/;
let busca = command.match( regexp )
let tableName = busca[1]

let columns = command.match(regexp)
columns = columns[2].split(", ");

const database = {
    "tables": {
        [tableName]:{
            columns:{},
        data: []
        }
    }
};

for (column of columns){
    coluns = column.split(" ");
    const name = coluns[0];
    const type = coluns[1];

    console.log (name, type)

 database.tables[tableName].columns[name]=type;

}

 console.log(JSON.stringify(database, undefined, " "));