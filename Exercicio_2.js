const database = {
    "tables": {
        "author": {
            "columns": {
                "id": "number",
                "name": "string",
                "age": "number",
                "city": "string",
                "state": "string",
                "country": "string"
            },
            data: []
        }
    }
}
console.log(JSON.stringify(database));