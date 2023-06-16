const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: 5432,
    database: "zxstore"
})

pool.connect();

console.log('yeas')

module.exports = pool