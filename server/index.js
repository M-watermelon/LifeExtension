const express = require('express');
const app = express();
const port = 3000;

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: ''
});


app.get('/coolman', (req, res) => {
  res.send('{"name":"David", "lastname":"Coulson"}')
});

app.listen(port, () => {
  console.log(`Server started! Listening on port ${port}`)
});
