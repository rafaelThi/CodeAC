
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

        execute(command){
            if (command.startsWith("create table")){
            return this.createTable(command)
            }
        }
};

database.createTable("create table author (id number, name string, age number, city string, state string, country string)");
 console.log(JSON.stringify(database, undefined, "   "));