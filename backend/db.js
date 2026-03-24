import mysql from "mysql2/promise"

const db = mysql.createPool({
    host: "localhost",
    user: "back",
    password: "senha",
    database: "logicash"
})

export default db