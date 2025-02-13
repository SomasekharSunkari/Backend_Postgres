import pkg from "pg"
import dotenv from "dotenv"
const { Pool } = pkg;
dotenv.config()
const pool = new Pool({
    user: process.env.PG_USERNAME,
    host: process.env.PG_URL,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
})
export default pool;