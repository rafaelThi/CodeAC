//
class DataBaseError {
    constructor(command, message){
        this.command =command;
        this.message =  message;
    }
}
//

class Parser {
    constructor(){
    this.controls = new Map();
    this.controls.set("createTable", /create table (\w+) \((.+)\)/)
    this.controls.set("insert", /insert into (\w+) \((.+)\) values \((.+)\)/)
    this.controls.set("select", /select (.+) from (\w+)(?: where (.+))?/)
    this.controls.set("delete", /delete from (\w+)(?: where (.+))?/)
    }

    parse (command){
        for (let [control, regexp] of this.controls ){
            const parsedCommand = command.match(regexp)
            if (parsedCommand){
                return {
                    control,
                    parsedCommand,           
                }
            }
        }
    }
}
//
let column;
let coluns;
//

class Database {
   constructor(){
        this.tables = {}
        this.parser = new Parser()
    }
        createTable(parsedCommand){
                    let [, tableName, columns] = parsedCommand
                   this.tables[tableName] = {
                        columns:{},
            
                    data: []
                    }
    columns = columns.split(", ");

    for (column of columns){
    coluns = column.split(" ");
    const name = coluns[0];
    const type = coluns[1];

    // console.log (name, type)

 this.tables[tableName].columns[name]=type;

}
        
        }
        insert(parsedCommand){
            let tableName = parsedCommand[1]
            let columns = parsedCommand[2]
            let values = parsedCommand[3]

            columns = columns.split(", ");
            values = values.split(", ");

            let row = {}
            for (let i = 0; i < columns.length; i++){
                const colun = columns[i];
                const value = values[i];
                row[colun] = value                
            }

            this.tables[tableName].data.push(row);
            // console.log(row)
            // console.log(tableName, columns, values)
            // console.log(command)

        }
        select(parsedCommand){
            let [,columns, tableName, whereClause] = parsedCommand;//pegando nome das colunas
             //pegando nome da tabela
            //pegando o where
            columns = columns.split(", ")//separando nome das colunas
            let rows = this.tables[tableName].data;//converter um array em outro

            if(whereClause){
                const [columnWhere, valueWhere] = whereClause.split(" = ");
                console.log(whereClause)
                rows = rows.filter(function(row){
                    return row[columnWhere] === valueWhere;
                })
        };
            rows = rows.map(function(row) {//percorrendo o array
                let selectedRow = {}//popular o objeto
                columns.forEach(function(column){
                    selectedRow[column] = row[column]

                })
                // console.log(selectedRow)
                return selectedRow;
                
                
            })
            // console.log(rows)
            return rows;
            

        }
        delete(parsedCommand){
            let [, tableName, whereClause]= parsedCommand
           if (whereClause){
                let [columnWhere, valueWhere] = whereClause.split(" = ")
                this.tables[tableName].data = this.tables[tableName].data.filter(function(row){
                    return row[columnWhere] !== valueWhere;
                })
            }else{
                this.tables[tableName].data=[];
            }      
        
        }
        execute(command){
            const result = this.parser.parse(command)
            if(result) {
                return( 
                    this[result.control] (result.parsedCommand)
                )
            }
            //
            const message = `Syntax error: "${command}`
            throw new DataBaseError (command, message)
            //
            
        }
};

try {
    const database = new Database();
    database.execute("create table author (id number, name string, age number, city string, state string, country string)");
    database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
    database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
    database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
    database.execute("delete from author where id = 2");
    console.log(JSON.stringify(database.execute("select name, age from author"), undefined, "  "));
} catch (e) {
    console.log(e.message);
}
