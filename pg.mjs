import pkg from "pg"
const { Pool } = pkg;

const pool = new Pool({
    user: "postgres",
    host: "database-1.cluster-cvkamekqi3xt.us-east-1.rds.amazonaws.com",
    database: "dvdrental",
    password: "sekharamma@176",
    port: 5432

})

export default pool;