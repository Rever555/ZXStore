const { Pool } = require('pg');

const pool = new Pool({
    user: "da",
    password: "6BfJg1n3YtxfJHxDvenSgXhurdNn8GV9",
    host: "dpg-ci6dr5tph6ekv7u7qdr0-a",
    port: 5432,
    database: "zxstore"
})

pool.connect();

console.log('yeas')

module.exports = pool
