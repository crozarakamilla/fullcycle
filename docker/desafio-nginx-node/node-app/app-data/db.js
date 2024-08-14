const mysql = require('mysql2');

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodeapp'
}

const connection = mysql.createConnection(config);


connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id', connection.threadId);
});

module.exports = connection;