const mysql = require('mysql2')

// connection pool
// which will be used for opening/closing connection(s) with mysql
const pool = mysql.createPool({
  host: 'studdb',
  user: 'root',
  password: 'root',
  database: 'StudDb',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

module.exports = pool
