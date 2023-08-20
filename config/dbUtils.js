// get the client
const mysql = require('mysql2');

// create the connection to database
async function createConnection() {
  const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'testNode'
  });

  return connection;
}

module.exports = { createConnection };
