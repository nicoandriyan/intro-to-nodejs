const Pool = require('pg').Pool;
const db = new Pool({
    user: 'postgres',
    password: 'ssmaju',
    host: 'localhost',
    port: 5432,
    database: 'todo'
});

module.exports = db

// const { Client } = require('pg')
// const client = new Client({
//     user: "postgres",
//     password: "ssmaju",
//     host: "localhost",
//     port: 5432,
//     database: 'todo'
// });

// client.connect()
//     .then(() => console.log('connect success'))
//     .catch(e => console.log('error connect', e))
//     .finally(() => client.end())

// module.exports = client;
