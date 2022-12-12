// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

// parse application/json
app.use(bodyParser.json());

// create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your-username',
  password: 'your-password',
  database: 'my-database'
});

// connect to the database
connection.connect();

// create an endpoint for the form submission
app.post('/formulario', (req, res) => {
  // insert the form data into the database
  connection.query('INSERT INTO my-table SET ?', req.body, (error, results, fields) => {
    if (error) {
      // handle the error
      res.status(500).json({ error });
    } else {
      // return the results to the client
      res.json({ results });
    }
  });
});

// start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
