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
                    let [, tableName] = busca
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
            // console.log(row)
            // console.log(tableName, columns, values)
            // console.log(command)

        },
        select(command){
            let regexp = /select (.+) from (\w+)(?: where (.+))?/
            let selected = command.match(regexp)

            let [,columns, tableName, whereClause] = selected;//pegando nome das colunas
             //pegando nome da tabela
            //pegando o where
            columns = columns.split(", ")//separando nome das colunas
            let rows = this.tables[tableName].data;//converter um array em outro

            if(whereClause){
                const [columnWhere, valueWhere] = whereClause.split(" = ");
                console.log(whereClause)
                rows = rows.filter((row)=>{
                    return row[columnWhere] === valueWhere;
                })
        };
            rows = rows.map((row) => {//percorrendo o array
                let selectedRow = {}//popular o objeto
                columns.forEach((column)=>{
                    selectedRow[column] = row[column]

                })
                // console.log(selectedRow)
                return selectedRow;
                
                
            })
            // console.log(rows)
            return rows;
            

        },
        delete(command){
            const regexp = /delete from (\w+)(?: where (.+))?/
            const dlt = command.match(regexp);
            let [, tableName, whereClause]= dlt
           if (whereClause){
                let [columnWhere, valueWhere] = whereClause.split(" = ")
                this.tables[tableName].data = this.tables[tableName].data.filter((row)=>{
                    return row[columnWhere] !== valueWhere;
                })
            }else{
                this.tables[tableName].data=[];
            }      
        
            },
        execute(command){
            if (command.startsWith("create table")){
                return this.createTable(command)
            }
            if (command.startsWith("insert")){
                return this.insert(command)
            }
            if (command.startsWith("select")){
                return this.select(command)
            }
            if (command.startsWith("delete")){
                return this.delete(command)
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

    database.execute("delete from author");

    // database.execute("select name, age from author");

    console.log(JSON.stringify(database.execute("select name, age from author"), undefined, " "))


    // console.log(JSON.stringify(database.execute("select name, age from author where id = 1"), undefined, " "))


    // database.execute("select name, age from author where id = 1");



// //insert
//     database.execute("create table author (id number, name string, age number, city string, state string, country string)");


//     database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
//     database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
//     database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");



////create
// database.createTable("create table author (id number, name string, age number, city string, state string, country string)");
// //
// database.execute("select id, name from author")
// //



// console.log(JSON.stringify(database, undefined, "   "));


} catch(e) {
    console.error(e.message)
}