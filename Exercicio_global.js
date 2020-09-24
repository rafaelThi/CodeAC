//
const DataBaseError = function(command, message){
    this.command =command;
    this.message =  message;
}
//

const database = {
    tables: {},
        createTable(command){
                    
                    let regexp = /create table (\w+) \((.+)\)/;
                    let busca = command.match( regexp )
                    let tableName = busca[1]
                   this.tables[tableName] = {
                        columns:{},
            
                    data: []
                    }

let columns = command.match(regexp)
columns = columns[2].split(", ");

for (column of columns){
    coluns = column.split(" ");
    const name = coluns[0];
    const type = coluns[1];

    // console.log (name, type)

 this.tables[tableName].columns[name]=type;

}
        
    },
        insert(command){

            const regexp = /insert into (\w+) \((.+)\) values \((.+)\)/; 
            const parteCommand = command.match(regexp);
            let tableName = parteCommand[1]
            let columns = parteCommand[2]
            let values = parteCommand[3]

            columns = columns.split(", ");
            values = values.split(", ");

            let row = {}
            for (let i = 0; i < columns.length; i++){
                const colun = columns[i];
                const value = values[i];
                row[colun] = value                
            }

            this.tables[tableName].data.push(row);
            console.log(row)
            // console.log(tableName, columns, values)
            // console.log(command)

        },
        execute(command){
            if (command.startsWith("create table")){
            return this.createTable(command)
            }


            if (command.startsWith("insert")){
                return this.insert(command)
                }

            //
            const message = `Syntax error: "${command}`
            throw new DataBaseError (command, message)
            //
            
        }
};
try {


    database.execute("create table author (id number, name string, age number, city string, state string, country string)");


    database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
    database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
    database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");


// database.createTable("create table author (id number, name string, age number, city string, state string, country string)");
// //
// database.execute("select id, name from author")
// //
console.log(JSON.stringify(database, undefined, "   "));
} catch(e) {
    console.error(e.message)
}