import mysql from "mysql2/promise"

const db = mysql.createPool({
    host: "localhost",
    user: "back",
    password: "rrnea.@2009",
    database: "logicash"
})

export default db