const express = require('express');
const app = express();
const port = 3000;

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'ants',
  password: '1234567890',
  database: 'password_schmischmi_com'
});

//Connect to database
connection.connect(function (err) {
  if (err) console.log("Could not connect to database");
  else console.log(`Successfully connected to database ${connection.database} with user ${connection.user}`);
});

//Starts the express server
app.listen(port, () => {
  console.log(`Server started! Listening on port ${port}`)
});

app.get('/coolman', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ user: 'David', password: 'Coulson' }));
});

//Account Login
app.post('/login/:userID/:passwordEnc', (req, res) => {
  var user = req.params.userID;
  var password = req.params.passwordEnc;
  console.log(req.params);
  //SQL
  var sqlquery = `INSERT INTO accounts (username, password) VALUES ('${user}', '${password}');`;
  connection.query(sqlquery, function (err, result){
    console.log(result);
  });
});

//Account Sign-up
app.get('/register/:userID/:passwordEnc', (req, res) => {
  var user = req.params['userID'];
  var passowrd = req.params['passwordEnc'];
  console.log(req.params);
});