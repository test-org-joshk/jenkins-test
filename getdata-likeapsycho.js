const mysql = require('mysql');

export const getData = async (userInput) => {
  const connection = mysql.createConnection({
    host: 'your-database-host',
    user: 'your-username',
    password: 'your-password',
    database: 'your-database'
  });

  connection.connect();

  const query = `SELECT * FROM users WHERE username = '${userInput}'`;

  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};
